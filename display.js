//the "next round" event listener
const getNextRoundElement = document.querySelector('.js-next-round');
getNextRoundElement.addEventListener('click', () => {
  if (wholeDecks.length <= 6 ) {
    alert(`Card not enough.
Card remaining ${wholeDecks.length}`);
    return
  }
 
  firstHand();
  console.log(firstHandPCards);
  calScore(firstHandPCards, playerScore);
  calScore(firstHandBCards, bankerScore);
  checkThirdCard();
  displayNum();
  checkPair();
  calBet();
  displayBet();
  clearBet();
  displayBet();
});

//the "start the game" event listener
const getStartGameElement = document.querySelector('.js-gen-card-shuffle');
getStartGameElement.addEventListener ('click', () => {
  genCardNShuffle();
})


//All eventlistener for betting add/minus button
const getAddPlayerButton = document.querySelector('.js-add-player-button');
const getMinusPlayerButton = document.querySelector('.js-minus-player-button');
getAddPlayerButton.addEventListener ('click', () => {
  if(user.cash < 100) {
    alert(`Not Enough cash.
Addtional cash needed = ${100 - user.cash}`);
    return;

  } else {
    user.betting.playerBet += 100;
    user.cash -= 100;
    displayBet();
  }
})

getMinusPlayerButton.addEventListener('click', () => {
  if (user.betting.playerBet === 0) {
    alert(`Not Betting on playerBet.`);
  } else {
    user.betting.playerBet -= 100;
    user.cash += 100;
  }
  displayBet();
})


const getAddBankerButton = document.querySelector('.js-add-banker-button');
const getMinusBankerButton = document.querySelector('.js-minus-banker-button');
getAddBankerButton.addEventListener('click', () => {
  if(user.cash < 100) {
    alert(`Not Enough cash.
Addtional cash needed = ${100 - user.cash}`);
    return;

  } else {
    user.betting.bankerBet += 100;
    user.cash -= 100;
    displayBet();
  }
});

getMinusBankerButton.addEventListener('click', () => {
  if (user.betting.bankerBet === 0) {
    alert(`Not Betting on bankerBet庄.`);
  } else {
    user.betting.bankerBet -= 100;
    user.cash += 100;
  }
  displayBet();
})
const getAddPlayerPairButton = document.querySelector('.js-add-playerpair-button');
const getMinusPlayerPairButton = document.querySelector('.js-minus-playerpair-button');
getAddPlayerPairButton.addEventListener('click', () => {
  if(user.cash < 10) {
    alert(`Not Enough cash.
Addtional cash needed = ${10 - user.cash}`);
    return;

  } else {
    user.betting.playerPair += 10;
    user.cash -= 10;
    displayBet();
  }
});

getMinusPlayerPairButton.addEventListener('click', () => {
  if (user.betting.playerPair === 0) {
    alert(`Not Betting on Player Pair 闲对子.`);
  } else {
    user.betting.playerPair -= 10;
    user.cash += 10;
  }
  displayBet();
})

const getAddTieButton = document.querySelector('.js-add-tie-button');
const getMinusTieButton = document.querySelector('.js-minus-tie-button');

getAddTieButton.addEventListener('click', () => {
  if(user.cash < 10) {
    alert(`Not Enough cash.
Addtional cash needed = ${10 - user.cash}`);
    return;

  } else {
    user.betting.tie += 10;
    user.cash -= 10;
    displayBet();
  }
});

getMinusTieButton.addEventListener('click', () => {
  if (user.betting.tie === 0) {
    alert(`Not Betting on Tie 合.`);
  } else {
    user.betting.tie -= 10;
    user.cash += 10;
  }
  displayBet();
})

const getAddBankerOnSixButton = document.querySelector
('.js-add-bankeronsix-button');
const getMinusBankerOnSixButton = document.querySelector
('.js-minus-bankeronsix-button');

getAddBankerOnSixButton.addEventListener('click', () => {
  if(user.cash < 10) {
    alert(`Not Enough cash.
Addtional cash needed = ${10 - user.cash}`);
    return;

  } else {
    user.betting.bankerOnSix += 10;
    user.cash -= 10;
    displayBet();
  }
});

getMinusBankerOnSixButton.addEventListener('click', () => {
  if (user.betting.bankerOnSix === 0) {
    alert(`Not Betting on Banker Wins On Six 庄赢六点.`);
  } else {
    user.betting.bankerOnSix -= 10;
    user.cash += 10;
  }
  displayBet();
})

const getAddBankerPairButton = document.querySelector('.js-add-bankerpair-button');
const getMinusBankerPairButton = document.querySelector('.js-minus-bankerpair-button');

getAddBankerPairButton.addEventListener('click', () => {
  if(user.cash < 10) {
    alert(`Not Enough cash.
Addtional cash needed = ${10 - user.cash}`);
    return;

  } else {
    user.betting.bankerPair += 10;
    user.cash -= 10;
    displayBet();
  }
});

getMinusBankerPairButton.addEventListener('click', () => {
  if (user.betting.bankerPair === 0) {
    alert(`Not Betting on Banker Pair 庄对子:.`);
  } else {
    user.betting.bankerPair -= 10;
    user.cash += 10;
  }
  displayBet();
})







//get all span of betting number
const getPlayerBetElement = document.querySelector('.js-player-bet');
const getUserCashElement = document.querySelector('.js-user-cash');
const getBankerBetElement = document.querySelector('.js-banker-bet');
const getPlayerPairBetElement = document.querySelector('.js-playerpair-bet');
const getTieBetElement = document.querySelector('.js-tie-bet');
const getBankerOnSixElement = document.querySelector('.js-bankeronsix-bet');
const getBankerPairElement = document.querySelector('.js-bankerpair-bet');

function displayBet() {
  //display cash 
  
  getUserCashElement.innerHTML = user.cash;

  //display betting on screen
  
  getPlayerBetElement.innerHTML = user.betting.playerBet;

  
  getBankerBetElement.innerHTML = user.betting.bankerBet;

  
  getPlayerPairBetElement.innerHTML = user.betting.playerPair;

  
  getTieBetElement.innerHTML = user.betting.tie;

  
  getBankerOnSixElement.innerHTML = user.betting.bankerOnSix;

  
  getBankerPairElement.innerHTML = user.betting.bankerPair;

  
}





function displayNum() {

  const getPlayerCardElement = document.querySelector('.js-player-card');
  const getThirdPlayerCardElement = document.querySelector('.js-player-3rd-card');
  getPlayerCardElement.innerHTML = '';
  getThirdPlayerCardElement.innerHTML = '';
  if (firstHandPCards.length === 3) {
    getPlayerCardElement.innerHTML += `${firstHandPCards[0].card} ${firstHandPCards[1].card}`;
    getThirdPlayerCardElement.innerHTML += `${firstHandPCards[2].card}`;
  } else if (firstHandPCards.length === 2) { 
    console.log('work')
    getPlayerCardElement.innerHTML += `${firstHandPCards[0].card} ${firstHandPCards[1].card}`;
  } else { getPlayerCardElement.innerHTML = getPlayerCardElement.innerHTML}

  const getBankerCardElement = document.querySelector('.js-banker-card');
  const getThirdBankerCardElement = document.querySelector('.js-banker-3rd-card');
  getBankerCardElement.innerHTML ='';
  getThirdBankerCardElement.innerHTML = '';
  if (firstHandBCards.length === 3) {
    getBankerCardElement.innerHTML += `${firstHandBCards[0].card} ${firstHandBCards[1].card}`;
    getThirdBankerCardElement.innerHTML += `${firstHandBCards[2].card}`;
  } if (firstHandBCards.length === 2) {
    getBankerCardElement.innerHTML += `${firstHandBCards[0].card} ${firstHandBCards[1].card}`;
  } else {getBankerCardElement.innerHTML = getBankerCardElement.innerHTML}
}


