<?php

add_ux_builder_shortcode( 'col', array(
    'type' => 'container',
    'name' => __( '列', 'ux-builder' ),
    'category' => __( '布局' ),
    'template' => flatsome_ux_builder_template( 'col.html' ),
    'tools' => 'shortcodes/col/col-tools.directive.html',
    'info' => '{{ span }}/12',
    'require' => array( 'row' ),
    'wrap'   => false,
    'inline' => true,
    'nested' => true,
    'resize' => array( 'right' ),

    'presets' => array(
        array(
            'name' => __( '默认' ),
            'content' => '[col span="4" span__sm="12"][/col]',
        ),
    ),

    'options' => array(

        'span' => array(
            'type' => 'col-slider',
            'heading' => '宽度',
            'full_width' => true,
            'responsive' => true,
            'auto_focus' => true,
            'default' => 12,
            'max' => 12,
            'min' => 1,
        ),

        'force_first' => array(
            'type' => 'select',
            'heading' => '强制第一位置',
            'default' => '',
            'options' => array(
                ''   => '不',
                'medium' => '在平板',
                'small'  => '在手机'
            )
        ),

        'divider' => array(
            'type' => 'checkbox',
            'heading' => '分隔',
        ),

        'padding' => array(
            'type' => 'margins',
            'heading' => '填充',
            'full_width' => true,
            'min' => 0,
            'max' => 200,
            'step' => 1,
        ),

        'margin' => array(
            'type' => 'margins',
            'heading' => '边距',
            'full_width' => true,
            'min' => -200,
            'max' => 200,
            'step' => 1,
        ),

        'align' => array(
            'type' => 'radio-buttons',
            'heading' => '文字对齐方式',
            'default' => '',
            'options' => require( __DIR__ . '/values/align-radios.php' ),
        ),

        'bg_color' => array(
            'type' => 'colorpicker',
            'heading' => __('背景颜色'),
            'format' => 'rgb',
            'alpha' => true,
            'position' => 'bottom right',
            'helpers' => require( __DIR__ . '/helpers/colors.php' ),
        ),

        'color' => array(
            'type' => 'radio-buttons',
            'heading' => '颜色',
            'default' => '',
            'options' => array(
                'light'   => array( 'title' => '浅色'),
                ''  => array( 'title' => '深色'),
            ),
        ),

        'text_depth' => array(
              'type' => 'slider',
              'heading' => __('文字阴影'),
              'default' => '0',
              'unit' => '+',
              'max' => '5',
              'min' => '0',
        ),

        'max_width' => array(
            'type' => 'scrubfield',
            'heading' => '最大宽度',
            'default' => '',
            'min' => '0'
        ),


        'animate' => array(
            'type' => 'select',
            'heading' => '动画',
            'default' => 'none',
            'options' => require( __DIR__ . '/values/animate.php' ),
        ),

        'hover' => array(
            'type' => 'select',
            'heading' => '悬停效果',
            'options' => array(
                '' => '无',
                'fade' => '淡入',
                'focus' => '焦点',
                'blur' => '模糊',
            ),
        ),

        'tooltip' => array(
            'type' => 'textfield',
            'heading' => '提示',
        ),

        'parallax' => array(
            'type' => 'slider',
            'vertical' => true,
            'heading' => '视差',
            'default' => 0,
            'max' => 10,
            'min' => -10,
        ),

        'depth' => array(
            'type' => 'slider',
            'vertical' => true,
            'heading' => '深度',
            'default' => 0,
            'max' => 5,
            'min' => 0,
        ),

        'depth_hover' => array(
            'type' => 'slider',
            'vertical' => true,
            'heading' => '悬停深度',
            'default' => 0,
            'max' => 5,
            'min' => 0,
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );
