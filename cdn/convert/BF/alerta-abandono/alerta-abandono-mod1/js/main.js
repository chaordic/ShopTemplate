
    //Valores Default
    var $ID = IDcampaign,
        _SCOPE_ = window.top.document,
        $FRAME = $("#f-content-" + $ID, window.top.document),
        cartLength = parseInt(window.top.sessionStorage.getItem('CartItens'));

        $('.carousel').css({opacity: "0"});



function _showOverlay(){
    $("<div class='load'><img src='https://shopbackbr.github.io/ShopTemplate/cdn/convert/BF/alerta-abandono/alerta-abandono-mod1/images/loader.gif'></div>").insertBefore('.carousel');

    getProducts(imageDiv, titleDiv, priceDiv, cartLink);

    $FRAME.css({
        display: "block"
    });

    setTimeout(function(){

        $(".load").fadeOut();
        $('.carousel').css({opacity: "1"});
    }, 2000);

    $(".is-hide").removeClass("is-hide");
}


$(function(){
        if($FRAME.length > 0){

            _showOverlay();
        }

});

$('.close').click(function(){

    top.spl.close();
});