<?php

add_ux_builder_shortcode( 'ux_banner', array(
  'type' => 'container',
  'name' => __( '横幅' ),
  'category' => __( '内容' ),
  'thumbnail' => flatsome_ux_builder_thumbnail( 'ux_banner' ),
  'toolbar_thumbnail' => 'bg',
  'template' => flatsome_ux_builder_template( 'ux_banner.html' ),
  'wrap' => false,
  'info' => '{{ label }}',
  'allow' => array( 'text_box', 'ux_image' ),
  'add_buttons' => array( 'bottom-right' ),
  'addable_spots' => array( 'top', 'bottom' ),
  'priority' => 3,

  'styles' => array(
    'flatsome-banner-effect' => get_template_directory_uri() . '/assets/css/effects.css'
  ),

  // Override children data.
  'children' => array(
    'addable_spots' => array( 'center' ),
  ),

  'presets' => array(
    array(
      'name' => __( '空白' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/blank' ),
      'content' => '[ux_banner height="500px"] [text_box width="60"] <h3 class="uppercase"><strong>这是一个简单的横幅</strong></h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '简单居中' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/simple-center' ),
      'content' => '[ux_banner height="500px" bg_overlay="rgba(0, 0, 0, 0.17)"] [text_box width="60"] <h3 class="uppercase">将此更改为任何内容</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="点击我" color="white" style="outline"] [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '左' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/simple-left' ),
      'content' => '[ux_banner height="500px" bg_overlay="rgba(0, 0, 0, 0.31)"] [text_box width="40" width__sm="60" position_x="10"] <h3 class="uppercase">将此更改为任何内容</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="点击我" color="white" style="outline"] [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '右' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/simple-right' ),
      'content' => '[ux_banner height="500px" bg_overlay="rgba(0, 0, 0, 0.31)"] [text_box width="40" width__sm="60" position_x="90"] <h3 class="uppercase">将此更改为任何内容</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="点击我" color="white" style="outline"] [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '按钮左' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/simple-buttons' ),
      'content' => '[ux_banner height="500px" bg_overlay="rgba(0, 0, 0, 0.31)"] [text_box width="40" width__sm="60" position_x="5" text_align="left"] <h2 class="uppercase"><strong>主标题</strong></h2> <h3>较小标题</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="主要"] [button text="次要" color="white" style="outline"] [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '按钮右' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/simple-buttons-right' ),
      'content' => '[ux_banner height="500px" bg_overlay="rgba(0, 0, 0, 0.2)"] [text_box width="40" width__sm="60" position_x="95" text_align="right"] <h2 class="uppercase"><strong>主标题</strong></h2> <h3>较小标题</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="主要"] [button text="次要" color="white" style="outline"] [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '浅色左' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/simple-left-light' ),
      'content' => '[ux_banner height="500px" bg_color="rgb(255, 255, 255)" bg_overlay="rgba(190, 190, 190, 0.2)"] [text_box width="40" width__sm="60" position_x="5" text_align="left" text_color="dark"] <h2 class="uppercase"><strong>主标题</strong></h2> <h3>较小标题</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="主要"] [button text="次要" style="outline"] [/text_box][/ux_banner]',
    ),
    array(
      'name' => __( '浅色右' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/simple-right-light' ),
      'content' => '[ux_banner height="500px" bg_color="rgb(255, 255, 255)" bg_overlay="rgba(190, 190, 190, 0.2)"] [text_box width="40" width__sm="60" position_x="95" text_align="right" text_color="dark"] <h2 class="uppercase"><strong>主标题</strong></h2> <h3>较小标题</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="主要"] [button text="次要" style="outline"] [/text_box] [/ux_banner]',
    ),
     array(
      'name' => __( '左框' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/box-left' ),
      'content' => '[ux_banner height="500px" bg_color="rgb(255, 255, 255)" bg_overlay="rgba(190, 190, 190, 0.2)"] [text_box width="40" width__sm="60" position_x="5" text_align="left" text_color="dark" padding="30px 30px 30px 30px" bg="rgb(255, 255, 255)" depth="3"] <h2 class="uppercase"><strong>主标题</strong></h2> <h3>较小标题</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="主要"] [button text="次要" style="outline"] [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '右框' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/box-right' ),
      'content' => '[ux_banner height="500px" bg_overlay="rgba(0, 0, 0, 0.2)"] [text_box width="40" width__sm="60" position_x="95" text_color="dark" padding="30px 30px 30px 30px" bg="rgba(255, 255, 255, 0.86)" depth="3"] <h2 class="uppercase"><strong>主标题</strong></h2> <h3>较小标题</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="主要"] [button text="次要" style="outline"] [/text_box] [/ux_banner]',
    ),
     array(
      'name' => __( '深色左框' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/dark-box-left' ),
      'content' => '[ux_banner height="500px" bg_overlay="rgba(0, 0, 0, 0.2)"] [text_box width="40" width__sm="60" position_x="5" padding="30px 30px 30px 30px" bg="rgba(0, 0, 0, 0.86)" depth="3"] <h2 class="uppercase"><strong>主标题</strong></h2> <h3>较小标题</h3> <p>于是，沃尔沃接下来在国内重塑形象和增加销量的重任，便落在了主攻行政级别的S90长轴距版（以下简称S90）身上。</p> [button text="主要"] [button text="次要" color="white" style="outline"] [/text_box] [/ux_banner]',
    ),
     array(
      'name' => __( '圆右' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/circle-right' ),
      'content' => '[ux_banner height="500px" bg_overlay="rgba(0, 0, 0, 0.2)"] [text_box style="circle" width="40" width__sm="60" position_x="90" padding="30px 30px 30px 30px" bg="rgba(0, 0, 0, 0.86)" depth="3"] <h2 class="uppercase"><strong>主标题</strong></h2> <h3>较小标题</h3> <p>进口XC90在中国市场显然不能担当销售主力</p> [button text="次要" color="white" style="outline"] [/text_box] [/ux_banner]',
    ),
     array(
      'name' => __( '大促销' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/huge-sale' ),
      'content' => '[ux_banner height="600px"] [text_box width="67" animate="flipInY"] <h3 class="alt-font">它终于开始了...</h3> [divider] <h1 class="h-large uppercase"><strong><span style="font-size: 180%;">大促销</span></strong></h1> <h1 class="uppercase">高达70％折扣</strong></h1> [divider] [button text="男人店铺" color="white" style="outline" link="#"] [button text="女人店铺" color="white" style="outline" link="#"] [button text="所有店铺" color="white" style="outline" link="#"] [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '徽章' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/badge' ),
      'content' => '[ux_banner height="400px" bg_overlay="rgba(0, 0, 0, 0.2)"] [text_box width="100" position_y="90" line_height="xs" text_color="dark" padding="5px 30px 10px 30px" bg="rgba(255, 255, 255, 0.94)"] <h4 class="uppercase">2017年夏天</h4> <h3 class="uppercase"><strong>新的夏季趋势</strong></h3> [button text="立即购买" style="underline"] [/text_box] [text_box style="circle" width="26" margin="0px -5px 0px 0px" position_x="100" position_y="5"] <p><span style="font-size: 250%;"><strong>促销</strong></span></p> [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '徽章泡泡' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/badge-bubble' ),
      'content' => '[ux_banner height="400px" bg_overlay="rgba(0, 0, 0, 0.2)"] [text_box width="80" position_y="90" text_align="left" line_height="m"] <h4 class="uppercase">2017年夏天</h4> <h2 class="uppercase"><strong>新的夏季趋势</strong></h2> [button text="立即购买" color="white" style="outline"] [/text_box] [text_box style="circle" width="26" margin="0px -5px 0px 0px" position_x="90" position_y="10" bg="rgba(0, 0, 0, 0.46)"] <p><span style="font-size: 250%;"><strong>-50%</strong></span></p> [/text_box] [/ux_banner]',
    ),
    array(
      'name' => __( '徽章简单' ),
      'thumbnail' => flatsome_ux_builder_thumbnail( 'banners/badge-simple' ),
      'content' => '[ux_banner height="400px" bg_overlay="rgba(0, 0, 0, 0.2)"] [text_box width="80" position_y="90" line_height="m"] <h4 class="uppercase">2017年夏天</h4> <h2 class="uppercase"><strong>新的夏季趋势</strong></h2> [button text="立即购买" color="white" style="outline"] [/text_box] [/ux_banner]',
    ),
  ),

  'options' => array(
    'label' => array(
        'type' => 'textfield',
        'heading' => '管理标签',
        'placeholder' => '输入管理标签...'
    ),

    'layout_options' => array(
      'type' => 'group',
      'heading' => __( '布局' ),
      'options' => array(
        'height' => array(
          'type' => 'scrubfield',
          'responsive' => true,
          'heading' => __('高度'),
          'default' => '',
          'placeholder' => __('自动'),
          'min' => 0,
          'max' => 1000,
          'step' => 1,
          'helpers' => require( __DIR__ . '/helpers/heights.php' ),
        ),
      ),
    ),
    'slide_options' =>  require( __DIR__ . '/commons/slide.php' ),
    'background_options' => require( __DIR__ . '/commons/background.php' ),
    'border_options' => require( __DIR__ . '/commons/border.php' ),
    'link_options' => require( __DIR__ . '/commons/links.php' ),
    'video_options' => require( __DIR__ . '/commons/video.php' ),
    'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    'sticky' => array(
      'type' => 'radio-buttons',
      'heading' => '粘性',
      'default' => '',
      'options' => array(
          'true'   => array( 'title' => '开'),
          ''  => array( 'title' => '关'),
        ),
      ),
    ),
) );
