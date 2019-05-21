<?php

add_ux_builder_shortcode( 'video_button', array(
  'name' => __( '视频按钮' ),
  'category' => __( '内容' ),
  'thumbnail' =>  flatsome_ux_builder_thumbnail( 'play' ),

  'options' => array(
      'video' => array(
        'type' => 'textfield',
        'heading' => '视频',
        'description' => '在这里输入Youtube或Vimeo视频。视频将在灯箱中打开。例如：https://www.youtube.com/watch?v=AoPiLg8DZ3A',
      ),
      'size' => array(
        'type' => 'slider',
        'heading' => __('大小'),
        'unit' => '%',
        'default' => '100',
        'max' => '500',
        'min' => '0',
        'on_change' => array(
            'style' => 'font-size: {{ value }}%'
        )
      ),
  )
) );
