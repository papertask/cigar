<?php

add_ux_builder_shortcode( 'ux_video', array(
    'name' => __( '视频','ux-builder'),
    'category' => __( '内容' ),
//    'toolbar_thumbnail' => 'id',
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'ux_video' ),
    'allow_in' => array('text_box'),
    'wrap' => true,
    'overlay' => true,
    'options' => array(

        'url' => array(
            'type' => 'textfield',
            'full_width' => true,
            'default' => 'https://www.youtube.com/watch?v=AoPiLg8DZ3A',
            'heading' => '视频网址',
            'description' => '在这里输入Youtube或Vimeo视频。 例：https://www.youtube.com/watch?v=AoPiLg8DZ3A',
        ),

        'height' => array(
              'type' => 'scrubfield',
              'heading' => __('高度'),
              'default' => '56.25%',
              'placeholder' => __('自动'),
              'min' => 0,
              'max' => 1000,
              'step' => 1,
              'helpers' => require( __DIR__ . '/helpers/image-heights.php' ),
               'on_change' => array(
                    'selector' => '.video',
                    'style' => 'padding-top: {{ value }}'
                )
        ),


        'depth' => array(
            'type' => 'slider',
            'heading' => '深度',
            'default' => '0',
            'max' => '5',
            'min' => '0',
            'on_change' => array(
                'selector' => '.video',
                'class' => 'box-shadow-{{ value }}'
            )
        ),

        'depth_hover' => array(
            'type' => 'slider',
            'heading' => '深度：悬停',
            'default' => '0',
            'max' => '5',
            'min' => '0',
            'on_change' => array(
                'selector' => '.video',
                'class' => 'box-shadow-{{ value }}-hover'
            )
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );
