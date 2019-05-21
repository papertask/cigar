<?php


Flatsome_Option::add_section( 'payment-icons', array(
	'title'       => __( 'Payments Icons', 'flatsome-admin' ),
	'description' => '注意：这不是您选择付款方式的地方。这只是图形图标，让你显示商店购物支持什么付款方式。您可以使用简码 [ux_payment_icons]',
	'panel'       => 'woocommerce',
) );

Flatsome_Option::add_field( 'option', array(
	'type'      => 'sortable',
	'settings'  => 'payment_icons',
	'label'     => __( 'Payment Icons', 'flatsome-admin' ),
	'section'   => 'payment-icons',
	'transport' => $transport,
	'multiple'  => 99,
	'default'   => array( 'visa', 'paypal', 'stripe', 'mastercard', 'cashondelivery' ),
	'choices'   => array(
		'amazon'          => __( 'Amazon', 'flatsome-admin' ),
		'americanexpress' => __( 'American Express', 'flatsome-admin' ),
		'applepay'        => __( 'Apple Pay', 'flatsome-admin' ),
		'afterpay'        => __( 'AfterPay', 'flatsome-admin' ),
		'afterpay-2'      => __( 'AfterPay 2', 'flatsome-admin' ),
		'atm'             => __( 'Atm', 'flatsome-admin' ),
		'bancontact'      => __( 'Bancontact', 'flatsome-admin' ),
		'bankomat'        => __( 'Bankomat', 'flatsome-admin' ),
		'banktransfer'    => __( 'Bank Transfer', 'flatsome-admin' ),
		'bitcoin'         => __( 'BitCoin', 'flatsome-admin' ),
		'braintree'       => __( 'Braintree', 'flatsome-admin' ),
		'cartasi'         => __( 'CartaSi', 'flatsome-admin' ),
		'cashcloud'       => __( 'CashCloud', 'flatsome-admin' ),
		'cashondelivery'  => __( 'Cash On Delivery', 'flatsome-admin' ),
		'cashonpickup'    => __( 'Cash on Pickup', 'flatsome-admin' ),
		'cirrus'          => __( 'Cirrus', 'flatsome-admin' ),
		'clickandbuy'     => __( 'Click and Buy', 'flatsome-admin' ),
		'creditcard'      => __( 'Credit Card', 'flatsome-admin' ),
		'creditcard2'     => __( 'Credit Card 2', 'flatsome-admin' ),
		'dancard'         => __( 'DanKort', 'flatsome-admin' ),
		'dinnersclub'     => __( 'Dinners Club', 'flatsome-admin' ),
		'discover'        => __( 'Discover', 'flatsome-admin' ),
		'elo'             => __( 'Elo', 'flatsome-admin' ),
		'eps'             => __( 'Eps', 'flatsome-admin' ),
		'facture'         => __( 'Facture', 'flatsome-admin' ),
		'fattura'         => __( 'Fattura', 'flatsome-admin' ),
		'flattr'          => __( 'Flattr', 'flatsome-admin' ),
		'giropay'         => __( 'GiroPay', 'flatsome-admin' ),
		'googlewallet'    => __( 'Google Wallet', 'flatsome-admin' ),
		'ideal'           => __( 'IDeal', 'flatsome-admin' ),
		'interac'         => __( 'Interac', 'flatsome-admin' ),
		'invoice'         => __( 'Invoice', 'flatsome-admin' ),
		'klarna'          => __( 'Klarna', 'flatsome-admin' ),
		'maestro'         => __( 'Maestro', 'flatsome-admin' ),
		'mastercard'      => __( 'MasterCard', 'flatsome-admin' ),
		'mastercard-2'    => __( 'MasterCard 2', 'flatsome-admin' ),
		'ogone'           => __( 'Ogone', 'flatsome-admin' ),
		'paybox'          => __( 'Paybox', 'flatsome-admin' ),
		'paylife'         => __( 'Paylife', 'flatsome-admin' ),
		'paymill'         => __( 'PayMill', 'flatsome-admin' ),
		'paypal'          => __( 'PayPal', 'flatsome-admin' ),
		'paypal-2'        => __( 'PayPal 2', 'flatsome-admin' ),
		'paysafe'         => __( 'PaySafe', 'flatsome-admin' ),
		'payshop'         => __( 'PayShop', 'flatsome-admin' ),
		'payu'            => __( 'PayU', 'flatsome-admin' ),
		'postepay'        => __( 'Postepay', 'flatsome-admin' ),
		'quick'           => __( 'Quick', 'flatsome-admin' ),
		'rechung'         => __( 'Rechung', 'flatsome-admin' ),
		'ripple'          => __( 'CashCloud', 'flatsome-admin' ),
		'cashcloud'       => __( 'Ripple', 'flatsome-admin' ),
		'sage'            => __( 'Sage', 'flatsome-admin' ),
		'sepa'            => __( 'Sepa', 'flatsome-admin' ),
		'six'             => __( 'Six', 'flatsome-admin' ),
		'skrill'          => __( 'Skrill', 'flatsome-admin' ),
		'sofort'          => __( 'Sofort', 'flatsome-admin' ),
		'square'          => __( 'Square', 'flatsome-admin' ),
		'stripe'          => __( 'Stripe', 'flatsome-admin' ),
		'swish'           => __( 'Swish (SE)', 'flatsome-admin' ),
		'truste'          => __( 'Truste', 'flatsome-admin' ),
		'unionpay'        => __( 'UnionPay', 'flatsome-admin' ),
		'verisign'        => __( 'VeriSign', 'flatsome-admin' ),
		'vipps'           => __( 'Vipps', 'flatsome-admin' ),
		'visa'            => __( 'Visa', 'flatsome-admin' ),
		'visa1'           => __( 'Visa 2', 'flatsome-admin' ),
		'visaelectron'    => __( 'Visa Electron', 'flatsome-admin' ),
		'westernunion'    => __( 'Western Union', 'flatsome-admin' ),
		'wirecard'        => __( 'Wirecard', 'flatsome-admin' ),
	),
) );

Flatsome_Option::add_field( 'option', array(
	'type'      => 'image',
	'settings'  => 'payment_icons_custom',
	'label'     => __( 'Custom Icons (Replace)', 'flatsome-admin' ),
	'section'   => 'payment-icons',
	'default'   => '',
	'transport' => $transport,
) );

Flatsome_Option::add_field( 'option', array(
	'type'        => 'multicheck',
	'settings'    => 'payment_icons_placement',
	'label'       => __( 'Placement', 'flatsome-admin' ),
	'description' => __( 'Select where you want to show the payment icons', 'flatsome-admin' ),
	'section'     => 'payment-icons',
	'default'     => '',
	'choices'     => array(
		'footer' => __( 'Absolute Footer', 'flatsome-admin' ),
		'cart'   => __( 'Cart Sidebar', 'flatsome-admin' ),
	),
) );
