<?php
include(__DIR__.'/system/config.php');

$title = 'Página não encontrada - '.TITLE2;
$description = 'A página que você solicitou não foi encontrada.';
$class = 'page-404';
?>
<!DOCTYPE html>
<!--[if lt IE 7]><html lang="pt-BR" class="ie6 ie67"><![endif]-->
<!--[if IE 7]><html lang="pt-BR" class="ie7 ie67"><![endif]-->
<!--[if IE 8]><html lang="pt-BR" class="ie8"><![endif]-->
<!--[if gt IE 8]><!-->
<html class="no-js <?=$class?>" lang="pt-BR">
<!--<![endif]-->
<head>
<?php include(DIRPATHP.'/app/includes/structure/header.php'); ?>
</head>

<body>

	<?php include(DIRPATHP.'/app/includes/structure/header.php'); ?>

	<main class="main">

		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="text-center">
						<h2>Página não encontrada</h2>
						<p>&nbsp;</p>
						<p>A página que você acessou infelizmente não foi encontrada.</p>

						<p>Caso o erro persista, entre em contato conosco <a href="<?php echo URL; ?>fale-conosco.html">aqui</a><br>
						ou pelo telefone +55 11 2364-7974<br><br>
						Agradecemos pela colaboração.</p>
					</div>
				</div>
			</div>
		</div>

	</main>

	<?php include(DIRPATHP.'/app/includes/structure/footer.php'); ?>

	<?php include(DIRPATHP.'/app/includes/structure/script.php'); ?>

</body>
</html>