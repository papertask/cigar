<?php

add_action( 'init', 'of_options' );

if ( ! function_exists( 'of_options' ) ) {
	function of_options() {
		//Access the WordPress Categories via an Array
		$of_categories     = array();
		$of_categories_obj = get_categories( 'hide_empty=0' );
		foreach ( $of_categories_obj as $of_cat ) {
			$of_categories[ $of_cat->cat_ID ] = $of_cat->cat_name;
		}
		$categories_tmp = array_unshift( $of_categories, "Select a category:" );

		//Access the WordPress Pages via an Array
		$of_pages      = array();
		$of_pages_obj  = get_pages( 'sort_column=post_parent,menu_order' );
		$of_pages['0'] = '选择页面：';
		foreach ( $of_pages_obj as $of_page ) {
			$of_pages[ $of_page->ID ] = $of_page->post_title;
		}

		// Access the Blocks via an Array.
		$of_blocks = array( false => '-- 无 --' );
		$of_blocks_obj  = flatsome_get_post_type_items( 'blocks' );
		if ( $of_blocks_obj ) {
			foreach ( $of_blocks_obj as $of_block ) {
				$of_blocks[ $of_block->post_name ] = $of_block->post_title;
			}
		}

		// Set the Options Array
		global $of_options;
		$of_options = array();

		$url = ADMIN_DIR . 'assets/images/';

		$of_options[] = array(
			"name" => "1.全局设置",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "页眉脚本",
			"desc" => "在HEAD标记中添加自定义脚本。 您需要在脚本周围有SCRIPT标记。",
			"id"   => "html_scripts_header",
			"std"  => "",
			"type" => "textarea"
		);

		$of_options[] = array(
			"name" => "页脚脚本",
			"desc" => "页脚脚本",
			"id"   => "html_scripts_footer",
			"std"  => "",
			"type" => "textarea"
		);

		$of_options[] = array(
			"name" => "主体脚本 - 顶部",
			"desc" => "在BODY标签打开后添加自定义脚本。 您需要在脚本周围添加SCRIPT标记。",
			"id"   => "html_scripts_after_body",
			"std"  => "",
			"type" => "textarea"
		);

		$of_options[] = array(
			"name" => "主体脚本 - 底部",
			"desc" => "在关闭BODY标记之前添加自定义脚本。 您需要在脚本周围添加SCRIPT标记。",
			"id"   => "html_scripts_before_body",
			"std"  => "",
			"type" => "textarea"
		);

		$of_options[] = array(
			"name" => "Flatsome 2.0内容支持",
			"id"   => "flatsome_fallback",
			"desc" => "支持在Flatsome 2.0中制作的内容。 禁用加速网站。",
			"std"  => 1,
			"type" => "checkbox"
		);

		$of_options[] = array(
			"name" => "2.自定义CSS",
			"type" => "heading"
		);

		$of_options[] = array(
			"name" => "所有屏幕",
			"desc" => "在这里添加自定义CSS",
			"id"   => "html_custom_css",
			"std"  => "",
			"type" => "textarea"
		);

		$of_options[] = array(
			"name" => "平板及以下",
			"desc" => "在平板电脑和手机上添加自定义CSS",
			"id"   => "html_custom_css_tablet",
			"std"  => "",
			"type" => "textarea"
		);

		$of_options[] = array(
			"name" => "仅手机",
			"desc" => "在此处添加自定义CSS用于移动视图",
			"id"   => "html_custom_css_mobile",
			"std"  => "",
			"type" => "textarea"
		);

		$of_options[] = array(
			"name" => "3.网站加载器",
			"type" => "heading",
		);

		$of_options[] = array(
			"name"    => "网站加载器",
			"id"      => "site_loader",
			"desc"    => "在加载网站时启用网站加载器覆盖。",
			"type"    => "select",
			"std"     => 0,
			"options" => array(
							0 => "禁用",
							'home' => "在首页启用",
							'all' => "在所有页面启用"
			),
		);

		$of_options[] = array(
			"name"    => "颜色",
			"id"      => "site_loader_color",
			"type"    => "select",
			"std"     => 'light',
			"options" => array(
	'light' => "浅色",
	'dark' => "深色"
			),
		);

		$of_options[] = array(
	"name" 		=> "背景颜色",
			"id"   => "site_loader_bg",
			"std"  => "",
			"type" => "color"
		);

		$of_options[] = array(
			"name" => "4.网站搜索",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "即时搜索",
			"id"   => "live_search",
			"desc" => "为产品和页面启用即时搜索",
			"std"  => 1,
			"type" => "checkbox"
		);

		$of_options[] = array(
			"name" => "搜索占位符",
			"desc" => "更改搜索字段占位符",
			"id"   => "search_placeholder",
			"type" => "text"
		);

		if ( is_woocommerce_activated() ) {

			$of_options[] = array(
				"name" => "在搜索结果显示博客和页面",
				"id"   => "search_result",
				"desc" => "在搜索结果启用博客和页面",
				"std"  => 1,
				"type" => "checkbox"
			);
            
       $of_options[] = array(
        "name"    => "搜索产品顺序方式",
        "id"      => "search_products_order_by",
        "type"    => "select",
        "std"     => 'relevance',
        "options" => array(
          'relevance' => '关联',
          'title'     => "标题",
          'price'     => "价格",
        ),
      );


      $of_options[] = array(
				"name" => "搜索产品SKU",
				"desc" => "允许在即时搜索招SKU搜索.",
				"id"   => "search_by_sku",
				"std"  => 0,
				"type" => "checkbox"
			);
     
      
      $of_options[] = array(
				"name" => "搜索产品标签",
				"desc" => "在实时搜索中允许按产品标签进行搜索。",
				"id"   => "search_by_product_tag",
				"std"  => 0,
				"type" => "checkbox"
			);
		}

    // UX Builder
    $of_options[] = array(
      "name" => "5.四亩地构建器",
      "type" => "heading",
    );

    $of_options[] = array(
      "name" => "Flatsome工作室 (测试版)",
      "id"   => "flatsome_studio",
      "desc" => "启用访问Flatsome工作室测试版",
      "std"  => 1,
      "type" => "checkbox"
    );

    // Lazy loading
		$of_options[] = array(
			"name" => "6.延迟加载",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "延迟加载谷歌字体",
			"id"   => "lazy_load_google_fonts",
			"desc" => "启用延迟加载谷歌字体",
			"std"  => 1,
			"type" => "checkbox"
		);

		$of_options[] = array(
			"name" => "延迟加载图标",
			"id"   => "lazy_load_icons",
			"desc" => "启用延迟加载Flatsome界面图标",
			"std"  => 0,
			"type" => "checkbox"
		);

		$of_options[] = array(
			"name" => "延迟加载横幅和栏目背景",
			"id"   => "lazy_load_backgrounds",
			"desc" => "启用延迟加载横幅和栏目背景。",
			"std"  => 1,
			"type" => "checkbox"
		);

		$of_options[] = array(
			"name" => "延迟加载图像",
			"id"   => "lazy_load_images",
			"desc" => "启用图像延迟加载。<strong>使用时要小心！ 如果您有插件兼容性问题，请禁用。</strong>",
			"std"  => 0,
			"type" => "checkbox"
		);

/*四亩地
		$of_options[] = array(
			"name" => "Google APIs",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "Google Maps API",
			"desc" => "Enter Google Maps API key here to enable Maps. You can generate one here: <a target='_blank' href='https://developers.google.com/maps/documentation/javascript/'>Google Maps API</a>",
			"id"   => "google_map_api",
			"std"  => "",
			"type" => "text"
		);
四亩地*/
		$of_options[] = array(
			"name" => "7.维护模式",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "维护模式",
			"id"   => "maintenance_mode",
			"desc" => "对除管理员以外的所有用户启用维护模式。",
			"std"  => 0,
			"type" => "checkbox"
		);

		$of_options[] = array(
			"name" => "管理通知",
			"id"   => "maintenance_mode_admin_notice",
			"desc" => "当维护模式启用时显示管理通知",
			"std"  => 1,
			"type" => "checkbox"
		);

		$of_options[] = array(
			"name"    => "自定义维护页面",
			"id"      => "maintenance_mode_page",
			"desc"    => "将自定义页面设置为维护页面。 只有此页面才会显示给访问者。",
			"std"     => 0,
			"type"    => "select",
			"options" => $of_pages
		);

		$of_options[] = array(
			"name" => "维护模式文字",
			"desc" => "访问维护屏幕时客户可以看到的文本。",
			"id"   => "maintenance_mode_text",
			"std"  => "请稍后再回来看看..",
			"type" => "text"
		);

		$of_options[] = array(
			"name" => "8.自定义404",
			"type" => "heading",
		);

		$of_options[] = array(
			"name"    => "自定义404区块",
			"id"      => "404_block",
			"desc"    => "将404页面内容替换为可在页面构建器中编辑的自定义块。",
			"std"     => 0,
			"type"    => "select",
			"options" => $of_blocks,
		);

		$of_options[] = array(
			"name" => "9.自定义字体",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "添加自定义字体",
			"type" => "info",
			"desc" => '<p style="font-size:16px">我们正在开发一种新的自定义字体添加到Flatsome的解决方案。 同时遵循本指南：<a href="//uxthemes.helpscoutdocs.com/article/224-add-custom-fonts-to-flatsome" target="_blank">添加自定义字体到Flatsome</p></a>'
		);

		if ( is_woocommerce_activated() ) {

			$of_options[] = array(
				"name" => "10.商店",
				"type" => "heading",
			);

			$of_options[] = array(
				"name" => "全局禁用评论",
				"id"   => "disable_reviews",
				"desc" => "全局禁用评论",
				"std"  => 0,
				"type" => "checkbox"
			);

			$of_options[] = array(
				"name" => "启用默认WooCommerce产品相册",
				"id"   => "product_gallery_woocommerce",
				"desc" => "使用默认的WooCommerce相册幻灯片来实现插件兼容性，例如\"其它变化图片\".",
				"std"  => 0,
				"type" => "checkbox"
			);

			$of_options[] = array(
				"name" => "商店页眉",
				"desc" => "输入应放置在主要商店页面顶部的HTML。 允许使用简码。",
				"id"   => "html_shop_page",
				"std"  => "",
				"type" => "textarea"
			);

			$of_options[] = array(
				"name" => "其他全局选项卡/栏目标题",
				"id"   => "tab_title",
				"std"  => "",
				"type" => "text"
			);

			$of_options[] = array(
				"name" => "其他全局选项卡/栏目标题",
				"id"   => "tab_content",
				"std"  => "",
				"type" => "textarea",
				"desc" => "在这里添加其他选项卡内容...像尺寸图表"
			);

			$of_options[] = array(
				"name" => "添加到购物车按钮（全局）之前的HTML",
				"desc" => "输入将在添加到购物车选择之前显示的HTML和简码。",
				"id"   => "html_before_add_to_cart",
				"std"  => " ",
				"type" => "textarea"
			);

			$of_options[] = array(
				"name" => "添加到购物车按钮后的HTML（全局）",
				"desc" => "输入将在添加到购物车按钮后显示的HTML和简码。",
				"id"   => "html_after_add_to_cart",
				"std"  => "",
				"type" => "textarea"
			);

			$of_options[] = array(
				"name" => "感谢页面内容/脚本",
				"desc" => "在这里输入感谢页面的脚本或自定义HTML内容",
				"id"   => "html_thank_you",
				"std"  => "",
				"type" => "textarea"
			);

			$of_options[] = array(
				"name" => "11.目录模式",
				"type" => "heading",
			);

			$of_options[] = array(
				"name" => "启用目录模式",
				"id"   => "catalog_mode",
				"desc" => "启用目录模式。这将禁用添加到购物车按钮/结账和购物车。",
				"std"  => 0,
				"type" => "checkbox"
			);

			$of_options[] = array(
				"name" => "禁用价格",
				"id"   => "catalog_mode_prices",
				"desc" => "选择以禁用分类页面和产品页面上的价格。",
				"std"  => 0,
				"type" => "checkbox"
			);

			$of_options[] = array(
				"name" => "购物车/帐户更换（标题）",
				"id"   => "catalog_mode_header",
				"std"  => "",
				"type" => "textarea",
				"desc" => "输入您要显示的内容，而不是帐户/购物车。允许使用简码。对于搜索框输入<b>[search]</b>。对于社交图标输入：<b>[follow twitter='http://' facebook='http://' email='post@email.com' pinterest='http://']</b>"
			);

			$of_options[] = array(
				"name" => "添加到购物车替换 - 产品页面",
				"id"   => "catalog_mode_product",
				"std"  => "",
				"type" => "textarea",
				"desc" => "在此处输入联系信息或查询表单简码。"
			);

			$of_options[] = array(
				"name" => "添加到购物车替换 - 产品快速查看",
				"id"   => "catalog_mode_lightbox",
				"std"  => "",
				"type" => "textarea",
				"desc" => "输入将在产品快速浏览中显示的文字"
			);

			$of_options[] = array(
				"name" => "12.无限滚动",
				"type" => "heading",
			);

			$of_options[] = array(
				"name" => "无限滚动分类/产品",
				"id"   => "flatsome_infinite_scroll",
				"desc" => "为WooCommerce分类/产品归档启用无限滚动。",
				"std"  => 0,
				"type" => "checkbox"
			);

			$of_options[] = array(
				"name"    => "加载类型",
				"id"      => "infinite_scroll_loader_type",
				"desc"    => "选择加载类型动画或点击按钮。",
				"std"     => "spinner",
				"type"    => "select",
				"options" => array(
					'button' => '按钮（点击）',
					'spinner' => '微调',
					'image' => '自定义图片',
				)
			);

			$of_options[] = array(
				"name" => "自定义加载图片",
				"desc" => "上传或选择自定义加载图片（用于加载类型“自定义图片”）",
				"id"   => "infinite_scroll_loader_img",
				"std"  => "",
				"type" => "upload",
			);
		}

		// Portfolio
		$of_options[] = array(
			"name" => "13.作品",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "启用作品",
			"id"   => "fl_portfolio",
			"desc" => "启用作品",
			"std"  => 1,
			"type" => "checkbox"
		);

		// Integrations
		$of_options[] = array(
			"name" => "14.集成",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "",
			"type" => "info",
			"desc" => '<p style="font-size:14px">如果已激活集成插件的其他选项，则将在此处显示。</p>'
		);

		if ( function_exists( 'ubermenu' ) ) {
			$of_options[] = array(
				"name" => "Ubermenu",
				"id"   => "flatsome_uber_menu",
				"desc" => "启用全宽UberMenu。 您也可以使用UberMenu选项在其他位置插入。",
				"std"  => 1,
				"type" => "checkbox"
			);
		}

		// Yoast options.
		if ( class_exists( 'WPSEO_Frontend' ) ) {
			$of_options[] = array(
				"name" => "Yoast主要分类",
				"id"   => "wpseo_primary_term",
				"desc" => "在产品类别页面和元素上使用Yoast主要分类.",
				"std"  => 0,
				"type" => "checkbox"
			);

			$of_options[] = array(
				"name"  => "Yoast面包屑导航",
				"id"    => "wpseo_breadcrumb",
				"desc"  => "在产品类别页面，单个产品页面和元素上使用Yoast面包屑.",
				"std"   => 0,
				"folds" => 1,
				"type"  => "checkbox",
			);

			$of_options[] = array(
				"name" => "",
				"id"   => "wpseo_breadcrumb_remove_last",
				"desc" => "删除单个产品页面上的最后一个静态碎屑（产品标题）。",
				"std"  => 1,
				"fold" => "wpseo_breadcrumb",
				"type" => "checkbox",
			);
		}

		// Backup Options
		$of_options[] = array(
			"name" => "15.备份和导入",
			"type" => "heading",
		);

		$of_options[] = array(
			"name" => "备份和还原选项",
			"id"   => "of_backup",
			"std"  => "",
			"type" => "backup",
			"desc" => '您可以使用以下两个按钮备份当前选项，然后在以后将其还原。 如果您想要对选项进行实验，但想保留旧设置，以防您需要它，这将非常有用。',
		);

		$of_options[] = array(
			"name" => "传输主题选项数据",
			"id"   => "of_transfer",
			"std"  => "",
			"type" => "transfer",
			"desc" => '您可以通过复制文本框中的文本，在不同的安装之间转移保存的选项数据。 要从另一个安装导入数据，请将文本框中的数据替换为另一个安装中的数据，然后单击“导入选项”。',
		);

	} // End function: of_options()
} // End chack if function exists: of_options()
