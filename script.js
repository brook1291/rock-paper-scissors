function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    return 'rock';
  } else if (randomNum === 2) {
    return 'paper';
  } else {
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
      console.log('Nobody wins the round.');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      console.log('You win! Paper beats rock.');
      humanScore++;
    } else if (humanScore === 'rock' && computerChoice === 'scissors') {
      console.log('You win! Rock beats scissors.');
      humanScore++;
    } else if (humanScore === 'scissors' && computerChoice === 'paper') {
      console.log('You win! Scissors beats paper.');
      humanScore++;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      console.log('You lose... Paper beats rock.');
      computerScore++;
    } else if (computerScore === 'rock' && humanChoice === 'scissors') {
      console.log('You lose.. Rock beats scissors.');
      computerScore++;
    } else if (computerScore === 'scissors' && humanChoice === 'paper') {
      console.log('You lose... Scissors beats paper.');
      computerScore++;
    }
  }
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame();
