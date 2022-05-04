

function lutePorSuaVida() {
    //caminhoCerto = 1
    //caminhoErrado = 2
    escolha = 7

    while (escolha != 1 && escolha != 2) {
        escolha = prompt('Escolha 1: Você ataca\nEscolha 2: Você se defende')

        if (escolha == 1) {
            location.href = "../../html/sohei/historia-do-sohei-parte-1.html";
        }
        else if (escolha == 2) {
            location.href = "../../html/sohei/historia-do-sohei-gameover-1.html";
        }
        else
            alert('Resposta inválida!\nEscolha entre 1 ou 2!')
    }

}

function outraDecisao() {
    //caminhoCerto = 1
    //caminhoErrado = 2
    escolha = 7

    while (escolha != 1 && escolha != 2) {
        escolha = prompt('Escolha 1: Se defende com a primeira coisa que encontra pela frente\nEscolha 2: Ataca com a primeira coisa que encontra pela frente')

        if (escolha == 1) {
            location.href = "../../html/sohei/historia-do-sohei-parte-2.html";
        }
        else if (escolha == 2) {
            location.href = "../../html/sohei/historia-do-sohei-game-over-2.html";
        }
        else
            alert('Resposta inválida!\nEscolha entre 1 ou 2!')
    }

}

function ultimaDecisao() {
    //caminhoCerto = 2
    //caminhoErrado = 1
    escolha = 7

    while (escolha != 1 && escolha != 2) {
        escolha = prompt('Escolha 1: Atacar o adversário\nEscolha 2: Fugir para não ser morto')

        if (escolha == 1) {
            location.href = "../../html/sohei/historia-do-sohei-gameover-3.html";
        }
        else if (escolha == 2) {
            location.href = "../../html/sohei/historia-do-sohei-parte-3.html";
        }
        else
            alert('Resposta inválida!\nEscolha entre 1 ou 2!')
    }

}
