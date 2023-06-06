function changeName() {
  let choice_name = prompt("Please Enter your Name");
  if (choice_name) {
    document.getElementById("userName").innerHTML = choice_name;
    document.getElementById("userName2").innerHTML = choice_name;
  }
}
