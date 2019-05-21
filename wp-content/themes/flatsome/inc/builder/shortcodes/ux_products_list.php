<?php

// Shortcode to display a single product
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

add_ux_builder_shortcode( 'ux_products_list', array(
    'name' => '产品列表',
    'category' => __( '商店' ),
    'priority' => 2,
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'products-list' ),
    'presets' => array(
            array(
                'name' => __( '默认' ),
                'content' => '[ux_products_list]'
            ),
            array(
                'name' => __( '促销' ),
                'content' => '[ux_products_list orderby="sales" show="onsale"]'
            ),
            array(
                'name' => __( '推荐产品' ),
                'content' => '[ux_products_list show="featured"]'
            ),
             array(
                'name' => __( '最畅销' ),
                'content' => '[ux_products_list orderby="sales"]'
      ),
    ),
    'options' => $options
) );
