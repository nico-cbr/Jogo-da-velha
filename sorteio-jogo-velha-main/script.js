var jogador = "x";

function jogar(celula) {
    // esse jogar no html esta marcado como "jogar(this)";
    //verificar se a celula está vazia
    if (celula.innerHTML === "") {
        //escreva na celular
        celula.innerHTML = jogador;//até aqui ele coloca x se o campo estiver vazio

        //alternar jogada
        //se jogada for igual a "x"
        if (jogador === "x") {
            jogador = "O";
            celula.style.backgroundColor="#ff5e0085"//cor laranja
        } else { //se jogada for "0", repita x
            jogador = "x";
            celula.style.backgroundColor="#6494ed91"//cor azul
        }
    }
}
//botão de reiniciar
function reiniciar(){
    window.location.reload();
}


//criando uma lista no JavaScript
let nomes = ['Julio', 'Martin', 'Steve', 'Jhonas', 'Mario'];
//posições      0         1        2        3         4      indexadores

gerarBatalha();
function gerarBatalha(){
    let nome1 = nomes[ Math.floor( Math.random() * nomes.length )];
    let nome2 = nomes[ Math.floor( Math.random() * nomes.length )];

    //gera batlha de novo, quando nome1 
    if(nome1 === nome2){
        gerarBatalha();
    }else{
        //escreva na tela 
        document.getElementById('jogador').textContent = nome1 + " vs " + nome2;
    

    console.log(`Batalha de vez: ${nome1}  x ${nome2}`);

    let numero = Math.random();
    //Math.floor arredonda o numero
    console.log('Numero sorteado:' + numero);
    console.log('posição da lista sem arredondar: '+ numero * nomes.length);
    console.log('posição da lista arredondamento: '+ Math.floor(numero * nomes.length));
    console.log('Nome sorteado: '+ nomes[ Math.floor( numero * nomes.length )]);
    }
}

function adicionar(){
    var nome = document.getElementById("nome").value;
    //adicionar valor de nome na lista
    nomes.push(nome);
    var nome = document.getElementById("nome").value = "";
    listar();
}

listar();

function listar(){
    var listagem = document.getElementById("lista");
    //limpar a lista
    listagem.innerHTML = "";

    //    roda enquanto contador for menor que o tamanho da lista - 6
    for(var contador = 0; contador < nomes.length; contador++){
        var item = document.createElement("li");
        var valor = nomes[contador];
        item.innerHTML = valor;
        listagem.appendChild(item);
    }
}