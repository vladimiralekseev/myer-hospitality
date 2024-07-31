let perPageCount = function () {
    let perPage = $(window).width() > 1383 ? 4 : 3;
    if ($(window).width() < 974) {
        perPage = 2;
    }
    if ($(window).width() < 750) {
        perPage = 1;
    }
    return perPage;
}

$('#menu-up-control').click(function () {
    if ($(this).hasClass('menu-up-control-is-close')) {
        $(this).removeClass('menu-up-control-is-close');
        $(this).addClass('menu-up-control-is-open');
        $('header').addClass('header-menu-is-open');
    } else {
        $(this).removeClass('menu-up-control-is-open');
        $(this).addClass('menu-up-control-is-close');
        $('header').removeClass('header-menu-is-open');
    }
});
