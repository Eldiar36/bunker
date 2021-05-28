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

