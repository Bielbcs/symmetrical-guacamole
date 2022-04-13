let numbers = [6, 8, 4, 20, 70, 8, 300, -50, 36, 28];

//#1
for(let number of numbers){
    console.log(number);
}

//#2
let soma = 0;
for(let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log(soma);

//#3
let mediaAritmetica = soma/numbers.length;
console.log(mediaAritmetica);

//#4
if(mediaAritmetica > 20){
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual a 20')
}

//#5
let max = 0
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > max){
        max = numbers[index];
    }
}
console.log(max);

//#6
contador = 0
for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 != 0){
        contador++
    }
}
if(contador > 0){
    console.log(contador)
} else {
    console.log('nenhum valor ímpar encontrado :(')
}

//#7
let min = max;
for(index = 0; index < numbers.length; index += 1){
    if(numbers[index] < min){
        min = numbers[index];
    }
}
console.log(min);

//#8
valor = 25;
array = [];
for(let index = 0; index <= valor; index += 1){
    array.push(index);
}
console.log(array);

//#9
resultadoDivisao = [];
for(let index = 0; index < array.length; index += 1){
    resultadoDivisao.push(array[index]/2)
}
console.log(resultadoDivisao);