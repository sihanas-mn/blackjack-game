let firstCard = 3
let secondCard = 7

let cards = [firstCard, secondCard]

console.log(cards)

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += " "+ cards[i]
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = 8;

    sum = sum + card;

    cards.push(card)

    renderGame();
}
