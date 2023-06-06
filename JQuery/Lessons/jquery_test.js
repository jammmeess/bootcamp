$(document).ready(function () {
  $("#hide_p").click(function () {
    $("#p_content").slideToggle(300);
  });

  $("#hide_c").click(function () {
    $("div.card").toggle();
  });

  $("#read_more_content").hide();
  $("#read_more").click(function () {
    $("#read_more_content").slidetoggle();
  });
});
