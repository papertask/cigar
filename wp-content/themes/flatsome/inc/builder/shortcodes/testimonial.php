<?php

add_ux_builder_shortcode( 'testimonial', array(
    'type' => 'container',
    'name' => __( '客户评价' ),
    'category' => __( '内容' ),
    'wrapper' => false,
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'testimonials' ),
    'allow_in' => array('text_box'),
    'presets' => array(
        array(
          'name' => __( '默认' ),
          'content' => '[testimonial]<h3>这是一个神奇的网站</h3><p>四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地....</p>[/testimonial]'
        ),
        array(
          'name' => __( '行 - 图片左' ),
          'content' => '[row] [col span="6" span__sm="12"] [testimonial image="9147" image_width="121" name="张三" company="微软"] <p>四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地</p> [/testimonial] [/col] [col span="6" span__sm="12"] [testimonial image="9149" image_width="121" name="李四" company="联想"] <p>四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地</p> [/testimonial] [/col] [/row]'
        ),
         array(
          'name' => __( '行 - 图片在上' ),
          'content' => '[row] [col span="4" span__sm="12"] [testimonial image="9147" image_width="121" pos="center" name="张三" company="微软"] <p>四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地</p> [/testimonial] [/col] [col span="4" span__sm="12"] [testimonial image="9149" image_width="121" pos="center" name="李四" company="联想"] <div class="e-box h-p2 -stacked -radius-none"> <p class="t-body h-my1">四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地</p> </div> [/testimonial] [/col] [col span="4" span__sm="12"] [testimonial image="9150" image_width="121" pos="center" name="王五"] <p>E四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地<br />期待新版本。</p> [/testimonial] [/col] [/row]'
        ),
        array(
          'name' => __( '行 - 框式' ),
          'content' => '[row v_align="equal" padding="30px 30px 30px 30px" depth="2" depth_hover="5"] [col span="4" span__sm="12"] [testimonial image="9147" image_width="121" pos="center" name="张三" company="微软"] <p>四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地</p> [/testimonial] [/col] [col span="4" span__sm="12"] [testimonial image="9149" image_width="121" pos="center" name="李四" company="联想"] <div class="e-box h-p2 -stacked -radius-none"> <p class="t-body h-my1">四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地</p> </div> [/testimonial] [/col] [col span="4" span__sm="12"] [testimonial image="9150" image_width="121" pos="center" name="王五"] <p>四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，以后我只认准四亩地<br />期待更多主题</p> [/testimonial] [/col] [/row]'
        ),
         array(
          'name' => __( '在幻灯片中' ),
          'content' => '[ux_slider] [ux_banner height="378px" bg="9147" bg_overlay="rgba(0, 0, 0, 0.68)" bg_pos="79% 68%"] [text_box width="78" width__sm="100"] [testimonial image="9147" image_width="142" name="张三" company="谷歌"] <p class="lead">四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地</p> [/testimonial] [/text_box] [/ux_banner] [ux_banner height="378px" bg="9148" bg_overlay="rgba(0, 0, 0, 0.68)" bg_pos="79% 68%"] [text_box width="78" width__sm="100"] [testimonial image="9148" image_width="142" name="李四" company="阿里巴巴"] <p class="lead">四亩地汉化的主题真的是太棒了，汉化率非常高，而且速度还比同类的要快很多，不加载任何谷歌字体和JS，而且还有中文字体可以选择，还有国内的社交图标和分享功能，真的是太棒了，以后我只认准四亩地</p> [/testimonial] [/text_box] [/ux_banner] [/ux_slider]'
        ),
    ),
    'options' => array(
        'image' => array(
            "type" => "image",
            "heading" => "图片",
            "value" => ""
        ),
        'image_width' => array(
          "type" => "slider",
          "heading" => "图片宽度",
          "unit" => "px",
          "default" => 80,
          "max" => 300,
          "min" => 20,
          'on_change' => array(
            'selector' => '.icon-box-img',
            'style' => 'width: {{ value }}px'
          ),
        ),
        'pos' => array(
            "type" => "select",
            "heading" => "图片位置",
            "default" => 'left',
            "options" => array(
              'top' => '上',
              'center' => '中',
              'left' => '左',
              'right' => '右',
            )
        ),
       'name' => array(
            "type" => "textfield",
            "heading" => "名字",
            "default" => ""
        ),
        'company' => array(
            "type" => "textfield",
            "heading" => "公司",
            "default" => ""
        ),

        'font_size' => array(
            'type' => 'radio-buttons',
            'heading' => __( '文字大小' ),
            'default' => 'medium',
            'options' => require( __DIR__ . '/values/text-sizes.php' ),
        ),
        'stars' => array(
               'type' => 'slider',
               'heading' => __( '星星'),
               'default' => 5,
               'max' => 5,
               'min' => 0,
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    )
) );
