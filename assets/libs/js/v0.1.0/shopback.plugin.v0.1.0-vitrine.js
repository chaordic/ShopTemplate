/*
 * Biblioteca para overlay social e recomendação da shopback,
 * @author: Danilo Augusto Matos[da@shopback.com.br], Mizael Silva Lemos [ms@shopback.com.br]
 * @description: Conjunto de Métodos para criação e funcionalidade dos Overlays Shopback.
 * @version: 0.1.0 vitrine com UTM correta
 */

// LOAD JQUERY & Bibliotecas default
// Jquery Load
(function() {
  var ss = document.createElement('script');
  ss.type = 'text/javascript';
  ss.async = false;
  ss.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js';
  var sc = document.getElementsByTagName('script')[0];
  sc.parentNode.insertBefore(ss, sc);
})();

// Jquery Migrate Load
(function() {
  var ss = document.createElement('script');
  ss.type = 'text/javascript';
  ss.async = false;
  ss.src = 'https://cdn.jsdelivr.net/jquery.migrate/1.4.1/jquery-migrate.min.js';
  var sc = document.getElementsByTagName('script')[0];
  sc.parentNode.insertBefore(ss, sc);
})();

// Slick Carrossel Load
(function() {
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
SB.begin = function() {
  SB.isReady = false;
  var begin = setInterval(function() {
	if (typeof $ != "undefined") {

	  SB.isReady = true;

	  // Cetando a div pai do overlay para selecionar o padrão do overlay,
	  // Vitrine, recomendacão e social. 
	  SB.ov = $("#shopback");
	  SB.carrossel = $(".carousel");

	  var Class = SB.ov.attr("class"),
		vitrine = /(vitrine)+/,
		recomendacao = /(recomendacao)+/;

	  // data-id="2027" | Isto é muito importante, sempre colocar este atributo nas campanhas de evento customizado!
	  //Condicional que alterna entre o id stático(do HTML) ou o dinâmico(da ferramenta) 
	  //SB.id = (typeof top.spl != "undefined" && top.spl.cid) ? top.spl.cid : (SB.ov.data("id") && SB.ov.data("id") != "") ? SB.ov.data("id") : undefined;         
	  SB.id = (SB.ov.data("id") && SB.ov.data("id") != "") ? SB.ov.data("id") : undefined;
	  SB.documentHeightReference = SB.ov.data("height-reference");
	  if (!SB.id || typeof SB.id == 'undefined' || SB.id == 'null') {
		console.log("%c►ID da campanha não definido!", "font-family: \"Arial Narrow\",Arial,sans-serif; font-size: 13px; color: #FEFEFE; background-color: #e74c3c;padding: 5px 10px;border-radius: 3px;line-height: 22px;");
		return;
	  }

	  SB.frame = $("#f-content-" + SB.id, window.top.document);
	  SB.documentHeightSet = function() {

		if (typeof SB.documentHeightReference == "string" && /(\[)+/.test(SB.documentHeightReference)) {

		  var $Targets = SB.documentHeightReference.replace("[", "").replace("]", "").trim().split(","),
			$TopHeight = 0;

		  $.each($Targets, function($Ind, $Val) {

			$TopHeight += parseInt($($Val.trim(), window.top.document).innerHeight());

		  });

		  SB.documentHeight = $TopHeight;

		} else {

		  SB.documentHeight = (SB.documentHeightReference != "" && typeof SB.documentHeightReference == "string") ? $(SB.documentHeightReference, window.top.document).innerHeight() : $(window.top.document).innerHeight();

		}


	  };

	  if (vitrine.test(Class) && !recomendacao.test(Class)) {
		/*
		 * >> Atributos necessários para o funcionamento da vitrine:
		 * data-vpadding="body" | Colocar o objeto que irá receber o padding de correção dá vitrine, pode ser mai de um.
		 * data-vpaddingsize="230px" | Aqui é colocado o tamanho do padding a ser atribuido ao elemento vpadding.
		 */

		//Template vitrine
		SB.template = "vitrine";

		//carregando a altura do documento pai do overlay;
		var hTrack = setInterval(function() {

		  SB.documentHeightSet();

		}, 500);

		$(function() {
		  setTimeout(function() {
			if (hTrack) {
			  clearInterval(hTrack);
			}
		  }, 3000);
		});


	  } else if (!vitrine.test(Class) && recomendacao.test(Class)) {
		SB.template = "recomendacao";
	  } else {
		console.log("%c►Este overlay não está usando a classe correta!", "font-family: \"Arial Narrow\",Arial,sans-serif; font-size: 13px; color: #FEFEFE; background-color: #e74c3c;padding: 5px 10px;border-radius: 3px;line-height: 22px;");
		return;
	  }

	  SB.selectTemplate();
	  clearInterval(begin);
	}
  }, 800);
};

SB.carrosselOverlay = [{
  breakpoint: 992,
  settings: {
	infinite: false,
	dots: false,
	slidesToShow: 3,
	slidesToScroll: 1
  }
}, {
  breakpoint: 768,
  settings: {
	arrows: false,
	dots: false,
	slidesToShow: 2,
	slidesToScroll: 2
  }
}, {
  breakpoint: 480,
  settings: {
	arrows: false,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1
  }
}, {
  breakpoint: 320,
  settings: {
	arrows: false,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1
  }
}];

SB.carrosselVitrine = [{
  breakpoint: 992,
  settings: {
	infinite: true,
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1
  }
}, {
  breakpoint: 768,
  settings: {
	infinite: true,
	arrows: false,
	dots: true,
	slidesToShow: 2,
	slidesToScroll: 1
  }
}, {
  breakpoint: 480,
  settings: {
	infinite: true,
	arrows: false,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1
  }
}, {
  breakpoint: 320,
  settings: {
	infinite: true,
	arrows: false,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1
  }
}];


// Bloco social -------------------------------------------------------------------------------------------------------------

SB.facebook = function(fId) {
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

SB.connect = function(template) {
  //Facebook Connect
  (function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
	  return;
	}
	js = d.createElement(s);
	js.id = id;
	js.async = true;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));


  $(template).click(function(e) {
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
	  if (response.authResponse && String(response.authResponse.grantedScopes).search("email") > -1) {

		FB.api('/me?fields=name,email,gender', function(user) {

		  $("#user_img").attr("alt", user.name).attr("src", "//graph.facebook.com/" + user.id + "/picture?type=large");
		  $(".userName").html(String(user.name).split(" ")[0]);

		  shopConvertAjax(user, response);

		});
	  } else {
		$(template).prop('disabled', false);
		if (!force) {
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
	  $.post('//app.shopconvert.com.br/tr/tl/' + top.spl.acc + '/' + SB.id, {
		email: user.email
	  });

	  // Envia as informações para o Shop Target
	  try {
		top._st_app.ci(String(user.email));
		top._st_app.set_name(String(user.name));
	  } catch (e) {}

	  // Marca tag de conversão
	  top.spl.set_cookie('_spl_overlay_social', "disabled", 720);

	  // Troca as telas
	  $(".recommendations").hide();
	  $(".thanks").show();
	},
	error: function(XMLHttpRequest, textStatus, errorThrown) {
	  if (!forceShopConvertAjax) {
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

function link_transform(url) {
	if (/utm_/.test(url)) {
		var redirect = url.replace(/utm_source=.*?(&|$)/, "utm_source=ShopBack$1");
		if (url.indexOf('utm_medium') === -1) {
			redirect = redirect + "&utm_medium=ShopSmart_Recommendation"
		} else {
			redirect = redirect.replace(/utm_medium=.*?(&|$)/, "utm_medium=ShopSmart_Recommendation$1")
		}
	} else if (url.indexOf('?') === -1) {
		var redirect = url + '?utm_source=ShopBack&utm_medium=ShopSmart_Recommendation'
	} else {
		var redirect = url + '&utm_source=ShopBack&utm_medium=ShopSmart_Recommendation'
	}
	return redirect
}

function clickURL(l) {
  if (l.search("utm_source=ShopBack") <= -1 && typeof link_transform !== 'undefined') {

	if (typeof window.top.ShopBack == "object") {

	  if (typeof window.top.ShopBack.PreventUtmsDefault != "undefined") l = (window.top.ShopBack.PreventUtmsDefault) ? l : link_transform(l);

	} else {

	  l = link_transform(l);

	}

  }

  top.spl.cid = SB.id;

  top.spl.click_only(l);
  top.spl.set_cookie('_spl_tr', SB.id, 720);
  var link = top.spl.b64(l);
  var url = top.spl.base_url + '/tr/tc/' + top.spl.acc + '/' + SB.id + '/' + link;
  top.spl.ajax(url, false);

  setTimeout(function() {
	top.location.href = l;
  }, 800);
}

SB.products = "";
SB.getProducts = function(option) {
  top.shopback.api.getRecommendations(option, function(error, response) {
	SB.products = response.data;
  });
};

SB.close = function() {
  SB.frame.css({
	bottom: "-" + SB.vpaddingsize + "px",
	opacity: "0"
  });

  $(SB.vpadding, window.top.document).css({
	"padding-bottom": "0"
  });

  setTimeout(function() {
	top.spl.cid = SB.id;
	top.spl.close();
  }, 500);
};

SB.impression = 0;
SB.scrolling = function() {
  var w = (typeof SB.ov.data("scroller") == 'undefined') ? $(top) : $(SB.ov.data("scroller"), window.top.document),
	h = SB.documentHeight - $(window.top.window).innerHeight(),
	sTop,
	lSroll = 0;

  SB.scroller = w;
  SB.vpadding = SB.ov.data("vpadding");
  SB.vpaddingsize = SB.ov.data("vpaddingsize");

  w.on('scroll', function() {

	if (SB.impression == 0) {
	  $(SB.vpadding, window.top.document).css({
		"padding-bottom": SB.vpaddingsize
	  });
	}


	SB.documentHeightSet();
	sTop = $(this).scrollTop();
	h = SB.documentHeight - $(window.top.window).innerHeight();

	if (sTop >= h && sTop > lSroll) {
	  if (SB.impression == 0) {
		SB.impression = 1;
		top.spl.view(SB.id);
		$(".close").click(SB.close);
	  }
	  window.parent.document.getElementById("f-content-" + SB.id).style.bottom = "0px";
	  window.parent.document.getElementById("f-content-" + SB.id).style.height = SB.vpaddingsize + "px";

	} else if (sTop < h && sTop < lSroll && sTop != h) {
	  window.parent.document.getElementById("f-content-" + SB.id).style.bottom = "-" + SB.vpaddingsize + "px".toString();
	}

	lSroll = sTop;
  });
};

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


SB.creatBox = function(object) {

  object.images[0] = object.images[0].replace(/^(http(s)?\:\/\/)/g, "//");

  object.price = (object.price) ? object.price.toString().sbNumberFormat() : "";
  object.installments_price = (object.installments_price) ? object.installments_price.toString().sbNumberFormat() : "";
  object.installments = (object.installments) ? parseInt(object.installments) : "";
  object.normal_price = (object.normal_price) ? object.normal_price.toString().sbNumberFormat() : "";

  if (typeof object.more_info != "undefined") {

	object.more_info.brand = (typeof object.more_info.brand != "undefined") ? object.more_info.brand : "";
	object.more_info.manufacturer = (typeof object.more_info.manufacturer != "undefined") ? object.more_info.manufacturer : "";
	object.more_info.gender = (typeof object.more_info.gender != "undefined") ? object.more_info.gender : "";
	object.more_info.color = (typeof object.more_info.color != "undefined") ? object.more_info.color : "";
	object.more_info.quantity = (typeof object.more_info.quantity != "undefined") ? object.more_info.quantity : "";
	object.more_info.size = (typeof object.more_info.size != "undefined") ? object.more_info.size : "";
	object.more_info.material = (typeof object.more_info.material != "undefined") ? object.more_info.material : "";
	object.more_info.age_group = (typeof object.more_info.age_group != "undefined") ? object.more_info.age_group : "";
	object.more_info.shipping = (typeof object.more_info.shipping != "undefined") ? object.more_info.shipping : "";
	object.more_info.condition = (typeof object.more_info.condition != "undefined") ? object.more_info.condition : "";

  } else {

	object.more_info = {};
	object.more_info.brand = "";
	object.more_info.manufacturer = "";
	object.more_info.gender = "";
	object.more_info.color = "";
	object.more_info.quantity = "";
	object.more_info.size = "";
	object.more_info.material = "";
	object.more_info.age_group = "";
	object.more_info.shipping = "";
	object.more_info.condition = "";

  }

  var template = $('#item_template').clone();
  template.removeAttr("id");

  if (object.normal_price == "") {
	template.find("* > :contains('{old_price}')").html("");
  }

  var code = template.html();

  code = code.split("{image}").join(object.images[0]).split("{title}").join(object.title).split("{old_price}").join(object.normal_price).split("{price}").join(object.price).split("{installments}").join(object.installments).split("{installments_price}").join(object.installments_price).split("{brand}").join(object.more_info.brand).split("{manufacturer}").join(object.more_info.manufacturer).split("{gender}").join(object.more_info.gender).split("{color}").join(object.more_info.color).split("{quantity}").join(object.more_info.quantity).split("{size}").join(object.more_info.size).split("{material}").join(object.more_info.material).split("{age_group}").join(object.more_info.age_group).split("{shipping}").join(object.more_info.shipping).split("{condition}").join(object.more_info.condition);

  template.html(code);

  template.addClass("fade").on("click", function() {
	if (typeof window.top.ShopBack == 'object' && typeof window.top.ShopBack.Linkprefix == 'object') object.link = window.top.ShopBack.Linkprefix[0] + object.link + window.top.ShopBack.Linkprefix[1];
	clickURL(object.link);
  });

  SB.carrossel.append(template);

};

SB.slickCarrossel = function(responsive) {
  SB.carrossel.slick({
	lazyLoad: 'ondemand',
	infinite: false,
	speed: 300,
	responsive: responsive
  });
};

SB.jsonDefaultAttribute = {};

//Tamplate js de vitrine: Versão: 0.0.0


SB.vitrine = function(productsConfig) {

  productsConfig = (typeof productsConfig == "object") ? productsConfig : SB.jsonDefaultAttribute;

  SB.frame.css({
	width: "100%",
	height: "210px",
	position: "fixed",
	left: "0",
	right: "0",
	margin: "0 auto",
	bottom: "-210px",
	top: "auto",
	display: "block",
	"-webkit-transition": "all linear 300ms",
	"-moz-transition": "all linear 300ms",
	"-o-transition": "all linear 300ms",
	"transition": "all linear 300ms"
  });

  SB.scrolling();
  var recomendation = false,
	recomendacaoTracking = setInterval(function() {

	  if (SB.impression == 1) {

		if (!recomendation) {
		  SB.getProducts(productsConfig);
		  recomendation = true;
		}

		if (typeof SB.products == "object" && SB.impression == 1) {
		  SB.carrossel.html("");
		  $.each(SB.products, function(k, v) {
			SB.creatBox(v);
		  });
		  SB.slickCarrossel(SB.carrosselVitrine);
		  setTimeout(function() {
			$(".fade").css({
			  opacity: "0",
			  display: "block"
			}).animate({
			  opacity: "1"
			}, 800);
		  }, 100);

		  clearInterval(recomendacaoTracking);
		}
	  }

	}, 500);

};



SB.recomendacao = function(productsConfig) {

  productsConfig = (typeof productsConfig == "object") ? productsConfig : SB.jsonDefaultAttribute;


  var recomendacaoTracking = setInterval(function() {
	if (top.spl.active) {

	  if (SB.impression == 0) {
		SB.getProducts(productsConfig);
		SB.impression = 1;
	  }

	  if (typeof SB.products == "object" && SB.impression == 1) {
		SB.carrossel.html("");
		$.each(SB.products, function(k, v) {
		  SB.creatBox(v);
		});
		SB.slickCarrossel(SB.carrosselOverlay);
		setTimeout(function() {
		  $(".fade").css({
			opacity: "0",
			display: "block"
		  }).animate({
			opacity: "1"
		  }, 800);
		}, 100);

		clearInterval(recomendacaoTracking);
	  }
	}
  }, 500);
};

SB.social = function(obj, id) {

  (function(fid, SB) {
	SB.facebook(fid);
  })(id, this);

  SB.connect(obj);
};


SB.selectTemplate = function() {

  switch (SB.template) {
	case 'vitrine':
	  if (!SB.ov.hasClass("custom")) {
		SB.vitrine();
	  }
	  break;

	case 'recomendacao':
	  if (!SB.ov.hasClass("custom")) {
		SB.recomendacao();
		SB.social("#facebookConnectButton", SB.ov.data("facebook"));
	  }
	  break;
  }

};

(function() {
  var jqueryValidate = setInterval(function() {
	if (typeof $ != "undefined") {
	  SB.begin();
	  clearInterval(jqueryValidate);
	}
  }, 300);
})();

SB.ready = function(ff) {
  var ready = setInterval(function() {

	if (SB.isReady) {
	  ff();
	  clearInterval(ready);
	}

  }, 500);
};