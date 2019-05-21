<?php

add_ux_builder_shortcode( 'section', array(
	'type'      => 'container',
    'name' => __( '栏目','ux-builder'),
    'category' => __( '布局' ),
	'template'  => flatsome_ux_builder_template( 'section.html' ),
	'thumbnail' => flatsome_ux_builder_thumbnail( 'section' ),
	'wrap'      => false,
	'info'      => '{{ label }}',
	'priority'  => -1,
	'styles'    => array(
		'flatsome-banner-effect' => get_template_directory_uri() . '/assets/css/effects.css',
	),
	'presets' => array(
		array(
            'name' => __( '默认' ),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/simple-white' ),
			'content'   => '[section]  [/section]',
		),
		array(
            'name' => __( '默认深色' ),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/simple-center' ),
			'content'   => '[section bg_color="rgb(40, 40, 40)" dark="true"]  [/section]',
		),
		array(
            'name' => __('简单浅色'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/simple-light' ),
            'content' => '[section label="简单浅色" bg_color="rgb(245, 245, 245)" padding="60px" height="300px" border="1px 0px 0px 0px" border_color="rgb(235, 235, 235)"] [row] [col span="4" span__sm="12"] <h2 class="uppercase">这是一个标题</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col span="4" span__sm="12"] <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col span="4" span__sm="12"] <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [/row] [/section]',
		),
		array(
            'name' => __('简单居中'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/simple-center' ),
            'content' => '[section label="简单居中" bg_color="rgb(245, 245, 245)" padding="60px" height="300px" border_color="rgb(235, 235, 235)"] [row h_align="center"] [col span="10" align="center" span__sm="12"] <h2 class="uppercase">这是一个标题</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [/row] [/section]'
		),
		array(
            'name' => __('箭头在上'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/arrow-down' ),
            'content' => '[section label="栏目带箭头" bg_color="rgb(0, 0, 0)" bg_overlay="rgba(0, 0, 0, 0.4)" dark="true" mask="arrow" padding="59px" height="300px" border="1px 0px 0px 0px" border_color="rgb(235, 235, 235)"] [row] [col span="4" span__sm="12" text_depth="2"] <h2 class="uppercase">这是带顶部箭头的标题</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col span="4" span__sm="12" text_depth="2"] <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col span="4" span__sm="12" text_depth="2"] <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [/row] [/section]'
		),
		array(
            'name' => __('右框深色'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/box-right-dark' ),
            'content' => '[section label="深色栏目带右框" bg_color="rgb(171, 171, 171)" bg_overlay="rgba(0, 0, 0, 0.64)" padding="59px" height="300px" border="1px 0px 0px 0px" border_color="rgb(235, 235, 235)"] [row style="large" v_align="middle" h_align="center"] [col span="6" span__sm="12" align="center" color="light"] <h2>深色栏目带右侧内容</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col span="6" span__sm="12" padding="15px 15px 15px 15px" align="left" bg_color="rgb(255, 255, 255)" animate="flipInY" depth="2" depth_hover="5"] [/col] [/row] [/section]'
		),
		array(
            'name' => __('左框深色'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/box-left-dark' ),
            'content' => '[section label="深色栏目带左框" bg_color="rgb(171, 171, 171)" bg_overlay="rgba(0, 0, 0, 0.78)" padding="59px" height="300px" border="1px 0px 0px 0px" border_color="rgb(235, 235, 235)"] [row style="large" v_align="middle" h_align="center"] [col span="6" span__sm="12" padding="15px 15px 15px 15px" bg_color="rgb(255, 255, 255)" depth="2" depth_hover="5"] [/col] [col span="6" span__sm="12" align="center" color="light"] <h2>深色栏目带左侧内容</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [button text="在此添加任何内容"] [/col] [/row] [/section]'
		),
		array(
            'name' => __('右框'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/box-right' ),
            'content' => '[section label="栏目带右侧框" bg_color="rgb(228, 228, 228)" padding="59px" height="300px" border="1px 0px 0px 0px" border_color="rgb(235, 235, 235)"] [row style="large" v_align="middle" h_align="center"] [col span="6" span__sm="12" align="center"] <h2>栏目带右侧内容</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col span="6" span__sm="12" padding="15px 15px 15px 15px" bg_color="rgb(255, 255, 255)" depth="2" depth_hover="5"] [/col] [/row] [/section]'
		),
		array(
            'name' => __('左框'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/box-left' ),
            'content' => '[section bg_color="rgb(240, 240, 240)" padding="59px" height="300px" border="1px 0px 0px 0px" border_color="rgb(235, 235, 235)"] [row style="large" v_align="middle" h_align="center"] [col span="6" span__sm="12" padding="15px 15px 15px 15px" bg_color="rgb(255, 255, 255)" depth="2" depth_hover="5"] [/col] [col span="6" span__sm="12" align="center"] <h2>栏目带左侧内容</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [/row] [/section]'
		),
		array(
            'name' => __('媒体左'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-left' ),
            'content' => '[section label="左侧媒体" bg_color="rgb(193, 193, 193)" bg_overlay="rgba(255, 255, 255, 0.85)" padding="60px"] [row style="large" v_align="middle"] [col span="6" span__sm="12"] [ux_image] [/col] [col span="6" span__sm="12" align="left"] <h2>栏目带左侧图片</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [button text="添加内容到这里"] [/col] [/row] [/section]'
		),
		array(
            'name' => __('媒体右'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-right' ),
            'content' => '[section label="右侧媒体" bg_color="rgb(193, 193, 193)" bg_overlay="rgba(255, 255, 255, 0.85)" padding="60px"] [row style="large" v_align="middle"] [col span="6" span__sm="12" align="left"] <h2>栏目带右侧图片</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [button text="添加内容到这里"] [/col] [col span="6" span__sm="12"] [ux_image] [/col] [/row] [/section]'
		),
		array(
            'name' => __('大媒体左'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-left-large' ),
            'content' => '[section label="左侧大媒体" bg_color="rgb(247, 247, 247)" bg_overlay="rgba(255, 255, 255, 0.85)" padding="0px"] [row style="collapse" width="full-width" v_align="middle"] [col span="6" span__sm="12"] [ux_image] [/col] [col span="6" span__sm="12" padding="10% 10% 10% 10%" align="center" max_width="520px"] <h2>栏目带左侧大图片</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [button text="添加内容到这里"] [/col] [/row] [/section]'
		),
		array(
            'name' => __('大媒体右'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-right-large' ),
            'content' => '[section label="右侧大媒体" bg_color="rgb(247, 247, 247)" bg_overlay="rgba(255, 255, 255, 0.85)" padding="0px"] [row style="collapse" width="full-width" v_align="middle"] [col span="6" span__sm="12" padding="10% 10% 10% 10%" align="center" max_width="520px"] <h2>栏目带大右侧图片</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col span="6" span__sm="12"] [ux_image] [/col] [/row] [/section]'
		),
		array(
            'name' => __('大媒体右深色'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-right-large-dark' ),
            'content' => '[section label="大右侧媒体" bg_color="rgb(64, 64, 64)" bg_overlay="rgba(0, 0, 0, 0.7)" dark="true" padding="0px"] [row style="collapse" width="full-width" v_align="middle"] [col span="6" span__sm="12" padding="5% 5% 5% 0px" align="left" max_width="520px"] <h2>深色栏目带右侧大图片</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [button text="添加内容到这里"] [/col] [col span="6" span__sm="12"] [ux_image] [/col] [/row] [/section]'
		),
		array(
            'name' => __('大媒体左深色'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-left-large-dark' ),
            'content' => '[section label="媒体左大" bg_color="rgb(64, 64, 64)" bg_overlay="rgba(0, 0, 0, 0.73)" dark="true" padding="0px"] [row style="collapse" width="full-width" v_align="middle"] [col span="6" span__sm="12"] [ux_image] [/col] [col span="6" span__sm="12" padding="5% 5% 5% 5%" align="left" max_width="520px"] <h2>Dark Section with a large image left</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [button text="Add Any content here"] [/col] [/row] [/section]'
		),
		array(
            'name' => __('媒体居中'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-center' ),
            'content' => '[section label="媒体居中" bg_color="rgb(193, 193, 193)" bg_overlay="rgba(255, 255, 255, 0.85)"] [row style="large" h_align="center"] [col span="3" span__sm="12" align="right"] <h2>栏目带图片居中</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col span="5" span__sm="12"] [ux_image] [/col] [col span="3" span__sm="12" align="left"] <h2>栏目带图片居中</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [/row] [/section]'
		),
		array(
            'name' => __('媒体上'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-top' ),
            'content' => '[section label="媒体在上面" bg_color="rgb(193, 193, 193)" bg_overlay="rgba(255, 255, 255, 0.85)" padding="0px"] [row style="large" h_align="center"] [col] [ux_image] [/col] [col span="7" span__sm="12" align="center"] <h2>栏目带图片在上</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [/row] [/section]'
		),
		array(
            'name' => __('媒体下'),
			'thumbnail' => flatsome_ux_builder_thumbnail( 'sections/media-bottom' ),
            'content' => '[section label="媒体在下面" bg_color="rgb(208, 208, 208)" bg_overlay="rgba(255, 255, 255, 0.85)" padding="0px"] [row style="collapse" h_align="center"] [col span="6" span__sm="12" padding="50px 0px 50px 0px" align="center"] <h2>栏目带图片在下面</h2> <p>之前关注我文章的朋友肯定知道，韩国汽车在本土市场的售价是比较便宜的。而且韩国小型车并不发达，在国内热销的现代瑞纳，起亚K2等车型，韩国市场的销量都很少。相反，微型车和紧凑型车的销量很大。</p> [/col] [col] [ux_image] [/col] [/row] [/section]'
		),
	),

	'options' => array(
		'label'      => array(
			'type'        => 'textfield',
			'heading'     => '管理员标签',
			'placeholder' => '输入管理员标签...',
		),

		'background_options' => require( __DIR__ . '/commons/background.php' ),
		'layout_options'     => array(
			'type'    => 'group',
            'heading' => __( '布局' ),
			'options' => array(
				'dark'            => array(
					'type'    => 'radio-buttons',
                    'heading' => '颜色',
					'default' => 'false',
					'options' => array(
                        'true'   => array( 'title' => '浅色'),
                        'false'  => array( 'title' => '深色'),
					),
				),
				'sticky'          => array(
					'type'    => 'radio-buttons',
                    'heading' => '粘性',
					'default' => '',
					'options' => array(
                        'true'   => array( 'title' => '开'),
                        ''  => array( 'title' => '关'),
					),
				),
				'mask'            => array(
					'type'    => 'select',
                    'heading' => '蒙版',
					'options' => require( __DIR__ . '/values/masks.php' ),
				),
				'padding'         => array(
					'type'       => 'scrubfield',
                    'heading' => '填充',
					'responsive' => true,
					'default'    => '30px',
					'min'        => 0,
					'max'        => 500,
				),
				'height'          => array(
					'type'       => 'scrubfield',
                    'heading' => '最小高度',
					'responsive' => true,
					'min'        => 0,
					'max'        => 1000,
				),
				'margin'          => array(
					'type'    => 'scrubfield',
                    'heading' => '边距',
					'min'     => -500,
					'max'     => 500,
				),
				'scroll_for_more' => array(
					'type'    => 'radio-buttons',
                    'heading' => '滚动更多',
					'default' => '',
					'options' => array(
                        ''   => array( 'title' => '关'),
                        'true'  => array( 'title' => '开'),
					),
				),
				'loading'         => array(
					'type'    => 'radio-buttons',
                    'heading' => '加载旋转器',
					'default' => '',
					'options' => array(
                        ''   => array( 'title' => '关'),
                        'true'  => array( 'title' => '开 '),
					),
				),
			),
		),
		'border_options'     => require( __DIR__ . '/commons/border.php' ),
		'video_options'      => require( __DIR__ . '/commons/video.php' ),
	 	'advanced_options' => require( __DIR__ . '/commons/advanced.php'),
	),
) );
