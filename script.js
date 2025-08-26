function getComputerChoice() {
    let randNum = Math.random()
    if (randNum > 2/3) {
        return "Rock"
    } else if (randNum > 1/3) {
        return "Scissors"
    } else {
        return "Paper"
    }
}

function getHumanChoice() {
    let choice = prompt("Would you like to play Rock, Paper or Scissors? ")
    return choice
}