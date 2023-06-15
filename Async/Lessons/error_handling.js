// let num = 1;
// num.toPrecision(500);

// // try {
// //   let num = 1;
// //   num.toUppercase();
// // } catch (err) {
// //   console.log("An error has occured!");
// // }

try {
  let x = Number(prompt("Give me a number from 1 to 100"));

  if (x < 1) {
    throw "Number can not be less than 1!";
  } else if (x > 100) {
    throw "Number can not be greater than 100!";
  }
} catch (err) {
  $(document).ready(function () {
    $("#error").text(err);
    console.log(err);
  });
} finally {
    console.log("Test Finished!")
}
