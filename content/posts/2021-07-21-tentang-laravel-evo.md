---
title: "Ngoding Laravel dengan Gaya, pakai Laravel Evo"
slug: tentang-laravel-evo
description: "Laravel Evo bukan cuma tools untuk mempermudah coding, tapi juga melatih kebiasaan coding yang baik. Kok bisa?"
date: 2021-07-21 11:00:00
author: Muhammad Syifa
icon: "/images/icons/evo-icon.png"
cover: "/images/posts/evo-cover.png"
fullscreen: false
tags:
  - Laravel
  - Evo
---

Beberapa waktu lalu, saya membuat video cara membuat _framework_ kekinian di [kanal youtube saya](https://www.youtube.com/channel/UCUDiqWobOUKHKz-KOkn5WYQ). Pada _framework_ tersebut, saya menerapkan fitur terbaru pada _PHP_ 8, yaitu _attribute_.

Dan tidak lama setelahnya, saya coba menerapkan hal yang sama ke _Laravel_, dengan membuat _package_ khusus _Laravel_ yang saya beri nama _Evo_.

Berikut ini adalah contoh controller saat menggunakan _Evo_ (baris yang di-_highlight_ adalah kode khusus _Evo_):

```js
==============================
filename: TodoController.php
highlight: 1,4,5,7-10,18
==============================
#[RoutePrefix('todos')]
class TodoController
{
    #[Put('{id}')]
    #[Authenticated]
    public function update(
        #[Param] int $id,
        #[Body] UpdateTodoDTO $data,
        #[LoggedUser] User $user,
    ): UpdateTodoResponse
    {
        $todo = Todo::findOrFail($id);
        $todo->title = $data->title;
        $todo->is_completed = $data->completed;
        $todo->completed_by = $user->id;
        $todo->completed_at = date('Y-m-d H:i:s');
        $todo->save();

        return UpdateTodoResponse::fromArray($todo->toArray()); 
    }
}
```

Buat kamu yang pernah mencoba _Nest.js_, mungkin familiar dengan kode diatas.
Karena memang saya terinspirasi dari _Nest.js_.

Pertanyaannya, untuk apa? gaya-gayaan doang atau ada maksudnya?

Nah pada artikel ini, saya mau ceritakan manfaat dari penerapan kode seperti di atas.

Btw, artikel ini saya tujukan orang-orang yang sudah pernah mengembangkan aplikasi dengan _Laravel_/_Lumen_. Jadi mungkin untuk yang belum pernah coba framework tersebut, akan sulit untuk memahami maksudnya.

#### Memperjelas Spesifikasi API Kamu

Bayangin, kamu baru saja menjadi back-end developer di sebuah perusahaan, dan kamu mendapati kode controller seperti di bawah ini:

```php
public function store(Request $request)
{
    $invoice = Invoice::findOrFail($request->invoice_id);
    $result['invoice'] = $invoice->toArray();

    if (!$invoice->is_paid) {
        throw new InvoiceAlreadyPaidException();
    }

    DB::beginTransaction();
    $payment = new Payment;
    $payment->invoice_id = $invoice->id;
    $payment->method = $request->payment_method;
    $payment->user_id = user()->id();
    $payment->amount = $request->amount;

    if ($request->payment_method == 'bank_transfer') {
      $payment->account_number = $request->account_number;
        $payment->bank_id = $request->bank_id;

        $bank = Bank::findOrFail($request->bank_id);
        $result['bank_name'] = $bank->name;
    }

    $payment->save();

    $invoice->is_paid = true;
    $invoice->save();
    DB::commit();

    $result = array_merge($result, $payment->toArray());

    return response()->json($result);
}
```

Hayo coba tebak, pada kode tersebut inputannya apa aja, dan struktur dari result-nya seperti apa?

Sulit kan? tentu saja. Karena Programmernya menaruh inputan dan result di sembarang tempat, sehingga kita harus jeli melihat setiap baris untuk mengetahui input dan outputnya seperti apa. Itupun ga bisa hanya dilihat dari file itu aja, pada bagian `$result['invoice'] = $invoice->toArray()`, untuk tahu isi dari invoice, kita juga harus lihat struktur database pada table invoice. Ribet.

Dengan _Evo_, kita dapat mendefinisikan input dan output langsung pada bagian kepala dari fungsi/method. Sehingga Programmer yang baru gabung, ga perlu membaca logika program hanya untuk tahu inputnya ada apa saja, dan outputnya akan seperti apa.

Berikut adalah kode diatas, ditulis dengan cara _Evo_:

```php
#[Post]
public function store(
    #[Body] StorePaymentDTO $data,
    #[LoggedUser] User $user,
): StorePaymentResponse
{
    // logic program yang kurang lebih sama
}
```

Untuk melihat inputnya seperti apa, pada VSCode dengan intelephense, kamu cukup tekan `ctrl` sambil arahkan cursor ke `StorePaymentDTO`. Dan kamu akan diperlihatkan `class` seperti ini, dimana propertinya adalah data dari request body.

```php
==============================
filename: StorePaymentDTO.php
==============================
class StorePaymentDTO extends DTO
{
    public int $invoice_id;
    public float $amount;
    public string $payment_method;
    public ?string $account_number;
    public ?int $bank_id;
}
```

Begitu pula untuk mengetahui struktur dari output. Cukup arahkan ke `StorePaymentResponse`, dan kamu akan diperlihatkan `class` dengan property seperti ini:

```php
class StorePaymentDTO extends JsonResponse
{
    public int $id;
    public float $amount;
    public int $user_id;
    public string $method;
    public ?string $account_number;
    public ?int $bank_id;
    public ?string $bank_name;
    public InvoiceDTO $invoice;
}
```

Disana terlihat jelas, isinya apa saja, tipe datanya apa, serta nullable atau tidaknya.

#### Membiasakan Diri membuat Arah yang Jelas

Programming pada dasarnya hanyalah tentang bagaimana memproses input menjadi output. 
Input adalah apa yang kita (Programmer) miliki, sedangkan output adalah hal yang kita tuju.
Melakukan coding tanpa tahu inputnya apa saja, dan outputnya akan seperti apa, sama seperti bepergian tanpa tahu isi tas/dompet ada apa aja, dan ga tahu mau kemana, alias luntang-lantung.

Menulis kode dengan cara _Evo_, melatih kamu untuk terbiasa mendefinisikan input dan output sebelum menuliskan logika program. Membiasakan kamu menyiapkan perbekalan dan menentukan tujuan sebelum bepergian.

#### Menjaga Keharmonisan antara Back-end dengan Mobile Developer

Kekurangan dari membuat _RESTful API_ dengan bahasa yang _dynamic typing_ seperti PHP atau Javascript adalah seringkali kita khilaf, lupa melakukan _casting_ tipe data. Sedangkan aplikasi mobile biasanya dibuat menggunakan bahasa pemrograman yang _static typing_, yang mana salah mengirimkan tipe data bisa berakibat fatal. Hal ini seringkali menimbulkan perselisihan antara _mobile developer_ dan _back-end developer_.

_Evo_ mencegah ini dengan melakukan _automatic type casting_, dimana setiap request dan response akan otomatis di cast sesuai dengan tipe data yang kita definisikan pada _DTO_ maupun _Response class_.

Sebagai contoh, kita disuruh membuat response dengan struktur seperti ini:

```json
{
    "id": 1,
    "title": "lorem ipsum dolor sit amet",
    "is_completed": false,
    "created_at": "2021-01-02 03:04:05"
}
```

Pada database MySQL, boolean itu diwakili dengan tipe data integer berisi 0 dan 1, yang kalau kita asal kirim isi dari database, maka mobile developer akan mendapatkan integer `0` atau `1`, lebih parahnya lagi malah kadang string `"0"` atau `"1"`.

Dengan _Evo_, saat kamu mengirimkan response class seperti di bawah ini.

```php
===================================
filename: StoreTodoResponse.php
===================================
class StoreTodoResponse extends JsonResponse
{
    public int $id;
    public string $title;
    public bool $is_completed;
    public string $created_at;
}
```

_Evo_ akan otomatis melakukan type casting, `id` menjadi integer, `title` menjadi string, `is_completed` menjadi boolean, dan `created_at` menjadi string.

#### Validasi Otomatis

_Evo_ melakukan pengecekan tipe data pada seluruh inputan yang dikirimkan dari HTTP request, entah itu `header`-nya, `query`-nya, `parameter`-nya, `cookie`-nya, serta `body`-nya.

Contoh, saat kamu menuliskan `#[Query] int $page`, _Evo_ akan menolak request dengan URL seperti `?page=bukan-angka`.

Untuk validasi lebih _advance_-pun di _Evo_ lebih jelas dengan atribut, contohnya ini:

```php
==============================
filename: RegisterDTO
==============================
class RegisterDTO extends DTO
{
    #[Email(message: "Emailnya ga valid wei")]
    #[Unique(table: "users", column: "email", message: "Email sudah kepakai bro")]
    public string $email;

    #[Min(6, message: "Password minimal 6 karakter gan")]
    #[Max(255, message: "Kepanjangan jir")]
    public string $password;

    #[Max(255, "Panjang amat! itu nama apa paragraf")]  
    public string $name;
}
```

Disitu kita menuliskan validasi lewat atribut, yang mana lebih ramah untuk _Text Editor_ atau _IDE_. Jadi kalau kamu lupa parameternya, _IDE_/_Text Editor_ akan bantu mengingatkan tanpa kamu perlu bolak-balik buka dokumentasi _Laravel_. Keuntungan ini ga bisa kamu dapatkan dengan penjabaran _validation rules_ via _string_ ala _Laravel_.

#### Lebih Mudah dibaca Mesin

Saat menjabarkan input dan output dengan cara _Evo_, tidak cuma tim kamu yang bisa dengan mudah membaca spesifikasi API kamu. Tapi mesin juga.

Terus kenapa kalau bisa dibaca mesin?

Saat mesin bisa memahami keinginan kita, kita bisa menyuruh mesin membuatkan sesuatu untuk kita. Saat ini saya sedang membuatkan Swagger generator pada _Evo_. _Evo_ akan membaca kode kamu dan menampilkan dokumentasi API secara otomatis, tanpa perlu kamu menuliskan OpenAPI secara manual. 

Yap, untuk yang ini memang masih tahap pengembangan. Tapi hal ini sangat memungkinkan. Karena di _Nest.js_ pun begitu.

Malah mungkin ga cuma Swagger generator. Tapi juga test generator, jadi _Evo_ akan generate file test serta assertionnya secara otomatis mengikuti spesifikasi yang kita tuliskan.

## Penutup

Itulah beberapa alasan kenapa saya membuat tools yang memanfaatkan penuh fitur atribut seperti pada _Evo_ ini. Jadi bukan cuma untuk gaya-gayaan ya, banyak juga kok manfaatnya.

Untuk _Evo_ ini masih saya kembangkan sambil saya gunakan pada side-project saya.
Kalau kamu mau intip-intip pengembangannya bisa mampir ke [https://github.com/emsifa/evo](https://github.com/emsifa/evo).

Sekian tulisan kali ini. Dadah ~
