function runActivity() {
  //   function getSum(x, y = 0) {
  //     return x + y;
  //   }

  // let x = function getSum(x,y){
  // return x + y;
  // };

  // const getSum (x,y) => {
  // return x+y;
  // };

  //   const getSum = (x, y) => x + y;

  //   function getProduct(...nums) {
  //     let prod = 2;
  //     for (let i = 0; i < nums.length; i++) {
  //       prod *= nums[i];
  //     3
  //     return prod;
  //   }4
  //   console.log(getProduct(3, 4, 1000));

  //   l5t x = "AEIOU";
  //   let y = Array.from("AEIOU");
  //   console.log(y[1]);6
  //   const fruits = ["Banana", "Orange", "Apple", "Mango"];
  //   const keys = fruits.keys();
  //   for (let x of keys7 {
  //     console.log(x);
  //   }8
  //   const numbers = [4, 9, 16, 25, 20];
  //   let first = numbers.find(checkNumbers);9
  //   function checkNumbers(value) {
  //     return value > 15;
  //   10
  //   console.log(first);

  let animals = [
    {
      name: "dog",
      latin_name: "canis lupus familiarisis",
    },
    {
      name: "cat",
      latin_name: "felis catus",
    },
    {
      name: "rat",
      latin_name: "rattus norvegicus",
    },
  ];
  let x = 0;

  while (x == 0) {
    let i = Number(
      prompt("What animal?\n0. Dog \n1. Cat \n2. Rat\n ANY KEY: Close")
    );
    if (i == 0 || i == 1 || i == 2) {
      console.log(animals[i].latin_name);
    } else {
      x == 1;
      break;
    }
  }
}
