<?php

// Shortcode to display a single product
$repeater_columns = '4';
$repeater_type = 'slider';
$repeater_col_spacing = 'small';

$repeater_posts = 'products';
$repeater_post_type = 'product';
$repeater_post_cat = 'product_cat';

$options = array(
'style_options' => array(
    'type' => 'group',
    'heading' => __( '风格' ),
    'options' => array(
         'style' => array(
            'type' => 'select',
            'heading' => __( '风格' ),
            'default' => 'default',
            'options' => require( __DIR__ . '/values/box-layouts.php' )
        )
    ),
),
'layout_options' => require( __DIR__ . '/commons/repeater-options.php' ),
'layout_options_slider' => require( __DIR__ . '/commons/repeater-slider.php' ),
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
                'title' => '标题',
                'sales' => '促销',
                'rand' => '随机',
                'date' => '日期'
            )
        ),
        'order' => array(
            'type' => 'select',
            'heading' => __( '顺序' ),
            'default' => 'desc',
            'options' => array(
                'asc' => '升序',
                'desc' => '降序',
            )
        ),
        'show' => array(
            'type' => 'select',
            'heading' => __( '显示' ),
            'default' => '',
            'options' => array(
                '' => '所有',
                'featured' => '推荐',
                'onsale' => '促销',
            )
        ),
         'out_of_stock' => array(
	         'type'    => 'select',
	         'heading' => __( '缺货' ),
	         'default' => '',
	         'options' => array(
		         ''        => '包含',
		         'exclude' => '排除',
	         ),
         ),
    )
)
);

$box_styles = require( __DIR__ . '/commons/box-styles.php' );
$options = array_merge($options, $box_styles);

$options['image_options']['conditions'] = 'style !== "default"';
$options['text_options']['conditions'] = 'style !== "default"';
$options['layout_options']['options']['depth']['conditions'] = 'style !== "default"';
$options['layout_options']['options']['depth_hover']['conditions'] = 'style !== "default"';

$options['post_options']['options']['tags'] = array(
  'type' => 'select',
  'heading' => '标签',
  'conditions' => 'ids === ""',
  'default' => '',
  'config' => array(
      'placeholder' => '选择...',
      'termSelect' => array(
          'post_type' => 'product',
          'taxonomies' => 'product_tag',
      ),
  )
);

add_ux_builder_shortcode( 'ux_products', array(
    'name' => '产品',
    'category' => __( '商店' ),
    'priority' => 1,
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'products' ),
    'presets' => array(
            array(
                'name' => __( '默认' ),
                'content' => '[ux_products]'
            ),
            array(
                'name' => __( '促销' ),
                'content' => '[ux_products orderby="sales" show="onsale"]'
            ),
            array(
                'name' => __( '推荐产品' ),
                'content' => '[ux_products show="featured"]'
            ),
             array(
                'name' => __( '畅销' ),
                'content' => '[ux_products orderby="sales"]'
            ),
            array(
                'name' => __( '看书风格' ),
                'content' => '[ux_products style="shade" slider_nav_style="circle" col_spacing="normal" depth="1" depth_hover="5"  image_height="200%" image_size="medium" image_hover="overlay-add" image_hover_alt="zoom-long" text_size="large" text_hover="hover-slide"]'
            ),
            array(
                'name' => __( '看书风格2' ),
                'content' => '[ux_products style="overlay" slider_nav_style="circle" width="full-width" col_spacing="collapse" columns="6"  orderby="rand" image_height="200%" image_size="medium" image_overlay="rgba(0, 0, 0, 0.58)" image_hover="overlay-add" image_hover_alt="zoom-long" text_pos="middle" text_size="large" text_hover="zoom-in"]'
            ),array(
                'name' => __( '看书风格3' ),
                'content' => '[ux_products style="overlay" image_height="169%" image_size="medium" image_overlay="rgba(0, 0, 0, 0.67)" image_hover="color" image_hover_alt="overlay-remove-50" text_size="large"]'
            ), array(
                'name' => __( '切片风格' ),
                'content' => '[ux_products style="normal" type="masonry" depth="1" depth_hover="5" text_align="left"]'
            ), array(
                'name' => __( '网格风格' ),
                'content' => '[ux_products style="shade" type="grid" grid_height="650px" products="4" orderby="sales" show="featured" image_overlay="rgba(0, 0, 0, 0.19)" image_hover="zoom" image_hover_alt="glow" text_align="left" text_size="large"]'
       ),
    ),
    'options' => $options
) );
