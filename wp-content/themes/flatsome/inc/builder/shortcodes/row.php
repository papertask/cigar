<?php

add_ux_builder_shortcode( 'row', array(
    'type' => 'container',
    'name' => __( '行' , 'ux-builder' ),
    'image' => '',
    'category' => __( '布局' ),
    'template' => flatsome_ux_builder_template( 'row.html' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row' ),
    'tools' => 'shortcodes/row-tools.directive.html',
    'info' => '{{ label }}',
    'allow' => array( 'col' ),
    'nested' => true,
    'wrap'   => false,
    'priority' => -1,

    'presets' => array(
        array(
            'name' => __( '3列' ),
            'content' => '[row][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col]][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-3-col' ),
        ),
        array(
            'name' => __( '2列' ),
            'content' => '[row][col span="6" span__sm="12"][/col][col span="6" span__sm="12"][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-2-col' ),
        ),
        array(
            'name' => __( '4列' ),
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-4-col' ),
            'content' => '[row][col span="3" span__sm="6"][/col][col span="3" span__sm="6"][/col][col span="3" span__sm="6"][/col][col span="3" span__sm="6"][/col][/row]'
        ),
        array(
            'name' => __( '1列' ),
            'content' => '[row][col span="12" span__sm="12"][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-1-col' ),
        ),
        array(
            'name' => __( '大右' ),
            'content' => '[row][col span="4" span__sm="12"][/col][col span="8" span__sm="12"][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-1-3-col' ),
        ),
        array(
            'name' => __( '大左' ),
            'content' => '[row][col span="8" span__sm="12"][/col][col span="4" span__sm="12"][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-2-3-col' ),
        ),
        array(
            'name' => __( '2列 - 完整' ),
            'content' => '[row style="collapse" width="full-width"][col span="6"][/col][col span="6"][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-2-col-full' ),
        ),
        array(
            'name' => __( '3列 - 完整' ),
            'content' => '[row style="collapse" width="full-width"][col span="4"][/col][col span="4"][/col][col span="4"][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-3-col-full' ),
        ),
        array(
            'name' => __( '媒体左' ),
            'content' => '[row  v_align="middle"][col span="6" span__sm="12"][ux_image][/col][col span="6" span__sm="12"][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-image-left' ),
        ),
        array(
            'name' => __( '媒体右' ),
            'content' => '[row v_align="middle"][col span="6" span__sm="12"][/col][col span="6" span__sm="12"][ux_image][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-image-right' ),
        ),
        array(
            'name' => __( '大媒体左' ),
            'content' => '[row v_align="middle" style="collapse" width="full-width"][col span="6" span__sm="12"][ux_image][/col][col max_width="520px" padding="5% 5% 5% 5%" span="6" span__sm="12"][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-image-left-large' ),
        ),
        array(
            'name' => __( '大媒体右' ),
            'content' => '[row v_align="middle" style="collapse" width="full-width"][col max_width="520px" padding="5% 5% 5% 5%" span="6" span__sm="12" width=""][/col][col span="6" span__sm="12"][ux_image][/col][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-image-right-large' ),
        ),
        array(
            'name' => __( '3列 - 阴影' ),
            'content' => '[row depth="3" depth_hover="5"][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col]][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-3-shadow-col' ),
        ),
        array(
            'name' => __( '3列 - 虚线' ),
            'content' => '[row col_style="dashed"][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col][col span="4" span__sm="12"][/col]][/row]',
            'thumbnail' =>  flatsome_ux_builder_thumbnail( 'row-3-col-dashed' ),
        )
    ),

    'options' => array(
        
        'label' => array(
            'full_width' => true,
            'type' => 'textfield',
            'heading' => '标签',
            'placeholder' => '在此输入管理标签..'
        ),

        'style' => array(
            'type' => 'radio-buttons',
            'heading' => '列间距',
            'full_width' => true,
            'default' => '',
            'options' => array(
                '' => array( 'title' => '正常'),
                'small' => array( 'title' => '小' ),
                'large' => array( 'title' => '大' ),
                'collapse' => array( 'title' => '折叠' ),
            ),
        ),

        'col_style' => array(
            'type' => 'radio-buttons',
            'heading' => '列样式',
            'full_width' => true,
            'default' => '',
            'options' => array(
                '' => array( 'title' => '正常'),
                'divided' => array( 'title' => '分隔线'),
                'dashed' => array( 'title' => '虚线'),
                'solid' => array( 'title' => '实线'),
            ),
        ),

        'col_bg' => array(
            'type' => 'colorpicker',
            'heading' => __('列背景'),
            'format' => 'rgb',
            'alpha' => true,
            'position' => 'bottom right',
            'helpers' => require( __DIR__ . '/helpers/colors.php' ),
        ),

        'width' => array(
            'type' => 'radio-buttons',
            'heading' => '宽度',
            'full_width' => true,
            'default' => '',
            'options' => array(
                '' => array( 'title' => '容器'),
                'full-width' => array( 'title' => '完整' ),
                'custom' => array( 'title' => '自定义' ),
            ),
        ),

        'custom_width' => array(
            'type' => 'scrubfield',
            'conditions' => 'width == "custom"',
            'heading' => '自定义宽度',
            'default' => '',
            'placeholder' => '1080px'
        ),

        'v_align' => array(
            'type' => 'radio-buttons',
            'heading' => '垂直对齐',
            'full_width' => true,
            'default' => '',
            'options' => array(
                '' => array( 'title' => '上'),
                'equal' => array( 'title' => '平等'),
                'middle' => array( 'title' => '中'),
                'bottom' => array( 'title' => '下'),
            )
        ),

        'h_align' => array(
            'type' => 'radio-buttons',
            'heading' => '水平对齐',
            'full_width' => true,
            'default' => '',
            'options' => array(
                 '' => array( 'title' => '左'),
                 'center' => array( 'title' => '中'),
                 'right' => array( 'title' => '右')
            )
        ),

        'padding' => array(
            'type' => 'margins',
            'heading' => '列填充',
            'full_width' => true,
            'responsive' => true,
            'min' => 0,
            'max' => 100,
            'step' => 1,
        ),

   

        'depth' => array(
            'type' => 'slider',
            'vertical' => true,
            'full_width' => true,
            'heading' => '列深度',
            'default' => 0,
            'max' => 5,
            'min' => 0,
        ),

        'depth_hover' => array(
            'type' => 'slider',
            'vertical' => true,
            'full_width' => true,
            'heading' => '列深度悬停',
            'default' => 0,
            'max' => 5,
            'min' => 0,
        ),

       'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );
