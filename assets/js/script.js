jQuery('.excursion-more').on('click', function(e){

    let
        thiss = jQuery(this),
        content = jQuery(this).closest('.collections').find('.collection-mr');

    if(!thiss.hasClass('trigger')){
        thiss.addClass('trigger');
        thiss.html('Все Экскурсии');
        thiss.attr("href", "#more");
        content.css('opacity','0');
        content.css('margin-top','0');
        content.css('height','1px');
        content.slideUp();
    } else {
        thiss.removeClass('trigger');
        thiss.addClass('scroll-top');
        thiss.html('Скрыть');
        thiss.attr("href", "#nomore");
        content.css('opacity','1');
        content.css('height','auto');
        content.slideDown();
        jQuery('.scroll-top').on('click', function(e){
            $('html, body').animate({
                scrollTop: $("#excursion").offset().top  // класс объекта к которому приезжаем
            }, 10); // С
        });
    }
});
/*$(document).ready(function() {
    $('.content_toggle').click(function () {
        $('.content_block').toggleClass('hide');
        if ($('.content_block').hasClass('hide')) {
            $('.content_toggle').html('Показать еще <img style="width: 17px;height: 9px" src="assets/images/arrow_down.png" alt=""> ');
        } else {
            $('.content_toggle').html('Скрыть');
            $('.content_toggle').toggleClass('scroll-top')
            $(".scroll-top").click(function () {
                elementClick = $(this).attr("href");
                destination = $(elementClick).offset().top;
                $("body,html").scrollTop( destination);
            });
        }
        return false;
    });
});*/
var textArea = document.querySelectorAll('[data-js=content]'),
    maxText = 100;

// For each one...
[].forEach.call( textArea, function( el ) {

    var textAreaLength = el.innerHTML.length,
        teaserText = el.innerHTML.substr(0, 100),
        fullText = el.innerHTML,
        showTeaser = false;

    // Check to see if this text length is more
    // than the max
    if (textAreaLength >= maxText) {
        // Set flag
        showTeaser = true;

        // Set teaser text
        el.innerHTML = teaserText;
        el.innerHTML += el.innerHTML + '...';

        // Create button
        var button = document.createElement('button');

        button.innerHTML = 'Подробнее';
        button.classList.add('show-more');
        el.appendChild(button);

        // Button click event
        button.onclick = function () {
            if (showTeaser === true) {
                // Update flag
                showTeaser = false;

                // Update button text
                this.innerHTML = 'Скрыть';

                // Show full text
                el.innerHTML = fullText;

                // Re-append the button
                el.appendChild(this);
            } else {
                // Update flag
                showTeaser = true;

                // Update button text
                this.innerHTML = 'Подробнее';

                // Show teaser text
                el.innerHTML = teaserText;
                el.innerHTML += el.innerHTML + '...';

                // Re-append the button
                el.appendChild(this);
            }
            return false;
        };
    } else {
        // Show full text
        el.innerHTML = fullText;
    }

});

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
        $(".callback-form").fadeToggle('fast');
        $('body').css('overflow', 'hidden');
    });
    $(".callback-container").bind("click",function(e){
        if($(e.target).attr("class") != "callback-form")
            $(".callback-container").fadeOut('fast');
            $(".callback-form").fadeOut('fast');
             $('body').css('overflow', 'visible');
    })
    $(".call-you").bind("click",function(e){
        if($(e.target).attr("class") != "callback-form")
            $(".callback-container").fadeOut('fast');
            $(".callback-form").fadeOut('fast');
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


Query('.collections .collection:gt(2)').wrapAll('<div class="container"><div class="row collection-mr"></div></div>');

let numzi = jQuery(".collections").find(".collection").length;
if (numzi < 4) {
    jQuery('.collection-more a').hide();
    jQuery('.collection-more').addClass('mb-5');
}


