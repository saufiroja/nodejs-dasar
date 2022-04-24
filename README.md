## Pengenalan Nodejs Dasar

- Nodejs diperkenalkan pertama kali oleh Ryan Dahl pada tahun 2009
- Nodejs merupakan teknologi yang bisa menjalankan code javascript diluar web browser yaitu bisa digunakan pada sisi server juga
- Nodejs di buat dari V8 engine yaitu engine dari google chrome

## Kenapa Harus Belajar Nodejs

- Nodejs mempopulerkan paradigma Javascript everywhere, yaitu dimana dengan menggunakan nodejs, kita bisa menggunakannya bukan hanya pada sisi browser tetapi bisa juga di sisi server

## Hal yang tidak bisa dilakukan nodejs

- Fitur DOM karena fitur ini membutuhkan browser untuk menjalankannya

## Web Application

Web Application di bagi menjadi 3 bagian yaitu client, server dan database

- CLient
  - Client adalah user interface bagian dari frontend
  - Client digunakan untuk berinteraksi dengan server, baik itu menerima atau mengirim data
- Server
  - Server bertanggung jawab untuk menerima request dari client, mengerjakan request yang dikirim dan membalas request tersebut berupa response ke client
  - Server bertugas sebagai backend, dimana semua logic app akan dilakukan di server
- Database
  - Database adalah tempat untuk menyimpan data
  - Data disimpan dan diambil dari server
  - Client tidak bisa langsung mengambil atau menyimpan data ke database secara langsung, karena itu perlu penengah untuk melakukannya yaitu server

## Concurrency vs Parallel

- Concurrency artinya menjalankan beberapa pekerjaan satu persatu
- Parallel artinya menjalankan beberapa pekerjaan sekaligus dalam satu waktu

## Synchronous vs Asynchronous

- Synchronous adalah ketika code program kita berjalan secara sequential, dan semua tahapan ditunggu sampai prosesnya selesai baru akan dieksekusi ke tahapan selanjutnya
- Asynchronous adalah ketika code program kita berjalan dan kita tidak perlu menunggu eksekusi code tersebut selesai, kita bisa lanjutkan ke tahapan code program selanjutnya

# Nodejs Arshitecture

## Event Loop (single thread)

Event loop adalah single thread proses yang digunakan untuk mengeksekusi code non-blocking atau asynchronous
