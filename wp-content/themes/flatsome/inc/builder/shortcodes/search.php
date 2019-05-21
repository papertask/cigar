<?php


add_ux_builder_shortcode( 'search', array(
  'name' => __( '搜索框' ),
  'category' => __( '内容' ),
  'thumbnail' => flatsome_ux_builder_thumbnail( 'search' ),
  'wrap' => false,
  'allow_in' => array('text_box'),
  'presets' => array(
    array(
      'name' => __( '默认' ),
      'content' => '[search]',
      ),
    ),
    'options' => array(
      'style' => array(
          'type' => 'select',
          'heading' => __( '风格' ),
          'options' => array(
              '' => '常规',
              'flat' => '扁平',
          )
        ),

      'size' => array(
              'type' => 'radio-buttons',
              'heading' => __( '大小' ),
              'default' => 'medium',
              'options' => require( __DIR__ . '/values/text-sizes.php' ),
              'on_change' => array(
                  'class' => 'is-{{ value }}'
              )
        ),
      'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    )
) );