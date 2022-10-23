//variáveis globais
let numberCards;
let imgBack;
let imgBackRandom;
let cardCheck = [];
let matches = 0;
let clickGame = 0;

//coletar o número de cartas desejado;
//implementar condições para que haja um intervalo e enviar um alerta caso esteja fora do solicitado;
//limpar a variável que armazena o valor para não acrescentar na próxima rodada;
//rodar o prompt novamente;
function parrotGame(){

    numberCards = prompt ('Insira o número de cartas');
    numberCards = [Number(numberCards)];
    console.log(numberCards);

    
    for (let i = 0; numberCards < 4; i++) {
        alert('Número de cartas inválido! Insira entre 4 e 14 cartas.');
        numberCards = '';
        parrotGame();
    };
    
    for (let j = 0; numberCards > 14; j++) {
        alert('Número de cartas inválido! Insira entre 4 e 14 cartas.');
        numberCards = '';
        parrotGame();
    };
     
};
parrotGame();

imgBack = ['parrot0', 'parrot0', 'parrot1', 'parrot1', 'parrot2', 'parrot2', 'parrot3', 
'parrot3', 'parrot4', 'parrot4', 'parrot5', 'parrot5', 'parrot6', 'parrot6'];

//função para embaralhar as cartas;
//criar um novo array vazio que vai coletar as imagens do imgBack;
//fazer com que tenha o mesmo comprimento do anterior;
//aplicar o comando que faz o "embaralhamento" e aplicar essa nova variável na estrutura do html;

//imgBackRandom = [];
//while(imgBackRandom.length !== imgBack.length){
    //imgBackRandom.sort(imgBack);

    //if (imgBackRandom.indexOf(imgBack[i]) < 0){
       // imgBackRandom.push(imgBack[i]);
   // }
//};


//pegar a estrutura do meu html e trazer para o javaScript, proveitando um modelo para gerar todas as cartas;
//aplicar a distribuição em função do número informado no início do jogo;
function addCards (){
    
    let divCard = document.querySelector('.cards-deck');

    let i = 0
    while (i < numberCards) {
        let divDeck = `
        <div class="card-unit" id="${imgBack[i]}" onclick="clickCard(this)">
                
            <div class = "face front">
                <img src="./imagens/front.png" >
            </div>
        
            <div class="face back">
                <img src="./imagens/${imgBack[i]}.gif" >
            </div>

        </div>
        `
        divCard.innerHTML += divDeck;
        i++;
    
    };
       
}; 
addCards();
    
//função para virar e desvirar as cartas, aplicando a classe do CSS que vai dar o efeito de rotação;
//criar uma lista vazia que possa armazenar as cartas que forem clicadas e essa lista deve ter comprimento < 2;
//a condição criada deverá conter os comandos de clickCard pois essa é a função que executa o clique na carta;
//se ocorrer um terceiro clique, todas as imagens desviramm;
function clickCard (cardSelected){

    if (cardCheck.length < 2){
        //se a carta já possuir as três classes (face, back e flipped) esse if faz com que o segundo clique sob ela não seja contabilizado e retorna;
        if (cardSelected.querySelector('.back').classList.length > 2) {
            return; 
        }

        cardSelected.querySelector('.back').classList.toggle('flipped');
        cardSelected.querySelector('.front').classList.toggle('flipped');

        cardCheck.push(cardSelected);  
        console.log(cardCheck);

        if (cardCheck.length === 2){
            if (cardCheck[0].id === cardCheck[1].id){
                cardCheck[0].childNodes[1].classList.toggle('match');
                cardCheck[0].childNodes[3].classList.toggle('match');
                cardCheck[1].childNodes[1].classList.toggle('match');
                cardCheck[1].childNodes[3].classList.toggle('match');

                matches++
                console.log(matches)
                cardCheck = [];
                
            } else{
                setTimeout(() => 
                {cardCheck[0].childNodes[1].classList.toggle('flipped');
                cardCheck[0].childNodes[3].classList.toggle('flipped');
                cardCheck[1].childNodes[1].classList.toggle('flipped');
                cardCheck[1].childNodes[3].classList.toggle('flipped');

                cardCheck = [] }, 1500); 
                
            }
        }
        
             
    } else {

        cardCheck[0].childNodes[1].classList.toggle('flipped');
        cardCheck[0].childNodes[3].classList.toggle('flipped');
        cardCheck[1].childNodes[1].classList.toggle('flipped');
        cardCheck[1].childNodes[3].classList.toggle('flipped');

        cardCheck = [];
    }
    clickGame++;
    
    function endGame(){
        let gameFinished = matches*2;
        if (gameFinished == numberCards){
            alert (`Você ganhou o jogo em ${clickGame} jogadas!`);
        }
    };
    endGame();

};
clickCard ();




//fazer com que a carta, quando igual, permaneça virada e, quando diferente, fique dois segundos virada e desvire;
//se as imagens possuir o mesmo nome, elas permanecem pra cima;
//caso contrário, elas perdem a classe flipped;
