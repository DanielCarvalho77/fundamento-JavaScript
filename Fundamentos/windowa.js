var signo = prompt("Qual é o seu signo?");

if (signo.toLowerCase() == "escorpião") {
  alert("Legal! Eu sou de Escorpião também!");
}else{
    window.close;
}


//há muitas formas de se usar o recurso prompt
var sign = window.prompt(); // abrir uma janela de promtpt em branco
var sign = prompt();       //  abrir uma janela de promtpt em branco
var sign = window.prompt('Você está se sentindo com sorte'); // abrir uma janela com o texto "Você está se sentindo com sorte"
var sign = window.prompt('Você está se sentindo com sorte', 'certamente'); // abrir uma janela com o texto "Você está se sentindo com sorte" e com o valor padrão "certamente"