/*
function soma(){
    return 2 + 2;
}

console.log(soma());


function somaOutroNumero(){
    return 50 + 25;
}
*/
//=============================================

//Parâmetros de função
function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 4));
console.log(soma(4, 50));
console.log(soma(65, -487));
console.log(soma(1000, 3500));
console.log(soma(-10, -40));

//=============================================
console.log(" ");
console.log("============================================");


function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é  ${idade}`;
}

console.log(nomeIdade(29, "Daniel"));

console.log(" ");
//=============================================
console.log("============================================");


function multiplica (num1, num2){
    return num1 * num2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));



