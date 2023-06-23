//Revisando 4 formas de criar uma função.

const nomes = ["Daniel", "Amanda", "Isamel", "Ezequiel"]

nomes.forEach(function(nome){
    console.log(nome);
});

console.log("================================================");

//invertendo a ordem
const nomes2 = nomes.reverse();

nomes2.forEach((nome) =>{
    console.log(nome);
});

console.log("================================================");

function imprimeNome (nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);

