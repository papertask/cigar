<?php

$repeater_type = 'row';
$default_text_align = 'left';

$options = array(
'pages_options' => array(
    'type' => 'group',
    'heading' => __( '选项' ),
    'options' => array(
      'ids' => array(
        'type' => 'gallery',
        'heading' => __( '图片' ),
      ),
     'style' => array(
            'type' => 'select',
            'heading' => __( '风格' ),
            'default' => 'overlay',
            'options' => require( __DIR__ . '/values/box-layouts.php' )
     ),
    'lightbox' => array(
          'type' => 'radio-buttons',
          'heading' => __('在灯箱打开'),
          'default' => 'true',
          'options' => array(
              'false'  => array( 'title' => '关'),
              'true'  => array( 'title' => '开'),
          ),
      ),
  ),
),
'layout_options' => require( __DIR__ . '/commons/repeater-options.php' ),
'layout_options_slider' => require( __DIR__ . '/commons/repeater-slider.php' ),
);

$box_styles = require( __DIR__ . '/commons/box-styles.php' );
$options = array_merge($options, $box_styles);

add_ux_builder_shortcode( 'ux_gallery', array(
  'name' => __( '相册','ux-builder'),
  'category' => __( '内容' ),
  'thumbnail' => flatsome_ux_builder_thumbnail( 'ux_gallery' ),
  'scripts' => array(
    'flatsome-masonry-js' => get_template_directory_uri() .'/assets/libs/packery.pkgd.min.js',
  ),
  'presets' => array(
    array(
      'name' => __( '默认' ),
      'content' => '[ux_gallery]',
      ),
    ),
    'options' => $options
) );
