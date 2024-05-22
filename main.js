var jogador = "x";

function jogar(celula){

  //verificar se a celula esta vazia

  if(celula.innerHTML === ""){
    //escreva na celula
    celula.innerHTML = jogador; 

    //alternar jogada
    if(jogador === "x"){ //se jogador igual a x faça
      jogador = "o";
    } else { //se não
      jogador = "x";
    }
  }
}

function reiniciar(){
  window.location.reload();
}