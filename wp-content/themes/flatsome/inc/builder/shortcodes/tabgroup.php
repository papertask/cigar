<?php

add_ux_builder_shortcode( 'tabgroup', array(
    'type' => 'container',
    'name' => __( '选项卡' ),
    'image' => '',
    'category' => __( '内容' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'tabs' ),
    'template' => flatsome_ux_builder_template( 'tabgroup.html' ),
    'tools' => 'shortcodes/tabgroup/tabgroup.tools.html',
    'info' => '{{ title }}',
    'allow' => array( 'tab' ),

    'children' => array(
        'draggable' => false,
        'addable_spots' => array( 'center' ),
    ),

    'toolbar' => array(
        'show_children_selector' => true,
        'show_on_child_active' => true,
    ),

    'presets' => array(
        array(
            'name' => __( '默认' ),
            'content' => '
                [tabgroup title="选项卡标题"]
                    [tab title="选项卡1标题"][/tab]
                    [tab title="选项卡2标题"][/tab]
                    [tab title="选项卡3标题"][/tab]
                [/tabgroup]
            '
        ),
    ),

    'options' => array(

        'title' => array(
            'type' => 'textfield',
            'heading' => __( '标题' ),
            'default' => __( '' ),
        ),

        'style' => array(
            'type' => 'select',
            'heading' => __( '风格' ),
            'default' => 'line',
            'options' => require( __DIR__ . '/values/nav-styles.php' ),
        ),

        'type' => array(
            'type' => 'select',
            'heading' => __( '类型' ),
            'default' => 'horizontal',
            'options' => array(
                'horizontal' => '水平',
                'vertical' => '垂直',
            )
        ),

        'nav_style' => array(
          'type' => 'radio-buttons',
          'heading' => '导航风格',
          'default' => 'uppercase',
          'options' => require( __DIR__ . '/values/nav-types-radio.php' ),
        ),

        'nav_size' => array(
            'type' => 'radio-buttons',
            'heading' => __( '大小' ),
            'default' => 'medium',
            'options' => require( __DIR__ . '/values/text-sizes.php' ),
        ),

        'align' => array(
            'type' => 'radio-buttons',
            'heading' => '选项卡对齐',
            'default' => 'left',
            'options' => require( __DIR__ . '/values/align-radios.php' ),
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );
