const notas = [10, 9.5, 8, 7, 6];

// Método map vai sobrescrever o array

const notasAtualizadas = notas.map((nota) =>{
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(notasAtualizadas)


// const notasAtualizadas = notas.map((nota) =>{
//     let aux = nota + 1;
//     if(aux > 10){
//         return aux = 10;
//     }else{
//         return aux;
//     }
// });
