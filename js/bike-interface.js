$(document).ready(function(){
  $('#stolenBikes').submit(function(event){
    event.preventDefault();
    var zipCode = $('#zip').val();
    var color = $('#color').val();
    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=10&colors=' + color + '&proximity=' + zipCode + '&proximity_square=10').then(function(response){
      console.log(response);
      for (var i = 0; i < response.bikes.length; i++) {
      var title = response.bikes[i].title;
      var serial = response.bikes[i].serial;
      $('#foundBikes').append("<li>" + "The bike: " + title + " with  the serial number: " + serial + " has been found." + "</li>");
    };
    });
  });
});
