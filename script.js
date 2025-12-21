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
