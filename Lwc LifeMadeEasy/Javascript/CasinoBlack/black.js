// JS FILE
//document.addEventListener("DOMContentLoaded", event =>  {} )
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// Player Information
let player = {
  Pname: "Shoaib",
  chips: 145,
};
let playerEl = document.querySelector(".player-el");

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el");
console.log(messageEl);
// 1. Store the sum-el paragraph in a variable
let sumEl = document.querySelector(".sum-el");
console.log(sumEl);
// 1. Store the cards-el paragraph in a variable
let cardsEl = document.querySelector(".cards-el");
console.log(cardsEl);

// Get random card function
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  return randomNumber === 1 ? 11 : randomNumber > 10 ? 10 : randomNumber;

  // Math.random() = It returns a random number between 0.000 to 0.999
}

// Function to start the Game
function startGame() {
  if (!isAlive || hasBlackJack) {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
  }
}

function renderGame() {
  cardsEl.textContent = "Cards : ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += " " + cards[i] + " ";
  }
  // Display Sum
  sumEl.textContent = "Sum : " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    playerEl.textContent = player.Pname + " : $" + player["chips"];
  } else {
    message = "You're out of the game want to play a new game!";
    isAlive = false;
  }
  // 2. Display the message in the messageEl using messageEl.textContent
  messageEl.textContent = message;
}

// if (hasBlackJack) {
//   playerEl.textContent = player.Pname + " : $" + player["chips"];
// }

// Function to get new Card
function newCard() {
  if (isAlive && !hasBlackJack) {
    console.log("Want to Draw New Card ");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    console.log(cards);
    renderGame();
  }
}
