function palindromos(word){
  let normal = [];
  let reverse = [];
  for(let index = 0; index < word.length; index += 1){
    normal.push(word[index]);
  }
  for(let j = word.length - 1; j >= 0; j -= 1){
      reverse.push(word[j]);
  }

  let n = normal.join('');
  let r = reverse.join('');

  if(n === r){
      return true;
  } else {
      return false;
  }
}
console.log(palindromos('arara'));
console.log(palindromos('desenvolvimento'));

//-----------------------------------------------------

function maiorValor(numeros){
    let maior = 0;
    for(let index in numeros){
        if(numeros[maior] < numeros[index]){
            maior = index;
        }
    }
    return maior;
}
console.log(maiorValor([7,15,6,26,2]));

//-----------------------------------------------------

function menorValor(numeros){
    let menor = 0;
    for(let index in numeros){
        if(numeros[menor] > numeros[index]){
            menor = index;
        }
    }
    return menor;
}
console.log(menorValor([7,15,6,26,2]));

//-----------------------------------------------------

function maiorNome(nomes){
    let maisLetras = nomes[0];
    for(let index in nomes){
        if(maisLetras.length < nomes[index].length){
            maisLetras = nomes[index];
        }
    }
    return maisLetras;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//-----------------------------------------------------
