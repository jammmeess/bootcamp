// This program does thew following:
// 1.Determine whether a number is at least a dozen.
// 2. Determine how many dozens that number is.
// 3. Determine if it's exactly to the dozen.
// Author: Kristoffer James Bomediano

function runActivity() {
  let num = Number(prompt("Give me a number."));
  if (num >= 12) {
    console.log(num + " is atleast a dozen!");
    let dozens = num / 12;
    console.log("That is " + dozens + " dozen(s)!");
    if (num % 12 == 0) {
      console.log("That is an exact dozen(s)!");
    }
  } else {
    console.log(num + " is NOT a dozen!");
  }
}
