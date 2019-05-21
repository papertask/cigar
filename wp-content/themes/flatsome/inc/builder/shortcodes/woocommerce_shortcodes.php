<?php

$options = array(
	'per_page' => array(
		'type'    => 'slider',
            'heading' => '数量',
		'default' => '12',
		'max'     => '99',
		'min'     => '4',
	),
	'columns'  => array(
		'type'    => 'slider',
            'heading' => '列',
		'default' => '4',
		'max'     => '8',
		'min'     => '1',
	),
	'orderby'  => array(
		'type'    => 'select',
            'heading' => __( '排序方式' ),
		'default' => 'title',
		'options' => array(
			'menu_order' => '菜单顺序',
			'title'      => '标题',
			'date'       => '日期',
			'rand'       => '随机',
			//'id' => 'ID', // Valid but Disabled
		),
	),
	'order'    => array(
		'type'    => 'select',
		'heading' => __( '顺序' ),
		'default' => 'asc',
		'options' => array(
			'asc'  => '升序',
			'desc' => '降序',
		),
	),
);

$options_custom = array(
	'ids'      => array(
		'type'       => 'select',
        'heading' => '产品',
		'param_name' => 'ids',
		'config'     => array(
			'multiple'    => true,
            'placeholder' => '选择..',
			'postSelect'  => array(
				'post_type' => array( 'product' ),
			),
		),
	),
	'per_page' => array(
		'type'    => 'slider',
		'heading' => '数量',
		'default' => '12',
		'max'     => '99',
		'min'     => '4',
	),
	'columns'  => array(
		'type'    => 'slider',
		'heading' => '列',
		'default' => '4',
		'max'     => '8',
		'min'     => '1',
	),
	'orderby'  => array(
		'type'    => 'select',
		'heading' => __( '排序方式' ),
		'default' => 'title',
		'options' => array(
			'menu_order' => '菜单顺序',
			'title'      => '标题',
			'date'       => '日期',
			'rand'       => '随机',
			'price'      => '价格',
			'popularity' => '热门',
			'rating'     => '评分',
			//'id' => 'ID', // Valid but Disabled
		),
	),
	'order'    => array(
		'type'    => 'select',
		'heading' => __( '顺序' ),
		'default' => 'asc',
		'options' => array(
			'asc'  => '升序',
			'desc' => '降序',
		),
	),
);

add_ux_builder_shortcode( 'products',
	array(
		'name'      => '产品 - 自定义',
		'category'  => __( '商店' ),
		'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
		'wrap'      => false,
		'options'   => $options_custom,
	)
);

add_ux_builder_shortcode( 'featured_products',
	array(
		'name'      => '产品 - 推荐',
		'category'  => __( '商店' ),
		'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
		'wrap'      => false,
		'options'   => $options,
	)
);

add_ux_builder_shortcode( 'recent_products',
	array(
		'name'      => '产品 - 最新',
		'category'  => __( '商店' ),
		'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
		'wrap'      => false,
		'options'   => $options,
	)
);

add_ux_builder_shortcode( 'sale_products',
	array(
		'name'      => '产品 - 促销',
		'category'  => __( '商店' ),
		'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
		'wrap'      => false,
		'options'   => $options,
	)
);

add_ux_builder_shortcode( 'best_selling_products',
	array(
		'name'      => '产品 - 畅销',
		'category'  => __( '商店' ),
		'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
		'wrap'      => false,
		'options'   => $options,
	)
);

add_ux_builder_shortcode( 'top_rated_products',
	array(
		'name'      => '产品 - 好评',
		'category'  => __( '商店' ),
		'thumbnail' => flatsome_ux_builder_thumbnail( 'woo_products' ),
		'wrap'      => false,
		'options'   => $options,
	)
);
