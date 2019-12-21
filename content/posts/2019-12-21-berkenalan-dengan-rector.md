---
title: "Berkenalan dengan Rector — PHP Reconstructor Tool"
slug: berkenalan-dengan-rector
description: "Upgrade dan refactoring kode PHP kamu secara instan"
date: 2019-12-21 11:00:00
author: Muhammad Syifa
icon: "/images/icons/php.png"
cover: "/images/posts/rector-cover.png"
fullscreen: false
tags:
  - PHP
  - Rector
---

Basa-basi dulu ya. Pernah nggak kamu develop suatu aplikasi, udah lama banget, lalu beberapa tahun kemudian kamu ditugaskan/ingin kembangkan source code aplikasi tersebut sekaligus ingin mengubah codebasenya menggunakan bahasa pemrograman atau framework yang terbaru (saat itu). Apa yang kamu lakukan? periksa filenya satu-persatu, ubah manual? ya, cara amannya memang begitu. Untuk beberapa _task_ sederhana lain, kamu mungkin akan memanfaatkan fitur dari IDE/text-editor seperti _refactor_, _find-and-replace_, dsb.

Nah, sekarang di PHP ada _tool_ untuk membantu kamu melakukan hal tersebut, namanya [_Rector_](https://github.com/rectorphp/rector) &mdash; PHP **<u>Rec</u>**onstruc**<u>tor</u>**.
_Rector_ adalah _open source command line tool_ untuk membantu developer melakukan _upgrade_ dan _refactoring_ _codebase_ PHP mereka secara instan. Sebelum kamu berharap dan membaca terlalu jauh, ini kata dokumentasi _Rector_: _"Why refactor manually if Rector can handle 80% for you?"_.

Jadi, ya, _Rector_ ini bukan _tool_ ajaib yang bisa memenuhi 100% keinginanmu. Bahkan mungkin nggak sampai 80% kebutuhanmu seperti yang dokumentasinya bilang.

Ok, lanjut ya?

## Apa Saja yang Bisa Dilakukan Rector?

Secara garis besar ya itu tadi, _upgrading_ dan _refactoring_.
Misal kamu mau upgrade project PHP 5.3 kamu ke PHP 7.4, _Rector_ memiliki beberapa set _rector_ untuk membantu kamu melakukan perubahan yang diperlukan. Atau kamu mau upgrade Laravel 5.5 ke Laravel 6, _Rector_ juga punya beberapa set _rector_ untuk melakukan hal tersebut.

Ok, sebelum kebingungan ini "berkembang biak", jadi gini:

* _Package Rector_ memiliki beberapa "_set_".
* Setiap "_set_" terdiri dari beberapa "_Rector_".

![Black Guy question mark](/images/posts/black-guy-question-mark.jpeg)

Intinya gini, _package_ _Rector_ ini berisi sekumpulan _Rector_ _(class)_ yang dikelompokkan kedalam _set_-nya masing-masing, dimana setiap _Rector_-nya bertanggung jawab untuk menangani sebuah _refactoring_. Seperti: mengubah nama fungsi dari `fn_a()` ke `fn_b()`, atau mengubah argumen dari `fn($x, $y)` menjadi `fn($y, $x)`, dan lain sebagainya.

Kembali ke subtopik "Apa Saja yang Bisa Dilakukan Rector?". Sebetulnya banyak, karena _set_-nya itu banyak.
Jadi disini saya sebutkan yang sekiranya "wah" aja.

* Rector dapat mendeteksi dan memberikan _return type_ pada _function_ yang belum didefinisikan _return type_-nya.
* Rector dapat memberikan anotasi `@var` pada _property_ yang belum kamu berikan `@var`.
* Mengubah penggunaan _facade_ menjadi _dependency injection_ pada kode Laravel kamu.
* Mengubah kode Nette menjadi kode Symfony (saya sendiri belum coba).
* Mengubah `$value = $a ? $a : null` menjadi `$value = $a ?: null`.
* Kalau kamu pernah mengalami error `count(): Parameter must be an array or an object that implements Countable`, ada Rector `CountOnNullRector` untuk mencegah hal tersebut dengan melakukan _safety check_ terlebih dahulu.

Masih banyak lagi sebetulnya, berikut [daftar sets dan Rector](https://github.com/rectorphp/rector/blob/master/docs/AllRectorsOverview.md) lainnya yang dapat kamu gunakan (kayaknya belum lengkap).

## Cara Kerja Rector

Untuk detil cara kerjanya kamu bisa lihat di [halaman ini](https://github.com/rectorphp/rector/blob/master/docs/HowItWorks.md). Disini saya hanya menuliskan garis besarnya supaya kamu setidaknya mendapat gambaran cara kerjanya.

1. Pertama, _Rector_ membaca file yang ingin diterapkan _refactoring_ menggunakan `file_get_contents`. Dapatlah si Rector _string_ yang berisi _source code_ kamu.
2. Kemudian _string_ yang berisi _source code_ tersebut di-_parsing_ menggunakan [`nikic/php-parser`](https://github.com/nikic/PHP-Parser) menjadi _AST (Abstract Syntax Tree)_. Kalau kamu tidak tahu apa itu _AST_, anggap aja ini _JSON_ yang berisi struktur _tree_ dari _source code_ kamu. _AST_ tersebut berisi sekumpulan _node_ yang saling terhubung, dimana setiap _node_-nya memiliki definisi _type_-nya, apakah dia _function_, _string_, _int_, _float_, _constant_, dsb. 
3. Setelah diparsing ke _AST_, _AST_ tersebut dibaca _node-per-node_-nya, jika ada bagian yang perlu dilakukan _refactoring_, maka _node_ input tersebut direkonstruksi menjadi _node_ output.
4. Kalau sudah selesai (semua _node_ sudah dicek dan _Rector_ yang digunakan sudah selesai melakukan rekonstruksi), _AST_ hasil rekonstruksi tersebut akan diubah kembali menjadi _string_ untuk disimpan ke file tersebut, atau sekedar ditampilkan perubahannya ke layar.

## Menggunakan Rector

Ada 2 cara instalasi _Rector_, yang pertama dengan _Docker_, yang ke-2 dengan _Composer_.
Disini saya menggunakan cara yang lebih gampang jelasinnya, yaitu dengan _Composer_.

#### Cek _Requirements_

Oke, sebelum menggunakan _Rector_, pastikan kamu memenuhi kebutuhan dibawah ini:

1. PHP >= 7.2 (cek dengan `php -v`).
2. Ekstensi PHP JSON dan Tokenizer (bisa dicek dengan `php -m`).
3. [Composer](https://getcomposer.org) (cek dengan `composer --version`).

> Versi _Rector_ yang saya gunakan disini adalah versi `0.6.2`, jika kamu adalah manusia dari masa depan yang sedang membaca artikel ini di versi _Rector_ yang lebih tinggi, mungkin _requirement_ diatas bisa berubah atau bertambah.

#### Menginstall _Rector_

Pada saat saya menulis artikel ini, _Rector_ masih bermasalah jika diinstall secara global menggunakan `composer global require`, jadi kita akan menginstallnya ke direktori khusus dengan perintah `composer require` biasa. Berikut _step-by-step_-nya:

1. Buka terminal/cmd.
2. Buat dan masuk ke direktori manapun dimana kamu ingin menginstall _Rector_.
   Contoh saya akan menginstall _Rector_ di `~/dev/tools/rector`, maka perintah (linux) yang saya gunakan adalah:
   * `mkdir ~/Dev/rector -P` (buat direktorinya).
   * `cd ~/Dev/rector` (masuk ke direktorinya).
3. Install _Rector_: `composer require rector/rector --dev`.
4. Cek instalasi: `./vendor/bin/rector --version`. Kalu muncul output seperti ini: `Rector v0.6.2` artinya instalasinya berhasil.

Sampai sini kita sudah dapat menggunakan _Rector_, tapi saya mau jelaskan dulu strategi seperti apa yang akan kita gunakan.
Jadi dengan cara instalasi seperti ini (menggunakan `composer require`), saya memikirkan setidaknya ada 3 strategi yang dapat kamu lakukan:

1. Menginstall _Rector_ di setiap project kamu.
2. Menaruh _source code_ project yang ingin dilakukan _refactoring_ kedalam direktori rector.
3. Mendaftarkan `~/Dev/rector/vendor/bin` kedalam variable `PATH` untuk mengglobalkan perintah `rector`.

Saya tidak menyarankan cara pertama, karena buat apa juga install _Rector_ banyak-banyak, toh fungsinya sama.
Sedangkan untuk cara ke-2 dan ke-3, untuk penggunaan berkepanjangan saya lebih menyarankan cara ke-3. Tapi pada artikel ini, kita akan menggunakan cara ke-2 karena lebih mudah dan _to-the-point_.

Jadi kita akan menaruh _source code_ yang akan kita lakukan _refactoring_ kedalam direktori `~/Dev/rector/src`.
Misal kamu ingin _refactor_ project Laravel kamu, kamu bisa menaruhnya ke `~/Dev/rector/src/project-laravelmu`.

#### Melihat _Set_ yang Tersedia

Sebelum kita melakukan _refactoring_, kita dapat mengecek terlebih dahulu _set_ yang tersedia pada instalasi _Rector_ kita.
Masih di terminal, ketikkan:

```bash
./vendor/bin/rector sets
```

Outputnya kurang lebih akan seperti ini:

```bash
Rector v0.6.2

116 available sets:
===================

 * action-injection-to-constructor-injection
 * array-str-functions-to-static-call       
 * cakephp34
 * cakephp35
 * cakephp36
 * cakephp37
 * cakephp38
 * cakephp40
 * celebrity
 * code-quality
 * coding-style
 * constructor-injectin-to-action-injection 
 * contributte-to-symfony
 * dead-code
 * doctrine
 ... masih banyak lagi
```

Itu adalah daftar _set_ yang bisa kamu gunakan untuk tahap selanjutnya. Seperti yang saya bilang sebelumnya, setiap _set_ terdiri dari sekumpulan _Rector_ untuk melakukan _refactoring_ yang berbeda-beda.

Kalau kamu ingin mengecek ketersediaan _set_ tertentu, contoh kamu ingin melihat _set_ yang berhubungan sama Laravel,
kamu bisa gunakan perintah dibawah ini:

```bash
./vendor/bin/rector sets laravel
```

Maka outputnya akan difiltrasi seperti ini:

```bash
Rector v0.6.2

11 available sets:
==================

 * laravel-static-to-injection
 * laravel50
 * laravel51
 * laravel52
 * laravel53
 * laravel54
 * laravel55
 * laravel56
 * laravel57
 * laravel58
 * laravel60
```

> Sayangnya pada versi `0.6.2` yang saya install ini, kita belum bisa melihat _Rector_ apa saja pada masing-masing _set_ tersebut.
  Jadi jika kamu ingin melihat _Rector_ pada setiap _set_, untuk sementara kamu dapat melihatnya pada [halaman ini](https://github.com/rectorphp/rector/blob/master/docs/AllRectorsOverview.md).

#### Mengaplikasikan _Set_ dengan 1 Perintah

Ini adalah cara penggunaan _Rector_ yang paling sederhana.
Misalkan disini saya akan mencoba _set_ `php70` dimana salah satu _Rector_-nya adalah `TernaryToNullCoalescingRector`,
yakni mengubah [_Ternary Operator_](https://www.php.net/manual/en/language.operators.comparison.php#language.operators.comparison.ternary) menjadi [_Null Coalescing Operator_](language.operators.comparison.coalesce).

Pertama saya membuat file `src/sample.php`. Lalu saya isikan kode sebagai berikut:

```php
[filename:~/Dev/rector/src/sample.php]
<?php

$keyword = isset($_GET['q']) ? $_GET['q'] : '';

```

Untuk menerapkan _set_ `php70` pada (seluruh file `.php` di) direktori `src`, kita dapat gunakan perintah dibawah ini:

```bash
./vendor/bin/rector process --set php70 src
```

Maka _Rector_ akan menampilkan perubahan apa saja yang dia lakukan, dan menyimpan perubahannya ke file tersebut.
Kalau kamu lihat kembali isi file `src/sample.php`, kode yang sebelumnya kita buat akan berubah menjadi seperti ini:

```php
[filename:~/Dev/rector/src/sample.php]
<?php

$keyword = $_GET['q'] ?? '';

```

Jika kamu menginginkan _Rector_ hanya menampilkan perubahannya tanpa menyimpan perubahan ke masing-masing file,
kamu dapat gunakan opsi `--dry-run` atau `-n` seperti dibawah ini:

```bash
./vendor/bin/rector process --set php70 --dry-run src
```

Maka _Rector_ hanya akan menampilkan perubahannya saja, tanpa menyimpan perubahan tersebut ke setiap filenya.

#### Menerapkan Beberapa Set Sekaligus dengan `rector.yaml`

Sebelumnya kita menerapkan _set_ dengan sebuah perintah.
Bagaimana jika kita ingin menerapkan beberapa _set_ sekaligus? jawabannya adalah file `rector.yaml`.

File `rector.yaml` adalah file konfigurasi _Rector_ yang kita siapkan untuk project tertentu.
Jadi setiap project bisa beda-beda file `rector.yaml`-nya. Untuk namanya sebetulnya tidak harus `rector.yaml`,
jadi misalkan kamu punya konfigurasi berbeda antara project A dan project B, kamu bisa bedakan namanya, misal `rector-a.yaml`, dan `rector-b.yaml`. Hanya saja secara default _Rector_ akan menggunakan file `rector.yaml` yang pada direktori
dimana kamu menjalankan perintah `rector`.

Pada file `rector.yaml` ini kita bisa spesifikasikan beberapa hal, seperti _sets_ yang ingin digunakan,
file autoloading tambahan, path pengecualian, dsb.
Tapi bakal panjang kalau saya contohin satu-persatu,
jadi disini saya contohin cara menerapkan beberapa _sets_ sekaligus aja.

Oke, jadi pertama-tama saya siapkan dulu contoh file yang mau di-_refactoring_-nya.
Saya ubah `src/sample.php` menjadi seperti ini:

```php
[filename:~/Dev/rector/src/sample.php]
<?php

try {
    $filename = isset($argv[1]) ? $argv[1] : null;
    if (!$filename) {
        throw new InvalidArgumentException("Missing filename");
    }
    $json = json_decode(file_get_contents(dirname(__FILE__).'/'.$filename));
    print_r($json);
} catch (JsonException $e) {
    echo $e->getMessage();
} catch (InvalidArgumentException $e) {
    echo $e->getMessage();
}
```

Misalkan saya ingin menerapkan 3 buah set, yakni set `php53`, `php70` dan `php71`.
Jadi mari kita buat file `rector.yaml` seperti dibawah ini:

```yaml
[filename:~/Dev/rector/rector.yaml]
parameters:
  sets:
    - php53
    - php70
    - php71
```

Selanjutnya mari kita cek dulu apa saja yang akan dirubah dengan perintah:

```
./vendor/bin/rector process --dry-run src
```

Outputnya akan seperti ini:

```php
Rector v0.6.2
Config file: rector.yaml

3/3 [============================] 100%

1 file with changes
===================

1) src/sample.php

  ---------- begin diff ----------
--- Original
+++ New
@@ -1,13 +1,13 @@
<?php

+use InvalidArgumentException;
+use JsonException;
try {
-    $filename = isset($argv[1]) ? $argv[1] : null;
+    $filename = $argv[1] ?? null;
     if (!$filename) {
         throw new InvalidArgumentException("missing filename");
     }
-    $json = json_decode(file_get_contents(dirname(__FILE__).'/'.$filename));
- } catch (JsonException $e) {
+    $json = json_decode(file_get_contents(__DIR__.'/'.$filename));
+ } catch (JsonException|InvalidArgumentException $e) {
     echo $e->getMessage();
- } catch (InvalidArgumentException $e) {
-    echo $e->getMessage();
- }
+ }
\ No newline at end of file
  ----------- end diff -----------

Applied rules:

 * Rector\Php71\Rector\TryCatch\MultiExceptionCatchRector
 * Rector\Php70\Rector\Ternary\TernaryToNullCoalescingRector
 * Rector\Php53\Rector\FuncCall\DirNameFileConstantToDirConstantRector


[OK] Rector is done! 1 changed files                                                                         

```

Disitu bisa kita lihat bagian-bagian yang ditambah dan dihapus.
Juga pada bagian bawah kita dapat lihat ada 3 _Rector_ yang digunakan, yaitu:

1. `Rector\Php71\Rector\TryCatch\MultiExceptionCatchRector` dari set `php71`.
2. `Rector\Php70\Rector\Ternary\TernaryToNullCoalescingRector` dari set `php70`.
3. `Rector\Php53\Rector\FuncCall\DirNameFileConstantToDirConstantRector` dari set `php53`.

Kalau sekiranya oke, mari kita aplikasikan ke filenya dengan menghapuskan `--dry-run` seperti dibawah ini:

```bash
./vendor/bin/rector process src
```

Sekarang, kalau kita lihat filenya, maka akan jadi seperti ini:

```php
[filename:~/Dev/rector/src/sample.php]
<?php

use InvalidArgumentException;
use JsonException;
try {
    $filename = $argv[1] ?? null;
    if (!$filename) {
        throw new InvalidArgumentException("missing filename");
    }
    $json = json_decode(file_get_contents(__DIR__.'/'.$filename));
} catch (JsonException|InvalidArgumentException $e) {
    echo $e->getMessage();
}
```

## Penutup

Oke mungkin segitu saja untuk artikel pengenalan _Rector_ kali ini.
Karena _tool_ ini umurnya masih terbilang baru, jadi memang mungkin belum banyak yang bisa kita lakukan.
Tapi kedepan mungkin akan banyak tambahan-tambahan _Rector_ lain yang dapat membantu _task_ _refactoring_ kita.
Jadi tidak ada salahnya kita pelajari sejak awal.

Yaudah, sekian untuk artikel kali ini. Semoga bermanfaat. Dadah ~
