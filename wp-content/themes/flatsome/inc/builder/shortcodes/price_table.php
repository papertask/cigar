<?php

add_ux_builder_shortcode( 'ux_price_table', array(
  'type' => 'container',
  'name' => __( '价格表' ),
  'category' => __( '内容' ),
  'thumbnail' => flatsome_ux_builder_thumbnail( 'price_table' ),
  'allow' => array('text','bullet_item','button'),
  'wrap' => false,
  'presets' => array(
    array(
      'name' => __( '默认' ),
      'content' => '[ux_price_table title="标题" price="price" featured="false"][bullet_item text="标题"][bullet_item text="标题"][bullet_item text="标题"][bullet_item text="标题"][/ux_price_table]',
      ),
    ),
    'options' => array(
      'title' => array( 'type' => 'textfield','heading' => '标题', 'default' => '标题', 'on_change' => array('selector' => '.title', 'content' => '{{value}}' )),
      'price' => array( 'type' => 'textfield','heading' => '价格', 'default' => '$99.99','on_change' => array('selector' => '.price', 'content' => '{{value}}')),
      'description' => array( 'type' => 'textfield','heading' => '描述', 'default' => '描述','on_change' => array('selector' => '.description', 'content' => '{{value}}')),
  
      'featured' => array(
            'type' => 'radio-buttons',
            'heading' => __('推荐'),
            'default' => 'false',
            'options' => array(
                'false'  => array( 'title' => '否'),
                'true'  => array( 'title' => '是'),
            ),
            'on_change' => array(
              'recompile' => false,
              'selector' => '.pricing-table',
              'class' => array(
                'false'  => '',
                'true'  => 'featured-table',
              ),
            ),
      ),
      'color' => array(
            'type' => 'radio-buttons',
            'heading' => __('文字颜色'),
            'default' => '',
            'options' => array(
                ''  => array( 'title' => '深色'),
                'dark'  => array( 'title' => '浅色'),
            ),
            'on_change' => array(
              'recompile' => false,
              'class' => '{{ value }}',
            ),
      ),
      'bg_color' => array(
        'type' => 'colorpicker',
        'heading' => __('背景颜色'),
        'format' => 'rgb',
        'position' => 'bottom right',
        'on_change' => array(
          'selector' => '.pricing-table',
          'style' => 'background-color: {{value}}',
        ),
      ),
      'radius' => array(
        'type' => 'slider',
        'heading' => __( '半径' ),
        'default' => '0',
        'unit' => 'px',
        'max' => '30',
        'min' => '0',
        'on_change' => array(
          'selector' => '.pricing-table',
          'style' => 'border-radius: {{value}}px',
        ),
      ),
     'depth' => array(
        'type' => 'slider',
        'heading' => __( '深度' ),
        'default' => '0',
        'max' => '5',
        'min' => '0',
        'on_change' => array(
          'recompile' => false,
          'selector' => '.pricing-table',
          'class' => 'box-shadow-{{ value }}'
        ),
      ),
      'depth_hover' => array(
          'type' => 'slider',
          'heading' => __( '悬停深度' ),
          'default' => '3',
          'max' => '5',
          'min' => '0',
          'on_change' => array(
            'recompile' => false,
            'selector' => '.pricing-table',
            'class' => 'box-shadow-{{ value }}-hover'
          ),
      ),
      'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    )
) );

add_ux_builder_shortcode( 'bullet_item', array(
    'name' => __( '符号项目' ),
    'info' => '{{ title }}',
    'require' => array( 'ux_price_table' ),
    'template' => '
      <div class="bullet-item"
        ng-class="{
          \'tooltip\': !!shortcode.options.tooltip,
          \'has-hover\': !!shortcode.options.tooltip,
          \'is-disabled\': shortcode.options.enabled !== \'true\'
        }"
        ng-attr-title="shortcode.options.tooltip">
        <span class="text" ng-bind-html="shortcode.options.text | html"></span>
        <span ng-if="shortcode.options.tooltip" class="tag-label bullet-more-info circle">?</span>
      </div>
    ',
    'wrap' => false,
    'hidden' => true,
    'options' => array(
      'text' => array(
        'type' => 'textfield',
        'heading' => '文字',
        'default' => '添加任何文字到这里',
      ),
      'tooltip' => array(
        'type' => 'textfield',
        'heading' => '提示',
        'default' => '',
      ),
      'enabled' => array(
          'type' => 'radio-buttons',
          'heading' => __('启用'),
          'default' => 'true',
          'options' => array(
              'true'  => array( 'title' => '是'),
              'false'  => array( 'title' => '否'),
          ),
        ),
    ),
) );
