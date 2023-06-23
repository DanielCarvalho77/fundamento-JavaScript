const dataAniversario = [
    {name: 'Fulano', niver: '30/05'},
    {name: 'Lucca', niver: '17/06'},
    {name: 'Ciclano', niver: '-05/06'}
];

const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
dataAtual = dia + '/' + mes;

const hoje = dataAniversario.find(verifica => verifica.niver == dataAtual.toString());

console.log(`Parabéns ${hoje.name} pelo seu dia, feliz aniversário.`);