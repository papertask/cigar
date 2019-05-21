<?php

return array(
    'type' => 'group',
    'heading' => __( '链接' ),
    'options' => array(
        'link' =>   array(
          'type' => 'textfield',
          'heading' => __('链接'),
        ),
        'target' => array(
          'type' => 'select',
          'heading' => __( '目标' ),
          'default' => '',
          'options' => array(
              '' => '同一窗口',
              '_blank' => '新窗口',
          )
        ),
        'rel' => array(
	        'type' => 'textfield',
	        'heading' => __( '关系' ),
        ),
    )
); 