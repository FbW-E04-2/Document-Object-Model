const btn = document.getElementById('btn');
btn.onclick = function(){
    // document.body.style.backgroundColor = 'crimson';
    // document.body.setAttribute('class', 'crimson');
    document.body.classList.toggle('crimson');
}


const btnAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Warna Acak');
btnAcakWarna.appendChild(teksTombol);
btnAcakWarna.setAttribute('type', 'button');
btn.after(btnAcakWarna);

btnAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';

});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
})
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
}) 


document.body.addEventListener('mousemove', function(event){
    const xPos = Math.round(event.clientX / window.innerWidth) * 255;
    const yPos = Math.round(event.clientY / window.innerWidth) * 255;
    const bCol = Math.random() * 255 +1;

    document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', '+ bCol +')';
});