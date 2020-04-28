var $ID = top.spl.cid,
    $FRAME = $("#f-content-" + $ID, window.top.document);

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

top.SBRecomendacao = {};

/*if(typeof top.shopback == "undefined"){
    top.shopback = {};
    top.shopback.getRecommendations = function(_f, _call = function(){}){
        _call({
            "data": [{
                "_id": "584d8ebacd2f5b6ef61deda1",
                "product_id": "7092",
                "product_sku": "7092",
                "title": "Calcinha Caleçon Microfibra e Renda Premiére Branca - G",
                "description": "Caleçon todo em renda com forro 100% algodão. Super charmoso e confortável, pois não possui nenhum elástico.\nÉ uma modelagem super tendência, perfeita para várias ocasiões.\n\nComposição:\nRenda: 90% Poliamida / 10% Elastano\nForro: 100% Algodão\n\nMedidas da modelo: <br />\nAltura: 1,75 m <br />\nQuadril: 98 cm <br />\nCintura: 68 cm <br />\nBusto: 90 cm <br />\nModelo veste: Tamanho P",
                "more_info": {
                    "brand": "Premiére",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/calcinha-calecon-microfibra-e-renda-premiere-branca-20-05-0102-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/186497_2"],
                "price": 39.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 39.9,
                "synced": true
            }, {
                "_id": "5aebd1eccd2f5b63b0766b3c",
                "product_id": "1810",
                "product_sku": "1810",
                "title": "CINTA LIGA SAMPA - TAM. U",
                "description": "<p style=\"text-align: justify;\"><br />Cinta Liga Sampa, Loungerie. Cinta liga estruturada com barbatanas na parte central, da frente e das costas, possui el&aacute;sticos da liga destac&aacute;veis.<br /><br /><br />SKU: 30.02.0007<br />Composi&ccedil;&atilde;o: 87% Poliamida 13% Elastano<br />Cor: Vermelho<br />Marca: Loungerie<br /><br /></p>",
                "more_info": {
                    "brand": "LOUNGERIE",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/liga-sampa-30-02-0007/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/183169_2"],
                "price": 29.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 29.9,
                "synced": true
            }, {
                "_id": "5ae7ddb2cd2f5b0ef83e8445",
                "product_id": "18517",
                "product_sku": "18517",
                "title": "Calcinha Fio Dental Algodão Renda Pop Colors Branca - P",
                "description": "Calcinha Fio Pop Colors em malha de poliamida com lindo detalhe em renda. Forro 100% algodão, o que garante muito conforto. Lateral larguinha, perfeita para não marcar. \n\nSKU: 20.02.0266_BRANCO\nComposição: 90% Poliamida 10% Elastano | Forro: 100% Algodão \nCor: Branco\nMarca: Loungerie\n<br /><br />\nMedidas da modelo: <br />\nAltura: 1,75 m <br />\nQuadril: 98 cm <br />\nCintura: 68 cm <br />\nBusto: 90 cm <br />\nModelo veste: Tamanho P",
                "more_info": {
                    "brand": "Pop Colors",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/calcinha-fio-dental-algodao-renda-pop-colors-branca-20-02-0266-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/230248_2"],
                "price": 29.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 29.9,
                "synced": true
            }, {
                "_id": "5a9f5e7bcd2f5b6b8b757a75",
                "product_id": "21593",
                "product_sku": "21593",
                "title": "Sutiã Underwire Cobertura Total Renda Celine Azul - 40C",
                "description": "Sutiã Demi todo em renda, sem bojo e sem enchimento. \nPossui aro e um reforço interno que proporcionam ótima sustentação e desenham o busto. \nAs alças possuem reguladores e o fechamento é por colchetes duplos.\nDetalhe de lacinho no entremeio.\n\nComposição:\nMicro: 87% Poliamida / 13% Elastano\nRenda: 90% Poliamida / 10% Elastano\nForro Interno: 100% Poliamida\n<br /><br />\nMedidas da modelo: <br />\nAltura: 1,75 m <br />\nQuadril: 98 cm <br />\nCintura: 68 cm <br />\nBusto: 90 cm <br />\nModelo veste: Tamanho 42B",
                "more_info": {
                    "brand": "Celine",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/sutia-underwire-cobertura-total-renda-celine-azul-10-15-0035-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/234601_2"],
                "price": 79.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 79.9,
                "synced": true
            }, {
                "_id": "5ab9b8c2cd2f5b3ceb7eb61d",
                "product_id": "21751",
                "product_sku": "21751",
                "title": "Calcinha Fio Dental Renda Love Lace Branca - G",
                "description": "Calcinha modelo fio dental de renda.\nLaterais de largura média.\nCós todo em renda, sem elástico.\nForro em algodão, proporcionando super conforto.\n\nColeção Love Lace, lançamento exclusivo Loungerie. As peças são feitas em laise que tem acabamento opaco que contrasta com a renda estreita de visual acetinado, com leve brilho. São feitas de poliamida com elastano e possuem toque super macio.\n\nComposição:\nRenda larga: 90% poliamida / 10% elastano\nRenda Estreita: 90% poliamida / 10% elastano\nForro central: 100% algodão.\n<br /><br />\nMedidas da modelo: <br />\nAltura: 1,75 m <br />\nQuadril: 98 cm <br />\nCintura: 68 cm <br />\nBusto: 90 cm <br />\nModelo veste: Tamanho P",
                "more_info": {
                    "brand": "Love Lace",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/calcinha-fio-dental-renda-love-lace-branca-20-02-0291-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/236771_2"],
                "price": 49.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 49.9,
                "synced": true
            }, {
                "_id": "5997d8bccd2f5b55c6459d12",
                "product_id": "8904",
                "product_sku": "8904",
                "title": "Calcinha Fio Dental Microfibra e Renda Premiére Nectar - M",
                "description": "Calcinha Fio em microfibra e renda com forro 100% algodão.\nTraseira em microfibra dupla que deixa a peça muito mais confortável.\nSKU: 20.02.0167_NECTAR\nComposição: 87% Poliamida 13% Elastano | Renda: 90% Poliamida 10% Elastano | Forro: 100% Algodão\nCor: NECTAR\nMarca: Loungerie\n<br /><br />\nMedidas da modelo: <br />\nAltura: 1,75 m <br />\nQuadril: 98 cm <br />\nCintura: 68 cm <br />\nBusto: 90 cm <br />\nModelo veste: Tamanho P",
                "more_info": {
                    "brand": "Premiére",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/calcinha-fio-dental-microfibra-e-renda-premiere-nectar-20-02-0167-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/192613_2"],
                "price": 24.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 24.9,
                "synced": true
            }, {
                "_id": "5a3b2c14cd2f5b511b6d47ef",
                "product_id": "18243",
                "product_sku": "18243",
                "title": "Calcinha Fio Dental Renda Sweet Lace Marinho - G",
                "more_info": {
                    "brand": "Sweet Lace",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/calcinha-fio-dental-renda-sweet-lace-marinho-20-02-0245-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/231345_2"],
                "price": 25.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 25.9,
                "synced": true
            }, {
                "_id": "5abb1204cd2f5b7e1c51ffa1",
                "product_id": "17458",
                "product_sku": "17458",
                "title": "Calcinha Caleçon Renda Sweet Lace Vermelho Divino - G",
                "more_info": {
                    "brand": "Sweet Lace",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/calcinha-calecon-renda-sweet-lace-vermelho-divino-20-05-0050-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/238627_2"],
                "price": 29.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 29.9,
                "synced": true
            }, {
                "_id": "5ab9b8c2cd2f5b3ceb7eb614",
                "product_id": "22206",
                "product_sku": "22206",
                "title": "Calcinha Fio Dental Renda Love Lace Rosa - G",
                "description": "Calcinha modelo fio dental de renda.\nLaterais de largura média.\nCós todo em renda, sem elástico.\nForro em algodão, proporcionando super conforto.\n\nColeção Love Lace, lançamento exclusivo Loungerie. As peças são feitas em laise que tem acabamento opaco que contrasta com a renda estreita de visual acetinado, com leve brilho. São feitas de poliamida com elastano e possuem toque super macio.\n\nComposição:\nRenda larga: 90% poliamida / 10% elastano\nRenda Estreita: 90% poliamida / 10% elastano\nForro central: 100% algodão.\n<br /><br />\nMedidas da modelo: <br />\nAltura: 1,75 m <br />\nQuadril: 98 cm <br />\nCintura: 68 cm <br />\nBusto: 90 cm <br />\nModelo veste: Tamanho P",
                "more_info": {
                    "brand": "Love Lace",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/calcinha-fio-dental-renda-love-lace-rosa-20-02-0291-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/236878_2"],
                "price": 49.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 49.9,
                "synced": true
            }, {
                "_id": "5a728eaecd2f5b386a400a82",
                "product_id": "13065",
                "product_sku": "13065",
                "title": "Calcinha Fio Dental Biquíni Renda Tease Preta Calcinha Fio Dental Renda Tease Preta - M",
                "description": "Calcinha Fio Tease, Loungerie, calcinha preta em renda com transparência, parte posterior em tule duplo e laterais em cetim com costuras. A peça de modelo fio possui laterais largas, forro de algodão e detalhe frontal em laço, perfeita para não marcar.\n\nSKU: 20.02.0211_PRETO\nComposição: Renda: 90% Poliamida 10% Elastano | Tule: 90% Poliamida 10% Elastano | Cetim: 96% Poliéster 4% Elastano | Forro: 100% Algodão | Forro Cetim: 100% Poliéster \nCor: Preto\nMarca: Loungerie\n<br /><br />\nMedidas da modelo: <br />\nAltura: 1,75 m <br />\nQuadril: 98 cm <br />\nCintura: 68 cm <br />\nBusto: 90 cm <br />\nModelo veste: Tamanho P",
                "more_info": {
                    "brand": "LOUNGERIE",
                    "condition": "new"
                },
                "link": "https://www.loungerie.com.br/calcinha-fio-dental-biquini-renda-tease-preta-20-02-0211-loungerie/p",
                "images": ["http://lojaloungerie.vteximg.com.br/arquivos/ids/223051_2"],
                "price": 29.9,
                "availability": "disponível",
                "installments": 1,
                "installments_price": 29.9,
                "synced": true
            }]
        }, false);
    };
}*/

function makeCarrossel(_p) {
    var _productsJSON = [],
        _productsJSONsmall = [],
        _text = $(".js-carosel--text").html(),
        _thumbLARGE = $(".js-carosel--large").html(),
        _thumbSmall = $(".js-carosel--thumbnail").html();

    _p.forEach(function (_v, _ind) {
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

        if(_ind > 0){
            _productsJSONsmall.push({
                name: _v.title.trim(),
                'normal_price': (typeof _v['normal_price'] == 'undefined') ? "" : _v['normal_price'].toString().sbNumberFormat(),
                price: _v['price'].toString().sbNumberFormat(),
                installments: (typeof _v['installments'] == 'undefined')? "" : (_v['installments'] == 1)? "": _v['installments'],
                'installments_price': (typeof _v['installments_price'] == 'undefined') ? "" : _v['installments_price'].toString().sbNumberFormat(),
                link: _v.link,
                image: _v['images'][0]
            });
        }

    });

    _productsJSONsmall.push(_productsJSON[0]);

    $(".js-carosel--text").html(Mustache.to_html(_text, {'products': _productsJSON}));
    $(".js-carosel--large").html(Mustache.to_html(_thumbLARGE, {'largethumb': _productsJSON}));
    $(".js-carosel--thumbnail").html(Mustache.to_html(_thumbSmall, {'smallthumb': _productsJSONsmall}));

    $(".js-carosel--text .c-product").css({
        opacity: "0",
        display: 'none',
        position: 'relative'
    });

    $("#set-0").css({
        opacity: "1",
        display: 'block'
    });

    $(".c-text--pages").html("1 / " +_productsJSON.length);

    setTimeout(function () {
        $(".js-carosel--large").slick({

            infinite: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: ".js-carosel--thumbnail",
            prevArrow: $(".js-navigate--left"),
            nextArrow: $(".js-navigate--right"),
            draggable: false
        }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $(".c-text--pages").html((nextSlide + 1) + " / " +_productsJSON.length);
            $("#set-" + currentSlide).stop().animate({
                left: "-370px"
            }, 340, function () {
                $(this).css({
                    opacity: "0",
                    display: 'none',
                    left: 0
                });
                $("#set-" + nextSlide).css({
                    "display": "block",
                    left: '-370px'
                }).stop().animate({
                    opacity: '1',
                    left: '0'
                }, 340);
            });
        });

        $(".js-carosel--thumbnail").slick({

            infinite: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $(".js-navigate--left"),
            nextArrow: $(".js-navigate--right"),
            asNavFor: ".js-carosel--large",
            draggable: false
        });
    }, 900);

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

function getProducts(_filter = {}){
    top.shopback.getRecommendations(_filter, function (_resp, _err){
        top.SBRecomendacao.products = _resp.data;
        $(".c-figure--loading").animate({
            opacity: "0"
        }, 320, function () {
          $(this).css("display", "none");
        });
        makeCarrossel(_resp.data);
    });
}

function _showOverlay(){
    getProducts();
    $(".is-hide").removeClass("is-hide");
}
