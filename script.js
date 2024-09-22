function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3); 
    switch (randomValue) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    let message = '';

    if (humanChoice == computerChoice) {
        message = `Draw! Both picked ${humanChoice}`;
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            message = "You win! Paper beats Rock";
            humanScore++;
        } else {
            message = "You lose! Scissors beats Paper";
            computerScore++;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            message = "You win! Scissors beats Paper";
            humanScore++;
        } else {
            message = "You lose! Rock beats Scissors";
            computerScore++;
        }
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            message = "You win! Rock beats Scissors";
            humanScore++;
        } else {
            message = "You lose! Paper beats Rock";
            computerScore++;
        }
    }
    resultMessage.textContent = message;
}

function updateScore() {
    score.textContent = `Player score: ${humanScore} Computer Score: ${computerScore}`;

    if (humanScore == 5 || computerScore == 5) {
        let winner = (humanScore > computerScore) ? "Player" : "Computer";
        const victoryMessage = document.createElement("div");
        victoryMessage.textContent = `${winner} is the winner!`;
        results.appendChild(victoryMessage);
    }
}

let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelector("#buttons");
let results = document.querySelector("#results");
let resultMessage = document.querySelector("#resultMessage");
let score = document.querySelector("#score");

buttons.addEventListener("click", (event) => {
    let target = event.target;
    let humanChoice = "";

    switch(target.id) {
        case "rock":
            humanChoice = "rock";
            break;
        case "paper":
            humanChoice = "paper";
            break;
        case "scissors":
            humanChoice = "scissors";
            break;
    }

    playRound(humanChoice, getComputerChoice());
    updateScore();
});