$(document).ready(function () {
  $("#studentButton").click(function () {
    let count = Number($("#student-count").html());
    count++;
    $("#student-count").html(count);
  });

  $("#darkMode").click(function () {
    $("body").toggleClass("dark-mode bg-dark");
    $("body").removeClass("bg-white");
    $("#darkMode").toggleClass("bg-light text-dark");
    $(".navbar").toggleClass("navbar-light navbar-dark bg-dark");
    $("header").toggleClass("bg-dark text-light");
    $(".card").toggleClass("bg-dark text-white bg-white text-dark");
  });
});
