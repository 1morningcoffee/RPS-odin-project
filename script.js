let playerScore = 0;
let computerScore = 0;
let round = 0;

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

// function to get human choice
function getHumanChoice() {
    let humanInput = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
    return humanInput;
}

// function to compare inputs and play the round
function playRound() {
    let pInput = getHumanChoice();
    let computerInput = getComputerChoice();
    if (pInput !== "rock" && pInput !== "paper" && pInput !== "scissors") {
        playRound();
    } else {
        if (pInput === computerInput) {
            console.log("It is a tie round!");
        } else if (pInput === "rock" && computerInput === "paper") {
            console.log("Paper covers rock. The computer wins this round!");
            computerScore++;
        } else if (pInput === "rock" && computerInput === "scissors") {
            console.log("Rock smashes scisors. The player wins this round!");
            playerScore++;
        } else if (pInput === "paper" && computerInput === "rock") {
            console.log("Paper covers rock. The player wins this round!");
            playerScore++;
        } else if (pInput === "paper" && computerInput === "scissors") {
            console.log("Scissors cut paper. The computer wins this round!");
            computerScore++;
        } else if (pInput === "scissors" && computerInput === "rock") {
            console.log("Rock smashes scissors. The computer wins this round!");
            computerScore++;
        } else if (pInput === "scissors" && computerInput === "paper") {
            console.log("Scissors cut paper. The player wins this round!");
            playerScore++;
        }
    }
}

// function to play the entire match, 5 rounds
function playGame() {
    for (let r = 0; r < 5; r++) {
        playRound();
    }
    if (playerScore > computerScore) {
        console.log("Player scored " + playerScore + ". The computer scored " + computerScore + ". The player wins!!!");
    } else if (computerScore > playerScore) {
        console.log("Player scored " + playerScore + ". The computer scored " + computerScore + ". The computer wins. Better luck next time");
    } else {
        console.log("Player scored " + playerScore + ". The computer scored " + computerScore + ". It's a tie!!");
    }
}

playGame();

