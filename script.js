const buttons = document.querySelector('#buttons');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const playerScore = document.querySelector('#player-score');
const compScore = document.querySelector('#comp-score');
const result = document.querySelector('#result');
const playAgain = document.querySelector('#play-again');
const playerChoiceText = document.querySelector('#player-choice');
const compChoiceText = document.querySelector('#comp-choice');

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

let roundCount = 1;

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      result.textContent = `Round ${roundCount}: Nobody wins the round.`;
      result.removeAttribute('class');
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      result.textContent = `Round ${roundCount}: You win! Your choice of paper beats the computer's rock.`;
      result.setAttribute('class', 'win');
      humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      result.textContent = `Round ${roundCount}: You win! Your choice of rock beats the computer's scissors.`;
      result.setAttribute('class', 'win');
      humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      result.textContent = `Round ${roundCount}: You win! Your choice of scissors beats the computer's paper.`;
      result.setAttribute('class', 'win');
      humanScore++;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      result.textContent = `Round ${roundCount}: You lose... Paper beats rock.`;
      result.setAttribute('class', 'lose');
      computerScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
      result.textContent = `Round ${roundCount}: You lose... Rock beats scissors.`;
      result.setAttribute('class', 'lose');
      computerScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      result.textContent = `Round ${roundCount}: You lose... Scissors beats paper.`;
      result.setAttribute('class', 'lose');
      computerScore++;
    }
  }

  let humanChoice;
  let computerChoice;

  function playRounds() {
    if (humanScore < 5 && computerScore < 5) {
      playRound(humanChoice, computerChoice);
      playerScore.textContent = humanScore;
      compScore.textContent = computerScore;
      playerChoiceText.textContent =
        humanChoice !== 'buttons' ? humanChoice : 'N/A';
      compChoiceText.textContent =
        humanChoice !== 'buttons' ? computerChoice : 'N/A';
      if (humanChoice !== 'buttons') roundCount++;
    }

    if (computerScore === 5 || humanScore === 5) {
      if (humanScore > computerScore) {
        result.textContent =
          'You win! The computer stood no chance. Do you want the winning streak to continue?';
        result.setAttribute('class', 'win');
      } else if (humanScore < computerScore) {
        result.textContent =
          'You lost... The computer was too good for you. Do you want to try again next time?';
        result.setAttribute('class', 'lose');
      }
      rockBtn.style.display = 'none';
      paperBtn.style.display = 'none';
      scissorsBtn.style.display = 'none';
      playAgain.style.display = 'inline';
    }
  }

  buttons.addEventListener('click', (e) => {
    if (e.target.id !== 'play-again') {
      humanChoice = e.target.id;
      computerChoice = getComputerChoice();
      playRounds();
    }
  });

  playAgain.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    playerScore.textContent = humanScore;
    compScore.textContent = computerScore;
    roundCount = 1;
    playAgain.style.display = 'none';
    rockBtn.style.display = 'inline';
    paperBtn.style.display = 'inline';
    scissorsBtn.style.display = 'inline';
    result.textContent = '';
    playerChoiceText.textContent = 'N/A';
    compChoiceText.textContent = 'N/A';
    result.classList.remove('win');
    result.classList.remove('lose');
  });
}

playGame();
