/*const wholeDecks = [
  {card: '6', value: 6, suit: 'spades'},
  {card: '9', value: 9, suit: 'diamonds'},
  {card: '7', value: 7, suit: 'clubs'},
  {card: '10', value: 0, suit: 'clubs'},
  {card: '7', value: 7, suit: 'hearts'},
  {card: 'Q', value: 0, suit: 'diamonds'},
  {card: '1', value: 1, suit: 'spades'},
  {card: '4', value: 4, suit: 'clubs'},
  {card: '7', value: 7, suit: 'diamonds'},
  {card: '3', value: 3, suit: 'diamonds'},
  {card: 'K', value: 0, suit: 'spades'},
  {card: '7', value: 7, suit: 'spades'},
  {card: '2', value: 2, suit: 'spades'},
  {card: '4', value: 4, suit: 'hearts'},
  {card: 'K', value: 0, suit: 'hearts'},
  {card: '10', value: 0, suit: 'diamonds'},
  {card: '10', value: 0, suit: 'spades'},
  {card: '3', value: 3, suit: 'hearts'} ,
  {card: '6', value: 6, suit: 'hearts'},
  {card: '3', value: 3, suit: 'clubs'},
  {card: 'Q', value: 0, suit: 'spades'},
  {card: '3', value: 3, suit: 'spades'},
  {card: '2', value: 2, suit: 'clubs'},
  {card: '8', value: 8, suit: 'hearts'},
  {card: 'Q', value: 0, suit: 'hearts'},
  {card: '10', value: 0, suit: 'hearts'},
  {card: '9', value: 9, suit: 'clubs'},
  {card: '5', value: 5, suit: 'clubs'},
  {card: 'K', value: 0, suit: 'diamonds'},
  {card: '5', value: 5, suit: 'hearts'},
  {card: 'J', value: 0, suit: 'hearts'},
  {card: '4', value: 4, suit: 'spades'},
  {card: '8', value: 8, suit: 'spades'},
  {card: 'Q', value: 0, suit: 'clubs'},
  {card: '1', value: 1, suit: 'hearts'},
  {card: '5', value: 5, suit: 'spades'},
  {card: '2', value: 2, suit: 'hearts'},
  {card: 'K', value: 0, suit: 'clubs'},
  {card: 'J', value: 0, suit: 'diamonds'},
  {card: '8', value: 8, suit: 'diamonds'},
  {card: '9', value: 9, suit: 'hearts'} ,
  {card: '4', value: 4, suit: 'diamonds'} ,
  {card: '2', value: 2, suit: 'diamonds'} ,
  {card: '1', value: 1, suit: 'diamonds'} ,
  {card: 'J', value: 0, suit: 'spades'} ,
  {card: 'J', value: 0, suit: 'clubs'} ,
  {card: '6', value: 6, suit: 'diamonds'} ,
  {card: '6', value: 6, suit: 'clubs'} ,
  {card: '9', value: 9, suit: 'spades'} ,
  {card: '1', value: 1, suit: 'clubs'},
  {card: '8', value: 8, suit: 'clubs'} ,
  {card: '5', value: 5, suit: 'diamonds'}
]; */
let cards = ['1', '2', '3', '4', '5', 
'6', '7', '8', '9', '10', 
'J', 'Q', 'K'
];

let values = [1,2,3,4,5,6,7,8,9,0,0,0,0];
let suits = ['spades', 'clubs', 'hearts', 'diamonds'];
const wholeDecks = [];
let decks = cards.map(function (x, i) {
  return { card: x, value: values[i]}
});
const firstHandPCards = [];
const firstHandBCards = [];
const bankerScore = {score: 0};
const playerScore = {score: 0};
const currentStatus ={
  playerWin: 0,
  bankerWin: 0,
  tieGame: 0,
  bankerWinOnSix: 0,
  playerPair: 0,
  bankerPair: 0
};

const user = {
  cash: 2010,
  betting: { 
    playerBet: 0,
    bankerBet: 0,
    tie: 0,
    playerPair: 0,
    bankerPair: 0,
    bankerOnSix: 0
  }
};

displayBet();

/*
console.log("MATCH 1 ")

firstHand();

calScore(firstHandPCards, playerScore);
calScore(firstHandBCards, bankerScore);

checkThirdCard();

checkPair();

calBet();
clearBet();
*/






