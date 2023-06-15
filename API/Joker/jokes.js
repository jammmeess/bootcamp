function getJoke() {
  getText("https://v2.jokeapi.dev/joke/Any?safe-mode");
  async function getText(file) {
    let myObject = await fetch(file);
    let data = await myObject.json();

    let jokeElement = document.getElementById("joke");
    jokeElement.textContext = "";

    if (data.type === "twopart") {
      let setup = data.setup;
      let delivery = data.delivery;
      let finalJoke = setup + " " + delivery;
      jokeElement.textContent = finalJoke;
    } else if (data.type === "single") {
      let joke = data.joke;
      jokeElement.textContent = joke;
    }
  }
}
