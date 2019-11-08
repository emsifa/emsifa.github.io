---
title: "Export Jutaan Data ke CSV dengan Aman di Laravel"
slug: export-jutaan-data-ke-csv-dengan-aman-di-laravel
description: "Bagaimana memanfaatkan generator dan streaming CSV untuk export jutaan data secara aman."
date: 2019-11-08 11:00:00
author: Muhammad Syifa
icon: "/images/icons/laravel.png"
cover: "/images/posts/export-jutaan-data-ke-csv-dengan-aman-di-laravel.png"
fullscreen: false
tags:
    - Laravel
    - PHP
---

Pada versi 6.0, Laravel menambahkan sebuah fitur baru yaitu _Lazy Collection_.
Dengan _Lazy Collection_, aplikasi Laravel dapat mengambil sekumpulan data dari database
tanpa harus menampung *seluruh* data tersebut kedalam memori. Di balik layar, _Lazy Collection_
memanfaatkan fitur PHP Generator. Beberapa waktu lalu, saya posting [video](https://www.facebook.com/em.sifa/videos/vb.100000130485713/3270308866316764/) untuk menjelaskan
bagaimana generator dapat menghemat penggunaan memori. Kalau kamu penasaran, silahkan tonton [video tersebut](https://www.facebook.com/em.sifa/videos/vb.100000130485713/3270308866316764/).

Pada artikel ini, saya mau share bagaimana cara memanfaatkan _Lazy Collection_ untuk melakukan streaming file CSV,
sehingga kita dapat melakukan export jutaan data tanpa harus menampung jutaan data tersebut ke dalam memori.

#### Kenapa CSV?

Kenapa menggunakan CSV, kenapa bukan file excel aja?

Setahu saya, koreksi kalau salah loh ya. Saat ekspor data menjadi file excel, yang terjadi adalah
(jutaan) data kamu akan dibuffer/ditampung kedalam konten file excel (berupa string atau binary string), setelah selesai, kemudian dilakukan encoding, styling (buat border, warnai teks, merge-cells, dsb), sampai akhirnya _buntelan_ file excel kamu siap,
barulah file excel kamu disajikan ke browser.

Saat "memasak" (baca: mengolah) file excel tersebut, semakin banyak "porsi" (baca: baris) yang ingin dimasak, semakin besar pula "wajan" (baca: memori) yang harus digunakan untuk "memasak" file itu. Kalau "wajan"-nya tidak cukup besar, aplikasi kamu akan crash, karena memori limit.

Berbeda dengan CSV, file CSV hanya berisi teks sederhana yang setiap barisnya mewakili baris data, dimana pada setiap baris terdapat ";" atau "," sebagai pemisah dari masing-masing kolom. Kekurangannya, pada file CSV kita tidak bisa melakukan styling, formula, dsb seperti yang dapat didukung oleh file excel. Tapi dengan kekurangan tersebut, kita dapat melakukan streaming data baris-per-baris, sehingga kita server tidak perlu menampung beban memori dari seluruh data di dalam file CSV kita.

#### Kenapa Lazy Collection?

Kalau kamu pernah menonton video yang saya singgung diatas, kamu akan tahu peran Lazy Collection disini.
Singkatnya, dengan Lazy Collection kita tidak perlu menampung data yang ingin kita ekspor,
sehingga yang terjadi adalah data dari hasil query akan difetch satu-per-satu dari DBMS, untuk kemudian data tersebut
ditulis kedalam stream file csv yang diterima web browser.

## Bagaimana Caranya?

Caranya sebetulnya sederhana.
Misalkan disini kita memiliki model `App\Models\LogActivity.php` yang mewakili table `log_activities` yang berisi 10 juta data.
Di dalam table tersebut, kita ingin export data `time`, `user_id`, `message`, `ip_address`, dan `user_agent`.

Supaya agak panjang artikelnya, misalnya isi file modelnya kayak gini:

```php
<?php

namespace Illuminate\Database\Eloquent\Model;

class LogActivity extends Model
{

    protected $table = "log_activities";

}
```

Dah, gitulah ya.

Kemudian, kita menambahkan route seperti ini di `routes/web.php`:

```php
Route::get('log-activities/export', 'LogActivityController@export');
```

Setelah itu, untuk di controllernya kamu dapat menuliskan seperti ini:

```php
<?php

namespace App\Http\Controllers;

use App\Models\LogActivity;
use Illuminate\Http\Request;

class LogActivityController extends Controller
{

    public function export()
    {
        // 1. Ambil seluruh data log_activities kedalam generator
        $logs = LogActivity::orderBy('time')->cursor();

        // FYI: dibawah ini contoh kalau kamu mau gunakan condition dengan cursor
        // $logs = LogActivity::whereRaw("DATE(time) = '2019-11-08'")->where('user_id', 1)->cursor()

        // 2. Set header untuk streaming file CSV
        $filename = "log-activities.csv";
        header("Content-type: text/csv");
        header("Content-Disposition: 'attachment; filename='{$filename}'");

        // 3. Stream file CSV
        $csv = fopen("php://output", "w+");
        // 3.a. Tulis table header
        fputscsv($csv, ["Time", "User ID", "Message", "IP Address", "User Agent"]);
        // 3.b. Tulis baris setiap log
        foreach ($logs as $log) {
            fputscsv($csv, [$log->time, $log->user_id, $log->message, $log->ip_address, $log->user_agent]);
        }
        // 3.c. Tutup file
        fclose($csv);
    }

}
```

Selesai. Dengan begitu, ketika kamu mengakses `https://appkamu.com/log-activities/export`,
aplikasi kamu akan mengirimkan response berupa streaming file CSV yang berisi semua data didalam `log_activities`
tanpa harus mengalami beban memori yang tinggi.

---

Ngomong-ngomong, cara diatas adalah cara yang agak native karena kita langsung menggunakan fungsi `header` bawaan PHP.
Saya tulis seperti itu supaya kamu tahu cara di native atau di framework lain seperti apa.
Kalau kamu penasaran cara yang "lebih" ke-Laravel-an, kamu dapat menggunakan fungsi `streamDownload` seperti dibawah ini:

```php
<?php

namespace App\Http\Controllers;

use App\Models\LogActivity;
use Illuminate\Http\Request;

class LogActivityController extends Controller
{

    public function export()
    {
        $logs = LogActivity::orderBy('time')->cursor();
        $filename = "log-activities.csv";

        return response()->streamDownload(function() use ($logs) {
            $csv = fopen("php://output", "w+");

            fputscsv($csv, ["Time", "User ID", "Message", "IP Address", "User Agent"]);

            foreach ($logs as $log) {
                fputscsv($csv, [$log->time, $log->user_id, $log->message, $log->ip_address, $log->user_agent]);
            }

            fclose($csv);
        }, $filename, ["Content-type" => "text/csv"]);
    }

}
```

---

Seperti itulah cara melakukan export CSV secara aman di Laravel. Kalau ada saran, masukan, atau pertanyaan, silahkan kontak facebook saya.
Akhir kata, semoga bermanfaat.
