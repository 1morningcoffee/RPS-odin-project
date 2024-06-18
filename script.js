let pInput = '';
let computerScore = 0;
let playerScore = 0;

// function to generate "rock", "paper", or "scissors"
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
        if (computerChoice === 1) {
            return "scissors";
        } else if (computerChoice === 2) {
            return "paper";
        } else {
            return "rock";
        }
}

// function to compare inputs and play the round
function playRound() {
    let computerInput = getComputerChoice();

    if (pInput === computerInput) {
        roundResult.textContent = "It is a tie round!";
    } else if (pInput === "rock" && computerInput === "paper") {
        roundResult.textContent = 'Paper covers rock. The computer wins this round!';
        computerScore++;
        computerResult.textContent = 'Computer Score: ' + computerScore;
    } else if (pInput === "rock" && computerInput === "scissors") {
        roundResult.textContent = "Rock smashes scisors. The player wins this round!";
        playerScore++;
        playerResult.textContent = 'Player Score: ' + playerScore;
    } else if (pInput === "paper" && computerInput === "rock") {
        roundResult.textContent = "Paper covers rock. The player wins this round!";
        playerScore++;
        playerResult.textContent = 'Player Score: ' + playerScore;
    } else if (pInput === "paper" && computerInput === "scissors") {
        roundResult.textContent = "Scissors cut paper. The computer wins this round!";
        computerScore++;
        computerResult.textContent = 'Computer Score: ' + computerScore;
    } else if (pInput === "scissors" && computerInput === "rock") {
        roundResult.textContent = "Rock smashes scissors. The computer wins this round!";
        computerScore++;
        computerResult.textContent = 'Computer Score: ' + computerScore;
    } else if (pInput === "scissors" && computerInput === "paper") {
        roundResult.textContent = "Scissors cut paper. The player wins this round!";
        playerScore++;
        playerResult.textContent = 'Player Score: ' + playerScore;
    }
}

// function to check player score
function checkScore() {
    if (playerResult.textContent === 'Player Score: 5') {
        roundResult.textContent = 'The player has won the game! Please play again.'
        playerResult.textContent = '';
        computerResult.textContent = '';
        playerScore = 0;
        computerScore = 0;
    } else if (computerResult.textContent === 'Computer Score: 5') {
        roundResult.textContent = 'The computer has won this game. Better luck next time!';
        computerResult.textContent = '';
        playerResult.textContent = '';
        computerScore = 0;
        playerScore = 0;
    }
}

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const results = document.querySelector('#score');
const roundResult = document.querySelector('#roundResultContainer');
const playerResult = document.querySelector('#playerScoreContainer');
const computerResult = document.querySelector('#computerScoreContainer');

results.appendChild(playerResult);
results.appendChild(computerResult);
results.appendChild(roundResult);

rockButton.addEventListener('click', () => {
    pInput = 'rock';
    playRound();
    checkScore();
});

paperButton.addEventListener('click', () => {
    pInput = 'paper';
    playRound();
    checkScore();
});

scissorsButton.addEventListener('click', () => {
    pInput = 'scissors';
    playRound();
    checkScore();
});