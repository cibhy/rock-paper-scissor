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
console.log(getComputerChoice())

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
console.log(getHumanChoice())