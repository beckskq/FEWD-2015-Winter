var $display;

$(document).ready(function() {

	$display = $(".display");

	$(".digit, .operator").on("click, onButtonPress");

});

// 1. capture when/react to button press
	function onButtonPress(e) {
		var $button = $(e.currentTarget),
			action  = $button.data("action"),  //look for data-action = "..." and applies the action in "..."
			value   = $display.value();  //might be .val but that doesn't highlight blue

		if (value === 0) {
			value = action;
		} else {
			value += action;
		}

		updateDisplay(value);   //updateDisplay didn't highlight

}


// 2. Evaluate the user input


// 3. Update the display (migth update a lot depending on what we want to display)

	function updateDisplay(value) {
		$display.value(value);
	}

// 4. Clear current input


// Watch for where actions interconnect and reuse 