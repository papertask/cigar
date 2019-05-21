<?php

add_ux_builder_shortcode( 'divider', array(
    'name' => __( '分隔' ),
    'category' => __( '内容' ),
    'template' => flatsome_ux_builder_template( 'divider.html' ),
    'thumbnail' =>  flatsome_ux_builder_thumbnail( 'divider' ),
    'options' => array(
        'align' => array(
            'type' => 'radio-buttons',
            'heading' => __('对齐方式'),
            'default' => '',
            'options' => require( __DIR__ . '/values/align-radios.php' ),
        ),
    	'width' => array(
    		'type' => 'scrubfield',
    		'heading' => __('宽度'),
    		'default' => '30px',
            'min' => 0,
    	),
    	'height' => array(
    		'type' => 'scrubfield',
    		'heading' => __('高度'),
    		'default' => '3px',
            'min' => 0,
    	),
    	'margin' => array(
    		'type' => 'scrubfield',
    		'heading' => __('边距'),
    		'default' => '1.0em',
            'step' => 0.1,
    	),
		'color' => array(
	      'type' => 'colorpicker',
	      'heading' => __('颜色'),
	      'default' => '',
	      'alpha' => true,
	      'format' => 'rgb',
	      'position' => 'bottom right',
	    ),
    )


) );

/*
 'width' => 'small',
	    'height' => '',
	    'align' => 'left',  */
