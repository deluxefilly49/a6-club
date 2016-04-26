$(function() {
  //All JS goes within these brackets

$("#bar-submit").click(function(){

 
  var ageString = $("#age").val();
  var albumString = $("#album").val();
  var fishString = $("#fish").val();
  //convert value to number
  var age = parseInt(ageString);
  var album = parseInt(albumString);
  

  if ( age >= 21 && album >= 5){
    $("#answer").text("get yo ass in here");

    $("#club-img").attr("src", "https://img.buzzfeed.com/buzzfeed-static/static/2014-05/enhanced/webdr07/21/17/anigif_enhanced-buzz-16975-1400707714-16.gif");

  }
  else {
    //if age is less than 21 say self-destruct
    //if album is less than 5
    $("#answer").text("you're kidding right?");
    $("#club-img").attr("src", "http://media.collegetimes.com/uploads/2014/07/thrown-out.gif")
  }



});



});
