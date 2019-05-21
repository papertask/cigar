<?php

// Shortcode to hotspot

add_ux_builder_shortcode( 'ux_hotspot', array(
    'name' => '徽章',
    'category' => __( '元素' ),

   'presets' => array(
        array(
            'name' => __( '正常' ),
            'content' => '[ux_badge text_top="输入文字" text_main="Sale" text_bottom="text_bottom"]'
        ),
    ),

    'options' => array(

    )
) );