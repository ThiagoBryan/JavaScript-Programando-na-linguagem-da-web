var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(){
    // previne comportamento padrão
    event.preventDefault();


var form = document.querySelector("#form-adiciona");
                                // para ter acessso aos input(dados)

//EXTRAINDO INFORMAÇÕES DO FORM

var paciente = obtemPaciententeDoFormulario(form); // criei uma função 

//CRIA A TR E A TD DO PACIENTE

var pacienteTr = montaTr(paciente); // criei uma função

//ADICONA PACIENTE NA TABELA
var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);

form.reset(); // limpar o campo
})

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








