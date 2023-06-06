function runActivity() {
  const vegetables = new Set(["carrots", "lettuce", "eggplant"]);

  vegetables.add("pumpkin");
  console.log(vegetables);
  vegetables.add("carrots");
  console.log(vegetables);
  vegetables.forEach(function (vegetable) {
    console.log(vegetable);
    if (vegetable == "eggplant") {
      console.log(vegetable);
    }
  });
  console.log(vegetables.values());
  console.log(vegetables.has("lettuce"));
}
