// -- inline Handler --
// const p3 = document.querySelector('.p3');
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }



// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


// const p4 = document.querySelector('section#b p')
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLiBaru = document.createTextNode('Item Baru!');
//     liBaru.appendChild(teksLiBaru);
//     ul.appendChild(liBaru);
// });


// -- Menggunakan Event Handler akan mengakibatkan penimpaan --
const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function(){
//     p3.style.backgroundColor = 'red';
// }


// -- Menggunakan addEvent Listener akan menambahkan --
p3.addEventListener('click', function(){
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('click', function(){
    p3.style.color = 'red';
});