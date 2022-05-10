console.log`Loops`;

const listaDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log(`\n Destinos`);
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

//WHILE
while (contador < 3) {
  if (listaDestinos[contador] == destino) {
    console.log("Destino Existe");
    destinoExiste = false;
    break;
  }
  contador += 1;
}
console.log (`Destino existe: `, destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}
//FOR
for(let i= 0 ;i < 3;i++){
    if (listaDestinos[i] == destino) {
       destinoExiste = false;
    }
  }