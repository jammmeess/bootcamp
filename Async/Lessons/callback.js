function run() {
  function getSum(x, y, z) {
    let sum = x + y;
    if (z !== undefined) {
      z(sum);
    }
    return sum;
  }

  function print(x) {
    console.log(x);
    alert(x);
  }

  function displayMessage(x) {
    $(document).ready(function () {
      $("#message").text(x);
    });
  }

  let z = print;
  let x = getSum(6, 7, print);
  console.log(x);

  //   print(sum);
}
