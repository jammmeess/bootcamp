$(document).ready(function () {
  $("#register").submit(function (x) {
    let username = $("#username").val();
    let firstname = $("#fname").val();
    let lastname = $("#lname").val();
    let email = $("#email").val();
    let password = $("#pw").val();
    let gender = $("#gender").val();
    let newsletter = $("#newsletter").prop("checked");

    if (
      confirm("Are you sure?\nUsername: " + username + "\nGender: " + gender)
    ) {
      if (gender != "") {
        let fullname = firstname + " " + lastname;
        let reg_users = $("#reg_users").html();
        if (newsletter) {
          newsletter = "Yes";
        } else {
          newsletter = "No";
        }
        let new_user =
          "<tr><td>" +
          username +
          "</td><td>" +
          fullname +
          "</td><td>" +
          gender +
          "</td><td>" +
          newsletter +
          "</td></tr>";
        $("#reg_users").html(reg_users + new_user);
      } else {
        alert("ERROR: Specify your gender!");
      }
    }
    x.preventDefault();
  });
});
 