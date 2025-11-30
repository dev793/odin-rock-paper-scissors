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

    console.log("Player choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);

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

function playGame() {

    for (let i = 0; i < 5; i++ ) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Player Score: ${humanScore}, Computer score: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! Player Score: ${humanScore}, Computer score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose the game! Player Score: ${humanScore}, Computer score: ${computerScore}`);
    } else {
        console.log(`It's a tie! Player Score: ${humanScore}, Computer score: ${computerScore}`);
    }
}

playGame();