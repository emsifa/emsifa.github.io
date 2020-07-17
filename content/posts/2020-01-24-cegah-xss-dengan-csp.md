---
title: "Cegah XSS dengan Content-Security-Policy"
slug: cegah-xss-dengan-csp
description: "Gunakan CSP untuk mencegah browser eksekusi script dari sumber yang tidak diinginkan"
date: 2020-01-24 11:00:00
author: Muhammad Syifa
icon: "/images/icons/www.png"
cover: "/images/posts/csp-cover.png"
fullscreen: false
tags:
  - Web
  - XSS
---

Kemarin lusa (1/22), saya menerima laporan dari admin website kementerian yang saya buat kalau
webnya mengalami kendala hanya menampilkan _preloader_ saja. Setelah saya cek melalui _devtools browser_, 
pada bagian console, saya mendapati kalau _browser_ tidak diizinkan untuk me-_load_ _javascript_, _css_, maupun _font_ yang berasal
dari [cdnjs](https://cdnjs.com) dan [unpkg](https://unpkg.com). Alhasil sebagian script yang dibutuhkan 
tidak di-_load_, yaudah, rusak deh. Kurang lebih penampakan errornya (di Firefox) kayak gini:

![CSP Error](/images/posts/ss-csp-error.png)

Ternyata sebelumnya dari pihak IT pusat sana, web servernya baru disetting untuk mengirimkan _header_ `Content-Security-Policy` yang berisikan _whitelist_ _host_ mana saja yang diperbolehkan untuk di-_load_ oleh website-website yang berada pada server naungan mereka, dan _cdnjs.cloudflare.com_ serta _unpkg.com_ tidak terdaftar dalam _whitelist_ tersebut. Karena saya cuma dikasih akses ke sebagian fitur _cpanel_-nya aja, alhasil yang saya lakukan adalah mengunduh semua _resource_ pada _CDN_, dan mengunggahnya ke server mereka, lalu mengubah kode _HTML_ dari yang tadinya load ke _URL_ _CDN_ menjadi load ke _URL_ website itu sendiri.

Apa yang dilakukan IT pihak pusat memang sudah benar, yaitu mencegah potensi _XSS_ dari berbagai website yang dikembangkan berbagai developer (dan vendor) yang hosting websitenya ke server mereka, dimana jika ada salah satu website saja _vuln_, maka website lain bisa terpengaruh karenanya.

Setelah kejadian ini saya baca-baca lagi tentang ***Content-Security-Policy (CSP)***, dan ~~supaya menjadi manfaat~~ karena blog saya udah lama ga update, saya tulis sekalian disini.

> Setelah ini saya akan singkat ***Content-Security-Policy*** menjadi ***CSP*** saja.

## Apa itu _CSP_?

_CSP_ adalah _HTTP Response Header_ atau _Meta Tag_ untuk mengatur **resource dari sumber mana saja**
yang diperbolehkan untuk dieksekusi oleh _web browser_ (yang [mendukung _CSP_](https://caniuse.com/#search=CSP) tentunya).

Yang dimaksud _resource_ disini itu ya [_web resource_](https://en.wikipedia.org/wiki/Web_resource), seperti _javascript_, _css_, _font_, _image_, _video_, _audio_, dsb.

Dengan _CSP_ kita dapat meminimalisir potensi-potensi serangan XSS pada website kita dengan memerintahkan _browser_ untuk jangan me-_load_ dan mengeksekusi _resource_ dari sumber yang tidak kita inginkan.

## Apa yang Bisa Kita Lakukan dengan _CSP_?

Dengan memberikan _CSP_ ke halaman web kamu, kamu dapat:

* Mencegah _browser_ untuk mengeksekusi _inline script_ (_javascript_ di _HTML_).
* Mencegah _browser_ untuk mengeksekusi `eval`.
* Mencegah _browser_ untuk mengeksekusi _inline style_.
* Mencegah _browser_ untuk mengeksekusi _script_, _css_, _font_, gambar, video, suara, dsb diluar host yang kita tentukan.
* Mencegah _browser_ untuk submisi form yang `action`-nya menuju ke host yang tidak kita daftarkan.
* Mencegah _browser_ untuk menjalankan _Ajax_, maupun _WebSocket_ diluar host yang kita tentukan.
* dll.

## Bagaimana _CSP_ dapat Mencegah _XSS_?

Serangan _XSS_ umumnya berasal dari form yang disubmit oleh user, yang kemudian isian dari form tersebut di-_render_ ke user lain sebagai kode _HTML_ (tidak di-_escaping_).

Contoh sederhananya adalah form komentar. Misalkan ada user memasukkan kode `<script>alert('oi')</script>` pada kolom komentar,  dan _server-side_ tidak melakukan _escaping_ terhadap data komentar tersebut, yang terjadi saat komentar tersebut di-_render_ ke user lain adalah _browser_ akan mengeksekusi _inline script_-nya dan menampilkan alert ke user.

Dengan _CSP_, kita dapat menghindari hal ini dengan cara memerintahkan browser untuk jangan eksekusi _inline script_, melalui _response header_ ataupun _meta tag_ si _CSP_. Jadi sekalipun developer khilaf tidak melakukan _escaping_, serangan _XSS_ dapat dihindari.

Benefitnya akan sangat terasa kalau kamu punya website atau sedang mengelola server yang memiliki puluhan sampai ratusan halaman yang menampilkan data hasil inputan form didalamnya. Dengan _CSP_ kamu cukup setting http server kamu (_nginx_/_apache_/dsb) untuk mengirimkan header _CSP_, dan _boom!_ kamu tidak perlu lagi khawatir tentang _XSS_. Tapi sebelum melakukan ini, lebih baik kamu komunikasikan dulu hal ini ke tim developer, supaya ga ada kejadian seperti saya yang mengalami error saat production karena menggunakan _resource_ dari sumber yang tidak "direstui".

## Penulisan _CSP_

Seperti yang sudah saya bilang sebelumnya, _CSP_ dapat kita tuliskan pada _response header_, ataupun _meta tag_.
Hanya saja, artikel yang saya baca di halaman [Google Developers](https://developers.google.com/web/fundamentals/security/csp#the_meta_tag) lebih menyarankan menggunakan _response header_. Jadi disini saya akan mencontohkan menggunakan _response header_ saja.

Untuk penulisan _header CSP_, formatnya adalah sebagai berikut:

```http
Content-Security-Policy: <policy-directive-1>; <policy-directive-2>; <policy-directive-n>
```

Sedangkan untuk penulisan `<policy-directive>` formatnya adalah seperti ini:

```http
<directive-a> <source-1> <source-2> <source-n>
```

Sebagai contoh, jika kita hanya memperbolehkan _load_ _script_ dan _css_ dari `web-a.com` dan `web-b.com`,
kita dapat menuliskan _CSP_ seperti ini:

```http
Content-Security-Policy: script-src https://web-a.com https://web-b.com; style-src https://web-a.com https://web-b.com
```

Pada contoh diatas kita menggunakan _directive_ `script-src` dan `style-src`.
Dibawah ini adalah daftar beberapa _directive_ yang dapat kamu gunakan:

* `connect-src `: membatasi akses ajax (_XMLHttpRequest_), _WebSocket_, dan _EventSource_.
* `font-src`: membatasi akses font.
* `img-src`: membatasi akses image.
* `script-src`: membatasi akses script.
* `style-src`: membatasi akses style (css).
* `media-src`: membatasi akses video dan audio.
* `worker-src`: membatasi akses service worker.
* `child-src`: membatasi akses iframe dan worker.
* `form-action`: membatasi `action` dari form.
* `default-src`: kalau kamu malas jabarkan satu-persatu, kamu bisa gunakan ini untuk membatasi semua hal diatas.

Daftar diatas bisa saja bertambah atau berubah suatu saat, untuk itu, selebihnya bisa kamu pelajari sendiri pada artikel [_CSP_ di Google Developers](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources) atau panduan [_CSP_ di MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy#Directives).

Selanjutnya, selain mendaftarkan _host_ apa saja yang diperbolehkan, _CSP_ juga memiliki beberapa keyword yang dapat kamu gunakan sebagai `<source>` seperti dibawah ini:

* `'self'`: untuk memperbolehkan _browser_ load resource dari domain yang sama dengan website di-_load_.
* `'unsafe-inline'`: untuk memperbolehkan _browser_ mengeksekusi _inline script_ ataupun _inline style_.
* `'unsafe-eval'`: untuk memperbolehkan _browser_ mengeksekusi fungsi javascript `eval`.
* `'none'`: jika kamu tidak memperbolehkan _browser_ load resource dari sumber manapun.

> Keyword diatas harus kamu tulis dengan menyertakan tanda petik tunggal.

## Contoh Penerapan _CSP_

Pada bagian ini saya menuliskan contoh-contoh _CSP_ umum yang mungkin banyak orang butuhkan.
Disini dimisalkan saya _host_ halaman-halaman contoh ini pada `https://www.emsifa.com`.

> Disini saya akan menggunakan PHP supaya lebih ringkas aja.

#### 1. Memperbolehkan Semua Jenis Resource dari Domain yang Sama

Dari kebutuhan diatas, kita dapat terjemahkan menjadi:

* Semua Jenis Resource: `default-src`
* Dari Domain yang Sama: `'self'`

Jadi penerapan _CSP_-nya adalah sebagai berikut:

```php
<?php

>header("Content-Security-Policy: default-src 'self'");

?>
<html>
<body>
  <script src="https://www.emsifa.com/js/app.js"></script>
  <script src="https://cdnjs.cloudflare.com/jquery/jquery.min.js"></script>
  <script>alert('hello')</script>
</body>
</html>
```

Pada contoh diatas, script `app.js` akan di-_load_ dan dieksekusi oleh browser, sedangkan script jQuery tidak akan dieksekusi karena berada pada host `cdnjs.cloudflare.com`, dan script `alert('hello')` dibawahnya juga tidak akan dieksekusi karena kita tidak mendaftarkan `'unsafe-inline'` pada header CSP.

#### 2. Memperbolehkan Semua Jenis Resource dari Sumber yang Sama dan CDN.js

Dari kebutuhan diatas, kalau kita terjemahkan kedalam CSP, menjadi:

* Semua Jenis Resource: `default-src`
* Sumber yang sama dan CDN.js: `'self' https://cdnjs.cloudflare.com`

Kalau kita terapkan ke _CSP_ akan menjadi:

```php
<?php

>header("Content-Security-Policy: default-src 'self' https://cdnjs.cloudflare.com");

?>
<html>
<body>
  <script src="https://www.emsifa.com/js/app.js"></script>
  <script src="https://cdnjs.cloudflare.com/jquery/jquery.min.js"></script>
  <script>alert('hello')</script>
</body>
</html>
```

Pada contoh diatas, `app.js` dan jQuery akan di-_load_ oleh _browser_, sedangkan script `alert('hello')` tetap diblokir oleh _browser_.

#### 3. Hanya Memperbolehkan _Script_, _CSS_, dan _Image_ dari _Hosting_ Sendiri, tidak Memperbolehkan Video dan Audio Apapun, tapi memperbolehkan Embed Video Youtube

Oke, kita coba terjemahkan dulu kebutuhan diatas:

* Hanya Memperbolehkan Script CSS dan Image dari Hosting sendiri: artinya kita memerlukan 3 buah directive yaitu `script-src`, `style-src`, dan `img-src` yang memperbolehkan `'self'`.
* Tidak memperbolehkan Video dan Audio Apapun: artinya kita perlu menuliskan directive `media-src` menjadi `'none'`.
* Tapi memperbolehkan Embed Video Youtube: artinya kita perlu menuliskan directive `child-src` ke `https://youtube.com`.

Kalau kita terapkan ke header _CSP_ menjadi seperti ini:

```php
<?php

>header("Content-Security-Policy: script-src 'self'; style-src 'self'; img-src: 'self'; media-src 'none'; child-src https://youtube.com");

?>
<html>
<head>
  <link rel="stylesheet" href="https://www.emsifa.com/css/style.css"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/bootstrap/css/bootstrap.min.css"/>
  <style>
    img { width: 100px; }
  </style>
</head>
<body>
  <img src="https://www.emsifa.com/img/logo.png"/>
  <img src="https://www.w3schools.com/img/logo.png"/>

  <iframe width="560" height="315" src="https://www.youtube.com/embed/pTGRpH2dvRM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <script src="https://www.emsifa.com/js/app.js"></script>
  <script src="https://cdnjs.cloudflare.com/jquery/jquery.min.js"></script>
  <script>alert('hello')</script>
</body>
</html>
```

Dari seluruh resource pada kode HTML diatas, hasilnya adalah seperti ini:

1. style `https://www.emsifa.com/css/style.css`: ✔.
2. style `https://cdnjs.cloudflare.com/bootstrap/css/bootstrap.min.css`: ❌.
3. inline style `img {width: 100px}`: ❌.
4. image `https://www.emsifa.com/img/logo.png`: ✔.
5. image `https://www.w3schools.com/img/logo.png`: ❌.
6. iframe `https://www.youtube.com/embed/pTGRpH2dvRM`: ✔.
7. script `https://www.emsifa.com/js/app.js`: ✔.
8. script `https://cdnjs.cloudflare.com/jquery/jquery.min.js`: ❌.
9. inline script `alert('hello')`: ❌.

## Penutup

Jadi seperti itulah _CSP_, bagaimana penulisannya, serta beberapa contohnya.
Artikel ini saya adaptasi dari 2 link dibawah ini:

* [https://developers.google.com/web/fundamentals/security/csp](https://developers.google.com/web/fundamentals/security/csp)
* [https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

Yaudah, sekian dulu artikel kali ini. Semoga bermanfaat, dah ~ 
