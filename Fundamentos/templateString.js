const nome = "Daniel";
const idade = 28;
const cidadeNascimento = "Curitiba";

//O exemplo abaixo, não é uma boa prática de progração
//const apresetacao = "Me chamo " + nome + ", tenho " + idade + " anos e nasci em " + cidadeNascimento;

//Podemos substituir o exemplo acima, com o o exemplo a seguir, usando o Template Sring
const apresetacao = `Me chamo  ${nome}, tenho ${idade} anos e nasci em ${cidadeNascimento}`;

console.log(apresetacao);
