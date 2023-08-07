function getRandomCard(){
    let random=Math.floor(Math.random()*13)+1;
    if(random===1) return 11;
    else if(random > 10) return 10;
    else return random;
}
let sum = 0;
let cards=[]; 
let isAlive=false;
let hasBlackJack=false;
let message="";
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards = [firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}
function renderGame(){
    cardsEl.textContent="cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+= cards[i] + " ";
    }
    sumEl.textContent= "sum: " + sum;
    if(sum<=20){
        message="do you want to draw a new card?";
    }else if(sum === 21){
        message="wohoo! you've got blockjack";
        hasBlackJack=true;
    }else{
        message="you're out of the game";
        isAlive=false;
    }
    messageEl.textContent=message;
}
function newCard(){
    if(isAlive&&!hasBlackJack){
        let card=getRandomCard();
        sum+=card;
        cards.push(card);
        renderGame();
    }
}