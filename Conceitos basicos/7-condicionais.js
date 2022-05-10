console.log`Condicionais`;

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos`);
console.log(listaDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
  console.log(`Boa Viagem`);
  listaDestinos.splice(1, 1); //SPLICE PARA DELETAR
} else {
  console.log(`Comprador não é maior de idade.`);
}

console.log(`Embarque: \n`);
if (idadeComprador >= 18 && estaAcompanhada) {
  console.log(`Você pode embarcar, Boa Viagem`);
} else {
  console.log(`Você não pode embarcar.`);
}

console.log(listaDestinos);

//OPERADORES LÓGICOS
console.log`OPERADORES LÓGICOS`;

console.log(idadeComprador > 18);
console.log(idadeComprador < 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);
console.log(idadeComprador == 18);
console.log(idadeComprador != 18);
