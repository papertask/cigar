<?php

$position_options = require( __DIR__ . '/commons/position.php' );
$position_options['options']['position_x']['on_change'] = array(
  'recompile' => false,
  'class' => 'x{{ value }} md-x{{ value }} lg-x{{ value }}'
);
$position_options['options']['position_y']['on_change'] = array(
  'recompile' => false,
  'class' => 'y{{ value }} md-y{{ value }} lg-y{{ value }}'
);

add_ux_builder_shortcode( 'ux_hotspot', array(
  'name' => '热点',
  'category' => __( '内容' ),
  'require' => 'ux_banner',
  'thumbnail' =>  flatsome_ux_builder_thumbnail( 'ux_hotspot' ),
  //'template' => flatsome_ux_builder_template( 'ux_hotspot.html' ),
  'allow_in' => array('ux_banner'),
  'wrap' => false,
  'options' => array(
       'type' => array(
            'type' => 'radio-buttons',
            'heading' => '类型',
            'default' => 'text',
            'options' => array(
                'text'   => array( 'title' => '文字'),
                'product'  => array( 'title' => '产品'),
            ),
        ),
        'prod_id' => array(
          'type' => 'select',
          'heading' => __('产品'),
          'full-width' => true,
          'conditions' => 'type === "product"',
          'config' => array(
              'multiple' => false,
              'placeholder' => '选择..',
              'postSelect' => array(
                  'post_type' => array( 'product')
              ),
          )
        ),

        'text' => array(
          'type' => 'textfield',
          'holder' => 'button',
          'heading' => __('文字'),
          'conditions' => 'type === "text"',
          'param_name' => 'text',
          'focus' => 'true',
          'default' => '输入任何文字...',
          'auto_focus' => true,
        ),
        'link' => array(
          'type' => 'textfield',
          'holder' => 'button',
          'heading' => __('链接'),
          'conditions' => 'type === "text"',
          'param_name' => 'text',
          'focus' => 'true',
          'default' => '',
          'auto_focus' => true,
       ),
       'icon' => array(
            'type' => 'radio-buttons',
            'heading' => __('图标'),
            'default' => 'plus',
            'options' => array(
                'plus'  => array( 'title' => '加号'),
                'search'   => array( 'title' => '搜索'),
                'play'  => array( 'title' => '播放'),
            ),
      ),
      'size' => array(
          'type' => 'radio-buttons',
          'heading' => __('大小'),
          'default' => 'medium',
          'options' => array(
              'xsmall'   => array( 'title' => '特小'),
              'small'   => array( 'title' => '小'),
              'medium'  => array( 'title' => '中'),
              'large'  => array( 'title' => '大'),
              'xlarge'  => array( 'title' => '特大'),
          ),
      ),
      'bg_color' => array(
          'type' => 'colorpicker',
          'heading' => __('背景颜色'),
          'format' => 'rgb',
          'position' => 'bottom right',
          'helpers' => require( __DIR__ . '/helpers/colors.php' ),
      ),
      'animate' => array(
              'type' => 'select',
              'heading' => __('动画'),
              'param_name' => 'animate',
              'default' => 'none',
              'options' => require( __DIR__ . '/values/animate.php' ),
      ),
      'depth' => array(
              'type' => 'slider',
              'heading' => __('深度'),
              'default' => '0',
              'max' => '5',
              'min' => '0',
      ),
      'depth_hover' => array(
              'type' => 'slider',
              'heading' => __('深度：悬停'),
              'default' => '0',
              'max' => '5',
              'min' => '0',
      ),
      'position_options' => $position_options,
      'advanced_options' => require( __DIR__ . '/commons/advanced.php'),

  )
) );
