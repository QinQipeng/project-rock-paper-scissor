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

function getHumanChoice () {
    return prompt("Enter either rock, paper, or scissor").toLowerCase()
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        console.log(`Draw! ${humanChoice} against ${computerChoice}`)
    }else if (humanChoice == "rock"){
        if(computerChoice == "scissor") {console.log("You win! Rock beats Scissor");   humanScore++}
        else                            {console.log("You lose! Paper beats Rock");    computerScore++}
    } else if (humanChoice == "paper"){
        if(computerChoice == "rock")    {console.log("You win! Paper beats Rock");     humanScore++;}
        else                            {console.log("You lose! Scissor beats Paper"); computerScore++}
    } else {
        if (computerChoice == "paper")  {console.log("You Win! Scissor beats Paper");  humanScore++}
        else                            {console.log("You lose! Rock beats Scissor");  computerScore++}
    }
}

let humanScore = 0
let computerScore = 0

for (let i = 0 ; i < 5; i++){
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)
}

console.log(`Human score: ${humanScore} vs Computer score: ${computerScore}`)
console.log(`${humanScore > computerScore ? "Human" : "Computer"} wins!`)