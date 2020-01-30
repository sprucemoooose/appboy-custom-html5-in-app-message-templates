// Initiates rating by filling in the amount of stars you would like to begin with and binding a mouseover action to each star.
$.fn.start = function(rating) {
  var length = $(this).children().length;
  var children = $(this).children();
  // init rating index
  var current_rating_index = rating - 1;

  // fill in initial stars
  if (current_rating_index > 0) {
    for (var j = 0; j <= current_rating_index; j++) {
      $(children[j]).removeClass('empty-star').addClass('star');
    }
  }

  // bind mouseover to each star
  for (var i = 0; i < length; i++) {
    $(children[i]).bind('mouseover', function() {
      var star_index = $(this).index(children[i]);

      for (var j = 0; j <= star_index; j++) {
        $(children[j]).removeClass('empty-star star').addClass('star');
      }
      for (var j = star_index + 1; j < length; j++) {
        $(children[j]).removeClass('empty-star star').addClass('empty-star');
      }
    });
  }
}

// Gets the current rating displayed in the In-App Message.
$.fn.getCurrentRating = function(){
  var length = $(this).children().length;
  var children = $(this).children();
  var result = 0;

  for (var i = 0; i < length; i++) {
    if($(children[i]).hasClass('star')){
      result +=1;
    }else{
      break;
    }
  }
  return result;
}

// Set the date we're counting down to
var countDownDate = new Date("Feb 2, 2020 18:35:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$(function() {
  // Modify the parameter to change the number of stars that are initially shown in the modal
  $('.stars').start(5);

  // Modify this event listener to record the user's star rating!
  $('.button-center').on('click',function(){
    console.log($('.stars').getCurrentRating());

    // Close the modal
    window.open("appboy://close");
  });
});
