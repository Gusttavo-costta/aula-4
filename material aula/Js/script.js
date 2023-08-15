const divTeste = document.getElementById("teste");


divTeste.addEventListener('click', alerta);
divTeste.addEventListener('mouseenter', entraDiv );
divTeste.addEventListener('mouseout', function(){
    
})

function entraDiv(){
    divTeste.style.backgroundColor = "green";
    divTeste.style.color = "black";
    // divTeste.innerText = "Você entrou na div"
    divTeste.innerHTML = "<h4>Você entrou na div!</h4>"
}

function alerta(){
    window.alert("você clicou na div!");
}