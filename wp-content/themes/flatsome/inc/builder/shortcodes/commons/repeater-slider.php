<?php
return array(
'type' => 'group',
'heading' => __( '幻灯片' ),
'conditions' => 'type === "slider" || type === "slider-full"',
'options' => array(
'slider_nav_style' => array(
    'type' => 'select',
    'heading' => "导航风格",
    'default' => 'reveal',
    'options' => require( __DIR__ . '/../values/slider-nav-styles.php' )
),
'slider_nav_color' => array(
    'type' => 'select',
    'heading' => "导航颜色",
    'default' => '',
    'options' => array(
        'light' => '浅色',
        '' => '深色',
    )
),
'slider_nav_position' => array(
    'type' => 'select',
    'heading' => "导航位置",
    'default' => 'inside',
    'options' => array(
        'inside' => '内',
        'outside' => '外',
    )
),
'slider_bullets' => array(
    'type' => 'select',
    'heading' => "项目符号",
    'default' => '',
    'options' => array(
        '' => '禁用',
        'true' => '启用',
    )
),
'auto_slide' => array(
    'type' => 'select',
    'heading' => '自动滑动',
    'default' => '',
    'options' => array(
        '' => '禁用',
        '2000' => '2 秒.',
        '3000' => '3 秒.',
        '4000' => '4 秒.',
        '5000' => '5 秒.',
        '6000' => '6 秒.',
        '7000' => '7 秒.',
    )
),
)
);
