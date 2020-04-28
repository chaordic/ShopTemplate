$(function(){
	$('.validaNome').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
		translation: {
			'A': {
				pattern: /[a-zA-Z\ \.ÀàÁáÂâÃãÈèÉéÊêÌìÍíÎîÒòÓóÔôÕõÙùÚúÛûÇçÑñ]/
			}
		}
	});

	$('.validaEmail').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
		translation: {
			'A': {
				pattern: /[0-9a-zA-Z\@\-\_\.]/
			}
		}
	});

	$('.validaCEP').mask('00000-000');

	$('.validaEmail').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
		translation: {
			'A': {
				pattern: /[0-9a-zA-Z\@\-\_\.]/
			}
		}
	});

	//telefone via condicional
	var SPMaskBehavior = function(val) {
			return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
		},
		spOptions = {
			onKeyPress: function(val, e, field, options) {
				field.mask(SPMaskBehavior.apply({}, arguments), options);
			}
		};
	$('.validaTelefone').mask(SPMaskBehavior, spOptions);
});