! function (t) {
    function e(n) {
        if (o[n]) return o[n].exports;
        var a = o[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
    }
    var o = {};
    return e.m = t, e.c = o, e.p = "", e(0)
}([function (t, e, o) {
    t.exports = o(4)
}, , , , function (t, e, o) {
    "use strict";
    o(5), o(6), o(7), o(8), o(9), o(10), o(11), o(12)
}, function (t, e) {
    (function (t) {
        "use strict";
        t.appendStyle = function (t, e) {
            jQuery("style#customizer-preview-" + t).length ? jQuery("style#customizer-preview-" + t).text(e) : jQuery("head").append('<style id="customizer-preview-' + t + '">' + e + "</style>")
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";
    ! function (t) {
        t(document).ready(function () {
            function e(e) {
                o.forEach(function (o) {
                    o.pos || (o.pos = "bottom"), o.type || (o.type = "control"), t(o.target).hasClass("tooltipstered") || jQuery(o.target, e).tooltipster({
                        content: '<button class="customizer-focus" data-focus="' + o.focus + '">' + o.text + "</button>",
                        interactive: !0,
                        arrow: !1,
                        offsetY: -22,
                        theme: "tooltip-customizer",
                        position: o.pos,
                        hideOnClick: !0,
                        functionReady: function () {
                            t(this).addClass("customizer-active"), t(".customizer-focus").click(function () {
                                "control" == o.type && "undefined" !== t(this).data("focus") && window.parent.wp.customize.control(t(this).data("focus")).focus(), "section" == o.type && "undefined" !== t(this).data("focus") && window.parent.wp.customize.section(t(this).data("focus")).focus(), "panel" == o.type && "undefined" !== t(this).data("focus") && window.parent.wp.customize.panel(t(this).data("focus")).focus()
                            })
                        },
                        functionAfter: function () {
                            t(this).removeClass("customizer-active")
                        },
                        speed: 10,
                        delay: 10,
                        contentAsHTML: !0
                    })
                })
            }
            t("style#custom-css").clone().attr("id", "custom-css-temp").appendTo("head"), wp.customize.selectiveRefresh && wp.customize.selectiveRefresh.bind("partial-content-rendered", function (o) {
                Flatsome.attach(o.container), e(o.container), t(".partial-refreshing").remove(), t("style#custom-css-temp").remove(), t("style#custom-css").clone().attr("id", "custom-css-temp").appendTo("head")
            });
            var o = [{
                target: ".product-footer",
				text: "产品选项卡",
                focus: "product_display",
                pos: "top"
            }, {
                target: ".product-gallery",
				text: "产品相册",
                focus: "product_zoom",
                pos: "top"
            }, {
                target: "#wrapper",
				text: "布局",
                focus: "body_layout",
                pos: "left"
            }, {
                target: ".header-top",
				text: "顶栏",
                focus: "top_bar",
                type: "section"
            }, {
                target: ".header-main",
				text: "主页眉",
                focus: "main_bar",
                type: "section"
            }, {
                target: ".header-bottom",
				text: "页眉底部",
                focus: "bottom_bar",
                type: "section"
            }, {
                target: ".product-info",
				text: "产品概述",
                focus: "product_info_meta",
                pos: "top"
            }, {
                target: ".widget-upsell",
				text: "产品上架",
                focus: "product_upsell"
            }, {
                target: ".social-icons.share-icons",
				text: "分享图标",
                focus: "social_icons"
            }, {
                target: "#logo",
                text: "Logo",
                focus: "blogname"
            }, {
                target: "#header.transparent",
				text: "透明页眉",
                focus: "header_height_transparent",
                pos: "bottom-left"
            }, {
                target: ".header-wrapper .nav-dropdown",
				text: "下拉样式",
                focus: "dropdown_border",
                pos: "top-left"
            }, {
                target: ".product-container",
				text: "产品布局",
                focus: "product_layout",
                pos: "top"
            }, {
                target: "#product-sidebar",
				text: "产品侧边栏小工具",
                focus: "sidebar-widgets-product-sidebar",
                type: "section",
                pos: "top"
            }, {
                target: "#shop-sidebar",
				text: "分类侧边栏小工具",
                focus: "sidebar-widgets-shop-sidebar",
                type: "section",
                pos: "top"
            }, {
                target: ".category-page-row",
				text: "分类布局",
                focus: "woocommerce_product_catalog",
                type: "section",
                pos: "top"
            }, {
                target: ".woocommerce-breadcrumbs",
				text: "商店面包屑导航",
                focus: "woocommerce_product_catalog",
                type: "section"
            }, {
                target: ".shop-page-title .breadcrumbs",
				text: "商店面包屑导航",
                focus: "breadcrumb_size"
            }, {
                target: ".related-products-wrapper",
				text: "相关产品",
                focus: "max_related_products",
                pos: "top"
            }, {
                target: ".woocommerce-cart .cart-container",
				text: "购物车布局",
                focus: "cart-checkout",
                type: "section",
                pos: "top"
            }, {
                target: "form.woocommerce-checkout",
				text: "结账布局",
                focus: "woocommerce_checkout",
                type: "section",
                pos: "top"
            }, {
                target: ".absolute-footer",
				text: "绝对页脚",
                focus: "footer_left_text"
            }, {
                target: ".footer-1",
				text: "页脚1选项",
                focus: "footer",
                type: "section",
                pos: "top"
            }, {
                target: ".footer-2",
				text: "页脚2选项",
                focus: "footer",
                type: "section",
                pos: "top"
            }, {
                target: ".footer-1 .col",
				text: "页脚1小工具",
                focus: "sidebar-widgets-sidebar-footer-1",
                type: "section",
                pos: "top"
            }, {
                target: ".footer-2 .col",
				text: "页脚2小工具",
                focus: "sidebar-widgets-sidebar-footer-2",
                type: "section",
                pos: "top"
            }, {
                target: ".portfolio-page-wrapper",
				text: "作品布局",
                focus: "fl-portfolio",
                type: "section",
                pos: "top"
            }, {
                target: ".featured-posts",
				text: "推荐博客文章",
                focus: "blog_featured",
                pos: "top"
            }, {
                target: ".blog-wrapper.blog-archive",
				text: "博客布局",
                focus: "blog_layout",
                pos: "top"
            }, {
                target: ".blog-wrapper.blog-single",
				text: "博客单个文章布局",
                focus: "blog_post_layout",
                pos: "top"
            }, {
                target: ".payment-icons",
				text: "支付图标",
                focus: "payment-icons",
                type: "section",
                pos: "top"
            }, {
                target: "li.cart-item",
				text: "页眉购物车",
                focus: "header_cart",
                type: "section",
                pos: "top"
            }, {
                target: "li.account-item",
				text: "页眉帐户",
                focus: "header_account",
                type: "section",
                pos: "top"
            }, {
                target: "li.header-newsletter-item",
				text: "页眉通讯",
                focus: "header_newsletter",
                type: "section",
                pos: "top"
            }, {
                target: "li.header-button-2",
				text: "按钮2",
                focus: "header_buttons",
                type: "section",
                pos: "top"
            }, {
                target: "li.header-button-1",
				text: "按钮1",
                focus: "header_buttons",
                type: "section",
                pos: "top"
            }, {
                target: "li.header-social-icons",
				text: "页眉社交",
                focus: "follow",
                type: "section",
                pos: "top"
            }, {
                target: "li.header-search",
				text: "页眉搜索",
                focus: "header_search",
                type: "section",
                pos: "top"
            }, {
                target: "li.html.custom",
				text: "自定义内容",
                focus: "header_content",
                type: "section",
                pos: "top"
            }, {
                target: "#secondary",
				text: "侧边栏小工具",
                focus: "sidebar-widgets-sidebar-main",
                type: "section",
                pos: "top"
            }];
            e(jQuery("body"))
        })
    }(jQuery)
}, function (t, e) {
    "use strict";
    ! function (t) {
        wp.customize("header_width", function (e) {
            e.bind(function (e) {
                t("#header").removeClass("header-full-width"), "full-width" == e && t("#header").addClass("header-full-width")
            })
        }), wp.customize("logo_position", function (e) {
            e.bind(function (e) {
                t(".header-inner").removeClass("logo-center logo-left"), "center" == e ? (t(".header-builder .hb-desktop .hb-main", parent.document).addClass("hb-logo-center"), t(".header-inner").addClass("logo-center")) : (t(".header-builder .hb-desktop .hb-main", parent.document).removeClass("hb-logo-center"), t(".header-inner").addClass("logo-left"))
            })
        }), wp.customize("logo_position_mobile", function (e) {
            e.bind(function (e) {
                t(".header-inner").removeClass("medium-logo-center"), "center" == e ? (t(".header-builder .hb-mobile .hb-main", parent.document).addClass("hb-logo-center"), t(".header-inner").addClass("medium-logo-center")) : t(".header-builder .hb-mobile .hb-main", parent.document).removeClass("hb-logo-center")
            })
        }), wp.customize("logo_width", function (e) {
            e.bind(function (e) {
                var e = parseInt(e);
                t("#logo").removeClass("changed"), setTimeout(function () {
                    t("#logo").addClass("changed")
                }, 50), appendStyle("logo_width", "#logo{width: " + e + "px}")
            })
        }), wp.customize("logo_max_width", function (t) {
            t.bind(function (t) {
                var t = parseInt(t);
                appendStyle("logo_max_width", "#logo a{max-width: " + t + "px}")
            })
        }), wp.customize("logo_padding", function (t) {
            t.bind(function (t) {
                var t = parseInt(t);
                appendStyle("logo_padding", "#logo img {padding: " + t + "px 0}")
            })
        }), wp.customize("sticky_logo_padding", function (t) {
            t.bind(function (t) {
                var t = parseInt(t);
                appendStyle("sticky_logo_padding", ".stuck #logo img {padding: " + t + "px 0}")
            })
        }), wp.customize("header_bg", function (t) {
            t.bind(function (t) {
                appendStyle("header_bg", ".header-bg-color {background-color:" + t + ";}")
            })
        }), wp.customize("nav_position_bg", function (t) {
            t.bind(function (t) {
                appendStyle("nav_position_bg", ".header-bottom {background-color:" + t + ";}")
            })
        }), wp.customize("nav_height", function (t) {
            t.bind(function (t) {
                16 !== t && appendStyle("nav_height", ".header-main .nav > li > a{line-height:" + t + "px;}")
            })
        }), wp.customize("type_nav_color", function (t) {
            t.bind(function (t) {
                appendStyle("type_nav_color", ".header:not(.transparent) .header-nav.nav > li > a{color: " + t + ";}")
            })
        }), wp.customize("nav_push", function (t) {
            t.bind(function (t) {
                var t = parseInt(t);
                appendStyle("nav_push", ".header-wrapper:not(.stuck) .header-main .header-nav{margin-top:" + t + "px;}")
            })
        }), wp.customize("nav_height_sticky", function (t) {
            t.bind(function (t) {
                appendStyle("nav_height_sticky", ".stuck .header-main .nav > li > a{line-height:" + t + "px;}")
            })
        }), wp.customize("nav_height_bottom", function (t) {
            t.bind(function (t) {
                appendStyle("nav_height_bottom", ".header-bottom-nav > li > a{line-height:" + t + "px;}")
            })
        }), wp.customize("header_bg_transparent", function (t) {
            t.bind(function (t) {
                appendStyle("header_bg_transparent", "#header.transparent .header-wrapper {background-color:" + t + ";}")
            })
        }), wp.customize("header_bg_img", function (t) {
            t.bind(function (t) {
                t = 'url("' + t + '")', appendStyle("header_wrapper_bg", ".header-bg-image {background-image: " + t + "}")
            })
        }), wp.customize("header_bg_img_repeat", function (t) {
            t.bind(function (t) {
                appendStyle("header-wrapper-repeat", ".header-bg-image {background-repeat: " + t + "}")
            })
        }), wp.customize("header_height", function (t) {
            t.bind(function (t) {
                var t = parseInt(t);
                appendStyle("logo-height", "#header #logo img{max-height: " + t + "px!important}"), appendStyle("header-height", "#header .header-main{height: " + t + "px!important}")
            })
        }), wp.customize("header_height_transparent", function (t) {
            t.bind(function (t) {
                var t = parseInt(t);
                appendStyle("transparent-height", "#header.transparent #masthead{height: " + t + "px!important}"), appendStyle("transparent-height-logo", "#header.transparent #logo img{max-height: " + t + "px!important}")
            })
        }), wp.customize("header_height_stuck", function (t) {
            t.bind(function (t) {
                appendStyle("header_height_stuck", ".header.show-on-scroll, .stuck .header-main{height: " + parseInt(t) + "px}")
            })
        }), wp.customize("header_bottom_height", function (t) {
            t.bind(function (t) {
                var t = parseInt(t);
                appendStyle("header-bottom-height", ".header-bottom{min-height: " + t + "px}")
            })
        }), wp.customize("header_top_height", function (t) {
            t.bind(function (t) {
                var t = parseInt(t);
                appendStyle("header_top_height", ".header-top {min-height: " + t + "px}")
            })
        }), wp.customize("header_height_mobile", function (t) {
            t.bind(function (t) {
                jQuery("button.preview-mobile", parent.document).click(), appendStyle("header_height_mobile", "@media (max-width: 550px) { .header-main{height: " + t + "px} #logo img{max-height: " + t + "px}")
            })
        }), wp.customize("mobile_overlay", function (e) {
            e.bind(function (e) {
                t("html.has-off-canvas").removeClass("has-off-canvas-right has-off-canvas-center has-off-canvas-left"), t(".mfp-bg, .mfp-wrap").removeClass("off-canvas-right off-canvas-center off-canvas-left"), t(".mfp-content").removeClass("text-center"), e && (t("html.has-off-canvas").addClass("has-off-canvas-" + e), t(".mfp-bg, .mfp-wrap").addClass("off-canvas-" + e), "center" == e && t(".mfp-content").addClass("text-center"))
            })
        }), wp.customize("mobile_overlay_bg", function (t) {
            t.bind(function (t) {
                appendStyle("mobile_overlay_bg", ".main-menu-overlay{background-color: " + t + "!important}")
            })
        }), wp.customize("mobile_overlay_color", function (e) {
            e.bind(function (e) {
                t(".off-canvas").removeClass("dark"), "dark" == e && t(".off-canvas").addClass("dark")
            })
        }), wp.customize("header_color", function (e) {
            e.bind(function (e) {
                t(".header-main").removeClass("nav-dark"), "dark" == e && t(".header-main").addClass("nav-dark")
            })
        }), wp.customize("nav_position_color", function (e) {
            e.bind(function (e) {
                t(".header-bottom").removeClass("nav-dark"), "dark" == e && t(".header-bottom").addClass("nav-dark")
            })
        }), wp.customize("topbar_color", function (e) {
            e.bind(function (e) {
                t("#top-bar").removeClass("nav-dark"), "dark" == e && t("#top-bar").addClass("nav-dark")
            })
        }), wp.customize("box_shadow_header", function (e) {
            e.bind(function (e) {
                t("body").removeClass("header-shadow"), e && t("body").addClass("header-shadow")
            })
        }), wp.customize("search_placeholder", function (e) {
            e.bind(function (e) {
                e && t("input.search-field").attr("placeholder", e)
            })
        }), wp.customize("header_search_width", function (t) {
            t.bind(function (t) {
                appendStyle("header_search_width", ".search-form{width: " + t + "%}")
            })
        }), wp.customize("header_search_form_style", function (e) {
            e.bind(function (e) {
                t("header .searchform-wrapper").removeClass("form-flat"), t("header .searchform-wrapper").addClass("form-" + e)
            })
        }), wp.customize("dropdown_text", function (e) {
            e.bind(function (e) {
                t(".has-dropdown.menu-item:first").addClass("current-dropdown"), t(".nav-dropdown").removeClass("dark"), "dark" == e && t(".nav-dropdown").addClass(e)
            })
        }), wp.customize("dropdown_text_style", function (e) {
            e.bind(function (e) {
                t(".has-dropdown.menu-item:first").addClass("current-dropdown"), t(".nav-dropdown").removeClass("dropdown-uppercase"), "uppercase" == e && t(".nav-dropdown").addClass("dropdown-" + e)
            })
        }), wp.customize("dropdown_arrow", function (e) {
            e.bind(function (e) {
                t(".has-dropdown.menu-item:first").addClass("current-dropdown"), t("body").removeClass("nav-dropdown-has-arrow"), e && t("body").addClass("nav-dropdown-has-arrow")
            })
        }), wp.customize("dropdown_nav_size", function (e) {
            e.bind(function (e) {
                t(".has-dropdown.menu-item:first").addClass("current-dropdown"), 100 !== e && appendStyle("dropdown_nav_size", ".nav-dropdown{font-size: " + e + "%}")
            })
        }), wp.customize("nav_uppercase", function (e) {
            e.bind(function (e) {
                t(".header-main .header-nav").removeClass("nav-uppercase"), e && t(".header-main .header-nav").addClass("nav-uppercase")
            })
        }), wp.customize("nav_uppercase_bottom", function (e) {
            e.bind(function (e) {
                t(".header-bottom .header-nav").removeClass("nav-uppercase"), e && t(".header-bottom .header-nav").addClass("nav-uppercase")
            })
        }), wp.customize("topbar_elements_left", function (e) {
            e.bind(function (e) {
                e && !t("#top-bar").length && t("#masthead").before('<div id="top-bar"></div>')
            })
        }), wp.customize("topbar_elements_center", function (e) {
            e.bind(function (e) {
                e && !t("#top-bar").length && t("#masthead").before('<div id="top-bar"></div>')
            })
        }), wp.customize("topbar_elements_right", function (e) {
            e.bind(function (e) {
                e && !t("#top-bar").length && t("#masthead").before('<div id="top-bar"></div>')
            })
        }), wp.customize("header_elements_bottom_left", function (e) {
            e.bind(function (e) {
                e && !t("#wide-nav").length && t("#masthead").after('<div id="wide-nav"></div>')
            })
        }), wp.customize("header_elements_bottom_right", function (e) {
            e.bind(function (e) {
                e && !t("#wide-nav").length && t("#masthead").after('<div id="wide-nav"></div>')
            })
        }), wp.customize("header_elements_bottom_center", function (e) {
            e.bind(function (e) {
                e && !t("#wide-nav").length && t("#masthead").after('<div id="wide-nav"></div>')
            })
        }), wp.customize("dropdown_style", function (e) {
            e.bind(function (e) {
                t(".has-dropdown.menu-item:first").addClass("current-dropdown"), t(".nav-dropdown").removeClass("nav-dropdown-bold nav-dropdown-simple nav-dropdown-default"), e && t(".nav-dropdown").addClass("nav-dropdown-" + e)
            })
        }), wp.customize("dropdown_border", function (e) {
            e.bind(function (e) {
                t(".has-dropdown.menu-item:first").addClass("current-dropdown"), appendStyle("dropdown_border", ".nav-dropdown-has-arrow li.has-dropdown:before{border-bottom-color:" + e + ";} .nav .nav-dropdown{border-color: " + e + " }")
            })
        }), wp.customize("dropdown_radius", function (e) {
            e.bind(function (e) {
                t(".has-dropdown.menu-item:first").addClass("current-dropdown"), appendStyle("dropdown_radius", ".nav-dropdown{border-radius:" + e + ";}")
            })
        }), wp.customize("dropdown_bg", function (e) {
            e.bind(function (e) {
                t(".has-dropdown.menu-item:first").addClass("current-dropdown"), appendStyle("dropdown_bg", ".nav-dropdown-has-arrow li.has-dropdown:after{border-bottom-color:" + e + ";} .nav .nav-dropdown{background-color: " + e + " }")
            })
        }), wp.customize("top_right_text", function (e) {
            e.bind(function (e) {
                t(".html_top_right_text").html(e)
            })
        }), wp.customize("nav_position_text_top", function (e) {
            e.bind(function (e) {
                t(".html_nav_position_text_top").html(e)
            })
        }), wp.customize("topbar_left", function (e) {
            e.bind(function (e) {
                t(".html_topbar_left").html(e)
            })
        }), wp.customize("topbar_right", function (e) {
            e.bind(function (e) {
                t(".html_topbar_right").html(e)
            })
        }), wp.customize("nav_position_text", function (e) {
            e.bind(function (e) {
                t(".html_nav_position_text").html(e)
            })
        }), wp.customize("header_newsletter_height", function (e) {
            e.bind(function (e) {
                t("#header-newsletter-signup .banner").css("padding-top", e)
            })
        })
    }(jQuery)
}, function (t, e) {
    "use strict";
    ! function (t) {
        wp.customize("type_size", function (t) {
            t.bind(function (t) {
                appendStyle("type_size", "body {font-size: " + t + "%;}")
            })
        }), wp.customize("type_size_mobile", function (t) {
            t.bind(function (t) {
                appendStyle("type_size_mobile", "@media screen and (max-width: 550px){body{font-size: " + t + "%;}}")
            })
        }), wp.customize("body_layout", function (e) {
            e.bind(function (e) {
                t("body").removeClass("boxed framed full-width"), t("body").addClass(e)
            })
        }), wp.customize("site_width", function (t) {
            t.bind(function (t) {
                t = parseInt(t), t < 300 || (appendStyle("site_width", ".container, .row {max-width: " + parseInt(t - 30) + "px } .row.row-collapse{max-width:" + parseInt(t - 60) + "px} .row.row-small{max-width: " + parseInt(t - 37.5) + "px} .row.row-large{max-width: " + parseInt(t) + "px}"), setTimeout(function () {
                    jQuery(".slider").flickity("resize"), jQuery(".row-grid").packery("layout")
                }, 300))
            })
        }), wp.customize("site_width_boxed", function (t) {
            t.bind(function (t) {
                t = parseInt(t), t < 300 || (appendStyle("site_width_boxed", "body.framed, body.framed header, body.framed .header-wrapper, body.boxed, body.boxed header, body.boxed .header-wrapper, body.boxed .is-sticky-section{ max-width:" + t + "px}"), setTimeout(function () {
                    jQuery(".slider").flickity("resize"), jQuery(".row-grid").packery("layout")
                }, 300))
            })
        }), wp.customize("body_bg", function (t) {
            t.bind(function (t) {
                appendStyle("body_bg", "html{background-color: " + t + "!important}")
            })
        }), wp.customize("box_shadow", function (e) {
            e.bind(function (e) {
                t("body").removeClass("box-shadow"), e && t("body").addClass("box-shadow")
            })
        }), wp.customize("body_bg_image", function (t) {
            t.bind(function (t) {
                appendStyle("body_bg_image", 'html {background-image: url("' + t + '") }')
            })
        }), wp.customize("body_bg_type", function (e) {
            e.bind(function (e) {
                t("html").removeClass("bg-fill"), "bg-full-size" == e && t("html").addClass("bg-fill")
            })
        }), wp.customize("content_color", function (e) {
            e.bind(function (e) {
                t("#main").removeClass("dark"), "dark" == e && t("#main").addClass("dark")
            })
        }), wp.customize("content_bg", function (t) {
            t.bind(function (t) {
                appendStyle("content_bg", "#wrapper,#main{background-color: " + t + "!important}")
            })
        })
    }(jQuery)
}, function (t, e) {
    "use strict";
    ! function (t) {
        wp.customize("pages_title_bg_image", function (e) {
            e.bind(function (e) {
                t(".page-title-bg .bg-title").css("background-image", "url(" + e + ")")
            })
        }), wp.customize("pages_title_bg_color", function (e) {
            e.bind(function (e) {
                t(".title-overlay").css("background-color", e)
            })
        })
    }(jQuery)
}, function (t, e) {
    "use strict";
    ! function (t) {
        wp.customize("footer_1_bg_color", function (t) {
            t.bind(function (t) {
                appendStyle("footer_1_bg_color", ".footer-1{background-color: " + t + "}")
            })
        }), wp.customize("footer_2_bg_color", function (t) {
            t.bind(function (t) {
                appendStyle("footer_2_bg_color", ".footer-2{background-color: " + t + "}")
            })
        }), wp.customize("footer_bottom_color", function (t) {
            t.bind(function (t) {
                appendStyle("footer_bottom_color", ".absolute-footer, html{background-color: " + t + "}")
            })
        }), wp.customize("back_to_top_shape", function (e) {
            e.bind(function (e) {
                var o = t(".back-to-top");
                o.removeClass("circle round"), "circle" === e && o.addClass("circle"), "square" === e && o.addClass("round")
            })
        }), wp.customize("back_to_top_position", function (e) {
            e.bind(function (e) {
                var o = t(".back-to-top");
                o.removeClass("left"), "left" === e && o.addClass("left")
            })
        }), wp.customize("back_to_top_mobile", function (e) {
            e.bind(function (e) {
                var o = t(".back-to-top");
                o.removeClass("hide-for-medium"), e || o.addClass("hide-for-medium")
            })
        })
    }(jQuery)
}, function (t, e) {
    "use strict";
    ! function (t) {
        wp.customize("product_image_width", function (e) {
            e.bind(function (e) {
                t(".product-gallery.col").removeClass("large-5 large-6 large-4 large-8 large-9 large-7 large-3 large-2"), t(".product-gallery.col").addClass("large-" + e), t(".js-flickity").flickity("resize");
                var o = t(".product-gallery").find(".slide").outerWidth();
				t("#customize-control-product_image_width .selectize-control", parent.document).attr("data-helper-label", "推荐产品图片大小：" + o + "px. 你可以在WooCommerce图片设置更改它.")
            })
        }), wp.customize("category_image_height", function (t) {
            t.bind(function (t) {
                appendStyle("category_image_height", ".products.has-equal-box-heights .box-image { padding-top:" + t + "% }")
            })
        })
    }(jQuery)
}, function (t, e) {
    "use strict";
    ! function (t) {
        wp.customize("html_custom_css", function (t) {
            t.bind(function (t) {
                appendStyle("html_custom_css", t)
            })
        }), wp.customize("html_custom_css_mobile", function (t) {
            t.bind(function (t) {
                appendStyle("html_custom_css_mobile", "@media (max-width: 550px){" + t + "}")
            })
        }), wp.customize("html_custom_css_tablet", function (t) {
            t.bind(function (t) {
                appendStyle("html_custom_css_tablet", "@media (max-width: 850px){" + t + "}")
            })
        })
    }(jQuery)
}]);