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
    $("#para")
      .css("color", "yellow")
      .css("font-size", "100px")
      .css("margin-left", "100px");
  });

  $("#change_size").click(function () {
    $("#bliss").width("100%");
    $("#bliss").height("100%");
  });

  $("#grow_size").click(function () {
    $("#bliss").animate(
      {
        width: "100%",
      },
      3000
    );
  });

  $("#move_right").click(function () {
    $("#bear").css("position", "relative");
    $("#bear").animate(
      {
        left: "80%",
        top: "50%",
      },
      3000
    );
  });

  //   $("#fade_color").click(function () {
  //     $("#para").animate({
  //       backgroundColor: "red",
  //       color: "blue",
  //     });
  //   });

  //   $("#shake_blank").click(function () {
  //     $("#pw").effect("shake");
  //   });

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

  $("#grow_bear").click(function () {
    $("#bear").animate({
      width: "+=20px",
      height: "+=20px",
    });
  });
});
