function runActivity() {
  const fishes = ["Bangus", "Tilapia", "Tuna", "Salmon", "Shark"];
  fishes.push("Yellowfin");

  for (let i = 0; i < fishes.length; i++) {
    console.log("Fish#" + i + ": " + fishes[i]);
    if (fishes[i] == "Shark") {
      alert("DANGER! SHARK WARNING");
    }
  }
  console.log(fishes);
  console.log(fishes.length);
  console.log(fishes[1]);
  console.log(fishes[0]);
  console.log(fishes.sort());
  console.log(fishes.reverse());
  // let name = "Kristoffer James";

  //
  //   console.log(name.length);
  //   const num = [];
  //   for (let i = 0; i <= 100; i++) {
  //     num[i] = Number(prompt("Give me a number"));
  //   }
}
