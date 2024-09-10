console.log("Hello World");

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
        humanChoice = prompt("Please choose 'rock', 'paper', or 'scissors':");
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;