<div style="width: 100%;display: inline-block; outline: none; border: none; padding: 0 0 0 0; Margin: 0 0 0 0; vertical-align: middle; max-width: 323px;">

	<table cellpadding="0" cellspacing="0" border="0" align="center" width="323" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0; width: 100%; max-width: 323px;">

		<tr>

			<td height="303" align="center" style="padding: 0 10px;">

				<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: #333333; font-family: <?php echo $font_family; ?>;">

					<img src="{produto_imagem}" alt="{produto_nome}" width="303" style="width: 100%;max-width: 303px; border: none; outline: none; margin: 0 0 0 0; display: block;">

				</a>

			</td>

		</tr>

		<tr>

			<td height="50" valign="top" align="center" style="padding: 10px;">

				<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: <?php echo $prod_remarketing_title_size; ?>; color: <?php echo $product_title_color; ?>; font-family: <?php echo $font_family; ?>;">

					<span style="text-decoration: none;color: <?php echo $product_title_color; ?>;font-family: <?php echo $font_family; ?>; font-size: <?php echo $prod_remarketing_title_size; ?>; font-weight: bold;">

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

					<span style="text-decoration: none;color: <?php echo $product_price_old_color; ?>;font-family: <?php echo $font_family; ?>; font-size: <?php echo $prod_remarketing_price_old_size; ?>; font-weight: normal;">
						
						R$ {preco}
						
					</span>

					<!--{/produto_promocao}-->

				</a>

			</td>

		</tr>
		<?php } ?>

		<tr>

			<td style="font-size: <?php echo $prod_remarketing_price_size; ?>;padding: 0 10px;" align="center">

				<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: <?php echo $prod_remarketing_price_size; ?>; color: <?php echo $product_price_color; ?>; font-family: <?php echo $font_family; ?>;font-weight: normal;">

					<?php echo $product_price_before; ?>

					<span style="display: inline;text-decoration: none;color: <?php echo $product_price_color; ?>;font-family: <?php echo $font_family; ?>; font-size: <?php echo $prod_remarketing_price_size; ?>; font-weight: bold;">

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

					<span style="text-decoration: none;color: <?php echo $product_installments_color; ?>;font-family: <?php echo $font_family; ?>; font-size: <?php echo $prod_remarketing_installments_size; ?>; font-weight: 400;">
						
						<?php echo $product_installments_text; ?>
						
					</span>

					<!--{/produto_parcelas}-->

				</a>

			</td>

		</tr>
		<?php } ?>

		<tr>
			<td style="padding: 10px 20px 0 20px;text-align: center;" align="center">
				<a href="{produto_link}" target="_blank" style="text-decoration: none; font-size: 0; color: #333333; font-family: <?php echo $font_family; ?>;">

					<img src="<?php echo $folder.$cta_remark_img; ?>" alt="{produto_nome}" width="<?php echo $cta_remark_wid; ?>" style="width: 100%;max-width: <?php echo $cta_remark_wid; ?>px; border: none; outline: none; margin: 0 auto; display: block;">

				</a>
			</td>
		</tr>

	</table>

</div>