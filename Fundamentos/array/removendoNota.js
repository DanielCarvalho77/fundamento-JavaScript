const notas = [10, 6, 8, 5.5, 10];

notas.pop();

console.log(notas);

const media = (notas[0] + notas [1] + notas [2] + notas[3]) / notas.length;

console.log(Math.round(media))

console.log(`A média é ${media}`);

//Arredondando a nota com template String
console.log(`A média é ` + Math.round(`${media}`));
