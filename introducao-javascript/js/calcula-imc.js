 
 
 // para pegar algo no HTML
 var titulo = document.querySelector(".titulo");
 // para pegar um texto e modifica-lo
titulo.textContent = "Aparecida Nutricionista";
                                    //busca todos                 // # buscar o id
var pacientes = document.querySelectorAll(".paciente");
                            //tamanho do array(lista)
for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i]; // para cada vez q passar no for
                                // a variavel paciente é um iten da lista
    
    var tdPeso = paciente.querySelector(".info-peso");// . serve pra buscar class
    var peso = tdPeso.textContent; // acessa o conteudo de peso 
    // td ver no HTML
    var tdAltura  = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura); // true ou false
       
        // ! negação
    if(!pesoEhValido) { // testa se peso é inválido
    pesoEhValido = false
    tdImc.textContent = "Peso Inválido!";
    paciente.classList.add("paciente-invalido"); // para mostrar em cor difente qual esta errado
    }                                          // foi criado no CSS
                
    if(!alturaEhValida) { // testa se altura é inválida
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida!";
    paciente.classList.add("paciente-invalido");
    }
                // && significa e // || significa ou
    if(alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
    }
    }


    function validaPeso(peso){
        if(peso >= 0 && peso < 1000){
                return true
        }else{
                return false;
        }
    }
    
    function validaAltura(altura){
        if (altura >= 0 && altura <= 3.00){
                return true;
        }else{
                return false;
        }
    }

    
   function calculaImc(peso,altura){
        var imc = 0;
        imc = peso / (altura * altura); 
        return imc.toFixed(2); // tdImc.texteContent serve para exibir o imc do paciente        // toFixed serve para imprimir casas decimais(2)
}






    







