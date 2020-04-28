	/*
	* Biblioteca para overlay social e recomendação da shopback,
	* @author: Danilo Augusto Matos[da@shopback.com.br], Mizael Silva Lemos [ms@shopback.com.br]
	* @description: Conjunto de Métodos para criação e funcionalidade dos Overlays Shopback.
	* @version: 0.0.0
	*/

	// LOAD JQUERY & Bibliotecas default
	// Jquery Load
	(function () {
		var ss = document.createElement('script');
		ss.type = 'text/javascript';
		ss.async = false;
		ss.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
		var sc = document.getElementsByTagName('script')[0];
		sc.parentNode.insertBefore(ss, sc);
	})();

	// Jquery Migrate Load
	(function () {
		var ss = document.createElement('script');
		ss.type = 'text/javascript';
		ss.async = false;
		ss.src = 'https://cdn.jsdelivr.net/jquery.migrate/1.4.1/jquery-migrate.min.js';
		var sc = document.getElementsByTagName('script')[0];
		sc.parentNode.insertBefore(ss, sc);
	})();

	// Slick Carrossel Load
	(function () {
		var ss = document.createElement('script');
		ss.type = 'text/javascript';
		ss.async = false;
		ss.src = 'https://cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js';
		var sc = document.getElementsByTagName('script')[1];
		sc.parentNode.insertBefore(ss, sc);
	})();


	//Objeto [S]hop[B]ack
	var SB = {},
		force = false,
		forceShopConvertAjax = false;

	//Pré Requisitos dá página!

	//TODO: colocar a função begin em autoload!
	SB.begin =  function(){
	 	SB.ready = false;
		var	begin = setInterval(function(){
				if(typeof $ != "undefined"){

					SB.ready = true;

					// Cetando a div pai do overlay para selecionar o padrão do overlay,
					// Vitrine, recomendacão e social. 
					 	SB.ov = $("#shopback");
				 		SB.carrossel = $(".carousel");

					var	Class = SB.ov.attr("class"),
						vitrine = /(vitrine)+/,
						recomendacao = /(recomendacao)+/;

					// data-id="2027" | Isto é muito importante, sempre colocar este atributo nas campanhas de evento customizado!
					SB.id = (typeof top.spl != "undefined" && top.spl.cid) ? top.spl.cid : (SB.ov.data("id") && SB.ov.data("id") != "") ? SB.ov.data("id") : undefined;					
					SB.documentHeightReference = SB.ov.data("height-reference");
					if(!SB.id || typeof SB.id == 'undefined' || SB.id == 'null'){
					  console.log("%c►ID da campanha não definido!", "font-family: \"Arial Narrow\",Arial,sans-serif; font-size: 13px; color: #FEFEFE; background-color: #e74c3c;padding: 5px 10px;border-radius: 3px;line-height: 22px;"); 
					  return;
					}						

			 		SB.frame = $("#f-content-"+SB.id, window.top.document);

					if(vitrine.test(Class) && !recomendacao.test(Class)){
						/*
						 * >> Atributos necessários para o funcionamento da vitrine:
						 * data-vpadding="body" | Colocar o objeto que irá receber o padding de correção dá vitrine, pode ser mai de um.
						 * data-vpaddingsize="230px" | Aqui é colocado o tamanho do padding a ser atribuido ao elemento vpadding.
						 */

						//Template vitrine
						SB.template = "vitrine";

						//carregando a altura do documento pai do overlay;
						var hTrack = setInterval(function(){
							SB.documentHeight = (SB.documentHeightReference != "" && typeof SB.documentHeightReference == "string") ? $(SB.documentHeightReference, window.top.document).innerHeight() : $(window.top.document).innerHeight();
						},500);

						$(function(){
							setTimeout(function(){
								if(hTrack){
									clearInterval(hTrack);
								}
							},3000);
						});
						

					}else if(!vitrine.test(Class) && recomendacao.test(Class)){
						SB.template = "recomendacao";
					}else{
						console.log("%c►Este overlay não está usando a classe correta!", "font-family: \"Arial Narrow\",Arial,sans-serif; font-size: 13px; color: #FEFEFE; background-color: #e74c3c;padding: 5px 10px;border-radius: 3px;line-height: 22px;");
						return;
					}

					SB.selectTemplate();
					clearInterval(begin);
				}
			}, 800);
	};

	SB.carrosselOverlay = [
				{
					breakpoint: 992,
					settings: {
						infinite: false,
						dots: false,
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						dots: false,
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						arrows: false,
						dots: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 320,
					settings: {
						arrows: false,
						dots: false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			];

	SB.carrosselVitrine = [
					{
						breakpoint: 992,
						settings: {
							infinite: true,
							dots: true,
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 768,
						settings: {
							infinite: true,
							arrows: false,
							dots: true,
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 480,
						settings: {
							infinite: true,
							arrows: false,
							dots: true,
							slidesToShow: 1,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 320,
						settings: {
							infinite: true,
							arrows: false,
							dots: false,
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				];


// Bloco social -------------------------------------------------------------------------------------------------------------

	SB.facebook = function(fId){
		window.fbAsyncInit = function() {
			FB.init({
				appId: fId.toString(),
				status: true,
				cookie: true,
				xfbml: true,
				version: 'v2.5'
			});
		};
			return true;
	};

	SB.connect = function(template){
		//Facebook Connect
		(function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if(d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.async = true;
			js.src = "https://connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));


		$(template).click(function(e){
			e.stopPropagation();
			e.cancelBubble = true;
			
			// contabiliza o click do usuário
			var link = top.spl.b64(String(top.location.href) + "#conectar-facebook");
			var url = top.spl.base_url + '/tr/tc/' + top.spl.acc + '/' + SB.id + '/' + link;
			top.spl.ajax(url, false);

			// desativa o botão do facebook
			$(template).prop('disabled', true);

			var scope_context = {
				scope: 'public_profile, email',
				return_scopes: true
			};

			if (force) {
				scope_context.auth_type = 'rerequest';
			}

			FB.login(function(response) {
				if(response.authResponse && String(response.authResponse.grantedScopes).search("email") > -1) {
					
					FB.api('/me?fields=name,email,gender', function(user) {

						$("#user_img").attr("alt", user.name).attr("src", "//graph.facebook.com/" + user.id + "/picture?type=large");
						$(".userName").html(String(user.name).split(" ")[0]);

						shopConvertAjax(user, response);

					});
				} else {
					$(template).prop('disabled', false);
					if(!force) {
						force = true;
						$(template).trigger("click");
					}
				}
			}, scope_context);
			//------------------------------------------------------------------------------------

		});

	}


	function shopConvertAjax(user, response) {

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
					// Envia as informações para o Shop Convert
					$.post('//app.shopconvert.com.br/tr/tl/' + top.spl.acc + '/' + top.spl.cid, {
						email: user.email
					});

					// Envia as informações para o Shop Target
					try { top._st_app.ci(String(user.email)); top._st_app.set_name(String(user.name)); } catch(e) {}
					
					// Marca tag de conversão
					top.spl.set_cookie('_spl_overlay_social', "disabled", 720);

					// Troca as telas
					$(".recommendations").hide();
					$(".thanks").show();
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					if(!forceShopConvertAjax) {
						forceShopConvertAjax = true;
						shopConvertAjax(user, response);
					}
				}
			});
		};

// \Bloco social -------------------------------------------------------------------------------------------------------------

		/*
	     * Função de Scroll de vitrine, responsável pelo evento de aparecer e desaparecer.
	     */

     	function clickURL(l){
			if(l.search("utm_source=ShopBack") <= -1 && typeof top.spl.link_transform !== 'undefined'){
				l = top.spl.link_transform(l);
			}

			top.spl.cid = SB.id;

			top.spl.click_only(l);
			top.spl.set_cookie('_spl_tr', SB.id, 720);
			var link = top.spl.b64(l);
			var url = top.spl.base_url + '/tr/tc/' + top.spl.acc + '/' + SB.id + '/' + link;
			top.spl.ajax(url, false);

			setTimeout(function(){
				top.location.href = l;
			}, 800);
		}

		SB.products = "";
		SB.getProducts = function(){
			top.shopback.getRecommendations(function(error, response) {
	    		SB.products = response.data;
	    	});
		};

		SB.close = function(){
	    	SB.frame.css({
				bottom: "-"+SB.vpaddingsize+"px",
				opacity: "0"
			});
			
			$(SB.vpadding, window.top.document).css({
				"padding-bottom": "0"
			});

	    	setTimeout(function(){
	    		top.spl.cid = SB.id;
	    		top.spl.close();
	    	}, 500);
	    };

     	SB.impression = 0;
		SB.scrolling = function(){
	    	var w = $(top),
	    		h = SB.documentHeight - $(window.top.window).innerHeight(),
	    		sTop,
	    		lSroll = 0;

    		SB.vpadding =  SB.ov.data("vpadding");
    		SB.vpaddingsize = SB.ov.data("vpaddingsize");

    		w.scroll(function(){

    			if(SB.impression == 0){
    				$(SB.vpadding, window.top.document).css({
						"padding-bottom": SB.vpaddingsize
					});
    			}

	    		SB.documentHeight = (SB.documentHeightReference != "" && typeof SB.documentHeightReference == "string") ? $(SB.documentHeightReference, window.top.document).innerHeight() : $(window.top.document).innerHeight();
    			sTop = $(this).scrollTop();
    			h = SB.documentHeight - $(window.top.window).innerHeight();

    			if(sTop >= h && sTop > lSroll){
    				if(SB.impression == 0){
		    			SB.impression = 1;
		    			top.spl.view(SB.id);
		    			$(".close").click(SB.close);
		    		}

    				SB.frame.css({
    					bottom: "0"
    				});

    			}else if(sTop <= h){
    				SB.frame
    				.stop()
    				.css({
    					bottom: "-"+SB.vpaddingsize+"px".toString()
    				});
    			}	

    			lSroll = sTop;
    		});
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


	SB.creatBox = function(object){

		object.price = (object.price) ? object.price.toString().sbNumberFormat() : "";
		object.installments_price = (object.installments_price) ? object.installments_price.toString().sbNumberFormat() : "";
		object.installments =  (object.installments) ? parseInt(object.installments) : "";
		object.normal_price = (object.normal_price) ? object.normal_price.toString().sbNumberFormat() : "";

		var template = $('#item_template').clone();
			template.removeAttr("id");
			template.find(".product_image").attr("data-lazy", object.images[0]).attr("alt",object.title);
			template.find(".product_name").html(object.title);
			if(template.find(".product_oldPrice").length > 0){
				template.find(".product_oldPrice").html(template.find(".product_oldPrice").html().replace("{old_price}",object.normal_price));
				
				if(object.normal_price == ""){
					template.find(".product_oldPrice").html("");
				}

			}
			template.find(".product_price").html(template.find(".product_price").html().replace("{price}", object.price));
			if(object.installments != "" && typeof object.installments == "number"){
				var installments = template.find(".product_instalments");
					installments.html(installments.html().replace("{installments}", object.installments).replace("{installments_price}", object.installments_price));
			}else{
				template.find(".product_instalments").html("");
			}
			template.addClass("fade").on("click", function(){
				clickURL(object.link);
			});

		SB.carrossel.append(template);		

	};

	SB.slickCarrossel = function(responsive){
		SB.carrossel.slick({
			lazyLoad: 'ondemand',
			infinite: false,
			speed: 300,
			responsive: responsive
		});
	};

	//Tamplate js de vitrine: Versão: 0.0.0
	SB.vitrine = function(){

		SB.frame.css({
			width: "100%",
			height: "210px",
			position: "fixed",
			left: "0",
			right: "0",
			margin: "0 auto",
			bottom: "-210px",
			top: "inherit",
			display: "block",
			"-webkit-transition": "all linear 300ms",
			"-moz-transition": "all linear 300ms",
			"-o-transition": "all linear 300ms",
			"transition": "all linear 300ms"
		});

		SB.scrolling();	
		var recomendation = false,
		    recomendacaoTracking = setInterval(function(){
			
			if(SB.impression == 1){

				if(!recomendation){
					SB.getProducts();
					recomendation = true;
				}

				if(typeof SB.products == "object" && SB.impression == 1){
					SB.carrossel.html("");
					$.each(SB.products, function(k, v){
						SB.creatBox(v);
					});
						SB.slickCarrossel(SB.carrosselVitrine);
						setTimeout(function(){
							$(".fade").css({
								opacity: "0",
								display: "block"
							}).animate({
								opacity:"1"
							}, 800);
						}, 100);

					clearInterval(recomendacaoTracking);
				}
			}

		}, 500);

	};

	SB.recomendacao = function(){
		var recomendacaoTracking = setInterval(function(){
			if(top.spl.active){

				if(SB.impression == 0){
					SB.getProducts();
					SB.impression = 1
				}

				if(typeof SB.products == "object" && SB.impression == 1){
					SB.carrossel.html("");
					$.each(SB.products, function(k, v){
						SB.creatBox(v);
					});
						SB.slickCarrossel(SB.carrosselOverlay);
						setTimeout(function(){
							$(".fade").css({
								opacity: "0",
								display: "block"
							}).animate({
								opacity:"1"
							}, 800);
						}, 100);

					clearInterval(recomendacaoTracking);
				}
			}
		}, 500);	
	};

	SB.social = function(obj, id){

		(function(fid, SB){
			SB.facebook(fid);
		})(id, this);

		SB.connect(obj);
	};


	SB.selectTemplate = function(){

		switch(SB.template){
			case 'vitrine':
				SB.vitrine();
			break;
			
			case 'recomendacao':
				if(!SB.ov.hasClass("custom")){
					SB.recomendacao();
					SB.social("#facebookConnectButton", SB.ov.data("facebook"));
				}
			break;
		}

	};

	(function(){
		SB.begin();
	})();

	SB.ready = function(ff){
		var ready = setInterval(function(){
			
			if(SB.ready){
				ff();
				clearInterval(ready);
			}

		}, 500);
	};
