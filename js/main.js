
$(window).load(function(){

// judgement process
var autoRun = false;
var isExpand = false;

var expand = function(){
		isExpand = !isExpand;
		showExpand();
		showCollaps();
		
		if(isExpand){
			$(".btn_ex").text("Collaps")
			.css("top",".5em").css("color","#272822")
			// $(".btn_ex").css();
		}
		else{
			$(".btn_ex").text("Expand")
			.css("top","1em").css("color","#fff");
		}
		;
};

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

$(".btn_ex").on('click', expand);

var PD_cookie = getCookie("firstVisit");
console.log(PD_cookie);

if (!PD_cookie){
	setCookie("firstVisit", true, 10);
	console.log("cookie set");
	PD_cookie = getCookie("firstVisit");
	console.log(PD_cookie);
	autoRun = true;
	$(".btn_ex")[0].click();
};

// Expand function

	function showExpand(){		
    	if (isExpand) {
    	    $(".bannerWrapper").css("height","600px");
        	$(".logo img").css("width","30%");
        	$("#img_collaps").fadeOut(1000);
        	$("#img_expand").fadeIn(1000);
        	$(".expandContent").fadeIn(1000);
		};
	};

	function showCollaps(){
		if (!isExpand) {
			$(".bannerWrapper").css("height","90px");
			$(".logo img").css("width","20%");
			$("#img_collaps").fadeIn(500);
			$("#img_expand").fadeOut(800);
			$(".expandContent").fadeOut(300);
		};
	}
// Carousel function
	$(".arrow").click(function(){
		// define default slide var
		var direction = 0;
		var currentSlide = 1;
		// var nextSlice = currentSlice + direction;
		console.log(direction, currentSlide);
		// locate current slide
		if($(this).hasClass("right")){
			direction = 1;
		}
		else{
			direction = -1;
		};

		var locateSlide = $(".imageContainer").find(".PD_active").fadeOut("fast");
		console.log(locateSlide);
		currentSlide = locateSlide.data("slide");
		// switch slide
		
				locateSlide.removeClass("PD_active");
				var nextSlide = currentSlide + direction;
				if (nextSlide < 0) {
					nextSlide = 2;
				};
				console.log(currentSlide, direction);
				$(".imageContainer").find('[data-slide="' + nextSlide % 3 + '"]').addClass("PD_active").delay(200).fadeIn(500);
	

		
	});


});