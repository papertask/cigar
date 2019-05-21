<?php

return array(
      'type' => 'group',
      'heading' => __( '背景' ),
      'options' => array(
        'bg' => array(
          'type' => 'image',
          'heading' => __( '图片' ),
          'thumb_size' => 'bg_size',
          'bg_position' => 'bg_pos',
        ),
        'bg_size'=> array(
          'type' => 'select',
          'heading' => '大小',
          'default' => 'large',
          'conditions' => 'bg',
          'options' => array(
            'orginal' => '原始',
            'large' => '大',
            'medium' => '中',
            'thumbnail' => '缩略图',
          )
        ),
        'bg_color' => array(
          'type' => 'colorpicker',
          'heading' => __('颜色'),
          'format' => 'rgb',
          'position' => 'bottom right',
          'helpers' => require( __DIR__ . '/../helpers/colors.php' ),
        ),
        'bg_overlay' => array(
          'type' => 'colorpicker',
          'heading' => __('叠加'),
          'responsive' => true,
          'alpha' => true,
          'format' => 'rgb',
          'position' => 'bottom right',
          'helpers' => require( __DIR__ . '/../helpers/colors-overlay.php' ),
        ),
        'bg_pos' => array(
          'conditions' => 'bg',
          'type' => 'textfield',
          'heading' => __('位置'),
        ),
        'hover' => array(
          'conditions' => 'bg',
          'type' => 'select',
          'heading' => '悬停',
          'options' => require( __DIR__ . '/../values/image-hover.php' ),
        ),
        'hover_alt' => array(
          'conditions' => 'hover',
          'type' => 'select',
          'heading' => '悬停替换',
          'options' => require( __DIR__ . '/../values/image-hover.php' ),
        ),
        'parallax' => array(
            'conditions' => 'bg',
            'type' => 'slider',
            'heading' => '视差',
            'unit' => '+',
            'default' => 0,
            'max' => 10,
            'min' => 0,
        ),
       'effect' => array(
            'type' => 'select',
            'heading' => '效果',
            'options' => array(
              '' => '无效果',
              'snow' => '雪花',
              'confetti' => '五彩纸屑',
              'sliding-glass' => '滑动玻璃',
              'sparkle' => '火花',
              'rain' => '下雨',
            ),
        ),
    ),
);