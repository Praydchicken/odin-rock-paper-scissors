const currentRoundElement = document.querySelector('.js-round-number');
const winElement = document.querySelector('.js-wins');
const tieElement = document.querySelector('.js-ties');
const lossesElement = document.querySelector('.js-losses');

const game = {
	TOTAL_ROUNDS: 5,
	currentRound: 0,
	ties: 0,
	wins: 0,
	losses: 0
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const humanChoice = prompt("Rock, Paper, or Scissors?");

  if (humanChoice === null) {
    return null;
  }

  return humanChoice.toLowerCase().trim();
}

function doesHumanWin(humanChoice, computerChoice) {
	return (
		(humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
	);
}

function playRound(humanChoice, computerChoice) {
	let result = '';

  if (humanChoice === computerChoice) {
			game.ties++;
			result = 'DRAW';
  } else if (doesHumanWin(humanChoice, computerChoice)) {
    game.wins++;
		result = 'PLAYER WINS!';
  } else {
    game.losses++;
    result = 'COMPUTER WINS'
  }
}

function playGame() {
  for (let i = 0; i < game.TOTAL_ROUNDS; i++) {
	 	const humanChoice = getHumanChoice();

		if(humanChoice === null) {
			alert('GAME CANCELLED, INVALID INPUT');
			return;
		}

		const computerChoice = getComputerChoice()

    playRound(humanChoice, computerChoice);

		updateUi();
  }


}

function updateUi() {
	currentRoundElement.textContent = game.currentRound;
	winElement.textContent = game.wins;
	tieElement.textContent = game.ties;
	lossesElement.textContent = game.losses;
}

playGame();
