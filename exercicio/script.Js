const CorInput = document.getElementById("nome");


CorInput.addEventListener('focusin', mudacorA );
CorInput.addEventListener('focusout', mudacorB );


function mudacorA(){
    CorInput.style.backgroundColor = "yellow";
}

function mudacorB(){
    CorInput.style.backgroundColor = "green";
}
    