const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

nomes.push("Daniel")

console.log(nomes);

//Set é uma classe do JavaScript
//Ele serve para retirar os arquivos duplicados 
//const meuSet = new Set(nomes);
//const nomesAtualizados = [...meuSet];
//                Ou
const nomesAtualizados = [... new Set(nomes)];

console.log(nomesAtualizados);