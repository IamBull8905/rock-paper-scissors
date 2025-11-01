const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    let randNum = Math.random();
    if (randNum > 2/3) {
        return "rock";
    } else if (randNum > 1/3) {
        return "paper";
    } else {
        return "scissors";
    };
};


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
        function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == computerChoice) {
            console.log(`It's a tie! Both of you played ${humanChoice}!`);
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            console.log("YOU WIN! (Rock beats scissors)");
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            console.log("You lose. (Paper beats rock)");
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            console.log("You lose. (Rock beats scissors)");
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1; 
            console.log("YOU WIN! (Scissors beats paper)");
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            console.log("YOU WIN! (Paper beats rock)");
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            console.log("You lose. (Scissors beats paper)");
        } else {
            return "Invalid input";
        };
    };
        buttons.forEach((button) => {
        button.addEventListener("click", () => {
        let humanChoice = button.className;
        playRound(humanChoice, getComputerChoice());
        });
    });

    //console.log(`The computer scored: ${computerScore}`);
    //console.log(`You scored ${humanScore}`);
};

playGame();