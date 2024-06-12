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