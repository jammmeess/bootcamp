// This program solves the following:
// 1. The Area of the Triangle
// 2. The Area of a Circle
// 3. The Area of a Rectangle

function runActivity() {
  let shape = Number(
    prompt(
      "Please enter the number of your chosen shape: 1: Triangle, 2: Cricle 3: Rectangle."
    )
  );
  if (shape == 1) {
    console.log("Your shape is a triangle");
    let base = Number(prompt("Give me the base of your Triangle."));
    let height = Number(prompt("Give me the height of your Triangle."));
    triangle = (1 / 2) * (base * height);
    console.log("The area of the triangle is " + triangle + "!");
  } else {
    if (shape == 2) {
      console.log("Your shape is a circle");
      let radius = Number(prompt("Give me the radius of your Circle."));
      circle = 3.1416 * radius ** 2;
      console.log("The area of the circle is " + circle + "!");
    } else {
      if (shape == 3) {
        console.log("Your shape is a Rectangle");
        let length = Number(prompt("Give me the length of your Rectangle."));
        let width = Number(prompt("Give me the width of your Rectangle."));
        rectangle = length * width;
        console.log("The area of your rectangle is " + rectangle + "!");
      } else {
        if (shape < 1 || shape > 3) {
          console.error(
            "ERROR! Choices are only 1:Triangle 2: Circle and 3: Rectangle! Please enter the NUMBER of your prefered shape "
          );
        }
      }
    }
  }
}
