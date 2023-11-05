"use strict";

//My age
const myAge = 27;

// The first two years of a dog's life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;
// earlyYears = earlyYears * 10.5;

// Subtracting the first two years from my age
let laterYears = myAge - 2; //

// Each year following equates to 4 dog years
laterYears *= 4;

// Calculating my age in dog years
let myAgeInDogYears = laterYears + earlyYears;

// My name in lowercase
let myName = "Hadeer".toLowerCase();
//Output
console.log(`the earlyYears is ${earlyYears}, the laterYears is ${laterYears}`); //As expected

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
//30 => 133, 27 =>121
