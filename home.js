
console.log($(window).scrollTop())
// find the top of each section
var section1 = $('#section1').offset().top;
var section2 = $('#section2').offset().top;
var section3 = $('#section3').offset().top;
var section4 = $('#a').offset().top;
// number of pixels before the section to change image
var scrollOffset = 300;


// run this function when the window scrolls
$(window).scroll(function () {


    // get the window height on scroll
    var scroll = $(window).scrollTop() + scrollOffset;
    // if scroll hits the top of section 1  
    if (scroll < section1 && scroll < 1000) {
        $('.grid-image img').attr('src', '');
    }

    // if scroll hits the top of section 1  
    if (scroll > 1300) {
        $('.grid-image img').attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/0st9yhngses-benjamin-child.jpg');
    }

    // if scroll hits the top of section 2
    if (scroll > section2) {
        $('.grid-image img').attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/2fgvaqx-fxs-oskar-krawczyk.jpg');
    }

    // if scroll hits the top of section 3
    if (scroll > section3) {
        $('.grid-image img').attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/495197/Great_Wave_off_Kanagawa2_cr.jpg');
    }
    // if (scroll > (section4 - 1300)) {
    //   $('.grid-image img').attr('src', '');
    // }
});


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});