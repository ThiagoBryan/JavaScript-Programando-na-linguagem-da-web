 
 
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

    var pesoEhValido = true;
    var alturaEhValida = true;
         // || significa ou
    if(peso <= 0 || peso >= 1000) {
    pesoEhValido = false
    tdImc.textContent = "Peso Inválido!";
    paciente.classList.add("paciente-invalido"); // para mostrar em cor difente qual esta errado
    }                                          // foi criado no CSS

    if(altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    tdImc.textContent = "Altura Inválida!";
    paciente.classList.add("paciente-invalido");
    }
                // && significa e
    if(alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2); // tdImc.texteContent serve para exibir o imc do paciente
    }        // toFixed serve para imprimir casas decimais(2)

    }
            // escutar o evento quando o ususario(alguma ação)
    //titulo.addEventListener("click", function() {}
                                    // funçao anônima
    
    var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function(){
        // previne comportamento padrão
        event.preventDefault();

        var form = document.querySelector("#form-adiciona");
                                    // para ter acessso aos input(dados)
    var nome = form.nome.value;
    var peso = form.peso.value;     //.value para pegar os valores
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr"); 
                            // para criar um novo elemento
                            // nesse caso para adicionar mais uma linha.
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td"); // criando mais linhas para
    var gorduraTd = document.createElement("td"); // inserir os dados do novo 
    var imcTd = document.createElement("td");     // paciente

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;   // criando as td's para
    alturaTd.textContent = altura; // o novo cliente
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);  // adiciona as td´s na tr
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);




        
    })
    






    







