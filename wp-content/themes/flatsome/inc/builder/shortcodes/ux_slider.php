<?php

add_ux_builder_shortcode( 'ux_slider', array(
    'type' => 'container',
    'name' => __( '幻灯片' ),
    'category' => __( '布局' ),
    'message' => __( '在此添加幻灯片' ),
    'directives' => array( 'ux-slider' ),
    'allow' => array( 'ux_banner','ux_image','section','row','ux_banner_grid','logo'),
    'template' => flatsome_ux_builder_template( 'ux_slider.html' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'slider' ),
    'tools' => 'shortcodes/ux_slider/ux-slider-tools.directive.html',
    'wrap'   => false,
    'info' => '{{ label }}',
    'priority' => -1,

    'toolbar' => array(
        'show_children_selector' => true,
        'show_on_child_active' => true,
    ),

    'children' => array(
        'inline' => true,
        'addable_spots' => array( 'left', 'right' )
    ),

    /*
    'presets' => array(
        array(
            'name' => __( 'Default' ),
            'content' => '[ux_slider]',
        ),
        array(
            'name' => __( 'Simple Banner' ),
            'content' => '[ux_slider][ux_banner][/ux_slider]',
        ),
    ), */

    'options' => array(
        'label' => array(
            'type' => 'textfield',
            'heading' => '管理标签',
            'placeholder' => '输入管理标签...'
        ),
        'type' => array(
          'type' => 'select',
          'heading' => '类型',
          'default' => 'slide',
          'options' => array(
            'slide' => '滑动',
            'fade' => '淡入',
          ),
        ),
        'layout_options' => array(
          'type' => 'group',
          'heading' => __( '布局' ),
          'options' => array(
            'style' => array(
              'type' => 'select',
              'heading' => '风格',
              'default' => 'normal',
              'options' => array(
                  'normal' => '默认',
                  'container' => '容器',
                  'focus' => '聚焦',
                  'shadow' => '阴影',
              ),
              'conditions' => 'type !== "fade"',
            ),
            'slide_width' => array(
              'type' => 'scrubfield',
              'heading' => '幻灯片宽度',
              'placeholder' => '宽度，像素',
              'default' => '',
              'min' => '0',
              'conditions' => 'type !== "fade"',
            ),

            'slide_align' => array(
              'type' => 'select',
              'heading' => '幻灯片对齐方式',
              'default' => 'center',
              'options' => array(
                  'center' => '中',
                  'left' => '左',
                  'right' => '右',
              ),
              'conditions' => 'type !== "fade"',
            ),
            'bg_color' => array(
              'type' => 'colorpicker',
              'heading' => __('背景颜色'),
              'format' => 'rgb',
              'position' => 'bottom right',
              'helpers' => require( __DIR__ . '/helpers/colors.php' ),
            ),
            'margin' => array(
              'type' => 'scrubfield',
              'responsive' => true,
              'heading' => __('边距'),
              'default' => '0px',
              'min' => 0,
              'max' => 100,
              'step' => 1
            ),
            'infinitive' => array(
                'type' => 'radio-buttons',
                'heading' => __('无限'),
                'default' => 'true',
                'options' => array(
                    'false'  => array( 'title' => '关'),
                    'true'  => array( 'title' => '开'),
                ),
            ),
            'freescroll' => array(
                'type' => 'radio-buttons',
                'heading' => __('自由滚动'),
                'default' => 'false',
                'options' => array(
                    'false'  => array( 'title' => '关'),
                    'true'  => array( 'title' => '开'),
                ),
            ),
            'draggable' => array(
                'type' => 'radio-buttons',
                'heading' => __('可拖动'),
                'default' => 'true',
                'options' => array(
                    'false'  => array( 'title' => '关'),
                    'true'  => array( 'title' => '开'),
                ),
            ),
            'parallax' => array(
                'type' => 'slider',
                'heading' => '视差',
                'unit' => '+',
                'default' => 0,
                'max' => 10,
                'min' => 0,
            ),
            'mobile' => array(
                'type' => 'radio-buttons',
                'heading' => __('为手机显示'),
                'default' => 'true',
                'options' => array(
                    'false'  => array( 'title' => '关'),
                    'true'  => array( 'title' => '开'),
                ),
            ),
          ),
        ),

        'nav_options' => array(
          'type' => 'group',
          'heading' => __( '导航' ),
          'options' => array(
            'hide_nav' => array(
                'type' => 'radio-buttons',
                'heading' => __('始终显示'),
                'default' => '',
                'options' => array(
                    ''  => array( 'title' => '关'),
                    'true'  => array( 'title' => '开'),
                ),
            ),
            'nav_pos' => array(
              'type' => 'select',
              'heading' => '位置',
              'default' => '',
              'options' => array(
                  '' => '在内',
                  'outside' => '在外',
              )
            ),
           'nav_size' => array(
              'type' => 'select',
              'heading' => '大小',
              'default' => 'large',
              'options' => array(
                  'large' => '大',
                  'normal' => '正常',
              )
            ),
            'arrows' => array(
              'type' => 'radio-buttons',
              'heading' => __('箭头'),
              'default' => 'true',
              'options' => array(
                'false'  => array( 'title' => '关'),
                'true'  => array( 'title' => '开'),
                ),
            ),
            'nav_style' => array(
              'type' => 'select',
              'heading' => __('箭头风格'),
              'default' => 'circle',
              'options' => array(
                  'circle' => '圆圈',
                  'simple' => '简单',
                  'reveal' => '展示',
              )
            ),
            'nav_color' => array(
                'type' => 'radio-buttons',
                'heading' => __('箭头颜色'),
                'default' => 'light',
                'options' => array(
                    'dark'  => array( 'title' => '深色'),
                    'light'  => array( 'title' => '浅色'),
                ),
            ),

            'bullets' => array(
              'type' => 'radio-buttons',
              'heading' => __('项目符号'),
              'default' => 'true',
              'options' => array(
                  'false'  => array( 'title' => '关'),
                  'true'  => array( 'title' => '开'),
              ),
            ),
            'bullet_style' => array(
              'type' => 'select',
              'heading' => '项目符号风格',
              'default' => 'circle',
              'options' => array(
                'circle' => '圆圈',
                'dashes' => '破折号',
                'dashes-spaced' => '虚线（间隔）',
                'simple' => '简单',
                'square' => '方形',
            )
           ),
          ),
        ),
        'slide_options' => array(
          'type' => 'group',
          'heading' => __( '自动滑动' ),
          'options' => array(
            'auto_slide' => array(
                'type' => 'radio-buttons',
                'heading' => __('自动滑动'),
                'default' => 'true',
                'options' => array(
                    'false'  => array( 'title' => '关'),
                    'true'  => array( 'title' => '开'),
                ),
            ),
            'timer' => array(
                'type' => 'textfield',
                'heading' => '定时器（ms）',
                'default' => 6000,
            ),
            'pause_hover' => array(
                'type' => 'radio-buttons',
                'heading' => __('鼠标悬停时暂停'),
                'default' => 'true',
                'options' => array(
                    'false'  => array( 'title' => '关'),
                    'true'  => array( 'title' => '开'),
                ),
            ),
          ),
        ),
        'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
    ),
) );
