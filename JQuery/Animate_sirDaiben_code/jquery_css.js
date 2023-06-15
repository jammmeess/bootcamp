$(document).ready(function () {
  $("#change_color").click(function () {
    $("#para").css("color", "yellow");
  });

  $("#large_text").click(function () {
    let f_size = Number($("#para").css("font-size").replace("px", ""));
    f_size++;
    $("#para").css("font-size", f_size);
  });

  $("#font_family_change").click(function () {
    $("#para").css("font-family", "Comic Sans MS");
  });

  $("#change_color_custom").click(function () {
    // $("#para").css({
    //   color: "red",
    //   "font-size": "300%",
    //   "margin-left": "100px",
    // });
    $("#para")
      .css("color", "yellow")
      .css("font-size", "100px")
      .css("margin-left", "100px");
  });

  $("#change_size").click(function () {
    // $("#bliss").width(400);
    $("#bliss").width("100%");
    // $("#bliss").height("100%");
  });

  $("#bliss").click(function () {
    $("#bliss").animate(
      {
        width: "100%",
      },
      500
    );
  });

  $("#move_right").click(function () {
    $("#bear").css("position", "absolute");
    $("#bear").animate(
      {
        left: "80%",
        top: "50%",
      },
      3000
    );
  });

  $("#fruit_move").click(function () {
    $("#apple").css("position", "relative");
    $("#pineapple").css("position", "absolute");
    $("#apple").animate({
      left: "80%",
    });
    $("#pineapple").animate({
      bottom: "80%",
    });
  });

  $("#shake_blank").click(function () {
    $("#bear").css("position", "relative");
    $("#bear").effect("shake", { times: 4 }, 1000);
  });

  $("#grow_bear").click(function () {
    if ($("#bear").width() < 400) {
      $("#bear").animate({
        width: "+=20px",
        height: "+=20px",
      });
    }
  });

  $("#fade_bear").click(function () {
    $("#bear").animate({
      opacity: "100%",
    });
  });
});
