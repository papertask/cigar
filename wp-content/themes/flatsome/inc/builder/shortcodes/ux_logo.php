<?php

add_ux_builder_shortcode( 'logo',
	array(
		'name'              => __( 'Logo' ),
        'category' => __( '内容' ),
		'toolbar_thumbnail' => 'img',
		'thumbnail'         => flatsome_ux_builder_thumbnail( 'logo' ),
		'inline'            => true,
		'wrap'              => false,
		'presets'           => array(
			array(
				'name'    => __( '默认' ),
				'content' => '[logo]',
			),
			array(
				'name'    => __( '简单行' ),
				'content' => '[row] [col span__sm="12" align="center"] [logo] [logo] [logo] [logo] [logo] [logo] [/col] [/row]',
			),
			array(
				'name'    => __( '虚线网格' ),
				'content' => '[row col_style="dashed" v_align="middle"] [col span="4" span__sm="12" align="center"] [logo img="9176" hover="overlay-add"] [/col] [col span="4" span__sm="12" align="center"] [logo  hover="color"] [/col] [col span="4" span__sm="12" align="center"] [logo  hover="color"] [/col] [col span="4" span__sm="12" align="center"] [logo  hover="color"] [/col] [col span="4" span__sm="12" align="center"] [logo  hover="color"] [/col] [col span="4" span__sm="12" align="center"] [logo  hover="color"] [/col] [col span="4" span__sm="12" align="center"] [logo  hover="color"] [/col] [col span="4" span__sm="12" align="center"] [logo hover="color"] [/col] [col span="4" span__sm="12" align="center"] [logo  hover="color"] [/col] [/row]',
			),
			array(
				'name'    => __( 'Logo幻灯片' ),
				'content' => '[row] [col span__sm="12"] [ux_slider freescroll="true" hide_nav="true" nav_pos="outside" nav_style="simple" nav_color="dark" bullets="false"] [logo hover="color"] [logo  hover="color"] [logo  hover="color"] [logo  hover="color"][logo  hover="color"][logo  hover="color"] [logo  hover="color"] [logo  hover="color"] [logo  hover="color"] [logo  hover="color"] [/ux_slider] [/col] [/row]',
			),
		),
		'options'           => array(
			'img'    => array(
				'type'    => 'image',
				'heading' => '图片',
				'default' => '',
			),
			'title'  => array(
				'type'    => 'textfield',
				'heading' => __( '标题' ),
				'default' => '',
			),
			'hover'  => array(
				'type'      => 'select',
				'heading'   => __( '悬停' ),
				'default'   => '',
				'options'   => array(
                '' => '无',
                'zoom' => '缩放',
                'fade-in' => '淡入',
                'glow' => '发光',
                'color' => '添加颜色',
                'grayscale' => '灰度',
				),
				'on_change' => array(
					'selector' => '.ux-logo-link',
					'class'    => 'image-{{ value }}',
				),
			),
			'height' => array(
				'type'    => 'scrubfield',
          'heading' => '高度',
				'default' => '50px',
				'max'     => 300,
				'min'     => 0,
			),
			'link_options' => require( __DIR__ . '/commons/links.php' ),
			'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
		),
	)
);
