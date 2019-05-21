<?php

$options = array(
'pages_options' => array(
    'type' => 'group',
    'heading' => __( '选项' ),
    'options' => array(

    'username' => array( 'type' => 'textfield','heading' => '用户名或标签', 'default' => 'wonderful_places'),
    //'link' => array( 'type' => 'textfield','heading' => 'Link title', 'default' => 'Follow us on instagram'),

    'photos' => array(
        'type' => 'slider',
        'heading' => '图片',
        'default' => 10,
        'max' => 12,
        'min' => 3,
    ),

    'caption' => array(
          'type' => 'radio-buttons',
          'heading' => __('字幕'),
          'default' => 'true',
          'options' => array(
              0  => array( 'title' => '关'),
              'true'  => array( 'title' => '开'),
          ),
    ),
      
    'image_overlay' => array(
				'type'      => 'colorpicker',
				'heading'   => __( '图片叠加' ),
				'default'   => '',
				'alpha'     => true,
				'format'    => 'rgb',
				'position'  => 'bottom right',
				'on_change' => array(
					'selector' => '.overlay',
					'style'    => 'background-color: {{ value }}',
				),
		),
      
    'image_hover' => array(
        'type' => 'select',
        'heading' => __( '悬停' ),
        'default' => '',
        'options' => require( __DIR__ . '/values/image-hover.php' ),
        'on_change' => array(
            'selector' => '.instagram-image-container',
            'class' => 'image-{{ value }}'
        )
    ),
  ),
),
'layout_options' => require( __DIR__ . '/commons/repeater-options.php' ),
'layout_options_slider' => require( __DIR__ . '/commons/repeater-slider.php' ),
'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
);

// Set defaults.
$options['layout_options']['options']['columns']['default']     = '5';
$options['layout_options']['options']['col_spacing']['default'] = 'collapse';
$options['layout_options']['options']['type']['default']        = 'row';
$options['layout_options']['options']['type']['options']        = array(
    'slider' => '幻灯片',
    'row' => '行'
);

add_ux_builder_shortcode( 'ux_instagram_feed', array(
  'name' => __( 'Instagram订阅' ),
  'category' => __( '内容' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'instagram_feed' ),
	'presets'   => array(
		array(
			'name'    => __( '默认' ),
			'content' => '[ux_instagram_feed]',
		),
		array(
      'name' => __( '简单网格' ),
			'content' => '[ux_instagram_feed username="stylechild_no" col_spacing="small"]',
		),
		array(
      'name' => __( '全宽幻灯片' ),
			'content' => '[ux_instagram_feed username="topshop" type="slider" slider_nav_color="light" width="full-width" columns="6"]',
		),
		array(
      'name' => __( '简单幻灯片' ),
			'content' => '[ux_instagram_feed username="stylechild_no" type="slider" slider_nav_position="outside" col_spacing="small"]',
		),
		array(
      'name' => __( '全宽B&W' ),
			'content' => '[ux_instagram_feed username="topshop" image_hover="color" type="slider" slider_nav_color="light" width="full-width" columns="6"]',
		),
	),
	'options'   => $options,
) );
