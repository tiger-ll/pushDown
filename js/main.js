
$(window).load(function(){

// judgement process
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

// Youtube API

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'ZiorYdIwH3M?',
          playerVars: { 'autoplay': 1, 'controls': 0 },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
        player.isMuted();
      }


});