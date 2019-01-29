/* Permitir escolher o offset (deslocamento). (html)

#   Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser cifrado. (html)
   Implementa cipher.encode. (js)
   Mostrar o resultado da cifra corretamente. (html)

   Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser descifrado. (html)
   Implementa cipher.decode. (js)
   Mostrar o resultado descifrado corretamente. (html)

   Criar testes unitários.
_____________
Hacker edition
  Permite usar um offset (deslocamento) negativo
  Cifra/descifra outros caracteres (espaços, pontuação, ã, á, ...)
  + .py
*/

let str = prompt('Digite uma frase para codificar:');
let strArr = Array.from(str.toUpperCase());

// document.write(`A divisão da palavra é: ${strArr} `);
console.log(strArr);

let chav = prompt('Digite um inteiro positivo para definir a chave de deslocamento:');

const alphabet = [];
var alfEnc = [];
var alfDec = [];

// alfabeto
for (var i = 65; i <= 90; i++) {
  let letter = String.fromCharCode(i);
  alphabet.push(letter);
  alfEnc.push(letter);
  alfDec.push(letter);
}

// alfChav
let count = 0;
while (count < chav) {
  var changePos = alfEnc.shift();
  changePos = alfEnc.push(changePos);
  count++;
}

console.log(alphabet);
console.log(alfEnc);

var arrEnc = [];
// encode
// fazer um if (para if (id = 'encode' então .....) if ou else (id = 'decode' então ....))
for (a = 0; a <= strArr.length; a++) {
  for(i = 65; i <= 90; i++) {
    if (strArr[a] == String.fromCharCode(i)) {
      var pos = (i-65);
      arrEnc.push(alfEnc[pos]);
      console.log('Para a palavra: ' + strArr[a] + ' a cifra é: ' + alfEnc[pos]);
    }
  }
}
console.log(arrEnc.join(''));

var arrDec = [];
// decode
var strDec = prompt('Digite uma frase para decodificar:');
for (a = 0; a <= strArr.length; a++) {
  for(i = 65; i <= 90; i++) {
    if (strArr[a] == String.fromCharCode(i)) {
      var pos = (i-65);
      arrDec.push(alfDec[pos]);
      console.log('Para a palavra: ' + arrEnc[a] + ' a cifra é: ' + alfDec[pos]);
    }
  }
}
console.log(arrDec.join(''));
