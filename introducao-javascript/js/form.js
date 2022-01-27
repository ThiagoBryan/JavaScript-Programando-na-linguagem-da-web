var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){ //titulo.addEventListener("click", function() {}
    // escutar o evento quando o ususario(alguma ação)                                  // funçao anônima
                                                    
 // previne comportamento padrão
 event.preventDefault();
    
    
var form = document.querySelector("#form-adiciona");
                                // para ter acessso aos input(dados)

//EXTRAINDO INFORMAÇÕES DO FORM

var paciente = obtemPaciententeDoFormulario(form); // criei uma função 

var erros = validaPaciente(paciente);

if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
}

adicionaPacienteNaTabela(paciente); // Função

form.reset(); // limpar o campo
var mensagensErro = document.querySelector ("#mensagens-erro");
mensagensErro.innerHTML = "";
  // permite controlar o HTML interno de um elemento
    // neste caso vai apagar as mensagens de erro e trocar pela nova mensagem
})

function adicionaPacienteNaTabela(paciente){
    //CRIA A TR E A TD DO PACIENTE

    var pacienteTr = montaTr(paciente); // criei uma função
    
    //ADICONA PACIENTE NA TABELA
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
   // permite controlar o HTML interno de um elemento
   
   erros.forEach(function(erro){ // forEach pega cada item do array executa a funçao 
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
    // para colocar dentro do JS
 });
}

function obtemPaciententeDoFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,    //.value para pegar os valores
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }

    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); 
                        // para criar um novo elemento
                        // nesse caso para adicionar mais uma linha.

     // adiciona as td´s na tr     //tem que passar 2 parâmetros da função (dado,classe)
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));  
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));  // criando mais linhas para
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));  // inserir os dados do novo 
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));  // paciente
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
                         //função criada pata montar as td    
    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado; // passar um dado
    td.classList.add(classe); // add a classe q recebe com argumento

    return td;
}


function validaPaciente(paciente){

    var erros = [];

    if( paciente.nome.length == 0){
        erros.push("O nome nâo pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){ // para validar um peso real
        erros.push("Peso é Inválido");
    }   // para colocar algo no array
    
    if(!validaAltura(paciente.altura)){ // para validar uma altura real
        erros.push("Altura é Inválida");
    }

    if( paciente.gordura.length == 0){ // para o campo gordura nao ficar em branco
        erros.push("A gordura não pode ser em branco");
    }

    if ( paciente.peso.length == 0){ // para o campo peso nao ficar em branco
        erros.push("O peso nao pode ser em branco");
    }

    if ( paciente.altura.length == 0){ // para o campo altura nao ficar em branco
        erros.push("A altura nao pode ser em branco");
    }
        return erros;
}











