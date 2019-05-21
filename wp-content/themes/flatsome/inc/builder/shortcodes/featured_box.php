<?php

add_ux_builder_shortcode( 'featured_box',
	array(
		'type'      => 'container',
    'name' => __( '图标框' ),
    'category' => __( '内容' ),
		'thumbnail' => flatsome_ux_builder_thumbnail( 'icon_box' ),
		'wrap'      => false,
		'presets'   => array(
			array(
            'name' => __( '默认' ),
            'content' => '[featured_box]<h3>在中国谈论法系品牌几乎就是谈论PSA</h3><p>但是随着雷诺接连在中国市场投放了两款SUV车型，法系车总算从独角戏变成了对手戏，后者的到来总算给法系车增加了一些份量。但据中汽协数据显示，今年11月法系乘用车销量仅为6.42万辆....</p>[/featured_box]'
			),
		),
		'options'   => array(
			'img'         => array(
				'type'    => 'image',
        'heading' => '图标',
				'value'   => '',
			),
			'inline_svg'  => array(
				'type'    => 'checkbox',
        'heading' => '内嵌SVG',
				'default' => 'true',
			),
			'img_width'   => array(
				'type'      => 'slider',
        'heading' => '图标宽度',
				'unit'      => 'px',
				'default'   => 60,
				'max'       => 600,
				'min'       => 20,
				'on_change' => array(
					'selector' => '.icon-box-img',
					'style'    => 'width: {{ value }}px',
				),
			),
			'pos'         => array(
				'type'      => 'select',
        'heading' => '图标位置',
				'default'   => 'top',
				'options'   => array(
          'top' => '上',
          'center' => '中',
          'left' => '左',
          'right' => '右',
				),
				'on_change' => array(
					'class' => 'icon-box-{{ value }}',
				),
			),
			'title'       => array(
				'type'      => 'textfield',
        'heading' => '标题',
				'value'     => '',
				'on_change' => array(
					'selector' => '.icon-box-text h5',
					'content'  => '{{ value }}',
				),
			),
			'title_small' => array(
				'type'      => 'textfield',
        'heading' => '标题小',
				'value'     => '',
				'on_change' => array(
					'selector' => '.icon-box-text h6',
					'content'  => '{{ value }}',
				),
			),
			'tooltip'     => array(
				'type'    => 'textfield',
        'heading' => '提示',
				'value'   => '',
			),
			'font_size'   => array(
				'type'      => 'radio-buttons',
        'heading' => __( '文字大小' ),
				'default'   => 'medium',
				'options'   => require( __DIR__ . '/values/text-sizes.php' ),
				'on_change' => array(
					'recompile' => false,
					'class'     => 'is-{{ value }}',
				),
			),
			'margin'      => array(
				'type'      => 'margins',
				'heading'   => __( '边距' ),
				'value'     => '',
				'default'   => '',
				'min'       => -100,
				'max'       => 100,
				'step'      => 1,
				'on_change' => array(
					'selector' => '.icon-box',
					'style'    => 'margin: {{ value }}',
				),
			),
			'icon_border' => array(
				'type'      => 'slider',
        'heading' => '图标边框',
				'unit'      => 'px',
				'default'   => 0,
				'max'       => 10,
				'min'       => 0,
				'on_change' => array(
					'selector' => '.has-icon-bg .icon-inner',
					'style'    => 'border-width: {{ value }}px',
				),
			),
			'icon_color'  => array(
				'type'        => 'colorpicker',
        'heading' => __( '图标颜色' ),
        'description' => __( '仅适用于简单的SVG图标' ),
				'format'      => 'rgb',
				'position'    => 'bottom right',
				'on_change'   => array(
					'selector' => '.icon-inner',
					'style'    => 'color: {{ value }}',
				),
			),
			'link_group'  => require( __DIR__ . '/commons/links.php' ),
			'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
		),
	)
);
