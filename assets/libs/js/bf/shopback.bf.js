window.top.console.clear();

var campaing_id = $('html').attr('data-campaign');
var facebook_id = $('html').attr('data-facebook');

        // Dados para Facebook API
        window.fbAsyncInit = function() {
        	FB.init({
        		appId: facebook_id,
        		status: true,
        		cookie: true,
        		xfbml: true,
        		version: 'v2.4'
        	});
        };

        // Cria tag script com arquivo do Facebook SDK
        (function(d, s, id) {
        	var js, fjs = d.getElementsByTagName(s)[0];
        	if(d.getElementById(id)) {
        		return;
        	}

        	js = d.createElement(s);
        	js.id = id;
        	js.src = "//connect.facebook.net/en_US/sdk.js";
        	fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Função para conexão no Facebook e coletar informações abertas dos usuários
        var disabled = false;
        var force = false;

        function connect() {
        	if(!disabled) {
        		disabled = true;

        		var link = top.spl.b64(String(top.location.href) + "#conectar-facebook");
        		var url = top.spl.base_url + '/tr/tc/' + top.spl.acc + '/' + campaing_id + '/' + link;
        		top.spl.ajax(url, false);

        		if(force) {
        			var scope_context = {
        				scope: 'public_profile, email',
        				auth_type: 'rerequest',
        				return_scopes: true
        			};
        		} else {
        			var scope_context = {
        				scope: 'public_profile, email',
        				return_scopes: true
        			};
        		}

        		FB.login(function(response) {
        			if(response.authResponse && String(response.authResponse.grantedScopes).search("email") > -1) {

        				$(".facebook-first").animate({

        					opacity: "0"

        				}, 120, function(){

        					$(".facebook-first").css("display", "none");
        					$(".facebook-thanks").css("display", "block").stop().animate({

        						opacity: "1"

        					}, 120);

        					$(".js-close").attr("onclick", "top.spl.close(); top.spl.redirect();");

        				});

        				FB.api('/me?fields=name,email,gender', function(user) {
        					try {

        						var keys = {
        							"token": response.authResponse.accessToken
        						};

        						var details = {
        							"name": user.name,
        							"gender": user.gender,
        						};

        						keys = JSON.stringify(keys);
        						details = JSON.stringify(details);

        						top.shopback.setMetadata('contact', {
        							type: 'facebook',
        							value: user.id,
        							keys: keys,
        							details: details,
        							active: true
        						});

        					} catch (e) {
        						console.log('Error when try to save facebook data');
        					}
        					
        					$(".figure-user img").attr("src", "https://graph.facebook.com/" + user.id + "/picture?type=large");
						$(".name-user").text(user.name);
						
        					$.ajax({
        						type: "POST",
        						url: "//app.shopconvert.com.br/facebook/callback.php?ref=" + String(top.location.href),
        						data: {
        							token: response.authResponse.accessToken,
        							user_id: user.id,
        							user_name: user.name,
        							user_email: user.email,
        							user_gender: user.gender,
        							post: true
        						},
        						success: function(data) {
        							$.post('//app.shopconvert.com.br/tr/tl/' + top.spl.acc + '/' + campaing_id, {
        								email: user.email
        							});

        							top.spl.set_cookie('_spl_overlay_social', "disabled", 720);

        							try {
        								top._st_app.ci(String(user.email));
        								top._st_app.set_name(String(user.name));
        							} catch(e) {}
        						},
        						error: function(XMLHttpRequest, textStatus, errorThrown) {
	                                // error
	                            }
	                        });
        				});
        			} else {
        				disabled = false;
        				$(".facebook").css("opacity", "1");

        				if(!force) {
        					force = true;
        					$(".facebook").trigger("click");
        				}
        			}
        		}, scope_context);
        	}
        }

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
        
        var $ID = $('html').attr('data-campaign'),	
        _SCOPE_ = window.top.document,
        $FRAME = $("#f-content-" + $ID, _SCOPE_);


        var createBox = function(_products) {

        	var _template =  $("#ghost figure").clone();

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

        		_template.html(_code);
        		_template.on("click", function() {

        			top.spl.click_only(_product.link);
        			top.spl.set_cookie('_spl_tr', $ID, 720);

        			setTimeout(function() {

        				top.location = top.spl.link_transform(_product.link);

        			}, 500);


        		});

        		$(".section-carrousel").append(_template);

        		_template = $("#ghost figure").clone();

        	});

        },createCarrossel = function(){


        }, getProducts = function(){

        	top.shopback.getRecommendations({}, function(response, erro) {

        		createBox(Array.from(response.data));

        		$("<button id='left'></button>").insertAfter(".section-carrousel");
        		$("<button id='right'></button>").insertAfter(".section-carrousel");
        		$(".section-carrousel").slick({

        			infinite: false,
        			dots: false,
        			slidesToShow: 3,
        			slidesToScroll: 3,
        			arrows: true,
        			prevArrow: $("#left"),
        			nextArrow: $("#right")

        		});
        		
        	});

        };

        var checkOV = setInterval(function() {

        	if($FRAME.is(":visible")){

        		clearInterval(checkOV);
        		getProducts();

        	}

        }, 200);

$('.js-link').on('click', function(){

			var link = $(this).attr('data-url');

            setTimeout(function() {

                top.spl.click_only(link);
				top.spl.set_cookie('_spl_tr', $ID, 720);
				top.location = top.spl.link_transform(link);

            }, 800);
			
		});
