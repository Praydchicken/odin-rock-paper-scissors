const currentRoundElement = document.querySelector('.js-round-number');
const playerScoreElement = document.querySelector('.js-wins');
const tieElement = document.querySelector('.js-ties');
const computerScoreElement = document.querySelector('.js-losses');
const finalResultElement = document.querySelector('.js-final-result');
const controlElement = document.querySelector('.controls__buttons');
const playerMoveElement = document.querySelector('.js-player-move');
const computerMoveElement = document.querySelector('.js-computer-move');
const restartButtonElement = document.querySelector('#js-restart');

controlElement.addEventListener('click', (event) => {
	const btn = event.target.closest('button');

	if (!btn) {
		return;
	}

	switch (btn.id) {
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

restartButtonElement.addEventListener('click', () => {
	resetGame();
});



const game = {
	round: 0,
	playerScore: 0,
	computerScore: 0,
	ties: 0,
	finalResult: '',
	isGameOver: false
}

const choices = {
		rock: '👊',
		paper: '✋',
		scissors: '✌️'
	};

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

function resetGame() {
	game.round = 0;
	game.playerScore = 0;
	game.computerScore = 0;
	game.ties = 0;
	game.finalResult = '';
	game.isGameOver = false;

	updateUi();
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

	determineWinner();
	updateUi(humanChoice, computerChoice);
	game.round++;
}

function updateUi(humanChoice, computerChoice) {
	currentRoundElement.textContent = game.round + 1;
	playerScoreElement.textContent = game.playerScore;
	tieElement.textContent = game.ties;
	computerScoreElement.textContent = game.computerScore;
	playerMoveElement.textContent = choices[humanChoice] ?? '❓';
	computerMoveElement.textContent = choices[computerChoice] ?? '❓';
	finalResultElement.textContent = game.finalResult;
}
