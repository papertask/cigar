<?php

/* Add Custom WP Editor CSS */

if(!function_exists('flatsome_editor_style')) {
  function flatsome_editor_style($url) {
    if ( !empty($url) )
      $url .= ',';
    // Change the path here if using sub-directory
    $url .= trailingslashit( get_template_directory_uri() ) . 'assets/css/editor.css';
    return $url;
  }
}
add_filter('mce_css', 'flatsome_editor_style');


/* Extra Editor Styles (add extra styles to the content editor box) */
if(!function_exists('flatsome_mce_buttons_2')) {
  function flatsome_mce_buttons_2( $buttons ) {
      array_unshift( $buttons, 'styleselect' );
      return $buttons;
  }
}
add_filter( 'mce_buttons', 'flatsome_mce_buttons_2' );


// Customize mce editor font sizes
if ( ! function_exists( 'flatsome_editor_text_sizes' ) ) {
  function flatsome_editor_text_sizes( $initArray ){
    $initArray['fontsize_formats'] = "75% 80% 85% 90% 95% 100% 105% 110% 115% 120% 130% 140% 150% 160% 170% 180% 190% 200% 250% 300% 350% 400% 450% 500%";
    return $initArray;
  }
}
add_filter( 'tiny_mce_before_init', 'flatsome_editor_text_sizes' );


// Enable font size & font family selects in the editor
if ( ! function_exists( 'flatsome_font_buttons' ) ) {
  function flatsome_font_buttons( $buttons ) {
    //array_splice( $buttons, 2, 0, 'fontselect' ); // Add Font Select
    array_splice( $buttons, 5, 0, 'backcolor' ); // Add Font Size Select
    array_splice( $buttons, 2, 0, 'fontsizeselect' ); // Add Font Size Select
    return $buttons;
  }
}
add_filter( 'mce_buttons_2', 'flatsome_font_buttons');


function flatsome_formats_before_init( $settings ) {

    $style_formats = array(

        array(
              'title' => '链接风格',
              'selector' => 'a',
                  'items' => array(
                  array(
                      'title' => '按钮主要',
                       'selector' => 'a',
                       'classes' => 'button primary',
                  ),
                    array(
                      'title' => '按钮白色',
                       'selector' => 'a',
                       'classes' => 'button white',
                  ),
                  array(
                       'title' => '按钮次要',
                       'selector' => 'a',
                       'classes' => 'button secondary',

                  ),
                  array(
                       'title' => '按钮提醒',
                       'selector' => 'a',
                       'classes' => 'button alert',

                  ),
                  array(
                       'title' => '按钮成功',
                       'selector' => 'a',
                       'classes' => 'button success',

                  ),
                  array(
                       'title' => '按钮代替主要',
                       'selector' => 'a',
                       'classes' => 'button is-outline',

                  ),
                   array(
                       'title' => '按钮代替白色',
                       'selector' => 'a',
                       'classes' => 'button is-outline white',

                  ),
                        array(
                      'title' => '大 - 按钮主要',
                       'selector' => 'a',
                       'classes' => 'button large  primary',
                  ),
                  array(
                       'title' => '大按钮次要',
                       'selector' => 'a',
                       'classes' => 'button large  secondary',

                  ),
                  array(
                       'title' => '大按钮提醒',
                       'selector' => 'a',
                       'classes' => 'button large  alert',

                  ),
                  array(
                       'title' => '大按钮成功',
                       'selector' => 'a',
                       'classes' => 'button large  success',

                  ),
                  array(
                       'title' => '大按钮代替主要',
                       'selector' => 'a',
                       'classes' => 'button large  is-outline success',

                  ),
                  array(
                       'title' => '大按钮代替次要',
                       'selector' => 'a',
                       'classes' => 'button large  is-outline secondary',

                  ),
                   array(
                       'title' => '大按钮代替白色',
                       'selector' => 'a',
                       'classes' => 'button large is-outline white',

                  )
              )
        ),
        array(
            'title' => '动画',
                'items' => array(
                  array(
                    'title' => '无',
                    'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                    'attributes' => array('data-animate' => ''),
                  ),
                  array(
                  'title' => '淡入',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-animate' => 'fadeIn'),
                ),
                array(
                  'title' => '淡入左',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-animate' => 'fadeInLeft'),
                ),
                array(
                  'title' => '淡入右',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-animate' => 'fadeInRight'),
                ),
                array(
                  'title' => '淡入上',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-animate' => 'fadeInUp'),
                ),
            )
        ),
        array(
            'title' => '动画 - 延迟',
                'items' => array(
                     array(
                    'title' => '默认',
                    'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                    'attributes' => array('data-animate-delay' => ''),
                  ),
                    array(
                    'title' => '.1s',
                    'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                    'attributes' => array('data-animate-delay' => '200'),
                  ),
                  array(
                  'title' => '.2s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '200'),
                ),
                array(
                  'title' => '.3s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '300'),
                ),
                array(
                  'title' => '.4s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '400'),
                ),
                    array(
                  'title' => '.5s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '500'),
                ),
                array(
                  'title' => '.6s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '600'),
                ),
                  array(
                  'title' => '.7s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '700'),
                ),
                    array(
                  'title' => '.8s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '800'),
                ),
                array(
                  'title' => '.9s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '900'),
                ),
                array(
                  'title' => '1s',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-animate-delay' => '1000'),
                ),
            )
        ),
     array(
              'title' => '	可见性',
              'items' => array(
                  array(
                    'title' => '所有显示',
                    'selector' => 'h1,h2,h3,h4,h5,h6,p',
                    'attributes' => array('data-show' => ''),
                  ),
                  array(
                    'title' => '为手机隐藏',
                    'selector' => 'h1,h2,h3,h4,h5,h6,p',
                    'attributes' => array('data-show' => 'hide-for-small'),
                  ),
                  array(
                    'title' => '为平板隐藏',
                    'selector' => 'h1,h2,h3,h4,h5,h6,p',
                    'attributes' => array('data-show' => 'hide-for-medium'),
                  ),
                 array(
                    'title' => '仅手机显示',
                     'selector' => 'h1,h2,h3,h4,h5,h6,p',
                     'attributes' => array('data-show' => 'show-for-small'),
                  ),
                  array(
                    'title' => '仅平板显示',
                     'selector' => 'h1,h2,h3,h4,h5,h6,p',
                     'attributes' => array('data-show' => 'show-for-medium'),
                  ),
                )
        ),
        array(
            'title' => '透明度',
                'items' => array(
                  array(
                  'title' => '1',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-opacity' => ''),
                ),
                array(
                  'title' => '0.9',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-opacity' => '0.9'),
                ),
                array(
                  'title' => '0.8',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-opacity' => '0.8'),
                ),
                array(
                  'title' => '0.7',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-opacity' => '0.7'),
                ),
                 array(
                  'title' => '0.6',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-opacity' => '0.6'),
                ),
                  array(
                  'title' => '0.5',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-opacity' => '0.5'),
                ),
            )
       ),
        array(
            'title' => '行高',
                'items' => array(
                  array(
                    'title' => '默认',
                    'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                    'attributes' => array('data-line-height' => ''),
                 ),
                  array(
                  'title' => '更小',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-line-height' => 'xs'),
                 ),
                array(
                  'title' => '小',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-line-height' => 's'),
                ),
                array(
                  'title' => '中',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-line-height' => 'm'),
                ),
                array(
                  'title' => '大',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-line-height' => 'l'),
                ),
                array(
                  'title' => '很大',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a,span',
                  'attributes' => array('data-line-height' => 'xl'),
                ),
            )
        ),
       array(
            'title' => '填充',
                'items' => array(
                  array(
                  'title' => '5px',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-padding' => '5px'),
                ),
                  array(
                  'title' => '10px',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-padding' => '10px'),
                ),
                  array(
                  'title' => '15px',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-padding' => '15px'),
                ), array(
                  'title' => '20px',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-padding' => '20px'),
                ),
                array(
                  'title' => '30px',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-padding' => '30px'),
                ),
                 array(
                  'title' => '40px',
                  'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
                  'attributes' => array('data-padding' => '40px'),
                ),
            )
        ),
        array(
            'title' => '文字颜色',
                'items' => array(
                array(
                  'title' => '无',
                  'inline' => 'span',
                  'attributes' => array('data-text-color' => ''),
                ),
                array(
                  'title' => '主要颜色',
                  'inline' => 'span',
                  'attributes' => array('data-text-color' => 'primary'),
                ),
                array(
                  'title' => '次要颜色',
                  'inline' => 'span',
                  'attributes' => array('data-text-color' => 'secondary'),
                ),
                array(
                  'title' => '提醒颜色',
                  'inline' => 'span',
                  'attributes' => array('data-text-color' => 'alert'),
                ),  array(
                  'title' => '成功颜色',
                  'inline' => 'span',
                  'attributes' => array('data-text-color' => 'success'),
                ),
            )
        ),
        array(
            'title' => '文字颜色',
                'items' => array(
                array(
                  'title' => '主要背景颜色',
                  'inline' => 'span',
                  'attributes' => array('data-text-bg' => 'primary'),
                ),
                  array(
                  'title' => '次要背景颜色',
                  'inline' => 'span',
                  'attributes' => array('data-text-bg' => 'secondary'),
                ),
                   array(
                  'title' => '提醒背景颜色',
                  'inline' => 'span',
                  'attributes' => array('data-text-bg' => 'alert'),
                ),  array(
                  'title' => '成功背景颜色',
                  'inline' => 'span',
                  'attributes' => array('data-text-bg' => 'success'),
                ),
            )
        ),
        array(
              'title' => '列表风格',
              'items' => array(
                 array(
                  'title' => '项目列表 - 对勾',
                  'selector' => 'li',
                  'classes' => 'bullet-checkmark',

                ),
                array(
                  'title' => '项目列表 - 箭头',
                  'selector' => 'li',
                  'classes' => 'bullet-arrow',

                ),
                array(
                  'title' => '项目列表 - 星星',
                  'selector' => 'li',
                  'classes' => 'bullet-star',
                ),

            )
        ),
        array(
          'title' => '引导文本 (p)',
          'block' => 'p',
          'classes' => 'lead',
          'exact' => true,
        ),
        array(
          'title' => '正数号码',
          'inline' => 'span',
          'classes' => 'count-up',
          'exact' => true,
        ),
        array(
          'title' => '大写字母',
          'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
          'classes' => 'uppercase',
           'exact' => true,
        ),
       array(
          'title' => '花式下划线',
          'inline' => 'span',
          'classes' => 'fancy-underline',
          'exact' => true,
        ),
         array(
          'title' => '细字体',
          'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
          'classes' => 'thin-font',
        ),

        array(
          'title' => '替代字体',
          'selector' => 'h1,h2,h3,h4,h5,h6,p,a',
          'classes' => 'alt-font',
        ),
    );

    $style_formats = apply_filters( 'flatsome_text_formats', $style_formats );
    $settings['style_formats'] = json_encode( $style_formats );

    return $settings;

}
add_filter( 'tiny_mce_before_init', 'flatsome_formats_before_init' );


/* Extra Editor Colors */
if ( ! function_exists( 'flatsome_text_colors' ) ) {
  function flatsome_text_colors( $init ) {
    global $flatsome_opt;
    $default_colours = '
      "000000", "黑色",        "993300", "焦橙色", "333300", "黑橄榄",   "003300", "深绿色",   "003366", "暗蓝色",   "000080", "海军蓝",      "333399", "靛青",       "333333", "非常深灰色", 
      "800000", "栗色",       "FF6600", "橙色",       "808000", "黄褐色",        "008000", "绿色",        "008080", "蓝绿色",         "0000FF", "蓝色",           "666699", "灰蓝色", "808080", "灰色", 
      "FF0000", "红色",          "FF9900", "琥珀色",        "99CC00", "黄绿色", "339966", "海绿色",    "33CCCC", "绿松石",    "3366FF", "宝蓝色",     "800080", "紫色",       "999999", "中灰色", 
      "FF00FF", "品红",      "FFCC00", "金色",         "FFFF00", "黄色",       "00FF00", "青柠",         "00FFFF", "水族",         "00CCFF", "天空蓝e",       "993366", "棕色",        "C0C0C0", "银色", 
      "FF99CC", "粉色",         "FFCC99", "桃色",        "FFFF99", "浅黄色", "CCFFCC", "浅绿色",   "CCFFFF", "淡青色",    "99CCFF", "浅蓝色", "CC99FF", "梅色",         "FFFFFF", "白色"
    ';
    $custom_colours = '
      "e14d43", "主要颜色", "d83131", "颜色2名字", "ed1c24", "颜色3名字", "f99b1c", "颜色4名字", "50b848", "颜色5名字", "00a859", "颜色6名字",   "00aae7", "颜色7名字", "282828", "颜色9名字"
    ';
    $init['textcolor_map'] = '['.$custom_colours.','.$default_colours.']';
    return $init;
  }
}
add_filter('tiny_mce_before_init', 'flatsome_text_colors');


/* Enable SVG upload */
function flatsome_enable_svg( $mimes ){
  // enable svg for super users.
  if(current_user_can('manage_options')){
      $mimes['svg'] = 'image/svg+xml';
  }
  return $mimes;
}
add_filter( 'upload_mimes', 'flatsome_enable_svg' );


function flatsome_enable_font_upload( $mimes ){
  $mimes['ttf'] = 'application/octet-stream';
  $mimes['otf'] = 'font/opentype';
  return $mimes;
}
add_filter( 'upload_mimes', 'flatsome_enable_font_upload' );
