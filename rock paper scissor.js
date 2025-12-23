function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    switch (choice){
        case 0: 
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"
        default:
            return
    }
}

function playRound (humanChoice, computerChoice, humanScore, computerScore) {
    let message = "";
    let winner = "";
    if (humanChoice == computerChoice){
        winner = "tie";
    }else if (humanChoice == "rock"){
        winner = computerChoice == "scissor" ? "human" : "computer";
    } else if (humanChoice == "paper"){
        winner = computerChoice == "rock" ? "human" : "computer";
    } else {
        winner = computerChoice == "paper" ? "human" : "computer";
    }
    if (winner == "human"){
        message = `You scores! ${humanChoice} beats ${computerChoice}!`;
        humanScore.textContent = parseInt(humanScore.textContent) + 1;
    }else if (winner == "computer"){
        message = `Computer scores! ${computerChoice} beats ${humanChoice}!`;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }else {
        message = `It's a tie! You both chose ${humanChoice}!`;
    }
    return message;
}

function resetGame(humanScore, computerScore, humanLabel, computerLabel, messageLabel) {
    humanScore.textContent = "0";
    computerScore.textContent = "0";
    humanLabel.textContent = "None";
    computerLabel.textContent = "None";
    messageLabel.textContent = "";
}


const humanScore = document.querySelector("#human-score");
const computerScore = document.querySelector("#computer-score");
const humanLabel = document.querySelector("#human-choice");
const computerLabel = document.querySelector("#computer-choice");
const messageLabel = document.querySelector("#message");

const choice = document.querySelector("#choices");
choice.addEventListener("click", (event) => {

    let humanChoice = event.target.id;
    let computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice, humanScore, computerScore);

    messageLabel.textContent = result;
    humanLabel.textContent = `${humanChoice}`;
    computerLabel.textContent = `${computerChoice}`;

    if (parseInt(humanScore.textContent) >= 5 || parseInt(computerScore.textContent) >= 5){
        let game_over_event = new CustomEvent("game_over");
        document.dispatchEvent(game_over_event);
    }
});

document.addEventListener("game_over", () => {
    setTimeout(() => {
        if (parseInt(humanScore.textContent) >= 5){
            alert("Congratulations! You won the game! (Click OK to reset scores)");
            resetGame(humanScore, computerScore, humanLabel, computerLabel, messageLabel);
        }else if (parseInt(computerScore.textContent) >= 5){
            alert("Computer won the game, try again! (Click OK to reset scores)");
            resetGame(humanScore, computerScore, humanLabel, computerLabel, messageLabel);
        }
    }, 100); // Just to ensure the last score update is visible before alert
});
