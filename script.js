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

function getHumanChoice() {
    let humanChoice = "";
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != 'scissors') {
        humanChoice = prompt("Please choose 'rock', 'paper', or 'scissors':").toLowerCase();
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Draw! Both picked ${humanChoice}`);
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
    }
}

let humanScore = 0;
let computerScore = 0;

let buttons = document.querySelector("#buttons");

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