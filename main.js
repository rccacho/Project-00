// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function


   $("body").on("keypress", function handleKeypress(event) {
      if(event.which == 13) {
        $( "#start1" ).animate({ "left": "+=50px" }, "fast" );	  
        var position1 = $("#start1").offset();		
		if (position1.left >= 1000) {
   		  alert("Win!");
	  }
   	}
    });

   $("body").on("keypress", function handleKeypress(event) {
      if (event.which == 0 || event.which == 32) {
        $( "#start2" ).animate({ "left": "+=50px" }, "fast" );
        var position2 = $("#start2").offset();	
		if (position2.left >= 1000) {
   		  alert("Win!");
  	  }
  	}
    });






});