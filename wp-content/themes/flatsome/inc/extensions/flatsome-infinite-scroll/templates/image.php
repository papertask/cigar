<div class="page-load-status">
	<div class="loader-image infinite-scroll-request text-center">
		<?php if ( get_theme_mod( 'infinite_scroll_loader_img' ) ) : ?>
		<img class="archive-img-loader" alt="" src="<?php echo set_url_scheme( get_theme_mod( 'infinite_scroll_loader_img' ) ) ?>"/>
		<?php else : ?>
		<p>没有设置自定义加载</p>
		<?php endif ?>
	</div>
</div>
