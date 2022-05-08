
function estrategiaNinja(mensagemDoPrompt, caminhoCerto, caminhoErrado) {
    //caminhoCerto = 1
    //caminhoErrado = 2
    escolha = 7

    while (escolha != 1 && escolha != 2) {
        escolha = prompt('Escolha 1: Entrar sorrateiramente\nEscolha 2: Entrar pela porta da frente matando dois monges que estavam fazendo suas orações')

        if (escolha == 1) {
            location.href = "../html/historia-do-ninja-parte-1.html";
        }
        else if (escolha == 2) {
            location.href = "../html/historia-do-ninja-gameover-1.html";
        }
        else
            alert('Resposta inválida!\nEscolha entre 1 ou 2!')
    }

}

function segundaEstrategia(mensagemDoPrompt, caminhoCerto, caminhoErrado) {
    //caminhoCerto = 1
    //caminhoErrado = 2
    escolha = 7

    while (escolha != 1 && escolha != 2) {
        escolha = prompt('Escolha 1: Você se esconde\nEscolha 2: Já espera em posição de ataque')

        if (escolha == 1) {
            location.href = "../html/historia-do-ninja-parte-2.html";
        }
        else if (escolha == 2) {
            location.href = "../html/historia-do-ninja-gameover-2.html";
        }
        else
            alert('Resposta inválida!\nEscolha entre 1 ou 2!')
    }

}

function ultimaEstrategia(mensagemDoPrompt, caminhoCerto, caminhoErrado) {
    //caminhoCerto = 2
    //caminhoErrado = 1
    escolha = 7

    while (escolha != 1 && escolha != 2) {
        escolha = prompt('Escolha 1: Você rouba o que foi exigido e vai embora\nEscolha 2: Você rouba o espelho e alguns itens que consegue carregar e vai embora')

        if (escolha == 1) {
            location.href = "../html/historia-do-ninja-gameover-3.html";
        }
        else if (escolha == 2) {
            location.href = "../html/historia-do-ninja-parte-4.html";
        }
        else
            alert('Resposta inválida!\nEscolha entre 1 ou 2!')
    }

}