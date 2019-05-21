<?php

return array(
	'type'      => 'group',
	'heading'   => __( '视频', 'ux-builder' ),
	'collapsed' => true,
	'options'   => array(
		'youtube'          => array(
			'type'        => 'textfield',
			'heading'     => 'YouTube',
                'description' => '在此添加youtube ID。例如：9d8wWcJLnFI',
		),
		'video_mp4'        => array(
			'type'        => 'textfield',
                'heading' => '视频MP4',
                'description' => '很好的工具来转换视频： https://cloudconvert.org/',
		),
		'video_ogg'        => array(
			'type'    => 'textfield',
                'heading' => '视频OGG ',

		),
		'video_webm'       => array(
			'type'    => 'textfield',
                'heading' => '视频WEBM',
		),
		'video_sound'      => array(
			'type'    => 'select',
                'heading' => '声音',
			'default' => 'false',
			'options' => array(
                    'true' => '启用',
                    'false' => '禁用',
			),
		),
		'video_loop'       => array(
			'type'    => 'select',
                'heading' => '循环',
			'default' => 'true',
			'options' => array(
                    'true' => '循环',
                    'false' => '不循环',
			),
		),
		'video_visibility' => array(
			'type'    => 'select',
			'heading' => '可见性',
			'default' => 'hide-for-medium',
			'options' => array(
				'visible'                        => '可见',
				'hidden'                         => '隐藏',
				'hide-for-medium'                => '仅用于桌面',
				'show-for-small'                 => '仅用于手机',
				'show-for-medium hide-for-small' => '仅用于平板',
				'show-for-medium'                => '在桌面隐藏',
				'hide-for-small'                 => '在手机隐藏',
			),
		),
	),
);
