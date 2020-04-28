<?php
date_default_timezone_set('America/Sao_Paulo');
if(file_exists(__DIR__.'/../development.env')){
	require(__DIR__.'/development.php');
}else{
	require(__DIR__.'/production.php');
}

$title = TITLE;
$url = URL;
$description = '';
$keywords = '';
$class = '';
$imgshare = '';

$produtos = [
	'ShopPush' 		=> [

		'html' 	=> 'Shop<span>Push</span>',
		'class' => 'shoppush',
		'text' 	=> 'Comunique-se com seu público, pelo navegador, por meio da nossa ferramenta de web push.<br><br>Rápido e com taxas de entrega superiores ao e-mail, o ShopPush é ideal para e-commerces e portais de notícias.',
		'url' 	=> URL.'shoppush.html',
		'img' 	=> 'macbook.png'

	],
	'ShopConvert' 	=> [

		'html' 	=> 'Shop<span>Convert</span>',
		'class' => 'shopconvert',
		'text' 	=> 'É a solução de overlays inteligentes de acordo com o comportamento do usuário, como a intenção de saída do site.<br><br>Eles agem imediatamente para reter, reengajar e converter com regras personalizadas.',
		'url' 	=> URL.'shopconvert.html',
		'img' 	=> 'macbook.png'

	],
	'ShopAlert' 	=> [

		'html' 	=> 'Shop<span>Alert</span>',
		'class' => 'shopalert',
		'text' 	=> 'Alertas que interagem com o seu público e estimulam uma tomada de ação imediata, como &quot;Restam 3 unidades deste produto. Compre já!&quot;.<br><br>Com isso, geramos um senso de urgência e incentivamos a conversão.',
		'url' 	=> URL.'shopalert.html',
		'img' 	=> 'macbook.png'

	],
	'ShopSmart' 	=> [

		'html' 	=> 'Shop<span>Smart</span>',
		'class' => 'shopsmart',
		'text' 	=> 'É uma vitrine com recomendação de produtos, baseada no comportamento do usuário, que aparece ao final da rolagem da página, melhorando a experiência de navegação e aumentando a conversão.',
		'url' 	=> URL.'shopsmart.html',
		'img' 	=> 'macbook.png'

	],
	'ShopAd' 		=> [

		'html' 	=> 'Shop<span>Ad</span>',
		'class' => 'shopad',
		'text' 	=> 'Rentabilize ainda mais cada venda do seu e-commerce, gerando receitas adicionais e recorrentes, com nossa ferramenta exclusiva de marketing transacional.',
		'url' 	=> URL.'shopad.html',
		'img' 	=> 'macbook.png'

	],
	'ShopImobi' 	=> [

		'html' 	=> 'Shop<span>Imobi</span>',
		'class' => 'shopimobi',
		'text' 	=> 'O ShopImobi é uma solução completa para o seu site, pois vai ajudar você a fechar ainda mais vendas!',
		'url' 	=> URL.'shopimobi.html',
		'img' 	=> 'macbook.png'

	],
	'ShopTarget' 	=> [

		'html' 	=> 'Shop<span>Target</span>',
		'class' => 'shoptarget',
		'text' 	=> 'É nossa solução de e-mail retargeting. Identificamos até 35% de todo o tráfego desconhecido do seu site e enviamos e-mails programados.<br><br>Personalize como quiser e recupere clientes perdidos.',
		'url' 	=> URL.'shoptarget.html',
		'img' 	=> 'macbook.png'

	]
];