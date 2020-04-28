<?php 
$plataform = [
	'Integração Customizada',
	'Google Tag Manager',
	'Shopify',
	'Magento,',
	'Woo Commerce',
	'Opencart',
	'PrestaShop',
	'Big Commerce',
	'Spree Commerce',
	'Squarespace',
	'Vtex',
	'Loja Integrada',
	'Peras Loja',
	'Iluria',
	'Rakuten',
	'Tray Commerce',
	'Cia Shop',
	'Dot Store',
	'Jet E-commerce',
	'EZ Commerce',
	'Xtech Commerce'
];
?>
<section class="section-plataform">
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<h4>Compatível com todas plataformas</h4>
				<ul>
					<?php foreach($plataform as $key => $plataform){ ?>
					<li>
						<figure>
							<img src="<?php echo URLAPP.'images/plataformas/'.($key+1).'.png' ?>" alt="<?php echo $plataform ?>">
						</figure>
						<span><?php echo $plataform ?></span>
					</li>
					<?php } ?>
				</ul>
				<a href="<?php echo URL ?>fale-conosco" class="btn">Fale Conosco</a>
			</div>
		</div>
	</div>
</section>