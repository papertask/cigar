<?php

global $wp_registered_sidebars;

$sidebar_options = array();
foreach ($GLOBALS['wp_registered_sidebars'] as $sidebar){
    $sidebar_options[$sidebar['id']] = $sidebar['name'];
}

// TODO: Get sidebars
add_ux_builder_shortcode( 'ux_sidebar', array(
    'name' => __( '小工具区域' ),
    'category' => __( '布局' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'sidebar' ),
    'options' => array(
        'id' => array(
            'type' => 'select',
            'heading' => '选择',
            'default' => 'sidebar-main',
            'options' => $sidebar_options,
            'description' => '您可以在WP管理 > 外观 > 小工具中编辑小工具区域'
        ),
        'style' => array(
            'type' => 'select',
            'heading' => __( '小工具风格' ),
            'default' => '',
            'options' => array(
                '' => '默认',
                'framed' => '框架',
                'boxed' => '框式'
            )
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),

    ),
) );