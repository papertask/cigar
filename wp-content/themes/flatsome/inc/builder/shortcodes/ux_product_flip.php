<?php

// Shortcode to display a single product
$repeater_posts = 'products';
$repeater_post_type = 'product';
$repeater_post_cat = 'product_cat';

$options = array(

'post_options' => require( __DIR__ . '/commons/repeater-posts.php' ),

'filter_posts' => array(
    'type' => 'group',
    'heading' => __( '筛选文章' ),
    'conditions' => 'ids === ""',
    'options' => array(
         'orderby' => array(
            'type' => 'select',
            'heading' => __( '排序方式' ),
            'default' => 'normal',
            'options' => array(
                'normal' => '正常',
                'sales' => '销量',
                'rand' => '随机',
                'date' => '日期'
            )
        ),
        'order' => array(
            'type' => 'select',
            'heading' => __( '顺序' ),
            'default' => 'asc',
            'options' => array(
                'asc' => '升序',
                'desc' => '降序',
            )
        ),
        'show' => array(
            'type' => 'select',
            'heading' => __( '顺序' ),
            'default' => '',
            'options' => array(
                '' => '所有',
                'featured' => '推荐',
                'onsale' => '促销',
            )
        )
    )
)
);

add_ux_builder_shortcode( 'ux_product_flip', array(
    'name' => '翻书',
    'category' => __( '商店' ),
    'priority' => 4,
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'product_flipbook' ),
    'wrap' => false,
   'presets' => array(
        array(
            'name' => __( '正常' ),
            'content' => '[ux_product_flip]'
        ),
    ),

    'options' => $options
) );
