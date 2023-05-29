// This program does the following.
// Ask the user for a gear setting.
// Adjust speed accordingly.

function runActivity() {
  // let gear = Number(prompt("What gear level would you like?"));
  switch (gear) {
    case 1:
      console.log("Your car is going 20kph");
      alert("Your car is going very slow");
      break;
    case 2:
      console.log("Your car is going 40kph");
      alert("Your car is going slow");
      break;
    case 3:
      console.log("Your car is going 60kph");
      alert("Your car  is going average speed");
      break;
    case 4:
      console.log("Your car is going 80kph");
      alert("Your car is going fast");
      break;
    case 5:
      console.log("Your car is going 100kph");
      alert("Your car is overheating");
      break;
    default:
      console.error("Not an appropriate gear setting!");
  }
}
