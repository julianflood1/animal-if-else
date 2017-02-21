$(document).ready(function() {
  $('form#choice').submit(function(event) {
    event.preventDefault();
    var animal = $("input:radio[name=animal]:checked").val();
    if (animal === "platypus") {
      $('#platypuses').show();
      $('#bears').hide();
      $('#norwals').hide();
    } else if (animal === "bear") {
      $('#platypuses').hide();
      $('#bears').show();
      $('#norwals').hide();
    } else {
      $('#platypuses').hide();
      $('#bears').hide();
      $('#norwals').show();
    }

  });
});
