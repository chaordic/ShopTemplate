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

var link_transform = function(_link){

    var _hash = "",
        _utms = {

            'utm_source': 'ShopBack',
            'utm_medium': 'ShopConvert_Contador'

        };

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

        window.top.location = top.spl.link_transform(_link);

    }, 800);

};

function getProducts(_execute){
    top.shopback.getRecommendations({}, function(_products, _erro){
        if(!_erro){
            $(".js-carosel").html("");
            _products.data.forEach(function(_v, _ind){
                var _template = $(".js-template").clone().removeClass("is-hide").removeClass("js-template"),
                    _code = _template.html();

                var _price = _v.price.toString().sbNumberFormat(),
                    _promocao = (typeof _v.normal_price == "undefined" || _v.normal_price == _v.price)? "" : _v.normal_price.toString().sbNumberFormat(),
                    _parcelas = (typeof _v.installments == "undefined" || _v.installments == "1")? "": _v.installments,
                    _parcelas_price = (typeof _v.installments == "undefined" || _v.installments == "1")? "": _v.installments_price.toString().sbNumberFormat();

                _code = _code.split('{image}').join(_v.images[0])
                        .split('{name}').join(_v.title)
                        .split('{price}').join(_price)
                        .split('{installments}').join(_parcelas)
                        .split('{installments_price}').join(_parcelas_price)
                        .split('{promocao}').join(_promocao)
                        .split('{link}').join(_v.link);
                _template.html(_code);
                $(".js-carosel").append(_template);

            });

            $(".js-carosel").slick({
                infinite: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: $(".js-prev"),
                nextArrow: $(".js-next")
            });

            _execute();
        }
    });
}

function show(_id){
    var _frame = $("#f-content-"+_id, window.top.document);

    _frame.css({
        width: "330px",
        height: "656px",
        top: "initial",
        left: "10px",
        right: "initial",
        bottom: "-656px",
        opacity: "0",
        display: "block",
        position: "fixed"
    });

    getProducts(function(){
        _frame.animate({
            opacity: "1",
            bottom: "10px"
        }, 220, function () {
            top.spl.view(_id);
            top.spl.cid = _id;
        });
    });
}

function close(_id) {
    var _frame = $("#f-content-"+_id, window.top.document);
    _frame.animate({
        opacity: "0",
        bottom: "-656px"
    }, 220, top.spl.close);
}
