<div class="row category-page-row">

	<div class="col large-3 hide-for-medium <?php flatsome_sidebar_classes(); ?>">
		<div id="shop-sidebar" class="sidebar-inner col-inner">
			<?php
			if(is_active_sidebar('shop-sidebar')) {
				dynamic_sidebar('shop-sidebar');
			} else{ echo '<p>你需要分配小工具到<strong>"商店侧边栏"</strong>。位于<a href="'.get_site_url().'/wp-admin/widgets.php">外观 > 小工具</a>，可以在这里显示任何东西</p>';
			}
			?>
		</div><!-- .sidebar-inner -->
	</div><!-- #shop-sidebar -->

	<div class="col large-9">
		<?php
		/**
		 * woocommerce_before_main_content hook
		 *
		 * @hooked woocommerce_output_content_wrapper - 10 (outputs opening divs for the content)
		 * @hooked woocommerce_breadcrumb - 20
		 */
		do_action( 'woocommerce_before_main_content' );
		?>

		<?php do_action( 'woocommerce_archive_description' ); ?>

		<?php if ( have_posts() ) : ?>

			<?php
			do_action( 'woocommerce_before_shop_loop' );
			?>

			<?php woocommerce_product_loop_start(); ?>

			<?php woocommerce_product_subcategories(); ?>

			<?php while ( have_posts() ) : the_post(); ?>

				<?php wc_get_template_part( 'content', 'product' ); ?>

			<?php endwhile; // end of the loop. ?>

			<?php woocommerce_product_loop_end(); ?>

			<?php
			/**
			 * woocommerce_after_shop_loop hook
			 *
			 * @hooked woocommerce_pagination - 10
			 */
			do_action( 'woocommerce_after_shop_loop' );
			?>

		<?php elseif ( ! woocommerce_product_subcategories( array( 'before' => woocommerce_product_loop_start( false ), 'after' => woocommerce_product_loop_end( false ) ) ) ) : ?>

			<?php wc_get_template( 'loop/no-products-found.php' ); ?>

		<?php endif; ?>

		<?php
		do_action('flatsome_products_after');
		/**
		 * woocommerce_after_main_content hook
		 *
		 * @hooked woocommerce_output_content_wrapper_end - 10 (outputs closing divs for the content)
		 */
		do_action( 'woocommerce_after_main_content' );
		?>

	</div>
</div>
