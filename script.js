let humanScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    return humanChoice = prompt("Make your choice (rock, paper, scissors):");
    
}