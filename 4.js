/*
Escreva um programa que inverta os caracteres de um string.

    IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;*/

//EXECUTE COM O NodeJS

let string = "parjasnelly", string2 = ""

for (let i = string.length-1; i >= 0; i--) {
    string2 += string.charAt(i)
}

console.log(`String original: ${string}\nString invertida: ${string2}`)