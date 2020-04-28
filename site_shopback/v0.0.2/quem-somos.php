<?php
include(__DIR__.'/system/config.php');

$title = 'Quem Somos - '.TITLE2;
$description = '';
$class = 'page-about';
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

<body class="bg-header-about">

	<?php include(DIRPATHP.'/app/includes/structure/header.php'); ?>

	<main class="main">
		<section class="section-about">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h2>Quem Somos</h2>
						<p>
							Idealizada por sócios que respiram conversão desde os primórdios da internet la em 1995, a ShopBack teve o inicio de seu desenvolvimento em Outubro de 2013. Cansado das "mesmices" do mercado, a ideia era justamente lançar uma plataforma totalmente única e diferente do que todo o mercado já estava fazendo.<br>
							<br>
							Premissa básica: nossos clientes investem milhões em mídia por ano para trazer usuários ao site, porem nem 1/10 desse investimento é destinado a retenção desses mesmos potenciais usuarios que visitam o site e abandonam sem nem deixar rastros.<br>
							<br>
							Nascida oficialmente em Outubro de 2014, a ShopBack entrava no mercado como uma exclusiva multi-plataforma "SaaS" focada na retenção, re-engajamento e recaptura dos 98% dos usuários que abandonam seu site sem converter. E justamente após quase um ano de desenvolvimento, descobrimos que desenvolvemos um produto realmente excepcional, tão excepcional que era tão complexo para implementar que so bastava chamar o Bill Gates (ou nosso time de dev) que ele conseguiria!<br>
							<br>
							Exatamente, se você conhece alguma start-up que nasceu perfeita nos apresente esse fato inédito!!<br>
							<br>
							Realizando essa falha, decidimos refazer totalmente esse 1 ano de trabalho em 5 meses! Cargas horárias de trabalho dobradas, noites em claro, pizzas gordurosas na madrugada e por ai renascemos novamente em Fevereiro de 2015, voando como o Romario em 94!
						</p>
						<figure><img src="<?php echo URLAPP ?>images/about-1.png" alt=""></figure>
						<p>
							Extremamente fácil de implementar e ativar, até no site de nossas avós é possivel fazer em 5 minutos! Montamos um time pronto para ajuda-los nisso e em todo o setup (se você precisar), layout e ativação da plataforma sem custos! Queremos ver você tão feliz como nossos outros clientes!<br>
							<br>
							Enfim, voltando a nossa historia, as cargas dobradas e as noites em claro continuam ja as pizzas gordurosas menos pois queremos estar aqui para vocês por bastante tempo (substituímos por sushi)! Mas o melhor de tudo é que dia a dia pensamos e lançamos produtos e soluções únicas no mercado de forma a otimizar e aumentar sua taxa de conversão, pois queremos nossos clientes vendendo mais!<br>
							<br>
							São tantas soluções novas que muitas vezes nem nosso site consegue acompanhar nosso time de desenvolvimento! Somos o "The Flash" da inovação!! Então nos pergunte as novidades constantemente, please!!<br>
							<br>
							Entre já para nossa seleção com mais de 900 clientes pelo mundo! Nosso time esta pronto para te provar que sim, somos diferentes de tudo que você ja viu!
						</p>
						<a href="<?php echo URL; ?>fale-conosco.html" class="btn">Fale Conosco</a>
					</div>
				</div>
			</div>
		</section>
		<?php include(DIRPATHP.'/app/includes/modules/produtos.php'); ?>
	</main>

	<?php include(DIRPATHP.'/app/includes/modules/newsletter.php'); ?>

	<?php include(DIRPATHP.'/app/includes/structure/footer.php'); ?>

	<?php include(DIRPATHP.'/app/includes/structure/script.php'); ?>

</body>
</html>