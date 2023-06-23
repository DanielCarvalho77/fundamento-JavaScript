const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota){
    console.log(somaDasNotas += nota);
});

const media = somaDasNotas / notas.length;
console.log(`A soma das notas é ${media}`);

notas.forEach(function(nota){
    console.log(`O número ${nota} elevado ao cubo é ` + nota ** 3);
});

console.log("============================");

notas.forEach(function(nota, indice){
    somaDasNotas += nota;
    console.log(indice);
});
