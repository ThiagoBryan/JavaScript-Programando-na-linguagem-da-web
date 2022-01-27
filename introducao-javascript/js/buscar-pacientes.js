var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
                // faz requisições como buscar algum endereço na web
    var xhr = new XMLHttpRequest();
     //abre a URL
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
            // pega o endereço URL
    
                         // carega a resposta        
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            
            var resposta = xhr.responseText;
             // transformar o JSON em array no JS     
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
            }else{
               var erroAjax = document.querySelector("erro-ajax");
                erroAjax.classList.remove("inisivel");
            }
});
    
 xhr.send(); // envia a resposta

});