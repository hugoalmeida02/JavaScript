let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    loses: 0,
    ties: 0,
};

updateScore();

function updateScore() {
    document.querySelector(
        "#js-score"
    ).innerText = `Wins: ${score.wins}, Loses ${score.loses}, Ties: ${score.ties}`;
}

document.querySelector("#js-reset").addEventListener("click", reset);

function reset() {
    score.wins = 0;
    score.ties = 0;
    score.loses = 0;
    localStorage.removeItem("score");
    updateScore();

    document.querySelector("#js-result").innerHTML = null;
    document.querySelector("#js-game").innerHTML = null;
}

document.querySelector("#js-autoplay").addEventListener("click", autoPlay);

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

document.querySelector("#js-rock").addEventListener("click", () => {
    playGame("rock");
});
document.querySelector("#js-paper").addEventListener("click", () => {
    playGame("paper");
});
document.querySelector("#js-scissors").addEventListener("click", () => {
    playGame("scissors");
});

document.body.addEventListener("keydown", (event) => {
    if (event.key === "r") {
        playGame("rock");
    } else if (event.key === "p") {
        playGame("paper");
    } else if (event.key === "s") {
        playGame("scissors");
    }
});

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let = result = ``;

    if (playerMove === `scissors`) {
        if (computerMove == `rock`) {
            result = `You lose!`;
        } else if (computerMove === `paper`) {
            result = `You win!`;
        } else if (computerMove === `scissors`) {
            result = `You tie!`;
        }
    } else if (playerMove === `paper`) {
        if (computerMove == `rock`) {
            result = `You win!`;
        } else if (computerMove === `paper`) {
            result = `You tie!`;
        } else if (computerMove === `scissors`) {
            result = `You lose!`;
        }
    } else if (playerMove === `rock`) {
        if (computerMove == `rock`) {
            result = `You tie!`;
        } else if (computerMove === `paper`) {
            result = `You lose!`;
        } else if (computerMove === `scissors`) {
            result = `You win!`;
        }
    }

    if (result === `You win!`) {
        score.wins += 1;
    } else if (result === `You tie!`) {
        score.ties += 1;
    } else if (result === `You lose!`) {
        score.loses += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScore();

    document.querySelector("#js-result").innerText = result;
    document.querySelector(
        "#js-game"
    ).innerHTML = `You <img src="${playerMove}-emoji.png" class="emoji">
        <img src="${computerMove}-emoji.png" class="emoji">
        Computer`;
}

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = "scissors";
    }

    return computerMove;
}
