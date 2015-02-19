var $input,
	$output,
	$button;

$(document).ready(function() {

	$input  = $("#input");
	$output = $("#output");
	$button = $("#button");

	$button.on("click", onButtonClick);

});

function onButtonClick(e) {
	// 1: get value of input: make sure input is working
	var value = $input.value();

	// 2: evlauate input: make sure what user puts in is an equation; weed out non equations

	try {
		value = eval(value);
	} catch(exception) {
		value = 0;
	}

	if (isNaN(value)) {
		value = 0;
	}

	// 3: update output with result
	$output.value(value);

}



