<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cigar_accesspath' );

/** MySQL database username */
define( 'DB_USER', 'cigar_accesspath' );

/** MySQL database password */
define( 'DB_PASSWORD', 'C8syrMyPzAAbkJBa' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'lyChC4}E0+^ Ktj(~7}%)8r9im@igDj{04i104jUp|2-F1iDHz{ b!GlWkJ06$(B' );
define( 'SECURE_AUTH_KEY',  'FR+Wx:RlXYgB6+`$:5G8a2e19xbN4/=mgW3,l>9<]*0[6Y|Z83>=+pF?yW#+Ohd7' );
define( 'LOGGED_IN_KEY',    'CbO^?DYB_u-uOE05@/ [kU]3|^*?29Uzl}5#&R!)dB4-mG!vAe){`&+7j?D]D}^8' );
define( 'NONCE_KEY',        'IEO+l,c}w*Jz6TSS5A,:P4KrMBEnW<XQm8>9Hi{EgAKOU&3mpvU&eVDXKs(6^m0x' );
define( 'AUTH_SALT',        '?XJi3toTO>a^FOC]T9:>QY[iec>Db=Hyk#%-$d+P&^dXY,Kam_O5278u0+t^<=0E' );
define( 'SECURE_AUTH_SALT', 'n285I1#7sO^E1~jQ<0I)Hm30m(v<sTd~p54Kk{+jed3Rx.vnI0Et4*_G99erv,$l' );
define( 'LOGGED_IN_SALT',   'lE$Pvr+>cMO,kA+VM0q}zt~^@Efodys=^2/<T|0s6<ZoSz:$I@*>1x=3LQ^UuaP-' );
define( 'NONCE_SALT',       'e8?PUu&71R6$+ZbiRmx$C{]hiq17HZEtt>}Ud?Uj_}M+aS!qh!gC7b@4>HA-Q|&5' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
