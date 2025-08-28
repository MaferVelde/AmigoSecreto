// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let amigos = [];

function agregarAmigo () {
    if (!inputAmigo.value) {
        alert('Por favor, ingrese un nombre');
    } else {
        amigos.push(inputAmigo.value);
        listaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
    } limpiarCampo();
    return;
}

function limpiarCampo() {
    let textoCampo = document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    let random = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[random];
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
    if (amigos.includes(amigoSecreto)) {
        return sortearAmigo();
    }
    return;
}