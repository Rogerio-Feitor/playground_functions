// Desafio 4
function fizzBuzz(vetor) {
  let numeros = vetor
  let result;
  for (let i in numeros) {
  if(numeros[i] % 3 === 0 && numeros[i] % 5 === 0){
    result = 'fizzBuzz';
} else if(numeros[i] % 15 === 0){
    result = 'fizzBuzz';
} else if(numeros[i] % 5 === 0){
    result = 'buzz';
} else if(numeros[i] % 3 === 0){
    result = 'fizz';
} else if (numeros[i] % 3 !== 0 || numeros[i] % 5 !== 0){
    result = 'bug!';
} else {
  result = 'bug!';
}
console.log(result);
}
} 

    


fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 30, 45, 90, 100, 105, 110, 115, 120]);

  