<?php

add_ux_builder_shortcode( 'text_box', array(
    'type' => 'container',
    'name' => __( '文字框' ),
    'category' => __( '内容' ),
    'template' => flatsome_ux_builder_template( 'text_box.html' ),
    'thumbnail' => flatsome_ux_builder_thumbnail( 'text_box' ),
    'require' => 'ux_banner',
    'allow' => array( 'ux_breadcrumbs', 'ux_the_title', 'ux_image', 'text', 'divider', 'button', 'title', 'video_button', 'row', 'follow', 'share'),
    'wrap' => false,
    'resize' => array( 'right' ),
    'move' => 'top-left',

    'presets' => array(
        array(
            'name' => __( '默认' ),
            'content' => '[text_box pos="x50 y50"][/text_box]',
        )
    ),
    'options' => array(
      'layout_options' => array(
        'type' => 'group',
        'heading' => __( '布局' ),
        'options' => array(
           'style' => array(
                'type' => 'radio-buttons',
                'heading' => __('风格'),
                'full_width' => true,
                'default' => '',
                'options' => array(
                    ''  => array( 'title' => '正常'),
                    'square'  => array( 'title' => '方形'),
                    'circle'  => array( 'title' => '圆形'),
                ),
            ),
            'text_color' => array(
                'type' => 'radio-buttons',
                'heading' => __('颜色'),
                'default' => 'light',
                'options' => array(
                    'light'  => array( 'title' => '浅色'),
                    'dark'  => array( 'title' => '深色'),
                ),
            ),
            'hover' => array(
                'type' => 'select',
                'heading' => __( '悬停' ),
                'default' => '',
                'options' => require( __DIR__ . '/values/text-hover.php' ),
            ),
            'width' => array(
                'type' => 'slider',
                'heading' => __('宽度'),
                'responsive' => true,
                'default' => '60',
                'unit' => '%',
                'max' => '100',
                'min' => '0',
            ),
            'scale' => array(
              'type' => 'slider',
              'heading' => __('缩放'),
              'responsive' => true,
              'unit' => '%',
              'default' => '100',
              'max' => '500',
              'min' => '0',
            ),
           'margin' => array(
              'type' => 'margins',
              'heading' => __('边距'),
              'full_width' => true,
              'responsive' => true,
              'unit' => 'px',
              'min' => -200,
              'max' => 200,
              'step' => 1,
          ),
          'padding' => array(
                'type' => 'margins',
                'heading' => __('填充'),
                'full_width' => true,
                'min' => 0,
                'max' => 200,
                'step' => 1,
                'responsive' => true,
          ),
           'rotate' => array(
              'type' => 'slider',
              'heading' => __('旋转'),
              'default' => 0,
              'max' => 180,
              'min' => -180,
            ),
           'animate' => array(
              'type' => 'select',
              'heading' => __('动画'),
              'options' => require( __DIR__ . '/values/animate.php' ),
          ),
          'parallax' => array(
              'type' => 'slider',
              'heading' => __('视差'),
              'param_name' => 'parallax',
              'default' => 0,
              'unit' => '+',
              'max' => 10,
              'min' => -10,
          ),
        ),
    ), // Layout options
    'positions' => require( __DIR__ . '/commons/position.php' ),
    'text_options' => array(
        'type' => 'group',
        'heading' => __( '文字' ),
        'options' => array(
          'text_align' => array(
              'type' => 'radio-buttons',
              'heading' => __('对齐方式'),
              'default' => 'center',
              'options' => require( __DIR__ . '/values/align-radios.php' ),
            ),
           'text_depth' => array(
              'type' => 'slider',
              'heading' => __('阴影'),
              'default' => '0',
              'unit' => '+',
              'max' => '5',
              'min' => '0',
            ),
        )
    ), // Text options
    'bg_options' => array(
        'type' => 'group',
        'heading' => __( '背景' ),
        'options' => array(

          'bg' => array(
            'type' => 'colorpicker',
            'heading' => __('背景颜色'),
            'alpha' => true,
            'format' => 'rgb',
            'position' => 'bottom right',
          ),
            'radius' => array(
              'type' => 'slider',
              'heading' => __('半径'),
              'default' => 0,
              'unit' => 'px',
              'max' => 500,
              'min' => 0,
            ),
            'depth' => array(
              'type' => 'slider',
              'heading' => __('深度'),
              'default' => '0',
              'unit' => '+',
              'max' => '5',
              'min' => '0',
            ),
            'depth_hover' => array(
              'type' => 'slider',
              'heading' => __('深度：悬停'),
              'default' => '0',
              'unit' => '+',
              'max' => '5',
              'min' => '0',
            ),
        )
    ), // Frame
    'border_options' => require( __DIR__ . '/commons/border.php' ),
    'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
  )
));
