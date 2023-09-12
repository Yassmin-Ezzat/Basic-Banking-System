$(document).ready(function() {
  $('#myForm').submit(function(event) {
    event.preventDefault();
    $.ajax({
      type: 'POST',
      url: '/transfer/validation',
      data: $(this).serialize(),
      success: function(response) {
        $('#responseDiv').text(response.message);
        $('#responseDiv').removeClass().addClass(response.class);

      }
    });
  });
});