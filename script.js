let numberCards;
let divCard;

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
    
    const imgBack = ['parrot0', 'parrot1', 'parrot2', 'parrot3', 'parrot4', 'parrot5', 'parrot6', 
    'parrot7', 'parrot8', 'parrot9', 'parrot10', 'parrot11', 'parrot12', 'parrot13'];
    
    function addCards (){
        //adicionar as cartas no meu deck
        divCard = document.querySelector('.cards-deck');

        let i = 0;
        while(numberCards > i){
            const divDeck = `
                <div class="card-unit">
                    
                    <div class = "face front">
                        <img src="./imagens/${imgBack[i]}.gif" >
                    </div>
            
                    <div class="face back">
                        <img src="./imagens/front.png" >
                    </div>
                 </div>
            `;
            divCard.innerHTML += divDeck;
            i++;
        }

    }
    addCards();

    divCard.addEventListener('click', clickCard, false);

    function clickCard (){
        const cardSelected = document.querySelectorAll('.face');
         cardSelected[0].classList.toggle('flip');
         cardSelected[1].classList.toggle('flip');
         console.log(cardSelected[1].classList);
        }
        clickCard();
   
}
parrotGame();
