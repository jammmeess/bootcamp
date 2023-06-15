$(document).ready(function () {
  let l_email;
  let l_time;

  if (sessionStorage.getItem("last_email") != null) {
    l_email = sessionStorage.getItem("last_email");
    $("#last_email").text(l_email);
  }

  if (sessionStorage.getItem("last_time") != null) {
    l_time = sessionStorage.getItem("last_time");
    $("#last_time").text(l_time);
  }

  $("#email_register").submit(function () {
    let l_email = $("#email").val();
    let l_time = new Date();
    $("#last_email").text(l_email);
    $("#last_time").text(l_time);
    sessionStorage.setItem("last_email", l_email);
    sessionStorage.setItem("last_time", l_time);
  });
});
