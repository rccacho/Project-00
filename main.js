// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


   $("body").on("keypress", function handleKeypress(event) {
      if(event.which == 13) 
        $( "#start1" ).animate({ "left": "+=50px" }, "slow" );
    });

   $("body").on("keypress", function handleKeypress(event) {
      if (event.which == 0 || event.which == 32) {
         console.log('Space pressed');
  	  }
    });



});