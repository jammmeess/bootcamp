// This program does the following.
// 1. Ask the user for  a fruit and ask the user for the fruit price.
// 2. Shows the user the fruits and it's inputted price
// 3. Prompts the user for a fruit they want to buy and how many fruit they want to purchase
// 4. Displays the total price for the purchase of the fruit.

function runActivity() {
  const fruit_name = [];
  const fruit_price = [];
  // const fruit_basket = [];
  // const fruit_quantity = [];
  let x = false;
  let y = false;

  while (x == false) {
    let choice_fruit = prompt("What fruit would you like to add?");
    let choice_price = Number(prompt("How much is the fruit?"));
    if (choice_price >= 0) {
      fruit_name.push(choice_fruit);
      fruit_price.push(choice_price);

      let choice_repeat = prompt(
        "Would you like to add another fruit?\n0: No\nANY KEY: Yes"
      );
      if (choice_repeat === "0") {
        x = true;
      }
    } else {
      console.error("ERROR: Negative price!");
    }
  }

  for (let i = 0; i < fruit_name.length; i++) {
    console.log(fruit_name[i] + " | PHP " + fruit_price[i]);
  }

  while (y == false) {
    let choice_basket = prompt("What fruit would you like to buy?");
    let choice_quantity = Number(prompt("How many?"));
    if (choice_quantity >= 0) {
      // fruit_basket.push(choice_basket);
      // fruit_quantity.push(choice_quantity);
      let fruit_found = false;
      for (let i = 0; i < fruit_name.length; i++) {
        if (choice_basket == fruit_name[i]) {
          fruit_found = true;
          console.log(
            "Total price for " +
              choice_quantity +
              " " +
              fruit_name[i] +
              ": PHP " +
              choice_quantity * fruit_price[i]
          );
        }
      }
      if (fruit_found == false) {
        console.error("ERROR: Fruit not found!");
      }
      let order = prompt(
        "Would you like to buy another fruit?\n0: No\nANY KEY: Yes"
      );
      if (order === "0") {
        y = true;
      }
    } else {
      console.error("ERROR: Negative quantity!");
    }
  }
}
