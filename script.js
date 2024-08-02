// function to get computer's play of rock, paper or scissors
function getComputerChoice() {
    let randomNumber = Math.random()
    let computerChoice
    if (randomNumber < 1/3) {
        return computerChoice = "Rock";
    } else if (randomNumber > 2/3) {
        return computerChoice = "Paper";
    } else {
        return computerChoice = "Scissors";
    }
}