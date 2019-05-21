<?php

add_ux_builder_shortcode( 'button', array(
    'name' => __( '按钮' ),
    'category' => __( '内容' ),
    'template' => flatsome_ux_builder_template( 'button.html' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button' ),
    'info' => '{{ text }}',
    'inline' => true,
    'wrap'   => false,
    'priority' => 1,

    'presets' => array(
        array(
            'name' => __( '简单' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-simple' ),
            'content' => '[button text="点击我"]'
        ),
        array(
            'name' => __( '圆形' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-round' ),
            'content' => '[button text="点击我" radius="10"]'
        ),
        array(
            'name' => __( '圆圈' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-circle' ),
            'content' => '[button text="点击我" radius="99"]'
        ),
        array(
            'name' => __( '轮廓' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-outline' ),
            'content' => '[button text="点击我" style="outline"]'
        ),
        array(
            'name' => __( '圆形轮廓' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-outline-round' ),
            'content' => '[button text="点击我" style="outline" radius="10"]'
        ),
        array(
            'name' => __( '圆圈轮廓' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-outline-circle' ),
            'content' => '[button text="点击我" style="outline" radius="99"]'
        ),
        array(
            'name' => __( '简单链接' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-link' ),
            'content' => '[button text="点击我"  style="link"]'
        ),
        array(
            'name' => __( '下划线' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-underline' ),
            'content' => '[button text="点击我"  style="underline"]'
        ),
        array(
            'name' => __( '行为号召 - 小' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-call-to-action' ),
            'content' => '[button text="点击我" style="shade" depth="3" depth_hover="5" radius="5"]'
        ),
        array(
            'name' => __( '行为号召 - 大' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'button-call-to-action-large' ),
            'content' => '[button text="点击我" style="shade" size="larger" depth="4" depth_hover="5" radius="10"]'
        ),
    ),

    'options' => array(

        'text' => array(
            'type' => 'textfield',
            'holder' => 'button',
            'heading' => '文字',
            'param_name' => 'text',
            'focus' => 'true',
            'value' => '按钮',
            'default' => '',
            'auto_focus' => true,
        ),

        'letter_case' => array(
            'type' => 'radio-buttons',
            'heading' => '字母大小写',
            'default' => '',
            'options' => array(
                '' => array( 'title' => 'ABC'),
                'lowercase' => array( 'title' => 'Abc' ),
            ),
        ),

      'layout_options' => array(
        'type' => 'group',
        'heading' => '布局',
        'options' => array(
          'color' => array(
            'type' => 'select',
            'heading' => '颜色',
            'default' => 'primary',
            'options' => array(
                'primary' => '主要',
                'secondary' => '次要',
                'alert' => '提醒',
                'success' => '成功',
                'white' => '白色',
            )
        ),
        'style' => array(
            'type' => 'select',
            'heading' => '风格',
            'default' => '',
            'options' => array(
                '' => '默认',
                'outline' => '轮廓',
                'link' => '简单',
                'underline' => '下划线',
                'shade' => '阴影',
                'bevel' => '斜角',
                'gloss' => '光泽',
            )
        ),
        'size' => array(
            'type' => 'select',
            'heading' => '大小',
            'options' => require( __DIR__ . '/values/sizes.php' ),
        ),
        'animate' => array(
            'type' => 'select',
            'heading' => '动画',
            'default' => 'none',
            'options' => require( __DIR__ . '/values/animate.php' ),
        ),

        'radius' => array(
            'type' => 'slider',
            'class' => '',
            'heading' => '半径',
            'default' => '0',
            'max' => '99',
            'min' => '0',
        ),

        'depth' => array(
            'type' => 'slider',
            'class' => '',
            'heading' => '深度',
            'default' => '0',
            'max' => '5',
            'min' => '0',
        ),

        'depth_hover' => array(
            'type' => 'slider',
            'class' => '',
            'heading' => '深度：悬停',
            'param_name' => 'depth_hover',
            'default' => '0',
            'max' => '5',
            'min' => '0',
        ),
        'expand' => array(
            'type' => 'checkbox',
            'heading' => '扩大',
        ),
       ),
      ),
      'icon_options' => array(
            'type' => 'group',
            'heading' => '图标',
            'options' => array(
                'icon' => array(
                    'type' => 'select',
                    'heading' => '图标',
                    'options' => require( __DIR__ . '/values/icons.php' ),
                ),
                'icon_pos' => array(
                    'conditions' => 'icon',
                    'type' => 'select',
                    'heading' => '位置',
                    'options' => array(
                        '' => '右',
                        'left' => '左',
                    )
                ),
                'icon_reveal' => array(
                    'conditions' => 'icon',
                    'type' => 'select',
                    'heading' => '可见性',
                    'options' => array(
                        '' => '始终可见',
                        'true' => '悬停时可见',
                    )
                ),
            ),
        ),
        'link_options' => require( __DIR__ . '/commons/links.php' ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php')
    ),
) );
