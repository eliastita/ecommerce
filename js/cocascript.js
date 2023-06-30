$(window).scroll(function (evt) {
    if ($(window).scrollTop() > 0) $(".navbar").removeClass("navbar-top");
    else $(".navbar").addClass("navbar-top");
});

var s = skrollr.init();

$(".owl-carousel").owlCarousel({
    items: 2,
    lazyLoad: true,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    dots: false
});
