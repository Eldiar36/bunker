

$('.popular-slider').slick({
    infinite: false,
    dots: false,

    slidesToShow: 1.15,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
        },
        {
            breakpoint: 800,
            settings: "slick"
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.15,
            }
        },
    ]
});
$('.cards-wrapper').slick({
    infinite: false,
    dots: false,
    slidesToShow: 1.15,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 3000,
            settings: "unslick"
        },
        {
            breakpoint: 1023,
            settings: "slick"
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1.15,
            }
        },
    ]
});
//card-main-slider

$('.card-main-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 3000,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 800,
            settings: "slick"
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

//card-main-slider

let hamburger = document.querySelector('.burger-menu_button');
let menu = document.querySelector('.burger-menu');
const toggleMenu = () => {
    menu.classList.toggle('burger-menu_active');
}
hamburger.addEventListener('click', e => {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target === menu || menu.contains(target);
    let its_hamburger = target === hamburger;
    let menu_is_active = menu.classList.contains('burger-menu_active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleMenu();
    }
})
window.onscroll = function showHeader() {
    let header = document.querySelector(".header");
    if (window.pageYOffset > 200) {
        header.classList.add("header-fixed")
    } else {
        header.classList.remove("header-fixed")
    }
};
(function($) {
    $(function() {
        $("ul.tabs__caption").on("click", "li:not(.active)", function() {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
})(jQuery);


jQuery(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
// Убавляем кол-во по клику
$('.quantity_inner .bt_minus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
});
// Прибавляем кол-во по клику
$('.quantity_inner .bt_plus').click(function () {
    let $input = $(this).parent().find('.quantity');
    let count = parseInt($input.val()) + 1;
    count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
    $input.val(parseInt(count));
});
// Убираем все лишнее и невозможное при изменении поля
$('.quantity_inner .quantity').bind("change keyup input click", function () {
    if (this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
    }
    if (this.value == "") {
        this.value = 1;
    }
    if (this.value > parseInt($(this).data('max-count'))) {
        this.value = parseInt($(this).data('max-count'));
    }
});
/*$('.callback-popup').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');

})*/
jQuery(document).ready(function ($) {
    $('.booking-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: true,

    });
});
$(document).ready(function() {
    $(".callback-popup").click(function() {
        $(".callback-container").fadeToggle('fast');
        $('body').css('overflow', 'hidden');
    });
    $(".callback-container").bind("click",function(e){
        if($(e.target).attr("class") != "callback-form")
            $(".callback-container").fadeOut('fast');
             $('body').css('overflow', 'visible');
    })
    $(".call-you").bind("click",function(e){
        if($(e.target).attr("class") != "callback-form")
            $(".callback-container").fadeOut('fast');
        $('body').css('overflow', 'visible');
    })
});

new universalParallax().init({
    speed: 8.0
});

jQuery(function($){
    $("#reviews-rating").viewportChecker({
        callbackFunction:function(){
            $(".progress-bar").hide();
            $(".progress-bar").show();
        }
    });
});
//табы

$('.nav-menu li').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
})
$('.mobile-menu li').on('click', function() {
    $(this).addClass('active')
        .siblings().removeClass('active');
})



let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let bgtwo = document.querySelector('.mouse-parallax-bg-two');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bgtwo.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});
let bgthree = document.querySelector('.mouse-parallax-bg-three');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bgthree.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});


