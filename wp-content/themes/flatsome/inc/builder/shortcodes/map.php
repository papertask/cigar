<?php

add_ux_builder_shortcode( 'map', array(
  'type' => 'container',
  'name' => __( '地图' ),
  'category' => __( '内容' ),
  'thumbnail' =>  flatsome_ux_builder_thumbnail( 'map' ),
  'template' => flatsome_ux_builder_template( 'map.html' ),
  'wrap' => false,
  'scripts' => array(
    'google-maps' => '//ditu.google.cn/maps/api/js?key='. trim( get_theme_mod( 'google_map_api', 'AIzaSyCnQHEUD4Yvg4m1ul3PWUwsjctR1Cl2NFc' ) ),
  ),

  'presets' => array(
    array(
      'name' => '默认',
      'content' => '
        [map content_width="30" content_width__sm="100" content_width__md="40" position_x__sm="100" position_y__sm="100"]
          在此输入街道地址。 或任何你想要的其他信息。</p>
        [/map]',
    ),
  ),

  'options' => array(

    'height' => array(
      'type' => 'scrubfield',
      'heading' => '高度',
      'default' => '500px',
      'responsive' => true
    ),

    'lat' => array(
      'type' => 'scrubfield',
      'heading' => '纬度',
      'default' => '40.79028',
      'step' => '0.00001',
      'unit' => '',
    ),

    'long' => array(
      'type' => 'scrubfield',
      'heading' => '经度',
      'default' => '-73.95972',
      'step' => '0.00001',
      'unit' => '',
    ),

    'zoom' => array(
      'type' => 'slider',
      'heading' => __( '缩放' ),
      'default' => 17,
      'max' => 20,
      'min' => 1,
    ),

    'pan' => array(
      'type' => 'checkbox',
      'heading' => __( '平移' ),
      'default' => 'true',
    ),

    'content_group' => array(
      'type' => 'group',
      'heading' => __( '内容' ),
      'options' => array(
           'content_enable' => array(
            'type' => 'checkbox',
            'heading' => __( '显示内容' ),
            'default' => 'true',
          ),
          'content_bg' => array(
            'type' => 'colorpicker',
            'heading' => __('背景'),
            'format' => 'rgb',
            'default' => '#fff',
            'position' => 'bottom right',
          ),
          'content_width' => array(
            'type' => 'slider',
            'heading' => __( '宽度' ),
            'responsive' => true,
            'default' => 30,
            'min'  => 0,
            'max'  => 100,
            'step' => 1
          ),
          'position_x' => array(
            'type' => 'slider',
            'heading' => __( 'X位置' ),
            'responsive' => true,
            'default' => 95,
            'min'  => 0,
            'max'  => 100,
            'step' => 5
          ),
          'position_y' => array(
            'type' => 'slider',
            'heading' => __( 'Y位置' ),
            'responsive' => true,
            'default' => 95,
            'min'  => 0,
            'max'  => 100,
            'step' => 5
            ),
        ),
    ),

    'controls_group' => array(
      'type' => 'group',
      'heading' => __( '控件' ),
      'options' => array(
        'controls' => array(
          'type' => 'checkbox',
          'heading' => __( '显示控件' ),
          'default' => false,
        ),
        'zoom_control' => array(
          'type' => 'checkbox',
          'heading' => __( '缩放' ),
          'default' => 'true',
          'conditions' => 'controls === "true"'
        ),
        'street_view_control' => array(
          'type' => 'checkbox',
          'heading' => __( '街道视图' ),
          'default' => 'true',
          'conditions' => 'controls === "true"'
        ),
        'map_type_control' => array(
          'type' => 'checkbox',
          'heading' => __( '地图类型' ),
          'default' => 'true',
          'conditions' => 'controls === "true"'
        ),
      ),
    ),

    'styles_group' => array(
      'type' => 'group',
      'heading' => '风格',
      'options' => array(
        'color' => array(
          'type' => 'colorpicker',
          'heading' => '颜色',
          'default' => '',
          'format' => 'hex',
          'position' => 'bottom right',
        ),
        'saturation' => array(
          'type' => 'slider',
          'heading' => '饱和度',
          'default' => -30,
          'max' => 100,
          'min' => -100,
        ),
      ),
    ),
    'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
  ),
) );
