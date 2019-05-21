<?php 

if(!$repeater_col_spacing) $repeater_col_spacing = 'normal';
if(!$repeater_columns) $repeater_columns = '4';
if(!$repeater_type) $repeater_type = 'slider';

return array(
    'type' => 'group',
    'heading' => __( '布局' ),
    'options' => array(
        'type' => array(
            'type' => 'select',
            'heading' => '类型',
            'default' => $repeater_type,
            'options' => require( __DIR__ . '/../values/row-layouts.php' )
        ),
        'grid' => array(
            'type' => 'select',
            'heading' => '网格布局',
            'conditions' => 'type === "grid"',
            'default' => '1',
            'options' => require( __DIR__ . '/../values/grids.php' )
        ),
        'grid_height' => array(
            'type' => 'textfield',
            'heading' => __( '网格高度' ),
            'conditions' => 'type === "grid"',
            'default' => '600px',
            'responsive' => true,
            'max' => 200,
            'min' => 30,
    ),
    'width' => array(
        'type' => 'select',
        'heading' => '宽度',
        'conditions' => 'type !== "slider-full"',
        'default' => '',
        'options' => array(
            '' => '容器',
            'full-width' => '全宽',
        )
    ),
    'col_spacing' => array(
        'type' => 'select',
        'heading' => '列间距',
        'conditions' => 'type !== "slider-full"',
        'default' => $repeater_col_spacing,
        'options' => require( __DIR__ . '/../values/col-spacing.php' )
    ),
    'columns' => array(
        'type' => 'slider',
        'heading' => '列',
        'conditions' => 'type !== "grid" && type !== "slider-full"',
        'default' => $repeater_columns,
        'responsive' => true,
        'max' => '8',
        'min' => '1',
    ),
   'depth' => array(
        'type' => 'slider',
        'heading' => __( '深度' ),
        'default' => '0',
        'max' => '5',
        'min' => '0',
    ),
    'depth_hover' => array(
        'type' => 'slider',
        'heading' => __( '深度悬停' ),
        'default' => '0',
        'max' => '5',
        'min' => '0',
    ),
    'animate' => array(
        'type' => 'select',
        'heading' => __( '动画' ),
        'default' => 'none',
        'options' => require( __DIR__ . '/../values/animate.php' ),
    ),
  ),
);