// Returns a random choice of rock, paper or scissor for the computer

function getComputerChoice(){
  let getComputerResult = (Math.floor(Math.random() * 3) + 1);
  if(getComputerResult === 1){
    return "rock";
  } else if (getComputerResult === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}


// Returns a random choice of rock, paper or scissor by the human

function getHumanChoice(){
  let getHumanResult = prompt("Enter rock, paper or scissor").toLowerCase().trim();
  if (getHumanResult === "rock"){
    return "rock";
  } else if (getHumanResult === "paper"){
    return "paper";
  } else if (getHumanResult === "scissor"){
    return "scissor";
  } else {
    return "Incorrect! Enter rock, paper or scissor";
  }
}

// Declaring the scores to 0;

let playerScore = 0;
let computerScore = 0;

// Compares the human's and computer's choices, updates scores, and returns the round result.

function playRound() {
  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    playerScore++;
    computerScore++;
    return "Its a tie. Both chose the same."
  } else if (humanChoice === "rock" && computerChoice === "scissor"){
    playerScore++;
    return "You Win. Rock beats Scissor"
  } else if (humanChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    return "You Lose. Paper beats Rock"
  } else if (humanChoice === "paper" && computerChoice === "rock"){
    playerScore++;
    return "You Win. Paper beats Rock"
  } else if (humanChoice === "paper" && computerChoice === "scissor"){
    computerScore++;
    return "You Lose. Scissor beats Paper"
  } else if (humanChoice === "scissor" && computerChoice === "paper"){
    playerScore++;
    return "You Win. Scissor beat Paper"
  } else if (humanChoice === "scissor" && computerChoice === "rock"){
    computerScore++;
    return "You Lose. Rock beat Scissor"
  }
}

console.log(playRound());
console.log("Player : ", playerScore);
console.log("Computer : ", computerScore);
