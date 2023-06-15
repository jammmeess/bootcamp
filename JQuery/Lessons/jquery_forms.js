$(document).ready(function () {
  const d = new Date();
  console.log(d.toISOString());
  $("#datemax").prop("max", d.toISOString());

  $("#country_code").change(function () {
    let cc = $("#country_code").val().toUpperCase();
    $("#country_code").val(cc);
  });

  $("form").submit(function(){
    
  })
});
