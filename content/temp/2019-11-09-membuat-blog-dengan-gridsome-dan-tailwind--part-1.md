---
title: "Membuat Blog dengan Gridsome dan Tailwind Part 1"
slug: membuat-blog-dengan-gridsome-dan-tailwind--part-1
description: "Part 1: Pengenalan Gridsome"
date: 2019-11-09 11:00:00
author: Muhammad Syifa
icon: "/images/icons/gridsome-tailwind.png"
cover: "/images/posts/membuat-blog-dengan-gridsome-dan-tailwind--part-1.png"
fullscreen: false
tags:
    - Gridsome
    - Vue
---

Ini adalah artikel pertama dari seri **Membuat Blog dengan Gridsome dan Tailwind.css**,
pada part 1 ini saya ingin membahas teori pendukung untuk praktik di part selanjutnya.

Sebagian besar konten di part 1 ini adalah hasil terjemahan dari [dokumentasinya](https://gridsome.org/docs/) Gridsome
yang saya rangkum kedalam 1 halaman. Buat kamu yang ingin baca versi lebih lengkapnya silahkan ke halaman tersebut.

## Apa itu Gridsome?

Gridsome adalah framework berbasis Vue.js yang gratis dan bersumber terbuka (_open source_)
untuk membuat website dan aplikasi yang _fast by default_. 

Gridsome disebut _fast by default_ karena beberapa hal dibawah ini:

* Pre-rendered HTML.
* Automatic Code Splitting.
* Menggunakan PRPL-pattern.
* Smart Link Prefetching.
* Progressive images.
* Vue.js SPA.

Dan berikut ini adalah penjelasan dari masing-masing poin diatas:

#### Pre-Rendered HTML

Gridsome mengubah kode Vue, javascript lalu men-generate setiap halaman
dan assets yang dibutuhkan menjadi file statis. 
Karena sifatnya yang statis, website hasil build Gridsome
dapat dihosting dimanapun, seperti Github Page, Netlify, bahkan pada CDN.

Beberapa keuntungan dari website statis antara lain:

* Performa lebih baik, karena tidak membutuhkan peran server-side scripting untuk generate konten.
* Keamanan lebih baik, lagi-lagi karena tidak memerlukan peran server-side scripting yang outputnya didasari oleh inputan dari user.
* Lebih hemat, dan mudah di scaling. Website yang kamu lihat sekarang ini adalah hasil build Gridsome yang saya hosting di Github Page, dan ini gratis!

#### Automatic Code Splitting

Setiap statement `import` yang dideklarasikan pada halaman Gridsome hanya akan diimport pada halaman tersebut.
Seringkali kita membundle semua assets dan meload asset tersebut pada semua halaman, yang artinya setiap 
halaman akan meload asset yang sama yang mungkin beberapanya tidak mereka butuhkan.

#### PRPL Pattern

PRPL adalah pola untuk menyusun dan melayani Progressive Web Apps (PWA),
dengan penekanan pada kinerja pengiriman dan peluncuran aplikasi.

PRPL sendiri adalah singkatan dari:

* **P**ush critical resources for the initial URL route.
* **R**ender initial route.
* **P**re-cache remaining routes.
* **L**azy-load and create remaining routes on demand.

Lebih lengkap tentang PRPL Pattern dapat kamu baca
pada artikelnya Addy Osmani [disini](https://developers.google.com/web/fundamentals/performance/prpl-pattern/).

#### Smart Link Prefetching

Gridsome memiliki komponen `<g-link>` yang memungkinkan Gridsome melakukan fetch link internal 
pada background sehingga saat kamu klik link tersebut, Gridsome akan menampilkan konten halaman
tersebut tanpa reload halaman sebagaimana website statis pada umumnya.

#### Progressive Images

Gridsome memiliki komponen `<g-image>` yang akan mengoptimalkan gambar saat production.

#### Vue.js SPA

Perintah `gridsome build` generate file HTML yang _SEO-friendly_ yang dapat dihosting dimanapun.
File HTML tersebut dioptimasi untuk dapat diload secepat mungkin. Setelah HTML selesai diload,
Vue.js akan mengambil alih HTML tersebut dan mengubahnya menjadi Vue SPA (Single Page Application).

## Cara Kerja Gridsome

Gridsome generate kode HTML yang akan ditransformasi menjadi Vue SPA saat selesai diload oleh browser.

Kode plugin melakukan fetching konten dari file lokal atau API eksternal dan menyimpannya kedalam data di database lokal.
Kemudian data-data tersebut dapat kamu akses melalui GraphQL dan kamu gunakan pada komponen Vue.js.

![How gridsome works](https://gridsome.org/assets/static/how-it-works.cbab2cf.4e7860c.png)

Ada 2 cara untuk menjalankan Gridsome:

1. Melaui perintah `gridsome develop` untuk menjalankan development server.
2. Melalui perintah `gridsome build` untuk generate file statis yang siap dideploy.

#### Gridsome Develop

Perintah `gridsome develop` digunakan untuk menjalankan development server dengan
HOT-reloading yang akan melakukan perubahan di browser secara realtime setiap kali kamu
mengubah sesuatu pada file tertentu.

Secara default kamu dapat mengakses development server pada `localhost:8080`
dan mencoba-coba GraphQL pada `localhost:8080/___explore`.

Yang terjadi saat kamu melakukan `gridsome develop` adalah sebagai berikut:

1. Initialize: gridsome membaca konfigurasi, melakukan inisiasi plugin, dsb.
2. Load sources: plugin fetch data dan mengupdate penyimpanan internal.
3. Create GraphQL schema: gridsome generate skema GraphQL dari setiap node di penyimpanan internal.
4. Generate Code: gridsome generate runtime code seperti routes, plugin, dsb.
5. Bootstrap finish: membuat antrian untuk render setiap page dan template.

#### Gridsome Build

Perintah `gridsome build` digunakan untuk generate file statis yang siap dideploy ke hosting.

Berikut adalah hal-hal yang dilakukan Gridsome saat menjalankan perintah `gridsome build`:

1. Initialize: gridsome membaca konfigurasi, melakukan inisiasi plugin, dsb.
2. Load sources: plugin fetch data dan mengupdate penyimpanan internal.
3. Create GraphQL schema: gridsome generate skema GraphQL dari setiap node di penyimpanan internal.
4. Generate Code: gridsome generate runtime code seperti routes, plugin, dsb.
5. Bootstrap finish: membuat antrian untuk render setiap page dan template.
6. Run GraphQL: mengeksekusi `page-query` dan menyimpan hasilnya pada file JSON.
7. Compile assets: menjalankan webpack untuk compile asset yang siap produksi.
8. Render HTML: render semua halaman dan template menjadi file statis.
9. Process files: file lokal disalin kedalam folder `dist`.
10. Process images: gambar lokal akan diproses dan disalin kedalam folder `dist`.

## Penutup

Jadi seperti itulah sedikit penjelasan tentang Gridsome.
Pada bagian selanjutnya saya akan membahas tentang setup project blog dari 0 dengan Gridsome dan Tailwind.css.

Akhir kata, sekian, dan sampai jumpa pada artikel berikutnya. :)
