<?php

add_ux_builder_shortcode( 'ux_image_box', array(
    'name' => __( '图片框' ),
    'category' => __( '内容' ),
    'type' => 'container',
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'image_box' ),
    'wrap' => false,
    'presets' => array(
        array(
            'name' => __( '空白' ),
            'content' => '[ux_image_box] <h4>一个标题</h4> <p>图片框文字</p> [/ux_image_box]',
        ),
    ),
    'options' => array_merge_recursive( array(
        'style' => array(
            'type' => 'select',
            'heading' => __( '风格' ),
            'default' => 'normal',
            'options' => require( __DIR__ . '/values/box-layouts.php' ),
        ),
        'image_options' => array(
            'options' => array(
                'img' => array(
                    'type' => 'image',
                    'heading' => '图片',
                    'group' => 'background',
                    'param_name' => 'img',
                ),
            ),
        ),
        'depth' => array(
            'type' => 'slider',
            'heading' => __( '深度' ),
            'default' => '0',
            'max' => '5',
            'min' => '0',
            'on_change' => array(
                'class' => 'box-shadow-{{ value }}'
            )
        ),
        'depth_hover' => array(
            'type' => 'slider',
            'heading' => __( '深度：悬停' ),
            'default' => '0',
            'max' => '5',
            'min' => '0',
            'on_change' => array(
                'class' => 'box-shadow-{{ value }}-hover'
            )
        ),
        'link_group' => require( __DIR__ . '/commons/links.php' ),
    ),
    require( __DIR__ . '/commons/box-styles.php' ) ),
) );
