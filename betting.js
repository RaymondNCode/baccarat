function genCardNShuffle () {
  if (wholeDecks.length > 6) {
    alert(`the decks haven't finish, cannot proceed the new game.
Card remaining: ${wholeDecks.length}`);
    return;
  } if (wholeDecks.length <= 6) {
    wholeDecks.length = 0;
    for (let i = 0; i < suits.length; i) {
      for (let e = 0; e < decks.length; e ++) {
        wholeDecks.push({card: decks[e].card, value: decks[e].value, suit: suits[i]});
      }
      i++
    };
    shuffleArray(wholeDecks);
  } 

}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function firstHand() {
  console.log('function firstHand started')
  //ensure the array is empty for player and banker hand
  firstHandPCards.length = 0;
  firstHandBCards.length = 0;
  //draw fisrt player card N delete one from decks
  firstHandPCards.push(wholeDecks[0]);
  wholeDecks.splice(0,1);
  //draw fisrt banker card N delete one from decks
  firstHandBCards.push(wholeDecks[0]);
  wholeDecks.splice(0,1);
  //draw fisrt player card N delete one from decks
  firstHandPCards.push(wholeDecks[0]);
  wholeDecks.splice(0,1);
  //can be deleted later
  //draw fisrt banker card N delete one from decks
  firstHandBCards.push(wholeDecks[0]);
  wholeDecks.splice(0,1);
  
  console.log(`card remaining: ${wholeDecks.length}`);
  console.log(`
player first card/value: ${firstHandPCards[0].card} ${firstHandPCards[0].value}
player second card/value ${firstHandPCards[1].card} ${firstHandPCards[1].value}
banker first card/value: ${firstHandBCards[0].card} ${firstHandBCards[0].value}
banker second card/value: ${firstHandBCards[1].card} ${firstHandBCards[1].value}`)

  console.log('function firstHand ended')
}

function calScore(onHand, player) {
  console.log("function calScore started")
  player.score = 0;
  console.log(player);
  let score = 0;
  for (let i = 0; i < onHand.length; i++) {
  let cardScore = onHand[i].value;

  score = score + cardScore;
  }
  if (score >= 20) {
  score = score - 20;
  } else if (score >= 10) {
  score = score - 10;
  } else {score = score}
  player.score = score;
  console.log(player);
  console.log('function calScore completed');
  console.log(currentStatus);
};

const getResultElement = document.querySelector('.js-result');
function checkThirdCard () {

  if ([8,9].includes(playerScore.score) || [8,9].includes(bankerScore.score)) {
    //Natural 8, or 9
    if (playerScore.score > bankerScore.score) {
      currentStatus.playerWin = 1;
      console.log(`player win on Natural ${playerScore.score}`)
      const newResult = document.createElement('div');
      newResult.innerHTML = `Player win on Natural ${playerScore.score}`;
      getResultElement.append(newResult);
      console.log('completed at step 1.')
    } else if (bankerScore.score > playerScore.score) {
      currentStatus.bankerWin =1;
      console.log(`banker win on Natural ${bankerScore.score}`);
      const newResult = document.createElement('div');
      newResult.innerHTML = `Banker win on Natural ${bankerScore.score}`;
      getResultElement.append(newResult);
      console.log('completed at step 1.')
    } else {
      currentStatus.tieGame = 1;
      console.log('tie game.');
      const newResult = document.createElement('div');
      newResult.innerHTML = `Tie on Natural ${bankerScore.score}`;
      getResultElement.append(newResult);
      console.log('completed at step 1.')
    }
    return;
  } 

  if (playerScore.score <= 5) {

    //Drawn card for player
    firstHandPCards.push(wholeDecks[0]);
    wholeDecks.splice(0,1);
    console.log(firstHandPCards);
    console.log(`Player third card drawn: ${firstHandPCards[2].card}`); 
    console.log('completed at step 2 as needed.')
  }
  console.log(firstHandPCards);
  //give variable name to thirdcard of player
  const thirdCardValue = firstHandPCards[2]?.value;


  if (([6,7].includes(thirdCardValue) && bankerScore.score === 6) ||
      ([4,5,6,7].includes(thirdCardValue) && bankerScore.score === 5) ||
      ([2,3,4,5,6,7].includes(thirdCardValue) && bankerScore.score === 4) ||
      (thirdCardValue !== 8 && bankerScore.score === 3) ||
      ([0,1,2].includes(bankerScore.score)) ||
      (playerScore.score === 7 && [0,1,2].includes(bankerScore.score))){

      //Draw card for banker based on the third card of player and banker total score
      firstHandBCards.push(wholeDecks[0]);
      wholeDecks.splice(0,1);        
      console.log(firstHandBCards);
      console.log(`Banker third card drawn: ${firstHandBCards[2].card}`);
      console.log('completed at step 3 as needed.')
  }

  //cal again the score
  calScore(firstHandPCards, playerScore);
  calScore(firstHandBCards, bankerScore);
  console.log(playerScore, bankerScore);
  if (playerScore.score > bankerScore.score) {
    currentStatus.playerWin = 1;
    console.log(`player won at point ${playerScore.score}`);
    const newResult = document.createElement('div');
    newResult.innerHTML = `Player wins at point ${playerScore.score}`;
    getResultElement.append(newResult);
    console.log('completed at step 1.')
    console.log('completed at step 4, winner being determined.');

  } else if (bankerScore.score === 6 && bankerScore.score > playerScore.score) {
    currentStatus.bankerWinOnSix = 1;
    console.log('banker win on six, half payment');
    const newResult = document.createElement('div');
    newResult.innerHTML = `banker win on six, half payment`;
    getResultElement.append(newResult);
    console.log('completed at step 4, winner being determined.');

  } else if (bankerScore.score > playerScore.score) {
    currentStatus.bankerWin = 1;
    console.log(`banker won at point ${bankerScore.score}`);
    const newResult = document.createElement('div');
    newResult.innerHTML = `Banker wins at point ${bankerScore.score}`;
    getResultElement.append(newResult);
    console.log('completed at step 4, winner being determined.');
  } else if (bankerScore.score === playerScore.score) {
    currentStatus.tieGame = 1;
    console.log('tie game');
    const newResult = document.createElement('div');
    newResult.innerHTML = `Tie at point ${playerScore.score}`;
    getResultElement.append(newResult);
    console.log('completed at step 4, winner being determined.');
  }
  console.log(wholeDecks.length);

}

function checkPair() {
  console.log('function checkPair started')
  if (firstHandPCards[0].card === firstHandPCards[1].card) {
    console.log('player pair detected')
    currentStatus.playerPair = 1;
  }
  if (firstHandBCards[0].card === firstHandBCards[1].card) {
    console.log('banker pair detected')
    currentStatus.bankerPair = 1;
  }
  console.log(currentStatus);
  console.log('function checkPair ended')

}

function calBet() {
  console.log(user);
  console.log('function calbet started')
  if (currentStatus.playerWin) {
    user.cash += user.betting.playerBet *2
    const newResult = document.createElement('div');
    newResult.innerHTML = `earn ${user.betting.playerBet} from Player 闲`;
    getResultElement.append(newResult);
  } else if (currentStatus.bankerWin) {
    user.cash += user.betting.bankerBet *2
    const newResult = document.createElement('div');
    newResult.innerHTML = `earn ${user.betting.bankerBet} from Banker 庄`;
    getResultElement.append(newResult);

  } else if (currentStatus.bankerWinOnSix) {
    user.cash += user.betting.bankerBet *1.5;
    user.cash += user.betting.bankerOnSix *13;
    const newResult = document.createElement('div');
    const newResultTwo = document.createElement('div');
    newResult.innerHTML = `earn ${user.betting.bankerBet *0.5} from Banker 庄.`;
    getResultElement.append(newResult);
    newResultTwo.innerHTML = `earn ${user.betting.bankerOnSix *12} from Banker Wins On Six 庄赢六点.`;
    getResultElement.append(newResultTwo);

  } else if (currentStatus.tieGame) {
    user.cash += user.betting.playerBet;
    user.cash += user.betting.bankerBet;
    user.cash += user.betting.tie *9;
    const newResult = document.createElement('div');
    
    newResult.innerHTML = `Tie game, return ${user.betting.playerBet}
from Player 闲, ${user.betting.bankerBet} from Banker 庄`;
    getResultElement.append(newResult);
    const newResultTwo = document.createElement('div');
    newResultTwo.innerHTML = `earn ${user.betting.tie * 8} from Tie 合.`
    getResultElement.append(newResultTwo);
  }

  if (currentStatus.playerPair) {
    user.cash += user.betting.playerPair *12;
  }

  if (currentStatus.bankerPair) {
    user.cash += user.betting.bankerPair * 12;
  }

  console.log('function calbet ended')
  console.log(user);
}

function clearBet() {
  for (prop in currentStatus) {
    if (currentStatus.hasOwnProperty(prop)) {
      currentStatus[prop] = 0;
    }
  }
  for (prop in user.betting) {
    if (user.betting.hasOwnProperty(prop)) {
        user.betting[prop] = 0;
    }
  }
}
