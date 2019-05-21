<?php

Flatsome_Option::add_section( 'fl-portfolio', array(
'title'       => __( 'Portfolio', 'flatsome-admin' ),
) );

Flatsome_Option::add_field( 'option',  array(
	'type'        => 'select',
	'settings'     => 'featured_items_page',
	'label'       => __( 'Custom Portfolio Page', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default'     => false,
	'choices'     => $list_pages
));

Flatsome_Option::add_field( '', array(
    'type'        => 'custom',
    'settings' => 'custom_title_save_permalinks',
    'label'       => __( '', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
    'default'     => '你需要点击<strong>"保存并发布"</strong>然后<strong>"更新固定链接"</strong>按钮确保它正常工作！<br><br> <a class="button" href="'.admin_url().'options-permalink.php?settings-updated=true" target="_blank">更新固定链接</a>',
) );


Flatsome_Option::add_field( '', array(
    'type'        => 'custom',
    'settings' => 'custom_title_portfolio_single',
    'label'       => __( '', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
    'default'     => '<div class="options-title-divider">单个页面</div>',
) );

// Single Posts
Flatsome_Option::add_field( 'option',  array(
	'type'        => 'radio-image',
	'settings'     => 'portfolio_layout',
	'label'       => __( 'Single Portfolio Layout', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default' 	  => '',
	'transport'   => $transport,
	'choices'     => array(
		'' => $image_url . 'portfolio.svg',
		'sidebar-right' => $image_url . 'portfolio-sidebar-right.svg',
		'top' => $image_url . 'portfolio-top.svg',
		'top-full' => $image_url . 'portfolio-top-full.svg',
		'bottom' => $image_url . 'portfolio-bottom.svg',
		'bottom-full' => $image_url . 'portfolio-bottom-full.svg',
	),
));

Flatsome_Option::add_field( 'option',  array(
  'type'        => 'checkbox',
  'settings'     => 'portfolio_title_transparent',
  'label'       => __( 'Transparent Header', 'flatsome-admin' ),
  'section'     => 'fl-portfolio',
  'default' => 0
));

Flatsome_Option::add_field( 'option',  array(
	'type'        => 'radio-image',
	'settings'     => 'portfolio_title',
	'label'       => __( 'Single Portfolio Title', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default' 	  => '',
	'transport'   => $transport,
	'choices'     => array(
		'' => $image_url . 'portfolio-title.svg',
		'featured' => $image_url . 'portfolio-title-featured.svg',
		'breadcrumbs' => $image_url . 'portfolio-title-breadcrumbs.svg',
	),
));

Flatsome_Option::add_field( 'option', array(
	'type'     => 'checkbox',
	'settings' => 'portfolio_share',
	'label'    => __( 'Show share icons', 'flatsome' ),
	'section'  => 'fl-portfolio',
	'default'  => 1,
) );

Flatsome_Option::add_field( 'option',  array(
  'type'        => 'checkbox',
  'settings'     => 'portfolio_related',
  'label'       => __( 'Show related items', 'flatsome-admin' ),
  'section'     => 'fl-portfolio',
  'default' => 1
));

Flatsome_Option::add_field( 'option',  array(
  'type'        => 'checkbox',
  'settings'     => 'portfolio_next_prev',
  'label'       => __( 'Show Next/Prev navigation', 'flatsome-admin' ),
  'section'     => 'fl-portfolio',
  'default' => 1
));



Flatsome_Option::add_field( '', array(
    'type'        => 'custom',
    'settings' => 'custom_title_portfolio_archive',
    'label'       => __( '', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
    'default'     => '<div class="options-title-divider">归档页面</div>',
) );

Flatsome_Option::add_field( 'option',  array(
	'type'        => 'radio-image',
	'settings'     => 'portfolio_style',
	'label'       => __( 'Portfolio Style', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default' 	  => '',
	'transport'   => $transport,
	'choices'     => array(
		'' => $image_url . 'portfolio-simple.svg',
		'overlay' => $image_url . 'portfolio-overlay.svg',
		'shade' => $image_url . 'portfolio-shade.svg',
	),
));

Flatsome_Option::add_field( 'option',  array(
  'type'        => 'select',
  'settings'     => 'portfolio_height',
  'label'       => __( 'Image height', 'flatsome-admin' ),
  'section'     => 'fl-portfolio',
  'default'     => 0,
  'choices'     => array(
     0   => '自动',
    '50%' => '1:2 (宽)',
    '75%' => '4:3 (长方形)',
    '56%' => '16:9 (宽屏)',
    '100%' => '1:1 (正方形)',
    '125%' => '竖长方形 ',
    '100%' => '2:1 (高大)',
  ),
));


Flatsome_Option::add_field( 'option',  array(
	'type'        => 'radio-image',
	'settings'     => 'portfolio_archive_title',
	'label'       => __( 'Archive Portfolio Title', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default' 	  => '',
	'transport'   => $transport,
	'choices'     => array(
		'' => $image_url . 'portfolio-title.svg',
		'featured' => $image_url . 'portfolio-title-featured.svg',
		'breadcrumbs' => $image_url . 'portfolio-title-breadcrumbs.svg',
	),
));

Flatsome_Option::add_field( 'option',  array(
	'type'        => 'checkbox',
	'settings'     => 'portfolio_archive_title_transparent',
	'label'       => __( 'Transparent Header', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default' => 0
));

Flatsome_Option::add_field( 'option',  array(
    'type'        => 'image',
    'settings'     => 'portfolio_archive_bg',
    'label'       => __( 'Portfolio Header Background', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default'     => "",
));


Flatsome_Option::add_field( 'option',  array(
	'type'        => 'radio-buttonset',
	'settings'     => 'portfolio_archive_filter',
	'label'       => __( 'Filter Navigation', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default'     => 'left',
	'choices'     => array(
		''		=> '左',
		'center' => '中',
		'disabled' => '禁用'
	),
	'transport' => $transport,
));

Flatsome_Option::add_field( 'option',  array(
	'type'        => 'radio-image',
	'settings'     => 'portfolio_archive_filter_style',
	'label'       => __( 'Filter Nav style', 'flatsome-admin' ),
	'section'     => 'fl-portfolio',
	'default' 	  => 'line-grow',
	'transport' => $transport,
	'choices'     => $nav_styles_img
));




function flatsome_refresh_portfolio_partials( WP_Customize_Manager $wp_customize ) {

  // Abort if selective refresh is not available.
  if ( ! isset( $wp_customize->selective_refresh ) ) {
      return;
  }
	$wp_customize->selective_refresh->add_partial( 'portfolio-single-layout', array(
		'selector' => '.portfolio-single-page',
		'settings' => array('portfolio_style','portfolio_layout','portfolio_title'),
		'render_callback' => function() {
		    get_template_part('template-parts/portfolio/single-portfolio', flatsome_option('portfolio_layout'));
		},
	) );

	$wp_customize->selective_refresh->add_partial( 'portfolio-archive-layout', array(
		'selector' => '.portfolio-archive',
		'settings' => array('portfolio_archive_title','portfolio_archive_filter','portfolio_style','portfolio_archive_filter_style'),
		'render_callback' => function() {
		    get_template_part('template-parts/portfolio/archive-portfolio', flatsome_option('portfolio_archive_layout'));
		},
	) );


}
add_action( 'customize_register', 'flatsome_refresh_portfolio_partials' );
