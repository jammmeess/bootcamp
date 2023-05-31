// This program does the following:
// 1. Provide a list of products price

function runActivity() {
  const product_name = [
    "Refrigerator",
    "Microwave",
    "Washing Machine",
    "Television",
  ];
  const product_price = [15000, 5000, 7000, 35000];

  let choice_num = Number(prompt("How many items you would like to add?"));
  for (let i = 0; i < choice_num; i++) {
    let choice_name = prompt("Name of product");
    let choice_price = Number(prompt("Price of product"));
    product_name.push(choice_name);
    product_price.push(choice_price);
  }

  let choice = prompt("What would you like to buy?");

  for (let i = 0; i < product_name.length; i++) {
    if (product_name[i] == choice) {
      console.log(product_name[i] + " Is worth " + product_price[i]);
      break;
    }
  }
}
