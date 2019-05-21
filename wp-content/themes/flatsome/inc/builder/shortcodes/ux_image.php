<?php

$position_options = require( __DIR__ . '/commons/position.php' );
$position_options['options']['position_x']['on_change'] = array(
  'recompile' => false,
  'class' => 'x{{ value }} md-x{{ value }} lg-x{{ value }}'
);
$position_options['options']['position_y']['on_change'] = array(
  'recompile' => false,
  'class' => 'y{{ value }} md-y{{ value }} lg-y{{ value }}'
);

add_ux_builder_shortcode( 'ux_image', array(
    'name' => __( '图片', 'ux-builder'),
    'category' => __( '内容' ),
    'toolbar_thumbnail' => 'id',
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'ux_image' ),
    'wrap' => false,

    'presets' => array(
        array(
            'name' => __( '空白' ),
            'content' => '[ux_image][/ux_image]',
        ),
    ),

    'options' => array(

        'id' => array(
            'type' => 'image',
            'heading' => __('图片'),
            'default' => ''
        ),
        'image_size' => array(
            'type' => 'select',
            'heading' => '图片大小',
            'param_name' => 'image_size',
            'default' => '',
            'options' => array(
                '' => '正常',
                'large' => '大',
                'medium' => '中',
                'thumbnail' => '缩略图',
                'original' => '原始',
            )
        ),
        'width' => array(
          'type' => 'slider',
          'heading' => '宽度',
          'responsive' => true,
          'default' => '100',
          'unit' => '%',
          'max' => '100',
          'min' => '0',
          'on_change' => array(
            'style' => 'width: {{ value }}%'
          ),
        ),
        'height' => array(
              'type' => 'scrubfield',
              'heading' => __('高度'),
              'default' => '',
              'placeholder' => __('自动'),
              'min' => 0,
              'max' => 1000,
              'step' => 1,
              'helpers' => require( __DIR__ . '/helpers/image-heights.php' ),
               'on_change' => array(
                    'selector' => '.image-cover',
                    'style' => 'padding-top: {{ value }}'
                )
        ),
        'margin' => array(
          'type' => 'margins',
          'heading' => __( '边距' ),
          'value' => '',
          'full_width' => true,
          'min' => -100,
          'max' => 100,
          'step' => 1,
        ),
        'lightbox' => array(
            'type' => 'radio-buttons',
            'heading' => __('灯箱'),
            'default' => '',
            'options' => array(
                ''  => array( 'title' => '关'),
                'true'  => array( 'title' => '开'),
            ),
        ),
        'caption' => array(
            'type' => 'radio-buttons',
            'heading' => __('字幕'),
            'default' => '',
            'options' => array(
                ''  => array( 'title' => '关'),
                'true'  => array( 'title' => '开'),
            ),
        ),
        'image_overlay' => array(
            'type' => 'colorpicker',
            'heading' => __( '图片叠加' ),
            'default' => '',
            'alpha' => true,
            'format' => 'rgb',
            'position' => 'bottom right',
            'on_change' => array(
              'selector' => '.overlay',
              'style' => 'background-color: {{ value }}',
            ),
         ),

        'image_hover' => array(
            'type' => 'select',
            'heading' => '图片悬停',
            'default' => '',
            'options' => require( __DIR__ . '/values/image-hover.php' ),
            'on_change' => array(
                'selector' => '.img-inner',
                'class' => 'image-{{ value }}'
            )
        ),

        'image_hover_alt' => array(
            'type' => 'select',
            'heading' => '图片悬停Alt',
            'default' => '',
            'options' => require( __DIR__ . '/values/image-hover.php' ),
            'on_change' => array(
                'selector' => '.img-inner',
                'class' => 'image-{{ value }}'
            )
        ),

        'depth' => array(
            'type' => 'slider',
            'heading' => '深度',
            'default' => '0',
            'max' => '5',
            'min' => '0',
            'on_change' => array(
                'selector' => '.img-inner',
                'class' => 'box-shadow-{{ value }}'
            )
        ),

        'depth_hover' => array(
            'type' => 'slider',
            'heading' => '深度：悬停',
            'default' => '0',
            'max' => '5',
            'min' => '0',
            'on_change' => array(
                'selector' => '.img-inner',
                'class' => 'box-shadow-{{ value }}-hover'
            )
        ),
        'parallax' => array(
            'type' => 'slider',
            'heading' => '视差',
            'default' => '0',
            'max' => '10',
            'min' => '-10',
        ),
        'animate' => array(
            'type' => 'select',
            'heading' => '动画',
            'default' => 'none',
            'options' => require( __DIR__ . '/values/animate.php' ),
        ),
        'link_options' => require( __DIR__ . '/commons/links.php' ),
        'position_options' => $position_options,
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );
