const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ]; 

  for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if(tipo !== 'object' && tipo !== 'function'){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
  }

//   for (let chave in cliente){
    //Acessando somente as propriedades do objeto.
    //console.log(chave);
    //Acessando as propriedades e valores dos objeto.
//     console.log(cliente[chave]);
//   }

//   for (let chave in cliente) {
//     if (Object.hasOwnProperty.call(cliente, chave)) {
//         const element = cliente[chave];
//         console.log(element);
//     }
//   }
