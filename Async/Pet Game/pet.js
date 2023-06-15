let hunger = 100;
let exercise = 100;
let sleep = 100;
let petName = "Pikachu";

function run(action) {
  let maxPoints = 100;
  let lastActivity;

  if (action === "eat") {
    hunger = maxPoints;
    sleep -= 5;
    lastActivity = "Fed " + petName + "!";
  } else if (action === "train") {
    exercise = maxPoints;
    lastActivity = "Played with " + petName + "!";
  } else if (action === "rest") {
    sleep = maxPoints;
    lastActivity = petName + " took a nap!";
  }

  updateProgress("hunger", hunger);
  updateProgress("exercise", exercise);
  updateProgress("sleep", sleep);
  $("#activity").text(lastActivity);
}

function redHunger() {
  hunger--;
  if (hunger < 0) hunger = 0;
  updateProgress("hunger", hunger);
  setTimeout(redHunger, 1000);
}

function redExercise() {
  exercise--;
  if (exercise < 0) exercise = 0;
  updateProgress("exercise", exercise);
  setTimeout(redExercise, 3000);
}

function redSleep() {
  sleep--;
  if (sleep < 0) sleep = 0;
  updateProgress("sleep", sleep);
  setTimeout(redSleep, 5000);
}

function updateProgress(id, value) {
  $("#" + id).css("width", value + "%");
}

$(document).ready(function () {
  setTimeout(redHunger, 1000);
  setTimeout(redExercise, 3000);
  setTimeout(redSleep, 5000);
});
