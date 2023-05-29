// This following program does the following:
// 1. Ask the user to select a product.
// 2. Sell the product.

function runActivity() {
  let cash = 1000;
  let choice = Number(
    prompt("Would you like to buy an Aquaflask for 600 pesos?? 0: Yes, 1: No")
  );

  if (choice == 0 && cash >= 600) {
    console.log("Thank you for buying my Aquaflask!");
    cash -= 600;
  } else {
    console.log("Awwww too bad.");
  }

  choice = Number(
    prompt(
      "Would you like to buy a Chicken Joy Bucket Meal for 500 Pesos? 0: Yes, 1 No"
    )
  );
  if (choice == 0 && cash >= 500) {
    console.log("Bida and Saya!");
    cash -= 500;
  } else {
    console.log("Salbahe");
  }

  console.log("You have " + cash + " Pesos left.");
}
