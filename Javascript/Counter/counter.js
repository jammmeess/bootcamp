// The Program solves the following:
// 1. Determining whether each number inputted by the user is any of the following:
// Even, odd, positve, negative, integer, (non-decimal) and decimal.
// 2. Output the total number of numbers inputted to the following:
// Even, odd, positive, negative, integer, and decimal numbers.

function runActivity() {
  let choice = Number(prompt("Give a Number between 2 - 20"));
  let even = 0;
  let odd = 0;
  let positive = 0;
  let negative = 0;
  let integer = 0;
  let decimal = 0;

  if (choice < 2 || choice > 20) {
    console.error("ERROR: Invalid input: Please choose a number between 2-20.");
  }

  for (let i = 0; i < choice; i++) {
    let num = Number(prompt("Please enter your number. " + i));
    if (num !== 0 && num % 2 === 0) {
      even++;
    }
    if (num % 2 !== 0) {
      odd++;
    }
    if (num > 0) {
      positive++;
    }
    if (num < 0) {
      negative++;
    }
    if (num % 1 == 0) {
      integer++;
    }
    if (num % 1 !== 0) {
      decimal++;
    }
  }

  console.log("Number Count:", choice);
  console.log("Even numbers:", even);
  console.log("Odd numbers:", odd);
  console.log("Positive numbers:", positive);
  console.log("Negative numbers:", negative);
  console.log("Integer numbers:", integer);
  console.log("Decimal numbers:", decimal);
}
