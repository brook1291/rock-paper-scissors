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

let humanScore = 0;
let computerScore = 0;
