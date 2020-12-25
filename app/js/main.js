$(function() {

    $('.header__slider-inner').slick({
        autoplay: true,
        fade: true,
        speed: 1000,
        // prevArrow: '<button class="slick-btn slick-prev"><img src="images/left.png" alt=""></button>',
        // nextArrow: '<button class="slick-btn slick-next"><img src="images/right.svg" alt=""></button>'
        arrows: false
    });

    let $range = $(".about__range-cost");
    let $result = $(".about__result-cost");

    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
    }

    $range.ionRangeSlider({
        type: "double",
        skin: "round",
        min: 483000,
        max: 1256395,
        from: 483000,
        to: 1256395,
        force_edges: false,
        hide_min_max: true,
        hide_from_to: true,
        prettify_separator: " ",
        onStart: function(data) {
            $result.text(" $ " + prettify(data.from) + " — " + " " + " $ " + data.to_pretty);
        },
        onChange: function(data) {
            $result.text(" $ " + prettify(data.from) + " — " + " " + " $ " + data.to_pretty);
        }
    });

    let $yard = $(".about__range-yard");
    let $resultyard = $(".about__result-yard");

    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
    }

    $yard.ionRangeSlider({
        type: "double",
        skin: "round",
        min: 70,
        max: 236,
        from: 70,
        to: 236,
        force_edges: false,
        hide_min_max: true,
        hide_from_to: true,
        prettify_separator: " ",
        onStart: function(data) {
            $resultyard.text(prettify(data.from) + " — " + data.to_pretty);
        },
        onChange: function(data) {
            $resultyard.text(prettify(data.from) + " — " + data.to_pretty);
        }
    });

    let $floor = $(".about__range-floor");
    let $resultfloor = $(".about__result-floor");

    function prettify(num) {
        var n = num.toString();
        return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + " ");
    }

    $floor.ionRangeSlider({
        type: "double",
        skin: "round",
        min: 1,
        max: 4,
        from: 1,
        to: 4,
        force_edges: false,
        hide_min_max: true,
        hide_from_to: true,
        step: 1,
        prettify_separator: " ",
        onStart: function(data) {
            $resultfloor.text(prettify(data.from) + " — " + data.to_pretty);
        },
        onChange: function(data) {
            $resultfloor.text(prettify(data.from) + " — " + data.to_pretty);
        }
    });

    let room = document.querySelectorAll('.about__rooms-btn');
    for (i = 0; i < room.length; i++) {
        room[i].onclick = rooms;
    }

    function rooms() {
        let room = document.querySelectorAll('.about__rooms-btn');
        for (i = 0; i < room.length; i++) {
            room[i].classList.remove('about__rooms-btn--active');
            this.classList.add('about__rooms-btn--active');
        }
    }


    $('.popular__inner').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        centerMode: true,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/slide-right.svg" alt=""></button>'
    });

    $('.enjoy__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        speed: 1000,
        dots: true,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/slide-right.svg" alt=""></button>'
    });

    $('.security__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/slide-right.svg" alt=""></button>'
    });

    $('.promo__slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        speed: 1500,
        asNavFor: '.promo__slider-main',
        fade: true

    });
    $('.promo__slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.promo__slider-nav',
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/slide-right.svg" alt=""></button>'
    });

    $('input, select').styler();


    $('.build__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        centerMode: true,
        centerPadding: '100px',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/slide-left.svg" alt=""></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/slide-right.svg" alt=""></button>'
    });

    $(".build__month-line").ionRangeSlider({
        skin: "round",
        grid: true,
        from: new Date().getMonth(),
        grid_snap: true,
        values: [
            "Январь", "Февряль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
        ]
    });

    let year = document.querySelectorAll('.build__year-btn');
    for (i = 0; i < year.length; i++) {
        year[i].onclick = show;
    }

    function show() {
        let year = document.querySelectorAll('.build__year-btn');
        for (i = 0; i < year.length; i++) {
            year[i].classList.remove('build__year-btn--active');
            this.classList.add('build__year-btn--active');
        }
    }

    $('.connect__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/connect-arrow.svg" alt=""></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/connect-arrow.svg" alt=""></button>',
    });

    $(".header__burger").on('click', function() {
        $('.menu-green').addClass('menu-green--active');
    });

    $(".close-btn").on('click', function() {
        $('.menu-green').removeClass('menu-green--active');
    });


});