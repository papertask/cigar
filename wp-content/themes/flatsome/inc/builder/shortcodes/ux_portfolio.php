<?php

// Shortcode to display product categories

$repeater_columns = '4';
$repeater_type = 'slider';
$default_text_align = 'center';
$repeater_col_spacing = 'small';

$options = array(
'portfolio_meta' => array(
    'type' => 'group',
    'heading' => __( '选项' ),
    'options' => array(

    'style' => array(
        'type' => 'select',
        'heading' => __( '风格' ),
        'default' => 'bounce',
        'options' => require( __DIR__ . '/values/box-layouts.php' )
    ),

     'filter' => array(
            'type' => 'radio-buttons',
            'heading' => __('筛选'),
            'default' => '',
            'options' => array(
                ''  => array( 'title' => '关'),
                'true'  => array( 'title' => '开'),
            ),
        ),

    'filter_nav' => array(
        'type' => 'select',
        'heading' => __( '筛选风格' ),
        'conditions' => 'filter',
        'default' => 'line-grow',
        'options' => require( __DIR__ . '/values/nav-styles.php' ),
    ),

    'filter_align' => array(
        'type' => 'radio-buttons',
        'conditions' => 'filter',
        'heading' => '筛选对齐',
        'default' => 'center',
        'options' => require( __DIR__ . '/values/align-radios.php' ),
    ),

    'lightbox' => array(
        'type' => 'radio-buttons',
        'heading' => __('灯箱'),
        'default' => '',
        'options' => array(
            ''  => array( 'title' => '关'),
            'true'  => array( 'title' => '开'),
        ),
    ),

    'ids' => array(
        'type' => 'select',
        'heading' => 'Id',
        'config' => array(
            'multiple' => true,
            'placeholder' => '选择..',
            'postSelect' => array(
                'post_type' => array( 'featured_item' )
            ),
        )
    ),

    'cat' => array(
        'type' => 'select',
        'heading' => '分类',
        'conditions' => 'ids == ""',
        'config' => array(
            'placeholder' => '选择..',
            'termSelect' => array(
                'post_type' => 'featured_item',
                'taxonomies' => 'featured_item_category'
            ),
        )
    ),

    'number' => array(
        'type' => 'textfield',
        'heading' => '总计',
        'conditions' => 'ids == ""',
        'default' => '',
    ),

    'offset' => array(
        'type' => 'textfield',
        'heading' => '偏移',
        'conditions' => 'ids == ""',
        'default' => '',
    ),

    'orderby' => array(
        'type' => 'select',
        'heading' => __( '排序方式' ),
        'default' => 'menu_order',
        'conditions' => 'ids == ""',
        'options' => array(
            'name' => '名字',
            'date' => '日期',
            'menu_order' => '菜单顺序',
        )
    ),
    'order' => array(
        'type' => 'select',
        'heading' => __( '顺序' ),
        'conditions' => 'ids == ""',
        'default' => 'desc',
        'options' => array(
          'desc' => '降序',
          'asc' => '升序',
        )
    ),
  ),
),
'layout_options' => require( __DIR__ . '/commons/repeater-options.php' ),
);
$box_styles = require( __DIR__ . '/commons/box-styles.php' );

$options = array_merge($options, $box_styles);

$advanced = array('advanced_options' => require( __DIR__ . '/commons/advanced.php'));
$options = array_merge($options, $advanced);

add_ux_builder_shortcode( 'ux_portfolio', array(
   'name' => __( '作品' ),
   'category' => __( '内容' ),
   'wrap' => true,
   'thumbnail' =>  flatsome_ux_builder_thumbnail( 'portfolio' ),
    'scripts' => array(
        'flatsome-masonry-js' => get_template_directory_uri() .'/assets/libs/packery.pkgd.min.js',
        'flatsome-isotope-js' => get_template_directory_uri() .'/assets/libs/isotope.pkgd.min.js',
    ),
   'presets' => array(
        array(
            'name' => __( '正常' ),
            'content' => '[ux_portfolio]'
        ),
        array(
            'name' => __( '正常灯箱' ),
            'content' => '[ux_portfolio lightbox="true"]'
        ),
        array(
            'name' => __( '简单筛选' ),
            'content' => '[ux_portfolio style="overlay" filter="true" orderby="name" type="masonry" grid="3" image_hover="overlay-add-50" image_hover_alt="zoom" text_pos="middle" text_size="large" text_hover="slide"]'
        ),array(
            'name' => __( '轮廓导航筛选' ),
            'content' => '[ux_portfolio style="overlay" filter="true" filter_nav="outline" orderby="name" type="masonry" grid="3" image_hover="overlay-add-50" image_hover_alt="blur" text_pos="middle"]'
        ),array(
            'name' => __( '简单幻灯片' ),
            'content' => '[ux_portfolio style="shade" filter_nav="outline" orderby="name" grid="3" columns="5" image_hover="zoom" image_hover_alt="grayscale"]'
        ),
        array(
            'name' => __( '网格风格' ),
            'content' => '[ux_portfolio style="overlay" filter="true" filter_nav="outline" number="4" orderby="name" type="grid" grid="3" image_hover="overlay-add-50" image_hover_alt="zoom" text_align="left" text_size="large" text_hover="bounce"]'
        ),
        array(
            'name' => __( '网格风格2' ),
            'content' => '[ux_portfolio style="overlay" filter="true" filter_nav="outline" number="4" orderby="name" type="grid" grid="3" width="full-width" col_spacing="collapse" image_hover="overlay-add-50" image_hover_alt="zoom" text_align="left" text_size="large" text_hover="bounce"]'
        )
    ),
    'options' => $options
) );
