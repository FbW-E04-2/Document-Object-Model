// Membuat Object

// 1. Object Literal
var mhs = {
    nama    :'Gerald Alessandro Timothy',
    nim     :'2018420126',
    email   :'alendro25@gmail.com',
    jurusan :'Teknik Informatika'
}

var mhs2 = {
    nama    :'Aditya Hernanda',
    nim     :'2018420111',
    email   :'adityaHernanda@gmail.com',
    jurusan :'Teknik Industri'
}

// 2. Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Farid', '2018420221', 'faridh@gmail.com', 'Teknik Lingkungan');

// 3. Contructor
function Mahasiswa(nama, nim, email, jurusan){
    // var this ={}
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

//      Jgn Lupa diberi keyword 'new' sebelum nama function-nya
var mhs4 = new Mahasiswa('Dhany', '2018420223', 'Dhany@gmail.com', 'Teknik Sipil')