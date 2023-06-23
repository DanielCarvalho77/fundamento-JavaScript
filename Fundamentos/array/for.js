const numeros = [100, 200, 300, 400, 500, 600, 9 , 8];

for(let indice = 0; indice < numeros.length; indice++){
    console.log(numeros[indice]);
}

let soma = 0;

for (let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

const media = soma / numeros.length;

console.log(`A média dos numeros é ${media}`);