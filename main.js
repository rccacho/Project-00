// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


  	// To move Cookie Monster

   $("body").on("keypress", function handleKeypress(event) {
      if(event.which == 13) {
        $( "#player1" ).animate({ "left": "+=50px" }, "fast" );	  
        var position1 = $("#player1").offset();		
		if (position1.left >= 875) {
   		  alert("Cookie Monster Wins!");
	  }
   	}
    });

   // To move Elmo

   $("body").on("keypress", function handleKeypress(event) {
      if (event.which == 0 || event.which == 32) {
        $( "#player2" ).animate({ "left": "+=50px" }, "fast" );
        var position2 = $("#player2").offset();	
		if (position2.left >= 875) {
   		  alert("Elmo Wins!");
  	  }
  	}
    });

   // Reset Button 

   $("#reset").on("click", function handleClick(event) {
   	  location.reload();
   })

   // Instructions for Gameplay

   $("#instructions").on("click", function handleClick(event) {
   	  alert("Move Cookie Monster by pressing on 'Enter'. Move Elmo by pressing on 'Space'.");
   })

});