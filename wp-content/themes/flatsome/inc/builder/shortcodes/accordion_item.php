<?php

add_ux_builder_shortcode( 'accordion-item', array(
    'type' => 'container',
    'name' => __( '手风琴面板' ),
    'template' => flatsome_ux_builder_template( 'accordion_item.html' ),
    'info' => '{{ title }}',
    'require' => array( 'accordion' ),
    'wrap' => false,
    'hidden' => true,
    'options' => array(
        'title' => array(
            'type' => 'textfield',
            'heading' => __( '标题' ),
            'default' => __( '手风琴面板标题' ),
            'auto_focus' => true,
        ),
        'class' => array(
            'type' => 'textfield',
            'heading' => '自定义Class',
            'full_width' => true,
            'placeholder' => 'class-name',
            'default' => '',
        ),
    ),
) );
