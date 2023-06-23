let x =  "";
console.log(x);
x = "Eu fui declarado";


function imprimeTexto(texto){
    console.log(texto);
}

imprimeTexto("oi");
imprimeTexto("Outro texto");
imprimeTexto(x);

//=====================================
function soma(){
    return 2 + 2;
}

console.log(soma());

//=====================================
//Uma função chamando outra função
imprimeTexto(soma());
