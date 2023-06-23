const cliente = {
    nome: "André",
    idade: 32,
    cpf: "89089087633",
    email: "andre@dominio.com"
};

console.log(cliente.nome);

console.log(`O nome do cliente ${cliente.nome}, e essa pessoa tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do CPF do cliente é  ${cliente.cpf.substring(0,3)}`)
