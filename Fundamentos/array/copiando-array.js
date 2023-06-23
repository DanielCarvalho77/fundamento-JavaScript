const notas = [7, 7, 8, 9];

//Copiando um array principal, onde o push não influencia o array secundário
//Para isso é usado o ...
//Isso é chamado de spread operator
const novasNotas = [...notas];

novasNotas.push(10);

console.log(`As novas notas são ${novasNotas}`)
console.log(`As notas originais são ${notas}`)