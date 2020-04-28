<?php
include(__DIR__.'/system/config.php');

$title = 'Fale Conosco - '.TITLE2;
$description = '';
$class = 'page-contact';
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

<body class="bg-header-contact">

	<?php include(DIRPATHP.'/app/includes/structure/header.php'); ?>

	<main class="main">
		<section class="section-contact">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h2>Fale Conosco</h2>
						<p>Nós estamos prontos para te ajudar, entre em contato.</p>

						<form action="#" class="form">
							<div class="row">
								<div class="col-lg-5 col-lg-offset-1 col-md-6 col-xs-12">
									<div class="contact-block">
										<h5>Entre em contato</h5>
										<p>Telefone: +55 11 2364-7974</p>
										<div>
											<label>
												<span>Acessos Mensais*</span>
												<select name="Acessos Mensais" required>
													<option value=""></option>
												</select>
											</label>

											<label>
												<span>E-mail*</span>
												<input type="email" name="Email" required>
											</label>

											<label>
												<span>Nome*</span>
												<input type="text" name="Nome" required>
											</label>

											<label>
												<span>Site*</span>
												<input type="text" name="Site" required>
											</label>

											<label>
												<span>Telefone*</span>
												<input type="text" name="Telefone" required>
											</label>

											<label>
												<span>Mensagem*</span>
												<textarea name="Mensagem" required></textarea>
											</label>
										</div>
									</div>
								</div>
								<div class="col-lg-5 col-md-6 col-xs-12">
									<div class="contact-block">
										<h5>Onde Estamos</h5>
										<p>R Fidêncio Ramos, 195, cj. 71 - Vila Olímpia, São Paulo - SP 04551-010</p>
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.264659040307!2d-46.6871244854417!3d-23.594839484666263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574f529e3473%3A0x59665b36cd7f8c7d!2sShopBack!5e0!3m2!1sen!2sbr!4v1525719328075" frameborder="0" class="googlemaps" allowfullscreen></iframe>
									</div>
								</div>
							</div>
							<button type="submit" class="btn">Enviar</button>
						</form>

					</div>
				</div>
			</div>
		</section>
	</main>

	<?php include(DIRPATHP.'/app/includes/modules/newsletter.php'); ?>

	<?php include(DIRPATHP.'/app/includes/structure/footer.php'); ?>

	<?php include(DIRPATHP.'/app/includes/structure/script.php'); ?>

</body>
</html>