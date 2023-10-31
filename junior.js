//Crie uma função que receba uma string e retorne a mesma string, mas com todas as letras em maiúsculas.
const toUpperCase = (str) => {
  return str.toUpperCase()
};

//Escreva uma função que recebe duas strings como argumento e concatena-as em uma única string.
const concatStrings = (str1, str2) => {
  return str1.concat(str2);
};

//Crie uma função que recebe uma string como argumento e retorna o número de caracteres nessa string.
const numberString = (str) => {
  return str.length
};

//Crie uma função que receba uma palavra, e uma frase. Você deve verificar se existe esta palavra nesta frase e retornar true ou false.
const existKeyword = (keyword, str) => {
  return str.includes(keyword);
};

//Escreva uma função que recebe um array de números como argumento e retorna a soma de todos os números no array.
const sumAllItemsInArray = (arr) => {
  const soma = arr.reduce((acumulador,itemAtual)=>acumulador+itemAtual) 
  return soma
};

//Você receberá uma lista com nomes de usuarios, verifique se um usuario existe neste array e retorne true ou false.
const verifyUserInArray = (strArr, str) => {
  return strArr.includes(str)
};

//Escreva uma função que recebe dois números como argumento e retorna a soma deles.
const sumNumber = (num1, num2) => {
   const soma = num1 + num2
   return soma
};

//Crie uma função que recebe um número como argumento e verifica se ele é par ou ímpar retornando  a string "par" ou "impar"
const verifyNumberIsPairOrOdd = (num) => {
  if(num%2===0){
    return "par"
  }else{
    return"impar"
  }
};

module.exports = {
  toUpperCase,
  concatStrings,
  numberString,
  existKeyword,
  sumAllItemsInArray,
  verifyUserInArray,
  sumNumber,
  verifyNumberIsPairOrOdd,
};
