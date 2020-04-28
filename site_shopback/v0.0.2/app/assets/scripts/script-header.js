function openNavDesk() {
    var div = document.querySelector('.productsMenu');
    var widMenu = $('.productsMenu').next().offset().left + 18;
    $('.sidenav-desk').css('width', widMenu + 'px');
    $('.productsMenu').css('z-index', '999');
    $('.productsMenu i').css('transition', 'all .3s linear');
    $('.menublackout').css('position', 'fixed');
    $('.menublackout').addClass('show');
}

function closeNavDesk() {
    var div = document.querySelector('.productsMenu');
    document.querySelector(".sidenav-desk").style.width = "0";
    $('.productsMenu i').css('transition', 'all .3s linear');
    $('.menublackout').css('position', 'relative');
    $('.menublackout').removeClass('show');
}

function openNavFlut() {
    $('.flutuante-products').removeClass('opac-none');
    $('.flutuante-products').css('transition', 'all .3s linear');
    $('.productsMenuFlut i').css('transition', 'all .3s linear');
}

function closeNavFlut() {
    $('.flutuante-products').addClass('opac-none');
    $('.flutuante-products').css('transition', 'all .3s linear');
    $('.productsMenuFlut i').css('transition', 'all .3s linear');
}

function openNavMob() {
    var div = document.querySelector('.menuMobile');
    $('.sidenav-mob').css('width', '70%');
    // $('.menuMobile').css('z-index', '999');
    // $('.menuMobile').css('transition', 'all .3s linear');
    $('.menublackout').css('position', 'fixed');
    $('.menublackout').addClass('show');
}

function closeNavMob() {
    var div = document.querySelector('.menuMobile');
    document.querySelector(".sidenav-mob").style.width = "0";
    // $('.menuMobile').css('transition', 'all .3s linear');
    // $('.menublackout').css('position', 'relative');
    $('.menublackout').removeClass('show');
}

$(window).mouseup(function (e) {
    var linkTarget = $('.productsMenu');
    closeNavDesk();
    closeNavMob();
    $('.productsMenu').removeClass('off');
    $('.productsMenu').addClass('on');
    // $('.menuMobile').removeClass('off');
    // $('.menuMobile').addClass('on');
    $('.sidenav-mob-prod').removeClass('off');
    $('.sidenav-mob-prod').addClass('on');
    $('.sidenav-mob-prod .itens').css('display', 'none');
});


if ($('.productsMenu.on')) {
    $('.productsMenu.on').click(function (e) {
        openNavDesk();
        $('.productsMenu').removeClass('on');
        $('.productsMenu').addClass('off');
        e.stopPropagation();
    });
}
if ($('.productsMenu.off')) {
    $('.productsMenu.off').click(function (e) {
        closeNavDesk();
        $('.productsMenu').removeClass('off');
        $('.productsMenu').addClass('on');
        e.stopPropagation();
    });
}

if ($('.menuMobile.on')) {
    $('.menuMobile.on').click(function (e) {
        openNavMob();
        // $('.menuMobile').removeClass('on');
        // $('.menuMobile').addClass('off');
        e.stopPropagation();
    });
}
if ($('.menuMobile.off')) {
    $('.menuMobile.off').click(function (e) {
        closeNavMob();
        // $('.menuMobile').removeClass('off');
        // $('.menuMobile').addClass('on');
        e.stopPropagation();
    });
}

if ($('.sidenav-mob-prod.on')) {
    $('.sidenav-mob-prod.on').mouseup(function (e) {
        $('.sidenav-mob-prod .itens').css('display', 'block');
        $('.sidenav-mob-prod').removeClass('on');
        $('.sidenav-mob-prod').addClass('off');
        e.stopPropagation();
    });
}
if ($('.sidenav-mob-prod.off')) {
    $('.sidenav-mob-prod.off').mouseup(function (e) {
        $('.sidenav-mob-prod .itens').css('display', 'none');
        $('.sidenav-mob-prod').removeClass('off');
        $('.sidenav-mob-prod').addClass('on');
        e.stopPropagation();
    });
}



//MENU FLUTUANTE

$(document).scroll(function (e) {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > $('.menu').height()) {
        $('.menu-flutuante').removeClass('opac-none');
    } else {
        $('.menu-flutuante').addClass('opac-none');
    }
});

$('.productsMenuFlut').mouseover(function () {
    openNavFlut();
});

$('.menu-flutuante').mouseleave(function (e) {
    closeNavFlut();
    e.stopPropagation();
});