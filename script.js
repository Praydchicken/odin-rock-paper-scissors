function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  switch(computerChoice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper, or Scissors?');

  if(humanChoice === null) {
    return null;
  }

  return humanChoice.toLowerCase().trim();
}

function playGame() {
  let rounds = 5;
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice) {
      return alert(`both chose ${computerChoice}, DRAW!!`);
    }

    const humanWins = (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    );

    if(humanWins) {
      humanScore++;
      alert(`${humanChoice} beats ${computerChoice}, PLAYER WINS!`);
    } else {
      computerScore++;
      alert(`${computerChoice} beats ${humanChoice}, COMPUTER WINS!`);
    }
  }

  for (i = 0; i < rounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if(humanScore === computerScore){
    alert('Draw');
  } else if (humanScore > computerScore) {
    alert(`Player Wins the game!
      Player: ${humanScore} Computer: ${computerScore}`);
  }
}

playGame();
