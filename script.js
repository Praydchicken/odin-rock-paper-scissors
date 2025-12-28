const currentRoundElement = document.querySelector('.js-round-number');
const winElement = document.querySelector('.js-wins');
const tieElement = document.querySelector('.js-ties');
const lossesElement = document.querySelector('.js-losses');

const rockBtn = document.querySelector('js-btn-rock');
const paperBtn = document.querySelector('js-btn-paper');
const scissorsBtn = document.querySelector('js-btn-scissors');

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

const game = {
	TOTAL_ROUNDS: 5,
	currentRound: 1,
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

function playRound(humanChoice) {
	if(game.currentRound >= game.TOTAL_ROUNDS) {
		return;
	}


}

function updateUi() {
	currentRoundElement.textContent = game.currentRound;
	winElement.textContent = game.wins;
	tieElement.textContent = game.ties;
	lossesElement.textContent = game.losses;
}
