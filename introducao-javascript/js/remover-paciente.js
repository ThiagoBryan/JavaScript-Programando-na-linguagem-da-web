var tabela = document.querySelector("table");

                        // dbl = duplo clique
tabela.addEventListener("dblclick",function(event){
   event.target.parentNode.classList.add("fadeOut"); // fadeOut esta no CSS

    setTimeout(function(){ // para aumentar o tempo e nao sumir rapido
        event.target.parentNode.remove();
    },1000);
});   // 1 segundo









