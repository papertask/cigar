<?php
/**
 * Admin ask estimate email
 *
 * @author Your Inspiration Themes
 * @package YITH WooCommerce Wishlist
 * @version 2.0.5
 */
if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

echo $email_heading . "\n\n";

echo sprintf( __( 'You have received an estimate request from %s. The request is the following:', 'yith-woocommerce-wishlist' ), $wishlist_data['user_name'] ) . "\n\n";

echo "****************************************************\n\n";

do_action( 'woocommerce_email_before_wishlist_table', $wishlist_data );

echo sprintf( __( 'Wishlist: %s', 'yith-woocommerce-wishlist'), $wishlist_data['wishlist_token'] ) . "\n";
echo sprintf( __( 'Wishlist link: %s', 'yith-woocommerce-wishlist'), YITH_WCWL()->get_wishlist_url( 'view' . '/' . $wishlist_data['wishlist_token'] ) ) . "\n";

echo "\n";

if( ! empty( $wishlist_data['wishlist_items'] ) ):
    foreach( $wishlist_data['wishlist_items'] as $item ):
        $product = wc_get_product( $item['prod_id'] );
        echo $product->get_title() . ' | ';
        echo $item['quantity'];
        echo "\n";
    endforeach;
endif;

echo "\n****************************************************\n\n";

if( ! empty( $additional_notes ) ):
	echo "\n" . __( "Additional info:", 'yith-woocommerce-wishlist' ) . "\n";

	echo  $additional_notes . "\n";

	echo "\n****************************************************\n\n";
endif;

if( ! empty( $additional_data ) ):
	echo "\n" . __( "Additional data:", 'yith-woocommerce-wishlist' ) . "\n";

	foreach( $additional_data as $key => $value ):

		$key = strip_tags( ucwords( str_replace( array( '_', '-' ), ' ', $key ) ) );
		$value = strip_tags( $value );

		echo "{$key}: {$value}\n";

	endforeach;

	echo "\n****************************************************\n\n";
endif;

do_action( 'yith_wcwl_email_after_wishlist_table', $wishlist_data );

echo __( 'Customer details', 'yith-woocommerce-wishlist' ) . "\n";

echo __( 'Email:', 'yith-woocommerce-wishlist' ); echo $wishlist_data['user_email'] . "\n";

echo "\n****************************************************\n\n";

echo apply_filters( 'woocommerce_email_footer_text', get_option( 'woocommerce_email_footer_text' ) );