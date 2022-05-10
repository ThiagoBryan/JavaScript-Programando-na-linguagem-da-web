console.log(`Listas`);

const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJAneiro = `Rio de Janeiro`;

console.log(`Destinos`);
console.log(salvador, rioDeJAneiro, saoPaulo);

//COM ARRAY

const listaDestinos = new Array(
`Salvador`,
`São Paulo`,
`Rio de Janeiro`
);
listaDestinos.push(`Curitiba`) // PUSH = ADICIONADO MAIS UM ITEN NA LISTA
console.log(`Destinos`);
console.log(listaDestinos);

    //(PRIMEIRO NUMERO INDICA A POSIÇÃO DA LISTA, SEGUNDO NUMERO INDICA A QUANTIDADE A SER DELETADA A PARTIR DESSA POSIÇÃO)
listaDestinos.splice(1,1); //SPLICE PARA DELETAR
console.log(listaDestinos);

console.log(listaDestinos[1]);// PARA IMPRIMIR O ITEN QUE ESTA NESSA POSIÇÃO