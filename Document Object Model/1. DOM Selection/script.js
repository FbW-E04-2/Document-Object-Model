// DOM Selection
// 1. document.getElementById() -> Element

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'Gerald A.T';

// // 2. document.getElementsByTagName() -> HTMLCollections
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// let h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';


// // 3. document.getElementsByClassName() -> HTMLCollections
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'Ini Di-Ubah Dari JavaScript';

// 4. document.querySelector() - Element
const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange'; 


// document.querySelectorAll() -> NodeList

const p = document.querySelectorAll('p');
for(i=0; i < p.length; i++){
    p[i].style.backgroundColor = "crimson";
}