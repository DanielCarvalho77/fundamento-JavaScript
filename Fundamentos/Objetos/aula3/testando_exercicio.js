const paciente = {
    nome: "James T.",
    idade: 30,
    email: "jt@email.com",
    identicacao: "Alpha01259859",
    funcao: "comandante",
    peso: 80.1,
    altura: 1.80,
    calcularIMC: function () {
        return (this.peso / (Math.pow(this.altura, 2)))
    },
    
    nomeCompleto: function () {
        console.log(this.nome)
    }
}

let dados = "";
for (let info in paciente) {
    if (typeof paciente[info] === "object" || typeof paciente[info] === "function") {
        console.log(`A propriedade é ${info} e seu valor é ${paciente[info]}`)
        //console.log("É um objeto ou uma função")
    } else {
        dados += `${info} ==> ${paciente[info]}
  `}
};


