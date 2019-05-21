<?php

add_ux_builder_shortcode( 'ux_banner_grid', array(
    'type' => 'container',
    'name' => __( '网格' ),
    'image' => '',
    'wrap' => false,
    'category' => __( '布局' ),
    'template' => flatsome_ux_builder_template( 'ux_banner_grid.html' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grid' ),
    'allow' => array( 'col_grid' ),
    'info' => '{{ label }}',
    'directives' => array( 'ux-banner-grid' ),
    'add_buttons' => array( 'bottom-right' ),
    'addable_spots' => array(),

    'scripts' => array(
        'flatsome-packery' => get_template_directory_uri() . '/assets/libs/packery.pkgd.min.js',
    ),

    // Override children data.
    'children' => array(
        'addable_spots' => array( 'center' ),
    ),

    'presets' => array(
        array(
        'name' => __( '网格1' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-1' ),
        'content' => '[ux_banner_grid] [col_grid span="6"] [/col_grid] [col_grid span="3"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [/ux_banner_grid]'
        ),
        array(
        'name' => __( '网格2' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-2' ),
        'content' => '[ux_banner_grid] [col_grid height="2-3"] [/col_grid] [col_grid span="4" height="1-3"] [/col_grid] [col_grid span="4" height="1-3"] [/col_grid] [col_grid span="4" height="1-3"] [/col_grid] [/ux_banner_grid]'
        ),
        array(
        'name' => __( '网格3' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-3' ),
        'content' => '[ux_banner_grid] [col_grid span="6"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [/ux_banner_grid]'
        ),
        array(
        'name' => __( '网格4' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-4' ),
        'content' => '[ux_banner_grid] [col_grid span="9"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [/ux_banner_grid]'
        ),
        array(
        'name' => __( '网格5' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-5' ),
        'content' => '[ux_banner_grid] [col_grid span="3"] [/col_grid] [col_grid span="6"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [/ux_banner_grid]'
        ),
        array(
        'name' => __( '网格6' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-6' ),
        'content' => '[ux_banner_grid] [col_grid span="4" height="1-3"] [/col_grid] [col_grid span="8"] [/col_grid] [col_grid span="4" height="1-3"] [/col_grid] [col_grid span="4" height="1-3"] [/col_grid] [/ux_banner_grid]'
        ),
        array(
        'name' => __( '网格7' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-7' ),
        'content' => '[ux_banner_grid] [col_grid span="8" height="2-3"] [/col_grid] [col_grid span="4" height="1-3"] [/col_grid] [col_grid span="4" height="2-3"] [/col_grid] [col_grid span="8" height="1-3"] [/col_grid] [/ux_banner_grid]'
        ),
        array(
        'name' => __( '网格8' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-8' ),
        'content' => '[ux_banner_grid] [col_grid span="6" height="2-3"] [/col_grid] [col_grid span="6" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="6" height="1-3"] [/col_grid] [/ux_banner_grid]'
        ),
        array(
        'name' => __( '网格9' ),
        'thumbnail' =>  flatsome_ux_builder_thumbnail( 'grids/grid-9' ),
        'content' => '[ux_banner_grid] [col_grid span="6"] [/col_grid] [col_grid span="6" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [col_grid span="3" height="1-2"] [/col_grid] [/ux_banner_grid]'
        ),
    ),

    'options' => array(
          'label' => array(
            'type' => 'textfield',
            'heading' => '管理标签',
            'placeholder' => '输入管理标签...'
          ),
          'spacing' => array(
            'type' => 'radio-buttons',
            'heading' => '间距',
            'full_width' => true,
            'default' => 'small',
            'options' => array(
                    'xsmall' => array( 'title' => '特小' ),
                    'small' => array( 'title' => '小' ),
                    '' => array( 'title' => '正常'),
                    'large' => array( 'title' => '大' ),
                    'collapse' => array( 'title' => '折叠' ),
             ),
          ),
         'height' => array(
            'type' => 'slider',
            'responsive' => true,
            'full_width' => true,
            'heading' => __('高度'),
            'debounce' => 300,
            'description' => __('设置最高列的高度'),
            'default' => 600,
            'responsive' => true,
            'min' => 0,
            'max' => 1000,
            'step' => 1,
        ),
        'width' => array(
        'type' => 'select',
        'heading' => '宽度',
        'default' => '',
        'options' => array(
                '' => '容器',
                'full-width' => '全宽',
            )
        ),

        'depth' => array(
            'type' => 'slider',
            'vertical' => true,
            'heading' => '列深度',
            'default' => 0,
            'max' => 5,
            'min' => 0,
        ),
        'depth_hover' => array(
            'type' => 'slider',
            'vertical' => true,
            'heading' => '列悬停深度',
            'default' => 0,
            'max' => 5,
            'min' => 0,
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );
