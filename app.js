alert('Boas vindas ao jogo do número secreto');

let valorMaximo = 232;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
console.log(numeroSecreto);

let chuteUsuario;
let tentativas = 1;

while (chuteUsuario != numeroSecreto){
    chuteUsuario = prompt(`Escolha um número entre 1 e ${valorMaximo}`);
    if (chuteUsuario == numeroSecreto) {
        break;
    } else {
        if (chuteUsuario > numeroSecreto){
            alert(`É menor que ${chuteUsuario}`);
        } else{
            alert(`É maior que ${chuteUsuario}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto! É ${numeroSecreto}. Você fez ${tentativas} ${palavraTentativa}`);
