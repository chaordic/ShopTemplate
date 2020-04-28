<tr>
	
	<td align="center" style="padding-top: 50px;">

		<!--[if mso]>

			<table cellpadding="0" cellspacing="0" border="0" align="center" width="612" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

				<tr>

					<td align="center" width="612">

		<![endif]-->

						<table cellpadding="0" cellspacing="0" border="0" align="center" width="612" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0; width: 100%; max-width: 612px;">

								<tr>

									<td align="center" style="padding: 10px 15px 10px 15px;border-bottom: 1px solid #eee;">

										<a href="<?php echo $url; ?>" target="_blank" style="text-decoration: none; font-size: <?php echo $recomendacao_title_size; ?>; color: <?php echo $recomendacao_title_color; ?>; font-family: <?php echo $font_family; ?>;">

											<span style="font-size: <?php echo $recomendacao_title_size; ?>; text-transform: none; font-family: <?php echo $font_family; ?>; font-weight: 600; color: <?php echo $recomendacao_title_color; ?>;">
												
												Veja mais alguns produtos que selecionamos para você!

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

<tr>
	
	<td style="font-size: 0; padding: 20px 0 20px 0;" align="center">

	<!-- {recomendacao_9} -->

		<!--[if mso]>

			<table cellpadding="0" cellspacing="0" border="0" align="left" width="200" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

				<tr>

					<td align="center" width="200">

		<![endif]-->
		
						<div style="width: 100%;display: inline-block; outline: none; border: none; padding: 0 0 0 0; margin: 0 0 0 0; vertical-align: middle; max-width: 200px;">
															
							<table cellpadding="0" cellspacing="0" border="0" align="center" width="200" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0; width: 100%; max-width: 200px;">

								<tr>

									<td height="201" align="center" style="padding: 0 10px;">

										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: #333333; font-family: <?php echo $font_family; ?>;">

											<img src="{produto_imagem}" alt="{produto_nome}" width="180" style="width: 100%;max-width: 180px; border: none; outline: none; margin: 0 0 0 0; display: block;">

										</a>

									</td>

								</tr>

								<tr>

									<td height="50" valign="top" align="center" style="padding: 10px;">

										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: <?php echo $prod_recomend_title_size; ?>; color: <?php echo $product_title_color; ?>; font-family: <?php echo $font_family; ?>;">

											<span style="text-decoration: none;color: <?php echo $product_title_color; ?>;font-family: <?php echo $font_family; ?>; font-size: <?php echo $prod_recomend_title_size; ?>; font-weight: bold;">

												{produto_nome}

											</span>

										</a>

									</td>

								</tr>

								<?php if($product_price_old){ ?>
								<tr>
									
									<td height="30" style="font-size: 0;padding: 0 10px;" align="center">
										
										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: <?php echo $product_price_old_color; ?>; font-family: <?php echo $font_family; ?>;">
								
											<!--{produto_promocao}-->

											<span style="text-decoration: none;color: <?php echo $product_price_old_color; ?>;font-family: <?php echo $font_family; ?>; font-size: <?php echo $prod_recomend_price_old_size; ?>; font-weight: 400;">
												
												R$ {preco}
												
											</span>

											<!--{/produto_promocao}-->

										</a>

									</td>

								</tr>
								<?php } ?>

								<tr>

									<td style="font-size: <?php echo $prod_recomend_price_size; ?>;padding: 0 10px;" align="center">

										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: <?php echo $prod_recomend_price_size; ?>; color: <?php echo $product_price_color; ?>; font-family: <?php echo $font_family; ?>;font-weight: normal;">

											<?php echo $product_price_before; ?>

											<span style="display: inline;text-decoration: none;color: <?php echo $product_price_color; ?>;font-family: <?php echo $font_family; ?>; font-size: <?php echo $prod_recomend_price_size; ?>; font-weight: bold;">

												R$ {produto_preco}

											</span>

										</a>

									</td>

								</tr>

								<?php if($product_installments){ ?>

								<tr>
									
									<td height="30" style="font-size: 0;padding: 0 10px;" align="center">
										
										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: <?php echo $product_installments_color; ?>; font-family: <?php echo $font_family; ?>;">
								
											<!--{produto_parcelas}-->

											<span style="text-decoration: none;color: <?php echo $product_installments_color; ?>;font-family: <?php echo $font_family; ?>; font-size: <?php echo $prod_recomend_installments_size; ?>; font-weight: 400;">
												
												<?php echo $product_installments_text; ?>
												
											</span>

											<!--{/produto_parcelas}-->

										</a>

									</td>

								</tr>
								<?php } ?>

								<?php if($cta_recomend){ ?>
								<tr>
									<td style="padding: 10px 0 0 0;text-align: center;" align="center">
										<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: #333333; font-family: <?php echo $font_family; ?>;">

											<img src="<?php echo $folder.$cta_recomend_img; ?>" alt="{produto_nome}" width="<?php echo $cta_recomend_wid; ?>" style="width: 100%;max-width: <?php echo $cta_recomend_wid; ?>px; border: none; outline: none; margin: 0 auto; display: block;">

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

		<!-- {/recomendacao_9} -->

	</td>

</tr>