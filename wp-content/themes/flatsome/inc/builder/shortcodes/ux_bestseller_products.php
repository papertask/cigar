<?php

add_ux_builder_shortcode( 'ux_bestseller_products', array(
    'name' => __( '畅销产品' ),
    'image' => '',
    'category' => __( '商店' ),

    'presets' => array(
        array(
            'name' => __( '正常' ),
            'content' => '[ux_bestseller_products products="8" columns="4" title="查看我们的畅销！"]'
        ),
    ),

    'options' => array(
        array(
            'type' => 'textfield',
            'class' => '',
            'full_width' => true,
            'heading' => '标题',
            'param_name' => 'title',
            'default' => '',
            'value' => ''
        ),
        array(
            'type' => 'textfield',
            'class' => '',
            'heading' => '列',
            'param_name' => 'columns',
            'default' => '',
            'value' => ''
        ),
        array(
            'type' => 'textfield',
            'class' => '',
            'heading' => '文章',
            'param_name' => 'products',
            'default' => '',
            'value' => ''
        ),
    ),
) );


add_ux_builder_shortcode( 'ux_featured_products', array(
    'name' => __( '推荐产品' ),
    'image' => '',
    'category' => __( '商店' ),
    'ajax' => true,

    'presets' => array(
        array(
            'name' => __( '正常' ),
            'content' => '[ux_featured_products products="8" columns="4"]'
        ),
        array(
            'name' => __( '3列' ),
            'content' => '[ux_featured_products products="8" columns="3"]'
        ),
    ),

    'options' => array(
        array(
            'type' => 'textfield',
            'class' => '',
            'full_width' => true,
            'heading' => '标题',
            'param_name' => 'title',
            'default' => '',
            'value' => ''
        ),
        array(
            'type' => 'textfield',
            'class' => '',
            'heading' => '列',
            'param_name' => 'columns',
            'default' => '',
            'value' => ''
        ),
        array(
            'type' => 'textfield',
            'class' => '',
            'heading' => '文章',
            'param_name' => 'products',
            'default' => '',
            'value' => ''
        ),
    ),
) );
