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

console.log(getComputerChoice());
console.log(getHumanChoice());