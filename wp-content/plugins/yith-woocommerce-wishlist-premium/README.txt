=== YITH WooCommerce Wishlist ===

Contributors: yithemes
Tags: wishlist, woocommerce, products, themes, yit, e-commerce, shop
Requires at least: 4.0
Tested up to: 5.0.0
Stable tag: 2.2.8
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Documentation: https://yithemes.com/docs-plugins/yith-woocommerce-wishlist

== Changelog ==

= 2.2.8 - Released: Feb, 11 - 2019 =

* New: added support to WooCommerce 3.5.4
* Update: internal plugin framework
* Update: Dutch translation
* Fix: added explicit array casting on shortcode to avoid warning
* Fix: don't add custom classes to body if wishlist page is not set
* Fix: changed a wrong method in the enqueue style
* Dev: add filter yith_wcwl_email_share_subject

= 2.2.7 - Released: Dec, 21 - 2018 =

* Fix: possible warning when Add to Wishlist shortcode is called with no params

= 2.2.6 - Released: Dec, 21 - 2018 =

* New: added support to WordPress 5.0
* New: added support to WooCommerce 3.5.3
* New: added Gutenberg blocks for plugin shortcodes
* Update: internal plugin framework
* Update: italian language
* Fix: preventing sql error when hidden products list just contains 0 id
* Fix: problem with sprintf on backend
* Dev: added product param to yith_free_text filter
* Dev: added yith_wcwl_login_register_redirect filter to let third party code filter redirect uri for unauthenticated users

= 2.2.5 - Released: Oct, 24 - 2018 =

* New: updated plugin framework

= 2.2.4 - Released: Oct, 04 - 2018 =

* New: added support to WooCoommerce 3.5
* New: added support to WordPress 4.9.8
* New: added method that returns localization variables
* New: updated plugin framework
* Tweak: type attribute from <script> tag
* Update: Spanish language
* Update: Italian language
* Dev: added new filter yith_wcwl_localize_script to let third party dev filter localization variables
* Dev: added new filter yith_wcwl_column_default
* Dev: added new filter yith_wcwl_wishlist_column
* Dev: added new filter yith_wcwl_share_conditions to display the share buttons for no logged users
* Dev: added new filter yith_wcwl_set_cookie to let third party code skip cookie saving
* Dev: added new filter yith_wcwl_wishlist_visibility_string_value to the wishlist visibility value
* Dev: added new filter yith_wcwl_manage_wishlist_title
* Dev: added new filter yith_wcwl_create_wishlist_title
* Dev: added new filter yith_wcwl_search_wishlist_title
* Dev: added new filter yith_wcwl_result_wishlist
* Dev: added new filter yith_wcwl_empty_search_result
* Dev: added new filter yith_wcwl_wishlist_param to change query-string param
* Dev: added new filter yith_wcwl_remove_product_wishlist_message_title

= 2.2.2 - Released: May, 28 - 2018 =

* New: WooCommerce 3.4 compatibility
* New: WordPress 4.9.6 compatibility
* New: updated plugin framework
* New: GDPR compliance
* New: register dateadded field for the lists
* Tweak: replaced create_function with a proper class method, to improve compatibility with PHP 7.2 and avoid warnings
* Fix: js error when switching from Premium version to Free
* Fix: preventing add_rewrite_rule when WPML is active, to avoid possible Internal Server Error (thanks to Adri & Bruno)
* Fix: icon replacement not working on variable Add to Cart
* Fix: preventing warning "Illegal string offset" when get_availability() returns empty string instead of array
* Update: Italian language
* Dev: added filter yith_wcwl_redirect_url
* Dev: added filter yith_wcwl_login_notice

= 2.2.1 - Released: Jan, 31 - 2018 =

* New: tested with WooCommerce 3.3.0
* Fix: issue with Add to Wishlist shortcode when global $product not defined

= 2.2.0 - Released: Jan, 11 - 2018 =

* New: WooCommerce 3.2.6 compatibility
* New: plugin-fw 3.0
* New: added js compatibility to Infinite Scrolling
* New: added "Last promotional email sent on" info, for admins
* New: added option to export users that added a specific product to their wishlists, using csv format
* New: added Swedish - SWEDEN translation (thanks to Suzanne)
* New: added Dutch - NETHERLANDS translation
* Tweak: improved wishlist-view template checks and params
* Tweak: wishlist now registers (and shows) "date added" param for unauthenticated users too
* Tweak: added check over product object, to avoid Fatal when printing Add to Wishlist shortcode
* Fix: fixed security vulnerability, causing possible SQL Injections (huge thanks to John C. and Sucuri Vulnerability Research team)
* Dev: added filter yith_wcwl_estimate_additional_data to let developers add custom data to print in Estimate Email template
* Dev: added yith_wcwl_removing_from_wishlist / yith_wcwl_removed_from_wishlist hooks
* Dev: added params to main triggers in wishlist js code

= 2.1.2 - Released: May, 11 - 2017 =

* Tweak: updated FontAwesome to 4.7.0
* Fix: possible warning when empty rewrite rules
* Fix: problem with custom CSS inclusion, when not located in child theme
* Fix: using current_product instead of global product when retrieving product type (prevents a Fatal error when placing Add to Wishlist outside the loop)

= 2.1.1 - Released: Apr, 24 - 2017 =

* Tweak: improved endpoints creation, with dynamic flush
* Tweak: added check over wc_print_notices existence, to avoid possible fatal errors
* Tweak: updated plugin-fw
* Fix: problem with duplicated meta
* Fix: product created wince WC 3.0.x not being shown on wishlist
* Dev: added yith_wcwl_admin_table_show_empty_list filter to show empty lists on admin

= 2.1.0 - Released: Apr, 03 - 2017 =

* New: WooCommerce 3.0-RC2 compatibility
* New: WordPress 4.7.3 compatibility
* New: Ask an Estimate for unauthenticated users
* New: added action_params param to yith_wcwl_wishlist shortcode, to let administrators show different wishlist views on different pages
* New: redirect to wishlist after login from "Login Notice" in wishlist page
* New: {product_url} and {wishlist_url} within promotion email replacements
* New: flush rewrite rules when installing plugin
* Tweak: added urlencode to mail content in mailto share link
* Tweak: count query of count_all_products
* Tweak: improved WPML list content handling (thanks to Adri)
* Tweak: double check over wc_add_to_cart_params exists and not null
* Tweak: added wishlist meta inside wishlist table data attr also for not logged in users (used for shared wishlist)
* Tweak: remove prettyPhoto-init library
* Tweak: implemented custom code to enable prettyPhoto on Wishlist elements
* Tweak: fixed typo in wishlist-view template
* Tweak: added urlencode to all sharing links
* Tweak: minimized endpoint usage when not required
* Tweak: removed unused check for WC_Product_Bundle
* Fix: "Move to another Wishlist" message, when moving to default wishlist
* Fix: get_template_directory for custom wishlist js
* Fix: global yith_wcwl_wishlist_token (false for default wishlists)
* Fix: check before "additional info" popup in wishlist_view template
* Fix: stock_status not existing when stock column isn't shown
* Dev: added filter yith_wcwl_create_new_wishlist_title on wishlist-manage.php
* Dev: added filter yith_wcwl_ask_an_estimate_text
* Dev: action as second param for yith_wcwl_wishlist_page_url filter
* Dev: applied filter yith_wcwl_no_product_to_remove_message also for message on wishlist-view template
* Dev: added filter yith_wcwl_add_wishlist_user_id
* Dev: added filter yith_wcwl_add_wishlist_slug
* Dev: added filter yith_wcwl_add_wishlist_name
* Dev: added filter yith_wcwl_add_wishlist_privacy
* Dev: added yith_wcwl_promotional_email_thumbnail_size filter
* Dev: added filters yith_wcwl_estimate_sent & yith_wcwl_estimate_missing_email

= 2.0.16 - Released: Jun, 14 - 2016 =

* Added: WooCommerce 2.6 support
* Tweak: changed uninstall procedure to work with multisite and delete plugin options
* Tweak: removed description and image from facebook share link (fb doesn't allow anymore)
* Fixed: product query (GROUP By and LIMIT statement conflicting)
* Fixed: to print "Sent Manually" on WC Emails

= 2.0.15 - Released: Apr, 04 - 2016 =

* Added: filter yith_wcwl_is_product_in_wishlist to choose whether a product is in wishlist or not
* Added: filter yith_wcwl_cookie_expiration to set default wishlist cookie expiration time in seconds
* Tweak: updated plugin-fw
* Fixed: get_products query returning product multiple times when product has more then one visibility meta

= 2.0.14 - Released: 21/03/2016

Added: yith_wcwl_is_wishlist_page function to identify if current page is wishlist page
Added: filter yith_wcwl_settings_panel_capability for panel capability
Added: filter yith_wcwl_current_wishlist_view_params for shortcode view params
Added: "defined YITH_WCWL" check before every template
Added: check over existance of $.prettyPhoto.close before using it
Added: method count_add_to_wishlist to YITH_WCWL class
Added: function yith_wcwl_count_add_to_wishlist
Tweak: Changed ajax url to "relative"
Tweak: Removed yit-common (old plugin-fw) deprecated since 2.0
Tweak: Removed deprecated WC functions
Tweak: Skipped removed_from_wishlist query arg adding, when external product
Tweak: Added transients for wishist counts
Tweak: Removed DOM structure dependencies from js for wishlist table handling
Tweak: All methods/functions that prints/counts products in wishlist now skip trashed or not visible products
Fixed: shortcode callback setting global product in some conditions
Fixed: typo in hook yith_wccl_table_after_product_name (now set to yith_wcwl_table_after_product_name)
Fixed: notice appearing when wishlist page slug is empty
Fixed: "Please login" notice appearing right after login
Fixed: email template for WC 2.5 and WCET compatibility

= 2.0.13 - Released: 17/12/2015 =

* Added check over adding_to_cart event data existance in js procedures
* Added compatibility with YITH WooCommerce Email Templates
* Added 'yith_wcwl_added_to_cart_message' filter, to customize added to cart message in wishlist page
* Added 'yith_wcwl_action_links' filter, to customize action link at the end of wishlist pages
* Added nofollow to "Add to Wishlist" links, where missing
* Added 'yith_wcwl_email_share_subject' filter to customize share by email subject
* Added 'yith_wcwl_email_share_body' filter to customize share by email body
* Added function "yith_wcwl_count_all_products"
* Fixed plugin-fw loading

= 2.0.12 - Released: 23/10/2015 =

* Added: method to count all products in wishlist
* Tweak: Added wishlist js handling on 'yith_wcwl_init' triggered on document
* Tweak: Performance improved with new plugin core 2.0
* Fixed: occasional fatal error for users with outdated version of plugin-fw on their theme

= 2.0.11 - Released: 21/09/2015 =

* Updated: changed text domain from yit to yith-woocommerce-wishlist
* Updated: changed all language file for the new text domain

= 2.0.10 - Released: 12/08/2015 =

* Added: Compatibility with WC 2.4.2
* Tweak: added nonce field to wishlist-view form
* Tweak: added yith_wcwl_custom_add_to_cart_text and yith_wcwl_ask_an_estimate_text filters
* Tweak: added check for presence of required function in wishlist script
* Fixed: admin colorpicker field (for WC 2.4.x compatibility)

= 2.0.9 - Released: 24/07/2015 =

* Added: WooCommerce class to wishlist view form
* Added: spinner to plugin assets
* Added: check on "user_logged_in" for sub-templates in wishlist-view
* Added: WordPress 4.2.3 compatibility
* Added: WPML 3.2.2 compatibility (removed deprecated function)
* Added: new check on is_product_in_wishlist (for unlogged users/default wishlist)
* Tweak: escaped urls on share template
* Tweak: removed new line between html attributes, to improve themes compatibility
* Updated: italian translation
* Fixed: WPML 3.2.2 compatibility (fix suggested by Konrad)
* Fixed: regex used to find class attr in "Add to Cart" button
* Fixed: usage of product_id for add_to_wishlist shortcode, when global $product is not defined
* Fixed: icon attribute for yith_wcwl_add_to_wishlist shortcode

= 2.0.8 - Released: 29/05/2015 =

* Added: support WP 4.2.2
* Added: redirect to wishlist after login
* Added: check on cookie content
* Added: Frequently Bought Together integration
* Added: text domain to page links
* Tweak: moved cookie update before first cookie usage
* Updated: Italian translation
* Removed: control to unable admin to delete default wishlists
* Removed: login_redirect_url variable

= 2.0.7 - Released: 30/04/2015 =

* Added: WP 4.2.1 support
* Added: WC 2.3.8 support
* Added: "Added to cart" message in wishlist page
* Added: promotional email functionality
* Added: email tab under wishlist panel
* Added: "Move to another wishlist" select
* Added: option to show "Already in wishlist" when multi-wishlist enabled
* Updated: revision of all templates
* Fixed: vulnerability for unserialize of cookie content (Warning: in this way all the old serialized plugins will be deleted and all the wishlists of the non-logged users will be lost)
* Fixed: Escaped add_query_arg() and remove_query_arg()
* Fixed: wishlist count on admin table
* Removed: use of pretty permalinks if WPML enabled

= 2.0.6 - Released: 2015/04/07 =

* Added: system to overwrite wishlist js
* Added: trailingslashit() to wishlist permalink
* Added: "show_empty" filter to get_wishlists() method
* Added: "user that added this product" view
* Added: admin capability to delete default wishlist
* Tweak: removed email from wishlist search
* Tweak: removed empty wishlist from admin table
* Tweak: removed "Save" button from manage template, when not needed
* Fixed: "user/user_id" endpoint
* Fixed: count wishlist items
* Fixed: problem with price inclusive of tax
* Fixed: remove from wishlist for not logged user
* Fixed: twitter share summary

= 2.0.5 - Released: 2015/03/18 =

* Added: option to show create/manage/search links after wishlist table
* Added: option to let only logged user to use wishlist
* Added: option to show a notice to invite users to log in, before wishlist table
* Added: option to add additional notes textarea when sendin e quote request
* Added: popular section on backend
* Added: checkbox to add multiple items to cart from wishlist
* Added: icl_object_id to wishlist page id, to translate pages
* Tweak: updated rewrite rules, to include child pages as wishlist pages
* Tweak: moved WC notices from wishlist template to yith_wcwl_before_wishlist_title hook
* Tweak: added wishlist table id to .load(), to update only that part of template
* Fixed: yith_wcwl_locate_template causing 500 Internal Server Error

= 2.0.4 - Released: 2015/03/04 =

* Added: Options for browse wishlist/already in wishlist/product added strings
* Added: rel nofollow to add to wishlist button
* Tweak: moved wishlist response popup handling to separate js file
* Updated: WPML xml configuration
* Updated: string revision

= 2.0.3 - Released: 2015/02/19 =

* Tweak: set correct protocol for admin-ajax requests
* Tweak: used wc core function to set cookie
* Tweak: let customization of add_to_wishlist shortcodes
* Fixed: show add to cart column when stock status disabled
* Fixed: product existing in wishlist

= 2.0.2 - Released: 2015/02/16 =

* Updated: font-awesome library
* Fixed: option with old font-awesome classes

= 2.0.1 - Released: 2015/02/13 =

* Added: spinner image on loading
* Added: flush rewrite rules on database upgrade
* Fixed: wc_add_to_cart_params not defined issue


= 2.0.0 - Released: 2015/02/12 =

* Initial release