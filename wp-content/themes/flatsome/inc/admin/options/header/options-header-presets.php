<?php 

$preset_url = get_template_directory_uri().'/inc/admin/options/header/img/';

Flatsome_Option::add_section( 'header-presets', array(
    'title' => __( 'Presets', 'flatsome-admin' ),
    'panel' => 'header',
    'priority' => '1',
    'description' => __( 'You can quick change between header presets here. This works best on a fresh install or resetted options. You can safely try new layouts without loosing changes. Just remember to NOT save if you do not want to use the selected preset.', 'flatsome-admin' ),
) );

Flatsome_Option::add_field( 'option', array(
    'type'        => 'preset',
    'settings'    => 'preset_demo',
    'label'       => __( 'Preset', 'kirki' ),
    'section'     => 'header-presets',
    'transport' => 'postMessage',
    'choices'     => get_flatsome_header_presets()
) );

Flatsome_Option::add_field( 'option', array(
    'type'        => 'custom',
    'settings' => 'select_preset',
    'section'     => 'header-presets',
    'default'     => '
    <div class="preset-click one-col">
    <h3 class="preset-title">页眉预设</h3>
	    <img data-preset="header-default" title="默认页眉" src="'.$preset_url.'header-default.svg"/>
	    <img data-preset="header-default-center" title="页眉默认居中" src="'.$preset_url.'header-default-center.svg"/>
        <img data-preset="header-default-dark" title="页眉默认深色" src="'.$preset_url.'header-default-dark.svg"/>
        <img data-preset="header-wide-nav-dark" title="宽页眉导航深色" src="'.$preset_url.'header-wide-nav-dark.svg"/>
        <img data-preset="header-wide-nav" title="宽页眉导航" src="'.$preset_url.'header-wide-nav.svg"/>
        <img data-preset="header-simple" title="简单页眉" src="'.$preset_url.'header-simple.svg"/>
        <img data-preset="header-simple-center" title="简单页眉" src="'.$preset_url.'header-simple-center.svg"/>
        <img data-preset="header-simple-signup" title="简单页眉注册" src="'.$preset_url.'header-simple-signup.svg"/>
        <img data-preset="header-simple-right-buttons" title="简单页眉右侧按钮" src="'.$preset_url.'header-simple-right-buttons.svg"/>
        <img data-preset="header-cart-top" title="页眉购物车在上" src="'.$preset_url.'header-cart-top.svg"/>
    </div>
    ',
) );