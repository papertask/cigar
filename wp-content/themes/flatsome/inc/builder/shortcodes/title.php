<?php

add_ux_builder_shortcode( 'title', array(
    'name' => __( '标题','ux-builder'),
    'category' => __( '内容' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'title' ),
	'template'  => flatsome_ux_builder_template( 'title.html' ),
	'info'      => '{{ text }}',
	'wrap'      => false,

	'options' => array(
		'style' => array(
			'type'    => 'select',
			'heading' => '风格',
			'default' => 'normal',
			'options' => array(
                'normal' => '正常',
                'center' => '居中',
                'bold' => '左侧加粗',
                'bold-center' => '居中加粗',
			),
		),
		'text' => array(
			'type'       => 'textfield',
            'heading' => '标题',
            'default' => '沃尔沃接下来在国内重塑形象',
			'auto_focus' => true,
		),
		'tag_name' => array(
			'type'    => 'select',
			'heading' => '标签',
			'default' => 'h3',
			'options' => array(
				'h1' => 'H1',
				'h2' => 'H2',
				'h3' => 'H3',
				'h4' => 'H4',
			),
		),
		'color' => array(
			'type'     => 'colorpicker',
			'heading'  => __( '颜色' ),
			'alpha'    => true,
			'format'   => 'rgb',
			'position' => 'bottom right',
		),
		'icon' => array(
			'type'    => 'select',
			'heading' => '图标',
			'options' => require( __DIR__ . '/values/icons.php' ),
		),
		'width' => array(
			'type'    => 'scrubfield',
			'heading' => __( '宽度' ),
			'default' => '',
			'min'     => 0,
			'max'     => 1200,
			'step'    => 5,
		),
		'margin_top' => array(
			'type'        => 'scrubfield',
			'heading'     => __( '上边距' ),
			'default'     => '',
			'placeholder' => __( '0px' ),
			'min'         => - 100,
			'max'         => 300,
			'step'        => 1,
		),
		'margin_bottom' => array(
			'type'        => 'scrubfield',
			'heading'     => __( '下边距' ),
			'default'     => '',
			'placeholder' => __( '0px' ),
			'min'         => - 100,
			'max'         => 300,
			'step'        => 1,
		),
		'size' => array(
			'type'    => 'slider',
			'heading' => __( '大小' ),
			'default' => 100,
			'unit'    => '%',
			'min'     => 20,
			'max'     => 300,
			'step'    => 1,
		),
		'link_text' => array(
			'type'    => 'textfield',
			'heading' => '链接文字',
			'default' => '',
		),
		'link' => array(
			'type'    => 'textfield',
			'heading' => '链接',
			'default' => '',
		),
		'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
	),
) );
