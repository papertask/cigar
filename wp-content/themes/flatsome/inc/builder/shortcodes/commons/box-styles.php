<?php

if(!$default_text_align) $default_text_align = 'left';

return array(

    //
    // Image options
    //
    'image_options' => array(
        'type' => 'group',
        'heading' => __( '图片' ),
        'options' => array(

            'image_height' => array(
              'type' => 'scrubfield',
              'heading' => __('高度'),
              'conditions' => 'type !== "grid"',
              'default' => '',
              'placeholder' => __('自动'),
              'min' => 0,
              'max' => 1000,
              'step' => 1,
              'helpers' => require( __DIR__ . '/../helpers/image-heights.php' ),
               'on_change' => array(
                    'selector' => '.box-image-inner',
                    'style' => 'padding-top: {{ value }}'
                )
            ),

            'image_width' => array(
                'type' => 'slider',
                'heading' => __( '宽度' ),
                'unit' => '%',
                'default' => 100,
                'max' => 100,
                'min' => 0,
                'on_change' => array(
                    'selector' => '.box-image',
                    'style' => 'width: {{ value }}%'
                )
            ),

            'image_radius' => array(
                'type' => 'slider',
                'heading' => __( '半径' ),
                'unit' => '%',
                'default' => 0,
                'max' => 100,
                'min' => 0,
                'on_change' => array(
                    'selector' => '.box-image-inner',
                    'style' => 'border-radius: {{ value }}%'
                )
            ),

            'image_size' => array(
                'type' => 'select',
                'heading' => __( '大小' ),
                'default' => '',
                'options' => array(
                    '' => '默认',
                    'large' => '大',
                    'medium' => '中',
                    'thumbnail' => '缩略图',
                    'original' => '原始',
                )
            ),

            'image_overlay' => array(
                'type' => 'colorpicker',
                'heading' => __( '叠加' ),
                'default' => '',
                'alpha' => true,
                'format' => 'rgb',
                'position' => 'bottom right',
                'on_change' => array(
                    'selector' => '.overlay',
                    'style' => 'background-color: {{ value }}'
                )
            ),

            'image_hover' => array(
                'type' => 'select',
                'heading' => __( '悬停' ),
                'default' => '',
                'options' => require( __DIR__ . '/../values/image-hover.php' ),
                'on_change' => array(
                    'selector' => '.image-cover',
                    'class' => 'image-{{ value }}'
                )
            ),
            'image_hover_alt' => array(
                'type' => 'select',
                'heading' => __( '悬停替换' ),
                'default' => '',
                'conditions' => 'image_hover',
                'options' => require( __DIR__ . '/../values/image-hover.php' ),
                'on_change' => array(
                    'selector' => '.image-cover',
                    'class' => 'image-{{ value }}'
                )
            ),
        ),
    ),

    //
    // Text options
    //

    'text_options' => array(
        'type' => 'group',
        'heading' => __( '文字' ),
        'options' => array(

            'text_pos' => array(
                'type' => 'select',
                'heading' => __( '位置' ),
                'conditions' => 'style === "vertical" || style === "shade" || style === "overlay"',
                'default' => 'bottom',
                'options' => require( __DIR__ . '/../values/align-v.php' ),

                'on_change' => array(
                    'selector' => '.box',
                    'class' => 'box-text-{{ value }}'
                )
            ),

            'text_align' => array(
                'type' => 'radio-buttons',
                'heading' => __( '对齐' ),
                'default' => $default_text_align,
                'options' => require( __DIR__ . '/../values/align-radios.php' ),
                'on_change' => array(
                    'selector' => '.box-text',
                    'class' => 'text-{{ value }}'
                )
            ),

            'text_size' => array(
                'type' => 'radio-buttons',
                'heading' => __( '大小' ),
                'default' => 'medium',
                'options' => require( __DIR__ . '/../values/text-sizes.php' ),
                'on_change' => array(
                    'selector' => '.box-text',
                    'class' => 'is-{{ value }}'
                )
            ),

            'text_hover' => array(
                'type' => 'select',
                'heading' => __( '悬停' ),
                'default' => '',
                'options' => require( __DIR__ . '/../values/text-hover.php' ),
            ),

            'text_bg' => array(
                'type' => 'colorpicker',
                'heading' => __( '背景颜色' ),
                'default' => '',
                'alpha' => true,
                'format' => 'rgb',
                'position' => 'bottom right',
                'on_change' => array(
                    'selector' => '.box-text',
                    'style' => 'background-color:{{ value }}'
                )
            ),

            'text_color' => array(
                'type' => 'radio-buttons',
                'heading' => __( '颜色' ),
                'default' => 'light',
                'options' => array(
                    'light' => array( 'title' => '深色' ),
                    'dark' => array( 'title' => '浅色' ),
                ),
            ),
            'text_padding' => array(
              'type' => 'margins',
              'heading' => __( '填充' ),
              'value' => '',
              'full_width' => true,
              'min' => 0,
              'max' => 100,
              'step' => 1,

              'on_change' => array(
                    'selector' => '.box-text',
                    'style' => 'padding: {{ value }}'
                )
            ),
        ),
    ),
    'advanced_options' => require( __DIR__ . '/../commons/advanced.php')
);
