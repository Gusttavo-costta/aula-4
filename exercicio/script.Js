const CorInput = document.getElementById("nome");


CorInput.addEventListener('focusin', mudacorA );
CorInput.addEventListener('focusout', mudacorB );


function mudacorA(){
    CorInput.style.backgroundColor = "yellow";
}


function mudacorB(){
    if (CorInput.value.length == 0){
        CorInput.style.backgroundColor = "white"
    } else {
        if (CorInput.value.length >= 3){
            CorInput.style.background = "green"
        } else {
            CorInput.style.background = "red"
            var resposta = document.getElementById("resposta");
            resposta.innerText = "O numero de caracteres não é suficiente!";
        }
    }
    
}
