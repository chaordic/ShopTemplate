var $ID = 8888,
    $FRAME = $("#f-content-"+$ID, window.top.document);

String.prototype.sbNumberFormat = function(){
    var n 		 = this,
        hasPoint = (/(\.)+/.test(this)) ? true : false;

    if(hasPoint){
        var int = n.split(".")[0],
            c   = n.split(".")[1];
        n   = int;
    } else {
        c = "00";
    }

    n = (typeof n == "string") ? n.replace(",","") : n.toString();
    L = n.length % 3;

    var newValue = false,
        loop 	 = "";

    if(n.toString().length > 3){
        if(L > 0){
            newValue = n.substring('0', L);
        } else {
            newValue = "";
        }

        loop = n.substring(L, n.length).length / 3;

        for (var i = 0; i < loop; i++) {
            if(L > 0 || i > 0){
                newValue += ".";
            }
            newValue += n.substring((L + (i * 3)), (L + (i * 3) + 3));
        }
    } else {
        newValue = n;
    }

    if(c.length == 2 && parseInt(c) > 0) {
        newValue += ","+c;
    } else if (c.length > 2 && parseInt(c) > 0) {
        newValue += ","+c.substring('0','2');
    } else if (c.length > 0 && parseInt(c) > 0) {
        newValue += ","+c+"0";
    } else {
        newValue += ",00";
    }
    return newValue;
};


function _showOverlay() {
    top.shopback.getRecommendations({}, function(_products, _erro){
        if(!_erro){
            var __products = _products.data;

            var _productsJSON = [],
                _text = $(".js-carosel-text").html(),
                _thumb= $(".js-carosel-large").html();

            __products.forEach(function (_v, _ind) {
                _productsJSON.push({
                    number: _ind,
                    name: _v.title.trim(),
                    'normal_price': (typeof _v['normal_price'] == 'undefined') ? "" : _v['normal_price'].toString().sbNumberFormat(),
                    price: _v['price'].toString().sbNumberFormat(),
                    installments: (typeof _v['installments'] == 'undefined')? "" : (_v['installments'] == 1)? "": _v['installments'],
                    'installments_price': (typeof _v['installments_price'] == 'undefined') ? "" : _v['installments_price'].toString().sbNumberFormat(),
                    link: _v.link,
                    image: _v['images'][0]
                });
            });

            $(".js-carosel-text").html(Mustache.to_html(_text, {'products': _productsJSON}));
            $(".js-carosel-large").html(Mustache.to_html(_thumb, {'products': _productsJSON}));
            $(".js-carosel-large").slick({

                infinite: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                asNavFor: ".js-carosel-text",
                prevArrow: $(".c-btn--left"),
                nextArrow: $(".c-btn--right"),
                draggable: false,
                vertical: true
            }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
                $(".c-numbers").html((nextSlide + 1) + " / " +_productsJSON.length);
            });

            $(".js-carosel-text").slick({
                infinite: true,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: $(".c-btn--left"),
                nextArrow: $(".c-btn--right"),
                asNavFor: ".js-carosel-large",
                draggable: false
            });

            $(".is-hide").removeClass("is-hide");
        }
    });
}

$(".js-decline").click(function () {
    $(".c-footer").animate({
        opacity: '0'
    }, 200);
});

$(".js-success").click(function () {
    window.top.shopback.showPushRequest();
    $(".c-footer").animate({
        opacity: '0'
    }, 200);
});

if(typeof window.top.shopback == "undefined" || typeof window.top.shopback.showPushRequest == "undefined"){
    $(".c-footer").css('display', "none");
}

window.utms = {'utm_source': 'ShopBack', 'utm_medium': 'ShopConvert'};

var _configUTMs = function(_link){

    var _hash = "",
        _utms = window.utms;

    if(/(\#)+/.test(_link)){

        _link = _link.split("#");
        _hash = "#" + _link[1],
            _link = _link[0];

    }

    if(/(\?)+/.test(_link)){

        _link += "&";

    }else{

        _link += "?";

    }

    for(_utm in _utms){

        _link += _utm + "=" + _utms[_utm] + "&"

    }

    _link = _link.replace(/(\&)$/g, "") + _hash;

    return _link;

},
redirectTo = function(_link){

    top.spl.click_only(_link);
    top.spl.set_cookie('_spl_tr', top.spl.cid, 720);

    setTimeout(function(){

        window.top.location = _configUTMs(_link);

    }, 800);

};