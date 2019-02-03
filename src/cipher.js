// window.cipher = {
//   // ...
// };

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

function alphOrg() {
  for (var i = 65; i <= 90; i++) {
    let letter = String.fromCharCode(i);
    alphabet.push(letter);
    alfEnc.push(letter);
    document.getElementById("alphabet").innerHTML = alphabet;
  }
}

function alphDesloc() {
  let count = 0;
  while (count < chav) {
    var changePos = alfEnc.shift();
    changePos = alfEnc.push(changePos);
    count++;
    document.getElementById("alfEnc").innerHTML = alfEnc;
  }
}

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
