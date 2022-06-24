/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

    IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;*/

//EXECUTE COM O NodeJS

const input = 300

let a = 0, b = 1, c =0;
while (c < input) {
    c = a + b
    a = b
    b = c
}
switch (input) {
    case 0: console.log(`O número ${input} pertence a sequência de Fibonacci!`);
        break;
    case c: console.log(`O número ${input} pertence a sequência de Fibonacci!`);
        break;
    default: console.log(`O número ${input} NÃO pertence a sequência de Fibonacci!`);
}