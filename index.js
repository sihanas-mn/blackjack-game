let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    sum = cards[0] + cards[1]
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
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard();
        sum = sum + card;
        cards.push(card)
        renderGame();
    }
}
