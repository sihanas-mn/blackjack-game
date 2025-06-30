let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Sihanas",
    chips: 145
}

playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": " + "$" + player.chips

//generate random card
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

// start game
function startGame() {
    isAlive = true
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    sum = cards[0] + cards[1]
    renderGame()
}

// actual start game function happens here
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

// generate and sum new card
function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard();
        sum = sum + card;
        cards.push(card)
        renderGame();
    }
}
