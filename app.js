// Função validarDados: Essa função encapsula a lógica de validação, tornando o código mais organizado e reutilizável.

function validarDados(nome, idade) {
    if (nome === "" || idade < 18) {
        return false;
    }
    return true;
}

let nomeUsuario = prompt("Qual seu nome?");
let idadeUsuario = prompt("Qual sua idade?");

if (validarDados(nomeUsuario, idadeUsuario)) {
    alert(`Olá, ${nomeUsuario}! Seja bem-vindo(a)!`);
} else {
    alert("Por favor, preencha todos os campos corretamente com dados válidos.");
}