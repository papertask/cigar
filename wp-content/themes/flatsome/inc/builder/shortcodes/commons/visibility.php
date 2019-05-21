<?php

 return array(
    'type' => 'select',
    'heading' => '可见性',
    'default' => '',
    'options' => array(
        ''   => '始终可见',
        'hidden'  => '隐藏',
        'hide-for-medium'  => '仅桌面',
        'show-for-small'   =>  '仅手机',
        'show-for-medium hide-for-small' =>  '仅平板',
        'show-for-medium'   =>  '为桌面隐藏',
        'hide-for-small'   =>  '为手机隐藏',
    ),
);
