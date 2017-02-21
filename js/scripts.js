$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age < 18) {
    $('#under-age').show();
  }  else if (age ===18) {
    alert("Congrats! You are now of age to Vote in the US!")
    $('#of-age').show();
  } else {
    $('#of-age').show();
  }
});
