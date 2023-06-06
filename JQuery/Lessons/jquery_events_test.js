$(document).ready(function () {
  $("#button1").click(function () {
    alert("That was a double click event!");
  });

  $("#button2").mouseenter(function () {
    console.log("That was a mouse enter event!");
  });

  $("#button3").mouseleave(function () {
    console.log("That was a mouse leave event!");
  });

  $("#button4").hover(function () {
    console.log("That was a hover event!");
  });

  $("input").focus(function () {
    console.log("That was an input event!");
  });
  $("input").change(function () {
    console.log("That was an change event!");
  });

  $("form").submit(function () {
    console.log("That was a submit event!");
  });

  $("body").keydown(function () {
    console.log("That was a resize event!");
  });
});
