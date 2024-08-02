// function to get computer's play of rock, paper or scissors
function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber < 1/3) {
        return computerChoice = "rock";
    } else if (randomNumber > 2/3) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

// function for player to choose rock, paper or scissors
function getHumanChoice () {
    let humanChoice = prompt("Choose rock, paper or scissors:").toLowerCase();
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Invalid choice. Please select one of Rock, Paper or Scissors.");
        humanChoice = prompt("Choose Rock, Paper or Scissors:").toLowerCase();
    }
    return humanChoice
}

let computerScore = 0;
let humanScore = 0;

// function to enable a round to be played
function playRound(compterChoice, humanChoice) {
    console.log("Computer: " + compterChoice);
    console.log("You: " + humanChoice);
    if (computerChoice === humanChoice) {
        console.log("It's a draw!");
    } else if ((compterChoice === "rock" && humanChoice === "paper") 
               || (compterChoice === "paper" && humanChoice === "scissors") 
               || (compterChoice === "scissors" && humanChoice === "rock")) {
        console.log("You win!");
        humanScore ++;
    } else {
        console.log("Computer wins :(");
        computerScore ++;
    }
    console.log("Score is " + humanScore + ":" + computerScore);
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

console.log(playRound(computerChoice, humanChoice));