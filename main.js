// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


   $("body").on("keypress", function handleKeypress(event) {
      if(event.which == 13) 
         console.log("Entered!");
    });

});