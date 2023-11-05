// const { messageMixer } = require("./messageMixer.js");
import messageMixer from "./messageMixer.js";
import {
  countCharacter,
  capitalizeFirstCharacterOfWords,
  reverseWord,
  reverseAllWords,
  replaceFirstOccurence,
  replaceAllOccurrences,
  encode,
  palindrome,
  pigLatin,
} from "./messageMixer.js";

// function displayMessage() {
//   console.log(
//     messageMixer.countCharacter("What is the color of the sky?", "t")
//   );
//   console.log(
//     messageMixer.capitalizeFirstCharacterOfWords(
//       "What is the color of the sky?"
//     )
//   );
//   console.log(messageMixer.reverseWord("What is the color of the sky?"));
//   console.log(messageMixer.reverseAllWords("What is the color of the sky?"));
//   console.log(
//     messageMixer.replaceFirstOccurence(
//       "What is the color of the sky?",
//       "sky",
//       "water"
//     )
//   );
//   console.log(messageMixer.encode("What is the color of the sky?"));

//   console.log(messageMixer.palindrome("Hadeer"));

//   console.log(messageMixer.pigLatin("Dear"), "H");
// }
function displayMessage1() {
  console.log(countCharacter("What is the color of the sky?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the color of the sky?"));
  console.log(reverseWord("What is the color of the sky?"));
  console.log(reverseAllWords("What is the color of the sky?"));
  console.log(
    replaceFirstOccurence("What is the color of the sky?", "sky", "water")
  );
  console.log(encode("What is the color of the sky?"));
  console.log(palindrome("hello"));
  console.log(pigLatin("hello world", "-"));
}

//displayMessage();
displayMessage1();
