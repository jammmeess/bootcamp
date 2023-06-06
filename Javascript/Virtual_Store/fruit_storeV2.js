//This program does the following:
//1. Ask the user on which part program he would like to use.

function runActivity() {
  alert("Welcome to fruits 101!");

  const fruit_name = [];
  const fruit_price = [];
  const fruit_stock = [];

  function addItem() {
    let choiceFruit = prompt("What fruit would you like to add?");
    let choicePrice = Number(
      prompt("What is the price of " + choiceFruit + "?")
    );

    if (choicePrice <= 0) {
      console.log("Invalid Price! Please enter a valid price!");
      return;
    }

    fruit_name.push(choiceFruit);
    fruit_price.push(choicePrice);
    fruit_stock.push(0);
    console.log(
      choiceFruit +
        " added as an item for sale. Each " +
        choiceFruit +
        " sells for " +
        choicePrice +
        ". Stock set to 0."
    );
    return;
  }

  function restock() {
    let choiceFruit = prompt("Which fruit would you like to restock?");
    let choiceRestock = Number(prompt("How many would you like to restock?"));
    let index = fruit_name.indexOf(choiceFruit);

    if (choiceRestock <= 0) {
      console.Error("Invalid Input! Please enter a valid number!");
      return;
    }

    if (index === -1) {
      console.error("Invalid Input! Please enter a valid fruit!");
      return;
    }

    fruit_stock[index] += choiceRestock;
    console.log(
      choiceRestock +
        " stock has been added to " +
        choiceFruit +
        ". New stock: " +
        fruit_stock[index]
    );
    return;
  }

  function checkPrice() {
    let choiceFruit = prompt("Which fruit would you like to see the price?");
    let choiceAmount = Number(prompt("How many would you like to buy?"));
    let index = fruit_name.indexOf(choiceFruit);

    if (choiceAmount <= 0) {
      console.error("Invalid Input: Please enter a valid amount!");
      return;
    }

    if (index === -1) {
      console.error("Invalid input: Please enter a valid fruit!");
      return;
    }

    let choiceTotal = fruit_price[index] * choiceAmount;
    console.log(
      choiceAmount + " pieces of " + choiceFruit + " is worth " + choiceTotal
    );
    return;
  }

  function sell() {
    let choiceFruit = prompt("Which fruit would you like to sell?");
    let choiceAmount = Number(prompt("How many would you like to sell?"));
    let index = fruit_name.indexOf(choiceFruit);

    if (choiceAmount <= 0) {
      console.error("Invalid Input: Please enter a valid amount!");
      return;
    }

    if (index === -1) {
      console.error("Invalid input: Please enter a valid fruit!");
      return;
    }

    if (choiceAmount > fruit_stock[index]) {
      console.error("Invalid Input!: Please enter a valid stock!");
      return;
    }

    let choiceTotal = fruit_price[index] * choiceAmount;
    fruit_stock[index] -= choiceAmount;
    console.log(
      "Thank you for your purchase of " +
        choiceFruit +
        " for the price of " +
        choiceTotal +
        ". Remaining stock for " +
        choiceFruit +
        " is " +
        fruit_stock[index]
    );
    return;
  }

  let i = 0;
  while (i === 0) {
    var choice = Number(
      prompt("(1) Add new item (2) Restock (3) Check price (4) Sell (5) Stop")
    );
    if (choice === 1) {
      addItem();
    } else if (choice === 2) {
      restock();
    } else if (choice === 3) {
      checkPrice();
    } else if (choice === 4) {
      sell();
    } else if (choice === 5) {
      i = 1;
    }
  }
}
