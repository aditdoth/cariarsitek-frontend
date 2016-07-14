/*!
 * Agency v1.0.x (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var xVar = $($anchor.attr('href'));
        if(xVar.length) {
            $('html, body').stop().animate({
                scrollTop: xVar.offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }
    });
});