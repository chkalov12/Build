$(function() {

    $('.slider').slick({
        autoplay: true,
        fade: true,
        speed: 1000,
        // prevArrow: '<button class="slick-btn slick-prev"><img src="images/left.png" alt=""></button>',
        // nextArrow: '<button class="slick-btn slick-next"><img src="images/right.svg" alt=""></button>'
        arrows: false
    });

    $(".about__range-cost").ionRangeSlider({
        type: "double",
        min: 483000,
        max: 1256395,
        from: 483000,
        to: 1256395,
        prefix: "$"
    });

    let room = document.querySelectorAll('.about__rooms-btn');
    for (i = 0; i < room.length; i++) {
        room[i].onclick = show;
    }

    function show() {
        let room = document.querySelectorAll('.about__rooms-btn');
        for (i = 0; i < room.length; i++) {
            room[i].classList.remove('about__rooms-btn--active');
            this.classList.add('about__rooms-btn--active');
        }
    }

});