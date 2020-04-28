<header class="header">
	<div class="container">
		<h1 class="ico linx-shopback"><?php echo TITLE; ?></h1>
		<nav class="navbar navbar-menu">
			<ul>
				<li>
					<a href="<?php echo URL; ?>produtos">
						<i></i> Produtos
					</a>
					<ul>
						<?php foreach($produtos as $produto => $produto_url){ ?>
						<li>
							<a href="<?php echo URL.'produto/'.$produto_url.'/'; ?>"><?php echo $produto ?></a>
						</li>
						<?php } ?>
					</ul>
				</li>
				<li>
					<a href="<?php echo URL; ?>quem-somos">Quem Somos</a>
				</li>
				<li>
					<a href="<?php echo URL; ?>Clientes">Clientes</a>
				</li>
				<li>
					<a href="<?php echo URL; ?>News">News</a>
				</li>
				<li>
					<a href="<?php echo URL; ?>login">Login</a>
				</li>
				<li>
					<a href="<?php echo URL; ?>trabalhe-conosco" class="color-orange">Estamos Contratando</a>
				</li>
				<li>
					<a href="<?php echo URL; ?>fale-conosco.html" class="color-orange">Fale Conosco</a>
				</li>
			</ul>
		</nav>
	</div>
</header>