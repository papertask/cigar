<?php

add_ux_builder_shortcode( 'page_header', array(
  'name' => __( '页面页眉' ),
  'category' => __( '布局' ),
  'wrap' => false,
  'thumbnail' =>  flatsome_ux_builder_thumbnail( 'page_title' ),
  'allow' => array(),
  'presets' => array(),
  'options' => array(
  	 'layout_options' => array(
      'type' => 'group',
      'heading' => __( '布局' ),
      'options' => array(
      	'height' => array(
          'type' => 'scrubfield',
          'responsive' => true,
          'heading' => __('高度'),
          'default' => '',
          'placeholder' => __('默认'),
          'min' => 0,
          'step' => 1,
           'on_change' => array(
              'recompile' => false,
              'selector' => '.page-title-inner',
              'style' => 'min-height: {{ value }}'
          )
        ),

        'margin' => array(
          'type' => 'scrubfield',
          'responsive' => true,
          'heading' => __('边距'),
          'min' => 0,
          'step' => 1,
           'on_change' => array(
            'recompile' => false,
            'style' => 'margin-bottom: {{ value }}'
          )
        ),

        'style' => array(
            'type' => 'select',
            'heading' => '内容风格',
            'full_width' => true,
            'default' => 'featured',
            'options' => array(
            	'featured' => '推荐',
            	'normal' => '扁平',
                'simple' => '简单',
                'divided' => '分隔',
            )
        ),

        'type' => array(
            'type' => 'select',
            'heading' => '内容类型',
            'full_width' => true,
            'default' => 'breadcrumbs',
            'options' => array(
            	'breadcrumbs' => '面包屑导航',
                'subnav' => '子导航',
                'onpage' => '滚动到导航',
                'share' => '分享图标'
            )
        ),

        'text_color' => array(
          'type' => 'radio-buttons',
          'heading' => __('文字颜色'),
          'default' => 'light',
          'options' => array(
            'light'  => array( 'title' => '浅色'),
            'dark'  => array( 'title' => '深色'),
          ),
        ),

        'align' => array(
            'type' => 'radio-buttons',
            'heading' => '对齐方式',
            'full_width' => true,
            'default' => 'left',
            'options' => array(
            	'left' => array( 'title' => '左'),
              'center' => array( 'title' => '中'),
              'right' => array( 'title' => '右'),
            ),
        ),

        'v_align' => array(
            'type' => 'radio-buttons',
            'heading' => '垂直对齐',
            'full_width' => true,
            'default' => 'center',
            'options' => array(
                'top' => array( 'title' => '上'),
                'center' => array( 'title' => '中'),
                'bottom' => array( 'title' => '下'),
            )
        ),

        'depth' => array(
            'type' => 'slider',
            'vertical' => true,
            'heading' => '深度',
            'default' => 0,
            'max' => 5,
            'min' => 0,
        ),

        'parallax_text' => array(
            'type' => 'slider',
            'heading' => '内容视差',
            'unit' => '+',
            'default' => 0,
            'max' => 10,
            'min' => 0,
        ),
      )
    ),
  	'title_options' => array(
  	   'type' => 'group',
       'heading' => __( '标题' ),
       'options' => array(

          'show_title' => array(
            'type' => 'checkbox',
            'heading' => '显示标题',
            'default' => 'true'
          ),

       	 'title' => array(
            'conditions' => 'show_title',
            'type' => 'textfield',
            'heading' => '标题',
            'placeholder' => __( '页面标题' ),
            'default' => '',
       	 ),

       	 'title_size' => array(
            'conditions' => 'show_title',
            'type' => 'select',
            'heading' => '大小',
            'options' => require( __DIR__ . '/values/sizes.php' ),
         ),

       	 'title_case' => array(
            'conditions' => 'show_title',
  	        'type' => 'radio-buttons',
  	        'heading' => '字母大小写',
  	        'default' => 'normal',
  	        'options' => array(
              'normal' => array( 'title' => 'Abc' ),
	            'uppercase' => array( 'title' => 'ABC'),
  	        ),
        ),

       	 'sub_title' => array(
            'conditions' => 'show_title',
            'type' => 'textfield',
            'heading' => '子标题',
            'default' => '',
       	 ),
       ),
  	),
  	'nav_options' => array(
      'type' => 'group',
      'heading' => __( 'Navigation style' ),
      'options' => array(
      	'nav_style' => array(
            'type' => 'select',
            'heading' => '风格',
            'default' => 'line',
            'options' => require( __DIR__ . '/values/nav-styles.php' ),
         ),
      	'nav_size' => array(
            'type' => 'select',
            'heading' => '大小',
            'options' => require( __DIR__ . '/values/sizes.php' ),
         ),
      	 'nav_case' => array(
	        'type' => 'radio-buttons',
	        'heading' => '字母大小写',
	        'default' => 'uppercase',
	        'options' => array(
	            'uppercase' => array( 'title' => 'ABC'),
	            'lowercase' => array( 'title' => 'Abc' ),
	        ),
        ),
       )
    ),
  	'background_options' => array(
      'type' => 'group',
      'heading' => __( '背景' ),
      'options' => array(
        'bg' => array(
          'type' => 'image',
          'heading' => __( '图片' ),
          'thumb_size' => 'bg_size',
          'bg_position' => 'bg_pos',
        ),
        'bg_size'=> array(
          'type' => 'select',
          'heading' => '大小',
          'default' => 'large',
          'options' => array(
            'orginal' => '原始',
            'large' => '大',
            'medium' => '中',
            'thumbnail' => '缩略图',
          )
        ),
        'bg_color' => array(
          'type' => 'colorpicker',
          'heading' => __('颜色'),
          'format' => 'rgb',
          'position' => 'bottom right',
          'helpers' => require( __DIR__ . '/helpers/colors.php' ),
        ),
        'bg_overlay' => array(
          'type' => 'colorpicker',
          'heading' => __('叠加'),
          'responsive' => true,
          'alpha' => true,
          'format' => 'rgb',
          'position' => 'bottom right',
          'helpers' => require( __DIR__ . '/helpers/colors-overlay.php' ),
        ),
        'bg_pos' => array(
          'type' => 'textfield',
          'heading' => __('位置'),
           'on_change' => array(
	            'selector' => '.title-bg',
	            'style' => 'background-position: {{ value }}'
          )
        ),
        'parallax' => array(
            'type' => 'slider',
            'heading' => '视差',
            'unit' => '+',
            'default' => 0,
            'max' => 10,
            'min' => 0,
        ),
    ), // end bgs
  ),
  'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
 ),
) );
