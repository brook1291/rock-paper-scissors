const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const scores = document.querySelector('#scores');
const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');
const result = document.querySelector('#result');

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else if (randomNum === 3) {
    return 'scissors';
  }
}

function getHumanChoice() {
  let choice = prompt(
    "Type 'rock', 'paper', or 'scissors' to enter your choice."
  );
  if (
    choice.toLowerCase() === 'rock' ||
    choice.toLowerCase() === 'paper' ||
    choice.toLowerCase() === 'scissors'
  ) {
    return choice.toLowerCase();
  } else {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
      return 'rock';
    } else if (randomNum === 2) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Nobody wins the round. You both picked ${humanChoice}.`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      console.log('You win! Paper beats rock.');
      humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log('You win! Rock beats scissors.');
      humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log('You win! Scissors beats paper.');
      humanScore++;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      console.log('You lose... Paper beats rock.');
      computerScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
      console.log('You lose.. Rock beats scissors.');
      computerScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      console.log('You lose... Scissors beats paper.');
      computerScore++;
    }
  }

  if (humanScore === computerScore) {
    console.log(
      `It's a draw! You both ended up with a score of ${humanScore}.`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You win! Your score of ${humanScore} beats the computer's score of ${computerScore}.`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `You lose.. Your score of ${humanScore} was no match for the computer's score of ${computerScore}.`
    );
  }
  console.log('Refresh the page to play again.');
}

playGame();
