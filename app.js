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

     //flip your card
     function flipCard(){
       
       var cardId = this.getAttribute('data-id');
       console.log("ICI c cardid ==> "+cardId);
              cardsChosen.push(cardArray[cardId].name);
              // console.log("==> "+cardArray[cardId].name);
              
              cardsChosenId.push(cardId);
              this.setAttribute('src', cardArray[cardId].img);
              // console.log("cardsChosenId ==> " + cardsChosenId);
              // console.table(cardsChosenId)
      
              if(cardsChosen.length === 2){
                  setTimeout(checkForMatch, 500);
              }
      
          }

    //check for matches

    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        
        //pour masquer apres la comparaison
        const optionOneId = cardsChosenId[0];
        const optionTowId = cardsChosenId[1];
        console.log(optionOneId +" et "+optionTowId);

        //en compare les nom enregistrés dans le tableau cardsChosen
        if(cardsChosen[0] === cardsChosen[1]){
          console.log(cardsChosen[0] +" et "+cardsChosen[1]);
          
            alert('You found a match');
            cards[optionOneId].setAttribute('src','images/white.png');
            cards[optionTowId].setAttribute('src','images/white.png');
            //en place les cartes compatible dans le tableau cardsWon
            cardsWon.push(cardsChosen)
            console.log(cardsWon);
            
        }else{
            alert('Soory, try again')
            cards[optionOneId].setAttribute('src','images/blank.png');
            cards[optionTowId].setAttribute('src','images/blank.png');
        }

        //en réinistialise les tableaux cardsChosen et cardsChosenId
            cardsChosen = [];
            cardsChosenId = [];
            resultDisplay.textContent = cardsWon.length;

            if(cardsWon.length === cardArray.length/2){

               setTimeout( resultfinal ,5000);



            }
    }

    function resultfinal(){
      return resultDisplay.textContent = 'Congratulation! you found them all!';
    }
   


    createBoard();

})