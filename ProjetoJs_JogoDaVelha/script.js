let jogador = "";
let pontuacao = {};

function iniciarJogo() {
    jogador = "X";
    document.querySelector("#jogadorDoTurno").textContent = jogador;

    pontuacao = {
        X: {
            linha1: 0,
            linha2: 0,
            linha3: 0,
            coluna1: 0,
            coluna2: 0,
            coluna3: 0,
            diagonal1: 0,
            diagonal2: 0,
        },
        O: {
            linha1: 0,
            linha2: 0,
            linha3: 0,
            coluna1: 0,
            coluna2: 0,
            coluna3: 0,
            diagonal1: 0,
            diagonal2: 0,
        }
    };

    let campos = document.querySelectorAll("div");

    for(let campo of campos){
        campo.textContent = "";
        campo.addEventListener("click", marcador);
    }
}

function removerIconeDoMarcador(){
    let campos = document.querySelectorAll("div");

    for(let campo of campos){
        campo.removeEventListener("click", marcador);
    }
}

function marcador(){
    if(event.target.textContent == ""){
        event.target.textContent = jogador;
        confereResultado(event.target.classList.value.split(" "));
        trocarJogador();
        document.querySelector("#jogadorDoTurno").textContent = jogador;
    }
}

function trocarJogador(){
    if(jogador == "X"){
        jogador = "O";
    }else{
        jogador = "X";
    }
}

function confereResultado(classes){
    for(let classe of classes){
        pontuacao[jogador][classe] += 1;

        if(pontuacao[jogador][classe] == 3){
            alert("Jogador " + jogador + " ganhou!")
            removerIconeDoMarcador();
            return;
        }
    }
}

document.querySelector("#reiniciar").addEventListener("click", iniciarJogo);


iniciarJogo();