document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'fries',
            img: 'images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          },
          {
            name: 'fries',
            img: 'images/fries.png'
          },
          {
            name: 'cheeseburger',
            img: 'images/cheeseburger.png'
          },
          {
            name: 'ice-cream',
            img: 'images/ice-cream.png'
          },
          {
            name: 'pizza',
            img: 'images/pizza.png'
          },
          {
            name: 'milkshake',
            img: 'images/milkshake.png'
          },
          {
            name: 'hotdog',
            img: 'images/hotdog.png'
          }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create your board

    function createBoard(){

        for (let i = 0 ; i < cardArray.length ; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/blank.png');
            card.setAttribute('data-id',i);
            card.addEventListener('click',flipCard)

            grid.appendChild(card);
        }


    }

    //check for matches

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTowId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('You found a match');
            cards[optionOneId].setAttribute('src','images/white.png');
            cards[optionTowId].setAttribute('src','images/white.png');
            cardsWon.push(cardsChosen)
        }else{
            alert('Soory, try again')
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTowId].setAttribute('src','images/blank.png');
        }
            cardsChosen = [];
            cardsChosenId = [];
            resultDisplay.textContent = cardsWon.length;

            if(cardsWon.length === cardArray.length/2){

                resultDisplay.textContent = 'Congratulation! you found them all!'



            }
    }
 

    //flip your card
    function flipCard(){
console.log("ICI c THIS ==> "+this);

        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if(cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }

    }


    createBoard();

})