function runActivity() {
  let num = Number(prompt("Give me a number"));
  if (num == 0) {
    console.log("Zero is neither even nor odd");
  } else if (num % 2 == 0) {
    console.log("That number is even!");
  } else {
    console.log("That number is odd!");
  }
}
