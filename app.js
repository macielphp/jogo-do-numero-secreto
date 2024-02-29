// let numeroSecreto = GerarNUmeroAleatorio(); 
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto){
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// function exibirMensagemInicial() {
//     exibirTextoNaTela('h1', 'Jogo do número secreto')
//     exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
// }
// exibirMensagemInicial();

// function verificarChute(){
//     let chute = document.querySelector('input').value;
//     if (chute == numeroSecreto) {
//         exibirTextoNaTela('h1', 'Acertou!');
//         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
//         exibirTextoNaTela('p', mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p','O número secreto é menor.');
//         } else {
//             exibirTextoNaTela('p', 'O número secreto é maior.');
//         }
//         tentativas++;
//         limparCampo();
//     }
//     console.log(chute == numeroSecreto);

// }

// function GerarNUmeroAleatorio() {
//     return parseInt(Math.random() * 10 + 1);
// }

// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = ''; 
// }
// function reiniciarJogo() {
//     numereSecreto = GerarNUmeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled', true)
// }

function imc(altura, peso) {
    return peso / Math.pow(altura/100, 2);
}

var resultadoImc = (imc(175, 60));
alert(`IMC: ${resultadoImc.toFixed(2)}`)