let humanScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice() {
  let randomNumber = Math.random() * 3;
  let computerChoice;
  if (randomNumber < 1) {
    computerChoice = "rock";
  } else if (randomNumber < 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(`Computer choice: ${computerChoice}`);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper, or scissors: ");
  console.log(`Human choice: ${humanChoice}`);
  return humanChoice;
}

function askPlayAgain() {
  let playAgain = confirm(
    `Human: ${humanScore}\nComputer: ${computerScore}\nTies: ${ties}\nPlay again?`,
  );
  if (playAgain) {
    playRound();
  } else {
    alert("Thanks for playing!");
  }
}

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    ties++;
    console.log("Tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("Human wins!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("Human wins!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("Human wins!");
  } else {
    computerScore++;
    console.log("Computer wins!");
  }
  askPlayAgain();
}

playRound();
