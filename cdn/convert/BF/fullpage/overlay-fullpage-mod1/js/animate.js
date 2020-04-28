//SOMENTE ANIMAÇÕES AQUI

$(document).ready(function(){

    //Logo BF entrada
    $('.logo').delay(1200).fadeIn(1000);

    //Cupom entrada

    $('.cupom').addClass('cupom-entrance');

    setTimeout(function(){

        $('.logo').addClass('fade-in');
    }, 8000);

    $('h1').delay(3600).fadeIn(1000);

    
    $('.btn--cta').delay(4000).fadeIn(1000);
    $('.borda-lateral').delay(2400).animate({width: '10%'}, 500);
    $('.btn--close').delay(2800).fadeIn(1000);
})