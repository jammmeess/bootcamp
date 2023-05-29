function runActivity() {
  let answer = "chicken";
  let x = false;

  while (x == false) {
    let guess = prompt("Try to guess my Animal!");
    if (guess == answer) {
      console.log("you got it! The answer is " + answer);
    } else {
      console.log(guess + " is not my animal!");
    }
  }
}
