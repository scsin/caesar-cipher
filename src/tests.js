/* Hacker edition
   Permite usar um offset (deslocamento) negativo
   Cifra/descifra outros caracteres (espaços, pontuação, ã, á, ...)
   + py
*/
let str;
let chav;
let strArr;
const alphabet = [];
let alfEnc = [];
let arrEnc = [];

function buttonE() {
  str = document.getElementById("frase").value;
  chav = document.getElementById("chave").value;
  strArr = Array.from(str.toUpperCase());
  alphOrg();
  alphDesloc();
  encode(strArr, chav);
}
function buttonD() {
  str = document.getElementById("frase").value;
  chav = document.getElementById("chave").value;
  strArr = Array.from(str.toUpperCase());
  alphOrg();
  alphDesloc();
  decode(strArr, chav);
}

// document.write(`A divisão da palavra é: ${strArr} `);

// alphabet
function alphOrg() {
  for (var i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    alphabet.push(letter);
    alfEnc.push(letter);
    document.getElementById("alphabet").innerHTML = alphabet;
  }
}

// alfEnc
function alphDesloc() {
  let count = 0;
  while (count < chav) {
    var changePos = alfEnc.shift();
    changePos = alfEnc.push(changePos);
    count++;
    document.getElementById("alfEnc").innerHTML = alfEnc;
  }
}

// adicionar o espaço = ASC(20) nos alfabetos;


// encode
// fazer um if ou um botão (para if (id = 'encode' então .....) if ou else (id = 'decode' então ....))
// if (chav > 0) {  IF E ELSE PARA NÚMERO NEGATIVO (se colocar esse bloco precisa fazer + blocos para a montagem do alfEnc)
function encode() {
  for (a = 0; a <= strArr.length; a++) {
    for(i = 65; i <= 90; i++) {
      if (strArr[a] == String.fromCharCode(i)) {
        let pos = (i-65);
        arrEnc.push(alfEnc[pos]);
        document.getElementById("encode").innerHTML = arrEnc.join('');
      }
    }
  }
}


// }
// else {
//   for (a = 0; a <= strArr.length; a++) {
//     for(i = 65; i <= 90; i++) {
//       if (strArr[a] == String.fromCharCode(i)) {
//         var pos = ((i-65)-chav);
//         arrEnc.push(alfEnc[pos]);
//         console.log('Para a palavra: ' + strArr[a] + ' a cifra é: ' + alfEnc[pos]);
//       }
//     }
//   }
// }
// teste
// if (arrEnc.join('') == 'XYZ') {
//   console.log('legal');
// }
// else {
//   console.log('erro');
// }

// decode
function decode() {
  for (a = 0; a <= strArr.length; a++) {
    for(i = 0; i <= 25; i++) {
      if (strArr[a] == alphabet[i]) {
        let pos = i-chav;
        arrEnc.push(alphabet[pos]);
        document.getElementById("decode").innerHTML = arrEnc.join('');
      }
    }
  }
}
