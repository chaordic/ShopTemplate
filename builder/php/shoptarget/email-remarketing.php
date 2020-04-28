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
									
									<a href="<?php echo $url; ?>" target="_blank" style="text-decoration: none; font-size: 0; color: <?php echo $retarget_title_color; ?>; font-family: <?php echo $font_family; ?>;">
								
										<span style="font-size: <?php echo $retarget_title_size; ?>; color: <?php echo $retarget_title_color; ?>; text-decoration: none; line-height: 45px; font-family: <?php echo $font_family; ?>; font-weight: 300;">
											
											Lorem ipsum, dolor sit amet, consectetur adipiscing elit.

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


<!--{produtos_2}-->
<tr>

	<td style="padding: 20px 15px 0 15px; font-size: 0;" align="center">

	<!--{produto_1}-->
		
		<!--[if mso]>

			<table cellpadding="0" cellspacing="0" border="0" align="center" width="646" style="border-collapse: collapse; -mso-table-rspace: 0; -mso-table-lspace: 0;">

				<tr>

					<td align="center" width="323">

		<![endif]-->

						<?php include('includes/product.php') ?>


					<!--[if mso]>
					
						</td>

					<![endif]-->

	<!--{/produto_1}-->

	<!--{produto_2}-->

					<!--[if mso]>

						<td align="center" width="323">

					<![endif]-->

						<?php include('includes/product.php') ?>


		<!--[if mso]>

					</td>

				</tr>

			</table>

		<![endif]-->

	<!--{/produto_2}-->

	</td>

</tr>

<!--{/produtos_2}-->

<?php
	if($banner_ret){
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