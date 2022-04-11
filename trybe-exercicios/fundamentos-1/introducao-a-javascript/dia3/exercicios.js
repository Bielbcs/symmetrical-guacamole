//#1

let fatorial = 10;
let resultado = fatorial;

for(let i = 1;i < fatorial;i += 1){
    resultado *= i;
}
console.log(resultado);

//#2
let word = 'tryber';
let reverseWord = '';

for(let i = word.length - 1; i > 0 - 1; i -= 1){
    reverseWord += word[i];
}
console.log(reverseWord);

//#3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let max = 0
let maiorWord = ''
for(let i = 0; i < array.length; i += 1){
    let n = array[i];
    let w = n.length;
    if(w > max){
        max = w;
        maiorWord = n;
    }
}
console.log(`A maior palavra é ${maiorWord} com ${max} letras!`);

//#4
let numerosPrimos = [];
let numeros = 50;

for(let i = 0; i < numeros; i += 1){
    let divisores = 0;
    for(var n = 1; n <= i; n += 1){
        if(i % n === 0){
            divisores+=1;
        }
    }
    if(divisores == 2){
        numerosPrimos.push(i);
    }
}
let ultimoNumero = numerosPrimos.length - 1;

console.log(`${numerosPrimos} são os números primos de 1 a ${numeros}. O maior número primo é ${numerosPrimos[ultimoNumero]}`);