// FUNÇÂO CARROSSEL + PUXAR PRODUTOS
String.prototype.sbNumberFormat = function() {
    var n = this,
        hasPoint = (/(\.)+/.test(this)) ? true : false;

    if (hasPoint) {
        var int = n.split(".")[0],
            c = n.split(".")[1];
        n = int;
    } else {
        c = "00";
    }

    n = (typeof n == "string") ? n.replace(",", "") : n.toString();
    L = n.length % 3;

    var newValue = false,
        loop = "";

    if (n.toString().length > 3) {
        if (L > 0) {
            newValue = n.substring('0', L);
        } else {
            newValue = "";
        }

        loop = n.substring(L, n.length).length / 3;

        for (var i = 0; i < loop; i++) {
            if (L > 0 || i > 0) {
                newValue += ".";
            }
            newValue += n.substring((L + (i * 3)), (L + (i * 3) + 3));
        }
    } else {
        newValue = n;
    }

    if (c.length == 2 && parseInt(c) > 0) {
        newValue += "," + c;
    } else if (c.length > 2 && parseInt(c) > 0) {
        newValue += "," + c.substring('0', '2');
    } else if (c.length > 0 && parseInt(c) > 0) {
        newValue += "," + c + "0";
    } else {
        newValue += ",00";
    }
    return newValue;
};

var createBox = function(_products) {

    var _products = Array.from(_products);

    $(".carousel").html("");

    _products.forEach(function(_product, _ind) {

    var _name = _product.title,
        _image = _product.images[0];
    var _price = _product.price.toString().sbNumberFormat(),
        _installments = (typeof _product.installments != 'undefined') ? _product.installments : "",
        _old_price = (typeof _product.normal_price != 'undefined') ? _product.normal_price.toString().sbNumberFormat() : "",
        _installments_price = (typeof _product.installments_price != 'undefined') ? _product.installments_price.toString().sbNumberFormat() : "";

        $(`
            <div class="item">
                <img src="${_image}" />

                <section>
                    <h2>${_name}</h2>

                    <h3>${_price}</h3>
                </section>
            </div>
        `).appendTo(".carousel");

    });
}
// FIM FUNÇÂO CARROSSEL + PRODUTOS


//POPULA OVERLAY COM PRODUTOS FAKE SE NÃO TIVER PRODUTOS CARREGADOS PELO BACKEND //
getProducts = function(imageDiv, titleDiv, priceDiv, cartLink) {

    if(typeof top.shopback == "undefined"){
        
        _call = {
            "data": []
        };

            createBox(Array.from(_call.data));

            setTimeout(function(){

                createSlick();

            }, 2000);

    
    } else {



            if (cartLength > 0) {
                
                cartLength = cartLength - 1;
            }

            for (var i = 0; i <= cartLength; i++) {

                var imageValue = imageDiv.attr('src');
                var titleValue = titleDiv.text();
                var priceValue = priceDiv.text();

                _call = {
                    "data": [{

                    "_id": "",
                    "product_id": "",
                    "product_sku": "",
                    "title": titleValue,
                    "more_info": {
                        "brand": "",
                        "condition": ""
                },
                "link": cartLink,
                "images": imageValue,
                "price": priceValue,
                "availability": "",
                "installments": "",
                "installments_price": "",
                "synced": true
                }]
            }

            };


            //top.shopback.getRecommendations({}, function(response, erro) {

              createBox(Array.from(_call.data));

              setTimeout(function(){

                createSlick();

            //}, 1000);
            
        });
    
    }
}

var createSlick = function() {

    $("<button id='right'><img src='https://shopbackbr.github.io/ShopTemplate/cdn/convert/BF/alerta-abandono/alerta-abandono-mod1/images/right.png' /></button>").insertAfter(".carousel");
    $("<button id='left'><img src='https://shopbackbr.github.io/ShopTemplate/cdn/convert/BF/alerta-abandono/alerta-abandono-mod1/images/left.png' /></button>").insertAfter(".carousel");

    $(".carousel").slick({
        infinite: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $("#left"),
        nextArrow: $("#right")
    });
}


$(".carousel").on("click", function() {

    top.spl.click_only();
    top.spl.set_cookie('_spl_tr', $ID, 720);

});




    //FUNÇÂO CARROSSEL
    createCarrossel = function() {
    }

    
    // FIM FUNÇÂO CARROSSEL