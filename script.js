const buttons = document.querySelector('#buttons');
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
const scores = document.querySelector('#scores');
const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');
const result = document.querySelector('#result');
const playAgain = document.querySelector('#play-again');

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

playAgain.addEventListener('click', () => {
  location.reload();
});

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      result.textContent = `Round ${roundCount}: Nobody wins the round.`;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      result.textContent = `Round ${roundCount}: You win! Your choice of paper beats the computer's rock.`;
      humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      result.textContent = `Round ${roundCount}: You win! Your choice of rock beats the computer's scissors.`;
      humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      result.textContent = `Round ${roundCount}: You win! Your choice of scissors beats the computer's paper.`;
      humanScore++;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      result.textContent = `Round ${roundCount}: You lose... Paper beats rock.`;
      computerScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
      result.textContent = `Round ${roundCount}: You lose... Rock beats scissors.`;
      computerScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      result.textContent = `Round ${roundCount}: You lose... Scissors beats paper.`;
      computerScore++;
    }
  }

  let humanChoice;
  let computerChoice;
  let roundCount = 1;

  function playRounds() {
    if (humanScore < 5 && computerScore < 5) {
      playRound(humanChoice, computerChoice);
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
      roundCount++;
    }

    if (computerScore === 5 || humanScore === 5) {
      if (humanScore > computerScore) {
        result.textContent =
          'You win! The computer stood no chance. Do you want the winning streak to continue?';
        result.classList.toggle('win');
      } else if (humanScore < computerScore) {
        result.textContent =
          'You lost... The computer was too good for you. Do you want to try again next time?';
        result.classList.toggle('lose');
      }
      rockBtn.style.display = 'none';
      paperBtn.style.display = 'none';
      scissorsBtn.style.display = 'none';
      playAgain.style.display = 'inline';
    }
  }

  buttons.addEventListener('click', (e) => {
    humanChoice = e.target.id.replace('-btn', '');
    console.log(humanChoice);
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    playRounds();
  });
}

playGame();
