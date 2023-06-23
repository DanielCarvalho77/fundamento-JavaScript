//Operador ternário
const idadeMinima = 18;
const idadeCliente = 16;

/*
if (idadeCliente >= idadeMinima){
    console.log("cerveja");
}else {
    console.log("Suco");
}
*/

//operador ternário, pode substituir o if acima.
//          |         condição         |   true     |  false |          
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco");
