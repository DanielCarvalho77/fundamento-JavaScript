const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//Subistituto do FOR clássico
for (let nota of notas){
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;;

console.log(media);

//=============================================================================================================

const listaNomes = ["Daniel", "Ezequiel", "Ismael", "Amanda", "Igor"];

for (let indice of listaNomes) {
    console.log(indice);
}