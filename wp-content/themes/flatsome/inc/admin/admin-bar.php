<?php


// Option links
function flatsome_admin_bar_helper(){


global $wp_admin_bar;

$panel_url = get_admin_url().'admin.php?page=flatsome-panel';
$advanced_url = get_admin_url().'admin.php?page=optionsframework&tab=';
$permalink = get_permalink();
if(is_admin()) $permalink = get_home_url();

if(function_exists('is_shop') && is_shop()) {
  $permalink = get_permalink( wc_get_page_id( 'shop' ) );
}

$optionUrl_panel = get_admin_url().'customize.php?url='.$permalink.'&autofocus%5Bpanel%5D=';
$optionUrl_section = get_admin_url().'customize.php?url='.$permalink.'&autofocus%5Bsection%5D=';
$icon_style = 'font-size:20px; -webkit-font-smoothing: antialiased; font-weight:400!important; padding-right:4px; font-family:dashicons!important;margin-top:-2px;';
$flatsome_icon = '<svg style="width:20px; margin-top:-4px; height:20px;vertical-align:middle;" width="184px" height="186px" viewBox="0 0 184 186" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <!-- Generator: Sketch 3.8.1 (29687) - http://www.bohemiancoding.com/sketch --> <title>Logo-white</title> <desc>Created with Sketch.</desc> <defs></defs> <g id="Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Logo-white" fill="#FFFFFF"> <g id="Group"> <path d="M92.6963305,153.35517 L69.6726254,130.331465 L92.6963305,107.30776 L92.6963305,66.7055226 L49.3715069,110.030346 L32.472925,93.1317642 L92.6963305,32.9083587 L92.6963305,0.803652143 L0.106126393,93.3938562 L92.6963305,185.98406 L92.6963305,153.35517 Z" id="Combined-Shape"></path> </g> <g id="Group" opacity="0.502623601" transform="translate(136.800003, 93.000000) scale(-1, 1) translate(-136.800003, -93.000000) translate(90.300003, 0.000000)"> <path d="M92.6963305,153.35517 L69.6726254,130.331465 L92.6963305,107.30776 L92.6963305,66.7055226 L49.3715069,110.030346 L32.472925,93.1317642 L92.6963305,32.9083587 L92.6963305,0.803652143 L0.106126393,93.3938562 L92.6963305,185.98406 L92.6963305,153.35517 Z" id="Combined-Shape" opacity="0.387068563"></path> </g> </g> </g> </svg>';

$wp_admin_bar->add_menu( array(
 'id' => 'flatsome_panel',
 'title' => $flatsome_icon.' Flatsome',
 'href' => $panel_url
));

$wp_admin_bar->add_menu( array(
 'id' => 'theme_options',
 'parent' => 'flatsome_panel',
 'title' => '<span class="dashicons dashicons-admin-generic" style="'.$icon_style.'"></span>主题选项',
 'href' => $optionUrl_panel
));

$wp_admin_bar->add_menu( array(
 'parent' => 'flatsome_panel',
 'id' => 'options_advanced',
 'title' => '<span class="dashicons dashicons-admin-tools" style="'.$icon_style.'"></span>高级',
 'href' =>  $advanced_url.''
));
/*四亩地
$wp_admin_bar->add_menu( array(
 'parent' => 'flatsome_panel',
 'id' => 'flatsome_panel_license',
 'title' => '主题许可',
 'href' => $panel_url
));
四亩地*/
$wp_admin_bar->add_menu( array(
 'parent' => 'flatsome_panel',
 'id' => 'flatsome_panel_support',
 'title' => '帮助指导',
 'href' => $panel_url.'-support'
));

/*
$wp_admin_bar->add_menu( array(
 'parent' => 'flatsome_panel',
 'id' => 'flatsome_panel_plugins',
 'title' => 'Plugins',
 'href' => $panel_url.'-plugins'
)); */

$wp_admin_bar->add_menu( array(
 'parent' => 'flatsome_panel',
 'id' => 'flatsome_panel_changelog',
 'title' => '更新日志',
 'href' => $panel_url.'-changelog'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'flatsome_panel',
 'id' => 'flatsome_panel_setup_wizard',
 'title' => '安装向导',
 'href' => admin_url().'admin.php?page=flatsome-setup'
));
/*四亩地
if(!flatsome_is_theme_enabled()){
  $wp_admin_bar->add_menu( array(
   'id' => 'flatsome-activate',
   'title' => '<span class="dashicons dashicons-unlock" style="'.$icon_style.'"></span>激活主题',
   'href' => admin_url() . 'admin.php?page=flatsome-panel',
  ));
}四亩地*/

$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_header',
 'title' => '<span class="dashicons dashicons-arrow-up-alt dashicons-header" style="'.$icon_style.'"></span>页眉',
 'href' =>  $optionUrl_panel.'header'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_layout',
 'title' => '<span class="dashicons dashicons-editor-table" style="'.$icon_style.'"></span>布局',
 'href' =>  $optionUrl_section.'layout'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_static_front_page',
 'title' => '<span class="dashicons dashicons-admin-home" style="'.$icon_style.'"></span>首页',
 'href' =>  $optionUrl_section.'static_front_page'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'options_header',
 'id' => 'options_header_presets',
 'title' => '预设',
 'href' =>  $optionUrl_section.'header-presets'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_header',
 'id' => 'options_header_logo',
 'title' => '标志和网站标识',
 'href' =>  $optionUrl_section.'title_tagline'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'options_header',
 'id' => 'options_header_top',
 'title' => '顶栏',
 'href' =>  $optionUrl_section.'top_bar'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_header',
 'id' => 'options_header_main',
 'title' => '主页眉',
 'href' =>  $optionUrl_section.'main_bar'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_header',
 'id' => 'options_header_bottom',
 'title' => '页眉底部',
 'href' =>  $optionUrl_section.'bottom_bar'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_header',
 'id' => 'options_header_mobile',
 'title' => '手机页眉',
 'href' =>  $optionUrl_section.'header_mobile'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_header',
 'id' => 'options_header_sticky',
 'title' => '粘性页眉',
 'href' =>  $optionUrl_section.'header_sticky'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_header',
 'id' => 'options_header_dropdown',
 'title' => '下拉风格',
 'href' =>  $optionUrl_section.'header_dropdown'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_style',
 'title' => '<span class="dashicons dashicons-admin-appearance" style="'.$icon_style.'"></span>风格',
 'href' =>  $optionUrl_panel.'style'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_style',
 'id' => 'options_style_colors',
 'title' => '颜色',
 'href' =>  $optionUrl_section.'colors'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_style',
 'id' => 'options_style_global',
 'title' => '全局风格',
 'href' =>  $optionUrl_section.'global-styles'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_style',
 'id' => 'options_style_type',
 'title' => '排版',
 'href' =>  $optionUrl_section.'type'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_style',
 'id' => 'options_style_css',
 'title' => '自定义CSS',
 'href' =>  $optionUrl_section.'custom-css'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_style',
 'id' => 'options_style_lightbox',
 'title' => '图片灯箱',
 'href' =>  $optionUrl_section.'lightbox'
));

if(is_woocommerce_activated()) {

  $wp_admin_bar->add_menu( array(
   'parent' => 'theme_options',
   'id' => 'options_shop',
   'title' => '<span class="dashicons dashicons-cart" style="'.$icon_style.'"></span>商店 (WooCommerce)',
   'href' =>  $optionUrl_panel.'woocommerce'
  ));

  if(fl_woocommerce_version_check('3.3.0') ) {
    $wp_admin_bar->add_menu( array(
     'parent' => 'options_shop',
     'id' => 'options_shop_store_notice',
     'title' => __( 'Store Notice', 'woocommerce' ),
     'href' =>  $optionUrl_section.'woocommerce_store_notice'
    ));
  }

  $wp_admin_bar->add_menu( array(
   'parent' => 'options_shop',
   'id' => 'options_shop_category_page',
   'title' => __( 'Product Catalog', 'woocommerce' ),
   'href' =>  $optionUrl_section.'woocommerce_product_catalog'
  ));

  $wp_admin_bar->add_menu( array(
   'parent' => 'options_shop',
   'id' => 'options_shop_product_page',
   'title' => '产品页面',
   'href' =>  $optionUrl_section.'product-page'
  ));

  $wp_admin_bar->add_menu( array(
   'parent' => 'options_shop',
   'id' => 'options_shop_my_account',
   'title' => '我的帐户',
   'href' =>  $optionUrl_section.'fl-my-account'
  ));

  $wp_admin_bar->add_menu( array(
   'parent' => 'options_shop',
   'id' => 'options_shop_payment_icons',
   'title' => '付款图标',
   'href' =>  $optionUrl_section.'payment-icons'
  ));


  if(fl_woocommerce_version_check('3.3.0') ) {
    $wp_admin_bar->add_menu( array(
       'parent' => 'options_shop',
       'id' => 'options_shop_product_images',
       'title' => __( 'Product Images', 'woocommerce' ),
       'href' =>  $optionUrl_section.'woocommerce_product_images'
      ));
  }

  $wp_admin_bar->add_menu( array(
   'parent' => 'options_shop',
   'id' => 'options_shop_checkout',
   'title' => '结账',
   'href' =>  $optionUrl_section.'woocommerce_checkout'
  ));

  $wp_admin_bar->add_menu( array(
   'parent' => 'options_shop',
   'id' => 'options_shop_cart',
   'title' => '购物车',
   'href' =>  $optionUrl_section.'cart-checkout'
  ));

  $wp_admin_bar->add_menu( array(
   'parent' => 'options_shop',
   'id' => 'options_advanced_woocommerce_2',
   'title' => '高级',
   'href' =>  $advanced_url.'of-option-woocommerce'
  ));

}


$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_layout',
 'title' => '<span class="dashicons dashicons-editor-table" style="'.$icon_style.'"></span>布局',
 'href' =>  $optionUrl_section.'layout'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_pages',
 'title' => '<span class="dashicons dashicons-admin-page" style="'.$icon_style.'"></span>页面',
 'href' =>  $optionUrl_section.'pages'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_blog',
 'title' => '<span class="dashicons dashicons-edit" style="'.$icon_style.'"></span>博客',
 'href' =>  $optionUrl_panel.'blog'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_portfolio',
 'title' => '<span class="dashicons dashicons-portfolio" style="'.$icon_style.'"></span>作品',
 'href' =>  $optionUrl_section.'fl-portfolio'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_footer',
 'title' => '<span class="dashicons dashicons-arrow-down-alt" style="'.$icon_style.'"></span>页脚',
 'href' =>  $optionUrl_section.'footer'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_menus',
 'title' => '<span class="dashicons dashicons-menu " style="'.$icon_style.'"></span>菜单',
 'href' =>  $optionUrl_panel.'nav_menus'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_menus',
 'id' => 'options_menus_backend',
 'title' => '后端编辑器',
 'href' =>  admin_url().'nav-menus.php'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_widgets',
 'title' => '<span class="dashicons dashicons-welcome-widgets-menus" style="'.$icon_style.'"></span>小工具',
 'href' =>  $optionUrl_panel.'widgets'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_widgets',
 'id' => 'options_widgets_backend',
 'title' => '后端编辑器',
 'href' =>  admin_url().'widgets.php'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_share',
 'title' => '<span class="dashicons dashicons-share" style="'.$icon_style.'"></span>分享',
 'href' =>  $optionUrl_section.'share'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'theme_options',
 'id' => 'options_reset',
 'title' => '<span class="dashicons dashicons-admin-generic" style="'.$icon_style.'"></span>重置',
 'href' =>  $optionUrl_section.'advanced'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_custom_scripts',
 'title' => '全局设置',
 'href' =>  $advanced_url.'of-option-globalsettings'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_custom_css',
 'title' => '自定义CSS',
 'href' =>  $advanced_url.'of-option-customcss'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_ux_builder',
 'title' => '四亩地构建器',
 'href' =>  $advanced_url.'of-option-uxbuilder'
));


$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_custom_lazyloading',
 'title' => '延迟加载',
 'href' =>  $advanced_url.'of-option-lazyloading'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_site_loader',
 'title' => '网站加载器',
 'href' =>  $advanced_url.'of-option-siteloader'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_site_search',
 'title' => '网站搜索',
 'href' =>  $advanced_url.'of-option-sitesearch'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_google_apis',
 'title' => '谷歌API',
 'href' =>  $advanced_url.'of-option-googleapis'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_maintenance',
 'title' => '维护',
 'href' =>  $advanced_url.'of-option-maintenancemode'
));

$wp_admin_bar->add_menu( array(
	'parent' => 'options_advanced',
	'id'     => 'options_advanced_404',
	'title'  => '404页面',
	'href'   => $advanced_url . 'of-option-404page',
) );

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_custom_fonts',
 'title' => '自定义字体',
 'href' =>  $advanced_url.'of-option-customfonts'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_catalog_mode',
 'title' => '目录模式',
 'href' =>  $advanced_url.'of-option-catalogmode'
));

$wp_admin_bar->add_menu( array(
	'parent' => 'options_advanced',
	'id' => 'options_advanced_infinite_scroll',
	'title' => '无限滚动',
	'href' =>  $advanced_url.'of-option-infinitescroll'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_portfolio',
 'title' => '作品',
 'href' =>  $advanced_url.'of-option-portfolio'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_woocommerce',
 'title' => 'WooCommerce',
 'href' =>  $advanced_url.'of-option-woocommerce'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_integrations',
 'title' => '集成',
 'href' =>  $advanced_url.'of-option-integrations'
));

$wp_admin_bar->add_menu( array(
 'parent' => 'options_advanced',
 'id' => 'options_advanced_backup',
 'title' => '备份/导入',
 'href' =>  $advanced_url.'of-option-backupandimport'
));

// HELPERS


if(is_category() || is_home()){
	$wp_admin_bar->add_menu( array(
	       'parent' => 'customize',
	       'id' => 'admin_bar_helper',
	       'title' => '博客布局',
 		    'href' =>  $optionUrl_panel.'blog'
	));
}

if(is_woocommerce_activated()) {

  if(is_cart() ){
     $wp_admin_bar->add_menu( array(
         'parent' => 'customize',
         'id' => 'admin_bar_helper',
         'title' => '购物车布局',
 		 'href' =>  $optionUrl_section.'cart-checkout'
     ));
  }

  if(is_checkout()){
     $wp_admin_bar->add_menu( array(
         'parent' => 'customize',
         'id' => 'admin_bar_helper',
         'title' => '结账布局',
     'href' =>  $optionUrl_section.'woocommerce_checkout'
     ));
  }

  if(is_product()){
         $wp_admin_bar->add_menu( array(
             'parent' => 'customize',
             'id' => 'admin_bar_helper',
             'title' => __('产品页面','woocommerce'),
 			 'href' =>  $optionUrl_section.'product-page'
         ));
  }


    if(is_account_page()){
         $wp_admin_bar->add_menu( array(
             'parent' => 'customize',
             'id' => 'admin_bar_helper',
             'title' => '我的帐户页面',
 			 'href' =>  $optionUrl_section.'fl-my-account'
         ));
     }

      if(is_shop() || is_product_category()){
          $wp_admin_bar->add_menu( array(
             'parent' => 'customize',
             'id' => 'admin_bar_helper_flatsome',
             'title' => __('产品目录','woocommerce'),
 			'href' =>  $optionUrl_section.'woocommerce_product_catalog'
         ));
  	}

}

}
add_action( 'admin_bar_menu', 'flatsome_admin_bar_helper' , 35);
