let humanScore = 0;
let computerScore = 0;

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
  return humanChoice.toLowerCase().trim();
}

function playRound(humanChoice, computerChoice) {
  if(humanChoice === computerChoice) {
    return 'draw';
  }

  const humanWins = (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  );

  if(humanWins) {
    humanScore++;
    return 'Player Wins!';
  } else {
    computerScore++;
    return 'Computer Wins!';
  }
}

playRound(getHumanChoice(), getComputerChoice());
