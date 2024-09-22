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
    results.textContent = message;
}

let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelector("#buttons");
let results = document.querySelector("#results");

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

});

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound(getHumanChoice(), getComputerChoice());
//     }
//     console.log(`Final result: Player: ${humanScore}, Computer: ${computerScore}`);
// }

// playGame();

//playRound(getHumanChoice(), getComputerChoice());