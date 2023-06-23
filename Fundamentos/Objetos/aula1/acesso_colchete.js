const cliente = {
    nome: "André",
    idade: 32,
    cpf: "89089087633",
    email: "andre@dominio.com"
};

console.log(cliente.nome);

console.log(`O nome do cliente ${cliente["nome"]}, e essa pessoa tem ${cliente["idade"]} anos`);

const chaves =  ["nome", "idade", "cpf", "email"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]} `);
});
