//       DOM Manipulation           //

// 1. document.createElement()      //
// 2. document.createTextNode()     //
// 3. node.appendChild(pBaru)       //
// 4. node.insertBefore()           //

// Buat Element Baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');

// Simpan Tulisan ke Dalam Paragraf
pBaru.appendChild(teksPBaru);

// Simpan pBaru di Akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// Buat Element Baru
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

// Simpan Tulisan ke Dalam li
liBaru.appendChild(teksLiBaru);

// Buat Tempat
const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('li:nth-child(2)');

// Simpan liBaru di Antara item1 dan item2 Pada Section B
ul.insertBefore(liBaru, li2);


//       DOM Manipulation             //
// 5. parentNode.removeChild()        //
// 6. parentNode.replaceChild()       //

const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

// Menandai apa yang baru
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';