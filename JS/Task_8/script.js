"use strict";

let userName = "Hadeer";
userName ? console.log(`Hello ${userName}`) : console.log("Hello"); //Tested with hadeer

let userQuestion = "When i get married ?";
console.log(`${userName} is asked ${userQuestion}`);

//Radom number
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  default:
    eightBall = "Signs point to yes";
}

console.log(`Magic Eight Ball's Answer: ${eightBall}`);
