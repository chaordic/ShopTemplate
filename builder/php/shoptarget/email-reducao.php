<?php
	include('includes/config.php');
?>
 <!DOCTYPE html>
 <html lang="pt-br">
  <?php include('includes/head.php') ?>
 <body>
 	
 	<!--[if mso]>

	<table cellpadding="0" cellspacing="0" border="0" align="center" width="680" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

		<tr>

			<td align="center" width="680">

<![endif]-->

				<table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" align="center" width="680" style="width: 100%; max-width: 680px;border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

<?php include('includes/header.php'); ?>

					 <tr>

	<td align="center">

		<!--[if mso]>

			<table cellpadding="0" cellspacing="0" border="0" align="center" width="680" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

				<tr>

					<td align="center" width="680">

		<![endif]-->

						<table cellpadding="0" cellspacing="0" border="0" align="center" width="680" style="width: 100%; max-width: 680px;border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

							<tr>
								
								<td style="padding: 30px 15px 20px 15px; text-align: center;" align="center">
									
									<a href="<?php echo $url; ?>" target="_blank" style="text-decoration: none; font-size: 0; color: <?php echo $reducao_title_color; ?>; font-family: <?php echo $font_family; ?>;">
								
										<span style="font-size: <?php echo $reducao_title_size; ?>; color: <?php echo $reducao_title_color; ?>; text-decoration: none; line-height: 34px; font-family: <?php echo $font_family; ?>; font-weight: 500;">
											
											<strong>Não espere pra concluir sua compra!<br>
											Prefere pagá-la com boleto bancário,<br>
											transferência ou PayPal?<br></strong>
											Garanta seus produtos!


										</span>

									</a>

								</td>

							</tr>

							

						</table>


		<!--[if mso]>

					</td>

				</tr>

			</table>

		<![endif]-->

	</td>

</tr>


<!--{produtos}-->
<tr>

	<td style="padding: 20px 15px 0 15px; font-size: 0;" align="center">
		
		<!--[if mso]>

			<table cellpadding="0" cellspacing="0" border="0" align="center" width="323" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

				<tr>

					<td align="center" width="323">

		<![endif]-->

						<div style="width: 100%;display: inline-block; outline: none; border: none; padding: 0 0 0 0; Margin: 0 0 0 0; vertical-align: middle; max-width: 323px;">
											
							<table cellpadding="0" cellspacing="0" border="0" align="center" width="323" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0; width: 100%; max-width: 323px;">

								<tr>

									<td height="303" align="center" style="padding: 0 0 0 0;">

										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: #a3aab9; font-family: <?php echo $font_family; ?>;">
						
											<img src="{produto_imagem}" alt="{produto_nome}" width="303" style="width: 100%;max-width: 303px; border: none; outline: none; margin: 0 0 0 0; display: block;">		

										</a>

									</td>

								</tr>

								<tr>

									<td height="50" valign="top" align="center" style="padding: 10px 0 10px 0;">

										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: <?php echo $prod_reducao_title_size; ?>; color: <?php echo $product_title_color ?>; font-family: <?php echo $font_family; ?>;">
						
											<span style="text-decoration: none;color: <?php echo $product_title_color ?>;font-family: <?php echo $font_family; ?> font-size: <?php echo $prod_reducao_title_size; ?>; font-weight: 400;">
												
												{produto_nome}
												
											</span>

										</a>

									</td>

								</tr>

								<?php if($cta_reducao){ ?>
								<tr>
									<td style="padding: 10px 20px 0 20px;text-align: center;" align="center">
										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: #333333; font-family: <?php echo $font_family; ?>;">

											<img src="<?php echo $folder.$cta_reducao_img; ?>" alt="{produto_nome}" width="<?php echo $cta_reducao_wid; ?>" style="width: 100%;max-width: <?php echo $cta_reducao_wid; ?>px; border: none; outline: none; margin: 0 auto; display: block;">

										</a>
									</td>
								</tr>
								<?php } ?>

							</table>

						</div>


					<!--[if mso]>

					</td>

				</tr>

			</table>

		<![endif]-->

	</td>

</tr>

<!--{/produtos}-->

<?php
	if($banner_red){
		include('includes/banner.php');
	}
?>

<?php include('includes/recomendacao.php'); ?>
<?php include('includes/footer.php'); ?>

				</table>

<!--[if mso]>

			</td>

		</tr>

	</table>

<![endif]-->

 </body>
 </html>