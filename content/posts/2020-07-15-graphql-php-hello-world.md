---
title: "GraphQL PHP: Hello World!"
slug: graphql-php-hello-world
description: ""
date: 2020-07-15 06:34:13
author: Muhammad Syifa
icon: "/images/icons/graphql.png"
cover: ""
tags:
    - GraphQL
    - PHP
    - GraphQL PHP Journey
---

Ehem, lama ya ga nulis. Jadi bingung gini mau nulis apa 😸.

Oke latar belakang dulu.
Beberapa waktu lalu saya lagi ngerjain task pakai PHP, sepintas terpikir kayaknya asik kalau pakai GraphQL. Terus jadi kepikiran ekosistem GraphQL di PHP sudah sejauh mana ya, karena terakhir saya cobain GraphQL di PHP itu tahun 2017 yang saya dokumentasikan di [repository ini](https://github.com/emsifa/contoh-graphql-php-mysql). Dan karena itu saya jadi tertarik melakukan perjalanan untuk menyelami GraphQL di PHP dari awal lagi. Syukur-syukur setelah perjalanan ini, saya bisa buat sesuatu untuk meramaikan ekosistem tersebut.

Dan supaya lebih nyantol di kepala, saya dokumentasikanlah perjalanan tersebut disini. Dan artikel inilah bagian pertamanya.

---

Pada bagian pertama ini kita akan membuat "*Hello World!*"-nya GraphQL. Jadi kita akan membuat *endpoint* GraphQL yang berisi *query hello* yang akan mengirimkan data berdasarkan root value dan argumen *message* yang diberikan.

Pada bagian ini diharapkan pembaca (termasuk saya di kemudian hari 😛) dapat mengerti:

1. Cara inisiasi proyek aplikasi GraphQL di PHP.
2. Workflow GraphQL di PHP.
3. Request lifecycle dari GraphQL di PHP.
4. Mengerti cara menjalankan query GraphQL.

*Library* yang akan kita gunakan disini adalah *library* GraphQL PHP yang paling populer dan cukup aktif pengembangannya, yaitu [*webonyx/graphql-php*](https://github.com/webonyx/graphql-php).

Versi yang saya install disini adalah versi 14.0.2, dimana *requirements*-nya adalah:

* PHP minimum versi 7.1
* Ekstensi json dan mbstring

Dan tentunya kita juga butuh [*Composer*](https://www.getcomposer.org) untuk menginstall *library* tersebut.

Karena *environment* saya sudah memenuhi persyaratan tersebut, jadi kita langsung aja mulai.

> Disini saya asumsikan kamu sudah mengenal apa itu GraphQL, juga sudah familiar dengan VSCode, PHP dan Composer sebelumnya.

#### 1. Persiapan

* Buat direktori baru untuk menempatkan *source-code* kita.
* Buka direktori tersebut di VSCode.
* Buka terminal VSCode, lalu install *library* dengan perintah `composer require webonyx/graphql-php`.
* Buat file baru bernama `graphql.php`. File ini akan menjadi *endpoint* GraphQL kita nantinya.

#### 2. Membuat *Schema*

Sebagaimana mestinya GraphQL, hal pertama yang harus kita persiapkan adalah mendefinisikan skema.
Disini kita akan membuat skema sederhana seperti pada SDL ini:

```graphql
type Query {
  hello(message: String!): String!
}

schema {
  query: Query
}
```

Sebelum memulai, kita perlu mengimport beberapa *class* dan *load* file `vendor/autoload.php` terlebih dahulu.

```php
[filename:graphql.php]
<?php

// Import class
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;

// Load dependencies
require(__DIR__."/vendor/autoload.php");
```

###### 2.1. Mendefinisikan Type Query

Pada tahapan ini kita akan mendefinisikan objek *type* bernama "*Query*", yang didalamnya terdapat
*fields* hello yang memiliki argumen `message` berupa *string*, dan menghasilkan output berupa *string* juga.

Jadi kita akan menerjemahkan *SDL* di bawah ini ke dalam kode PHP.

```graphql
type Query {
  hello(message: String!): String!
}
```

Pada file `graphql.php`, tambahkan kode berikut:

```php
[filename:graphql.php]
<?php

// Import class
...
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
...

// Load dependencies
...
require(__DIR__."/vendor/autoload.php");
...

+ // Mendefinisikan type Query
+ $queryType = new ObjectType([
+     'name' => 'Query',
+     'fields' => [
+         // Mendefinisikan field hello
+         'hello' => [
+             'type' => Type::nonNull(Type::string()), // return type String!
+             'args' => [
+                 'message' => Type::nonNull(Type::string()), // argumen message: String!
+             ],
+             'resolve' => function ($root, $args, $ctx, $info) {
+                 return strtoupper($root['prefix'] . $args['message'] . "!");
+             }
+         ],
+     ],
+ ]);
```

Sedikit penjelasan tentang `resolve`. *Resolve* ini adalah *resolver function* yang nantinya akan memproses query `hello` kita. Setiap field dari *type* nantinya akan memiliki *resolver function* ini. Biasanya pada bagian ini, aplikasi akan mengambil data dari *database*, *cache*, ataupun *parent* datanya (dalam hal ini `$root`). Tapi disini sebagai contoh kita hanya memproses *string* saja.

###### 2.2. Mendefinisikan Schema

Setelah kita mendefinisikan *Query*, langkah selanjutnya kita akan mendefinisikan objek *schema* seperti pada *SDL* ini:

```graphql
schema {
  query: Query
}
```

Caranya kita cukup tambahkan kode berikut pada `graphql.php`:

```php
[filename:graphql.php]
<?php

// Import class
...
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
...

// Load dependencies
...
require(__DIR__."/vendor/autoload.php");
...

// Mendefinisikan type Query
...  
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        // Mendefinisikan field hello
        'hello' => [
            'type' => Type::nonNull(Type::string()), // return type String!
            'args' => [
                'message' => Type::nonNull(Type::string()), // argumen message: String!
            ],
            'resolve' => function ($root, $args, $ctx, $info) {
                return strtoupper($root['prefix'] . $args['message'] . "!");
            }
        ],
    ],
]);
...

+ // Mendefinisikan schema
+ $schema = new Schema([
+     'query' => $queryType
+ ]);
```

#### 3. Memproses Request

Setelah skema telah didefinisikan, tahapan selanjutnya adalah memproses *request*.
Pada tahap ini kita akan mengambil GraphQL query serta GraphQL variables dari HTTP request kemudian mengeksekusinya berdasarkan skema yang telah kita buat sebelumnya untuk selanjutnya outputnya dikirimkan berupa JSON response.

###### 3.1. Mengambil *Query* dan *Variables*

Pada tahap ini kita akan mengambil *query* serta *variables* dari request body yang berupa JSON.

Tambahkan kode berikut pada file `graphql.php`:

```php
[filename:graphql.php]
<?php

// Import class
...
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
...

// Load dependencies
...
require(__DIR__."/vendor/autoload.php");
...

// Mendefinisikan type Query
...  
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        // Mendefinisikan field hello
        'hello' => [
            'type' => Type::nonNull(Type::string()), // return type String!
            'args' => [
                'message' => Type::nonNull(Type::string()), // argumen message: String!
            ],
            'resolve' => function ($root, $args, $ctx, $info) {
                return strtoupper($root['prefix'] . $args['message'] . "!");
            }
        ],
    ],
]);
...

// Mendefinisikan schema
...
$schema = new Schema([
    'query' => $queryType
]);
...

+ // Mengambil query dan variables
+ $rawInput = file_get_contents('php://input');
+ $input = json_decode($rawInput, true);
+ $query = $input['query'];
+ $variableValues = isset($input['variables']) ? $input['variables'] : null;

```

###### 3.2. Menyiapkan Root Value dan Context

Setelah mengambil *query* dan *variables*, langkah selanjutnya kita akan menyiapkan *root value* dan *context*. *Root value* adalah nilai yang akan dikirimkan ke setiap *root fields* (*query fields*, *mutation fields*, dsb). Sedangkan *context* adalah nilai yang akan dikirimkan ke setiap *resolver*. *Context* disini umumnya berisi *container* dari aplikasi yang di dalamnya berisi berbagai *services*, seperti misalnya koneksi ke database tertentu.

Kalau dilihat pada *query* hello diatas kita menggunakan `$root['prefix']`, jadi disini kita akan membuat *root value* berupa array berisi key `prefix` di dalamnya. Sedangkan untuk *context* karena di contoh kita kali ini tidak menggunakan nilai dari *context* jadi kita biarkan `null`.

Tambahkan kode berikut pada `graphql.php`:

```php
[filename:graphql.php]
<?php

// Import class
...
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
...

// Load dependencies
...
require(__DIR__."/vendor/autoload.php");
...

// Mendefinisikan type Query
...  
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        // Mendefinisikan field hello
        'hello' => [
            'type' => Type::nonNull(Type::string()), // return type String!
            'args' => [
                'message' => Type::nonNull(Type::string()), // argumen message: String!
            ],
            'resolve' => function ($root, $args, $ctx, $info) {
                return strtoupper($root['prefix'] . $args['message'] . "!");
            }
        ],
    ],
]);
...

// Mendefinisikan schema
...
$schema = new Schema([
    'query' => $queryType
]);
...

// Mengambil query dan variables
...
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);
$query = $input['query'];
$variableValues = isset($input['variables']) ? $input['variables'] : null;
...

+ // Menyiapkan root value dan context
+ $rootValue = ['prefix' => 'Hello '];
+ $context = null; 
```

###### 3.3. Memproses Query

Setelah mengambil *query* dan *variables*, kita akan memproses query dan variables tersebut ke dalam skema yang telah kita buat. Hasil daripada proses query ini nanti kita simpan ke dalam variable output.

```php
[filename:graphql.php]
<?php

// Import class
...
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
...

// Load dependencies
...
require(__DIR__."/vendor/autoload.php");
...

// Mendefinisikan type Query
...  
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        // Mendefinisikan field hello
        'hello' => [
            'type' => Type::nonNull(Type::string()), // return type String!
            'args' => [
                'message' => Type::nonNull(Type::string()), // argumen message: String!
            ],
            'resolve' => function ($root, $args, $ctx, $info) {
                return strtoupper($root['prefix'] . $args['message'] . "!");
            }
        ],
    ],
]);
...

// Mendefinisikan schema
...
$schema = new Schema([
    'query' => $queryType
]);
...

// Mengambil query dan variables
...
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);
$query = $input['query'];
$variableValues = isset($input['variables']) ? $input['variables'] : null;
...

// Menyiapkan root value dan context
...
$rootValue = ['prefix' => 'Hello '];
$context = null; 
...

+ // Eksekusi query dan mengambil hasilnya
+ $result = GraphQL::executeQuery($schema, $query, $rootValue, $context, $variableValues);
+ $output = $result->toArray();
```

###### 3.4. Mengirim Output

Sekarang kita sampai pada tahap terakhir, yaitu mengirimkan output berupa JSON.

Caranya sederhana saja, cukup tambahkan kode berikut pada file `graphql.php`:

```php
[filename:graphql.php]
<?php

// Import class
...
use GraphQL\GraphQL;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
...

// Load dependencies
...
require(__DIR__."/vendor/autoload.php");
...

// Mendefinisikan type Query
...  
$queryType = new ObjectType([
    'name' => 'Query',
    'fields' => [
        // Mendefinisikan field hello
        'hello' => [
            'type' => Type::nonNull(Type::string()), // return type String!
            'args' => [
                'message' => Type::nonNull(Type::string()), // argumen message: String!
            ],
            'resolve' => function ($root, $args, $ctx, $info) {
                return strtoupper($root['prefix'] . $args['message'] . "!");
            }
        ],
    ],
]);
...

// Mendefinisikan schema
...
$schema = new Schema([
    'query' => $queryType
]);
...

// Mengambil query dan variables
...
$rawInput = file_get_contents('php://input');
$input = json_decode($rawInput, true);
$query = $input['query'];
$variableValues = isset($input['variables']) ? $input['variables'] : null;
...

// Menyiapkan root value dan context
...
$rootValue = ['prefix' => 'Hello '];
$context = null; 
...

// Eksekusi query dan mengambil hasilnya
...
$result = GraphQL::executeQuery($schema, $query, $rootValue, $context, $variableValues);
$output = $result->toArray();
...

+ header('Content-Type: application/json');
+ echo json_encode($output);
```

#### 4. Cobain

Untuk mencobanya, kita membutuhkan GraphQL GUI client seperti [*GraphiQL*](https://github.com/graphql/graphiql), [*GraphQL Playground*](https://github.com/prisma-labs/graphql-playground), [*Postman*](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/), [*Insomnia*](https://insomnia.rest/blog/graphql-explorer), dsb. Karena query kita masih sangat sederhana, sebetulnya pakai curl pun bisa saja. Tapi karena disini saya punya *Insomnia*, jadi saya pakai *Insomnia* saja.

Yang pasti kita perlu menjalankan aplikasinya terlebih dahulu. Disini saya pakai PHP built-in server, jadi saya perlu jalankan perintah:

```bash
php -S localhost:9292
```

Selanjutnya pada Insomnia client, saya buat request baru. Lalu pada bagian URL karena saya menjalankan aplikasi pada `localhost:9292`, jadi saya masukkan URL-nya `http://localhost:9292/graphql.php`.

Jangan lupa untuk set method-nya POST. Kemudian pada bagian body-nya saya ubah jadi GraphQL.

Kemudian pada bagian body isikan query seperti di bawah ini:

```graphql
{
  hello(message:"world")
}
```

Kalau request dijalankan maka hasilnya akan seperti ini:

![Hasil Query #1](/images/posts/gql1-1.png)

Btw query diatas itu sebetulnya singkatan dari:

```graphql
query {
  hello(message:"world")
}
```

Hanya saja untuk type Query, awalan "query" sifatnya opsional.
Nih misal saya pakai awalan "query", hasilnya sama aja:

![Hasil Query #2](/images/posts/gql1-2.png)

Selain 2 cara diatas, kita juga bisa memanggil query yang sama dengan memberikan nama dari query serta variable seperti dibawah ini (perhatikan bagian *Query Variables* dibawah):

![Hasil Query #3](/images/posts/gql1-3.png)

Maksudnya saya kasih tau ini supaya kamu nggak bingung kalau di artikel lain kita bakal naruh
awalan seperti *query*, *mutation*, *subscription*, dsb.

---

## Penutup

Sampai sini kita sudah setup project hello world GraphQL kita. Pada perjalanan selanjutnya kita akan mengembangkan skema ini menjadi sesuatu yang lebih praktikal. Jadi sampai jumpa di tulisan selanjutnya, dadah 👋.
