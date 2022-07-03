let computerScore = 0;
let playerScore = 0;


const choiceArray = ["rock", "paper", "scissors"];

function computerPlay() {
    return choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return "It's a tie!";
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        return `You lose! ${playerSelection} beats ${computerSelection}.`
    }

}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick Rock, Paper, or Scissors").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore) {
        console.log("You're the winner!");
    } else if(playerScore < computerScore) {
        console.log("You're the loser!");
    } else {
        console.log("It's a tie by luck!");
    }
}

game();