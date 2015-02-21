(function($) {

	$.fn.mytabs = function() {
		return $(this).each(init);
	};

	function init() {
		var $tabs = $(this);

		$tabs.on("click", ".tab-nav .tab", onClick)
			.addClass("mytabs"); //no . on mytabs. that will look for the class .mytabs not mytabs//
	}

	function onClick(e) {
		var $target  = $(e.target),
			$parent  = $target.parents(".mytabs"),
			$sibs    = $target.siblings(), //want all siblings//
			$content = $parent.find(".tab-content .tab"), //, used to break up line of variables//
			id       = $target.attr("href"); //this is loooking for the jump links...href in html//

		$sibs.removeClass("active");
		$content.removeClass("active");

		$target.addClass("active");
		$content.filter(id).addClass("active"); //will find ones that have id tht have fragment identifier tha we're looking for//
	}	


})(jQuery);