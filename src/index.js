const button = document.getElementsByTagName('button');
const alphEnc = document.getElementById('alphEnc');
const encode = document.getElementById('encode');

for (i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (button) => {
        const key = parseInt(document.getElementById('key').value);
        alphASC(button.target.id, key);
        const target = (id) =>
            (id === 'buttonE') ? encrypt(key) : decrypt(key);
        const id = button.target.id;
        return target(id);
    });
};

function alphASC(button, key) {
    alphEnc.innerHTML = '';
    for(i = 65; i <= 90; i++) {
        alphEnc.insertAdjacentText('beforeend', String.fromCharCode(i + key) + ' ');
    };
    encrypt(key, encode, button);
};

function encrypt(key) {
    encode.innerHTML = '';
    const expression = document.getElementById('expression').value;

    for(pos = 0; pos < expression.length; pos++) {
        const alphASC = String.fromCharCode(expression.charCodeAt(pos) + key);
        encode.insertAdjacentText('beforeend', alphASC);
    };
};

function decrypt(key) {
    encode.innerHTML = '';
    const expression = document.getElementById('expression').value;

    for(pos = 0; pos < expression.length; pos++) {
        const alphASC = String.fromCharCode(expression.charCodeAt(pos) - key);
        encode.insertAdjacentText('beforeend', alphASC);
    };
};
