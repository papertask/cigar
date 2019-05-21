<?php

add_ux_builder_shortcode( 'message_box', array(
    'name' => __( '信息框' ),
    'type' => 'container',
    'category' => __( '内容' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'message_box' ),
    'template' => flatsome_ux_builder_template( 'message_box.html' ),
     'presets' => array(
        array(
            'name' => __( '默认' ),
            'content' => '[message_box] [row_inner v_align="middle" h_align="center"] [col_inner span="9" span__sm="12"] <p>而且，并不是所有的国外品牌，都在今年获得丰收，德系稳定增长，美系日系增长抢眼，法系和韩系，日子却过得相当苦</p> [/col_inner] [col_inner span="2" span__sm="12" align="center"] [button text="Click me" color="white" style="outline" radius="99"] [/col_inner] [/row_inner] [/message_box]',
        ),
    ),
    'options' => array(
        'bg' => array(
          'type' => 'image',
          'heading' => __( '背景图片' ),
          'thumb_size' => 'bg_size',
        ),
        'bg_color' => array(
          'type' => 'colorpicker',
          'heading' => __('背景颜色'),
          'alpha' => true,
          'format' => 'rgb',
          'position' => 'bottom right',
        ),
        'text_color' => array(
            'type' => 'radio-buttons',
            'heading' => __( '颜色' ),
            'default' => 'dark',
            'options' => array(
                'light' => array( 'title' => '深色' ),
                'dark' => array( 'title' => '浅色' ),
            ),
        ),
        'padding' => array(
          'type' => 'slider',
          'heading' => __('填充'),
          'max' => 200,
          'min' => 0,
          'default' => 15
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );
