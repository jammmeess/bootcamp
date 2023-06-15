$(document).ready(function () {
  let remember = localStorage.getItem("remember");
  if (remember != null) {
    window.location.href = "home.html";
  }
  $("#login").submit(function (x) {
    let username = $("#username").val();
    let pw = $("#pw").val();
    if (username == "user") {
      if (pw == "pw123") {
        let remember = $("#remember").prop("checked");
        if (remember) {
          localStorage.setItem("username", username);
          localStorage.setItem("remember", remember);
        }
        window.location.href = "home.html";
      } else {
        alert("Incorrect password!");
      }
    } else {
      alert("Incorrect username!");
    }
    x.preventDefault();
  });
});
