jQuery("#scoresbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<ul>" +
 "</ul>"
 );
});

jQuery("#creditsbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<div>" + "This game was created by PLiantCactus451 (PC) under the license of Future by the Guardians of Mortis Company" + "</div>"
 );
});

jQuery("#helpbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<ul>"
 + "<li>" + "Press the UP ARROW or the SPACEBAR to jump" + "</li>"
 + "<li>" + "Avoid the pipes" + "</li>"
 + "<li>" + "If you crash, try, try again" + "</li>"
 + "<li>" + "Attempt to get the highest score" + "</li>"
 + "</ul>"
  );
});





jQuery("#helpbtn").on("click", function() {
 jQuery("#content").empty();
 jQuery("#content").append(
 "<ul>"
 + "<li>" + "Press the UP ARROW or the SPACEBAR to jump" + "</li>"
 + "<li>" + "Avoid the pipes" + "</li>"
 + "<li>" + "If you crash, try, try again" + "</li>"
 + "<li>" + "Attempt to get the highest score" + "</li>"
 + "</ul>"
    );
});


function registerScore(){
  var playerName = prompt("What's your name?");
  var scoreEntry = "<li>" + playerName + ":" + score.toString() + "</li>";
  jQuery("scores").append("scoreEntry");

};
