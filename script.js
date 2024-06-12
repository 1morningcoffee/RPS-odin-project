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