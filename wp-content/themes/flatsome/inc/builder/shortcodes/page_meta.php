<?php

add_ux_builder_shortcode( 'ux_the_title', array(
  'name' => __( '页面标题' ),
  'category' => __( '元' ),
  'options' => array(
  	 'video' => array(
        'type' => 'textfield',
        'heading' => '视频',
      ),
  	)
) );

add_ux_builder_shortcode( 'ux_breadcrumbs', array(
  'name' => __( '面包屑导航' ),
  'category' => __( '元' ),
  'options' => array(
  	 'video' => array(
        'type' => 'textfield',
        'heading' => '视频',
      ),
  	)
) );

add_ux_builder_shortcode( 'ux_subnav', array(
  'name' => __( '子导航' ),
  'category' => __( '元' ),
  'options' => array( 
  	'video' => array(
        'type' => 'textfield',
        'heading' => '视频',
      ),
 	)
) );


add_ux_builder_shortcode( 'ux_excerpt', array(
  'name' => __( '摘要' ),
  'category' => __( '元' ),
  'options' => array( 
    'video' => array(
        'type' => 'textfield',
        'heading' => '视频',
      ),
  )
) );