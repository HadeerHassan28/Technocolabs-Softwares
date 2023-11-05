"use strict";
let raceNumber = Math.floor(Math.random() * 1000); // Generate a random race number
let registeredEarly = true; // Boolean variable indicating whether the runner is registered early
let runnerAge = [18, 30, 15];

for (let index = 0; index < runnerAge.length; index++) {
  if (registeredEarly && runnerAge[index] > 18) raceNumber += 1000;

  if (runnerAge[index] > 18 && registeredEarly)
    console.log(
      `The race will be at 09:00am , Your race number is ${raceNumber}`
    );
  else if (!registeredEarly && runnerAge[index] > 18)
    console.log(
      `The race will be at 11:00 am , Your race number is ${raceNumber}`
    );
  else if (runnerAge[index] < 18)
    console.log(
      `The race will be at 12:30 am , Your race number is ${raceNumber}`
    );
  else console.log("Please see the registration desk."); //Age = 18
}
