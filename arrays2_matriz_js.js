/*
Crie um arquivo chamado arrays2_matriz_js.html, e vamos fazer um algoritmo:

a. Crie uma matriz [3][11] que armazenará a tabela abaixo.
 
b. No mesmo código, responda através de um alert, qual a representação lógica da tabela montada acima dentro da matemática?

c. Em um segundo alert, explique como chegou nessa conclusão.

*/

let matriz;

matriz = [
  [2, 0, 0],
  [2, 1, 2],
  [2, 2, 4],
  [2, 3, 6],
  [2, 4, 8],
  [2, 5, 10],
  [2, 6, 12],
  [2, 7, 14],
  [2, 8, 16],
  [2, 9, 18],
  [2, 10, 20],
];
console.log(matriz);

alert(`É uma tabela representando uma tabuada.`);
alert(
  `É uma tabuada de multiplicação do 2 onde a primeira coluna * a segunda coluna é igual a terceira coluna.`
);
