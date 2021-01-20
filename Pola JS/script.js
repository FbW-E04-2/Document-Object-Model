var input = prompt("Masukkan jumlah");
i = input;

var masukkan = '';
for (var i=0; i < input; i++){
    for (var j = 0; j <= i; j++) {      
       masukkan += '*';   
    }
    masukkan += '\n';
    
}
for (var k=input; k >= 0; k--){
    for (var l = 0; l <= k; l++) {      
       masukkan += '*';   
    }
    masukkan += '\n';
    }

    console.log(masukkan);