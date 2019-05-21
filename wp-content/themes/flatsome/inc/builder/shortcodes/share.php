<?php

add_ux_builder_shortcode( 'share', array(
    'name' => __( '分享图标' ),
    'category' => __( '内容' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'share' ),
    'options' => array(
        'title' => array(
            'type' => 'textfield',
            'heading' => '标题',
            'default' => '',
        ),
        'style' => array(
            'type' => 'radio-buttons',
            'heading' => __( '风格' ),
            'default' => '',
            'options' => array(
                'outline' => array( 'title' => '轮廓' ),
                'fill' => array( 'title' => '填充' ),
                'small' => array( 'title' => '小' ),
            ),
        ),
        'align' => array(
            'type' => 'radio-buttons',
            'heading' => __( '对齐方式' ),
            'default' => '',
            'options' => array(
                '' => array( 'title' => '内联' ),
                'left'   => array( 'title' => '左',   'icon' => 'dashicons-editor-alignleft'),
                'center' => array( 'title' => '中', 'icon' => 'dashicons-editor-aligncenter'),
                'right'  => array( 'title' => '右',  'icon' => 'dashicons-editor-alignright'),
            ),
        ),
        'scale' => array(
            'type' => 'slider',
            'heading' => '比例',
            'default' => '100',
            'unit' => '%',
            'max' => '300',
            'min' => '50',
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );