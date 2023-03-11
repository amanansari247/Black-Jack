
let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
let message = ""
let messageEle = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
console.log(cards)
function getrandomcard(){
  
  let randno = Math.floor(Math.random()*13) +1
  if(randno > 10){
    return 10
  }
  else if(randno === 1){
    return 11
  }
  else{
    return randno
  }
}
function startgame(){
  isalive = true
  let firstcard = getrandomcard()
  let secondcard = getrandomcard()
  cards = [firstcard,secondcard]
  sum = firstcard+secondcard 
  rendergame()
}

function rendergame(){

  
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Cards: " 
  for(let i=0;i<cards.length;i++){
    cardEl.textContent +=cards[i] + " "
  }
if(sum <=20){
  message = "Do you Want to draw a new card?"
}
else if(sum === 21){
    message = "You've got Blackjack!"
    hasblackjack = true
}
else{
    message = "You're out of the game!"
    isalive = false
}
 messageEle.textContent = message
}
function newcard(){
  if(isalive === true && hasblackjack === false){
  let card = getrandomcard()
  sum+=card
  cards.push(card)
  rendergame()
  }

}
