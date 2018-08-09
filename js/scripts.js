$(document).ready(function(){
  var age = parseInt(prompt("Are you at least 18?"));


  if (age >= 18) {
    $("#voting").show();
  } else {
    $("#under18").show();
  }
});
