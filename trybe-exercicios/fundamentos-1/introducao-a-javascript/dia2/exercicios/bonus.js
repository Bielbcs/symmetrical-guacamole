let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


//Crescente

for(let index = 1; index < numbers.length; index += 1){
    for(let indexDois = 0; indexDois < index; indexDois += 1){
        if(numbers[index] < numbers[indexDois]){
            let position = numbers[index]
            numbers[index] = numbers[indexDois];
            numbers[indexDois] = position;
        }
    }
}
console.log(numbers);

//Decrescente
