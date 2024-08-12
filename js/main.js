let perPageCount = function (count = 4) {
    let perPage = $(window).width() > 1383 ? count : count - 1;
    if ($(window).width() < 974 && count - 3 > 0) {
        perPage = count - 2;
    }
    if ($(window).width() < 750 && count - 3 > 0) {
        perPage = count - 3;
    }
    if ($(window).width() < 576 && count - 4 > 0) {
        perPage = count - 4;
    }
    if ($(window).width() < 450 && count - 5 > 0) {
        perPage = count - 5;
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
