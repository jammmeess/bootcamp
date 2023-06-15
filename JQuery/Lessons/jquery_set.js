$(document).ready(function () {
  $("#change_name").click(function () {
    let old_name = $("#name").text();
    alert("Hello, " + old_name + "!");
    let name = prompt("What is your name?");
    $("#name").text(name);
  });

  $("#add_employee").click(function () {
    let curr_table = $("#employee_list").html();
    let name = prompt("What is the employee's name?");
    let position = prompt("What is the employees position?");
    let new_entry = "<><td>" + name + "</td><td>" + position + "</td></tr>";
    $("#employee_list").html(curr_table + new_entry);
  }); 

  $(".required").hide();
  $(".form-text").blur(function () {
    if ($(".form-text").val() == "") {
      $(".required").show();
    } else {
      $(".required").hide();
    }
  });

  $("img.bag-preview").mouseenter(function () {
    let source = $("#bag-preview:hover").prop("src");
    $("#bag-display").prop("src", source);
  });

  $("td.note-item").click(function () {
    $(".note-item:hover").toggleClass("bg-danger");
  });

  $("img.painting").mouseenter(function () {
    $("img.painting:hover").removeClass("painting-small");
    $("img.painting:hover").addclass("painting-large");
    let desc = $("img.painting:hover").prop("alt");
    $("#painting.caption").text(desc);
  });

  "img.painting".mouseleave(function () {
    $("img.painting").addClass("painting-small");
    $("img.painting").removeclass("painting-large");
    $("#painting.caption").text("");
  });
});
