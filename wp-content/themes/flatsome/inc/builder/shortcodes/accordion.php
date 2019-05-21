<?php

add_ux_builder_shortcode( 'accordion', array(
    'type' => 'container',
    'name' => __( '手风琴' ),
    'image' => '',
    'category' => __( '内容' ),
    // 'template' => flatsome_ux_builder_template( 'accordion.html' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'accordion' ),
    'info' => '{{ title }}',
    'allow' => array( 'accordion-item' ),

    'presets' => array(
        array(
            'name' => __( '默认' ),
            'content' => '
                [accordion]
                    [accordion-item title="手风琴项目1标题"][/accordion-item]
                    [accordion-item title="手风琴项目2标题"][/accordion-item]
                    [accordion-item title="手风琴项目3标题"][/accordion-item]
                [/accordion]
            '
        ),
    ),

    'options' => array(
        'title' => array(
            'type' => 'textfield',
            'heading' => __( '标题' ),
            'default' => __( '' ),
            'auto_focus' => true,
        ),
        'auto_open' => array(
            'type' => 'radio-buttons',
            'heading' => __('自动打开'),
            'default' => '',
            'options' => array(
                ''  => array( 'title' => '关'),
                'true'  => array( 'title' => '开'),
            ),
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
