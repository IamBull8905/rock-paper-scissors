let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randNum = Math.random()
    if (randNum > 2/3) {
        return "rock"
    } else if (randNum > 1/3) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Would you like to play Rock, Paper or Scissors? ")
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("It's a tie! Both of you played rock!")
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore += 1
        console.log("YOU WIN! (Rock beats scissors)")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore += 1
        console.log("You lose. (Paper beats rock)")
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("It's a tie! Both of you played scissors!")
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore += 1
        console.log("You lose. (Rock beats scissors)")
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore += 1 
        console.log("YOU WIN! (Scissors beats paper)")
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("It's a tie! Both of you played paper!")
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore += 1
        console.log("YOU WIN! (Paper beats rock)")
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore += 1
        console.log("You lose. (Scissors beats paper)")
    } else {
        return "Invalid input"
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)