<?php

add_ux_builder_shortcode( 'text', array(
    'type' => 'container',
    'name' => __( '文字', 'ux-builder'),
    'category' => __( '内容' ),
    'compile' => false,
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'text' ),
    'template_shortcode' => "{content}\n",
    'template' => flatsome_ux_builder_template( 'text.html' ),
    'directives' => array( 'ux-text-editor' ),
    'priority' => 1,

    'presets' => array(
        array(
            'name' => __( '段落' ),
            'content' => '[text]<p>在引入大庆工厂进行国产并将轴距拉长120mm之后，S90以一种更懂豪华和更懂中国消费者的姿态来到了市场竞争中，尽管表面上还是保持着一副“老子有干货</p>[/text]'
        ),
        array(
            'name' => __( '导语' ),
            'content' => '[text]<p class="lead">在引入大庆工厂进行国产并将轴距拉长120mm之后，S90以一种更懂豪华和更懂中国消费者的姿态来到了市场竞争中，尽管表面上还是保持着一副“老子有干货</p>[/text]'
        ),
        array(
            'name' => __( '带标题的段落' ),
            'content' => '[text]<h3>这是一个简单的标题</h3><p>在引入大庆工厂进行国产并将轴距拉长120mm之后，S90以一种更懂豪华和更懂中国消费者的姿态来到了市场竞争中，尽管表面上还是保持着一副“老子有干货</p>[/text]'
        ),
        array(
            'name' => __( '带副标题的段落' ),
            'content' => '[text]<h5 class="uppercase">这是一个简单的标题</h5><p>在引入大庆工厂进行国产并将轴距拉长120mm之后，S90以一种更懂豪华和更懂中国消费者的姿态来到了市场竞争中，尽管表面上还是保持着一副“老子有干货</p>[/text]'
        ),
        array(
            'name' => __( '标题' ),
            'content' => '[text]<h2>这是一个简单的标题</h2>[/text]'
        ),
        array(
            'name' => __( '标题大写' ),
            'content' => '[text]<h2 class="uppercase">这是一个简单的标题</h2>[/text]'
        ),
        array(
            'name' => __( '标题与副标题' ),
            'content' => '[text]<h2 class="uppercase">这是一个简单的标题</h2><h3 class="thin-font">这是副标题</h3>[/text]'
        ),
        array(
            'name' => __( '图片左' ),
            'content' => '[row][col span="6" span__sm="12"][ux_image image_size="medium"][/col][col span="6" span__sm="12"][text]<h3>这是一个简单的标题</h3><p>在引入大庆工厂进行国产并将轴距拉长120mm之后，S90以一种更懂豪华和更懂中国消费者的姿态来到了市场竞争中，尽管表面上还是保持着一副“老子有干货</p>[/text][/col][/row]'
        ),
       array(
            'name' => __( '图片右' ),
            'content' => '[row][col span="6" span__sm="12"][text]<h3>这是一个简单的标题</h3><p>在引入大庆工厂进行国产并将轴距拉长120mm之后，S90以一种更懂豪华和更懂中国消费者的姿态来到了市场竞争中，尽管表面上还是保持着一副“老子有干货</p>[/text][/col][col span="6" span__sm="12"][ux_image image_size="medium"][/col][/row]'
        ),
        array(
            'name' => __( '引用' ),
            'content' => '[text]<blockquote>在引入大庆工厂进行国产并将轴距拉长120mm之后，S90以一种更懂豪华和更懂中国消费者的姿态来到了市场竞争中，尽管表面上还是保持着一副“老子有干货</blockquote>[/text]'
        ),
    ),

    'options' => array(
      '$content' => array(
        'type' => 'text-editor',
        'full_width' => true,
      )
    )
) );
