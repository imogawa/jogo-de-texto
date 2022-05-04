/**
 * 
 * @param {string} mensagemDoPrompt 
 * @param {number} caminhoCerto 
 * @param {number} caminhoErrado 
 * 
 */

//Função para escolher a arma

function escolhaArma(mensagemDoPrompt, caminhoCerto, caminhoErrado) {
    //caminhoCerto = 2
    //caminhoErrado = 1
    escolha = 7

    while (escolha != 1 && escolha != 2) {
        escolha = prompt('Escolha 1: Katana\nEscolha 2: Naginata')

        if (escolha == 2) {
            location.href = "../../html/onna-bugeisha/historia-da-onna-bugeisha-parte-1.html";
        }
        else if (escolha == 1) {
            location.href = "../../html/onna-bugeisha/historia-da-onna-bugeisha-gameover-1.html";
        }
        else
            alert('Resposta inválida!\nEscolha entre 1 ou 2!')
    }

}

//Função para o "próximo movimento" 

function proximoMovimento(mensagemDoPrompt, caminhoCerto, caminhoErrado) {
    //caminhoCerto = 1
    //caminhoErrado = 2
    escolha = 7

    while (escolha != 1 && escolha != 2) {
        escolha = prompt('Escolha 1: Ataca com a kaiken\nEscolha 2: Atacar com a Naginata')

        if (escolha == 1) {
            location.href = "../../html/onna-bugeisha/historia-da-onna-bugeisha-parte-2.html";
        }
        else if (escolha == 2) {
            location.href = "../../html/onna-bugeisha/historia-da-onna-bugeisha-gameover-2.html";
        }
        else
            alert('Resposta inválida!\nEscolha entre 1 ou 2!')
    }

}