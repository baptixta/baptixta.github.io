$(document).ready( function() {
	$(document).tooltip({
		"selector": '*[data-toggle="tooltip"]',
		//"container": "body",
		"animation": true,
		"placement": "rigth"
	});
	// Logo
	var $logo 	= $("#logo");
	 if (location.href.indexOf("#") != -1) {
		if(location.href.substr(location.href.indexOf("#")) != "#about"){
			$logo.show();
		}
	}

	// Show logo
	$('#tab-container .tab a, .main-links.sidebar a').click(function() {
		if ($(this).closest('li').attr('id') != 'tab-about')
			$logo.slideDown('slow');
	});

	// Hide logo
	$('#tab-about').click(function() {
		$logo.slideUp('slow');
	});

	function animMeter(){
		$(".meter > span").each(function(index, value){
			$(this)
				.width(0)
				.animate({
					width: $(this).data("size") + "%"
				}, 1200);
		})
	}

	animMeter();

	$("#tab-container").easytabs({
		animate			: true,
		updateHash		: true,
		transitionIn	: "slideDown",
		transitionOut	: "slideUp",
		animationSpeed	: 600,
		tabActiveClass	: "active"
	}).bind("easytabs:midTransition", function(event, $clicked, $targetPanel){
		if ($targetPanel.selector == "#resume")
			animMeter();
	});

	$(".main-links.sidebar a").click(function(){
		$("#tab-container").easytabs("select", $(this).attr("href"));
	});
});