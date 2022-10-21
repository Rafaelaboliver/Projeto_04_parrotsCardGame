let numberCards;
let divDeck;
let imgBack;

function parrotGame(){

    numberCards = prompt ('Insira o número de cartas');
    numberCards = [Number(numberCards)];
    console.log(numberCards);

    if (numberCards < 4) {
        alert('Número de cartas inválido! Insira entre 4 e 14 cartas.');
        parrotGame();

        
    } if (numberCards > 14) {
        alert('Número de cartas inválido! Insira entre 4 e 14 cartas.');
        parrotGame();

    };
    
    imgBack = ['parrot0', 'parrot0', 'parrot1', 'parrot1', 'parrot2', 'parrot2', 'parrot3', 
    'parrot3', 'parrot4', 'parrot4', 'parrot5', 'parrot5', 'parrot6', 'parrot6'];

    function addCards (){
        //adicionar as cartas no meu deck
        const divCard = document.querySelector('.cards-deck');

        let i = 0;
        while(numberCards > i){
                divDeck = `
                <div class="card-unit">
                    
                    <div class = "face front">
                        <img src="./imagens/front.png" >
                        
                    </div>
            
                    <div class="face back">
                        <img src="./imagens/${imgBack[i]}.gif" >
                    </div>
                 </div>
            `;
            divCard.innerHTML += divDeck;
            i++;
        }
        divDeck.addEventListener('click', clickCard)
    }
    addCards();

    function clickCard (){
        const cardSelected = document.querySelectorAll('.face');
        cardSelected[0].classList.toggle('flip');
        cardSelected[1].classList.toggle('flip');
        console.log(cardSelected[1].classList);
        
        clickCard(divDeck);
        console.log(clickCard(divDeck))

    }
        
   
}
parrotGame();
