$(function() {
	var show_overlay = 0,
		campaign_id = Number($('[data-id]').attr('data-id'));

	$('.btnContinuar').on('click', function(){
		redirect();
	});

	$('.bloco-opcao').on('click', function(){
		$(this).parent().children().removeClass('active');
		$(this).addClass('active');
		$(this).parent().find('input[type="radio"]').eq( $(this).index() ).prop('checked', 'checked');
	});

	$('.formLead').submit(function(){
		$.post('https://front.shopconvert.com.br/tr/tl/' + top.spl.acc + '/' + campaign_id, $(this).serialize(), function(response){
			$('.tela1').animate({
				'opacity' : '0'
			}, 200, function(){
				$('.tela1').css({
					'display' : 'none'
				});
				$('.thanksLead').css({
					'display' : 'block'
				}).animate({
					'opacity' : '1'
				}, 200);
			});
			interaction = 1;
		});
		return false;
	});

	function redirect() {
		if ( window.top.spl.cid_redirect[window.top.spl.cid] ) {
			if ( /utm_/.test(window.top.location.search) ) {
				var redirect = window.top.location.href.replace(/utm_source=.*?(&|$)/, 'utm_source=ShopBack$1');
				if ( window.top.location.href.indexOf('utm_medium') === -1 ) {
					redirect = redirect + '&utm_medium=ShopImobi';
				} else {
					redirect = redirect.replace(/utm_medium=.*?(&|$)/, 'utm_medium=ShopImobi$1');
				};
			} else if ( window.top.location.href.indexOf('?') === -1 ) {
				var redirect = window.top.location.href + '?utm_source=ShopBack&utm_medium=ShopImobi';
			} else {
				var redirect = window.top.location.href + '&utm_source=ShopBack&utm_medium=ShopImobi';
			};
			window.top.spl.set_cookie('_spl_tr', window.top.spl.cid, 720);
			window.top.location.href = redirect.split('#/cart').join('');
		};
	};

	function link_transform(url) {
		if ( /utm_/.test(url) ) {
			var newLink = url.replace(/utm_source=.*?(&|$)/, 'utm_source=ShopBack$1');
			if ( url.indexOf('utm_medium') === -1 ) {
				newLink = newLink + '&utm_medium=ShopImobi';
			} else {
				newLink = newLink.replace(/utm_medium=.*?(&|$)/, 'utm_medium=ShopImobi$1');
			};
		} else if ( url.indexOf('?') === -1 ) {
			var newLink = url + '?utm_source=ShopBack&utm_medium=ShopImobi';
		} else {
			var newLink = url + '&utm_source=ShopBack&utm_medium=ShopImobi';
		};
		return newLink;
	};

	function redirect_to(_link){
		window.top.spl.click_only( window.top.location.href );
		_link = window.top.spl.link_transform(_link);
		window.top.spl.set_cookie('_spl_tr', window.top.spl.cid, window.top.spl.close_time);
		setTimeout(function(){
			window.top.location = _link;
		}, 800);
	};

	function redirect_without_utm_to(_link){
		window.top.spl.click_only( window.top.location.href );
		window.top.spl.set_cookie('_spl_tr', window.top.spl.cid, window.top.spl.close_time);
		setTimeout(function(){
			window.top.location = _link;
		}, 800);
	};

	var interaction = 0;
	$(function(){
		$('.close').on('click', function() {
			if (interaction == 0) {
				top.spl.close();
			} else {
				redirect();
			};
		});
	});

});