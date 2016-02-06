$(function() {
  $("#content a[href$='.pdf']")
    .attr("target","_blank")
    .click(function() {
      ga('send', 'pageview', $(this).attr('href'));
    });

  $('[data-toggle="popover"]').popover();
  $('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
      }
    });
  });
	function loadYouTube() {
		var iframe = document.createElement("iframe");
		iframe.setAttribute("src", "//www.youtube.com/embed/" + this.dataset.id + "?autoplay=1&border=0");
		iframe.setAttribute("allowfullscreen", "1");
		$(this).children("img").first().replaceWith(iframe);
		$(this).children(".play-button").remove();
	}
	$("div.youtube-container").click(loadYouTube);
	
	function displayOnClick() {
		$(this).addClass("visible");
		$(this).children(".showonclick-button").remove();
	}
	$(".showonclick").click(displayOnClick);

	$(".lazy-iframe").each(function () {
		$(this).replaceWith('<iframe src="' + $(this).data("src") + '"></iframe>');
	});
});
