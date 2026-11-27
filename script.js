let humanScore = 0;
let computerScore = 0;
let ties = 0;

function updateScore() {
  document.querySelector("#human-score-detail").textContent = humanScore;
  document.querySelector("#computer-score-detail").textContent = computerScore;
  document.querySelector("#ties-detail").textContent = ties;
}

function getHumanMoveSelection() {
  const moveButtons = document.querySelectorAll(".rps-move-button");
  moveButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const humanMoveSelection = event.target.textContent.trim();
      document.querySelector("#human-selection-detail").textContent =
        humanMoveSelection;
      playRound(humanMoveSelection);
    });
  });
}

function getComputerMoveSelection() {
  let randomNumber = Math.random() * 3;
  let computerMoveSelection;
  if (randomNumber < 1) {
    computerMoveSelection = "Rock";
  } else if (randomNumber < 2) {
    computerMoveSelection = "Paper";
  } else {
    computerMoveSelection = "Scissors";
  }
  document.querySelector("#computer-selection-detail").textContent =
    computerMoveSelection;
  return computerMoveSelection;
}

function playRound(humanMoveSelection) {
  let computerMoveSelection = getComputerMoveSelection();

  if (humanMoveSelection === computerMoveSelection) {
    ties++;
  } else if (
    humanMoveSelection === "Rock" &&
    computerMoveSelection === "Scissors"
  ) {
    humanScore++;
  } else if (
    humanMoveSelection === "Paper" &&
    computerMoveSelection === "Rock"
  ) {
    humanScore++;
  } else if (
    humanMoveSelection === "Scissors" &&
    computerMoveSelection === "Paper"
  ) {
    humanScore++;
  } else {
    computerScore++;
  }
  updateScore()
}

updateScore()
getHumanMoveSelection();
