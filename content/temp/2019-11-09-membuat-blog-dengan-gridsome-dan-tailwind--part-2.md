---
title: "Membuat Blog dengan Gridsome dan Tailwind Part 2"
slug: membuat-blog-dengan-gridsome-dan-tailwind--part-2
description: "Part 2: Setup Project"
date: 2019-11-09 15:00:00
author: Muhammad Syifa
icon: "/images/icons/gridsome-tailwind.png"
cover: "/images/posts/membuat-blog-dengan-gridsome-dan-tailwind--part-1.png"
fullscreen: false
tags:
    - Gridsome
    - Vue
---

Ini adalah artikel kedua dari seri **Membuat Blog dengan Gridsome dan Tailwind.css**,
pada bagian ini pembahasannya adalah:

1. Install Gridsome
2. Membuat Project Baru
3. Setup Tailwind.css

## Install Gridsome

Untuk menginstall Gridsome, pastikan kamu sudah menginstall Node.js setidaknya versi 8.0.
Kalau kamu tidak yakin, kamu bisa mengeceknya dengan cara membuka cmd atau terminal, lalu ketikkan:

```bash
node --version
```

Jika versi Node.js sudah memenuhi persyaratan, selanjutnya kamu bisa menginstall Gridsome dengan perintah:

```bash
npm install --global @gridsome/cli
```

Kemudian tunggu hingga instalasi selesai. Jika sudah, kamu bisa pastikan instalasi berhasil dengan menjalankan perintah:

```bash
gridsome --version
```

## Membuat Project Baru

Untuk membuat project Gridsome baru, kembali ke cmd, kemudian jalankan perintah:

```bash
gridsome create blogku 
```

Gridsome akan generate direktori `blogku` berisi source code starter Gridsome, kemudian menginstall dependencies yang dibutuhkan.

Setelah selesai, kamu bisa running development server dengan cara

```bash
 # masuk ke direktori blogku
cd blogku

# jalankan development server
gridsome develop
```

Selanjutnya kamu dapat mengakses development server pada URL:

```bash
http://localhost:8080
```

Kalau kamu mau mengintip GraphQL explorer, kamu dapat melihatnya pada URL:

```bash
http://localhost:8080/___explore
```

Pada Gridsome versi 0.2.1 milik saya, setelah menjalankan tahapan-tahapan diatas,
tampilan `http://localhost:8080`-nya adalah seperti ini:

![Tampilan index page]()

## Setup Tailwind.css
