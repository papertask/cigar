<?php

// Shortcode to display a single product
add_ux_builder_shortcode( 'scroll_to', array(
    'name' => '滚动到',
    'category' => __( '元素' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'scroll_to' ),
    'info' => '{{ title }}',
    'wrap' => false,

    'presets' => array(
        array(
            'name' => __( '默认' ),
            'content' => '[scroll_to title="" link="" bullet="true"]'
        ),
    ),

    'options' => array(
        'title' => array(
            'type' => 'textfield',
            'heading' => '标题',
            'default' => '',
        ),
        'link' => array(
            'type' => 'textfield',
            'heading' => '链接',
            'default' => '',
            'placeholder' => '留空自动创建',
            'description' => '你可以使用#值作为滚动到此处的链接'
        ),
        'bullet' => array(
            'type' => 'radio-buttons',
            'heading' => __('项目符号'),
            'default' => 'true',
            'options' => array(
                'false'  => array( 'title' => '关'),
                'true'  => array( 'title' => '开'),
            ),
        ),
    ),
) );
