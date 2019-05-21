<?php 
return array(
  'type' => 'group',
  'heading' => __( '幻灯片' ),
  'require' => 'ux_slider',
  'options' => array(
    'slide_effect' => array(
      'type' => 'select',
      'heading' => '幻灯片效果',
      'options' => array(
        '' => '无',
        'fade-in' => '淡入',
        'zoom-in' => '放大',
        'zoom-out' => '缩小',
        'fade-in-fast' => '快速淡入',
        'zoom-in-fast' => '快速放大',
        'zoom-out-fast' => '快速缩小',
      ),
    ),
  ),
);