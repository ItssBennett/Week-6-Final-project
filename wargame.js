//	For the final project you will be creating an automated version of the classic card game WAR! There are many versions of the game WAR. In this version there are only 2 players.
//	You do not need to do anything special when there is a tie in a round.
//	Think about how you would build this project and write your plan down. Consider classes such as: Card, Deck, Player, as well as what properties and methods they may include. 
//	You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input inside of your browser’s console
// ---------------------------------------
//	Deal 26 Cards to each Player from a Deck of 52 cards.
//	Iterate through the turns where each Player plays a Card.
//	The Player who played the higher card is awarded a point
//	Ties result in zero points for both Players
//	After all cards have been played, display the score and declare the winner.
//	Write a Unit Test using Mocha and Chai for at least one of the functions you write.
//------------------------------------------------------------


//make a full full deck ✔
//assign card values ✔
//make function to shuffle cards✔
//make player class for two players✔
//give each player 26 cards from the fullDeck array✔
//Iterate through the turns where each Player plays a Card.✔
//The Player who played the higher card is awarded a point✔







//array for full deck
const fullDeck = ['A','A','A','A',2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,'J','J','J','J','Q','Q','Q','Q','K','K','K','K',]

// alotting values based on cards
const cardValues = {
    A: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 11,
    Q: 12,
    K: 13,
}

//function for shuffling the cards:
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

class Players{
    constructor(playerName,playerDeck){
        this.playerName = playerName
        this.playerDeck = playerDeck
    }
}

//shuffling the deck
shuffle(fullDeck)

//using slice to give each player 26 cards
const playerOne = new Players('Player One',[])
playerOne.playerDeck = fullDeck.slice(0,26)

const playerTwo = new Players('Player Two',[])
playerTwo.playerDeck = fullDeck.slice(26,54)


// comparing cards
playerOneCard = 0
playerOne.score = 0
playerTwoCard = 0
playerTwo.score = 0

for (let i = 0; i < playerOne.playerDeck.length; i++){
    playerOneCard = playerOne.playerDeck[i]
    console.log('1: ' + playerOneCard)

    playerTwoCard = playerTwo.playerDeck[i]
    console.log('2: ' + playerTwoCard)

    if (cardValues[playerOneCard] > cardValues[playerTwoCard]){
        playerOne.score++
    }
    else if(cardValues[playerOneCard] < cardValues[playerTwoCard]){
        playerTwo.score++
    }
    else  {}
}
console.log('Player One total score:' + playerOne.score)
console.log('Player Two total score:' + playerTwo.score)
if(playerOne.score > playerTwo.score){
    console.log('Player One Wins!')
}
else if(playerOne.score < playerTwo.score){
    console.log('Player Two Wins!')
}
else console.log('It was a tie!')

