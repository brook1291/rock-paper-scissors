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
      result.textContent = `Nobody wins the round. You both picked ${humanChoice}.`;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      result.textContent = 'You win! Paper beats rock.';
      humanScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      result.textContent = 'You win! Rock beats scissors.';
      humanScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      result.textContent = 'You win! Scissors beats paper.';
      humanScore++;
    } else if (computerChoice === 'paper' && humanChoice === 'rock') {
      result.textContent = 'You lose... Paper beats rock.';
      computerScore++;
    } else if (computerChoice === 'rock' && humanChoice === 'scissors') {
      result.textContent = 'You lose.. Rock beats scissors.';
      computerScore++;
    } else if (computerChoice === 'scissors' && humanChoice === 'paper') {
      result.textContent = 'You lose... Scissors beats paper.';
      computerScore++;
    }
  }

  let humanChoice;
  let computerChoice;
  function playRounds() {
    buttons.addEventListener('click', (e) => {
      switch (e.target.id) {
        case 'rock-btn':
          humanChoice = 'rock';
          console.log(humanChoice);
          break;
        case 'paper-btn':
          humanChoice = 'paper';
          console.log(humanChoice);
          break;
        case 'scissors-btn':
          humanChoice = 'scissors';
          console.log(humanChoice);
          break;
      }

      if (humanScore < 5 && computerScore < 5) {
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        playRound(humanChoice, computerChoice);
        playerScore.textContent = humanScore;
        compScore.textContent = computerScore;
        playRounds();
      } else {
        if (humanScore > computerScore) {
          result.textContent =
            'You win! The computer stood no chance. Do you want the winning streak to continue?';
        } else if (humanScore < computerScore) {
          result.textContent =
            'You lost... The computer was too good for you. Do you want to try again next time?';
        }
        playAgain.style.display = 'inline';
      }
    });
  }

  playRounds();
}

playGame();
