<?php

add_ux_builder_shortcode( 'tab', array(
    'type' => 'container',
    'name' => __( '选项卡面板' ),
    'template' => flatsome_ux_builder_template( 'tab.html' ),
    'info' => '{{ title }}',
    'require' => array( 'tabgroup' ),
    'hidden' => true,
    'wrap' => false,

    'options' => array(

        'title' => array(
            'type' => 'textfield',
            'heading' => __( '标题' ),
            'default' => __( '选项卡标题' ),
            'auto_focus' => true,
        ),

    ),
) );
