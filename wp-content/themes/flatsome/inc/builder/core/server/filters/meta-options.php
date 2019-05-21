<?php

add_filter( 'ux_builder_meta_options', function ( $options, $post ) {
  if ( $post->post_type == 'page' ) {
    $options['_wp_page_template'] = array(
      'type' => 'select',
      'heading' => __( '模板' ),
      'options' => ux_builder_get_page_templates( $post ),
      'reload' => true,
    );
    $options['_footer'] = array(
      'type' => 'select',
      'heading' => __( '页面页脚' ),
      'reload' => true,
      'default' => '',
      'options' => array(
        '' => __( '默认' ),
        'simple' => __( '简单' ),
        'transparent' => __( '透明' ),
        'custom' => __( '自定义页脚' ),
        'disabled' => __( '隐藏' ),
      ),
    );
  }

  if ( get_theme_support( 'post-thumbnails' ) ) {
    $options['_thumbnail_id'] = array(
      'type' => 'image',
      'heading' => __( '推荐图片' ),
      'reload' => true,
    );
  }

  return $options;
}, 10, 2 );
