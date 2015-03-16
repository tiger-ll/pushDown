
$(window).load(function(){

// judgement process
var isExpand = false;
var autoPlay = false;
// Expand function


function expand(){
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
		};
};


function showExpand(){		
    if (isExpand) {
    	player.playVideo();
    	if (autoPlay){
    	player.mute();
    	setTimeout(function(){if (autoPlay) {expand(); autoPlay = false;};}, 8000);
    	}else{
    		player.unMute();

    	};

        $(".bannerWrapper").css("height","600px");
       	$(".logo img").css("width","30%");
       	$("#img_collaps").fadeOut(1000);
       	$("#img_expand").fadeIn(1000);
       	$(".expandContent").fadeIn(1000);
	};
}

function showCollaps(){
	if (!isExpand) {
		player.stopVideo();
		$(".bannerWrapper").css("height","90px");
		$(".logo img").css("width","20%");
		$("#img_collaps").fadeIn(500);
		$("#img_expand").fadeOut(800);
		$(".expandContent").fadeOut(300);
	};
}


$(".btn_ex").click(function(){
	expand();
	autoPlay=false;
	// clearTimeout();
});

//Detect first visit
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

var PD_cookie = getCookie("firstVisit");
console.log(PD_cookie);

if (!PD_cookie){
	setCookie("firstVisit", true, 10);
	console.log("cookie set");
	PD_cookie = getCookie("firstVisit");
	console.log(PD_cookie);
	autoPlay = true;
	expand();
};


// Carousel function
var direction = 1;
var currentSlide = 0;
var autoCarousel = true;
// auto switch Carousel function
var autoSwitch = setInterval(function(){
	if (autoCarousel) {switchSlide()};}, 2000);
	


function switchSlide(){
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
}
	$(".arrow").click(function(){
		// define default slide var
		autoCarousel = false;
		// var nextSlice = currentSlice + direction;
		console.log(direction, currentSlide);
		// locate current slide
		if($(this).hasClass("right")){
			direction = 1;
		}
		else{
			direction = -1;
		};

		switchSlide();
	
	});
});