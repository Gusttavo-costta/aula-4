const emailDoUsuario = "fulano@gmail.com";
const senhaDoUsuario = "1234";

var botaoLogar = document.querySelector('Logar',);

botaoLugar.addEventListener('click', validar);

function validar(){
    var email = document.querySelector('#email').value;
    var email = document.querySelector('#senha').value;

    if (email === emailDoUsuario & senha === senhaDoUsuario) {
        window.alert("Seja bem vindo ao nosso site!");
        window.location.href = "https://www.google.com";
    }
    else {
        window.alert("Email ou senha incorretos! Insira as informações novamente!")
    }
}