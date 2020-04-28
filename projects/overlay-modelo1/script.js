var _redirect = function(){

			var _link = window.top.location.href,
			_hash = "",
			_utms = {

				'utm_source': 'ShopBack',
				'utm_medium': 'ShopConvert_Recommendation'

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

			top.spl.click_only(_link);
			top.spl.set_cookie('_spl_tr', top.spl.cid, 720);

			setTimeout(function(){

				top.location = _link;

			}, 800);

		};

		var _link_transform = function(_link){

			var _hash = "",
				_utms = {

					'utm_source': 'ShopBack',
					'utm_medium': 'ShopConvert_Recommendation'

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

		};

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
		
	var $ID = $('html').attr('data-id'),
		_SCOPE_ = window.top.document,
		$FRAME = $("#f-content-" + $ID, _SCOPE_);


	var createBox = function(_products) {

		var _template =  $("#ghost .product").clone();

		_products = Array.from(_products);

		$(".section-carrousel").html("");

		_products.forEach(function(_product, _ind) {

			var _code = _template.html(),
				_name = _product.title,
				_image = _product.images[0],
				_price = _product.price.toString().sbNumberFormat(),
				_installments = (typeof _product.installments != 'undefined') ? _product.installments : "",
				_installments_price = (typeof _product.installments_price != 'undefined') ? _product.installments_price.toString().sbNumberFormat() : "";

			if(_product.price == _product.normal_price){
        		var _old_price = "";
        	}else if(_product.normal_price){
        		var _old_price = _product.normal_price.toString().sbNumberFormat();
        	}else{
        		var _old_price = "";
        	}

			_code = _code.split("{name}").join(_name);
			_code = _code.split("{image}").join(_image);
			_code = _code.split("{installments}").join(_installments);
			_code = _code.split("{installments_price}").join(_installments_price);
			_code = _code.split("{price}").join(_price);
			_code = _code.split("{old_price}").join(_old_price);

			_template.html(_code.replace('data-src', 'src'));
			_template.on("click", function() {

				top.spl.click_only(_product.link);
				top.spl.set_cookie('_spl_tr', $ID, 720);

				setTimeout(function() {

					top.location = _link_transform(_product.link);

				}, 500);


			});

			$(".section-carrousel").append(_template);

			_template = $("#ghost .product").clone();

		});

	},createCarrossel = function(){


	}, getProducts = function(){

		top.shopback.getRecommendations({}, function(response, erro) {

    		createBox(Array.from(response.data));

    		$("<button id='left'></button>").insertAfter(".section-carrousel");
    		$("<button id='right'></button>").insertAfter(".section-carrousel");
    		$(".section-carrousel").slick({

    			infinite: true,
				dots: false,
				slidesToShow: 1,
  				arrows: true,
  				centerMode: true,
  				variableWidth: true,
  				prevArrow: $("#left"),
  				nextArrow: $("#right")

    		});
    		$(".section-carrousel").on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    			var dnext = nextSlide + 1,
    				dprev = nextSlide - 1,
    				$prod = $('.product[data-slick-index="'+dnext+'"], .product[data-slick-index="'+dprev+'"]');

    			$('.product').removeClass('product-np');
    			$prod.addClass('product-np');
    		});

    		$('.product[data-slick-index="1"], .product[data-slick-index="-1"]').addClass('product-np');
    	
    	});

	};

	var checkOV = setInterval(function() {

		if($FRAME.is(":visible")){

			clearInterval(checkOV);
			getProducts();

		}

	}, 200);