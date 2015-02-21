$(document).ready(function() {

	$(".digit, .operator").click(function(e) {
		var button  = $(this),  // the thing that's clicked on ;this = whatever is being clicked on. anyting that is clicked on is now being called "button"
			action  = button.data("action"),  //value assigned by data-action in markup; brings up whatever data is associated with that button
			value   = $(".display").val();  //what shows up in the display; bringing back whatever is currently in display jquery with () empty means give me current valus vs ("something")means ignore the current value and give me something instead 


		if (value == 0) {
			$(".display").val(action);
		} else {                                      //read else as otherwise
			$(".display").val( +value + +action );
		}

		// updateDisplay(value);   

	});

});

// 1. capture when/react to button press

// 2. Evaluate the user input

// 3. Update the display (migth update a lot depending on what we want to display)

	function updateDisplay(value) {
		
	}

// 4. Clear current input

//hook into = button that evals eq and updates result. hook into clear event. be defensive so that there's always a number coming out.



// Watch for where actions interconnect and reuse 