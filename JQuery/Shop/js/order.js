$(document).ready(function () {
  const prices = {
    burger: 60,
    steak: 80,
    fries: 50,
    salad: 70,
    sprite: 25,
    icecream: 25,
  };

  $("#food-order").submit(function (x) {
    let select = $("#food-select").val();
    let amount = $("#food-amount").val();
    let price = prices[select];
    let total_price = "₱" + price * amount;

    if (select) {
      let food_table = $("#food-table").html();
      let new_order =
        "<tr><td>" +
        select +
        "</td><td>" +
        amount +
        "</td><td>" +
        total_price +
        "</td><tr>";
      $("#food-table").html(food_table + new_order);
    } else {
      alert("Error: Please specify an order!");
    }

    x.preventDefault();
  });

  $("#get_all").click(function () {
    if ($("#get_all").prop("checked")) {
      $(".sauce").prop("checked", true);
    } else {
      $(".sauce").prop("checked", false);
    }
  });
});
