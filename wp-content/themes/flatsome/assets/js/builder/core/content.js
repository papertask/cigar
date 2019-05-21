! function (t) {
    function e(g) {
        if (n[g]) return n[g].exports;
        var o = n[g] = {
            exports: {},
            id: g,
            loaded: !1
        };
        return t[g].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var n = {};
    return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
    t.exports = n(1)
}, function (t, e, n) {
    (function (t) {
        "use strict";

        function e(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        n(2), n(3), n(6), n(33), n(37), n(43), n(51), n(94), n(96), n(127), n(128), n(131), n(134), n(135), n(137), n(138), n(139), n(141), n(142), n(143);
        var g = n(7),
            o = e(g),
            A = n(145);
        t.UxBuilder = window.parent.UxBuilder, o.default.requires.push("app.filters"), o.default.requires.push("app.services");
        for (var C in A.data.modules.iframe) o.default.requires.push(A.data.modules.iframe[C]);
        o.default.config(["$controllerProvider", function (t) {
            angular.forEach(A.data.shortcodes, function (e, n) {
                t.register(n + "__controller", e.controller || angular.noop)
            })
        }])
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    window.MutationObserver = window.MutationObserver || function (t) {
        function e(t) {
            this.i = [], this.m = t
        }

        function n(t) {
            ! function n() {
                var g = t.takeRecords();
                g.length && t.m(g, t), t.h = setTimeout(n, e._period)
            }()
        }

        function g(e) {
            var n, g = {
                type: null,
                target: null,
                addedNodes: [],
                removedNodes: [],
                previousSibling: null,
                nextSibling: null,
                attributeName: null,
                attributeNamespace: null,
                oldValue: null
            };
            for (n in e) g[n] !== t && e[n] !== t && (g[n] = e[n]);
            return g
        }

        function o(t, e) {
            var n = i(t, e);
            return function (o) {
                var A, C = o.length;
                e.a && 3 === t.nodeType && t.nodeValue !== n.a && o.push(new g({
                    type: "characterData",
                    target: t,
                    oldValue: n.a
                })), e.b && n.b && I(o, t, n.b, e.f), (e.c || e.g) && (A = r(o, t, n, e)), (A || o.length !== C) && (n = i(t, e))
            }
        }

        function A(t, e) {
            return e.value
        }

        function C(t, e) {
            return "style" !== e.name ? e.value : t.style.cssText
        }

        function I(e, n, o, A) {
            for (var C, I, r = {}, i = n.attributes, a = i.length; a--;) C = i[a], I = C.name, A && A[I] === t || (d(n, C) !== o[I] && e.push(g({
                type: "attributes",
                target: n,
                attributeName: I,
                oldValue: o[I],
                attributeNamespace: C.namespaceURI
            })), r[I] = !0);
            for (I in o) r[I] || e.push(g({
                target: n,
                type: "attributes",
                attributeName: I,
                oldValue: o[I]
            }))
        }

        function r(e, n, o, A) {
            function C(t, n, o, C, i) {
                var a = t.length - 1;
                i = -~((a - i) / 2);
                for (var s, l, c; c = t.pop();) s = o[c.j], l = C[c.l], A.c && i && Math.abs(c.j - c.l) >= a && (e.push(g({
                    type: "childList",
                    target: n,
                    addedNodes: [s],
                    removedNodes: [s],
                    nextSibling: s.nextSibling,
                    previousSibling: s.previousSibling
                })), i--), A.b && l.b && I(e, s, l.b, A.f), A.a && 3 === s.nodeType && s.nodeValue !== l.a && e.push(g({
                    type: "characterData",
                    target: s,
                    oldValue: l.a
                })), A.g && r(s, l)
            }

            function r(n, o) {
                for (var s, l, u, d, p, f = n.childNodes, h = o.c, v = f.length, m = h ? h.length : 0, b = 0, $ = 0, y = 0; $ < v || y < m;) d = f[$], p = (u = h[y]) && u.node, d === p ? (A.b && u.b && I(e, d, u.b, A.f), A.a && u.a !== t && d.nodeValue !== u.a && e.push(g({
                    type: "characterData",
                    target: d,
                    oldValue: u.a
                })), l && C(l, n, f, h, b), A.g && (d.childNodes.length || u.c && u.c.length) && r(d, u), $++, y++) : (i = !0, s || (s = {}, l = []), d && (s[u = a(d)] || (s[u] = !0, -1 === (u = c(h, d, y, "node")) ? A.c && (e.push(g({
                    type: "childList",
                    target: n,
                    addedNodes: [d],
                    nextSibling: d.nextSibling,
                    previousSibling: d.previousSibling
                })), b++) : l.push({
                    j: $,
                    l: u
                })), $++), p && p !== f[$] && (s[u = a(p)] || (s[u] = !0, -1 === (u = c(f, p, $)) ? A.c && (e.push(g({
                    type: "childList",
                    target: o.node,
                    removedNodes: [p],
                    nextSibling: h[y + 1],
                    previousSibling: h[y - 1]
                })), b--) : l.push({
                    j: u,
                    l: y
                })), y++));
                l && C(l, n, f, h, b)
            }
            var i;
            return r(n, o), i
        }

        function i(t, e) {
            var n = !0;
            return function t(g) {
                var o = {
                    node: g
                };
                return !e.a || 3 !== g.nodeType && 8 !== g.nodeType ? (e.b && n && 1 === g.nodeType && (o.b = l(g.attributes, function (t, n) {
                    return e.f && !e.f[n.name] || (t[n.name] = d(g, n)), t
                })), n && (e.c || e.a || e.b && e.g) && (o.c = s(g.childNodes, t)), n = e.g) : o.a = g.nodeValue, o
            }(t)
        }

        function a(t) {
            try {
                return t.id || (t.mo_id = t.mo_id || p++)
            } catch (e) {
                try {
                    return t.nodeValue
                } catch (t) {
                    return p++
                }
            }
        }

        function s(t, e) {
            for (var n = [], g = 0; g < t.length; g++) n[g] = e(t[g], g, t);
            return n
        }

        function l(t, e) {
            for (var n = {}, g = 0; g < t.length; g++) n = e(n, t[g], g, t);
            return n
        }

        function c(t, e, n, g) {
            for (; n < t.length; n++)
                if ((g ? t[n][g] : t[n]) === e) return n;
            return -1
        }
        e._period = 30, e.prototype = {
            observe: function (t, e) {
                for (var g = {
                        b: !!(e.attributes || e.attributeFilter || e.attributeOldValue),
                        c: !!e.childList,
                        g: !!e.subtree,
                        a: !(!e.characterData && !e.characterDataOldValue)
                    }, A = this.i, C = 0; C < A.length; C++) A[C].s === t && A.splice(C, 1);
                e.attributeFilter && (g.f = l(e.attributeFilter, function (t, e) {
                    return t[e] = !0, t
                })), A.push({
                    s: t,
                    o: o(t, g)
                }), this.h || n(this)
            },
            takeRecords: function () {
                for (var t = [], e = this.i, n = 0; n < e.length; n++) e[n].o(t);
                return t
            },
            disconnect: function () {
                this.i = [], clearTimeout(this.h), this.h = null
            }
        };
        var u = document.createElement("i");
        u.style.top = 0;
        var d = (u = "null" != u.attributes.style.value) ? A : C,
            p = 1;
        return e
    }(void 0)
}, function (t, e, n) {
    "use strict";
    n(4), n(5)
}, function (t, e) {
    (function (t) {
        "use strict";
        t.UX_EMPTY_VALUE = "<none>"
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    (function (t) {
        "use strict";
        ! function () {
            t.isIframe = function () {
                return !!window.frameElement
            }, t.camelCase = function (t, e) {
                return t = e ? t.charAt(0).toUpperCase() + t.slice(1) : t, jQuery.camelCase(t.replace(/\_|\:/g, "-", !0))
            }, t.snakeCase = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_";
                return t.replace(/[A-Z]/g, function (t, n) {
                    return (n ? e : "") + t.toLowerCase()
                })
            }, t.capitalize = function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }, t.round = function (t, e) {
                return Math.round(t / e) * e
            }
        }()
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o);
    A.default.constant("Event", {
        READY: "ready",
        CHANGE: "change",
        COMPLETE: "complete",
        ERROR: "error",
        SCROLL: "scroll",
        RESIZE: "resize"
    }), A.default.constant("AppEvent", {
        READY: "app-ready",
        APPLY: "app-apply",
        EMIT: "app-emit",
        BROADCAST: "app-broadcast"
    }), A.default.constant("IframeEvent", {
        READY: "iframe-ready",
        RELOAD: "iframe-reload",
        RESIZE: "iframe-resize",
        CHANGED: "iframe-changed",
        SCROLL: "iframe-scroll"
    }), A.default.constant("MouseEvent", {}), A.default.constant("TouchEvent", {}), A.default.constant("ShortcodeEvent", {
        CREATE: "shortcode-create",
        CREATED: "shortcode-created",
        ATTACHED: "shortcode-attached",
        CONFIGURE: "shortcode-configure",
        RECOMPILED: "shortcode-recompiled",
        ACTIVE: "shortcode-active",
        INACTIVE: "shortcode-inactive",
        CHANGED: "shortcode-changed",
        ADDED: "shortcode-added",
        MOVED: "shortcode-moved",
        DETACHED: "shortcode-detached",
        REMOVED: "shortcode-removed",
        MOUSEOVER: "shortocde-mouseover",
        MOUSEOUT: "shortocde-mouseout",
        CLICK: "shortcode-click",
        OUTLINED: "shortcode-outlined",
        SELECTED: "shortcode-selected",
        DUPLICATED: "shortcode-duplicated",
        DELETED: "shortcode-deleted"
    }), A.default.constant("ChildEvent", {
        ADDED: "child-added",
        REMOVED: "child-removed"
    }), A.default.constant("OptionsEvent", {
        SHOW: "options-show",
        CLEAR: "options-clear",
        HIDE: "options-hide"
    }), A.default.constant("MediaEvent", {
        CHANGED: "media-changed"
    }), A.default.constant("DragEvent", {
        START: "draggable-start",
        MOVE: "draggable-move",
        END: "draggable-end"
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.uxBuilder = void 0;
    var o = n(8),
        A = g(o),
        C = n(9),
        I = g(C),
        r = n(10),
        i = g(r),
        a = n(11),
        s = g(a),
        l = (e.uxBuilder = new s.default, angular.module("uxBuilder", []));
    e.default = l, l.config(A.default), l.run(I.default), l.run(i.default)
}, function (t, e) {
    "use strict";

    function n(t, e, n, g, o) {
        t.digestTtl(20), n.debugEnabled("dev" === window.location.hostname.split(".").pop()), o.debugInfoEnabled(!1), e.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", g.decorator("$rootScope", ["$delegate", function (t) {
            return Object.defineProperty(t.constructor.prototype, "_", {
                value: _,
                enumerable: !1
            }), t
        }])
    }
    n.$inject = ["$rootScopeProvider", "$httpProvider", "$logProvider", "$provide", "$compileProvider"], Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e) {
    (function (t) {
        "use strict";

        function n(t, e, n) {
            var g = !0;
            t.$watch(function () {
                g && e.postCustomMessage(n.APPLY)
            }), e.addEventListener(n.APPLY, function () {
                g = !1, null === t.$$phase && t.$apply(), g = !0
            }, !1), e.addEventListener(n.BROADCAST, function (e) {
                t.$broadcast(e.data.type, e.data.data)
            }, !1), e.addEventListener(n.EMIT, function (e) {
                t.$emit(e.data.type, e.data.data)
            }, !1)
        }
        n.$inject = ["$rootScope", "$window", "AppEvent"], Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = n;
        var g = null;
        t.postCustomMessage = function (t, e, n) {
            g = g || (self === top ? document.querySelectorAll(".iframe-frame")[0].contentWindow : window.parent), n = new CustomEvent(t), n.data = e, g.dispatchEvent(n)
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";

    function n(t, e, n, g, o, A) {
        t.on("keydown", function (t) {
            var e = t.metaKey || t.ctrlKey,
                n = 90 === t.keyCode,
                A = t.shiftKey;
            e && n && (A ? o.redo() : o.undo(), g.apply(), t.preventDefault())
        })
    }
    n.$inject = ["$document", "$window", "$rootScope", "app", "history", "AppEvent"], Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = n(32),
        i = function () {
            function t() {
                (0, A.default)(this, t)
            }
            return (0, I.default)(t, [{
                key: "controller",
                value: function (t, e) {
                    r.store.shortcodes.hasOwnProperty(t) && (r.store.shortcodes[t].controller = e)
                }
            }, {
                key: "on",
                value: function (t, e) {
                    r.store.$$events[t] = r.store.$$events[t] || [], r.store.$$events[t].push(e)
                }
            }, {
                key: "addfilter",
                value: function (t, e) {
                    r.store.$$filters[t] = r.store.$$filters[t] || [], r.store.$$filters[t].push(e)
                }
            }, {
                key: "addAction",
                value: function (t) {
                    r.store.actions.push(t)
                }
            }]), t
        }();
    e.default = i
}, function (t, e) {
    "use strict";
    e.__esModule = !0, e.default = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var o = n(14),
        A = g(o);
    e.default = function () {
        function t(t, e) {
            for (var n = 0; n < e.length; n++) {
                var g = e[n];
                g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), (0, A.default)(t, g.key, g)
            }
        }
        return function (e, n, g) {
            return n && t(e.prototype, n), g && t(e, g), e
        }
    }()
}, function (t, e, n) {
    t.exports = {
        default: n(15),
        __esModule: !0
    }
}, function (t, e, n) {
    n(16);
    var g = n(19).Object;
    t.exports = function (t, e, n) {
        return g.defineProperty(t, e, n)
    }
}, function (t, e, n) {
    var g = n(17);
    g(g.S + g.F * !n(27), "Object", {
        defineProperty: n(23).f
    })
}, function (t, e, n) {
    var g = n(18),
        o = n(19),
        A = n(20),
        C = n(22),
        I = "prototype",
        r = function (t, e, n) {
            var i, a, s, l = t & r.F,
                c = t & r.G,
                u = t & r.S,
                d = t & r.P,
                p = t & r.B,
                f = t & r.W,
                h = c ? o : o[e] || (o[e] = {}),
                v = h[I],
                m = c ? g : u ? g[e] : (g[e] || {})[I];
            c && (n = e);
            for (i in n) a = !l && m && void 0 !== m[i], a && i in h || (s = a ? m[i] : n[i], h[i] = c && "function" != typeof m[i] ? n[i] : p && a ? A(s, g) : f && m[i] == s ? function (t) {
                var e = function (e, n, g) {
                    if (this instanceof t) {
                        switch (arguments.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e);
                            case 2:
                                return new t(e, n)
                        }
                        return new t(e, n, g)
                    }
                    return t.apply(this, arguments)
                };
                return e[I] = t[I], e
            }(s) : d && "function" == typeof s ? A(Function.call, s) : s, d && ((h.virtual || (h.virtual = {}))[i] = s, t & r.R && v && !v[i] && C(v, i, s)))
        };
    r.F = 1, r.G = 2, r.S = 4, r.P = 8, r.B = 16, r.W = 32, r.U = 64, r.R = 128, t.exports = r
}, function (t, e) {
    var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
}, function (t, e) {
    var n = t.exports = {
        version: "2.5.1"
    };
    "number" == typeof __e && (__e = n)
}, function (t, e, n) {
    var g = n(21);
    t.exports = function (t, e, n) {
        if (g(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, g) {
                    return t.call(e, n, g)
                };
            case 3:
                return function (n, g, o) {
                    return t.call(e, n, g, o)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t
    }
}, function (t, e, n) {
    var g = n(23),
        o = n(31);
    t.exports = n(27) ? function (t, e, n) {
        return g.f(t, e, o(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    var g = n(24),
        o = n(26),
        A = n(30),
        C = Object.defineProperty;
    e.f = n(27) ? Object.defineProperty : function (t, e, n) {
        if (g(t), e = A(e, !0), g(n), o) try {
            return C(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var g = n(25);
    t.exports = function (t) {
        if (!g(t)) throw TypeError(t + " is not an object!");
        return t
    }
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    t.exports = !n(27) && !n(28)(function () {
        return 7 != Object.defineProperty(n(29)("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e, n) {
    t.exports = !n(28)(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    })
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, n) {
    var g = n(25),
        o = n(18).document,
        A = g(o) && g(o.createElement);
    t.exports = function (t) {
        return A ? o.createElement(t) : {}
    }
}, function (t, e, n) {
    var g = n(25);
    t.exports = function (t, e) {
        if (!g(t)) return t;
        var n, o;
        if (e && "function" == typeof (n = t.toString) && !g(o = n.call(t))) return o;
        if ("function" == typeof (n = t.valueOf) && !g(o = n.call(t))) return o;
        if (!e && "function" == typeof (n = t.toString) && !g(o = n.call(t))) return o;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function (t, e) {
    "use strict";

    function n(t) {
        return o.$set = function (e, n) {
            return t(g(e)).assign(o, n)
        }, o.$get = function (e, n) {
            var A = t(g(e))(o);
            return !angular.isDefined(A) && n ? o.$set(e, n) : A
        }, o.$unset = function (e) {
            var n;
            return e.indexOf("*") ? (n = e.split("*")[0], t(g(n)).assign(o, null)) : t(g(e)).assign(o, null)
        }, o.$disable = function () {
            o.enabled = !1
        }, o.$enable = function () {
            o.enabled = !0
        }, o.$addAction = function (t, e) {
            if (o.enabled) {
                o.history.splice(0, o.history.length - (A - 1)), o.currentAction < o.history.length - 1 && o.history.splice(o.currentAction + 1, o.history.length);
                var n = o.history.slice().pop();
                return n && n.payload.key === e.key ? void(e.override !== !1 && (n.payload = e)) : void(o.currentAction = o.history.push({
                    type: t,
                    payload: e
                }) - 1)
            }
        }, o.$resetToAction = function (t) {
            o.history.splice(t + 1, o.history.length), o.currentAction = Math.min(t, o.currentAction)
        }, o
    }

    function g(t) {
        var e = [],
            n = t.split(".");
        return _.each(n, function (t) {
            e.push(jQuery.camelCase(t.replace(/:/g, "-")))
        }), e.join(".")
    }
    n.$inject = ["$parse"], Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n;
    var o = e.store = (window.parent || window).uxBuilderData,
        A = 50
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o),
        C = n(34),
        I = g(C),
        r = n(35),
        i = g(r),
        a = n(36),
        s = g(a);
    A.default.directive("draggableShortcode", I.default), A.default.directive("toNumber", i.default), A.default.directive("wpAttachment", s.default)
}, function (t, e) {
    "use strict";

    function n(t) {
        return {
            restrict: "A",
            controllerAs: "draggableShortcode",
            bindToController: {
                shortcode: "=draggableShortcode",
                options: "=draggableOptions",
                element: "=draggableElement"
            },
            controller: ["$scope", "$element", "targets", function (e, n, g) {
                var o = this,
                    A = null;
                e.$watch("draggableShortcode.shortcode", function (C) {
                    A && A.destroy(), A = t(o.shortcode, o.element || n.get(0), o.options), o.options && o.options.targets && o.options.targets.map(function (t) {
                        angular.isObject(t) ? (t.shortcode = o.shortcode, t.element = n, g.add(t.name, t)) : g.add(t, {
                            shortcode: o.shortcode,
                            element: n
                        })
                    }), e.$on("$destroy", function () {
                        A.destroy(), g.removeElement(n.get(0))
                    })
                })
            }]
        }
    }
    n.$inject = ["draggable"], Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = function () {
        return {
            require: "ngModel",
            link: function (t, e, n, g) {
                g.$parsers.push(function (t) {
                    return "" + t
                }), g.$formatters.push(function (t) {
                    return parseFloat(t, 10)
                })
            }
        }
    }
}, function (t, e) {
    "use strict";

    function n(t) {
        return {
            restrict: "A",
            controllerAs: "attachment",
            bindToController: !0,
            scope: {
                id: "=wpAttachment",
                size: "=wpAttachmentSize",
                model: "=wpAttachmentModel",
                width: "@wpAttachmentWidth",
                height: "@wpAttachmentHeight"
            },
            controller: ["app", "store", "$scope", "$element", function (t, e, n, g) {
                function o() {
                    var t = n.attachment.id,
                        g = n.attachment.size || "full",
                        o = n.attachment.width || 0,
                        C = n.attachment.height || 0,
                        I = o || C ? "w" + o + ".h" + C : g,
                        r = "cache.attachment." + I + ".id" + t,
                        i = e.$get(r);
                    return angular.isDefined(i) ? A(i) : void jQuery.getJSON(e.ajaxUrl, {
                        action: "ux_builder_get_attachment",
                        attachment_id: t,
                        attachment_size: g,
                        attachment_width: o,
                        attachment_height: C
                    }).success(function (t) {
                        t.success ? A(e.$set(r, t.data)) : window.self === window.top && n.attachment.model && (i = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAEOCAIAAADe+FMwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAADhuaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE2LTA5LTI3VDE3OjUzOjI2KzAyOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNi0wOS0yN1QxNzo1MzoyNiswMjowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTYtMDktMjdUMTc6NTM6MjYrMDI6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmJjYTkzYTljLTRlZmQtNDQ0ZC05YjY1LTllNGQ0YWIzMWE3NzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpiY2E5M2E5Yy00ZWZkLTQ0NGQtOWI2NS05ZTRkNGFiMzFhNzc8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpiY2E5M2E5Yy00ZWZkLTQ0NGQtOWI2NS05ZTRkNGFiMzFhNzc8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YmNhOTNhOWMtNGVmZC00NDRkLTliNjUtOWU0ZDRhYjMxYTc3PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA5LTI3VDE3OjUzOjI2KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40ODA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjcwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4rLBj0AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALzSURBVHja7NQxEQAwCACxUklMbPh3hQuOIZHww0dWPwDu+RIAGDQABg1g0AAYNIBBA2DQABg0gEEDYNAABg2AQQNg0AAGDYBBAxg0AAYNYNAAGDQABg1g0AAYNIBBA2DQABg0gEEDYNAABg2AQQMYNAAGDYBBAxg0AAYNYNAAGDQABg1g0AAYNIBBA2DQAAYNgEEDYNAABg2AQQMYNAAGDYBBAxg0AAYNYNAAGDQABg1g0AAYNIBBA2DQAAYNgEEDYNAABg2AQQMYNAAGDYBBAxg0AAYNYNAAGDSAQQNg0AAYNIBBA2DQAAYNgEEDYNAABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQNg0AAYNIBBA2DQAAYNgEEDYNAABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQNg0AAYNIBBA2DQAAYNgEEDGDQABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQNg0AAGDYBBA2DQAAYNgEEDGDQABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQNg0AAGDYBBA2DQAAYNgEEDGDQABg2AQQMYNAAGDWDQABg0gEEDYNAAGDSAQQNg0AAGDYBBA2DQAAYNgEEDGDQABg1g0AAYNAAGDWDQABg0gEEDYNAAGDSAQQNg0AAGDYBBA2DQAAYNgEEDGDQABg1g0AAYNAAGDWDQABg0gEEDYNAAGDSAQQNg0AAGDYBBAxg0AAYNgEEDGDQABg1g0AAYNAAGDWDQABg0gEEDYNAABg2AQQNg0AAGDYBBAxg0AAYNgEEDGDQABg1g0AAYNAAGDWDQABg0gEEDYNAABg2AQQNg0AAGDYBBAxg0AAYNgEEDGDQABg1g0AAYNIBBA2DQABg0gEEDYNAABg2AQQNg0AAGDYBBAxg0AAYNYNAAGDQABg1g0AAYNIBBA2DQABg0gEEDYNAABg2AQQMYtAQABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQOwbQAAAP//AwDBvQLFJkQUdgAAAABJRU5ErkJggg==", "480px", "270px"]),
                            i && A(i)
                    }).fail(function (e) {
                        console.error("Failed to load attachment", t)
                    })
                }

                function A(t) {
                    "IMG" === g[0].tagName ? (g.addClass("processing"), g.on("load", function () {
                        g.off("load").removeClass("processing")
                    }), g.attr("src", t[0]), g.attr("width", t[1]), g.attr("height", t[2])) : g.css("background-image", "url(" + t[0] + ")"), r = !0
                }

                function C() {
                    "IMG" === g[0].tagName ? (g.removeAttr("src"), g.removeAttr("width"), g.removeAttr("height")) : g.css("background-image", ""), r = !1
                }
                var I = this,
                    r = !1;
                g.on("load.wpAttachment", function () {
                    return t("tools").fixPositions()
                }), n.$watch(function () {
                    return I.id
                }, function (t) {
                    return t && "" !== t ? "string" == typeof t && t.indexOf("/") > -1 ? A([t]) : void o() : C()
                }), n.$watch(function () {
                    return I.size
                }, function (t, e) {
                    r && t !== e && o()
                }), n.$on("$destroy", function () {
                    g.off("load.wpAttachment")
                })
            }]
        }
    }
    n.$inject = ["app"], Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(38),
        A = g(o),
        C = n(39),
        I = g(C),
        r = n(40),
        i = g(r),
        a = n(41),
        s = g(a),
        l = n(42),
        c = g(l);
    angular.module("app.filters", []).filter("noDefault", A.default).filter("heightCheck", I.default).filter("html", i.default).filter("rgba", s.default).filter("trusted", c.default)
}, function (t, e) {
    "use strict";

    function n() {
        return function (t, e) {
            return t !== e.default && t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e) {
    "use strict";

    function n() {
        return function (t) {
            return "100%" === t ? "100vh" : t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e) {
    "use strict";

    function n(t) {
        return function (e) {
            return t.trustAsHtml(e)
        }
    }
    n.$inject = ["$sce"], Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e) {
    "use strict";

    function n() {
        return function (t) {
            var e = t;
            if (e.indexOf("#") > -1) {
                var n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                e = e.replace(n, function (t, e, n, g) {
                    return e + e + n + n + g + g
                }), e = e.replace("#", "");
                var g = parseInt(e.substring(0, 2), 16),
                    o = parseInt(e.substring(2, 4), 16),
                    A = parseInt(e.substring(4, 6), 16);
                e = "rgba(" + g + "," + o + "," + A + ",0.3)"
            }
            return e
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e) {
    "use strict";

    function n(t) {
        return function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "html";
            return t.trustAs(n, e)
        }
    }
    n.$inject = ["$sce"], Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = n
}, function (t, e, n) {
    "use strict";
    n(44), n(45), n(46), n(47), n(50)
}, function (t, e) {
    (function (t) {
        "use strict";
        t.jQuery.fn.cover = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (!e) return this;
            var g = t.jQuery(e),
                o = g.get(0).ownerDocument,
                A = o.defaultView,
                C = g.outerOffset(n),
                I = !!this.get(0).ownerDocument.defaultView.frameElement,
                r = !!g.get(0).ownerDocument.defaultView.frameElement;
            if (!I && r) {
                var i = A.frameElement.getBoundingClientRect();
                C.left += i.left, C.top += i.top
            }
            return I && r && (C.top += o.documentElement.scrollTop || o.body.scrollTop), this.css({
                width: C.width.toFixed(2),
                height: C.height.toFixed(2),
                transform: "translateX(" + C.left.toFixed() + "px) translateY(" + C.top.toFixed() + "px)"
            })
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    (function (t) {
        "use strict";

        function e(t) {
            var e = !0;
            return t.map(function (t) {
                var n = window.getComputedStyle(t);
                "none" === n.display && (e = !1), "hidden" === n.visibility && (e = !1), "0.0" === n.opacity && (e = !1)
            }), e
        }
        t.jQuery.fn.isVisible = function () {
            var t = [this.get(0)];
            return e(t)
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    (function (t) {
        "use strict";
        t.jQuery.fn.outerOffset = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                n = {
                    width: 0,
                    height: 0
                };
            return this.each(function (g, o) {
                var A = t.jQuery(o),
                    C = o.getBoundingClientRect(),
                    I = 0,
                    r = 0,
                    i = C.right - (n.left ? n.left : C.left),
                    a = C.bottom - (n.top ? n.top : C.top),
                    s = A.css("display").search("inline") > -1;
                e.includeMargins && (s ? i = A.outerWidth(!0) : a = A.outerHeight(!0)), n.top = (C.top > n.top ? n.top : C.top) + r, n.left = (C.left > n.left ? n.left : C.left) + I, n.width = i > n.width ? i : n.width, n.height = a > n.height ? a : n.height
            }), n.right = n.left + n.width, n.bottom = n.top + n.height, n
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    (function (t) {
        "use strict";
        var e = n(48);
        t.jQuery.fn.scrollToElement = function (n) {
            var g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 450,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                A = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                C = t.jQuery(n),
                I = C.get(0).ownerDocument,
                r = I.defaultView,
                i = r.innerHeight,
                a = I.body.getBoundingClientRect(),
                s = C.get(0).getBoundingClientRect(),
                l = s.top - a.top + s.height / 2 + o;
            s.height < i ? l -= i / 2 : s.height > i && (l = s.top - a.top), (0, e.scrollTo)(l, g, A, o, I)
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : document,
            I = A(o).top,
            i = t - I,
            a = I + i * g,
            s = t - a,
            l = 0,
            c = 20,
            u = 0,
            d = function t() {
                l += c, u = l / e;
                var g = a + s * r.default.easeInOutCubic(u);
                C(g, o), l < e ? window.requestAnimationFrame(t) : n && "function" == typeof n && n()
            };
        d()
    }

    function A() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
            e = t.documentElement,
            n = (t.defaultView.pageYOffset || e.scrollTop) - (e.clientTop || 0),
            g = (t.defaultView.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
        return {
            top: n,
            left: g
        }
    }

    function C(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
        e.documentElement.scrollTop = t, e.body.parentNode.scrollTop = t, e.body.scrollTop = t
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.scrollTo = o, e.scrollPos = A, e.setScroll = C;
    var I = n(49),
        r = g(I)
}, function (t, e) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = {
        linear: function (t) {
            return t
        },
        easeInQuad: function (t) {
            return t * t
        },
        easeOutQuad: function (t) {
            return t * (2 - t)
        },
        easeInOutQuad: function (t) {
            return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        },
        easeInCubic: function (t) {
            return t * t * t
        },
        easeOutCubic: function (t) {
            return --t * t * t + 1
        },
        easeInOutCubic: function (t) {
            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
        },
        easeInQuart: function (t) {
            return t * t * t * t
        },
        easeOutQuart: function (t) {
            return 1 - --t * t * t * t
        },
        easeInOutQuart: function (t) {
            return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
        },
        easeInQuint: function (t) {
            return t * t * t * t * t
        },
        easeOutQuint: function (t) {
            return 1 + --t * t * t * t * t
        },
        easeInOutQuint: function (t) {
            return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
        }
    }
}, function (t, e) {
    (function (t) {
        "use strict";
        t.jQuery.fn.shortcode = function () {
            var e = this.parents(),
                n = null;
            return this.data("shortcode") ? this.data("shortcode") : (e.each(function (e, g) {
                t.jQuery(g).data("shortcode") && !n && (n = t.jQuery(g).data("shortcode"))
            }), n)
        }
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(52),
        A = g(o),
        C = n(53),
        I = g(C),
        r = n(54),
        i = g(r),
        a = n(55),
        s = g(a),
        l = n(56),
        c = g(l),
        u = n(57),
        d = g(u),
        p = n(58),
        f = g(p),
        h = n(59),
        v = g(h),
        m = n(60),
        b = g(m),
        $ = n(81),
        y = g($),
        w = n(85),
        x = g(w),
        E = n(86),
        k = g(E),
        S = n(32),
        D = g(S),
        O = n(89),
        M = g(O),
        N = n(90),
        _ = g(N),
        P = n(91),
        R = g(P),
        j = n(92),
        Y = g(j),
        T = n(93),
        B = g(T);
    angular.module("app.services", []).service("$angular", A.default).service("actions", I.default).service("app", i.default).service("contextmenu", s.default).service("draggable", c.default).service("dependencies", d.default).service("editor", f.default).service("history", b.default).service("iframe", y.default).service("hammer", v.default).service("ResponsiveHelper", x.default).service("Shortcode", k.default).service("utils", _.default).service("store", D.default).service("targets", M.default).service("$iframe", B.default).service("wpEditor", R.default).service("wpMedia", Y.default)
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = ["$window", function t(e) {
            return (0, A.default)(this, t), e.frameElement ? e.parent.angular : angular
        }];
    e.default = C
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = function () {
            function t(e) {
                (0, A.default)(this, t), this.store = e, this.store.states = this.store.states || {}
            }
            return t.$inject = ["store"], (0, I.default)(t, [{
                key: "outlineShortcode",
                value: function (t) {
                    this.store.states.outlinedShortcode = t
                }
            }, {
                key: "selectShortcode",
                value: function (t) {
                    this.store.states.selectedShortcode = t
                }
            }, {
                key: "configureShortcode",
                value: function (t) {
                    this.store.states.configuringShortcode = t
                }
            }]), t
        }();
    e.default = r
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = ["store", "$rootScope", "$window", "$timeout", "$log", "AppEvent", "IframeEvent", "MediaEvent", function t(e, n, g, o, C, I, r, i) {
            function a(t) {
                return e.components[t]
            }(0, A.default)(this, t);
            var s = angular.copy(e.permissions);
            return a.goto = function (t) {
                (window.parent || window).location.hash = t
            }, a.exit = function () {
                if (s.exit) {
                    var t = "publish" === e.post.status ? e.backUrl : e.editUrl;
                    e.isSaved ? (window.parent || window).location.href = t : confirm("退出？所有保存都会丢失。") && ((window.parent || window).location.href = t)
                }
            }, a.register = function (t, n) {
                e.components = e.components || {}, e.components[t] = n
            }, a.remove = function (t) {
                delete e.components[t]
            }, a.apply = function (t) {
                n.$apply(t)
            }, a.broadcast = function (t, e) {
                n.$broadcast(t, e), g.postCustomMessage(I.BROADCAST, {
                    type: t,
                    data: e
                })
            }, a.emit = function (t, e) {
                n.$emit(t, e), g.postCustomMessage(I.EMIT, {
                    type: t,
                    data: e
                })
            }, a.trigger = function (t) {
                for (var n = arguments.length, g = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) g[o - 1] = arguments[o];
                if (this.broadcast.apply(this, [t].concat(g)), e.$$events.hasOwnProperty(t))
                    for (var A = 0; A < e.$$events[t].length; A++) {
                        var C;
                        (C = e.$$events[t][A]).call.apply(C, [this].concat(g))
                    }
            }, a.filter = function (t, n) {
                if (e.$$filters.hasOwnProperty(t)) {
                    for (var g = arguments.length, o = Array(g > 2 ? g - 2 : 0), A = 2; A < g; A++) o[A - 2] = arguments[A];
                    for (var C = 0; C < e.$$filters[t].length; C++) {
                        var I;
                        n = (I = e.$$filters[t][C]).call.apply(I, [this, n].concat(o))
                    }
                }
                return n
            }, a.states = e.states, a.resetAll = function () {
                e.$$events = {}, e.$$filters = {}, this.resetState()
            }, a.resetState = function () {
                for (var t in e.states) e.states[t] = null
            }, a.freeze = function (t) {
                e.states.freezed = t
            }, a.outlineShortcode = function (t) {
                e.states.outlinedShortcode = e.states.freezed !== !0 ? t : null
            }, a.selectShortcode = function (t) {
                e.states.selectedShortcode = e.states.freezed !== !0 ? t : null
            }, a.configureShortcode = function (t) {
                this.goto(t ? "/shortcode/" + t.$id : "/")
            }, a.setBreakpoint = function (t) {
                e.breakpoints.current = t, a.broadcast(i.CHANGED, t)
            }, a
        }];
    e.default = C
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = function () {
            function t(e, n) {
                (0, A.default)(this, t), this.app = e, this.utils = n
            }
            return t.$inject = ["app", "utils"], (0, I.default)(t, [{
                key: "attach",
                value: function (t) {
                    t.addEventListener && t.addEventListener("contextmenu", this.onRightClick.bind(this), !1)
                }
            }, {
                key: "onRightClick",
                value: function (t) {
                    var e = this.utils.getGlobalCoordinates(t.view, t.clientX, t.clientY),
                        n = this.utils.shortcodeFromPoint(e.x, e.y);
                    n.isRoot || (this.menu.open(n, t.target, t.clientX, t.clientY), this.app.apply(), t ? t.preventDefault() : window.event.returnValue = !1)
                }
            }, {
                key: "menu",
                get: function () {
                    return this.app("contextMenu")
                }
            }]), t
        }();
    e.default = r
}, function (t, e, n) {
    (function (t) {
        "use strict";

        function g(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(12),
            A = g(o),
            C = ["app", "store", "targets", "Shortcode", "$document", "$window", "$timeout", "$iframe", "utils", "DragEvent", function e(n, g, o, C, I, r, i, a, s, l) {
                (0, A.default)(this, e);
                var c = {},
                    u = (window.parent || window).angular.element("draggable-helper");
                return function (e, A, d) {
                    function p(t) {
                        t.srcEvent.stopPropagation(), t.srcEvent.stopImmediatePropagation()
                    }

                    function f(t) {
                        u.find("h3 span").text(e.data.name), I.onkeydown = function (t) {
                            return n("tools").toggleAddableButton(t.altKey)
                        }, I.onkeyup = function (t) {
                            return n("tools").toggleAddableButton(t.altKey)
                        }, c.shortcode = e, c.iframeRect = a().get(0).getBoundingClientRect(), c.container = e.parent.$element, c.isSelected = n.states.selectedShortcode === e, c.defaultPrevented = !1, c.showHelper = !0, c.constrains = !1, c.initial = {}, m(t), c.initial = {}, c.initial.innerX = c.innerX, c.initial.innerY = c.innerY, c.initial.elementX = c.elementX, c.initial.elementY = c.elementY, e.$element.addClass("uxb-shortcode-dragging"), angular.element(r.parent.document.body).addClass("dragging"), angular.element("body").addClass("dragging"), d.start(t), e.states.dragging = !0, g.isDragging = !0, n.broadcast(l.START, c), n("tools").apply(), e.$scope.$digest()
                    }

                    function h(t) {
                        if (c.shortcode || f(t), m(t), c.defaultPrevented || (u.addClass("active"), u.css({
                                transform: "translate3d(" + c.global.x + "px, " + c.global.y + "px, 0px)"
                            }), u.find("h3 span").css({
                                transform: "rotate(" + c.originalEvent.velocityY * -25 + "deg)"
                            })), c.target = null, c.addToShortcode = null, e.$recompile) return w.stop(!0), v(t);
                        if (o.find(c.global.x, c.global.y).map(function (t) {
                                !c.target && t.target && t.target.allows(e) && (c.target = t)
                            }), c.target) {
                            var g = c.target.target === e.parent,
                                A = g && c.target.index === e.index,
                                C = g && c.target.index === e.index + 1,
                                I = t.srcEvent.altKey;
                            !A && !C || I || (c.target = null)
                        }
                        d.move(t), n("tools").showAddableSpot(c.target, t.srcEvent.altKey), n.outlineShortcode(c.target ? c.target.target.parent : null), n.broadcast(l.MOVE, c), n("tools").apply(), e.$scope.$digest()
                    }

                    function v(t) {
                        if (m(t), u.find("h3 span").removeAttr("style"), u.removeClass("active"), e.states.dragging = !1, c.target && !c.defaultPrevented) {
                            var o = t.srcEvent.altKey,
                                A = c.target.target,
                                a = c.target.index;
                            o ? c.addedShortode = A.addChild(e.copy(), a) : c.addedShortode = C.move(e, A, a)
                        }
                        e.$element.removeClass("uxb-shortcode-dragging"), angular.element(r.parent.document.body).removeClass("dragging"), angular.element("body").removeClass("dragging"), d.end(t), n.broadcast(l.END, c), I.onkeydown = null, I.onkeyup = null, c = {}, i(function () {
                            return g.isDragging = !1
                        }, 0)
                    }

                    function m(t) {
                        c.originalEvent = t, c.global = s.getGlobalCoordinates(t.target.ownerDocument.defaultView, t.center.x, t.center.y), c.element = angular.element(y), c.draggable = $, c.main = {}, c.main.x = c.global.x, c.main.y = c.global.y, c.iframe = {}, c.iframe.x = c.global.x - c.iframeRect.left, c.iframe.y = c.global.y - c.iframeRect.top, c.virtual = {}, c.virtual.width = c.shortcode.$element.width(), c.virtual.height = c.shortcode.$element.height(), c.virtual.top = c.iframe.y - c.initial.elementY, c.virtual.right = c.iframe.x + c.virtual.width - c.initial.elementX, c.virtual.bottom = c.iframe.y + c.virtual.height - c.initial.elementY, c.virtual.left = c.iframe.x - c.initial.elementX, c.constrains && b(t), c.elementX = c.iframe.x - e.$element.offset().left, c.elementY = c.iframe.y - e.$element.offset().top + a().contents().scrollTop(), c.preventDefault = function () {
                            c.defaultPrevented = !0
                        }, c.setContainment = function (t) {
                            c.constrains = t.outerOffset(), c.container = t
                        }
                    }

                    function b() {
                        c.constrains = c.container.outerOffset(), c.innerX = c.iframe.x - c.constrains.left - c.initial.elementX, c.innerY = c.iframe.y - c.constrains.top - c.initial.elementY, c.virtual.top < c.constrains.top && (c.innerY = 0), c.virtual.right > c.constrains.right && (c.innerX = c.constrains.width - c.virtual.width), c.virtual.bottom > c.constrains.bottom && (c.innerY = c.constrains.height - c.virtual.height), c.virtual.left < c.constrains.left && (c.innerX = 0)
                    }
                    var $ = this;
                    d = angular.extend({
                        cssProps: {},
                        droppable: !0,
                        broadcast: !0,
                        start: angular.noop,
                        move: angular.noop,
                        end: angular.noop
                    }, d);
                    var y = A || e.$element.get(0),
                        w = new t.HammerJS(y, d);
                    return w.get("pan").set({
                        direction: t.HammerJS.DIRECTION_ALL,
                        threshold: 1
                    }), angular.element(y).data("shortcode", e), angular.element(y).addClass("uxb-draggable"), w.on("hammer.input", p), w.on("panstart", f), w.on("pan", h), w.on("panend", v), w
                }
            }];
        e.default = C
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = ["store", "$q", function t(e, n) {
            function g(t, g, o) {
                var A = n.defer(),
                    C = 0,
                    I = 0;
                return _.each(g, function (n, o) {
                    e.$get(t + "." + o + ".loaded") === !0 ? delete g[o] : C++
                }), 0 === _.size(g) ? (A.resolve(), A.promise) : (_.each(g, function (n, g) {
                    function r() {
                        i.loaded = !0, I++, I === C && A.resolve()
                    }
                    var i = e.$get(t + "." + g) || o(n, g);
                    return angular.isDefined(i.loaded) && i.loaded !== !0 ? i.addEventListener("load", r) : (i.loaded = !1, i.addEventListener("load", r), e.$set(t + "." + g, i), void document.getElementsByTagName("head")[0].appendChild(i))
                }), A.promise)
            }
            return (0, A.default)(this, t), {
                injectStyles: function (t) {
                    return g("styles", t, function (t, e, n) {
                        return n = document.createElement("link"), n.id = "ux-builder-style-" + e, n.rel = "stylesheet", n.type = "text/css", n.media = "all", n.href = t, n
                    })
                },
                injectScripts: function (t) {
                    return g("scripts", t, function (t, e, n) {
                        return n = document.createElement("script"), n.id = "ux-builder-script-" + e, n.type = "text/javascript", n.src = t, n
                    })
                }
            }
        }];
    e.default = C
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = function () {
            function t(e) {
                (0, A.default)(this, t), this.enabled = !0, this.store = e, this.store.editor = this.store.editor || {
                    state: {}
                }
            }
            return t.$inject = ["store"], (0, I.default)(t, [{
                key: "disable",
                value: function () {
                    this.enabled = !1, this.state = {}
                }
            }, {
                key: "enable",
                value: function () {
                    this.enabled = !0
                }
            }, {
                key: "update",
                value: function () {}
            }, {
                key: "outline",
                value: function (t) {
                    this.state.outlined = this.enabled ? t : null
                }
            }, {
                key: "select",
                value: function (t) {
                    this.state.selected = this.enabled ? t : null
                }
            }, {
                key: "configure",
                value: function (t) {
                    this.state.configuring = this.enabled ? t : null
                }
            }, {
                key: "target",
                value: function (t) {
                    this.state.target = this.enabled ? t : null
                }
            }, {
                key: "state",
                get: function () {
                    return this.store.editor.state
                }
            }]), t
        }();
    e.default = r
}, function (t, e, n) {
    (function (t) {
        "use strict";

        function g(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(12),
            A = g(o),
            C = function e() {
                return (0, A.default)(this, e),
                    function (e, n, g) {
                        return g ? t.propagatingHammer(new t.HammerJS(e, n)) : new t.HammerJS(e, n)
                    }
            };
        e.default = C
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(61),
        A = g(o),
        C = n(12),
        I = g(C),
        r = n(13),
        i = g(r),
        a = function () {
            function t(e, n, g, o, A) {
                (0, I.default)(this, t), this.app = e, this.store = n, this.manager = g, this.ShortcodeEvent = o, this.$timeout = A
            }
            return t.$inject = ["app", "store", "Shortcode", "ShortcodeEvent", "$timeout"], (0, i.default)(t, [{
                key: "undo",
                value: function () {
                    var t = this.store.history[this.store.currentAction];
                    return this.doAction(t, -1)
                }
            }, {
                key: "redo",
                value: function () {
                    var t = this.store.history[this.store.currentAction + 1];
                    return this.doAction(t, 0)
                }
            }, {
                key: "doAction",
                value: function (t, e) {
                    var n = this;
                    if (t) {
                        var g = t.type,
                            o = t.payload,
                            C = this.store.shortcode;
                        switch (this.store.$disable(), this.store.currentAction = this.store.history.indexOf(t) + e, g) {
                            case "reorderChildren":
                                var I = o.id,
                                    r = o.parentId,
                                    i = o.toIndex,
                                    a = o.fromIndex,
                                    s = a > i ? a + 1 : a;
                                this.manager.move(C[I], C[r], s, !1), o.fromIndex = i, o.toIndex = a;
                                break;
                            case "moveChild":
                                var l = o.id,
                                    c = o.parentId,
                                    u = o.index,
                                    d = o.fromParentId,
                                    p = o.fromIndex;
                                this.manager.move(C[l], C[d], p, !1), o.fromParentId = c, o.fromIndex = u, o.parentId = d, o.index = p;
                                break;
                            case "updateOption":
                                var f = o.name,
                                    h = o.optionValue,
                                    v = o.responsiveValue,
                                    m = C[o.id];
                                o.optionValue = angular.copy(m.optionValues[f]), o.responsiveValue = angular.copy(m.responsiveValues[f]), m.optionValues[f] = h, v && (m.responsiveValues[f] = v);
                                break;
                            case "updateMultipleOptions":
                                var b = o.mutations;
                                for (var $ in b) {
                                    var y = C[$];
                                    for (var w in b[$]) {
                                        var x = b[$][w],
                                            E = x.optionValue,
                                            k = x.responsiveValue;
                                        x.optionValue = angular.copy(y.optionValues[w]), x.responsiveValue = angular.copy(y.responsiveValues[w]), y.optionValues[w] = E, k && (y.responsiveValues[w] = k)
                                    }
                                }
                                break;
                            case "clearResponsiveValue":
                                var S = o.id,
                                    D = o.optionName,
                                    O = o.breakpointIndex,
                                    M = o.value,
                                    N = C[S].responsiveValues[D];
                                N[O] ? N[O] = null : N[O] = M;
                                break;
                            case "updateContent":
                                var _ = o.id,
                                    P = o.content,
                                    R = C[_];
                                o.content = R.content, R.content = P;
                                break;
                            case "addChild":
                            case "removeChild":
                                if (C[o.id]) this.manager.remove(C[o.id], !1);
                                else {
                                    var j = C[o.parentId],
                                        Y = j.addChild(o.data, o.index, !1);
                                    this.$timeout(function () {
                                        n.app.trigger(n.ShortcodeEvent.ATTACHED, Y)
                                    })
                                }
                                break;
                            case "removeContent":
                                (0, A.default)(C).length > 1 ? this.manager.remove(this.store.postContent, !1) : (o.content.forEach(function (t, e) {
                                    n.store.postContent.addChild(t, e, !1)
                                }), this.$timeout(function () {
                                    n.app.trigger(n.ShortcodeEvent.ATTACHED, n.store.postContent)
                                }))
                        }
                        return this.store.$enable(), t
                    }
                }
            }]), t
        }();
    e.default = a
}, function (t, e, n) {
    t.exports = {
        default: n(62),
        __esModule: !0
    }
}, function (t, e, n) {
    n(63), t.exports = n(19).Object.keys
}, function (t, e, n) {
    var g = n(64),
        o = n(66);
    n(80)("keys", function () {
        return function (t) {
            return o(g(t))
        }
    })
}, function (t, e, n) {
    var g = n(65);
    t.exports = function (t) {
        return Object(g(t))
    }
}, function (t, e) {
    t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t
    }
}, function (t, e, n) {
    var g = n(67),
        o = n(79);
    t.exports = Object.keys || function (t) {
        return g(t, o)
    }
}, function (t, e, n) {
    var g = n(68),
        o = n(69),
        A = n(72)(!1),
        C = n(76)("IE_PROTO");
    t.exports = function (t, e) {
        var n, I = o(t),
            r = 0,
            i = [];
        for (n in I) n != C && g(I, n) && i.push(n);
        for (; e.length > r;) g(I, n = e[r++]) && (~A(i, n) || i.push(n));
        return i
    }
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var g = n(70),
        o = n(65);
    t.exports = function (t) {
        return g(o(t))
    }
}, function (t, e, n) {
    var g = n(71);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
        return "String" == g(t) ? t.split("") : Object(t)
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e, n) {
    var g = n(69),
        o = n(73),
        A = n(75);
    t.exports = function (t) {
        return function (e, n, C) {
            var I, r = g(e),
                i = o(r.length),
                a = A(C, i);
            if (t && n != n) {
                for (; i > a;)
                    if (I = r[a++], I != I) return !0
            } else
                for (; i > a; a++)
                    if ((t || a in r) && r[a] === n) return t || a || 0;
            return !t && -1
        }
    }
}, function (t, e, n) {
    var g = n(74),
        o = Math.min;
    t.exports = function (t) {
        return t > 0 ? o(g(t), 9007199254740991) : 0
    }
}, function (t, e) {
    var n = Math.ceil,
        g = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? g : n)(t)
    }
}, function (t, e, n) {
    var g = n(74),
        o = Math.max,
        A = Math.min;
    t.exports = function (t, e) {
        return t = g(t), t < 0 ? o(t + e, 0) : A(t, e)
    }
}, function (t, e, n) {
    var g = n(77)("keys"),
        o = n(78);
    t.exports = function (t) {
        return g[t] || (g[t] = o(t))
    }
}, function (t, e, n) {
    var g = n(18),
        o = "__core-js_shared__",
        A = g[o] || (g[o] = {});
    t.exports = function (t) {
        return A[t] || (A[t] = {})
    }
}, function (t, e) {
    var n = 0,
        g = Math.random();
    t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + g).toString(36))
    }
}, function (t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
    var g = n(17),
        o = n(19),
        A = n(28);
    t.exports = function (t, e) {
        var n = (o.Object || {})[t] || Object[t],
            C = {};
        C[t] = e(n), g(g.S + g.F * A(function () {
            n(1)
        }), "Object", C)
    }
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = n(82),
        i = g(r),
        a = function () {
            function t(e, n, g, o, C, I) {
                (0, A.default)(this, t), this.app = e, this.store = n, this.targets = g, this.manager = o, this.$timeout = C, this.metaOptions = n.post.meta.options.flat, this.postMeta = n.post.meta.values, this.IframeEvent = I
            }
            return t.$inject = ["app", "store", "targets", "Shortcode", "$timeout", "IframeEvent"], (0, I.default)(t, [{
                key: "reload",
                value: function (t) {
                    var e = this;
                    if (!this.store.isReloading) {
                        this.store.loading = !0;
                        var n = (0, i.default)(this.store.iframeUrl);
                        for (var g in this.metaOptions) {
                            var o = this.metaOptions[g];
                            n.query += "&" + o.$orgName + "=" + this.postMeta[o.$name]
                        }
                        this.store.post.content = t || this.store.postContent.copy(function (t, e) {
                            t.$id = e.$id
                        }), this.targets.remove(this.store.postContent), this.manager.remove(this.store.postContent, !1), this.app.resetAll(), this.store.isReloading = !!this.$timeout(function () {
                            e.store.iframeUrl = n.toString(), delete e.store.isReloading
                        }, 0)
                    }
                }
            }]), t
        }();
    e.default = a
}, function (t, e, n) {
    (function (e) {
        "use strict";

        function g(t) {
            var n = e && e.location || {};
            t = t || n;
            var g, o = {},
                A = typeof t;
            if ("blob:" === t.protocol) o = new C(unescape(t.pathname), {});
            else if ("string" === A) {
                o = new C(t, {});
                for (g in u) delete o[g]
            } else if ("object" === A) {
                for (g in t) g in u || (o[g] = t[g]);
                void 0 === o.slashes && (o.slashes = l.test(t.href))
            }
            return o
        }

        function o(t) {
            var e = s.exec(t);
            return {
                protocol: e[1] ? e[1].toLowerCase() : "",
                slashes: !!e[2],
                rest: e[3]
            }
        }

        function A(t, e) {
            for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), g = n.length, o = n[g - 1], A = !1, C = 0; g--;) "." === n[g] ? n.splice(g, 1) : ".." === n[g] ? (n.splice(g, 1), C++) : C && (0 === g && (A = !0), n.splice(g, 1), C--);
            return A && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/")
        }

        function C(t, e, n) {
            if (!(this instanceof C)) return new C(t, e, n);
            var I, r, s, l, u, d, p = c.slice(),
                f = typeof e,
                h = this,
                v = 0;
            for ("object" !== f && "string" !== f && (n = e, e = null), n && "function" != typeof n && (n = a.parse), e = g(e), r = o(t || ""), I = !r.protocol && !r.slashes, h.slashes = r.slashes || I && e.slashes, h.protocol = r.protocol || e.protocol || "", t = r.rest, r.slashes || (p[3] = [/(.*)/, "pathname"]); v < p.length; v++) l = p[v], "function" != typeof l ? (s = l[0], d = l[1], s !== s ? h[d] = t : "string" == typeof s ? ~(u = t.indexOf(s)) && ("number" == typeof l[2] ? (h[d] = t.slice(0, u), t = t.slice(u + l[2])) : (h[d] = t.slice(u), t = t.slice(0, u))) : (u = s.exec(t)) && (h[d] = u[1], t = t.slice(0, u.index)), h[d] = h[d] || (I && l[3] ? e[d] || "" : ""), l[4] && (h[d] = h[d].toLowerCase())) : t = l(t);
            n && (h.query = n(h.query)), I && e.slashes && "/" !== h.pathname.charAt(0) && ("" !== h.pathname || "" !== e.pathname) && (h.pathname = A(h.pathname, e.pathname)), i(h.port, h.protocol) || (h.host = h.hostname, h.port = ""), h.username = h.password = "", h.auth && (l = h.auth.split(":"), h.username = l[0] || "", h.password = l[1] || ""), h.origin = h.protocol && h.host && "file:" !== h.protocol ? h.protocol + "//" + h.host : "null", h.href = h.toString()
        }

        function I(t, e, n) {
            var g = this;
            switch (t) {
                case "query":
                    "string" == typeof e && e.length && (e = (n || a.parse)(e)), g[t] = e;
                    break;
                case "port":
                    g[t] = e, i(e, g.protocol) ? e && (g.host = g.hostname + ":" + e) : (g.host = g.hostname, g[t] = "");
                    break;
                case "hostname":
                    g[t] = e, g.port && (e += ":" + g.port), g.host = e;
                    break;
                case "host":
                    g[t] = e, /:\d+$/.test(e) ? (e = e.split(":"), g.port = e.pop(), g.hostname = e.join(":")) : (g.hostname = e, g.port = "");
                    break;
                case "protocol":
                    g.protocol = e.toLowerCase(), g.slashes = !n;
                    break;
                case "pathname":
                case "hash":
                    if (e) {
                        var o = "pathname" === t ? "/" : "#";
                        g[t] = e.charAt(0) !== o ? o + e : e
                    } else g[t] = e;
                    break;
                default:
                    g[t] = e
            }
            for (var A = 0; A < c.length; A++) {
                var C = c[A];
                C[4] && (g[C[1]] = g[C[1]].toLowerCase())
            }
            return g.origin = g.protocol && g.host && "file:" !== g.protocol ? g.protocol + "//" + g.host : "null", g.href = g.toString(), g
        }

        function r(t) {
            t && "function" == typeof t || (t = a.stringify);
            var e, n = this,
                g = n.protocol;
            g && ":" !== g.charAt(g.length - 1) && (g += ":");
            var o = g + (n.slashes ? "//" : "");
            return n.username && (o += n.username, n.password && (o += ":" + n.password), o += "@"), o += n.host + n.pathname, e = "object" == typeof n.query ? t(n.query) : n.query, e && (o += "?" !== e.charAt(0) ? "?" + e : e), n.hash && (o += n.hash), o
        }
        var i = n(83),
            a = n(84),
            s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
            l = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
            c = [
                ["#", "hash"],
                ["?", "query"],
                function (t) {
                    return t.replace("\\", "/")
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            u = {
                hash: 1,
                query: 1
            };
        C.prototype = {
            set: I,
            toString: r
        }, C.extractProtocol = o, C.location = g, C.qs = a, t.exports = C
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    "use strict";
    t.exports = function (t, e) {
        if (e = e.split(":")[0], t = +t, !t) return !1;
        switch (e) {
            case "http":
            case "ws":
                return 80 !== t;
            case "https":
            case "wss":
                return 443 !== t;
            case "ftp":
                return 21 !== t;
            case "gopher":
                return 70 !== t;
            case "file":
                return !1
        }
        return 0 !== t
    }
}, function (t, e) {
    "use strict";

    function n(t) {
        return decodeURIComponent(t.replace(/\+/g, " "))
    }

    function g(t) {
        for (var e, g = /([^=?&]+)=?([^&]*)/g, o = {}; e = g.exec(t);) {
            var A = n(e[1]),
                C = n(e[2]);
            A in o || (o[A] = C)
        }
        return o
    }

    function o(t, e) {
        e = e || "";
        var n = [];
        "string" != typeof e && (e = "?");
        for (var g in t) A.call(t, g) && n.push(encodeURIComponent(g) + "=" + encodeURIComponent(t[g]));
        return n.length ? e + n.join("&") : ""
    }
    var A = Object.prototype.hasOwnProperty;
    e.stringify = o, e.parse = g
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = ["app", "store", "utils", function t(e, n, g) {
            function o() {
                return n.breakpoints.default
            }

            function C() {
                return n.breakpoints.current
            }

            function I(t, e) {
                return e = e || C(), e > o() ? i(t, e) : s(t, e)
            }

            function r(t, e) {
                return e = e || C(), e > o() ? a(t, e) : l(t, e)
            }

            function i(t, e) {
                for (var n = e || C(); n >= 0; n--)
                    if (t[n]) return t[n];
                return null
            }

            function a(t, e) {
                for (var n = e || C(); n >= 0; n--)
                    if (t[n]) return n;
                return 0
            }

            function s(t, e) {
                for (var n = e || C(); n < t.length; n++)
                    if (t[n]) return t[n];
                return null
            }

            function l(t, e) {
                for (var n = e || C(); n < t.length; n++)
                    if (t[n]) return n;
                return 0
            }

            function c(t, e, n) {
                for (var g = e + 1; g < n; g++)
                    if (t[g]) return !0;
                return !1
            }
            return (0, A.default)(this, t), {
                defaultBreakpoint: o,
                currentBreakpoint: C,
                getMediaValue: I,
                getMediaIndex: r,
                getLowerMediaValue: i,
                getLowerMediaIndex: a,
                getHigherMediaValue: s,
                getHigherMediaIndex: l,
                hasValueBetween: c
            }
        }];
    e.default = C
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = n(87),
        i = g(r),
        a = function () {
            function t(e, n, g, o) {
                (0, A.default)(this, t), this.app = e, this.$timeout = n, this.$templateCache = g, this.ShortcodeEvent = o
            }
            return t.$inject = ["app", "$timeout", "$templateCache", "ShortcodeEvent"], (0, I.default)(t, [{
                key: "instantiate",
                value: function (t, e, n) {
                    return new i.default(t, e, n)
                }
            }, {
                key: "create",
                value: function (t, e, n) {
                    var g = this.instantiate(t, e, n);
                    return g.$$new = !0, g
                }
            }, {
                key: "move",
                value: function (t, e, n) {
                    var g = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = e.addChild(t, n, g);
                    return o.$$moved = !0, t.$parentId !== o.$parentId && (this.app.trigger(this.ShortcodeEvent.DETACHED, t), o.$$new = !!o.data.template || !!this.$templateCache.get(o.$id)), this.app.trigger(this.ShortcodeEvent.MOVED, o), o
                }
            }, {
                key: "duplicate",
                value: function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        g = t.duplicate(e, n);
                    return g.$$new = !0, g.data.template || this.$templateCache.put(g.$id, this.$templateCache.get(t.$id)), g
                }
            }, {
                key: "remove",
                value: function (t) {
                    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    if (this.app.trigger(this.ShortcodeEvent.DETACHED, t), this.app.states.selectedShortcode && this.app.states.selectedShortcode.isSelfOrDescendantOf(t) && (this.app.outlineShortcode(null), this.app.selectShortcode(null), this.app.configureShortcode(null)), t.isRoot)
                        for (var n = t.children.length - 1; n >= 0; n--) t.children[n].remove(e);
                    else t.remove(e)
                }
            }]), t
        }();
    e.default = a
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t, e) {
        var n = Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        return e ? t.tag + "-" + n : "root"
    }

    function A(t, e) {
        return null === t ? t : "string" == typeof t && "" === t ? t : isNaN(t) ? angular.isUndefined(t) ? e.default : (Array.isArray(t) && (t = t.join(e.config ? e.config.delimiter : ",")), String(t)) : "string" != typeof t || !/^0\d/.test(t) && "+" !== t.charAt(0) ? Number(t) : String(t)
    }

    function C(t, e) {
        var n = {};
        for (var g in t) "$" !== g.charAt(0) && "children" !== g && t.hasOwnProperty(g) && (n[g] = angular.copy(t[g]));
        if (t.isParent) {
            n.children = [];
            for (var o = 0; o < t.children.length; o++) n.children.push(C(t.children[o], e))
        }
        return t.$textContent && (n.content = t.$textContent), e && e(n, t), n
    }

    function I(t) {
        var e = null,
            n = angular.copy(t);
        if (angular.isDefined(n.children))
            for (var g in n.children) e = I(m.store.shortcodes[n.children[g].tag].presets[0].content), n.children[g].isparent && !n.children[g].children.length && (n.children[g] = angular.merge({}, e, n.children[g])), n.children[g].content && "" === n.children[g].content && (n.children[g].content = e.content);
        return n
    }

    function r(t) {
        var e = [];
        return t.children && t.children.forEach(function (t) {
            e.push(t), e.concat(r(t))
        }), e
    }

    function i(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.store.breakpoints.current;
        return e > m.store.breakpoints.default ? a(t, e) : s(t, e)
    }

    function a(t) {
        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.store.breakpoints.current, n = e; n >= 0; n--)
            if (null !== t[n]) return t[n];
        return null
    }

    function s(t) {
        for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.store.breakpoints.current, n = e; n < t.length; n++)
            if (null !== t[n]) return t[n];
        return null
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var l = n(61),
        c = g(l),
        u = n(14),
        d = g(u),
        p = n(12),
        f = g(p),
        h = n(13),
        v = g(h),
        m = n(32),
        b = n(88),
        $ = {},
        y = void 0,
        w = function () {
            function t(e, n, g) {
                var C = this;
                (0, f.default)(this, t), angular.merge(this, e), this.responsiveValues = {}, this.optionValues = {}, this.$isReady = !1;
                var I = this;
                this.$id = g || e.$id || o(e, n), this.$parentId = n ? n.$id : e.$parentId || null, this.$textContent = e.content || "", this.data = angular.copy(m.store.shortcodes[this.tag]), n && angular.extend(this.data, n.data.children), this.states = {}, this.options = {
                    get $responsive() {
                        return I.responsiveValues
                    },
                    set $responsive(t) {
                        I.responsiveValues = t
                    }
                };
                for (var r in e.options.$responsive) {
                    this.responsiveValues[r] = [];
                    for (var a = 0; a < e.options.$responsive[r].length; a++) this.responsiveValues[r][a] = A(e.options.$responsive[r][a], this.data.options.named[r])
                }
                var s = function (t) {
                    return "$" === t.charAt(0) ? "continue" : ((0, d.default)(C.options, t, {
                        enumerable: !0,
                        get: function () {
                            var e = C.data.options.named[t];
                            return e.responsive ? i(C.responsiveValues[t]) : C.optionValues[t]
                        },
                        set: function (e) {
                            var n = C.data.options.named[t],
                                g = A(e, n),
                                o = m.store.breakpoints.current;
                            if (C.$isReady && m.store.enabled && (clearTimeout(y), $[C.$id] || ($[C.$id] = {}), $[C.$id][t] || ($[C.$id][t] = {
                                    optionValue: angular.copy(C.optionValues[t]),
                                    responsiveValue: angular.copy(C.responsiveValues[t])
                                }), y = setTimeout(function () {
                                    var e = (0, c.default)($);
                                    1 === e.length && 1 === (0, c.default)($[e[0]]).length ? m.store.$addAction("updateOption", {
                                        id: C.$id,
                                        name: t,
                                        override: !1,
                                        optionValue: $[e[0]][t].optionValue,
                                        responsiveValue: $[e[0]][t].responsiveValue,
                                        key: "updateOption-" + e[0] + "-" + t + "-" + o
                                    }) : e.length && m.store.$addAction("updateMultipleOptions", {
                                        mutations: $,
                                        override: !1,
                                        key: "updateMultipleOptions-" + e.join("-") + "-" + o
                                    }), $ = {}, C.apply()
                                }, 250)), C.optionValues[t] = g, n.responsive) {
                                var I = i(C.responsiveValues[t]);
                                g !== I && (C.responsiveValues[t][o] = g)
                            }
                        }
                    }), void(C.options[t] = e.options[t]))
                };
                for (var l in e.options) {
                    s(l)
                }
                this.data.options.flat.forEach(function (t) {
                    null === C.options[t.$name] && (C.options[t.$name] = t.default), t.$isValid(C.options, n) || (C.options[t.$name] = null, t.responsive && C.options.$responsive[t.$name].map(function () {
                        return null
                    }))
                }), m.store.shortcode[this.$id] = this, e.hasOwnProperty("children") && (this.children = e.children.map(function (e) {
                    return new t(e, C)
                })), this.$isReady = !0
            }
            return (0, v.default)(t, [{
                key: "apply",
                value: function () {
                    this.$scope && !this.$scope.$$phase && this.$scope.$apply()
                }
            }, {
                key: "addChild",
                value: function (e, n) {
                    var g = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        o = void 0;
                    if (e instanceof t)
                        if (e.$parentId !== this.$id) {
                            var A = e.$parentId,
                                r = e.index;
                            o = new t(C(e.detatch(), function (t, e) {
                                t.$id = e.$id
                            }), this, e.$id), g && m.store.$addAction("moveChild", {
                                key: "moveChild-" + o.$id + "-" + A + "-" + r,
                                id: o.$id,
                                parentId: this.$id,
                                index: n,
                                fromIndex: r,
                                fromParentId: A
                            })
                        } else {
                            var i = e.index;
                            n -= n > e.index ? 1 : 0, o = e.detatch(), g && m.store.$addAction("reorderChildren", {
                                key: "reorderChildren-" + e.$id + "-" + i + "-" + n,
                                parentId: this.$id,
                                id: e.$id,
                                toIndex: n,
                                fromIndex: i
                            })
                        }
                    else o = new t(I(e), this), g && m.store.$addAction("addChild", {
                        key: "addChild-" + this.$id + "-" + o.$id,
                        id: o.$id,
                        parentId: this.$id,
                        index: n,
                        data: o.copy(function (t, e) {
                            t.$id = e.$id
                        })
                    });
                    if (!this.allows(o)) throw Error(o.data.name + " is not allowed in " + this.data.name);
                    var a = n >= 0 ? n : this.children.length;
                    return this.children.splice(a, 0, o), o
                }
            }, {
                key: "childAt",
                value: function (t) {
                    return this.isParent ? this.children[t] : null
                }
            }, {
                key: "removeChild",
                value: function (t) {
                    return this.isParent ? this.children[t].remove() : null
                }
            }, {
                key: "replaceChild",
                value: function (e, n) {
                    return this.isParent ? (this.children[n] = e instanceof t ? e : new t(e, this), this.children[n]) : null
                }
            }, {
                key: "replaceWith",
                value: function (t) {
                    return this.isRoot ? null : this.parent.replaceChild(t, this.index)
                }
            }, {
                key: "is",
                value: function (t) {
                    return this.data.tag === t
                }
            }, {
                key: "isChildOf",
                value: function (t) {
                    return this.parent === t
                }
            }, {
                key: "isDescendantOf",
                value: function (t) {
                    return t.descendants.indexOf(this) > -1
                }
            }, {
                key: "isSelfOrDescendantOf",
                value: function (t) {
                    return t.descendantsAndSelf.indexOf(this) > -1
                }
            }, {
                key: "isAncestorOf",
                value: function (t) {
                    return this.descendants.indexOf(t) > -1
                }
            }, {
                key: "isSelfOrAncestorOf",
                value: function (t) {
                    return this.descendantsAndSelf.indexOf(t) > -1
                }
            }, {
                key: "copy",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = {};
                    for (var n in this) _.isFunction(this[n]) || "$" !== n.charAt(0) && "optionValues" !== n && "responsiveValues" !== n && "children" !== n && "data" !== n && this.hasOwnProperty(n) && (e[n] = angular.copy(this[n]));
                    if (this.$textContent && (e.content = this.$textContent), this.isParent) {
                        e.children = [];
                        for (var g = 0; g < this.children.length; g++) e.children.push(this.children[g].copy(t))
                    }
                    return t && t(e, this), e
                }
            }, {
                key: "duplicate",
                value: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = this.copy(function (t, n) {
                            e && (t.$id = n.$id)
                        });
                    return this.parent.addChild(n, t || this.index + 1)
                }
            }, {
                key: "detatch",
                value: function () {
                    return this.parent ? this.parent.children.splice(this.index, 1)[0] : null
                }
            }, {
                key: "remove",
                value: function () {
                    var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    this.descendants.forEach(function (t) {
                        delete m.store.shortcode[t.$id]
                    }), this.parent && (delete m.store.shortcode[this.$id], t && m.store.$addAction("removeChild", {
                        id: this.$id,
                        index: this.index,
                        parentId: this.parent.$id,
                        key: "removeChild-" + this.$id,
                        data: this.copy(function (t, e) {
                            t.$id = e.$id
                        })
                    })), this.detatch()
                }
            }, {
                key: "allows",
                value: function (t) {
                    return (0, b.isAllowed)(t, this)
                }
            }, {
                key: "content",
                get: function () {
                    return this.$textContent || ""
                },
                set: function (t) {
                    t !== this.content && this.$isReady && m.store.enabled && m.store.$addAction("updateContent", {
                        id: this.$id,
                        override: !1,
                        content: this.content,
                        key: "updateContent-" + this.$id
                    }), this.$textContent = t
                }
            }, {
                key: "allowed",
                get: function () {
                    return (0, b.allowedShortcodes)(this)
                }
            }, {
                key: "presets",
                get: function () {
                    var t = this.parent.allowed,
                        e = angular.copy(this.data.presets);
                    return e.forEach(function (n, g) {
                        var o = r(n.content);
                        return o.unshift(n.content), t.hasOwnProperty(n.content.tag) ? void o.forEach(function (t) {
                            t.tag === parent.tag && m.store.shortcodes[t.tag].nested !== !0 && e.splice(g, 1)
                        }) : e.splice(g, 1)
                    }), e
                }
            }, {
                key: "isParent",
                get: function () {
                    return !!this.children
                }
            }, {
                key: "isChild",
                get: function () {
                    return !!this.parent
                }
            }, {
                key: "isEmpty",
                get: function () {
                    return this.isParent && 0 === this.children.length
                }
            }, {
                key: "isRoot",
                get: function () {
                    return "_root" === this.tag
                }
            }, {
                key: "parent",
                get: function () {
                    return this.$parentId ? m.store.shortcode[this.$parentId] : null
                }
            }, {
                key: "index",
                get: function () {
                    return this.parent ? this.parent.children.indexOf(this) : 0
                }
            }, {
                key: "depth",
                get: function () {
                    return this.ancestors.length
                }
            }, {
                key: "ancestors",
                get: function () {
                    var t = [];
                    return this.parent && (t.push(this.parent), t = t.concat(this.parent.ancestors)), t
                }
            }, {
                key: "ancestorsAndSelf",
                get: function () {
                    var t = this.ancestors;
                    return t.unshift(this), t
                }
            }, {
                key: "descendants",
                get: function () {
                    var t = [];
                    if (this.isParent)
                        for (var e = 0; e < this.children.length; e++) t.push(this.children[e]), t = t.concat(this.children[e].descendants);
                    return t
                }
            }, {
                key: "descendantsAndSelf",
                get: function () {
                    var t = this.descendants;
                    return t.unshift(this), t
                }
            }, {
                key: "siblings",
                get: function () {
                    var t = this;
                    return this.parent ? this.parent.children.filter(function (e) {
                        return e !== t
                    }) : []
                }
            }, {
                key: "nextSibling",
                get: function () {
                    return this.parent && this.parent.children[this.index + 1] ? this.parent.children[this.index + 1] : null
                }
            }, {
                key: "previousSibling",
                get: function () {
                    return this.parent && this.parent.children[this.index - 1] ? this.parent.children[this.index - 1] : null
                }
            }, {
                key: "siblingsAndSelf",
                get: function () {
                    return this.parent ? this.parent.children : [this]
                }
            }]), t
        }();
    e.default = w
}, function (t, e, n) {
    "use strict";

    function g(t, e) {
        return !e.isSelfOrDescendantOf(t) && (!t.descendants.filter(function (t) {
            return t.data.nested === !1 && t.tag === e.tag
        }).length && e.allowed.hasOwnProperty(t.tag))
    }

    function o(t) {
        var e = t.ancestorsAndSelf,
            n = {};
        if (t.data.allow.length) return t.data.allow.reduce(function (t, e) {
            return A.store.shortcodes[e] && (t[e] = A.store.shortcodes[e]), t
        }, {});
        var g = function (g) {
            var o = A.store.shortcodes[g];
            return o.hidden ? "continue" : o.require.length && o.require.indexOf(t.tag) === -1 ? "continue" : o.nested === !1 && t.tag === o.tag ? "continue" : o.nested === !1 && e.filter(function (t) {
                return t.tag === o.tag
            }).length ? "continue" : void(n[o.tag] = o)
        };
        for (var o in A.store.shortcodes) {
            g(o)
        }
        return n
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isAllowed = g, e.allowedShortcodes = o;
    var A = n(32)
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = function () {
            function t(e, n, g, o, C) {
                var I = this;
                (0, A.default)(this, t), this.store = e, this.$iframe = n, this.$timeout = C, g.addEventListener("resize", function () {
                    return I.updateOffsets()
                }), g.addEventListener("scroll", function () {
                    return I.updateOffsets()
                }), this.updateOffsets(!0, 0)
            }
            return t.$inject = ["store", "$iframe", "$window", "$document", "$timeout"], (0, I.default)(t, [{
                key: "add",
                value: function (t, e) {
                    var n = angular.extend({
                        name: t,
                        element: e.shortcode.$element,
                        shortcode: e.shortcode,
                        target: e.target || "center" === t ? e.shortcode : e.shortcode.parent,
                        droppable: !0,
                        addable: !0,
                        active: !0
                    }, e);
                    n.offsets = n.element.outerOffset(), this.store.targets.push(n)
                }
            }, {
                key: "enable",
                value: function (t) {
                    var e = this;
                    if (angular.isArray(t)) return t.forEach(function (t) {
                        return e.enable(t)
                    });
                    for (var n = 0; n < this.store.targets.length; n++) this.store.targets[n].target === t && (this.store.targets[n].active = !0)
                }
            }, {
                key: "disable",
                value: function (t) {
                    var e = this;
                    if (angular.isArray(t)) return t.forEach(function (t) {
                        return e.disable(t)
                    });
                    for (var n = 0; n < this.store.targets.length; n++) this.store.targets[n].target === t && (this.store.targets[n].active = !1)
                }
            }, {
                key: "remove",
                value: function (t) {
                    var e = t.descendantsAndSelf;
                    this.store.targets = this.store.targets.reduce(function (t, n) {
                        return e.indexOf(n.shortcode) < 0 && t.push(n), t
                    }, [])
                }
            }, {
                key: "removeElement",
                value: function (t) {
                    this.store.targets = this.store.targets.reduce(function (e, n) {
                        return n.element.get(0) !== t && e.push(n), e
                    }, [])
                }
            }, {
                key: "enableElement",
                value: function (t) {
                    for (var e = this, n = 0; n < this.store.targets.length; n++) this.store.targets[n].element.get(0) === t && (this.store.targets[n].active = !0, this.store.targets[n].shortcode.descendants.forEach(function (t) {
                        t.$element && e.enableElement(t.$element.get(0))
                    }))
                }
            }, {
                key: "disableElement",
                value: function (t) {
                    for (var e = this, n = 0; n < this.store.targets.length; n++) this.store.targets[n].element.get(0) === t && (this.store.targets[n].active = !1, this.store.targets[n].shortcode.descendants.forEach(function (t) {
                        t.$element && e.disableElement(t.$element.get(0))
                    }))
                }
            }, {
                key: "find",
                value: function (t, e) {
                    for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 50, o = [], A = !!this.store.isDragging, C = 0; C < this.store.targets.length; C++) {
                        var I = this.store.targets[C],
                            r = I.element[0].ownerDocument.defaultView,
                            i = t,
                            a = e,
                            s = void 0,
                            l = void 0,
                            c = void 0,
                            u = void 0,
                            d = void 0;
                        if (I.active && ("center" !== I.name || I.shortcode.isEmpty) && (!A || I.droppable) && (A || I.addable) && (A || r.frameElement))
                            if (r) {
                                switch (r.frameElement && angular.isDefined(this.frameOffsets) && (i -= this.frameOffsets.left, a -= this.frameOffsets.top), I.name) {
                                    case "top":
                                        d = I.shortcode.index, c = I.offsets.left + I.offsets.width / 2, u = I.offsets.top, s = n ? c : i, l = u;
                                        break;
                                    case "right":
                                        d = I.shortcode.index + 1, c = I.offsets.right, u = I.offsets.top + I.offsets.height / 2, s = I.offsets.right, l = n ? u : a;
                                        break;
                                    case "bottom":
                                        d = I.shortcode.index + 1, c = I.offsets.left + I.offsets.width / 2, u = I.offsets.bottom, s = n ? c : i, l = u;
                                        break;
                                    case "left":
                                        d = I.shortcode.index, c = I.offsets.left, u = I.offsets.top + I.offsets.height / 2, s = c, l = n ? u : a;
                                        break;
                                    case "center":
                                        d = 0, c = c = I.offsets.left + I.offsets.width / 2, u = u = I.offsets.top + I.offsets.height / 2
                                }
                                var p = {
                                        fromSide: Math.sqrt(Math.pow(Math.abs(s - i), 2) + Math.pow(Math.abs(l - a), 2)),
                                        fromCenter: Math.sqrt(Math.pow(Math.abs(c - i), 2) + Math.pow(Math.abs(u - a), 2))
                                    },
                                    f = I.shortcode.isEmpty,
                                    h = f ? 0 : g,
                                    v = this.isInside(I, i, a, h),
                                    m = this.isInside(I, i, a),
                                    b = f ? v : p.fromSide < h;
                                v && b && o.push({
                                    target: I.target || ("center" !== I.name ? I.shortcode.parent : I.shortcode),
                                    insideLimit: v,
                                    insideElement: m,
                                    element: I.element,
                                    shortcode: I.shortcode,
                                    name: I.name,
                                    distance: p,
                                    index: d
                                })
                            } else this.removeElement(I.element.get(0))
                    }
                    return _.chain(o).sortBy(function (t) {
                        return -t.target.ancestors.length
                    }).sortBy(function (t) {
                        return t.distance.fromCenter
                    }).value()
                }
            }, {
                key: "isInside",
                value: function (t, e, n) {
                    var g = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        o = {
                            x: g,
                            y: g
                        },
                        A = Math.min(t.offsets.left - o.x, t.offsets.right + o.x),
                        C = Math.max(t.offsets.left - o.x, t.offsets.right + o.x),
                        I = Math.min(t.offsets.top - o.y, t.offsets.bottom + o.y),
                        r = Math.max(t.offsets.top - o.y, t.offsets.bottom + o.y);
                    return A <= e && e <= C && I <= n && n <= r
                }
            }, {
                key: "updateOffsets",
                value: function () {
                    var t = this,
                        e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250;
                    this.$timeout.cancel(this.store.__updateTargets), this.store.__updateTargets = this.$timeout(function () {
                        t.frameOffsets = t.$iframe().get(0).getBoundingClientRect();
                        for (var n = 0; n < t.store.targets.length; n++) {
                            var g = t.store.targets[n];
                            (e || g.active && g.element[0].ownerDocument.defaultView === window) && ("center" === g.name && g.shortcode.isEmpty && g.shortcode.$content && g.element[0].ownerDocument.defaultView.frameElement ? g.offsets = g.shortcode.$content.outerOffset({
                                includeMargins: !0
                            }) : g.element ? g.offsets = g.element.outerOffset({
                                includeMargins: !0
                            }) : t.store.remove(g.shortcode))
                        }
                        delete t.store.__updateTargets
                    }, n, !1)
                }
            }]), t
        }();
    e.default = r
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = ["store", "$document", "$window", "$iframe", function t(e, n, g, o) {
            (0, A.default)(this, t), this.arrayPrefix = function (t, e) {
                return t.reduce(function (t, n) {
                    return t.push("" + e + n), t
                }, [])
            }, this.isIframe = function () {
                return !!g.frameElement
            }, this.getGlobalCoordinates = function (t, e, n) {
                if (t.frameElement) {
                    var g = t.frameElement.getBoundingClientRect();
                    e += g.left, n += g.top
                }
                return {
                    x: e,
                    y: n
                }
            }, this.camelCase = function (t, e) {
                return t = e ? t.charAt(0).toUpperCase() + t.slice(1) : t, jQuery.camelCase(t.replace(/\_|\:/g, "-", !0))
            }, this.kebabCase = function (t) {
                return t.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g, function (t) {
                    return t.toLowerCase()
                })
            }, this.elementFromPoint = function (t, e) {
                var n = g.parent || g,
                    A = n.document,
                    C = o().get(0).contentWindow,
                    I = o().get(0).contentDocument,
                    r = t,
                    i = e,
                    a = o().get(0).getBoundingClientRect(),
                    s = t - a.left,
                    l = e - a.top,
                    c = n.angular.element(A.elementFromPoint(r, i)),
                    u = C.angular.element(I.elementFromPoint(s, l));
                return u.length ? u : c
            }, this.shortcodeFromPoint = function (t, n) {
                return this.elementFromPoint(t, n).shortcode() || e.postContent
            }
        }];
    e.default = C
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = function () {
            function t(e, n) {
                var g = this;
                (0, A.default)(this, t), this.app = e, this.$editor = (window.parent || window).angular.element("wp-editor"), this.$iframe = this.$editor.find("iframe").get(0).contentWindow, n.addEventListener("message", function (t) {
                    return g.onMessage(t)
                }, !1)
            }
            return t.$inject = ["app", "$window"], (0, I.default)(t, [{
                key: "onMessage",
                value: function (t) {
                    if ("uxBuilderWpEditor" === t.data.source) switch (t.data.type) {
                        case "change":
                            this.updateContent(t.data.content);
                            break;
                        case "discard":
                            this.discard();
                            break;
                        case "hide":
                            this.close()
                    }
                }
            }, {
                key: "open",
                value: function () {
                    this.$editor.addClass("is-visible"), this.originalContent = this.app.states.selectedShortcode.content, this.$iframe.postMessage({
                        source: "uxbuilder",
                        type: "setContent",
                        content: this.originalContent
                    }, "*")
                }
            }, {
                key: "updateContent",
                value: function (t) {
                    this.app.states.selectedShortcode.content = t, this.app.states.selectedShortcode.apply()
                }
            }, {
                key: "discard",
                value: function () {
                    this.updateContent(this.originalContent), this.originalContent = "", this.close()
                }
            }, {
                key: "close",
                value: function () {
                    this.$editor.removeClass("is-visible")
                }
            }, {
                key: "editor",
                get: function () {
                    return this.$iframe.wp.editor
                }
            }]), t
        }();
    e.default = r
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = function () {
            function t(e) {
                var n = this;
                (0, A.default)(this, t), this.$media = (window.parent || window).angular.element("wp-media"), this.$iframe = this.$media.find("iframe").get(0).contentWindow, e.addEventListener("message", function (t) {
                    return n.onMessage(t)
                }, !1)
            }
            return t.$inject = ["$window"], (0, I.default)(t, [{
                key: "onMessage",
                value: function (t) {
                    if ("uxBuilderWpMedia" === t.data.source) switch (t.data.type) {
                        case "close":
                            this.close();
                            break;
                        case "select":
                            "function" == typeof this.cb && this.cb(t.data.attachment)
                    }
                }
            }, {
                key: "open",
                value: function (t) {
                    this.$media.addClass("is-active")
                }
            }, {
                key: "close",
                value: function () {
                    this.$media.removeClass("is-active")
                }
            }, {
                key: "media",
                get: function () {
                    return this.$iframe.wp.media
                }
            }]), t
        }();
    e.default = r
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = ["$angular", "$window", function t(e, n) {
            return (0, A.default)(this, t),
                function () {
                    return e.element((n.parent.document || document).getElementsByTagName("iframe")[0])
                }
        }];
    e.default = C
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o),
        C = n(95),
        I = g(C);
    A.default.controller("ShortcodeController", I.default)
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = function () {
            function t(e, n, g, o, C, I, r, i, a, s) {
                var l = this;
                (0, A.default)(this, t), this.app = e, this.store = n, this.shortcode = g, this.targets = o, this.$scope = I;
                var c = !!g.data.draggable && C(g);
                if (g.data.addableSpots.map(function (t) {
                        o.add(t, {
                            shortcode: g
                        })
                    }), r.find("img").attr("draggable", "false"), r.on("click", function (t) {
                        t.stopPropagation(), t.preventDefault(), n.isDragging || (e.configureShortcode(g), e.apply())
                    }), this.onOptionsChanged(g.options, null, !0), I.$watchCollection(function () {
                        return g.options
                    }, function (t, n) {
                        t !== n && (l.store.isSaved = !1, l.app.trigger(s.CHANGED, {
                            shortcode: g,
                            options: t,
                            oldOptions: n
                        }), l.onOptionsChanged(t, n)), e.states.selectedShortcode === g && l.app("tools").fixPositions()
                    }), angular.isDefined(g.content)) {
                    var u = !1;
                    I.$watch(function () {
                        return g.content
                    }, function (t, n) {
                        t !== n && (a.cancel(u), u = a(function () {
                            e.trigger("shortcode-content-change", g)
                        }, 0, !1))
                    })
                }
                I.$watch(function () {
                    return e.states.selectedShortcode
                }, function (t) {
                    r.toggleClass("uxb-selected", t === g)
                }), e.states.selectedShortcode && e.states.selectedShortcode.$id === g.$id && e.selectShortcode(g), g.$$new && a(function () {
                    return e.trigger(s.ATTACHED, g)
                }, 0, !1), g.$$new = !1, g.$$moved = !1, I.$on("$destroy", function () {
                    o.remove(g), r.off("click"), c && c.element && c.destroy()
                })
            }
            return t.$inject = ["app", "store", "shortcode", "targets", "draggable", "$scope", "$element", "$iframe", "$timeout", "ShortcodeEvent"], (0, I.default)(t, [{
                key: "onOptionsChanged",
                value: function (t, e, n) {
                    var g = !1;
                    for (var o in t)
                        if ("$" !== o.charAt(0)) {
                            var A = this.shortcode.data.options.named[o],
                                C = e ? e[o] : "",
                                I = null === t[o] && C === A.default;
                            if (n || !I && t[o] !== C)
                                if (A.onChange) {
                                    var r = A.apply(this.shortcode.$element, t[o], C);
                                    g = g || !r
                                } else g = !0
                        }! this.shortcode.$noRecompile && !this.shortcode.data.template && g && e && e !== t && this.$scope.$$recompile()
                }
            }]), t
        }();
    e.default = r
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        var e = n(97);
        angular.forEach(e.keys(), function (n) {
            t.put(n.replace("./", ""), e(n))
        })
    }
    o.$inject = ["$templateCache"];
    var A = n(7),
        C = g(A);
    C.default.run(o)
}, function (t, e, n) {
    function g(t) {
        return n(o(t))
    }

    function o(t) {
        return A[t] || function () {
            throw new Error("Cannot find module '" + t + "'.")
        }()
    }
    var A = {
        "./components/add-shortcode/add-shortcode.html": 98,
        "./components/app-actions/app-actions.html": 99,
        "./components/app-sidebar/app-sidebar.html": 100,
        "./components/app-tools/app-move-tool/app-move-tool.template.html": 101,
        "./components/app-tools/app-resize-tool/app-resize-tool.template.html": 102,
        "./components/app-tools/app-tools.html": 103,
        "./components/context-menu/context-menu.template.html": 104,
        "./components/shortcode-hierarchy-list-item/shortcode-hierarchy-list-item.html": 105,
        "./components/ux-option/types/checkbox.html": 106,
        "./components/ux-option/types/col-slider.html": 107,
        "./components/ux-option/types/colorpicker.html": 108,
        "./components/ux-option/types/gallery.html": 109,
        "./components/ux-option/types/group.html": 110,
        "./components/ux-option/types/image.html": 111,
        "./components/ux-option/types/margins.html": 112,
        "./components/ux-option/types/radio-buttons.html": 113,
        "./components/ux-option/types/radio-images.html": 114,
        "./components/ux-option/types/scrubfield.html": 115,
        "./components/ux-option/types/select.html": 116,
        "./components/ux-option/types/slider.html": 117,
        "./components/ux-option/types/text-editor.html": 118,
        "./components/ux-option/types/textarea.html": 119,
        "./components/ux-option/types/textfield.html": 120,
        "./components/ux-option/types/title.html": 121,
        "./components/ux-option/types/urlfield.html": 122,
        "./routes/home/home.html": 123,
        "./routes/settings/settings.html": 124,
        "./routes/shortcode/shortcode.html": 125,
        "./shortcodes/_loading.html": 126
    };
    g.keys = function () {
        return Object.keys(A)
    }, g.resolve = o, t.exports = g, g.id = 97
}, function (t, e) {
    t.exports = '<div ng-if="$ctrl.errorMessage" class="error-message">\n  {{ $ctrl.errorMessage }}\n</div>\n\n<div class="add-shortcode-selector">\n  <div class="add-shortcode-header">\n    <h2 class="title">添加内容</h2>\n    <nav class="add-shortcode-types">\n      <button type="button"\n        ng-click="$ctrl.showType(\'shortcodes\')"\n        ng-class="{ active: $ctrl.type === \'shortcodes\' }">\n        元素\n      </button>\n      <button type="button"\n        ng-if="$ctrl.shortcode.isRoot"\n        ng-click="$ctrl.showType(\'import\')"\n        ng-class="{ active: $ctrl.type === \'import\' }">\n        导入\n      </button>\n    </nav>\n  </div>\n\n  <div class="add-shortcode-items" ng-if="$ctrl.type === \'shortcodes\'">\n    \n    <div class="flatsome-studio-button" ng-if="$ctrl.flatsomeStudioIsActive">\n      <button type="button" class="wp-style alt button-large button-block"\n        ng-click="$ctrl.showFlatsomeStudio()">\n        <span class="dashicons dashicons-screenoptions"></span> Flatsome工作室\n      </button>\n      <hr />\n    </div>\n\n    <input class="filter-elements" type="text" placeholder="Search&hellip;" ng-model="$ctrl.filter.name">\n\n    <div class="add-shortcode-category"\n      ng-repeat="category in $ctrl.items"\n      ng-show="items.length">\n      <h3>{{:: category.name }}</h3>\n      <ul>\n        <li ng-repeat="item in items = (category.items | filter: $ctrl.filter)">\n          <button type="button" ng-click="$ctrl.add(item, 0)">\n            <img ng-if="item.thumbnail" ng-src="{{:: item.thumbnail }}" alt="{{:: item.name }}"/>\n            <span class="title">{{:: item.name }}</span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<template-importer ng-if="$ctrl.type === \'import\'"></template-importer>\n\n<div class="add-shortcode-presets">\n  <h3>预设</h3>\n  <div ng-class="{ \'is-visible\': $ctrl.isLoading }" class="loading-spinner"></div>\n  <ul ng-if="$ctrl.presets">\n    <li ng-class="{ active : $ctrl.currentPreset === $index }"\n      ng-repeat="preset in $ctrl.presets track by preset.name">\n      <button type="button"\n        title="{{:: preset.name }}"\n        ng-class="{ \'with-thumbnail\' : !!preset.thumbnail }"\n        ng-click="$ctrl.usePreset(preset.content); $ctrl.currentPreset = $index">\n        <img ng-if="preset.thumbnail" ng-src="{{:: preset.thumbnail }}" alt="{{:: preset.name }}">\n        <span class="title">{{:: preset.name }}</span>\n      </button>\n    </li>\n  </ul>\n  <button\n    type="button"\n    class="wp-style alt button-large button-block"\n    ng-click="$ctrl.stack.close()"\n    ng-if="$ctrl.presets">\n    应用\n  </button>\n</div>\n'
}, function (t, e) {
    t.exports = '<button\n  title="撤消"\n  type="button"\n  class="blank has-tooltip"\n  ng-click="$ctrl.undo()"\n  ng-disabled="$ctrl.canUndo() === false">\n  <span class="dashicons dashicons-undo"></span>\n  <div class="uxb-tooltip">撤消</div>\n</button>\n\n<button\n  title="重做"\n  type="button"\n  class="blank has-tooltip"\n  ng-click="$ctrl.redo()"\n  ng-disabled="$ctrl.canRedo() === false">\n  <span class="dashicons dashicons-redo"></span>\n  <div class="uxb-tooltip">重做</div>\n</button>\n\n<hr/>\n\n<button type="button"\n    class="blank has-tooltip"\n    title="{{:: breakpoint.title }}"\n    ng-click="$ctrl.setBreakpoint($index)"\n    ng-class="{ \'active\' : $ctrl.isActiveBreakpont($index) }"\n    ng-repeat="(name, breakpoint) in $ctrl.breakpoints.all track by breakpoint.width">\n    <span class="{{:: breakpoint.icon }}"></span>\n    <div class="uxb-tooltip">{{:: breakpoint.title }}</div>\n    <div class="has-breakpoint-values" ng-if="$ctrl.hasBreakpointValues($index)"></div>\n</button>\n\n<hr/>\n\n<button type="button"\n    class="blank has-tooltip"\n    title="{{:: action.tooltip }}"\n    ng-click="$ctrl.doAction(action)"\n    ng-repeat="action in $ctrl.actions">\n    <span class="{{:: action.icon }}"></span>\n    <div class="uxb-tooltip">{{:: action.tooltip }}</div>\n</button>\n'
}, function (t, e) {
    t.exports = '<app-sidebar-main class="animate-{{ $ctrl.routeAnimation }}">\n\n  <div class="title-row sidebar-top">\n  \t<div class="title-row-icon">\n\t  \t<button type="button"\n        title="退出生成器"\n        class="blank" ng-click="$ctrl.app.exit()"\n        ng-disabled="$ctrl.permissions.exit === false">\n\t   \t \t<span class="dashicons dashicons-no-alt"></span>\n\t\t  </button>\n  \t</div>\n  \t<div class="title-row-title">\n      {{ $ctrl.store.post.attributes.values.post_title }}\n    </div>\n  \t<div class="title-row-actions">\n  \t\t<button type="button" class="blank" ng-click="$ctrl.app.goto(\'/settings\')">\n\t      <span class="dashicons dashicons-admin-generic"></span>\n\t    </button>\n  \t</div>\n  </div><!-- Sidbar top -->\n\n  <div ui-view></div>\n\n  <div class="app-sidebar-footer">\n    <button type="button" class="blank app-sidebar-toggle" ng-click="$ctrl.toggle()">\n      <span class="dashicons dashicons-arrow-left-alt2"\n        ng-if="$ctrl.store.showSidebar === true"\n      ></span>\n      <span class="dashicons dashicons-arrow-right-alt2"\n        ng-if="$ctrl.store.showSidebar === false"\n      ></span>\n    </button>\n  </div> \n\n</app-sidebar-main>\n'
}, function (t, e) {
    t.exports = '<div class="uxb-move">\n  <div class="uxb-move-handle"\n    ng-if="$ctrl.shortcode"\n    ng-class="$ctrl.classNames($ctrl.shortcode)"\n    draggable-shortcode="$ctrl.shortcode">\n    <span class="uxb-move-icon dashicons dashicons-move"></span>\n  </div>\n</div>\n'
}, function (t, e) {
    t.exports = '<div class="uxb-resize uxb-resize-top"></div>\n<div class="uxb-resize uxb-resize-right"></div>\n<div class="uxb-resize uxb-resize-bottom"></div>\n<div class="uxb-resize uxb-resize-left"></div>\n'
}, function (t, e) {
    t.exports = '<app-outline-tool class="auto-size" shortcode="$ctrl.outlined"></app-outline-tool>\n<app-resize-tool class="auto-size" shortcode="$ctrl.outlined"></app-resize-tool>\n<app-move-tool class="auto-size" shortcode="$ctrl.outlined"></app-move-tool>\n<app-select-tool class="auto-size" shortcode="$ctrl.selected"></app-select-tool>\n<add-buttons></add-buttons>\n\n<div class="tools-addable">\n  <div class="line"></div>\n  <add-button\n    class="button"\n    index="$ctrl.index"\n    shortcode="$ctrl.addable">\n  </add-button>\n</div>\n'
}, function (t, e) {
    t.exports = '<div class="context-menu-menu" ng-click="$ctrl.hide()">\n  <shortcode-actions shortcode="$ctrl.shortcode"></shortcode-actions>\n</div>\n'
}, function (t, e) {
    t.exports = '<div class="hierarchy-title" ng-class="{ \'active\' : $ctrl.isActive(), [\'open\'] : $ctrl.shortcode.states.open, [\'visibility-\'+$ctrl.shortcode.options.visibility] : $ctrl.shortcode.options.visibility }">\n\n    <button type="button" class="hierarchy-toggle"\n        ng-if="$ctrl.shortcode.children"\n        ng-click="$ctrl.toggleChildren()">\n    </button>\n\n    <div class="hierarchy-name"\n        ng-click="$ctrl.selectShortcode()"\n        ng-mouseover="$ctrl.outlineShortcode()"\n        ng-dblclick="$ctrl.configureShortcode()">\n\n        {{:: $ctrl.shortcode.data.name }}\n\n        <span class="hierarchy-info" ng-bind="$ctrl.getShortcodeInfo()"></span>\n    </div>\n\n    <div class="hierarchy-tools">\n      <button type="button blank" ng-click="$ctrl.showContextMenu($event)">\n        <span class="dashicons dashicons-admin-generic"></span>\n      </button>\n    </div>\n</div>\n\n<shortcode-hierarchy-list\n  ng-if="$ctrl.shortcode.states.open"\n  ng-class="{ \'open\': $ctrl.shortcode.states.open }"\n  shortcode="$ctrl.shortcode">\n</shortcode-hierarchy-list>\n'
}, function (t, e) {
    t.exports = '<label>\n  <input type="checkbox"\n    ng-model="$ctrl.model"\n    ng-true-value="\'true\'"\n    ng-false-value="\'0\'">\n  <span></span>\n</label>\n'
}, function (t, e) {
    t.exports = '<div class="col-slider-wrap col-slider-cols-{{ $ctrl.model }}">\n\n\t<table class="col-slider-table">\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td ng-repeat="n in _.range($ctrl.option.min, $ctrl.option.max + 1) track by $index">{{:: n }}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n\n\t<input type="range"\n\t\tclass="col-slider-input"\n    min="{{:: $ctrl.option.min }}"\n    max="{{:: $ctrl.option.max }}"\n    ng-model="$ctrl.model">\n</div>\n'
}, function (t, e) {
    t.exports = '<ux-option-colorpicker\n  option="$ctrl.option"\n  model="$ctrl.model"\n></ux-option-colorpicker>\n\n<div ng-if="$ctrl.option.helpers" class="option-helpers option-helpers-colors">\n  <a href="javascript:"\n    title="Remove"\n    ng-click="$ctrl.model = null">\n    <span class="dashicons dashicons-no-alt"></span>\n  </a>\n  <a href="javascript:"\n    title="{{:: value.title }}"\n    style="background-color: {{:: value.value }}"\n    ng-repeat="(key, value) in $ctrl.option.helpers"\n    ng-click="$ctrl.model = value.value">\n  </a>\n</div>\n'
}, function (t, e) {
    t.exports = '<ux-option-gallery\n  option="$ctrl.option"\n  model="$ctrl.model"\n></ux-option-gallery>\n'
}, function (t, e) {
    t.exports = '<ux-option-group\n  option="$ctrl.option"\n  shortcode="$ctrl.shortcode"\n  responsive="$ctrl.$optionsCtrl.responsive"\n  model="$ctrl.$optionsCtrl.model"\n></ux-option-group>\n'
}, function (t, e) {
    t.exports = '<ux-option-image\n  option="$ctrl.option"\n  model="$ctrl.model"\n></ux-option-image>\n'
}, function (t, e) {
    t.exports = '<ux-option-margins\n  option="$ctrl.option"\n  model="$ctrl.model"\n></ux-option-margins>\n'
}, function (t, e) {
    t.exports = '<div class="option-button-group">\n\t<label ng-repeat="(value, data) in $ctrl.option.options"\n\t    ng-class="{ \'active\' : $ctrl.model === value }">\n\t    <input type="radio" value="{{:: value }}" ng-model="$ctrl.model"/>\n\t    <button type="button blank" title="{{:: data.title }}">\n\t    \t<span ng-if="data.icon" class="dashicons {{:: data.icon }}"></span>\n\t    \t<span ng-if="!data.icon"> {{:: data.title }}</span>\n\t    </button>\n\t</label>\n</div>\n'
}, function (t, e) {
    t.exports = '<label ng-repeat="(key, value) in $ctrl.option.options"\n    ng-class="{ \'active\' : $ctrl.model === key }">\n    <input type="radio" value="{{:: key }}" ng-model="$ctrl.model">\n    <img src="{{:: value.image }}" alt="{{:: value.title }}" title="{{:: value.title }}">\n</label>\n'
}, function (t, e) {
    t.exports = '<input type="text"\n  class="scrubfield"\n\tscrubfield="$ctrl.option"\n\tng-model="$ctrl.model"\n\tplaceholder="{{:: $ctrl.option.default }}"\n\tng-model-options="{\n        \'updateOn\': \'blur default\',\n        \'debounce\': {\n            \'blur\' : 0,\n            \'default\': 10\n        }\n    }">\n<div ng-if="$ctrl.option.helpers" class="option-helpers">\n\t<a \tng-repeat="(key, value) in $ctrl.option.helpers" href="javascript:"\n\t\tng-click="$ctrl.model = value.value">\n\t\t{{:: value.title }}\n\t</a>\n</div>\n'
}, function (t, e) {
    t.exports = '<ux-option-select\n  option="$ctrl.option"\n  value="$ctrl.model"\n></ux-option-select>\n'
}, function (t, e) {
    t.exports = '<div class="slider-wrap">\n\n  <input type="range"\n    ng-attr-min="{{:: $ctrl.option.min }}"\n    ng-attr-max="{{:: $ctrl.option.max }}"\n    ng-attr-step="{{:: $ctrl.option.step }}"\n    ng-attr-value="{{:: $ctrl.model }}"\n    ng-model="$ctrl.model">\n\n  <input type="number" to-number\n    ng-attr-min="{{:: $ctrl.option.min }}"\n    ng-attr-max="{{:: $ctrl.option.max }}"\n    ng-model="$ctrl.model">\n\n  <span class="slider-unit">{{:: $ctrl.option.unit }}</span>\n\n</div>\n';
}, function (t, e) {
    t.exports = '<ux-option-editor\n  option="$ctrl.option"\n  model="$ctrl.model"\n></ux-option-editor>\n'
}, function (t, e) {
    t.exports = '  <textarea\n    placeholder="{{::$ctrl.option.placeholder }}"\n    ng-model="$ctrl.model"\n    ng-model-options="{\n        updateOn: \'blur default\',\n        debounce: {\n            blur : 0,\n            default: 10\n        }\n    }"></textarea>\n'
}, function (t, e) {
    t.exports = '  <input type="text"\n    placeholder="{{::$ctrl.option.placeholder }}"\n    ng-model="$ctrl.model"\n    ng-model-options="{\n        updateOn: \'blur default\',\n        debounce: {\n            blur : 0,\n            default: 10\n        }\n    }">\n'
}, function (t, e) {
    t.exports = "{{:: $ctrl.option.heading }}\n"
}, function (t, e) {
    t.exports = '<ux-option-urlfield option="$ctrl.option"></ux-option-urlfield>\n'
}, function (t, e) {
    t.exports = '<app-sidebar-view class="home-view">\n\n  <view-header>\n\n  </view-header>\n\n  <view-body>\n    <shortcode-hierarchy-list shortcode="$ctrl.store.postContent"></shortcode-hierarchy-list>\n  </view-body>\n\n  <view-footer>\n    <button id="app-draft-button" type="button"\n      class="wp-style button-large button-block"\n      ng-if="$ctrl.store.post.status === \'draft\' || $ctrl.store.post.status === \'auto-draft\'"\n      ng-class="{ \'loading\': $ctrl.store.isSaving === \'draft\' }"\n      ng-disabled="$ctrl.permissions.save === false"\n      ng-click="$ctrl.save(\'draft\')">\n      保存草稿\n    </button>\n    <button id="app-private-button" type="button"\n      class="wp-style button-large button-block"\n      ng-if="$ctrl.store.post.status === \'private\'"\n      ng-class="{ \'loading\': $ctrl.store.isSaving === \'private\' }"\n      ng-disabled="$ctrl.permissions.save === false"\n      ng-click="$ctrl.save(\'private\')">\n      保存私人\n    </button>\n    <button id="app-save-button" type="button"\n      class="wp-style alt button-large button-block"\n      ng-class="{ \'loading\': $ctrl.store.isSaving && $ctrl.store.isSaving !== \'draft\' && $ctrl.store.isSaving !== \'private\'}"\n      ng-disabled="$ctrl.permissions.save === false"\n      ng-click="$ctrl.save()">\n      {{ $ctrl.saveButtonText }}\n    </button>\n    <button id="app-save-button" type="button"\n      class="wp-style button-large button-block button-exit animate-fade-in-right"\n      ng-if="$ctrl.store.isSaved"\n      ng-click="$ctrl.app.exit()">\n      &times;\n    </button>\n  </view-footer>\n\n</app-sidebar-view>\n'
}, function (t, e) {
    t.exports = '<app-sidebar-view class="settings-view">\n\n  <view-header>\n    <div class="title-row">\n      <div class="title-row-icon">\n          <button class="button-reset view-header-title" type="button" ng-click="$ctrl.   exit()">\n               <span class="dashicons dashicons-arrow-left-alt2"></span>\n          </button>\n      </div>\n      <div class="title-row-title"> 文章设置 </div>\n    </div>\n  </view-header>\n\n  <view-body>\n    <ux-options\n      options="$ctrl.post.attributes.options.tree"\n      model="$ctrl.post.attributes.values">\n    </ux-options>\n    <ux-options\n      options="$ctrl.post.meta.options.tree"\n      model="$ctrl.post.meta.values">\n    </ux-options>\n    <div class="box">\n      <h3 class="box-title">清除文章内容</h3>\n      <div class="box-content">\n        <button class="wp-style danger button-block" ng-click="$ctrl.clearContent()">清除中</button>\n      </div>\n    </div>\n  </view-body>\n\n  <view-footer>\n    <button type="button" class="wp-style blank" ng-click="$ctrl.discard()">\n      <span class="dashicons dashicons-no-alt"></span>丢弃\n    </button>\n    <button type="button" class="wp-style" ng-click="$ctrl.exit()">\n      <span class="dashicons dashicons-yes"></span>应用\n    </button>\n  </view-footer>\n\n</app-sidebar-view>\n'
}, function (t, e) {
    t.exports = '<app-sidebar-view class="shortcode-view">\n\n  <view-header>\n    <div class="title-row">\n      <div class="title-row-icon">\n         <button class="button-reset view-header-title" type="button" ng-click="$ctrl.exit(\'/\')">\n             <span class="dashicons dashicons-arrow-left-alt2"></span>\n         </button>\n      </div>\n      <div class="title-row-title"> {{ $ctrl.shortcode.data.name }} </div>\n      <div class="title-row-actions"></div>\n    </div>\n  </view-header>\n\n  <view-body>\n    <ux-options\n      options="$ctrl.options"\n      shortcode="$ctrl.shortcode"\n      responsive="$ctrl.responsiveValues"\n      model="$ctrl.shortcode.options">\n    </ux-options>\n  </view-body>\n\n  <view-footer>\n    <button type="button" class="wp-style outline" ng-click="$ctrl.discard()">\n      丢弃\n    </button>\n    <button type="button" class="wp-style" ng-click="$ctrl.exit()">\n      应用\n    </button>\n  </view-footer>\n\n</app-sidebar-view>\n'
}, function (t, e) {
    t.exports = '<div class="uxb-template-loading">加载中</div>\n'
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = n(7),
        i = g(r),
        a = function () {
            function t(e, n, g) {
                (0, A.default)(this, t), this.app = e, this.$scope = n, g.toggleClass("with-label", !!this.label)
            }
            return t.$inject = ["app", "$scope", "$element"], (0, I.default)(t, [{
                key: "addShortcode",
                value: function () {
                    this.app.outlineShortcode(null), this.app.selectShortcode(null), this.app.configureShortcode(null), this.app("stack").open('\n      <add-shortcode\n        shortcode="$ctrl.shortcode"\n        index="$ctrl.index"\n      ></add-shortcode>\n    ', this.$scope)
                }
            }]), t
        }();
    i.default.component("addButton", {
        controller: a,
        bindings: {
            shortcode: "<",
            label: "@",
            index: "<"
        },
        template: '\n    <button type="button" ng-click="$ctrl.addShortcode()">\n      <div class="wrapper">\n        <span class="icon">+</span>\n        <span class="label">{{:: $ctrl.label }}</span>\n      </div>\n    </button>\n  '
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o),
        C = n(129),
        I = g(C),
        r = n(102),
        i = g(r);
    A.default.component("appResizeTool", {
        controller: I.default,
        template: i.default,
        bindings: {
            shortcode: "<"
        }
    })
}, function (t, e, n) {
    (function (t) {
        "use strict";

        function g(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n(12),
            A = g(o),
            C = n(13),
            I = g(C),
            r = n(130),
            i = {
                top: {},
                right: {},
                bottom: {},
                left: {}
            },
            a = function () {
                function e(n, g, o, C, I, a) {
                    var s = this;
                    (0, A.default)(this, e), this.app = n, this.store = g, this.utils = o, this.$timeout = C, this.$element = a, this.shortcode = null;
                    for (var l in i) i[l].$element = a.find(".uxb-resize-" + l), i[l].draggable = new t.HammerJS(i[l].$element.get(0), {
                        edge: l
                    }), i[l].draggable.get("pan").set({
                        direction: (0, r.getPanDirection)(l)
                    }), i[l].draggable.on("hammer.input", this.onHammerInput.bind(this)), i[l].draggable.on("panstart", this.onPanStart.bind(this)), i[l].draggable.on("pan", this.onPanMove.bind(this)), i[l].draggable.on("panend", this.onPanEnd.bind(this));
                    I.$watch(function () {
                        return n.states.outlinedShortcode
                    }, function (t) {
                        if (!s.app.states.resizingShortcode) {
                            if (!t) return a.removeClass("uxb-is-active");
                            var e = (0, r.getShortcodeWithResize)(t),
                                n = !!e && e.data.resize !== !1;
                            for (var g in i) {
                                var o = n && angular.isArray(e.data.resize) && e.data.resize.indexOf(g) > -1,
                                    A = n && e.data.resize === !0;
                                i[g].$element.toggleClass("uxb-is-active", o || A)
                            }
                            a.toggleClass("uxb-is-active", n), a.cover(n ? e.$element : null), s.shortcode = e
                        }
                    }), I.$on(Event.CHANGE, function () {
                        s.shortcode && a.cover(s.shortcode.$element)
                    })
                }
                return e.$inject = ["app", "store", "utils", "$timeout", "$scope", "$element"], (0, I.default)(e, [{
                    key: "onHammerInput",
                    value: function (t) {
                        t.srcEvent.stopPropagation(), t.srcEvent.stopImmediatePropagation(), this.app.states.resizingShortcode = this.shortcode, this.store.isDragging = !0
                    }
                }, {
                    key: "onPanStart",
                    value: function (e) {
                        e.edge = (0, r.getEdgeName)(i, e.target), angular.element("body").addClass("uxb-is-resizing-" + e.edge), (0, r.runResizeHandler)(this.app.states.resizingShortcode, "onResize" + t.capitalize(e.edge) + "Start", e), (0, r.runResizeHandler)(this.app.states.resizingShortcode, "onResizeStart", e), this.app.outlineShortcode(null), this.app("tools").hideAddableSpot(), this.app("tools").apply(), this.app.states.resizingShortcode.$scope.$digest()
                    }
                }, {
                    key: "onPanMove",
                    value: function (e) {
                        e.edge = (0, r.getEdgeName)(i, e.target), (0, r.runResizeHandler)(this.app.states.resizingShortcode, "onResize" + t.capitalize(e.edge) + "Move", e), (0, r.runResizeHandler)(this.app.states.resizingShortcode, "onResizeMove", e), this.app("tools").apply(), this.app.states.resizingShortcode.$scope.$digest(), this.$element.cover(this.app.states.resizingShortcode.$element)
                    }
                }, {
                    key: "onPanEnd",
                    value: function (e) {
                        var n = this;
                        e.edge = (0, r.getEdgeName)(i, e.target), angular.element("body").removeClass("uxb-is-resizing-" + e.edge), (0, r.runResizeHandler)(this.app.states.resizingShortcode, "onResize" + t.capitalize(e.edge) + "End", e), (0, r.runResizeHandler)(this.app.states.resizingShortcode, "onResizeEnd", e), this.$timeout(function () {
                            n.app.states.resizingShortcode = null, n.store.isDragging = !1
                        }, 0)
                    }
                }]), e
            }();
        e.default = a
    }).call(e, function () {
        return this
    }())
}, function (t, e) {
    (function (t) {
        "use strict";

        function n(t) {
            for (var e = t.ancestorsAndSelf, n = 0; n < e.length; n++)
                if (e[n].data.resize) return e[n];
            return null
        }

        function g(t, e, n) {
            angular.isDefined(t.$scope.$customCtrl) && angular.isFunction(t.$scope.$customCtrl[e]) && t.$scope.$customCtrl[e](n)
        }

        function o(e) {
            var n = t.HammerJS.DIRECTION_ALL;
            switch (e) {
                case "top":
                    n = t.HammerJS.DIRECTION_VERTICAL;
                    break;
                case "right":
                    n = t.HammerJS.DIRECTION_HORIZONTAL;
                    break;
                case "bottom":
                    n = t.HammerJS.DIRECTION_VERTICAL;
                    break;
                case "left":
                    n = t.HammerJS.DIRECTION_HORIZONTAL
            }
            return n
        }

        function A(t, e) {
            for (var n in t)
                if (t[n].$element.get(0) === e) return n;
            return null
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getShortcodeWithResize = n, e.runResizeHandler = g, e.getPanDirection = o, e.getEdgeName = A
    }).call(e, function () {
        return this
    }())
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o),
        C = n(132),
        I = g(C),
        r = n(101),
        i = g(r);
    A.default.component("appMoveTool", {
        controller: I.default,
        template: i.default,
        bindings: {
            shortcode: "<"
        }
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = n(133),
        i = function () {
            function t(e, n, g, o, C, I) {
                var i = this;
                (0, A.default)(this, t), this.app = e, this.store = n, this.utils = g, this.$timeout = o, this.$element = I, this.shortcode = null, C.$watch(function () {
                    return e.states.outlinedShortcode
                }, function (t) {
                    if (!t) return I.removeClass("uxb-is-active");
                    var e = (0, r.getShortcodeWithMove)(t),
                        n = !!e && e.data.move !== !1;
                    I.toggleClass("uxb-is-active", n), I.cover(n ? e.$element : null), i.shortcode = e
                }), C.$on(Event.CHANGE, function () {
                    i.shortcode && I.cover(i.shortcode.$element)
                })
            }
            return t.$inject = ["app", "store", "utils", "$timeout", "$scope", "$element"], (0, I.default)(t, [{
                key: "classNames",
                value: function (t) {
                    return this.utils.arrayPrefix(angular.isArray(t.data.move) ? t.data.move : [t.data.move], "uxb-is-")
                }
            }]), t
        }();
    e.default = i
}, function (t, e) {
    "use strict";

    function n(t) {
        for (var e = t.ancestorsAndSelf, n = 0; n < e.length; n++)
            if (e[n].data.move) return e[n];
        return null
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getShortcodeWithMove = n
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = n(7),
        i = g(r),
        a = function () {
            function t(e, n, g, o) {
                var C = this;
                (0, A.default)(this, t), this.buttons = [], this.shortcode = null, n.$watch(function () {
                    return e.states.outlinedShortcode
                }, function (t) {
                    return t ? (C.shortcode = C.getShortcodeWithButtons(t), g.toggleClass("active", !!C.shortcode), void g.cover(C.shortcode ? C.shortcode.$element : null)) : g.removeClass("active")
                }), n.$on(o.CHANGE, function () {
                    C.shortcode && g.cover(C.shortcode.$element)
                })
            }
            return t.$inject = ["app", "$scope", "$element", "Event"], (0, I.default)(t, [{
                key: "getShortcodeWithButtons",
                value: function (t) {
                    for (var e = t.ancestorsAndSelf, n = 0; n < e.length; n++)
                        if (e[n].data.addButtons) return e[n];
                    return null
                }
            }, {
                key: "getIndex",
                value: function (t) {
                    var e = 0;
                    return "right-center" !== t && "bottom-right" !== t && "bottom-center" !== t && "bottom-left" !== t || (e = this.shortcode.children.length), e
                }
            }]), t
        }();
    i.default.component("addButtons", {
        controller: a,
        template: '\n    <div class="add-buttons">\n      <add-button\n        class="{{:: button }}"\n        shortcode="$ctrl.shortcode"\n        index="$ctrl.getIndex(button)"\n        data-tooltip="{{:: $ctrl.shortcode.data.message }}"\n        ng-repeat="button in $ctrl.shortcode.data.addButtons">\n      </add-button>\n    </div>\n  '
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o),
        C = n(136),
        I = g(C);
    A.default.component("appTools", {
        controller: I.default,
        template: n(103)
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = ["app", "store", "$scope", "$element", "$window", "$compile", "$angular", "$timeout", "$iframe", "utils", "Event", "AppEvent", "DragEvent", "IframeEvent", "ShortcodeEvent", function t(e, n, g, o, C, I, r, i, a, s, l, c, u, d, p) {
            (0, A.default)(this, t);
            var f = this,
                h = {},
                v = r.element("app").find(".tools-addable"),
                m = o.find(".tools-addable");
            f.target = null, f.$targetElement = null, f.addable = null, e.register("tools", f), _.each(n.tools, function (t, e) {
                var n = snakeCase(e, "-"),
                    A = "<" + n + ' shortcode="shortcode"></' + n + ">";
                I(A)(g, function (e, n) {
                    i(function () {
                        t.$element = e, t.$ctrl = n.$$childHead.$ctrl, o.append(e)
                    }, 0, !1)
                })
            }), a().on(d.CHANGED, function () {
                C.requestAnimationFrame(f.fixPositions)
            }), a().on(d.RESIZE, function () {
                C.requestAnimationFrame(f.fixPositions)
            }), a().on(d.SCROLL, function () {}), g.$on(p.CHANGED, function () {
                return f.fixPositions()
            }), g.$on(p.DELETED, function () {
                return f.hide()
            }), g.$on(d.RELOAD, function () {
                return f.hide()
            }), g.$on(u.MOVE, function (t, n) {
                n.defaultPrevented ? (e.outlineShortcode(null), f.hideAddableSpot()) : e.outlineShortcode(n.isWithin ? n.target.parent() : null)
            }), g.$on(u.END, function () {
                f.hideAddableSpot(), f.fixPositions()
            }), f.apply = function () {
                g.$digest()
            };
            var b = !1;
            f.fixPositions = function () {
                i.cancel(b), b = i(function () {
                    for (var t in h) h[t].$tool.hasClass("active") && h[t].$tool.cover(h[t].$element);
                    f.$targetElement && f.getAddableElement().cover(f.$targetElement), g.$broadcast(l.CHANGE)
                }, 0)
            }, f.addTool = function (t, e, n) {
                h.hasOwnProperty(t) && f.removeTool(t), h[t] = {}, h[t].$element = n, h[t].$scope = g.$new(), h[t].$tool = I(e)(h[t].$scope), o.append(h[t].$tool)
            }, f.getTool = function (t) {
                var e = h[t],
                    n = {};
                return n.element = function () {
                    return e.$element
                }, n.scope = function () {
                    return e.$scope.$$childHead
                }, n.tool = function () {
                    return e.$tool
                }, n
            }, f.showTool = function (t) {
                h[t].$tool.addClass("active"), h[t].$tool.cover(h[t].$element)
            }, f.hideTool = function (t) {
                h[t].$tool.removeClass("active")
            }, f.removeTool = function (t) {
                h[t].$element = null, h[t].$scope.$destroy(), h[t].$tool.remove(), h[t].$tool = null, delete h[t]
            }, f.hide = function () {
                f.hideAddableSpot()
            }, f.getAddableElement = function () {
                return f.$targetElement && f.$targetElement.get(0).ownerDocument.defaultView.frameElement ? (v.removeClass("active"), m) : (m.removeClass("active"), v)
            }, f.showAddableSpot = function (t) {
                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return !t || e.states.freezed ? f.hideAddableSpot() : (f.toggleAddableButton(n), f.target = t, f.addable = t.target, f.index = t.index, f.$targetElement = f.target.shortcode.isEmpty && f.target.element[0].ownerDocument.defaultView.frameElement && "center" === f.target.name ? f.target.shortcode.$content : f.target.element, f.getAddableElement().toggleClass("is-empty", "center" === t.name), f.getAddableElement().toggleClass("is-left", "left" === t.name), f.getAddableElement().toggleClass("is-right", "right" === t.name), f.getAddableElement().toggleClass("is-top", "top" === t.name), f.getAddableElement().toggleClass("is-bottom", "bottom" === t.name), f.getAddableElement().toggleClass("is-deputy", f.target.element !== f.target.shortcode.$element), void f.getAddableElement().cover(f.$targetElement, {
                    includeMargins: !0
                }).addClass("active"))
            }, f.toggleAddableButton = function (t) {
                f.getAddableElement().toggleClass("no-button", t === !1)
            }, f.hideAddableSpot = function () {
                return f.getAddableElement().removeClass("active"), f.$targetElement = null, f.target = null, !1
            }, f.addShortcode = function () {
                e("addables").open(f.addable, f.index), f.target = null, f.addable = null, f.index = null
            }
        }];
    e.default = C
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(12),
        A = g(o),
        C = n(7),
        I = g(C),
        r = ["app", "$scope", "$element", "Event", function t(e, n, g, o) {
            (0, A.default)(this, t);
            var C = g.find(".name");
            n.$watch(function () {
                return e.states.outlinedShortcode
            }, function (t) {
                return t ? (C.text(t.data.name), g.toggleClass("active", t.$element.isVisible()), void g.cover(t.$element)) : g.removeClass("active")
            }), n.$on(o.CHANGE, function () {
                e.states.outlinedShortcode && g.cover(e.states.outlinedShortcode.$element)
            })
        }];
    r.$inject = ["app", "$scope", "$element", "Event"], I.default.component("appOutlineTool", {
        controller: r,
        template: '\n    <div class="wrapper">\n      <h3 class="name"></h3>\n    </div>\n  '
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(12),
        A = g(o),
        C = n(13),
        I = g(C),
        r = n(7),
        i = g(r),
        a = function () {
            function t(e, n, g, o, C) {
                var I = this;
                (0, A.default)(this, t), this.app = g, this.shortcode = null, e.$watch(function () {
                    return g.states.selectedShortcode
                }, function (t) {
                    return t ? (I.shortcode = g.states.selectedShortcode, I.ancestors = g.states.selectedShortcode.ancestors.reverse(), I.ancestors.splice(0, 1), void n.cover(t.$element).addClass("active")) : n.removeClass("active")
                }), e.$on(C.CHANGE, function () {
                    g.states.selectedShortcode && n.cover(g.states.selectedShortcode.$element)
                })
            }
            return t.$inject = ["$scope", "$element", "app", "store", "Event"], (0, I.default)(t, [{
                key: "configureShortcode",
                value: function (t) {
                    this.app.configureShortcode(t)
                }
            }, {
                key: "outlineShortcode",
                value: function (t) {
                    this.app.outlineShortcode(t)
                }
            }, {
                key: "hideOutline",
                value: function () {
                    this.app.outlineShortcode(null)
                }
            }, {
                key: "showContextMenu",
                value: function (t) {
                    this.app("contextMenu").open(this.shortcode, t.currentTarget)
                }
            }]), t
        }();
    i.default.component("appSelectTool", {
        controller: a,
        bindings: {
            shortcode: "<"
        },
        template: '\n    <div class="wrapper">\n      <div ng-if="$ctrl.ancestors.length > 0" class="ancestors">\n        <span class="dashicons dashicons-arrow-up-alt2"></span>\n        <ul>\n          <li ng-repeat="ancestor in $ctrl.ancestors">\n            <button type="button" class="name"\n              draggable-shortcode="ancestor"\n              ng-click="$ctrl.configureShortcode(ancestor); $event.stopPropagation();"\n              ng-mouseover="$ctrl.outlineShortcode(ancestor)"\n              ng-mouseout="$ctrl.hideOutline()">\n              {{:: ancestor.data.name }}\n            </button>\n          </li>\n        </ul>\n      </div>\n      <h3 class="name" draggable-shortcode="$ctrl.shortcode">\n        {{ $ctrl.shortcode.data.name }}\n      </h3>\n      <button class="options" ng-click="$ctrl.showContextMenu($event); $event.stopPropagation();">\n        <span class="dashicons dashicons-admin-generic"></span>\n      </button>\n    </div>\n  '
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o),
        C = n(140),
        I = g(C);
    A.default.component("postWrapper", {
        controller: I.default,
        template: "\n    <post-content></post-content>\n  "
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        var e = t.offset(),
            n = t.height(),
            g = e.top + n;
        return g < A() || e.top > A() + window.innerHeight
    }

    function A() {
        return document.documentElement.scrollTop || document.body.scrollTop
    }

    function C(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
        angular.element("html, body").scrollToElement(t, e)
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var I = n(12),
        r = g(I),
        i = n(48),
        a = ["app", "store", "targets", "contextmenu", "utils", "Shortcode", "$rootScope", "$scope", "$element", "$iframe", "$compile", "$window", "$timeout", "$log", "AppEvent", "DragEvent", "Event", "MediaEvent", "IframeEvent", function t(e, n, g, A, I, a, s, l, c, u, d, p, f, h, v, m, b, $, y) {
            function w() {
                var t = S,
                    e = t.iframeRect,
                    n = t.iframe,
                    g = n.x,
                    o = n.y,
                    A = (0, i.scrollPos)(),
                    C = A.top,
                    I = 100,
                    r = 5,
                    a = void 0,
                    s = o,
                    l = e.bottom - e.top - o;
                s < I ? a = (e.top + s - (e.top + I)) / r : l < I && (a = (e.bottom + I - (e.bottom + l)) / r), a && g >= 0 && g <= e.right - e.left && (0, i.setScroll)(C + a)
            }(0, r.default)(this, t), A.attach(document);
            var x = null,
                E = performance.now();
            n.postContent = a.create(n.post.content), h.debug("Element instances created in " + (performance.now() - E) + "ms"), angular.element("body").on("click", function (t) {
                t.preventDefault(), n.isDragging || n.isScrolling || (e.configureShortcode(null), e.apply())
            }), angular.element("body").on("mousemove", function (t) {
                n.isDragging || n.isScrolling || n.isReloading || p.requestAnimationFrame(function () {
                    var n = I.getGlobalCoordinates(t.view, t.clientX, t.clientY),
                        o = g.find(n.x, n.y),
                        A = I.shortcodeFromPoint(n.x, n.y);
                    e("tools").showAddableSpot(o.length ? o[0] : null), A.isRoot || e.outlineShortcode(A), e("tools").apply()
                })
            }), angular.element("body").on("mouseleave", function (t) {
                n.isDragging || n.isScrolling || n.isReloading || p.requestAnimationFrame(function () {
                    e("tools").hideAddableSpot(), e.outlineShortcode(null), e("tools").apply()
                })
            }), angular.element(p).on("scroll", function () {
                u().trigger(y.SCROLL), n.isScrolling = !0, f.cancel(x), x = f(function () {
                    return n.isScrolling = !1
                }, 200, !1)
            }), l.$on($.CHANGED, function () {
                e.states.selectedShortcode ? f(function () {
                    return C(e.states.selectedShortcode.$element)
                }, 0, !1) : o(c) && f(function () {
                    return C(c)
                }, 0, !1)
            });
            var k = void 0,
                S = void 0;
            s.$on(m.START, function (t, e) {
                S = e, k = setInterval(w, 1e3 / 60)
            }), s.$on(m.MOVE, function (t, e) {
                S = e
            }), s.$on(m.STOP, function (t, e) {
                clearInterval(k), k = S = null
            }), angular.element(p).on(b.RESIZE, function () {
                u().trigger(y.RESIZE)
            }), new MutationObserver(function (t) {
                n.initialized && g.updateOffsets(!0), u().trigger(y.CHANGED, t)
            }).observe(document.querySelector("post-content"), {
                attributes: !0,
                childList: !0,
                subtree: !0,
                characterData: !1
            }), f(function () {
                o(c) && C(c, 0), n.initialized = !0, n.loading = !1, e.broadcast(v.READY)
            }, 0, !0)
        }];
    e.default = a
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(61),
        A = g(o),
        C = n(12),
        I = g(C),
        r = n(13),
        i = g(r),
        a = n(7),
        s = g(a),
        l = angular.element("body"),
        c = function () {
            function t(e, n, g, o, A, C, r, i, a, s, l) {
                var c = this;
                (0, I.default)(this, t), this.app = e, this.store = n, this.utils = o, this.responsiveHelper = a;
                var u = performance.now();
                this.store.postContent.$element = C, this.store.postContent.$scope = A, this.store.postContent.data.addableSpots.map(function (t) {
                    g.add(t, {
                        shortcode: c.store.postContent,
                        target: c.store.postContent
                    })
                }), this.onPostOptionsChanged(n.post.attributes.values, {}, n.post.attributes.options), A.$watchCollection(function () {
                    return n.post.attributes.values
                }, function (t, e) {
                    c.onPostOptionsChanged(t, e, n.post.attributes.options)
                }), this.onPostOptionsChanged(n.post.meta.values, {}, n.post.meta.options), A.$watchCollection(function () {
                    return n.post.meta.values
                }, function (t, e) {
                    c.onPostOptionsChanged(t, e, n.post.meta.options)
                }), r(function () {
                    i.debug("Elements compiled in " + (performance.now() - u) + "ms")
                }, 0, !1)
            }
            return t.$inject = ["app", "store", "targets", "utils", "$scope", "$element", "$timeout", "$log", "ResponsiveHelper", "IframeEvent", "MediaEvent"], (0, i.default)(t, [{
                key: "onPostOptionsChanged",
                value: function (t, e, n) {
                    for (var g in t)
                        if (t[g] !== e[g]) {
                            var o = n.get(g);
                            o.onChange && o.apply(l, t[g], e[g])
                        }
                }
            }, {
                key: "showTemplates",
                value: function () {
                    return this.store.postContent.isEmpty && (0, A.default)(this.store.templates).length
                }
            }]), t
        }();
    s.default.component("postContent", {
        controller: c,
        template: '\n    <content content="_root [root]" shortcode="$ctrl.store.postContent"></content>\n    <template-selector ng-if="$ctrl.showTemplates()"></template-selector>\n  '
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o);
    A.default.component("templateSelector", {
        controller: ["app", "store", "iframe", function (t, e, n) {
            this.store = e, this.setTemplate = function (g) {
                e.loading = !0, jQuery.post(e.ajaxUrl, {
                    action: "ux_builder_to_array",
                    id: g
                }).done(function (o) {
                    var A = o.data,
                        C = o.success;
                    return C ? (e.post.meta.values.hasOwnProperty("_wp_page_template") && (e.post.meta.values._wp_page_template = e.templates[g].template || "default"), n.reload(A.content), void t.apply()) : console.error("Failed to compile template " + g)
                })
            }
        }],
        template: '\n    <h2 class="uxb-templates-title">Insert a template <br/> <small> *Images are not included.</small></h2>\n    <ul class="uxb-templates-list">\n      <li class="uxb-template" ng-repeat="(id, template) in $ctrl.store.templates track by id">\n        <button type="button" class="uxb-template-button" ng-click="$ctrl.setTemplate(id)">\n          <img ng-attr-src="{{:: template.thumbnail }}">\n          <span class="">{{:: template.name }}</span>\n        </button>\n      </li>\n    </ul>\n  '
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = n(7),
        A = g(o),
        C = n(144),
        I = g(C);
    A.default.component("content", {
        controller: I.default,
        transclude: "element",
        bindings: {
            shortcode: "<"
        }
    })
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = n(12),
        A = g(o),
        C = ["app", "store", "utils", "dependencies", "$scope", "$element", "$compile", "$q", "$transclude", "$injector", "$templateCache", "$animate", "$timeout", "$controller", "$log", "ShortcodeEvent", "ChildEvent", function t(e, n, g, o, C, I, r, i, a, s, l, c, u, d, p, f, h) {
            function v(t, e) {
                var n = [],
                    g = [];
                _.each(t, function (e, g) {
                    e.$element || (n.push(e), e.$scope = C.$new(), y(e), m(e).then(b), c.move(e.$element, null, 0 === g ? I : t[g - 1].$element))
                }), _.each(e, function (e, n) {
                    t.indexOf(e) > -1 || (e.originalIndex = n, g.push(e))
                }), e && e.length === t.length && _.each(t, function (t, e) {
                    c.move(t.$element, null, 0 === e ? I : k.shortcode.children[e - 1].$element)
                }), _.each(g, function (t) {
                    return C.$parent.$broadcast(h.REMOVED, t)
                }), _.each(n, function (t) {
                    return C.$parent.$broadcast(h.ADDED, t)
                }), _.each(g, function (t) {
                    c.leave(t.$element), t.$scope.$destroy(), t.$element.data("shortcode", null), t.$element.remove(), t.$element = null, t.$content = null, t.$scope = null
                }), a(function (e, n) {
                    E || 0 !== t.length ? k.shortcode.$content && (E.$destroy(), c.leave(k.shortcode.$content), k.shortcode.$content.data("shortcode", null), k.shortcode.$content.remove(), k.shortcode.$content = null, E = null) : (E = n, e.html('\n                        <div class="uxb-empty-message">\n                            ' + k.shortcode.data.message + "\n                        </div>\n                    "), e.data("shortcode", k.shortcode), k.shortcode.$content = e, c.enter(k.shortcode.$content, I.parent(), I))
                })
            }

            function m(t) {
                var g = i.defer(),
                    o = !0,
                    A = t.data.template || l.get(t.data.templateUrl || t.$id);
                return angular.isDefined(A) ? (r(w(t, A))(t.$scope, function (e) {
                    e.data("shortcode", t), t.$element = e, g.resolve(t)
                }), g.promise) : ("undefined" == typeof t.$element && (A = w(t, l.get("shortcodes/_loading.html"), !0), t.$element = r(A)(t.$scope), t.$element.data("shortcode", t), o = !1), jQuery.post(n.postUrl, {
                    ux_builder_action: "do_shortcode",
                    ux_builder_shortcode: t.copy(function (t, e) {
                        t.$id = e.$id, t.depth = e.ancestors.length, t.nested = _.filter(e.ancestors, function (t) {
                            return t.tag === e.tag
                        }).length
                    })
                }).done(function (n) {
                    t.$scope && (t.$$new = !0, l.put(t.$id, n), A = w(t, n), r(A)(t.$scope, function (n) {
                        o && e.trigger(f.DETACHED, t), t.children && t.children.forEach(function (t) {
                            t.$element && (t.$element.data("shortcode", null), t.$element.remove(), delete t.$element)
                        }), n.data("shortcode", t), t.$element.replaceWith(n), t.$element = n, g.resolve(t)
                    }))
                }), g.promise)
            }

            function b(t) {
                var e = {
                    $scope: t.$scope,
                    $element: t.$element,
                    tools: n.tools ? n.tools["custom" + capitalize(t.tag) + "Tools"] : null,
                    shortcode: t
                };
                i.all([o.injectStyles(t.data.styles), o.injectScripts(t.data.scripts)]).finally(function () {
                    d("ShortcodeController as $ctrl", e), t.data.controller && d(t.tag + "__controller as $customCtrl", e)
                })
            }

            function $(t) {
                u.cancel(t.$recompile), t.$element.addClass("processing"), t.$recompile = u(function () {
                    var n = [];
                    if (l.remove(t.$id), t.isParent)
                        for (var g = t.children.length - 1; g >= 0; g--) n.unshift(t.children[g].copy()), t.children[g].remove();
                    m(t).then(function (t) {
                        var g = t.replaceWith(t.copy(function (t, e) {
                            t.$id = e.$id, e.isParent && (t.children = n)
                        }));
                        g.$$new = !0, e.broadcast(f.RECOMPILED, g)
                    }), p.debug("x recompiling", t.tag), delete t.$recompile
                }, 250, !1)
            }

            function y(t) {
                var e = t.index,
                    n = t.siblings;
                return t.$scope.shortcode = t, t.$scope.$index = e, t.$scope.$first = 0 === e, t.$scope.$last = e === n.length - 1, t.$scope.$middle = !(t.$scope.$first || t.$scope.$last), t.$scope.$odd = !(t.$scope.$even = 0 === (1 & e)), t.$scope.$$recompile = function () {
                    return $(t)
                }, t.$scope.$on("$destroy", function () {
                    delete t.$scope.shortcode, delete t.$scope.$$recompile
                }), t
            }

            function w(t, e, n) {
                if (e = e.replace("<content", '<content content="' + t.tag + " [" + t.$id + ']" shortcode="shortcode"'), e = e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""), e = e.replace(/<!--[\s\S]*?-->/g, ""), t.data.wrap || n) {
                    var g = ["uxb-wrapper"];
                    t.data.inline && g.push("uxb-wrapper-inline"), t.data.overlay && (e += '<div class="uxb-overlay"></div>'), e = '\n                  <div class="' + g.join(" ") + '">\n                    ' + e + "\n                  </div>\n                "
                }
                return e
            }
            var x = this;
            (0, A.default)(this, t);
            var E, k = this;
            C.$watchCollection(function () {
                return x.shortcode.children
            }, v)
        }];
    e.default = C
}, function (t, e, n) {
    "use strict";

    function g(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o(t) {
        var e = [],
            n = t.split(".");
        return _.each(n, function (t) {
            e.push(jQuery.camelCase(t.replace(/\:/g, "-")))
        }), e.join(".")
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.data = void 0;
    var A = n(12),
        C = g(A),
        I = n(13),
        r = g(I),
        i = e.data = (window.frameElement ? window.parent : window).uxBuilderData,
        a = function () {
            function t(e) {
                (0, C.default)(this, t), this.$parse = e
            }
            return t.$inject = ["$parse"], (0, r.default)(t, [{
                key: "storage",
                value: function () {
                    return i
                }
            }, {
                key: "set",
                value: function (t, e) {
                    return this.$parse(o(t)).assign(i, e)
                }
            }, {
                key: "get",
                value: function (t, e) {
                    var n = this.$parse(o(t))(i);
                    return !angular.isDefined(n) && e ? this.set(t, e) : n
                }
            }, {
                key: "unset",
                value: function (t) {
                    var e;
                    return t.indexOf("*") ? (e = t.split("*")[0], this.$parse(o(e)).assign(i, null)) : this.$parse(o(t)).assign(i, null)
                }
            }]), t
        }();
    e.default = a
}]);