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
									
									<a href="<?php echo $cta_abandono_url; ?>" target="_blank" style="text-decoration: none; font-size: 0; color: <?php echo $abandono_title_color; ?>; font-family: <?php echo $font_family; ?>;">
								
										<span style="font-size: <?php echo $abandono_title_size ?>; color: <?php echo $abandono_title_color; ?>; text-decoration: none; line-height: 34px; font-family: <?php echo $font_family; ?>; font-weight: 500;">

											<strong>Não espere para finalizar sua compra!<br>
											Prefere pagá-la com boleto bancário, transferência ou PayPal?<br></strong>
											Garanta já seus produtos!

										</span>

									</a>

								</td>

							</tr>

							<?php if($cta_abandono){ ?>
							<tr>
								<td style="padding: 10px 20px 0 20px;text-align: center;" align="center">
									<a href="<?php echo $cta_abandono_url; ?>" target="_blank" style="text-decoration: none; font-size: 0; color: #333333; font-family: <?php echo $font_family; ?>;">

										<img src="<?php echo $folder.$cta_abandono_img; ?>" alt="{produto_nome}" width="<?php echo $cta_abandono_wid; ?>" style="width: 100%;max-width: <?php echo $cta_abandono_wid; ?>px; border: none; outline: none; margin: 0 auto; display: block;">

									</a>
								</td>
							</tr>
							<?php } ?>

							

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
	
	<td bgcolor="#ffffff" style="padding: 20px 15px 20px 15px; font-size: 0;" align="center">

		<!--[if mso]>

		<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

			<tr>

				<td align="center" width="192">

		<![endif]-->

					<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0; width: 100%; max-width: 640px;">

						<tr>

							<td align="center" style="border-bottom: solid 1px #ebebeb; padding: 30px 0 0 0;">

								<!--[if mso]>

								<table cellpadding="0" cellspacing="0" border="0" align="center" width="640" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

									<tr>

										<td valign="bottom" align="center" width="192">

								<![endif]-->

											<div style="width: 100%; max-width: 192px; display: inline-block; outline: none; border: none; padding: 0 0 0 0; vertical-align: middle;">
												
												<table cellpadding="0" cellspacing="0" border="0" align="center" width="192" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0; width: 100%; max-width: 192px;">

													<tr>

														<td align="center">

															<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: #a3aab9; font-family: <?php echo $font_family; ?>;">
																	
																<img width="172" src="{produto_imagem}" alt="{produto_nome}" style="width: 100%;max-width: 172px; border: none; outline: none; margin: 0 0 0 0; display: block;">

															</a>

														</td>

													</tr>

												</table>

											</div>

								<!--[if mso]>

										</td>

										<td align="center" width="256">

								<![endif]-->

											<div style="width: 100%; max-width: 256px; display: inline-block; outline: none; border: none; padding: 0 0 0 0; vertical-align: middle;">
												
												<table cellpadding="0" cellspacing="0" border="0" align="center" width="256" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0; width: 100%; max-width: 256px;">

													<tr>

														<td align="left" style="padding: 10px 15px 10px 15px;">

															<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: <?php echo $prod_abandono_title_size; ?>; color: <?php echo $product_title_color; ?>; font-family: <?php echo $font_family; ?>;">
																	
																<span style="font-weight: 500; font-size: <?php echo $prod_abandono_title_size; ?>; color: <?php echo $product_title_color; ?>; font-family: <?php echo $font_family; ?>;">
																	
																	{produto_nome}

																</span>

															</a>

														</td>

													</tr>

												</table>

											</div>

								<!--[if mso]>

										</td>

										<td align="center" width="192">

								<![endif]-->

											<div style="width: 100%; max-width: 192px; display: inline-block; outline: none; border: none; padding: 0 0 0 0; vertical-align: middle;">
												
												<table cellpadding="0" cellspacing="0" border="0" align="center" width="192" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0; width: 100%; max-width: 192px;">

													<tr>

														<td align="left" style="padding: 0 15px 0 15px;">

															<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: <?php echo $product_price_color; ?>; font-family: <?php echo $font_family; ?>;">
																	
																<span style="font-size: <?php echo $prod_abandono_price_size; ?>;font-weight: 900 ; color: <?php echo $product_price_color; ?>; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
																	
																	R$ {produto_preco}

																</span>

															</a>

														</td>

													</tr>

												</table>

											</div>

								<!--[if mso]>

										</td>

									</tr>

								</table>

								<![endif]-->

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

<!--{/produtos}-->

<?php
	if($banner_aba){
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