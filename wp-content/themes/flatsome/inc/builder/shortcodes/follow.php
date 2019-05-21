<?php

add_ux_builder_shortcode( 'follow', array(
    'name' => __( '关注图标' ),
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
            'default' => 'outline',
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
                '' => array( 'title' => '内嵌' ),
                'left'   => array( 'title' => '左',   'icon' => 'dashicons-editor-alignleft'),
                'center' => array( 'title' => '中', 'icon' => 'dashicons-editor-aligncenter'),
                'right'  => array( 'title' => '右',  'icon' => 'dashicons-editor-alignright'),
            ),
        ),
        'scale' => array(
            'type' => 'slider',
            'heading' => '缩放',
            'default' => '100',
            'unit' => '%',
            'max' => '300',
            'min' => '50',
        ),
        'facebook' => array( 'type' => 'textfield','heading' => 'Facebook', 'default' => ''),
        'instagram' => array( 'type' => 'textfield','heading' => 'Instagram', 'default' => ''),
        'snapchat' => array( 'type' => 'image', 'heading' => __( 'SnapChat' )),
        'twitter' => array( 'type' => 'textfield','heading' => 'Twitter', 'default' => ''),
        'linkedin' => array( 'type' => 'textfield','heading' => 'Linkedin', 'default' => ''),
        'email' => array( 'type' => 'textfield','heading' => '邮箱', 'default' => ''),
        'phone' => array( 'type' => 'textfield','heading' => '电话', 'default' => ''),
        'pinterest' => array( 'type' => 'textfield','heading' => 'Pinterest', 'default' => ''),
        'googleplus' => array( 'type' => 'textfield','heading' => 'Google Plus', 'default' => ''),
        'rss' => array( 'type' => 'textfield','heading' => 'RSS', 'default' => ''),
        'youtube' => array( 'type' => 'textfield','heading' => 'Youtube', 'default' => ''),
        'flickr' => array( 'type' => 'textfield','heading' => 'Flickr', 'default' => ''),
        'vkontakte' => array( 'type' => 'textfield','heading' => 'VKontakte', 'default' => ''),
        'px500' => array( 'type' => 'textfield','heading' => '500px', 'default' => ''),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );