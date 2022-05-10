console.log("Atribuição de Variáveis");

const idade= 29;
const primeiroNome = "Thiago";
const sobrenome = "Thurler";

console.log(primeiroNome + sobrenome);
console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome , sobrenome);

console.log(`Meu nome é ${primeiroNome} ${sobrenome}.`  ,`Idade: ${idade}`);//OUTRO JEITO DE ESCREVER

let contador = 0;   //SE USA LET QUANDO VOCE PRECISA MUDAR A VARIAVEL
contador = contador + 1;

let idade1 = 29;
idade1 =  idade1 + 1;
console.log(idade1);

//SOBREESCREVER
primeiroNome = primeiroNome + sobrenome; //VAI DA ERRO, POIS ESTA COMO CONST, ENTAO NÃO PODE MUDAR, TERIA SER COM LET
console.log(primeiroNome);