<section class="section-produtos shadow-inset-top">
	<h3>Nossos Produtos</h3>
	<div class="navbar-products">
		<div class="container">
			<div class="row">	
				<div class="col-xs-12">
					<div class="owl-carousel">
						<?php 
						$i = 0;
						foreach($produtos as $produto => $info){
						?>
						<div class="product-menu product-menu-<?php echo $i; ?>">
							<a href="javascript:void(0);" class="<?php echo $info['class'] ?>">
								<strong><?php echo $info['html']; ?></strong>
							</a>
						</div>
						<?php $i++;} ?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="col-xs-12">
				<div class="products-info">
					<?php 
						$i = 0;
						foreach($produtos as $produto => $info){
					?>
					<div class="product-info product-info-<?php echo $i; ?> <?php echo $i == 0 ? 'active' : '' ?>" data-info="<?php echo $info['class'] ?>">
						<div class="product-description">
							<p><?php echo $info['text']; ?></p>
							<a href="<?php echo $info['url'] ?>" class="btn">Saiba Mais</a>
						</div>
					</div>
					<?php $i++;} ?>
				</div>
			</div>
		</div>
	</div>
</section>