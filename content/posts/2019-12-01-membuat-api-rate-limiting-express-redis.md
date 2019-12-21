---
title: "Membuat API Rate Limiting menggunakan Redis pada Express.js"
slug: membuat-api-rate-limiting-redis-express
description: "Membatasi jumlah akses API setiap menitnya menggunakan Redis pada Express.js."
date: 2019-12-01 11:00:00
author: Muhammad Syifa
icon: "/images/icons/redis.png"
cover: "/images/posts/membuat-api-rate-limiting-redis-express.png"
fullscreen: false
tags:
  - Express.js
  - Node
  - Redis
---

Beberapa waktu yang lalu, saya sempat menuliskan catatan kursus Redis saya di [Redis University](university.redislabs.com/). Tapi catatannya tidak saya lanjutkan karena ~~materi yang dibahas antar kelas yang satu dengan kelas yang lainnya banyak yang mirip-mirip~~ saya malas. Sebagai gantinya, saya akan menuliskan beberapa artikel Redis yang sekiranya banyak dibutuhkan oleh industri. Salah satunya adalah Rate Limiting ini.

Rate Limiting (dalam konteks aplikasi web) adalah proses membatasi jumlah request user/client pada resource tertentu. Sebagai contoh disini kita akan coba membatasi akses user terhadap API yang dibuat menggunakan Express.js pada setiap menitnya.

Sebelum mencoba ini, pastikan kamu sudah menginstall **[Redis](https://redis.io/)** dan **[Node.js](https://nodejs.org/en/)** terlebih dahulu. Pada tutorial ini saya menggunakan Node.js versi 10.15.3 dan Redis versi 5.0.5. Buat kamu yang pakai Windows seperti saya, kamu dapat menjalankan Redis dengan Docker.

## Kenapa Redis?

Untuk membuat Rate Limiting kita bisa saja menggunakan NginX atau session.
Tapi kenapa Redis?

* Dibandingkan dengan NginX, Rate Limiting menggunakan Redis lebih fleksibel karena kita sendiri yang mengatur logic dari Rate Limiternya.
* Performa Redis yang menggunakan penyimpanan pada RAM lebih cepat ketimbang session yang (biasanya) menggunakan file atau database lain yang menggunakan penyimpanan fisik.
* Redis mendukung banyak platform dan memiliki ketersediaan library di berbagai bahasa pemrograman.

## Persiapan

Saya akan _to-the-point_ aja disini, kalau bingung silahkan tanya saya via [facebook](https://www.facebook.com/em.sifa).

* Buka terminal atau cmd (selanjutnya saya akan sebut terminal aja).
* Buat direktori baru: `mkdir express-rate-limiting`.
* Masuk ke direktori tersebut: `cd express-rate-limiting`.
* Inisiasi file package.json: `npm init -y`.
* Install package yang dibutuhkan: `npm i -S express redis bluebird date-fns`.
* Buka terminal lain, jalankan redis-server.

Berikut sedikit penjelasan tentang package yang kita install diatas:

* `express`: untuk membuat Web API.
* `redis`: untuk koneksi dan mengirim perintah ke redis server.
* `bluebird`: untuk membuat versi Promise pada setiap API/function di package redis.
* `date-fns`: untuk format tanggal.

## Konsep

Goal pada aplikasi yang akan kita buat disini adalah untuk
membatasi akses ke endpoint `GET /hello` supaya setiap IP
hanya dapat mengakses sebanyak 10 kali saja setiap menitnya.

Untuk mencapai goal tersebut, kita akan memanfaatkan 3 perintah redis, yaitu:

* `GET`: untuk mengambil nilai dari key.
* `INCR`: untuk increment nilai numerik dari key.
* `EXPIRE`: untuk set expiration key supaya nilai dari keynya otomatis hilang dalam kurun waktu tertentu, sehingga tidak membebani memori berkepanjangan. Istilah kerennya _time-based retention_.

Pemanfaatannya adalah sebagai berikut:

* Ambil jumlah akses (nilai numerik) dari key menggunakan `GET`.
* Jika jumlah akses melebihi batas (10):
  * Kirim response error 429 (Too Many Requests).
* Jika jumlah akses dibawah atau sama dengan batas (10):
  * Increment nilai dari key menggunakan `INCR`.
  * Set expire dari key menggunakan `EXPIRE`.
  * Kirim response sukses.

Supaya <u>setiap IP</u> hanya boleh mengakses <u>path tertentu</u> pada <u>setiap menitnya</u>.
Kita akan membuat keynya dengan format seperti ini:

```js
{IP}:{PATH}:{TAHUN}{BULAN}{TANGGAL}:{JAM}{MENIT}
```

Contoh jika IP `1.2.3.4` mengakses `"/hello"` pada `2019-12-01 10:15:25`. Keynya akan seperti ini:

```bash
1.2.3.4:/hello:20191201:1015
```

Sebagai gambaran, berikut adalah table skenario request yang dijalankan oleh `1.2.3.4` ke path `/hello` pada waktu tertentu:

<div class="table-responsive">

**No.**|**Waktu**|**Key**|**Value**|**Hasil**
:-----:|:-----:|:-----:|:-----:|:-----:
1|2019-12-01 10:01:00|1.2.3.4:/hello:20191201:1001|1|<strong class="text-green-500">sukses</strong>
2|2019-12-01 10:01:01|1.2.3.4:/hello:20191201:1001|2|<strong class="text-green-500">sukses</strong>
3|2019-12-01 10:01:05|1.2.3.4:/hello:20191201:1001|3|<strong class="text-green-500">sukses</strong>
4|2019-12-01 10:01:12|1.2.3.4:/hello:20191201:1001|4|<strong class="text-green-500">sukses</strong>
5|2019-12-01 10:01:16|1.2.3.4:/hello:20191201:1001|5|<strong class="text-green-500">sukses</strong>
6|2019-12-01 10:01:18|1.2.3.4:/hello:20191201:1001|6|<strong class="text-green-500">sukses</strong>
7|2019-12-01 10:01:19|1.2.3.4:/hello:20191201:1001|7|<strong class="text-green-500">sukses</strong>
8|2019-12-01 10:01:21|1.2.3.4:/hello:20191201:1001|8|<strong class="text-green-500">sukses</strong>
9|2019-12-01 10:01:25|1.2.3.4:/hello:20191201:1001|9|<strong class="text-green-500">sukses</strong>
10|2019-12-01 10:01:30|1.2.3.4:/hello:20191201:1001|10|<strong class="text-green-500">sukses</strong>
11|2019-12-01 10:01:36|1.2.3.4:/hello:20191201:1001|11|<strong class="text-red-500">error</strong>
12|2019-12-01 10:01:40|1.2.3.4:/hello:20191201:1001|11|<strong class="text-red-500">error</strong>
13|2019-12-01 10:<strong class="bg-gray-200 text-gray-800">02</strong>:05|1.2.3.4:/hello:20191201:10<strong class="bg-gray-200 text-gray-800">02</strong>|<strong class="bg-gray-200 text-gray-800">1</strong>|<strong class="text-green-500">sukses</strong>

</div>

## Implementasi

Sekarang saatnya masuk ke _text editor_ atau _IDE_ favorit kamu.
Pertama-tama silahkan buat file `app.js` pada direktori yang sama dengan file `package.json`.
Lalu kita akan masuk ke tahap berikutnya.

#### 1. Import Package

Sebelum menuliskan _app logic_-nya, mari kita import dulu _package_ yang sudah kita install sebelumnya.

Isikan kode seperti dibawah ini pada file `app.js` kamu:

```js
const { format } = require('date-fns')
const express = require('express')
const bluebird = require('bluebird')
const redis = require('redis')
```

#### 2. Promisify

Pada tahap ini kita akan menggunakan bluebird untuk menambahkan _Promise-based_ function pada setiap API/function yang tersedia pada _package_ redis.

Silahkan tambahkan baris berikut setelah _require-require_ sebelumnya.

```js
bluebird.promisifyAll(redis)
```

> Promise-based function berfungsi untuk menghindari [callback-hell](http://callbackhell.com/)

#### 3. Membuat dan Menghubungkan Redis Client

Selanjutnya, untuk dapat mengirimkan perintah ke redis-server, kita perlu membuat dan menghubungkan redis client terlebih dahulu.

Tambahkan baris berikut dibawah tahap sebelumnya:

```js
const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
})
```

Kalau sudah, kamu dapat test koneksi menggunakan terminal dengan perintah:

```bash
node app
```

Tunggu sebentar, kalau muncul error `ECONNREFUSED`, kemungkinannya:

* Redis server belum running
* Hostnya salah
* Portnya salah

Silahkan cek dan sesuaikan lagi.

#### 4. Inisiasi Express App

Setelah koneksi redis client berhasil, saatnya kita membuat aplikasi webnya.

Lanjut dibawah kode sebelumnya. Ketikkan kode berikut:

```js
const port = 3000     // definisikan port
const app = express() // inisiasi web app

// Daftarkan endpoint "GET /hello"
app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

// Jalankan web app
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
```

---

<details><summary>Kode keseluruhan pada tahap ini:</summary>
<p>

```js
const { format } = require('date-fns')
const express = require('express')
const bluebird = require('bluebird')
const redis = require('redis')

bluebird.promisifyAll(redis)

const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
})

const port = 3000     // definisikan port
const app = express() // inisiasi web app

// Daftarkan endpoint "GET /hello"
app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

// Jalankan web app
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
```

</p>
</details>

---

#### 5. Menerapkan Rate Limiting pada Endpoint "GET /hello"

Pada tahap ini kita akan memanfaatkan redis client untuk membatasi akses ke endpoint `GET /hello`
supaya setiap IP hanya dapat mengakses sebanyak 10 kali saja pada setiap menitnya.

Silahkan ubah `app.get('/hello', ...)` pada tahap sebelumnya menjadi seperti ini (pahami penjelasan baris-per-baris):

```js
app.get('/hello', async (req, res) => {
  const limit = 10      // limit akses setiap menitnya
  const path = '/hello' // path dari API
  const time = format(new Date(), 'yyyyMMdd:HHmm') // waktu untuk dijadikan key  
  
  // Set redis key yang digunakan untuk menyimpan 
  // jumlah akses oleh IP: req.ip, untuk path: path, pada menit: time
  const key = `${req.ip}:${path}:${time}` 

  // Ambil jumlah akses saat ini
  const count = parseInt(await client.getAsync(key))
  // Kalau jumlah akses melebihi limit ...
  if (count > limit) {
      // ... kirim response error 429
    return res.status(429).json({
      error: 429,
      message: `API rate limit exceeded`
    })
  }

  // Jalankan transaction untuk:
  const trx = client.multi()
  trx.incr(key)         // 1. increment key
  trx.expire(key, 60)   // 2. set expire key 60 detik
  await trx.execAsync()

  // Kirim response yang seharusnya
  res.json({
      message: 'Hello world'
  })
})
```

Hmm, panjang juga ya. Kalau belum paham, baca ulang lagi aja sampai paham.

Pada saat mengeset variable `key`, kamu dapat sesuaikan sesuai kebutuhan kamu.
Misal untuk IP diatas dapat kamu ganti dengan token.
Atau misal kamu mau batasinya per jam, kamu dapat ubah format`time`-nya menjadi `yyyyMMdd:HH` aja.
Atau misalkan lagi kamu mau batasi secara global, bukan hanya pada path `/hello` aja,
kamu dapat hilangkan informasi `path` pada `key`-nya.


---

<details><summary>Kode keseluruhan pada tahap ini:</summary>
<p>

```js
const { format } = require('date-fns')
const express = require('express')
const bluebird = require('bluebird')
const redis = require('redis')

bluebird.promisifyAll(redis)

const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
})

const port = 3000     // definisikan port
const app = express() // inisiasi web app

// Daftarkan endpoint "GET /hello"
app.get('/hello', async (req, res) => {
  const limit = 10      // limit akses setiap menitnya
  const path = '/hello' // path dari API
  const time = format(new Date(), 'yyyyMMdd:HHmm') // waktu untuk dijadikan key  
  
  // Set redis key yang digunakan untuk menyimpan 
  // jumlah akses oleh IP: req.ip, untuk path: path, pada menit: time
  const key = `${req.ip}:${path}:${time}` 

  // Ambil jumlah akses saat ini
  const count = parseInt(await client.getAsync(key))
  // Kalau jumlah akses melebihi limit ...
  if (count > limit) {
    // ... kirim response error 429
    return res.status(429).json({
      error: 429,
      message: `API rate limit exceeded`
    })
  }

  // Jalankan transaction untuk:
  const trx = client.multi()
  trx.incr(key)         // 1. increment key
  trx.expire(key, 60)   // 2. set expire key 60 detik
  await trx.execAsync()

  // Kirim response yang seharusnya
  res.json({
    message: 'Hello world'
  })
})

// Jalankan web app
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
```

</p>
</details>

---

#### 6. Cobain

Sampai sini, rate limiting kita sudah jadi.
Silahkan jalankan kembali perintah `node app` pada terminal.
Kemudian buka web browser, bukalah URL `http://localhost:3000/hello`.

Seharusnya, pada 10 request pertama kamu akan mendapatkan response seperti ini:

```json
{
  "message": "Hello World"
}
```

Sedangkan pada request selanjutnya, kamu akan mendapatkan response seperti ini:

```json
{
  "error": 429,
  "message": "API rate limit exceeded"
}
```

Lalu coba tunggu 1 menit, kemudian akses `/hello` lagi. Responsenya akan kembali seperti ini:

```json
{
  "message": "Hello World"
}
```


Artinya rate-limiting kita sudah berhasil membatasi 10 kali akses pada setiap menitnya.

## Penutup

Sampai sini saya harap kamu sudah paham tentang Rate Limiting, serta penerapan Rate Limiting menggunakan Redis (khususnya) pada Express.js. Untuk bahasa dan framework lain, tahapannya kurang/lebih sama.
Yaitu kamu cukup memanfaatkan perintah `get`, `incr` dan `expire` pada Redis client di bahasa/framework itu.

Sebagai bonus, dibawah ini saya lampirkan kode middleware dari penerapan Rate Limiting kita diatas.
Dengan middleware ini, kamu dapat menerapkan rate-limiting ke berbagai endpoint cukup dengan 1 baris pemanggilan fungsi middleware ini.

---

<details><summary>BONUS</summary>
<p>

```js
const { format } = require('date-fns')
const express = require('express')
const bluebird = require('bluebird')
const redis = require('redis')

bluebird.promisifyAll(redis)

const client = redis.createClient({
  host: '127.0.0.1',
  port: 6379
})

const port = 3000     // definisikan port
const app = express() // inisiasi web app

// Middleware rate limit per menit
const rateLimitPerMinute = (limit, path) => {
  return async (req, res, next) => {
    const time = format(new Date(), 'yyyyMMdd:HHmm')
    const key = `${req.ip}:${path || req.path}:${time}`
    
    const count = parseInt(await client.getAsync(key))
    if (count > limit) {
      return res.status(429).json({
        error: 429,
        message: `API rate limit exceeded`
      })
    }
    
    const mul = client.multi()
    mul.incr(key)
    mul.expire(key, 60)
    await mul.execAsync()

    next()
  }
}

// Daftarkan endpoint "GET /hello"
app.get('/hello', rateLimitPerMinute(10), async (req, res) => {
  res.json({
    message: 'Hello world'
  })
})

// Jalankan web app
app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
})
```

</p>
</details>

---

Yaudah sekian dulu artikel kali ini. Semoga bermanfaat. Dadah ~
