$(document).ready(function () {
  $("#username").text(localStorage.getItem("username"));
});

function logout() {
  localStorage.removeItem("remember");
  localStorage.removeItem("username");
  window.location.href = "login.html";
}
