let numberCards;
let imgBack;

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


function addCards (){
    //adicionar as cartas no meu deck
    let divCard = document.querySelector('.cards-deck');
    console.log(divCard);

    let i = 0
    while (i < numberCards) {
        let divDeck = `
        <div class="card-unit" onclick="clickCard(this)">
                
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

    

function clickCard (cardSelected){
    cardSelected.querySelector('.back').classList.toggle('flipped');
    cardSelected.querySelector('.front').classList.toggle('flipped');
};
clickCard ();
console.log(clickCard());


