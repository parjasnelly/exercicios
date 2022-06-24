/*
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;*/

//EXECUTE COM O NodeJS

'use strict';
const fs = require('fs');
let rawdata = fs.readFileSync('dados.json');

let month = JSON.parse(rawdata);

let average = 0, days = 0, min = {...month[0]}, max = {...month[0]}, count = 0
for (let day in month) {
    if(month[day].valor>0){
        if(month[day].valor>max.valor){
            max = {...month[day]}
        } else if (month[day].valor<min.valor){
            min = {...month[day]}
        }
        days++
        average += month[day].valor
    }
}
average = average/days

for (let day in month) {
    if(month[day].valor>average){
        count++
    }
}
console.log(`O dia com o menor faturamento foi o dia ${min.dia} com o faturamento de R$ ${min.valor}!`)
console.log(`O dia com o maior faturamento foi o dia ${max.dia} com o faturamento de R$ ${max.valor}!`)
console.log(`O número de dias com o faturamento acima da média é: ${count}`)