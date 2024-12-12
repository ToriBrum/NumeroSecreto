alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 42;
let chuteUsuario;
let tentativas = 1;

while (chuteUsuario != numeroSecreto){
    chuteUsuario = prompt('Escolha um número entre 1 e 100');
    if (chuteUsuario == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto! É ${numeroSecreto}. Você fez ${tentativas} tentativas.`);
    } else {
        if (chuteUsuario > numeroSecreto){
            alert(`Quase acertou, é menor que ${chuteUsuario}`);
        } else{
            alert(`Quase acertou, é maior que ${chuteUsuario}`);
        }
        tentativas++
    }
}
