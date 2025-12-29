const currentRoundElement = document.querySelector('.js-round-number');
const playerScoreElement = document.querySelector('.js-wins');
const tieElement = document.querySelector('.js-ties');
const computerScoreElement = document.querySelector('.js-losses');
const finalResultElement = document.querySelector('.js-final-result');
const controlElement = document.querySelector('.controls__buttons');

controlElement.addEventListener('click', (event) => {
	switch (event.target.id) {
		case 'js-rock':
			playRound('rock');
			break;
		case 'js-paper':
			playRound('paper');
			break;
		case 'js-scissors':
			playRound('scissors');
			break;
	}
});

const game = {
	round: 1,
	playerScore: 0,
	computerScore: 0,
	ties: 0,
	finalResult: '',
	isGameOver: false
}

function getComputerChoice() {
	const computerChoices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);

	return computerChoices[randomIndex];
}

function doesHumanWin(humanChoice, computerChoice) {
	return (
		(humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
	);
}

function determineWinner() {
	if (game.playerScore === 5) {
		game.finalResult = 'PLAYER WINS!';
		game.isGameOver = true;
	} else if (game.computerScore === 5) {
		game.finalResult = 'COMPUTER WINS!';
		game.isGameOver = true;
	}
}

function playRound(humanChoice) {
	if(game.isGameOver) {
		return;
	}

	const computerChoice = getComputerChoice();

	if (humanChoice === computerChoice) {
		game.ties++;
	} else if (doesHumanWin(humanChoice, computerChoice)) {
		game.playerScore++;
	} else {
		game.computerScore++;
	}

	game.round++;
	determineWinner();
	updateUi();
}

function updateUi() {
	currentRoundElement.textContent = game.round;
	playerScoreElement.textContent = game.playerScore;
	tieElement.textContent = game.ties;
	computerScoreElement.textContent = game.computerScore;
	finalResultElement.textContent = game.finalResult;
}
