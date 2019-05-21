<?php

if ( ! isset( $repeater_posts ) ) $repeater_posts = 'posts';
if ( ! isset( $repeater_post_type ) ) $repeater_post_type = 'post';
if ( ! isset( $repeater_post_cat ) ) $repeater_post_cat = 'category';

return array(
    'type' => 'group',
    'heading' => __( '文章' ),
    'options' => array(

     'ids' => array(
        'type' => 'select',
        'heading' => '自定义文章',
        'param_name' => 'ids',
        'config' => array(
            'multiple' => true,
            'placeholder' => '选择..',
            'postSelect' => array(
                'post_type' => array($repeater_post_type)
            ),
        )
    ),

    'cat' => array(
        'type' => 'select',
        'heading' => '分类',
        'param_name' => 'cat',
        'conditions' => 'ids === ""',
        'default' => '',
        'config' => array(
            'multiple' => true,
            'placeholder' => '选择...',
            'termSelect' => array(
                'post_type' => $repeater_post_cat,
                'taxonomies' => $repeater_post_cat
            ),
        )
    ),

    $repeater_posts => array(
        'type' => 'textfield',
        'heading' => '文章总数',
        'conditions' => 'ids === ""',
        'default' => '8',
    ),

    'offset' => array(
        'type' => 'textfield',
        'heading' => '偏移',
        'conditions' => 'ids === ""',
        'default' => '',
    ),
  )
);
