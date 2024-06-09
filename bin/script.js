// Choices and elements definitions
const choices = ['rock', 'paper', 'scissors', 'fire', 'water', 'earth', 'air', 'lightning'];
const elements = {
    rock: { beats: ['scissors', 'fire', 'earth'], icon: '🏔️' },
    paper: { beats: ['rock', 'water', 'air'], icon: '📄' },
    scissors: { beats: ['paper', 'air', 'lightning'], icon: '✂️' },
    fire: { beats: ['paper', 'air', 'earth'], icon: '🔥' },
    water: { beats: ['fire', 'rock', 'lightning'], icon: '💧' },
    earth: { beats: ['lightning', 'water', 'scissors'], icon: '🌍' },
    air: { beats: ['earth', 'fire', 'rock'], icon: '🌬️' },
    lightning: { beats: ['water', 'air', 'scissors'], icon: '⚡' }
};

// DOM elements
const buttons = document.querySelectorAll('.choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('game-result');
const playAgainButton = document.getElementById('play-again');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resetScoreButton = document.getElementById('reset-score');

// Event listeners for game buttons
buttons.forEach(button => button.addEventListener('click', playGame));

// Scores
let userScore = 0;
let computerScore = 0;

// Load scores from local storage if available
window.onload = function() {
    if (localStorage.getItem('userScore')) {
        userScore = parseInt(localStorage.getItem('userScore'));
    }
    if (localStorage.getItem('computerScore')) {
        computerScore = parseInt(localStorage.getItem('computerScore'));
    }
    updateScoreDisplay();
};

// Function to play the game
function playGame(event) {
    const playerChoice = event.target.getAttribute('data-choice');
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceDisplay.textContent = `Your choice: ${playerChoice} ${elements[playerChoice].icon}`;
    computerChoiceDisplay.textContent = `Computer's choice: ${computerChoice} ${elements[computerChoice].icon}`;

    const result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;

    if (result === 'You win!') {
        userScore++;
    } else if (result === 'You lose!') {
        computerScore++;
    }

    // Save scores to local storage
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('computerScore', computerScore);

    updateScoreDisplay();

    playAgainButton.style.display = 'block';
    buttons.forEach(button => button.removeEventListener('click', playGame));
}

// Function to reset scores
function resetScores() {
    userScore = 0;
    computerScore = 0;
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('computerScore', computerScore);
    updateScoreDisplay();
}

// Update score display
function updateScoreDisplay() {
    userScoreDisplay.textContent = `User Score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

// Event listener for reset score button
resetScoreButton.addEventListener('click', resetScores);

// Functions to switch themes
function toLight() {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
}

function toDark() {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
}

// Function to get game result
function getResult(player, computer) {
    if (player === computer) {
        return 'It\'s a draw!';
    } else if (elements[player].beats.includes(computer)) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

// Event listener for play again button
playAgainButton.addEventListener('click', () => {
    playerChoiceDisplay.textContent = 'Your choice: ';
    computerChoiceDisplay.textContent = 'Computer\'s choice: ';
    resultDisplay.textContent = '';
    playAgainButton.style.display = 'none';
    buttons.forEach(button => button.addEventListener('click', playGame));
});
