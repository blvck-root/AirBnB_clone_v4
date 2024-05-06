$(document).ready(function () {
  console.log("DOM loaded"); 
  const amenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    const list = Object.values(amenities);
    if (list.length > 0) {
      $('div.amenities h4').text(Object.values(amenities).join(', '));
    } else {
      $('div.amenities h4').html('&nbsp');
    }
  });

  console.log("Checking status...");
  $.get('http://127.0.0.1:5001/api/v1/status/', function (data, textStatus) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
      console.log(data.status);
    } else {
      $('div#api_status').removeClass('available');
      console.log(data.status);
    }
  });
});
