const cardArray=[
    {name:'dog',
      img:'dog.jpg'},
      {name:'elephant',
      img:'elephant.jpg'},
      {name:'hippopotamus',
      img:'hippopotamus.png'},
      {name:'lion',
      img:'lion.jpg'},
      {name:'monkey',
      img:'monkey.jpg'},
      {name:'peacock',
      img:'peacock.jpg'},
      {name:'dog',
      img:'dog.jpg'},
      {name:'elephant',
      img:'elephant.jpg'},
      {name:'hippopotamus',
      img:'hippopotamus.png'},
      {name:'lion',
      img:'lion.jpg'},
      {name:'monkey',
      img:'monkey.jpg'},
      {name:'peacock',
      img:'peacock.jpg'}  

];
var cardsChosen=[];
var cardsChosenId=[];
const cardsWon=[];
cardArray.sort(()=>0.5-Math.random());

const grid=document.querySelector(".grid");
const resultDisplay=document.querySelector("#result");


function createBoard(){
    console.log("hey");
    for(let i=0;i<cardArray.length;i++){
    var card=document.createElement("img");
    card.setAttribute("src","cover.png");
    card.setAttribute("data-id",i);
    card.addEventListener("click",flipCard);
    grid.appendChild(card);
}
}
function checkForMatch(){
    var cards=document.querySelectorAll("img");
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1])
    {alert("you found a match");
      cards[optionOneId].setAttribute("src","blank.jpg");
      cards[optionOneId].setAttribute("border-color","black");
      cards[optionTwoId].setAttribute("src","blank.jpg");
      cards[optionTwoId].setAttribute("border-color","black");
      cardsWon.push(cardsChosen);
    }else{
        alert("oops! try again");
      cards[optionOneId].setAttribute("src","cover.png");
      cards[optionTwoId].setAttribute("src","cover.png");
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent=cardsWon.length;
    if(cardsWon.length===cardArray.length/2)
    {    var temp=document.querySelector(".temp");
         
        resultDisplay.textContent="Congratulations!";
    }

}
function flipCard()
{ 
    var cardId=this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId);
    this.setAttribute("src",cardArray[cardId].img);
    if(cardsChosen.length===2){
    setTimeout(checkForMatch,250);
    }

}
createBoard();