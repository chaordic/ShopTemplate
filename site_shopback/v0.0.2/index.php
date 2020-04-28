<?php
include(__DIR__.'/system/config.php');
?>
<!DOCTYPE html>
<!--[if lt IE 7]><html lang="pt-BR" class="ie6 ie67"><![endif]-->
<!--[if IE 7]><html lang="pt-BR" class="ie7 ie67"><![endif]-->
<!--[if IE 8]><html lang="pt-BR" class="ie8"><![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js <?php echo $class; ?>" lang="pt-BR">
<!--<![endif]-->
<head>
<?php include(DIRPATHP.'/app/includes/structure/head.php'); ?>
</head>

<body class="bg-header">

	<?php include(DIRPATHP.'/app/includes/structure/header.php'); ?>

	<div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 textHeader">
				  <h1>
				    Aumente sua taxa de conversão em até <span class="color">35%?!</span>
				  </h1>
				  <p>
				    Tecnologia facilmente ativada em 5 minutos, e presente em mais de<br/> 1000 sites de todo o mundo, nossa avançada tecnologia é capaz de recuperar<br/> 98% dos consumidores que deixam sua loja sem realizar qualquer compra.
				  </p>
				  <p>
				    Sim, nós somos diferentes de tudo que você já viu!
				  </p>
				  <a href="<?php echo URL; ?>fale-conosco.html" class="btn">Fale Conosco</a>
				</div>
			</div>
		</div>
	</div>

	<main class="main">

		<?php include(DIRPATHP.'/app/includes/modules/midia.php'); ?>
		<?php include(DIRPATHP.'/app/includes/modules/produtos.php'); ?>
		<?php include(DIRPATHP.'/app/includes/modules/conversion.php'); ?>
		<?php include(DIRPATHP.'/app/includes/modules/clientes-bar.php'); ?>
		<?php include(DIRPATHP.'/app/includes/modules/clientes.php'); ?>
		<?php include(DIRPATHP.'/app/includes/modules/news.php'); ?>

	</main>

	<?php include(DIRPATHP.'/app/includes/modules/newsletter.php'); ?>

	<?php include(DIRPATHP.'/app/includes/structure/footer.php'); ?>

	<?php include(DIRPATHP.'/app/includes/structure/script.php'); ?>

</body>
</html>