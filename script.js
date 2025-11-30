let humanScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    return humanChoice = prompt("Make your choice (rock, paper, scissors):").toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    let result = "";
    
    if (humanChoice == computerChoice) {
        result = "draw";
    } else if (humanChoice == "rock") {
        result = (computerChoice == "scissors") ? "win" : "lose";
    } else if (humanChoice == "paper") {
        result = (computerChoice == "rock") ? "win" : "lose";
    } else if (humanChoice == "scissors") {
        result = (computerChoice == "paper") ? "win" : "lose";
    }

    if (result == "win") {
        humanScore += 1;
        console.log(`You ${result}, ${humanChoice} beats ${computerChoice}`);
    } else if (result == "lose") {
        computerScore += 1;
        console.log(`You ${result}, ${computerChoice} beats ${humanChoice}`);
    } else {
        console.log(`You ${result}, both players chose ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Player choice: " + humanSelection);
console.log("Computer choice: " + computerSelection);

playRound(humanSelection, computerSelection);
