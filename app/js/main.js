$(function() {

    $('.slider').slick({
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

    // $(".about__range-yard").ionRangeSlider({
    //     type: "double",
    //     skin: "round",
    //     min: 483000,
    //     max: 1256395,
    //     from: 483000,
    //     to: 1256395,
    //     prefix: "",
    //     grid: false,
    //     force_edges: false,
    //     hide_min_max: true,
    //     hide_from_to: true,
    //     block: false

    // });

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

    // $(".about__range-floor").ionRangeSlider({
    //     type: "double",
    //     skin: "round",
    //     min: 483000,
    //     max: 1256395,
    //     from: 483000,
    //     to: 1256395,
    //     prefix: "",
    //     grid: false,
    //     force_edges: false,
    //     hide_min_max: true,
    //     hide_from_to: true,
    //     block: false,
    //     step: 1

    // });

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