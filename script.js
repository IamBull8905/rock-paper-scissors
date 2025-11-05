const buttons = document.querySelectorAll("button");
const container = document.querySelector("#computer-cards");
const container2 = document.querySelector("#player-cards");
const resultsText = document.querySelector("#results-text")
const domComputerScore = document.querySelector("#computer-score");
const domPlayerScore = document.querySelector("#player-score");
const domFinalScore = document.querySelector("#final-score");
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const existingImg = container.querySelector("img.comp-card");
    existingImg ? existingImg.remove() : null;
    let compChoice = "";
    let randNum = Math.random();
    const img = document.createElement("img");
    img.classList.add("comp-card");
    if (randNum > 2/3) {
        img.src = "./images-&-icons/mount-fuji.png";
        compChoice = "rock";
    } else if (randNum > 1/3) {
        img.src = "./images-&-icons/washi.png";
        compChoice = "paper";
    } else {
        img.src = "./images-&-icons/katana.png";
        compChoice = "scissors";
    };
    container.appendChild(img);
    return compChoice;
};

function createHumanChoiceCard(choice) {
    const currentCard = container2.querySelector("img.player-card");
    currentCard ? currentCard.remove() : null;
    const img = document.createElement("img");
    img.classList.add("player-card");
    if (choice === "rock") {
        img.src = "./images-&-icons/mount-fuji.png";
    } else if (choice === "paper") {
        img.src = "./images-&-icons/washi.png";
    } else {
        img.src = "./images-&-icons/katana.png";
    };
    container2.appendChild(img);
};


function playGame() {
    let gameOver = false;
    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        domPlayerScore.textContent = "Player score: 0";
        domComputerScore.textContent = "Computer score: 0";
        domFinalScore.textContent = "Final score:";
    }

    function playRound(humanChoice, computerChoice) {
        const oldDivs = resultsText.querySelectorAll("div.results-text");
        oldDivs.length >= 3 ? oldDivs[0].remove() : null;
        humanChoice = humanChoice.toLowerCase();
        const div = document.createElement("div");
        div.classList.add("results-text");
        if (humanChoice == computerChoice) {
             div.textContent = `It's a tie! Both of you played ${humanChoice}!`;
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore += 1;
            div.textContent = "YOU WIN! (Rock beats scissors)";
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore += 1;
            div.textContent = "You lose. (Paper beats rock)";
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            div.textContent = "You lose. (Rock beats scissors)";
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1; 
            div.textContent = "YOU WIN! (Scissors beats paper)";
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore += 1;
            div.textContent = "YOU WIN! (Paper beats rock)";
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            div.textContent = "You lose. (Scissors beats paper)";
        } else {
            return "Invalid input";
        };
        resultsText.appendChild(div);
    };
        buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (gameOver) return resetGame(), gameOver = false;
        let humanChoice = button.className;
        createHumanChoiceCard(humanChoice);
        playRound(humanChoice, getComputerChoice());
        domPlayerScore.textContent = `Player score: ${humanScore}`;
        domComputerScore.textContent = `Computer score: ${computerScore}`;
        console.log(humanScore,computerScore);
        if (humanScore === 5) {
            domFinalScore.textContent = "Player won the game!";
            gameOver = true;
        } else if (computerScore === 5) {
            domFinalScore.textContent = "Computer won the game :(";
            gameOver = true;
        };
        });
    });
};

playGame();