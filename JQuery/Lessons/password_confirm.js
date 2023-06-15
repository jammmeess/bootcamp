$(document).ready(function () {
  $("#c_pw, #pw").change(function () {
    //you must include at least 1 number
    //you must include at least 1 special character
    let pw = $("#pw").val();
    let num = "0123456789";
    let spe = "!@#$%^&*()_+-={}|[]:;'<,>.?/\"";
    let num_count = 0;
    let spe_count = 0;
    for (let i = 0; i < pw.length; i++) {
      if (num.includes(pw.charAt(i))) {
        num_count++;
      } else if (spe.includes(pw.charAt(i))) {
        spe_count++;
      }
    }
    let c_pw = $("#c_pw").val();
    if (num_count > 0) {
      if (spe_count > 0) {
        if (pw == c_pw) {
          $("#pw_message").text("Password match!");
          $("#pw_message").addClass("pw_match");
          $("#pw_message").removeClass("pw_not_match");
        } else {
          $("#pw_message").text("Password does not match!");
          pw_show_error();
        }
      } else {
        $("#pw_message").text("Must have at least 1 special character!");
        pw_show_error();
      }
    } else {
      $("#pw_message").text("Must have at least 1 number!");
      pw_show_error();
    }

    function pw_show_error() {
      $("#pw_message").addClass("pw_not_match");
      $("#pw_message").removeClass("pw_match");
    }
  });
});
