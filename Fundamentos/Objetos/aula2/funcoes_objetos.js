const cliente = {
    nome: "João",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11855664433", "11855669999"],
    saldo: 200,  
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Saldo atual de $${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(250);
