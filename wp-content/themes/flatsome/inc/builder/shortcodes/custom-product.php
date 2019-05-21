<?php

$sizes = array(
    'xxsmall' => '极小',
    'xsmall' => '超小',
    'smaller' => '更小',
    'small' => '小',
    '' => '正常',
    'large' => '大',
    'larger' => '很大',
    'xlarge' => '超大',
    'xxlarge' => '极大',
);

add_ux_builder_shortcode( 'ux_product_gallery', array(
    'name' => __( '产品相册' ),
    'category' => __( '产品页面' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'overlay'   => true,
	'wrap'      => true,
	'priority'  => 9999,
	'options'   => array(
		'style' => array(
			'type'    => 'select',
        'heading' => '风格',
			'default' => 'normal',
			'options' => array(
				'normal'     => __( 'Normal', 'flatsome-admin' ),
				'vertical'   => __( 'Vertical', 'flatsome-admin' ),
				'full-width' => __( 'Full Width', 'flatsome-admin' ),
			),
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_title', array(
    'name' => __( '产品标题' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
    'category' => __( '产品页面' ),
	'options'   => array(
		'size'      => array(
			'type'    => 'select',
        'heading' => '大小',
			'default' => '',
			'options' => $sizes,
		),
		'divider'   => array(
			'type'    => 'checkbox',
			'heading' => '分隔',
			'default' => 'true',
		),
		'uppercase' => array(
			'type'    => 'checkbox',
			'heading' => '大写',
			'default' => 'false',
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_rating', array(
	'name'      => __( '产品评分' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'wrap'      => false,
	'category'  => __( '产品页面' ),
	'options'   => array(
		'count'      => array(
			'type'    => 'checkbox',
			'heading' => '评价计数',
			'default' => 'false',
		),
		'style'      => array(
			'type'    => 'select',
			'heading' => '评价计数风格',
			'default' => 'inline',
			'options' => array(
				'tooltip' => __( '提示', 'flatsome-admin' ),
				'stacked' => __( '堆叠', 'flatsome-admin' ),
				'inline'  => __( '内联', 'flatsome-admin' ),
			),
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_price', array(
	'name'      => __( '产品价格' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'wrap'      => false,
	'category'  => __( '产品页面' ),
	'options'   => array(
		'size' => array(
			'type'    => 'select',
			'heading' => '大小',
			'default' => '',
			'options' => $sizes,
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_excerpt', array(
    'name' => __( '产品简述' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'wrap'      => false,
    'category' => __( '产品页面' ),
) );


add_ux_builder_shortcode( 'ux_product_add_to_cart', array(
    'name' => __( '产品添加到购物车' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
    'category' => __( '产品页面' ),
	'options'   => array(
		'style' => array(
			'type'    => 'select',
        'heading' => '表单风格',
			'default' => 'normal',
			'options' => array(
            'normal' => __( '正常', 'flatsome-admin' ),
            'flat' => __( '扁平', 'flatsome-admin' ),
			),
		),
		'size'  => array(
			'type'    => 'select',
        'heading' => '大小',
			'default' => '',
			'options' => $sizes,
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_meta', array(
    'name' => __( '产品元' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
    'category' => __( '产品页面' ),
) );

add_ux_builder_shortcode( 'ux_product_upsell', array(
    'name' => __( '产品上市' ),
    'category' => __( '产品页面' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'options'   => array(
		'style' => array(
			'type'    => 'select',
      'heading' => '风格',
			'default' => 'sidebar',
			'options' => array(
          'sidebar' => __( '列表', 'flatsome-admin' ),
          'grid' => __( '网格', 'flatsome-admin' ),
			),
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_tabs', array(
    'name' => __( '产品选项卡' ),
    'category' => __( '产品页面' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'options'   => array(
		'style' => array(
			'type'    => 'select',
      'heading' => '风格',
			'default' => 'tabs',
			'options' => array(
				'tabs'          => __( 'Line Tabs', 'flatsome-admin' ),
				'tabs_normal'   => __( 'Tabs Normal', 'flatsome-admin' ),
				'line-grow'     => __( 'Line Tabs - Grow', 'flatsome-admin' ),
				'tabs_vertical' => __( 'Tabs vertical', 'flatsome-admin' ),
				'tabs_pills'    => __( 'Pills', 'flatsome-admin' ),
				'tabs_outline'  => __( 'Outline', 'flatsome-admin' ),
				'sections'      => __( 'Sections', 'flatsome-admin' ),
				'accordian'     => __( 'Accordian', 'flatsome-admin' ),
			),
		),
		'align' => array(
			'type'    => 'select',
        'heading' => '对齐',
			'default' => 'left',
			'options' => array(
				'left'   => __( 'Left', 'flatsome-admin' ),
				'center' => __( 'Center', 'flatsome-admin' ),
				'right'  => __( 'Right', 'flatsome-admin' ),
			),
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_related', array(
    'name' => __( '产品相关' ),
    'category' => __( '产品页面' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'options'   => array(
		'style' => array(
			'type'    => 'select',
      'heading' => '风格',
			'default' => 'slider',
			'options' => array(
        'slider' => __( '幻灯片', 'flatsome-admin' ),
        'grid' => __( '网格', 'flatsome-admin' ),
			),
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_hook', array(
    'name' => __( '产品钩子' ),
    'category' => __( '产品页面' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'options'   => array(
		'hook' => array(
			'type'    => 'select',
      'heading' => '钩子',
			'default' => 'woocommerce_single_product_summary',
			'options' => apply_filters( 'flatsome_custom_product_single_product_hooks', array(
				'woocommerce_before_single_product_summary' => 'woocommerce_before_single_product_summary',
				'woocommerce_single_product_summary'        => 'woocommerce_single_product_summary',
				'woocommerce_after_single_product_summary'  => 'woocommerce_after_single_product_summary',
				'flatsome_custom_single_product_1'          => 'flatsome_custom_single_product_1',
				'flatsome_custom_single_product_2'          => 'flatsome_custom_single_product_2',
				'flatsome_custom_single_product_3'          => 'flatsome_custom_single_product_3',
			) ),
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_breadcrumbs', array(
    'name' => __( '产品面包屑导航' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
    'category' => __( '产品页面' ),
	'options'   => array(
		'size' => array(
			'type'    => 'select',
        'heading' => '大小',
			'default' => '',
			'options' => $sizes,
		),
	),
) );

add_ux_builder_shortcode( 'ux_product_next_prev_nav', array(
	'name'      => __( '产品下一个/上一个' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
	'category'  => __( '产品页面' ),
	'options'   => array(
		'class' => array(
			'type'    => 'textfield',
			'heading' => 'Class',
			'default' => '',
		),
	),
) );
