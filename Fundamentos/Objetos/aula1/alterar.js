const pessoa = {
    nome:"Luma",
    profissao: "Engenheira",
}

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "11 23234543";

console.log(pessoa.telefone);

pessoa.nome =   "Luma Silva";

console.log(pessoa);

const novaPesssoa = {
    nome: "Pedro"
}

//Isso dá erro porque const não deixe reatribuir 
pessoa = novaPesssoa;
