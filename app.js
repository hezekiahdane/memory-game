const cardArray = [
    {
        name: 'fries', 
        img: 'imgs/fries.png',
    },
    {
        name: 'cheeseburger', 
        img: 'imgs/cheeseburger.png',
    },
    {
        name: 'hotdog', 
        img: 'imgs/hotdog.png',
    },
    {
        name: 'ice-cream', 
        img: 'imgs/ice-cream.png',
    },
    {
        name: 'milkshake', 
        img: 'imgs/milkshake.png',
    },
    {
        name: 'pizza', 
        img: 'imgs/pizza.png',
    },
    {
        name: 'fries', 
        img: 'imgs/fries.png',
    },
    {
        name: 'cheeseburger', 
        img: 'imgs/cheeseburger.png',
    },
    {
        name: 'hotdog', 
        img: 'imgs/hotdog.png',
    },
    {
        name: 'ice-cream', 
        img: 'imgs/ice-cream.png',
    },
    {
        name: 'milkshake', 
        img: 'imgs/milkshake.png',
    },
    {
        name: 'pizza', 
        img: 'imgs/pizza.png',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIDs = []
const cardsWon = []


console.log(grid)

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','imgs/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.append(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneID = cardsChosenIDs[0]
    const optionTwoID = cardsChosenIDs[1]
    console.log(cards)
    console.log('check for match')
    if (optionOneID == optionTwoID ){
        cards[optionOneID].setAttribute('src', 'imgs/blank.png')
        cards[optionTwoID].setAttribute('src', 'imgs/blank.png')
        alert('You have clicked the same image!')

    }

    if (cardsChosen[0] == cardsChosen[1] ){
        alert('You found a match!')
        cards[optionOneID].setAttribute('src', 'imgs/white.png')
        cards[optionTwoID].setAttribute('src', 'imgs/white.png')
        cards[optionOneID].removeEventListener('click', flipCard)
        cards[optionTwoID].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneID].setAttribute('src', 'imgs/blank.png')
        cards[optionTwoID].setAttribute('src', 'imgs/blank.png')
    }
    result.innerHTML = cardsWon.length
    cardsChosen = []
    cardsChosenIDs = []

    if(cardsWon.length == cardArray.length/2) {
        result.innerHTML = 'Congratulations, you found them all!'
    }
}

function flipCard() {
    const cardID = this.getAttribute('data-id')
    //push an item into the cardsChosen array
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenIDs.push(cardID)
    console.log(cardsChosen)
    console.log(cardsChosenIDs)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}

