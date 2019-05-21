<?php

add_ux_builder_shortcode( 'team_member', array(
    'name' => __( '团队成员' ),
    'category' => __( '内容' ),
    'type' => 'container',
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'team_member' ),

    'presets' => array(
        array(
            'name' => __( '默认' ),
            'content' => '[team_member name="李四" title="客户支持" image_height="100%" image_width="80" image_radius="100"] 了解更多.. [/team_member]'
        ),
    ),

    'options' => array_merge_recursive( array(
        'layout_options' => array(
            'type' => 'group',
            'heading' => __( '布局' ),
            'options' => array(
                'img' => array(
                    'type' => 'image',
                    'heading' => '图片',
                    'group' => 'background',
                    'param_name' => 'img',
                ),
                'style' => array(
                    'type' => 'select',
                    'heading' => __( '风格' ),
                    'default' => 'normal',
                    'options' => require( __DIR__ . '/values/box-layouts.php' )
                ),

                'name' => array( 'type' => 'textfield','heading' => '名字', 'default' => '', 'on_change' => array( 'selector' => '.person-name', 'content' => '{{ value }}')),
                'title' => array( 'type' => 'textfield','heading' => '标题', 'default' => '',  'on_change' => array( 'selector' => '.person-title', 'content' => '{{ value }}')),
                'depth' => array(
                    'type' => 'slider',
                    'heading' => __( '深度' ),
                    'default' => '0',
                    'max' => '5',
                    'min' => '0',
                ),
                'depth_hover' => array(
                    'type' => 'slider',
                    'heading' => __( '深度：悬停' ),
                    'default' => '0',
                    'max' => '5',
                    'min' => '0',
                ),
            ),
        ),
        'social_icons' => array(
            'type' => 'group',
            'heading' => __( '社交图标' ),
            'options' => array(
               'icon_style' => array(
                    'type' => 'radio-buttons',
                    'heading' => __( '风格' ),
                    'default' => 'outline',
                    'options' => array(
                        'outline' => array( 'title' => '轮廓' ),
                        'fill' => array( 'title' => '填充' ),
                        'small' => array( 'title' => '小' ),
                    ),
                ),
                'facebook' => array( 'type' => 'textfield','heading' => 'Facebook', 'default' => ''),
                'instagram' => array( 'type' => 'textfield','heading' => 'Instagram', 'default' => ''),
                'twitter' => array( 'type' => 'textfield','heading' => 'Twitter', 'default' => ''),
                'googleplus' => array( 'type' => 'textfield','heading' => 'Google+', 'default' => ''),
                'youtube' => array( 'type' => 'textfield','heading' => 'Youtube', 'default' => ''),
                'email' => array( 'type' => 'textfield','heading' => '邮箱', 'default' => ''),
                'phone' => array( 'type' => 'textfield','heading' => '电话', 'default' => ''),
                'pinterest' => array( 'type' => 'textfield','heading' => 'Pinterest', 'default' => ''),
                'linkedin' => array( 'type' => 'textfield','heading' => '领英', 'default' => ''),
                'snapchat' => array( 'type' => 'image', 'heading' => __( 'SnapChat' )),
            ),
        ),
        'link_group' => require( __DIR__ . '/commons/links.php' ),
    ),
    require( __DIR__ . '/commons/box-styles.php' ) ),
) );

// ux_builder_parse_args
