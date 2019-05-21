<?php
// Border Control
return array(
      'type' => 'group',
      'heading' => __( '边框' ),
      'options' => array(
        'border' => array(
            'type' => 'margins',
            'heading' => '宽度',
            'full_width' => true,
            'min' => 0,
            'max' => 100,
            'step' => 1,
        ),
        'border_margin' => array(
            'type' => 'margins',
            'heading' => '边距',
            'conditions' => 'border',
            'full_width' => true,
            'min' => -100,
            'max' => 100,
            'step' => 1,
        ),
        'border_style' => array(
            'type' => 'radio-buttons',
            'heading' => '风格',
            'full_width' => true,
            'conditions' => 'border',
            'default' => '',
            'options' => array(
                ''   => array( 'title' => '实线'),
                'dashed'  => array( 'title' => '虚线'),
                'dotted'  => array( 'title' => '点线'),
            ),
        ),
        'border_radius' => array(
            'type' => 'slider',
            'heading' => '半径',
            'conditions' => 'border',
            'unit' => 'px',
            'min' => 0,
            'max' => 100,
            'step' => 1,
        ),
        'border_color' => array(
          'type' => 'colorpicker',
          'heading' => __('颜色'),
          'conditions' => 'border',
          'responsive' => true,
          'alpha' => true,
          'format' => 'rgb',
          'position' => 'bottom right',
        ),
        'border_hover' => array(
            'type' => 'select',
            'heading' => __( '悬停' ),
            'default' => '',
            'conditions' => 'border',
            'options' => require( __DIR__ . '/../values/text-hover.php' ),
        ),
),
);