---
title: "TLDR; Go Get ke Private Repository"
slug: tldr-setup-git-private-repository
description: ""
date: 2021-11-11 09:12:32
author: Muhammad Syifa
icon: "/images/icons/go.png"
cover: "/images/posts/cover-go-get-privatelib.png"
tags:
    - Go
    - TLDR
---

Saat membuat _microservice_ menggunakan _Go_ a.k.a _Golang_, seringkali kita membutuhkan _private library_ untuk digunakan di berbagai _service_. Agar dapat menjalankan `go get` ke _private library_ tersebut, dibutuhkan _setup_ tambahan.

Btw cara ini saya dapat dari [artikel ini](https://letscode.blog/2021/06/26/go-modules-and-private-git-repositories/).
Disini saya tidak akan jelaskan maksud step-by-step, jadi kalau bingung lihat aja artikel tersebut.

Sebagai contoh, disini ceritanya saya ingin menggunakan private library di `github.com/emsifa/privatelib`.

## 1. Tambahkan env `GOPRIVATE`

```js
go env -w GOPRIVATE=github.com/emsifa/privatelib
```

Bisa juga pakai _wildcard_ kalau kamu punya banyak _private repo_:

```js
go env -w GOPRIVATE=github.com/emsifa/*
```

Atau pakai separator sebagai berikut:

```js
go env -w GOPRIVATE=github.com/emsifa/*,bitbucket.org/emsifa/*
```

## 2. Config Git Global URL

```
git config --global url."git@github.com:emsifa/privatelib.git".insteadOf "https://github.com/emsifa/privatelib"
```

Kode di atas maksudnya kita tambahin semacam alias/proxy ke `~/.gitconfig`, kalau `go mod` mau akses "https://github.com/emsifa/privatelib", requestnya diarahkan ke "git@github.com:emsifa/privatelib.git".

Karena disitu pakai URL git (bukan https), jadi harus punya akses [SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

> Step ini ga bisa pakai wildcard ya, jadi kalau mau gunain beberapa repo harus daftarin 1-1

## 3. Cobain

Sekarang di semua aplikasi Go kamu, kamu :

```js
go get github.com/emsifa/privatelib
```

Udah gitu doang.
