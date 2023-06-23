const data = new Date();
const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
dataAtual = dia + '/' + mes;
console.log(dataAtual.toString());