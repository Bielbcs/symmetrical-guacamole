//#1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 0;
const b = 20;
const c = 30;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//#2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if(a>b){
    console.log('O maior número é a')
} else {
    console.log('O maior número é b')
}

//#3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

if(a > b && a > c){
    console.log(`${a} é o maior número`)
} else if(b > a && b > c){
    console.log(`${b} é o maior número`)
} else if(c > a && c > b){
    console.log(`${c} é o maior número`)
} else {
    console.log('Não tem um número maior')
}

//#4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

if(a > 0){
    console.log('positive')
} else if(a < 0){
    console.log('negative')
} else {
    console.log('zero')
}

//#5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function angulos (anguloUm, anguloDois, anguloTres){
    let soma = anguloUm+anguloDois+anguloTres

    if(soma == 180){
        console.log('true')
    } else if(soma != 180 && soma > 0){
        console.log('false')
    } else {
        console.log('ERROR')
    }
}
angulos(40, 60, 80);

//#6 Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

