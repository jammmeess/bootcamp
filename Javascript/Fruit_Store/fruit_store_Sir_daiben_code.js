function runActivity() {
  const fruit_names = [];
  const fruit_prices = [];

  do {
    let fruit_name = prompt("Give me a fruit name [0] Stop");
    if (fruit_name != "0") {
      let fruit_price = Number(
        prompt("What is the price of 1 " + fruit_name + "?")
      );
      fruit_names.push(fruit_name);
      fruit_prices.push(fruit_price);
    } else {
      for (let i = 0; i < fruit_names.length; i++) {
        console.log(fruit_names[i] + " | PHP " + fruit_prices[i]);
      }
      break;
    }
  } while (true);

  do {
    let choice_name = prompt("What would you like to buy? [0] Stop");
    if (choice_name != "0") {
      for (let i = 0; i < fruit_names.length; i++) {
        if (fruit_names[i] == choice_name) {
          let choice_amount = Number(
            prompt("How many of " + choice_name + " would you like to buy?")
          );
          let total = fruit_prices[i] * choice_amount;
          console.log("Total price: " + total);
          break;
        }
      }
    } else {
      break;
    }
  } while (true);
}
