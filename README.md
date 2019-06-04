A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos
primeiros tipos de criptografias conhecidos na história. É um tipo de cifra por
substituição, em que uma letra no texto original é substituída por outra,
seguindo um número fixo para essa subtituição.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

O imperador Júlio César usou essa cifra para enviar ordens aos seus generais no
campo de batalha. Essa é uma das técnicas mais simples e mais usadas para
cifrar mensagens.

Por exemplo se usarmos o deslocamento de 3:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Atualmente todas as cifras de substituição alfabética simples, são descifradas
com facilidade e não oferecem muita segurança na comunição, mas a cifra de
César muitas vezes pode fazer parte de um sistema mais complexo de
criptografia, como a cifra de Vigenère, e tem aplicação no sistema ROT13.

A lógica do projeto está implementada inteiramente em JavaScript(ES6).
Nesse projeto não foi permitido usar bibliotecas ou frameworks, só
vanilla JavaScript.

O processo de desenvolvimento utilizou a ferramenta diagrama de bloco para uma construção lógica do projeto Cipher.

# Início
# Mensagem
# Entrada de dados (Chave de deslocamento)
# Entrada de dados (Cifrar ou Decifrar)
# Processamento
# Resultado
# Fim


O usuário deve seguir 3 passos para obter o resultado:
1) inserir a mensagem;
2) selecionar um número para a chave de deslocamento;
3) escolher se quer cifrar um texto ou decifrar um código;