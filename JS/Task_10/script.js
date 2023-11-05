"use strict";

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else console.log("Invalid choice!");
};
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      console.log("rock");
      return "rock";
    case 1:
      console.log("paper");
      return "paper";
    case 2:
      console.log("scissors");
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) return console.log("'It's a tie!'");
  if (userChoice === "paper")
    return computerChoice === "paper"
      ? console.log("Computer wins!")
      : console.log("You win!");
  if (userChoice === "paper") {
    return computerChoice === "scissors"
      ? console.log("Computer wins!")
      : console.log("You win!");
  }
  if (userChoice === "scissors") {
    return computerChoice === "rock"
      ? console.log("Computer wins!")
      : console.log("You win!");
  }
  if (userChoice === "bomb") {
    return console.log("You win! (cheat code activated)");
  }
};

const playGame = () => {
  let userChoice = getComputerChoice("paper");
  let computerChoice = getComputerChoice();
  console.log(
    `User choice is ${userChoice}, Computr choice is ${computerChoice}`
  );
  determineWinner(userChoice, computerChoice);
};
//getUserChoice("rock");
//getComputerChoice();

playGame();
