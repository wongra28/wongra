// JavaScript Document


// NAV CHANGE from: https://www.youtube.com/watch?v=PNFdnhPrIWc and https://stackoverflow.com/questions/46800555/replace-an-img-src-on-scroll 
$(window).scroll(function(){
    $('nav').toggleClass('scrolled',$(this).scrollTop()>600);
    });
$(window).scroll(function(){
    if($(this).scrollTop()>600){
    $('.white').addClass('forced');
    } else {
    $('.white').removeClass('forced');
}
});
$(window).scroll(function(){
    if($(this).scrollTop()>600){
    $('.active').removeClass('text-white');
    } else {
    $('.active').addClass('text-white');
}
});

$(window).scroll(function(){
    if($(this).scrollTop()>600){
    $('.nav-link').addClass('.white');
    } else {
    $('.nav-link').removeClass('.white');
}
});


var initialSrc = "images/logo.svg";
var scrollSrc = "images/logo2.svg";

$(window).scroll(function() {
   var value = $(this).scrollTop();
   if (value > 600)
      $(".site-logo").attr("src", scrollSrc);
   else
      $(".site-logo").attr("src", initialSrc);
});




$(document).on("scroll", function() {
var pageTop = $(document).scrollTop();
var pageBottom = pageTop + $(window).height();
var tags = $(".tag");

for (var i = 0; i < tags.length; i++) {
var tag = tags[i];

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible");
} else {
$(tag).removeClass("visible");
}
}
});



