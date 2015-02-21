


(function($) {


	function onClick(e) {
		var $target = $(e.target);
		var $sibs   = $target.siblings ();

		$sibs.removeClass("highlight");

		$target.addClass("highlight");
		}

		$.fn.highlight = function () {
			return $(this).on("click", onClick);
		};

}) (jQuery);











