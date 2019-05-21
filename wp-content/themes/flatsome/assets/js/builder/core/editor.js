! function (t) {
	function e(o) {
		if (n[o]) return n[o].exports;
		var i = n[o] = {
			exports: {},
			id: o,
			loaded: !1
		};
		return t[o].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
	}
	var n = {};
	return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
	t.exports = n(146)
}, , , function (t, e, n) {
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

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i);
	r.default.constant("Event", {
		READY: "ready",
		CHANGE: "change",
		COMPLETE: "complete",
		ERROR: "error",
		SCROLL: "scroll",
		RESIZE: "resize"
	}), r.default.constant("AppEvent", {
		READY: "app-ready",
		APPLY: "app-apply",
		EMIT: "app-emit",
		BROADCAST: "app-broadcast"
	}), r.default.constant("IframeEvent", {
		READY: "iframe-ready",
		RELOAD: "iframe-reload",
		RESIZE: "iframe-resize",
		CHANGED: "iframe-changed",
		SCROLL: "iframe-scroll"
	}), r.default.constant("MouseEvent", {}), r.default.constant("TouchEvent", {}), r.default.constant("ShortcodeEvent", {
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
	}), r.default.constant("ChildEvent", {
		ADDED: "child-added",
		REMOVED: "child-removed"
	}), r.default.constant("OptionsEvent", {
		SHOW: "options-show",
		CLEAR: "options-clear",
		HIDE: "options-hide"
	}), r.default.constant("MediaEvent", {
		CHANGED: "media-changed"
	}), r.default.constant("DragEvent", {
		START: "draggable-start",
		MOVE: "draggable-move",
		END: "draggable-end"
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.uxBuilder = void 0;
	var i = n(8),
		r = o(i),
		s = n(9),
		g = o(s),
		a = n(10),
		A = o(a),
		l = n(11),
		c = o(l),
		C = (e.uxBuilder = new c.default, angular.module("uxBuilder", []));
	e.default = C, C.config(r.default), C.run(g.default), C.run(A.default)
}, function (t, e) {
	"use strict";

	function n(t, e, n, o, i) {
		t.digestTtl(20), n.debugEnabled("dev" === window.location.hostname.split(".").pop()), i.debugInfoEnabled(!1), e.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest", o.decorator("$rootScope", ["$delegate", function (t) {
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
			var o = !0;
			t.$watch(function () {
				o && e.postCustomMessage(n.APPLY)
			}), e.addEventListener(n.APPLY, function () {
				o = !1, null === t.$$phase && t.$apply(), o = !0
			}, !1), e.addEventListener(n.BROADCAST, function (e) {
				t.$broadcast(e.data.type, e.data.data)
			}, !1), e.addEventListener(n.EMIT, function (e) {
				t.$emit(e.data.type, e.data.data)
			}, !1)
		}
		n.$inject = ["$rootScope", "$window", "AppEvent"], Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = n;
		var o = null;
		t.postCustomMessage = function (t, e, n) {
			o = o || (self === top ? document.querySelectorAll(".iframe-frame")[0].contentWindow : window.parent), n = new CustomEvent(t), n.data = e, o.dispatchEvent(n)
		}
	}).call(e, function () {
		return this
	}())
}, function (t, e) {
	"use strict";

	function n(t, e, n, o, i, r) {
		t.on("keydown", function (t) {
			var e = t.metaKey || t.ctrlKey,
				n = 90 === t.keyCode,
				r = t.shiftKey;
			e && n && (r ? i.redo() : i.undo(), o.apply(), t.preventDefault())
		})
	}
	n.$inject = ["$document", "$window", "$rootScope", "app", "history", "AppEvent"], Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = n
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(32),
		A = function () {
			function t() {
				(0, r.default)(this, t)
			}
			return (0, g.default)(t, [{
				key: "controller",
				value: function (t, e) {
					a.store.shortcodes.hasOwnProperty(t) && (a.store.shortcodes[t].controller = e)
				}
			}, {
				key: "on",
				value: function (t, e) {
					a.store.$$events[t] = a.store.$$events[t] || [], a.store.$$events[t].push(e)
				}
			}, {
				key: "addfilter",
				value: function (t, e) {
					a.store.$$filters[t] = a.store.$$filters[t] || [], a.store.$$filters[t].push(e)
				}
			}, {
				key: "addAction",
				value: function (t) {
					a.store.actions.push(t)
				}
			}]), t
		}();
	e.default = A
}, function (t, e) {
	"use strict";
	e.__esModule = !0, e.default = function (t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	e.__esModule = !0;
	var i = n(14),
		r = o(i);
	e.default = function () {
		function t(t, e) {
			for (var n = 0; n < e.length; n++) {
				var o = e[n];
				o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, r.default)(t, o.key, o)
			}
		}
		return function (e, n, o) {
			return n && t(e.prototype, n), o && t(e, o), e
		}
	}()
}, function (t, e, n) {
	t.exports = {
		default: n(15),
		__esModule: !0
	}
}, function (t, e, n) {
	n(16);
	var o = n(19).Object;
	t.exports = function (t, e, n) {
		return o.defineProperty(t, e, n)
	}
}, function (t, e, n) {
	var o = n(17);
	o(o.S + o.F * !n(27), "Object", {
		defineProperty: n(23).f
	})
}, function (t, e, n) {
	var o = n(18),
		i = n(19),
		r = n(20),
		s = n(22),
		g = "prototype",
		a = function (t, e, n) {
			var A, l, c, C = t & a.F,
				u = t & a.G,
				I = t & a.S,
				d = t & a.P,
				p = t & a.B,
				h = t & a.W,
				f = u ? i : i[e] || (i[e] = {}),
				v = f[g],
				m = u ? o : I ? o[e] : (o[e] || {})[g];
			u && (n = e);
			for (A in n) l = !C && m && void 0 !== m[A], l && A in f || (c = l ? m[A] : n[A], f[A] = u && "function" != typeof m[A] ? n[A] : p && l ? r(c, o) : h && m[A] == c ? function (t) {
				var e = function (e, n, o) {
					if (this instanceof t) {
						switch (arguments.length) {
							case 0:
								return new t;
							case 1:
								return new t(e);
							case 2:
								return new t(e, n)
						}
						return new t(e, n, o)
					}
					return t.apply(this, arguments)
				};
				return e[g] = t[g], e
			}(c) : d && "function" == typeof c ? r(Function.call, c) : c, d && ((f.virtual || (f.virtual = {}))[A] = c, t & a.R && v && !v[A] && s(v, A, c)))
		};
	a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
}, function (t, e) {
	var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
	"number" == typeof __g && (__g = n)
}, function (t, e) {
	var n = t.exports = {
		version: "2.5.1"
	};
	"number" == typeof __e && (__e = n)
}, function (t, e, n) {
	var o = n(21);
	t.exports = function (t, e, n) {
		if (o(t), void 0 === e) return t;
		switch (n) {
			case 1:
				return function (n) {
					return t.call(e, n)
				};
			case 2:
				return function (n, o) {
					return t.call(e, n, o)
				};
			case 3:
				return function (n, o, i) {
					return t.call(e, n, o, i)
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
	var o = n(23),
		i = n(31);
	t.exports = n(27) ? function (t, e, n) {
		return o.f(t, e, i(1, n))
	} : function (t, e, n) {
		return t[e] = n, t
	}
}, function (t, e, n) {
	var o = n(24),
		i = n(26),
		r = n(30),
		s = Object.defineProperty;
	e.f = n(27) ? Object.defineProperty : function (t, e, n) {
		if (o(t), e = r(e, !0), o(n), i) try {
			return s(t, e, n)
		} catch (t) {}
		if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
		return "value" in n && (t[e] = n.value), t
	}
}, function (t, e, n) {
	var o = n(25);
	t.exports = function (t) {
		if (!o(t)) throw TypeError(t + " is not an object!");
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
	var o = n(25),
		i = n(18).document,
		r = o(i) && o(i.createElement);
	t.exports = function (t) {
		return r ? i.createElement(t) : {}
	}
}, function (t, e, n) {
	var o = n(25);
	t.exports = function (t, e) {
		if (!o(t)) return t;
		var n, i;
		if (e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
		if ("function" == typeof (n = t.valueOf) && !o(i = n.call(t))) return i;
		if (!e && "function" == typeof (n = t.toString) && !o(i = n.call(t))) return i;
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
		return i.$set = function (e, n) {
			return t(o(e)).assign(i, n)
		}, i.$get = function (e, n) {
			var r = t(o(e))(i);
			return !angular.isDefined(r) && n ? i.$set(e, n) : r
		}, i.$unset = function (e) {
			var n;
			return e.indexOf("*") ? (n = e.split("*")[0], t(o(n)).assign(i, null)) : t(o(e)).assign(i, null)
		}, i.$disable = function () {
			i.enabled = !1
		}, i.$enable = function () {
			i.enabled = !0
		}, i.$addAction = function (t, e) {
			if (i.enabled) {
				i.history.splice(0, i.history.length - (r - 1)), i.currentAction < i.history.length - 1 && i.history.splice(i.currentAction + 1, i.history.length);
				var n = i.history.slice().pop();
				return n && n.payload.key === e.key ? void(e.override !== !1 && (n.payload = e)) : void(i.currentAction = i.history.push({
					type: t,
					payload: e
				}) - 1)
			}
		}, i.$resetToAction = function (t) {
			i.history.splice(t + 1, i.history.length), i.currentAction = Math.min(t, i.currentAction)
		}, i
	}

	function o(t) {
		var e = [],
			n = t.split(".");
		return _.each(n, function (t) {
			e.push(jQuery.camelCase(t.replace(/:/g, "-")))
		}), e.join(".")
	}
	n.$inject = ["$parse"], Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = n;
	var i = e.store = (window.parent || window).uxBuilderData,
		r = 50
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i),
		s = n(34),
		g = o(s),
		a = n(35),
		A = o(a),
		l = n(36),
		c = o(l);
	r.default.directive("draggableShortcode", g.default), r.default.directive("toNumber", A.default), r.default.directive("wpAttachment", c.default)
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
			controller: ["$scope", "$element", "targets", function (e, n, o) {
				var i = this,
					r = null;
				e.$watch("draggableShortcode.shortcode", function (s) {
					r && r.destroy(), r = t(i.shortcode, i.element || n.get(0), i.options), i.options && i.options.targets && i.options.targets.map(function (t) {
						angular.isObject(t) ? (t.shortcode = i.shortcode, t.element = n, o.add(t.name, t)) : o.add(t, {
							shortcode: i.shortcode,
							element: n
						})
					}), e.$on("$destroy", function () {
						r.destroy(), o.removeElement(n.get(0))
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
			link: function (t, e, n, o) {
				o.$parsers.push(function (t) {
					return "" + t
				}), o.$formatters.push(function (t) {
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
			controller: ["app", "store", "$scope", "$element", function (t, e, n, o) {
				function i() {
					var t = n.attachment.id,
						o = n.attachment.size || "full",
						i = n.attachment.width || 0,
						s = n.attachment.height || 0,
						g = i || s ? "w" + i + ".h" + s : o,
						a = "cache.attachment." + g + ".id" + t,
						A = e.$get(a);
					return angular.isDefined(A) ? r(A) : void jQuery.getJSON(e.ajaxUrl, {
						action: "ux_builder_get_attachment",
						attachment_id: t,
						attachment_size: o,
						attachment_width: i,
						attachment_height: s
					}).success(function (t) {
						t.success ? r(e.$set(a, t.data)) : window.self === window.top && n.attachment.model && (A = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAEOCAIAAADe+FMwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAADhuaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzExMSA3OS4xNTgzMjUsIDIwMTUvMDkvMTAtMDE6MTA6MjAgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE2LTA5LTI3VDE3OjUzOjI2KzAyOjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNi0wOS0yN1QxNzo1MzoyNiswMjowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTYtMDktMjdUMTc6NTM6MjYrMDI6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmJjYTkzYTljLTRlZmQtNDQ0ZC05YjY1LTllNGQ0YWIzMWE3NzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpiY2E5M2E5Yy00ZWZkLTQ0NGQtOWI2NS05ZTRkNGFiMzFhNzc8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpiY2E5M2E5Yy00ZWZkLTQ0NGQtOWI2NS05ZTRkNGFiMzFhNzc8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6YmNhOTNhOWMtNGVmZC00NDRkLTliNjUtOWU0ZDRhYjMxYTc3PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE2LTA5LTI3VDE3OjUzOjI2KzAyOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj40ODA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjcwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4rLBj0AAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAALzSURBVHja7NQxEQAwCACxUklMbPh3hQuOIZHww0dWPwDu+RIAGDQABg1g0AAYNIBBA2DQABg0gEEDYNAABg2AQQNg0AAGDYBBAxg0AAYNYNAAGDQABg1g0AAYNIBBA2DQABg0gEEDYNAABg2AQQMYNAAGDYBBAxg0AAYNYNAAGDQABg1g0AAYNIBBA2DQAAYNgEEDYNAABg2AQQMYNAAGDYBBAxg0AAYNYNAAGDQABg1g0AAYNIBBA2DQAAYNgEEDYNAABg2AQQMYNAAGDYBBAxg0AAYNYNAAGDSAQQNg0AAYNIBBA2DQAAYNgEEDYNAABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQNg0AAYNIBBA2DQAAYNgEEDYNAABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQNg0AAYNIBBA2DQAAYNgEEDGDQABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQNg0AAGDYBBA2DQAAYNgEEDGDQABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQNg0AAGDYBBA2DQAAYNgEEDGDQABg2AQQMYNAAGDWDQABg0gEEDYNAAGDSAQQNg0AAGDYBBA2DQAAYNgEEDGDQABg1g0AAYNAAGDWDQABg0gEEDYNAAGDSAQQNg0AAGDYBBA2DQAAYNgEEDGDQABg1g0AAYNAAGDWDQABg0gEEDYNAAGDSAQQNg0AAGDYBBAxg0AAYNgEEDGDQABg1g0AAYNAAGDWDQABg0gEEDYNAABg2AQQNg0AAGDYBBAxg0AAYNgEEDGDQABg1g0AAYNAAGDWDQABg0gEEDYNAABg2AQQNg0AAGDYBBAxg0AAYNgEEDGDQABg1g0AAYNIBBA2DQABg0gEEDYNAABg2AQQNg0AAGDYBBAxg0AAYNYNAAGDQABg1g0AAYNIBBA2DQABg0gEEDYNAABg2AQQMYtAQABg2AQQMYNAAGDWDQABg0AAYNYNAAGDSAQQOwbQAAAP//AwDBvQLFJkQUdgAAAABJRU5ErkJggg==", "480px", "270px"]),
							A && r(A)
					}).fail(function (e) {
						console.error("Failed to load attachment", t)
					})
				}

				function r(t) {
					"IMG" === o[0].tagName ? (o.addClass("processing"), o.on("load", function () {
						o.off("load").removeClass("processing")
					}), o.attr("src", t[0]), o.attr("width", t[1]), o.attr("height", t[2])) : o.css("background-image", "url(" + t[0] + ")"), a = !0
				}

				function s() {
					"IMG" === o[0].tagName ? (o.removeAttr("src"), o.removeAttr("width"), o.removeAttr("height")) : o.css("background-image", ""), a = !1
				}
				var g = this,
					a = !1;
				o.on("load.wpAttachment", function () {
					return t("tools").fixPositions()
				}), n.$watch(function () {
					return g.id
				}, function (t) {
					return t && "" !== t ? "string" == typeof t && t.indexOf("/") > -1 ? r([t]) : void i() : s()
				}), n.$watch(function () {
					return g.size
				}, function (t, e) {
					a && t !== e && i()
				}), n.$on("$destroy", function () {
					o.off("load.wpAttachment")
				})
			}]
		}
	}
	n.$inject = ["app"], Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = n
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(38),
		r = o(i),
		s = n(39),
		g = o(s),
		a = n(40),
		A = o(a),
		l = n(41),
		c = o(l),
		C = n(42),
		u = o(C);
	angular.module("app.filters", []).filter("noDefault", r.default).filter("heightCheck", g.default).filter("html", A.default).filter("rgba", c.default).filter("trusted", u.default)
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
				e = e.replace(n, function (t, e, n, o) {
					return e + e + n + n + o + o
				}), e = e.replace("#", "");
				var o = parseInt(e.substring(0, 2), 16),
					i = parseInt(e.substring(2, 4), 16),
					r = parseInt(e.substring(4, 6), 16);
				e = "rgba(" + o + "," + i + "," + r + ",0.3)"
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
			var o = t.jQuery(e),
				i = o.get(0).ownerDocument,
				r = i.defaultView,
				s = o.outerOffset(n),
				g = !!this.get(0).ownerDocument.defaultView.frameElement,
				a = !!o.get(0).ownerDocument.defaultView.frameElement;
			if (!g && a) {
				var A = r.frameElement.getBoundingClientRect();
				s.left += A.left, s.top += A.top
			}
			return g && a && (s.top += i.documentElement.scrollTop || i.body.scrollTop), this.css({
				width: s.width.toFixed(2),
				height: s.height.toFixed(2),
				transform: "translateX(" + s.left.toFixed() + "px) translateY(" + s.top.toFixed() + "px)"
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
			return this.each(function (o, i) {
				var r = t.jQuery(i),
					s = i.getBoundingClientRect(),
					g = 0,
					a = 0,
					A = s.right - (n.left ? n.left : s.left),
					l = s.bottom - (n.top ? n.top : s.top),
					c = r.css("display").search("inline") > -1;
				e.includeMargins && (c ? A = r.outerWidth(!0) : l = r.outerHeight(!0)), n.top = (s.top > n.top ? n.top : s.top) + a, n.left = (s.left > n.left ? n.left : s.left) + g, n.width = A > n.width ? A : n.width, n.height = l > n.height ? l : n.height
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
			var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 450,
				i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
				r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
				s = t.jQuery(n),
				g = s.get(0).ownerDocument,
				a = g.defaultView,
				A = a.innerHeight,
				l = g.body.getBoundingClientRect(),
				c = s.get(0).getBoundingClientRect(),
				C = c.top - l.top + c.height / 2 + i;
			c.height < A ? C -= A / 2 : c.height > A && (C = c.top - l.top), (0, e.scrollTo)(C, o, r, i, g)
		}
	}).call(e, function () {
		return this
	}())
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
			n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
			o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
			i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : document,
			g = r(i).top,
			A = t - g,
			l = g + A * o,
			c = t - l,
			C = 0,
			u = 20,
			I = 0,
			d = function t() {
				C += u, I = C / e;
				var o = l + c * a.default.easeInOutCubic(I);
				s(o, i), C < e ? window.requestAnimationFrame(t) : n && "function" == typeof n && n()
			};
		d()
	}

	function r() {
		var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
			e = t.documentElement,
			n = (t.defaultView.pageYOffset || e.scrollTop) - (e.clientTop || 0),
			o = (t.defaultView.pageXOffset || e.scrollLeft) - (e.clientLeft || 0);
		return {
			top: n,
			left: o
		}
	}

	function s(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
		e.documentElement.scrollTop = t, e.body.parentNode.scrollTop = t, e.body.scrollTop = t
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.scrollTo = i, e.scrollPos = r, e.setScroll = s;
	var g = n(49),
		a = o(g)
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
			return this.data("shortcode") ? this.data("shortcode") : (e.each(function (e, o) {
				t.jQuery(o).data("shortcode") && !n && (n = t.jQuery(o).data("shortcode"))
			}), n)
		}
	}).call(e, function () {
		return this
	}())
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(52),
		r = o(i),
		s = n(53),
		g = o(s),
		a = n(54),
		A = o(a),
		l = n(55),
		c = o(l),
		C = n(56),
		u = o(C),
		I = n(57),
		d = o(I),
		p = n(58),
		h = o(p),
		f = n(59),
		v = o(f),
		m = n(60),
		y = o(m),
		b = n(81),
		$ = o(b),
		w = n(85),
		x = o(w),
		k = n(86),
		_ = o(k),
		E = n(32),
		S = o(E),
		M = n(89),
		O = o(M),
		D = n(90),
		T = o(D),
		P = n(91),
		j = o(P),
		N = n(92),
		Y = o(N),
		R = n(93),
		B = o(R);
	angular.module("app.services", []).service("$angular", r.default).service("actions", g.default).service("app", A.default).service("contextmenu", c.default).service("draggable", u.default).service("dependencies", d.default).service("editor", h.default).service("history", y.default).service("iframe", $.default).service("hammer", v.default).service("ResponsiveHelper", x.default).service("Shortcode", _.default).service("utils", T.default).service("store", S.default).service("targets", O.default).service("$iframe", B.default).service("wpEditor", j.default).service("wpMedia", Y.default)
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = ["$window", function t(e) {
			return (0, r.default)(this, t), e.frameElement ? e.parent.angular : angular
		}];
	e.default = s
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e) {
				(0, r.default)(this, t), this.store = e, this.store.states = this.store.states || {}
			}
			return t.$inject = ["store"], (0, g.default)(t, [{
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
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = ["store", "$rootScope", "$window", "$timeout", "$log", "AppEvent", "IframeEvent", "MediaEvent", function t(e, n, o, i, s, g, a, A) {
			function l(t) {
				return e.components[t]
			}(0, r.default)(this, t);
			var c = angular.copy(e.permissions);
			return l.goto = function (t) {
				(window.parent || window).location.hash = t
			}, l.exit = function () {
				if (c.exit) {
					var t = "publish" === e.post.status ? e.backUrl : e.editUrl;
					e.isSaved ? (window.parent || window).location.href = t : confirm("退出？所有保存都会丢失。") && ((window.parent || window).location.href = t)
				}
			}, l.register = function (t, n) {
				e.components = e.components || {}, e.components[t] = n
			}, l.remove = function (t) {
				delete e.components[t]
			}, l.apply = function (t) {
				n.$apply(t)
			}, l.broadcast = function (t, e) {
				n.$broadcast(t, e), o.postCustomMessage(g.BROADCAST, {
					type: t,
					data: e
				})
			}, l.emit = function (t, e) {
				n.$emit(t, e), o.postCustomMessage(g.EMIT, {
					type: t,
					data: e
				})
			}, l.trigger = function (t) {
				for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) o[i - 1] = arguments[i];
				if (this.broadcast.apply(this, [t].concat(o)), e.$$events.hasOwnProperty(t))
					for (var r = 0; r < e.$$events[t].length; r++) {
						var s;
						(s = e.$$events[t][r]).call.apply(s, [this].concat(o))
					}
			}, l.filter = function (t, n) {
				if (e.$$filters.hasOwnProperty(t)) {
					for (var o = arguments.length, i = Array(o > 2 ? o - 2 : 0), r = 2; r < o; r++) i[r - 2] = arguments[r];
					for (var s = 0; s < e.$$filters[t].length; s++) {
						var g;
						n = (g = e.$$filters[t][s]).call.apply(g, [this, n].concat(i))
					}
				}
				return n
			}, l.states = e.states, l.resetAll = function () {
				e.$$events = {}, e.$$filters = {}, this.resetState()
			}, l.resetState = function () {
				for (var t in e.states) e.states[t] = null
			}, l.freeze = function (t) {
				e.states.freezed = t
			}, l.outlineShortcode = function (t) {
				e.states.outlinedShortcode = e.states.freezed !== !0 ? t : null
			}, l.selectShortcode = function (t) {
				e.states.selectedShortcode = e.states.freezed !== !0 ? t : null
			}, l.configureShortcode = function (t) {
				this.goto(t ? "/shortcode/" + t.$id : "/")
			}, l.setBreakpoint = function (t) {
				e.breakpoints.current = t, l.broadcast(A.CHANGED, t)
			}, l
		}];
	e.default = s
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n) {
				(0, r.default)(this, t), this.app = e, this.utils = n
			}
			return t.$inject = ["app", "utils"], (0, g.default)(t, [{
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
	e.default = a
}, function (t, e, n) {
	(function (t) {
		"use strict";

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(12),
			r = o(i),
			s = ["app", "store", "targets", "Shortcode", "$document", "$window", "$timeout", "$iframe", "utils", "DragEvent", function e(n, o, i, s, g, a, A, l, c, C) {
				(0, r.default)(this, e);
				var u = {},
					I = (window.parent || window).angular.element("draggable-helper");
				return function (e, r, d) {
					function p(t) {
						t.srcEvent.stopPropagation(), t.srcEvent.stopImmediatePropagation()
					}

					function h(t) {
						I.find("h3 span").text(e.data.name), g.onkeydown = function (t) {
							return n("tools").toggleAddableButton(t.altKey)
						}, g.onkeyup = function (t) {
							return n("tools").toggleAddableButton(t.altKey)
						}, u.shortcode = e, u.iframeRect = l().get(0).getBoundingClientRect(), u.container = e.parent.$element, u.isSelected = n.states.selectedShortcode === e, u.defaultPrevented = !1, u.showHelper = !0, u.constrains = !1, u.initial = {}, m(t), u.initial = {}, u.initial.innerX = u.innerX, u.initial.innerY = u.innerY, u.initial.elementX = u.elementX, u.initial.elementY = u.elementY, e.$element.addClass("uxb-shortcode-dragging"), angular.element(a.parent.document.body).addClass("dragging"), angular.element("body").addClass("dragging"), d.start(t), e.states.dragging = !0, o.isDragging = !0, n.broadcast(C.START, u), n("tools").apply(), e.$scope.$digest()
					}

					function f(t) {
						if (u.shortcode || h(t), m(t), u.defaultPrevented || (I.addClass("active"), I.css({
								transform: "translate3d(" + u.global.x + "px, " + u.global.y + "px, 0px)"
							}), I.find("h3 span").css({
								transform: "rotate(" + u.originalEvent.velocityY * -25 + "deg)"
							})), u.target = null, u.addToShortcode = null, e.$recompile) return w.stop(!0), v(t);
						if (i.find(u.global.x, u.global.y).map(function (t) {
								!u.target && t.target && t.target.allows(e) && (u.target = t)
							}), u.target) {
							var o = u.target.target === e.parent,
								r = o && u.target.index === e.index,
								s = o && u.target.index === e.index + 1,
								g = t.srcEvent.altKey;
							!r && !s || g || (u.target = null)
						}
						d.move(t), n("tools").showAddableSpot(u.target, t.srcEvent.altKey), n.outlineShortcode(u.target ? u.target.target.parent : null), n.broadcast(C.MOVE, u), n("tools").apply(), e.$scope.$digest()
					}

					function v(t) {
						if (m(t), I.find("h3 span").removeAttr("style"), I.removeClass("active"), e.states.dragging = !1, u.target && !u.defaultPrevented) {
							var i = t.srcEvent.altKey,
								r = u.target.target,
								l = u.target.index;
							i ? u.addedShortode = r.addChild(e.copy(), l) : u.addedShortode = s.move(e, r, l)
						}
						e.$element.removeClass("uxb-shortcode-dragging"), angular.element(a.parent.document.body).removeClass("dragging"), angular.element("body").removeClass("dragging"), d.end(t), n.broadcast(C.END, u), g.onkeydown = null, g.onkeyup = null, u = {}, A(function () {
							return o.isDragging = !1
						}, 0)
					}

					function m(t) {
						u.originalEvent = t, u.global = c.getGlobalCoordinates(t.target.ownerDocument.defaultView, t.center.x, t.center.y), u.element = angular.element($), u.draggable = b, u.main = {}, u.main.x = u.global.x, u.main.y = u.global.y, u.iframe = {}, u.iframe.x = u.global.x - u.iframeRect.left, u.iframe.y = u.global.y - u.iframeRect.top, u.virtual = {}, u.virtual.width = u.shortcode.$element.width(), u.virtual.height = u.shortcode.$element.height(), u.virtual.top = u.iframe.y - u.initial.elementY, u.virtual.right = u.iframe.x + u.virtual.width - u.initial.elementX, u.virtual.bottom = u.iframe.y + u.virtual.height - u.initial.elementY, u.virtual.left = u.iframe.x - u.initial.elementX, u.constrains && y(t), u.elementX = u.iframe.x - e.$element.offset().left, u.elementY = u.iframe.y - e.$element.offset().top + l().contents().scrollTop(), u.preventDefault = function () {
							u.defaultPrevented = !0
						}, u.setContainment = function (t) {
							u.constrains = t.outerOffset(), u.container = t
						}
					}

					function y() {
						u.constrains = u.container.outerOffset(), u.innerX = u.iframe.x - u.constrains.left - u.initial.elementX, u.innerY = u.iframe.y - u.constrains.top - u.initial.elementY, u.virtual.top < u.constrains.top && (u.innerY = 0), u.virtual.right > u.constrains.right && (u.innerX = u.constrains.width - u.virtual.width), u.virtual.bottom > u.constrains.bottom && (u.innerY = u.constrains.height - u.virtual.height), u.virtual.left < u.constrains.left && (u.innerX = 0)
					}
					var b = this;
					d = angular.extend({
						cssProps: {},
						droppable: !0,
						broadcast: !0,
						start: angular.noop,
						move: angular.noop,
						end: angular.noop
					}, d);
					var $ = r || e.$element.get(0),
						w = new t.HammerJS($, d);
					return w.get("pan").set({
						direction: t.HammerJS.DIRECTION_ALL,
						threshold: 1
					}), angular.element($).data("shortcode", e), angular.element($).addClass("uxb-draggable"), w.on("hammer.input", p), w.on("panstart", h), w.on("pan", f), w.on("panend", v), w
				}
			}];
		e.default = s
	}).call(e, function () {
		return this
	}())
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = ["store", "$q", function t(e, n) {
			function o(t, o, i) {
				var r = n.defer(),
					s = 0,
					g = 0;
				return _.each(o, function (n, i) {
					e.$get(t + "." + i + ".loaded") === !0 ? delete o[i] : s++
				}), 0 === _.size(o) ? (r.resolve(), r.promise) : (_.each(o, function (n, o) {
					function a() {
						A.loaded = !0, g++, g === s && r.resolve()
					}
					var A = e.$get(t + "." + o) || i(n, o);
					return angular.isDefined(A.loaded) && A.loaded !== !0 ? A.addEventListener("load", a) : (A.loaded = !1, A.addEventListener("load", a), e.$set(t + "." + o, A), void document.getElementsByTagName("head")[0].appendChild(A))
				}), r.promise)
			}
			return (0, r.default)(this, t), {
				injectStyles: function (t) {
					return o("styles", t, function (t, e, n) {
						return n = document.createElement("link"), n.id = "ux-builder-style-" + e, n.rel = "stylesheet", n.type = "text/css", n.media = "all", n.href = t, n
					})
				},
				injectScripts: function (t) {
					return o("scripts", t, function (t, e, n) {
						return n = document.createElement("script"), n.id = "ux-builder-script-" + e, n.type = "text/javascript", n.src = t, n
					})
				}
			}
		}];
	e.default = s
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e) {
				(0, r.default)(this, t), this.enabled = !0, this.store = e, this.store.editor = this.store.editor || {
					state: {}
				}
			}
			return t.$inject = ["store"], (0, g.default)(t, [{
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
	e.default = a
}, function (t, e, n) {
	(function (t) {
		"use strict";

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(12),
			r = o(i),
			s = function e() {
				return (0, r.default)(this, e),
					function (e, n, o) {
						return o ? t.propagatingHammer(new t.HammerJS(e, n)) : new t.HammerJS(e, n)
					}
			};
		e.default = s
	}).call(e, function () {
		return this
	}())
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(61),
		r = o(i),
		s = n(12),
		g = o(s),
		a = n(13),
		A = o(a),
		l = function () {
			function t(e, n, o, i, r) {
				(0, g.default)(this, t), this.app = e, this.store = n, this.manager = o, this.ShortcodeEvent = i, this.$timeout = r
			}
			return t.$inject = ["app", "store", "Shortcode", "ShortcodeEvent", "$timeout"], (0, A.default)(t, [{
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
						var o = t.type,
							i = t.payload,
							s = this.store.shortcode;
						switch (this.store.$disable(), this.store.currentAction = this.store.history.indexOf(t) + e, o) {
							case "reorderChildren":
								var g = i.id,
									a = i.parentId,
									A = i.toIndex,
									l = i.fromIndex,
									c = l > A ? l + 1 : l;
								this.manager.move(s[g], s[a], c, !1), i.fromIndex = A, i.toIndex = l;
								break;
							case "moveChild":
								var C = i.id,
									u = i.parentId,
									I = i.index,
									d = i.fromParentId,
									p = i.fromIndex;
								this.manager.move(s[C], s[d], p, !1), i.fromParentId = u, i.fromIndex = I, i.parentId = d, i.index = p;
								break;
							case "updateOption":
								var h = i.name,
									f = i.optionValue,
									v = i.responsiveValue,
									m = s[i.id];
								i.optionValue = angular.copy(m.optionValues[h]), i.responsiveValue = angular.copy(m.responsiveValues[h]), m.optionValues[h] = f, v && (m.responsiveValues[h] = v);
								break;
							case "updateMultipleOptions":
								var y = i.mutations;
								for (var b in y) {
									var $ = s[b];
									for (var w in y[b]) {
										var x = y[b][w],
											k = x.optionValue,
											_ = x.responsiveValue;
										x.optionValue = angular.copy($.optionValues[w]), x.responsiveValue = angular.copy($.responsiveValues[w]), $.optionValues[w] = k, _ && ($.responsiveValues[w] = _)
									}
								}
								break;
							case "clearResponsiveValue":
								var E = i.id,
									S = i.optionName,
									M = i.breakpointIndex,
									O = i.value,
									D = s[E].responsiveValues[S];
								D[M] ? D[M] = null : D[M] = O;
								break;
							case "updateContent":
								var T = i.id,
									P = i.content,
									j = s[T];
								i.content = j.content, j.content = P;
								break;
							case "addChild":
							case "removeChild":
								if (s[i.id]) this.manager.remove(s[i.id], !1);
								else {
									var N = s[i.parentId],
										Y = N.addChild(i.data, i.index, !1);
									this.$timeout(function () {
										n.app.trigger(n.ShortcodeEvent.ATTACHED, Y)
									})
								}
								break;
							case "removeContent":
								(0, r.default)(s).length > 1 ? this.manager.remove(this.store.postContent, !1) : (i.content.forEach(function (t, e) {
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
	e.default = l
}, function (t, e, n) {
	t.exports = {
		default: n(62),
		__esModule: !0
	}
}, function (t, e, n) {
	n(63), t.exports = n(19).Object.keys
}, function (t, e, n) {
	var o = n(64),
		i = n(66);
	n(80)("keys", function () {
		return function (t) {
			return i(o(t))
		}
	})
}, function (t, e, n) {
	var o = n(65);
	t.exports = function (t) {
		return Object(o(t))
	}
}, function (t, e) {
	t.exports = function (t) {
		if (void 0 == t) throw TypeError("Can't call method on  " + t);
		return t
	}
}, function (t, e, n) {
	var o = n(67),
		i = n(79);
	t.exports = Object.keys || function (t) {
		return o(t, i)
	}
}, function (t, e, n) {
	var o = n(68),
		i = n(69),
		r = n(72)(!1),
		s = n(76)("IE_PROTO");
	t.exports = function (t, e) {
		var n, g = i(t),
			a = 0,
			A = [];
		for (n in g) n != s && o(g, n) && A.push(n);
		for (; e.length > a;) o(g, n = e[a++]) && (~r(A, n) || A.push(n));
		return A
	}
}, function (t, e) {
	var n = {}.hasOwnProperty;
	t.exports = function (t, e) {
		return n.call(t, e)
	}
}, function (t, e, n) {
	var o = n(70),
		i = n(65);
	t.exports = function (t) {
		return o(i(t))
	}
}, function (t, e, n) {
	var o = n(71);
	t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
		return "String" == o(t) ? t.split("") : Object(t)
	}
}, function (t, e) {
	var n = {}.toString;
	t.exports = function (t) {
		return n.call(t).slice(8, -1)
	}
}, function (t, e, n) {
	var o = n(69),
		i = n(73),
		r = n(75);
	t.exports = function (t) {
		return function (e, n, s) {
			var g, a = o(e),
				A = i(a.length),
				l = r(s, A);
			if (t && n != n) {
				for (; A > l;)
					if (g = a[l++], g != g) return !0
			} else
				for (; A > l; l++)
					if ((t || l in a) && a[l] === n) return t || l || 0;
			return !t && -1
		}
	}
}, function (t, e, n) {
	var o = n(74),
		i = Math.min;
	t.exports = function (t) {
		return t > 0 ? i(o(t), 9007199254740991) : 0
	}
}, function (t, e) {
	var n = Math.ceil,
		o = Math.floor;
	t.exports = function (t) {
		return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t)
	}
}, function (t, e, n) {
	var o = n(74),
		i = Math.max,
		r = Math.min;
	t.exports = function (t, e) {
		return t = o(t), t < 0 ? i(t + e, 0) : r(t, e)
	}
}, function (t, e, n) {
	var o = n(77)("keys"),
		i = n(78);
	t.exports = function (t) {
		return o[t] || (o[t] = i(t))
	}
}, function (t, e, n) {
	var o = n(18),
		i = "__core-js_shared__",
		r = o[i] || (o[i] = {});
	t.exports = function (t) {
		return r[t] || (r[t] = {})
	}
}, function (t, e) {
	var n = 0,
		o = Math.random();
	t.exports = function (t) {
		return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36))
	}
}, function (t, e) {
	t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function (t, e, n) {
	var o = n(17),
		i = n(19),
		r = n(28);
	t.exports = function (t, e) {
		var n = (i.Object || {})[t] || Object[t],
			s = {};
		s[t] = e(n), o(o.S + o.F * r(function () {
			n(1)
		}), "Object", s)
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(82),
		A = o(a),
		l = function () {
			function t(e, n, o, i, s, g) {
				(0, r.default)(this, t), this.app = e, this.store = n, this.targets = o, this.manager = i, this.$timeout = s, this.metaOptions = n.post.meta.options.flat, this.postMeta = n.post.meta.values, this.IframeEvent = g
			}
			return t.$inject = ["app", "store", "targets", "Shortcode", "$timeout", "IframeEvent"], (0, g.default)(t, [{
				key: "reload",
				value: function (t) {
					var e = this;
					if (!this.store.isReloading) {
						this.store.loading = !0;
						var n = (0, A.default)(this.store.iframeUrl);
						for (var o in this.metaOptions) {
							var i = this.metaOptions[o];
							n.query += "&" + i.$orgName + "=" + this.postMeta[i.$name]
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
	e.default = l
}, function (t, e, n) {
	(function (e) {
		"use strict";

		function o(t) {
			var n = e && e.location || {};
			t = t || n;
			var o, i = {},
				r = typeof t;
			if ("blob:" === t.protocol) i = new s(unescape(t.pathname), {});
			else if ("string" === r) {
				i = new s(t, {});
				for (o in I) delete i[o]
			} else if ("object" === r) {
				for (o in t) o in I || (i[o] = t[o]);
				void 0 === i.slashes && (i.slashes = C.test(t.href))
			}
			return i
		}

		function i(t) {
			var e = c.exec(t);
			return {
				protocol: e[1] ? e[1].toLowerCase() : "",
				slashes: !!e[2],
				rest: e[3]
			}
		}

		function r(t, e) {
			for (var n = (e || "/").split("/").slice(0, -1).concat(t.split("/")), o = n.length, i = n[o - 1], r = !1, s = 0; o--;) "." === n[o] ? n.splice(o, 1) : ".." === n[o] ? (n.splice(o, 1), s++) : s && (0 === o && (r = !0), n.splice(o, 1), s--);
			return r && n.unshift(""), "." !== i && ".." !== i || n.push(""), n.join("/")
		}

		function s(t, e, n) {
			if (!(this instanceof s)) return new s(t, e, n);
			var g, a, c, C, I, d, p = u.slice(),
				h = typeof e,
				f = this,
				v = 0;
			for ("object" !== h && "string" !== h && (n = e, e = null), n && "function" != typeof n && (n = l.parse), e = o(e), a = i(t || ""), g = !a.protocol && !a.slashes, f.slashes = a.slashes || g && e.slashes, f.protocol = a.protocol || e.protocol || "", t = a.rest, a.slashes || (p[3] = [/(.*)/, "pathname"]); v < p.length; v++) C = p[v], "function" != typeof C ? (c = C[0], d = C[1], c !== c ? f[d] = t : "string" == typeof c ? ~(I = t.indexOf(c)) && ("number" == typeof C[2] ? (f[d] = t.slice(0, I), t = t.slice(I + C[2])) : (f[d] = t.slice(I), t = t.slice(0, I))) : (I = c.exec(t)) && (f[d] = I[1], t = t.slice(0, I.index)), f[d] = f[d] || (g && C[3] ? e[d] || "" : ""), C[4] && (f[d] = f[d].toLowerCase())) : t = C(t);
			n && (f.query = n(f.query)), g && e.slashes && "/" !== f.pathname.charAt(0) && ("" !== f.pathname || "" !== e.pathname) && (f.pathname = r(f.pathname, e.pathname)), A(f.port, f.protocol) || (f.host = f.hostname, f.port = ""), f.username = f.password = "", f.auth && (C = f.auth.split(":"), f.username = C[0] || "", f.password = C[1] || ""), f.origin = f.protocol && f.host && "file:" !== f.protocol ? f.protocol + "//" + f.host : "null", f.href = f.toString()
		}

		function g(t, e, n) {
			var o = this;
			switch (t) {
				case "query":
					"string" == typeof e && e.length && (e = (n || l.parse)(e)), o[t] = e;
					break;
				case "port":
					o[t] = e, A(e, o.protocol) ? e && (o.host = o.hostname + ":" + e) : (o.host = o.hostname, o[t] = "");
					break;
				case "hostname":
					o[t] = e, o.port && (e += ":" + o.port), o.host = e;
					break;
				case "host":
					o[t] = e, /:\d+$/.test(e) ? (e = e.split(":"), o.port = e.pop(), o.hostname = e.join(":")) : (o.hostname = e, o.port = "");
					break;
				case "protocol":
					o.protocol = e.toLowerCase(), o.slashes = !n;
					break;
				case "pathname":
				case "hash":
					if (e) {
						var i = "pathname" === t ? "/" : "#";
						o[t] = e.charAt(0) !== i ? i + e : e
					} else o[t] = e;
					break;
				default:
					o[t] = e
			}
			for (var r = 0; r < u.length; r++) {
				var s = u[r];
				s[4] && (o[s[1]] = o[s[1]].toLowerCase())
			}
			return o.origin = o.protocol && o.host && "file:" !== o.protocol ? o.protocol + "//" + o.host : "null", o.href = o.toString(), o
		}

		function a(t) {
			t && "function" == typeof t || (t = l.stringify);
			var e, n = this,
				o = n.protocol;
			o && ":" !== o.charAt(o.length - 1) && (o += ":");
			var i = o + (n.slashes ? "//" : "");
			return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), i += n.host + n.pathname, e = "object" == typeof n.query ? t(n.query) : n.query, e && (i += "?" !== e.charAt(0) ? "?" + e : e), n.hash && (i += n.hash), i
		}
		var A = n(83),
			l = n(84),
			c = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
			C = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
			u = [
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
			I = {
				hash: 1,
				query: 1
			};
		s.prototype = {
			set: g,
			toString: a
		}, s.extractProtocol = i, s.location = o, s.qs = l, t.exports = s
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

	function o(t) {
		for (var e, o = /([^=?&]+)=?([^&]*)/g, i = {}; e = o.exec(t);) {
			var r = n(e[1]),
				s = n(e[2]);
			r in i || (i[r] = s)
		}
		return i
	}

	function i(t, e) {
		e = e || "";
		var n = [];
		"string" != typeof e && (e = "?");
		for (var o in t) r.call(t, o) && n.push(encodeURIComponent(o) + "=" + encodeURIComponent(t[o]));
		return n.length ? e + n.join("&") : ""
	}
	var r = Object.prototype.hasOwnProperty;
	e.stringify = i, e.parse = o
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = ["app", "store", "utils", function t(e, n, o) {
			function i() {
				return n.breakpoints.default
			}

			function s() {
				return n.breakpoints.current
			}

			function g(t, e) {
				return e = e || s(), e > i() ? A(t, e) : c(t, e)
			}

			function a(t, e) {
				return e = e || s(), e > i() ? l(t, e) : C(t, e)
			}

			function A(t, e) {
				for (var n = e || s(); n >= 0; n--)
					if (t[n]) return t[n];
				return null
			}

			function l(t, e) {
				for (var n = e || s(); n >= 0; n--)
					if (t[n]) return n;
				return 0
			}

			function c(t, e) {
				for (var n = e || s(); n < t.length; n++)
					if (t[n]) return t[n];
				return null
			}

			function C(t, e) {
				for (var n = e || s(); n < t.length; n++)
					if (t[n]) return n;
				return 0
			}

			function u(t, e, n) {
				for (var o = e + 1; o < n; o++)
					if (t[o]) return !0;
				return !1
			}
			return (0, r.default)(this, t), {
				defaultBreakpoint: i,
				currentBreakpoint: s,
				getMediaValue: g,
				getMediaIndex: a,
				getLowerMediaValue: A,
				getLowerMediaIndex: l,
				getHigherMediaValue: c,
				getHigherMediaIndex: C,
				hasValueBetween: u
			}
		}];
	e.default = s
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(87),
		A = o(a),
		l = function () {
			function t(e, n, o, i) {
				(0, r.default)(this, t), this.app = e, this.$timeout = n, this.$templateCache = o, this.ShortcodeEvent = i
			}
			return t.$inject = ["app", "$timeout", "$templateCache", "ShortcodeEvent"], (0, g.default)(t, [{
				key: "instantiate",
				value: function (t, e, n) {
					return new A.default(t, e, n)
				}
			}, {
				key: "create",
				value: function (t, e, n) {
					var o = this.instantiate(t, e, n);
					return o.$$new = !0, o
				}
			}, {
				key: "move",
				value: function (t, e, n) {
					var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
						i = e.addChild(t, n, o);
					return i.$$moved = !0, t.$parentId !== i.$parentId && (this.app.trigger(this.ShortcodeEvent.DETACHED, t), i.$$new = !!i.data.template || !!this.$templateCache.get(i.$id)), this.app.trigger(this.ShortcodeEvent.MOVED, i), i
				}
			}, {
				key: "duplicate",
				value: function (t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
						n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
						o = t.duplicate(e, n);
					return o.$$new = !0, o.data.template || this.$templateCache.put(o.$id, this.$templateCache.get(t.$id)), o
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
	e.default = l
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t, e) {
		var n = Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
		return e ? t.tag + "-" + n : "root"
	}

	function r(t, e) {
		return null === t ? t : "string" == typeof t && "" === t ? t : isNaN(t) ? angular.isUndefined(t) ? e.default : (Array.isArray(t) && (t = t.join(e.config ? e.config.delimiter : ",")), String(t)) : "string" != typeof t || !/^0\d/.test(t) && "+" !== t.charAt(0) ? Number(t) : String(t)
	}

	function s(t, e) {
		var n = {};
		for (var o in t) "$" !== o.charAt(0) && "children" !== o && t.hasOwnProperty(o) && (n[o] = angular.copy(t[o]));
		if (t.isParent) {
			n.children = [];
			for (var i = 0; i < t.children.length; i++) n.children.push(s(t.children[i], e))
		}
		return t.$textContent && (n.content = t.$textContent), e && e(n, t), n
	}

	function g(t) {
		var e = null,
			n = angular.copy(t);
		if (angular.isDefined(n.children))
			for (var o in n.children) e = g(m.store.shortcodes[n.children[o].tag].presets[0].content), n.children[o].isparent && !n.children[o].children.length && (n.children[o] = angular.merge({}, e, n.children[o])), n.children[o].content && "" === n.children[o].content && (n.children[o].content = e.content);
		return n
	}

	function a(t) {
		var e = [];
		return t.children && t.children.forEach(function (t) {
			e.push(t), e.concat(a(t))
		}), e
	}

	function A(t) {
		var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.store.breakpoints.current;
		return e > m.store.breakpoints.default ? l(t, e) : c(t, e)
	}

	function l(t) {
		for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.store.breakpoints.current, n = e; n >= 0; n--)
			if (null !== t[n]) return t[n];
		return null
	}

	function c(t) {
		for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m.store.breakpoints.current, n = e; n < t.length; n++)
			if (null !== t[n]) return t[n];
		return null
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var C = n(61),
		u = o(C),
		I = n(14),
		d = o(I),
		p = n(12),
		h = o(p),
		f = n(13),
		v = o(f),
		m = n(32),
		y = n(88),
		b = {},
		$ = void 0,
		w = function () {
			function t(e, n, o) {
				var s = this;
				(0, h.default)(this, t), angular.merge(this, e), this.responsiveValues = {}, this.optionValues = {}, this.$isReady = !1;
				var g = this;
				this.$id = o || e.$id || i(e, n), this.$parentId = n ? n.$id : e.$parentId || null, this.$textContent = e.content || "", this.data = angular.copy(m.store.shortcodes[this.tag]), n && angular.extend(this.data, n.data.children), this.states = {}, this.options = {
					get $responsive() {
						return g.responsiveValues
					},
					set $responsive(t) {
						g.responsiveValues = t
					}
				};
				for (var a in e.options.$responsive) {
					this.responsiveValues[a] = [];
					for (var l = 0; l < e.options.$responsive[a].length; l++) this.responsiveValues[a][l] = r(e.options.$responsive[a][l], this.data.options.named[a])
				}
				var c = function (t) {
					return "$" === t.charAt(0) ? "continue" : ((0, d.default)(s.options, t, {
						enumerable: !0,
						get: function () {
							var e = s.data.options.named[t];
							return e.responsive ? A(s.responsiveValues[t]) : s.optionValues[t]
						},
						set: function (e) {
							var n = s.data.options.named[t],
								o = r(e, n),
								i = m.store.breakpoints.current;
							if (s.$isReady && m.store.enabled && (clearTimeout($), b[s.$id] || (b[s.$id] = {}), b[s.$id][t] || (b[s.$id][t] = {
									optionValue: angular.copy(s.optionValues[t]),
									responsiveValue: angular.copy(s.responsiveValues[t])
								}), $ = setTimeout(function () {
									var e = (0, u.default)(b);
									1 === e.length && 1 === (0, u.default)(b[e[0]]).length ? m.store.$addAction("updateOption", {
										id: s.$id,
										name: t,
										override: !1,
										optionValue: b[e[0]][t].optionValue,
										responsiveValue: b[e[0]][t].responsiveValue,
										key: "updateOption-" + e[0] + "-" + t + "-" + i
									}) : e.length && m.store.$addAction("updateMultipleOptions", {
										mutations: b,
										override: !1,
										key: "updateMultipleOptions-" + e.join("-") + "-" + i
									}), b = {}, s.apply()
								}, 250)), s.optionValues[t] = o, n.responsive) {
								var g = A(s.responsiveValues[t]);
								o !== g && (s.responsiveValues[t][i] = o)
							}
						}
					}), void(s.options[t] = e.options[t]))
				};
				for (var C in e.options) {
					c(C)
				}
				this.data.options.flat.forEach(function (t) {
					null === s.options[t.$name] && (s.options[t.$name] = t.default), t.$isValid(s.options, n) || (s.options[t.$name] = null, t.responsive && s.options.$responsive[t.$name].map(function () {
						return null
					}))
				}), m.store.shortcode[this.$id] = this, e.hasOwnProperty("children") && (this.children = e.children.map(function (e) {
					return new t(e, s)
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
					var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
						i = void 0;
					if (e instanceof t)
						if (e.$parentId !== this.$id) {
							var r = e.$parentId,
								a = e.index;
							i = new t(s(e.detatch(), function (t, e) {
								t.$id = e.$id
							}), this, e.$id), o && m.store.$addAction("moveChild", {
								key: "moveChild-" + i.$id + "-" + r + "-" + a,
								id: i.$id,
								parentId: this.$id,
								index: n,
								fromIndex: a,
								fromParentId: r
							})
						} else {
							var A = e.index;
							n -= n > e.index ? 1 : 0, i = e.detatch(), o && m.store.$addAction("reorderChildren", {
								key: "reorderChildren-" + e.$id + "-" + A + "-" + n,
								parentId: this.$id,
								id: e.$id,
								toIndex: n,
								fromIndex: A
							})
						}
					else i = new t(g(e), this), o && m.store.$addAction("addChild", {
						key: "addChild-" + this.$id + "-" + i.$id,
						id: i.$id,
						parentId: this.$id,
						index: n,
						data: i.copy(function (t, e) {
							t.$id = e.$id
						})
					});
					if (!this.allows(i)) throw Error(i.data.name + " is not allowed in " + this.data.name);
					var l = n >= 0 ? n : this.children.length;
					return this.children.splice(l, 0, i), i
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
						for (var o = 0; o < this.children.length; o++) e.children.push(this.children[o].copy(t))
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
					return (0, y.isAllowed)(t, this)
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
					return (0, y.allowedShortcodes)(this)
				}
			}, {
				key: "presets",
				get: function () {
					var t = this.parent.allowed,
						e = angular.copy(this.data.presets);
					return e.forEach(function (n, o) {
						var i = a(n.content);
						return i.unshift(n.content), t.hasOwnProperty(n.content.tag) ? void i.forEach(function (t) {
							t.tag === parent.tag && m.store.shortcodes[t.tag].nested !== !0 && e.splice(o, 1)
						}) : e.splice(o, 1)
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

	function o(t, e) {
		return !e.isSelfOrDescendantOf(t) && (!t.descendants.filter(function (t) {
			return t.data.nested === !1 && t.tag === e.tag
		}).length && e.allowed.hasOwnProperty(t.tag))
	}

	function i(t) {
		var e = t.ancestorsAndSelf,
			n = {};
		if (t.data.allow.length) return t.data.allow.reduce(function (t, e) {
			return r.store.shortcodes[e] && (t[e] = r.store.shortcodes[e]), t
		}, {});
		var o = function (o) {
			var i = r.store.shortcodes[o];
			return i.hidden ? "continue" : i.require.length && i.require.indexOf(t.tag) === -1 ? "continue" : i.nested === !1 && t.tag === i.tag ? "continue" : i.nested === !1 && e.filter(function (t) {
				return t.tag === i.tag
			}).length ? "continue" : void(n[i.tag] = i)
		};
		for (var i in r.store.shortcodes) {
			o(i)
		}
		return n
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.isAllowed = o, e.allowedShortcodes = i;
	var r = n(32)
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i, s) {
				var g = this;
				(0, r.default)(this, t), this.store = e, this.$iframe = n, this.$timeout = s, o.addEventListener("resize", function () {
					return g.updateOffsets()
				}), o.addEventListener("scroll", function () {
					return g.updateOffsets()
				}), this.updateOffsets(!0, 0)
			}
			return t.$inject = ["store", "$iframe", "$window", "$document", "$timeout"], (0, g.default)(t, [{
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
					for (var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 50, i = [], r = !!this.store.isDragging, s = 0; s < this.store.targets.length; s++) {
						var g = this.store.targets[s],
							a = g.element[0].ownerDocument.defaultView,
							A = t,
							l = e,
							c = void 0,
							C = void 0,
							u = void 0,
							I = void 0,
							d = void 0;
						if (g.active && ("center" !== g.name || g.shortcode.isEmpty) && (!r || g.droppable) && (r || g.addable) && (r || a.frameElement))
							if (a) {
								switch (a.frameElement && angular.isDefined(this.frameOffsets) && (A -= this.frameOffsets.left, l -= this.frameOffsets.top), g.name) {
									case "top":
										d = g.shortcode.index, u = g.offsets.left + g.offsets.width / 2, I = g.offsets.top, c = n ? u : A, C = I;
										break;
									case "right":
										d = g.shortcode.index + 1, u = g.offsets.right, I = g.offsets.top + g.offsets.height / 2, c = g.offsets.right, C = n ? I : l;
										break;
									case "bottom":
										d = g.shortcode.index + 1, u = g.offsets.left + g.offsets.width / 2, I = g.offsets.bottom, c = n ? u : A, C = I;
										break;
									case "left":
										d = g.shortcode.index, u = g.offsets.left, I = g.offsets.top + g.offsets.height / 2, c = u, C = n ? I : l;
										break;
									case "center":
										d = 0, u = u = g.offsets.left + g.offsets.width / 2, I = I = g.offsets.top + g.offsets.height / 2
								}
								var p = {
										fromSide: Math.sqrt(Math.pow(Math.abs(c - A), 2) + Math.pow(Math.abs(C - l), 2)),
										fromCenter: Math.sqrt(Math.pow(Math.abs(u - A), 2) + Math.pow(Math.abs(I - l), 2))
									},
									h = g.shortcode.isEmpty,
									f = h ? 0 : o,
									v = this.isInside(g, A, l, f),
									m = this.isInside(g, A, l),
									y = h ? v : p.fromSide < f;
								v && y && i.push({
									target: g.target || ("center" !== g.name ? g.shortcode.parent : g.shortcode),
									insideLimit: v,
									insideElement: m,
									element: g.element,
									shortcode: g.shortcode,
									name: g.name,
									distance: p,
									index: d
								})
							} else this.removeElement(g.element.get(0))
					}
					return _.chain(i).sortBy(function (t) {
						return -t.target.ancestors.length
					}).sortBy(function (t) {
						return t.distance.fromCenter
					}).value()
				}
			}, {
				key: "isInside",
				value: function (t, e, n) {
					var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
						i = {
							x: o,
							y: o
						},
						r = Math.min(t.offsets.left - i.x, t.offsets.right + i.x),
						s = Math.max(t.offsets.left - i.x, t.offsets.right + i.x),
						g = Math.min(t.offsets.top - i.y, t.offsets.bottom + i.y),
						a = Math.max(t.offsets.top - i.y, t.offsets.bottom + i.y);
					return r <= e && e <= s && g <= n && n <= a
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
							var o = t.store.targets[n];
							(e || o.active && o.element[0].ownerDocument.defaultView === window) && ("center" === o.name && o.shortcode.isEmpty && o.shortcode.$content && o.element[0].ownerDocument.defaultView.frameElement ? o.offsets = o.shortcode.$content.outerOffset({
								includeMargins: !0
							}) : o.element ? o.offsets = o.element.outerOffset({
								includeMargins: !0
							}) : t.store.remove(o.shortcode))
						}
						delete t.store.__updateTargets
					}, n, !1)
				}
			}]), t
		}();
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = ["store", "$document", "$window", "$iframe", function t(e, n, o, i) {
			(0, r.default)(this, t), this.arrayPrefix = function (t, e) {
				return t.reduce(function (t, n) {
					return t.push("" + e + n), t
				}, [])
			}, this.isIframe = function () {
				return !!o.frameElement
			}, this.getGlobalCoordinates = function (t, e, n) {
				if (t.frameElement) {
					var o = t.frameElement.getBoundingClientRect();
					e += o.left, n += o.top
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
				var n = o.parent || o,
					r = n.document,
					s = i().get(0).contentWindow,
					g = i().get(0).contentDocument,
					a = t,
					A = e,
					l = i().get(0).getBoundingClientRect(),
					c = t - l.left,
					C = e - l.top,
					u = n.angular.element(r.elementFromPoint(a, A)),
					I = s.angular.element(g.elementFromPoint(c, C));
				return I.length ? I : u
			}, this.shortcodeFromPoint = function (t, n) {
				return this.elementFromPoint(t, n).shortcode() || e.postContent
			}
		}];
	e.default = s
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n) {
				var o = this;
				(0, r.default)(this, t), this.app = e, this.$editor = (window.parent || window).angular.element("wp-editor"), this.$iframe = this.$editor.find("iframe").get(0).contentWindow, n.addEventListener("message", function (t) {
					return o.onMessage(t)
				}, !1)
			}
			return t.$inject = ["app", "$window"], (0, g.default)(t, [{
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
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e) {
				var n = this;
				(0, r.default)(this, t), this.$media = (window.parent || window).angular.element("wp-media"), this.$iframe = this.$media.find("iframe").get(0).contentWindow, e.addEventListener("message", function (t) {
					return n.onMessage(t)
				}, !1)
			}
			return t.$inject = ["$window"], (0, g.default)(t, [{
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
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = ["$angular", "$window", function t(e, n) {
			return (0, r.default)(this, t),
				function () {
					return e.element((n.parent.document || document).getElementsByTagName("iframe")[0])
				}
		}];
	e.default = s
}, , , function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t) {
		var e = n(97);
		angular.forEach(e.keys(), function (n) {
			t.put(n.replace("./", ""), e(n))
		})
	}
	i.$inject = ["$templateCache"];
	var r = n(7),
		s = o(r);
	s.default.run(i)
}, function (t, e, n) {
	function o(t) {
		return n(i(t))
	}

	function i(t) {
		return r[t] || function () {
			throw new Error("Cannot find module '" + t + "'.")
		}()
	}
	var r = {
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
	o.keys = function () {
		return Object.keys(r)
	}, o.resolve = i, t.exports = o, o.id = 97
}, function (t, e) {
	t.exports = '<div ng-if="$ctrl.errorMessage" class="error-message">\n  {{ $ctrl.errorMessage }}\n</div>\n\n<div class="add-shortcode-selector">\n  <div class="add-shortcode-header">\n    <h2 class="title">添加内容</h2>\n    <nav class="add-shortcode-types">\n      <button type="button"\n        ng-click="$ctrl.showType(\'shortcodes\')"\n        ng-class="{ active: $ctrl.type === \'shortcodes\' }">\n        元素\n      </button>\n      <button type="button"\n        ng-if="$ctrl.shortcode.isRoot"\n        ng-click="$ctrl.showType(\'import\')"\n        ng-class="{ active: $ctrl.type === \'import\' }">\n        导入\n      </button>\n    </nav>\n  </div>\n\n  <div class="add-shortcode-items" ng-if="$ctrl.type === \'shortcodes\'">\n    \n    <div class="flatsome-studio-button" ng-if="$ctrl.flatsomeStudioIsActive">\n      <button type="button" class="wp-style alt button-large button-block"\n        ng-click="$ctrl.showFlatsomeStudio()">\n        <span class="dashicons dashicons-screenoptions"></span> Flatsome工作室\n      </button>\n      <hr />\n    </div>\n\n    <input class="filter-elements" type="text" placeholder="搜索&hellip;" ng-model="$ctrl.filter.name">\n\n    <div class="add-shortcode-category"\n      ng-repeat="category in $ctrl.items"\n      ng-show="items.length">\n      <h3>{{:: category.name }}</h3>\n      <ul>\n        <li ng-repeat="item in items = (category.items | filter: $ctrl.filter)">\n          <button type="button" ng-click="$ctrl.add(item, 0)">\n            <img ng-if="item.thumbnail" ng-src="{{:: item.thumbnail }}" alt="{{:: item.name }}"/>\n            <span class="title">{{:: item.name }}</span>\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<template-importer ng-if="$ctrl.type === \'import\'"></template-importer>\n\n<div class="add-shortcode-presets">\n  <h3>预设</h3>\n  <div ng-class="{ \'is-visible\': $ctrl.isLoading }" class="loading-spinner"></div>\n  <ul ng-if="$ctrl.presets">\n    <li ng-class="{ active : $ctrl.currentPreset === $index }"\n      ng-repeat="preset in $ctrl.presets track by preset.name">\n      <button type="button"\n        title="{{:: preset.name }}"\n        ng-class="{ \'with-thumbnail\' : !!preset.thumbnail }"\n        ng-click="$ctrl.usePreset(preset.content); $ctrl.currentPreset = $index">\n        <img ng-if="preset.thumbnail" ng-src="{{:: preset.thumbnail }}" alt="{{:: preset.name }}">\n        <span class="title">{{:: preset.name }}</span>\n      </button>\n    </li>\n  </ul>\n  <button\n    type="button"\n    class="wp-style alt button-large button-block"\n    ng-click="$ctrl.stack.close()"\n    ng-if="$ctrl.presets">\n    应用\n  </button>\n</div>\n'
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
	t.exports = '<ux-option-colorpicker\n  option="$ctrl.option"\n  model="$ctrl.model"\n></ux-option-colorpicker>\n\n<div ng-if="$ctrl.option.helpers" class="option-helpers option-helpers-colors">\n  <a href="javascript:"\n    title="删除"\n    ng-click="$ctrl.model = null">\n    <span class="dashicons dashicons-no-alt"></span>\n  </a>\n  <a href="javascript:"\n    title="{{:: value.title }}"\n    style="background-color: {{:: value.value }}"\n    ng-repeat="(key, value) in $ctrl.option.helpers"\n    ng-click="$ctrl.model = value.value">\n  </a>\n</div>\n'
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
	t.exports = '<div class="slider-wrap">\n\n  <input type="range"\n    ng-attr-min="{{:: $ctrl.option.min }}"\n    ng-attr-max="{{:: $ctrl.option.max }}"\n    ng-attr-step="{{:: $ctrl.option.step }}"\n    ng-attr-value="{{:: $ctrl.model }}"\n    ng-model="$ctrl.model">\n\n  <input type="number" to-number\n    ng-attr-min="{{:: $ctrl.option.min }}"\n    ng-attr-max="{{:: $ctrl.option.max }}"\n    ng-model="$ctrl.model">\n\n  <span class="slider-unit">{{:: $ctrl.option.unit }}</span>\n\n</div>\n'
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
	t.exports = '<app-sidebar-view class="home-view">\n\n  <view-header>\n\n  </view-header>\n\n  <view-body>\n    <shortcode-hierarchy-list shortcode="$ctrl.store.postContent"></shortcode-hierarchy-list>\n  </view-body>\n\n  <view-footer>\n    <button id="app-draft-button" type="button"\n      class="wp-style button-large button-block"\n      ng-if="$ctrl.store.post.status === \'draft\' || $ctrl.store.post.status === \'auto-draft\'"\n      ng-class="{ \'loading\': $ctrl.store.isSaving === \'draft\' }"\n      ng-disabled="$ctrl.permissions.save === false"\n      ng-click="$ctrl.save(\'draft\')">\n      保存草稿\n    </button>\n    <button id="app-private-button" type="button"\n      class="wp-style button-large button-block"\n      ng-if="$ctrl.store.post.status === \'private\'"\n      ng-class="{ \'loading\': $ctrl.store.isSaving === \'private\' }"\n      ng-disabled="$ctrl.permissions.save === false"\n      ng-click="$ctrl.save(\'private\')">\n      保存私人\n    </button>\n    <button id="app-save-button" type="button"\n      class="wp-style alt button-large button-block"\n      ng-class="{ \'loading\': $ctrl.store.isSaving && $ctrl.store.isSaving !== \'draft\' && $ctrl.store.isSaving !== \'private\'}"\n      ng-disabled="$ctrl.permissions.save === false"\n      ng-click="$ctrl.save()">\n      {{ $ctrl.saveButtonText }}\n    </button>\n    <button id="app-save-button" type="button"\n      class="wp-style button-large button-block button-exit animate-fade-in-right"\n      ng-if="$ctrl.store.isSaved"\n      ng-click="$ctrl.app.exit()">\n      &times;\n    </button>\n  </view-footer>\n\n</app-sidebar-view>\n';
}, function (t, e) {
	t.exports = '<app-sidebar-view class="settings-view">\n\n  <view-header>\n    <div class="title-row">\n      <div class="title-row-icon">\n          <button class="button-reset view-header-title" type="button" ng-click="$ctrl.   exit()">\n               <span class="dashicons dashicons-arrow-left-alt2"></span>\n          </button>\n      </div>\n      <div class="title-row-title"> 文章设置 </div>\n    </div>\n  </view-header>\n\n  <view-body>\n    <ux-options\n      options="$ctrl.post.attributes.options.tree"\n      model="$ctrl.post.attributes.values">\n    </ux-options>\n    <ux-options\n      options="$ctrl.post.meta.options.tree"\n      model="$ctrl.post.meta.values">\n    </ux-options>\n    <div class="box">\n      <h3 class="box-title">清除文章内容</h3>\n      <div class="box-content">\n        <button class="wp-style danger button-block" ng-click="$ctrl.clearContent()">清除...</button>\n      </div>\n    </div>\n  </view-body>\n\n  <view-footer>\n    <button type="button" class="wp-style blank" ng-click="$ctrl.discard()">\n      <span class="dashicons dashicons-no-alt"></span>弃用\n    </button>\n    <button type="button" class="wp-style" ng-click="$ctrl.exit()">\n      <span class="dashicons dashicons-yes"></span>应用\n    </button>\n  </view-footer>\n\n</app-sidebar-view>\n'
}, function (t, e) {
	t.exports = '<app-sidebar-view class="shortcode-view">\n\n  <view-header>\n    <div class="title-row">\n      <div class="title-row-icon">\n         <button class="button-reset view-header-title" type="button" ng-click="$ctrl.exit(\'/\')">\n             <span class="dashicons dashicons-arrow-left-alt2"></span>\n         </button>\n      </div>\n      <div class="title-row-title"> {{ $ctrl.shortcode.data.name }} </div>\n      <div class="title-row-actions"></div>\n    </div>\n  </view-header>\n\n  <view-body>\n    <ux-options\n      options="$ctrl.options"\n      shortcode="$ctrl.shortcode"\n      responsive="$ctrl.responsiveValues"\n      model="$ctrl.shortcode.options">\n    </ux-options>\n  </view-body>\n\n  <view-footer>\n    <button type="button" class="wp-style outline" ng-click="$ctrl.discard()">\n      弃用\n    </button>\n    <button type="button" class="wp-style" ng-click="$ctrl.exit()">\n      应用\n    </button>\n  </view-footer>\n\n</app-sidebar-view>\n'
}, function (t, e) {
	t.exports = '<div class="uxb-template-loading">加载中...</div>\n'
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(7),
		A = o(a),
		l = function () {
			function t(e, n, o) {
				(0, r.default)(this, t), this.app = e, this.$scope = n, o.toggleClass("with-label", !!this.label)
			}
			return t.$inject = ["app", "$scope", "$element"], (0, g.default)(t, [{
				key: "addShortcode",
				value: function () {
					this.app.outlineShortcode(null), this.app.selectShortcode(null), this.app.configureShortcode(null), this.app("stack").open('\n      <add-shortcode\n        shortcode="$ctrl.shortcode"\n        index="$ctrl.index"\n      ></add-shortcode>\n    ', this.$scope)
				}
			}]), t
		}();
	A.default.component("addButton", {
		controller: l,
		bindings: {
			shortcode: "<",
			label: "@",
			index: "<"
		},
		template: '\n    <button type="button" ng-click="$ctrl.addShortcode()">\n      <div class="wrapper">\n        <span class="icon">+</span>\n        <span class="label">{{:: $ctrl.label }}</span>\n      </div>\n    </button>\n  '
	})
}, , , , , , , , , , , , , , , function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i);
	r.default.component("templateSelector", {
		controller: ["app", "store", "iframe", function (t, e, n) {
			this.store = e, this.setTemplate = function (o) {
				e.loading = !0, jQuery.post(e.ajaxUrl, {
					action: "ux_builder_to_array",
					id: o
				}).done(function (i) {
					var r = i.data,
						s = i.success;
					return s ? (e.post.meta.values.hasOwnProperty("_wp_page_template") && (e.post.meta.values._wp_page_template = e.templates[o].template || "default"), n.reload(r.content), void t.apply()) : console.error("Failed to compile template " + o)
				})
			}
		}],
        template: '\n    <h2 class="uxb-templates-title">插入模板<br/> <small> *不包括图片。</small></h2>\n    <ul class="uxb-templates-list">\n      <li class="uxb-template" ng-repeat="(id, template) in $ctrl.store.templates track by id">\n        <button type="button" class="uxb-template-button" ng-click="$ctrl.setTemplate(id)">\n          <img ng-attr-src="{{:: template.thumbnail }}">\n          <span class="">{{:: template.name }}</span>\n        </button>\n      </li>\n    </ul>\n  '
	})
}, , , function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t) {
		var e = [],
			n = t.split(".");
		return _.each(n, function (t) {
			e.push(jQuery.camelCase(t.replace(/\:/g, "-")))
		}), e.join(".")
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.data = void 0;
	var r = n(12),
		s = o(r),
		g = n(13),
		a = o(g),
		A = e.data = (window.frameElement ? window.parent : window).uxBuilderData,
		l = function () {
			function t(e) {
				(0, s.default)(this, t), this.$parse = e
			}
			return t.$inject = ["$parse"], (0, a.default)(t, [{
				key: "storage",
				value: function () {
					return A
				}
			}, {
				key: "set",
				value: function (t, e) {
					return this.$parse(i(t)).assign(A, e)
				}
			}, {
				key: "get",
				value: function (t, e) {
					var n = this.$parse(i(t))(A);
					return !angular.isDefined(n) && e ? this.set(t, e) : n
				}
			}, {
				key: "unset",
				value: function (t) {
					var e;
					return t.indexOf("*") ? (e = t.split("*")[0], this.$parse(i(e)).assign(A, null)) : this.$parse(i(t)).assign(A, null)
				}
			}]), t
		}();
	e.default = l
}, function (t, e, n) {
	(function (t) {
		"use strict";

		function e(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(3), n(6), n(33), n(37), n(43), n(51), n(96), n(147);
		var o = n(7),
			i = e(o),
			r = n(145);
		n(127), n(151), n(160), n(162), n(164), n(165), n(166), n(168), n(169), n(170), n(172), n(173), n(174), n(177), n(178), n(179), n(181), n(182), n(184), n(142), n(185), n(186), n(200), n(201), n(202), t.UxBuilder = o.uxBuilder, i.default.run(["$window", function (t) {
			var e = t.uxBuilderData;
			e.history = [], e.enabled = !0, e.currentAction = -1
		}]), i.default.requires.push("ngAnimate"), i.default.requires.push("ui.router"), i.default.requires.push("app.filters"), i.default.requires.push("app.services");
		for (var s in r.data.modules.master) i.default.requires.push(r.data.modules.master[s])
	}).call(e, function () {
		return this
	}())
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t, e, n, o) {
		var i = t.defer();
		return e.initialized ? i.resolve(!0) : (n.$on(o.READY, function () {
			return i.resolve(!0)
		}), i.promise)
	}
	i.$inject = ["$q", "store", "$rootScope", "AppEvent"];
	var r = n(7),
		s = o(r);
	s.default.config(["$stateProvider", "$urlRouterProvider", function (t, e) {
		t.state("home", {
			url: "/",
			template: n(123),
			controller: n(148).default,
			controllerAs: "$ctrl",
			resolve: {
				factory: i
			}
		}).state("shortcode", {
			url: "/shortcode/:id",
			template: n(125),
			controller: n(149).default,
			controllerAs: "$ctrl",
			resolve: {
				factory: i
			}
		}).state("settings", {
			url: "/settings",
			template: n(124),
			controller: n(150).default,
			controllerAs: "$ctrl",
			resolve: {
				factory: i
			}
		}).state("add", {
			url: "/add",
			template: "<div>ADD</div>",
			resolve: {
				factory: i
			}
		}), e.otherwise("/")
	}])
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i) {
				(0, r.default)(this, t), this.app = e, this.store = n, this.utils = o, this.$log = i, this.permissions = angular.copy(this.store.permissions)
			}
			return t.$inject = ["app", "store", "utils", "$log"], (0, g.default)(t, [{
				key: "save",
				value: function () {
					var t = this,
						e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "publish";
					if (this.permissions.save) {
						var n = {
							status: e,
							id: this.store.post.id,
							attributes: this.store.post.attributes.values,
							meta: this.store.post.meta.values
						};
						n.content = this.store.postContent.copy(function (e, n) {
							var o = t.store.breakpoints.default,
								i = n.options.$responsive;
							for (var r in i) e.options[r] = i[r][o];
							for (var s in e.options)
								if ("$responsive" !== s) {
									var g = n.data.options.named[s];
									null === e.options[s] && g.$isValid(n.options, n.parent) && (e.options[s] = n.data.options.get(s).default)
								}
						}), this.$log.debug("Saving", n), this.store.isSaving = e, this.store.isSaved = !1, jQuery.post(this.store.ajaxUrl, {
							action: "ux_builder_save",
							data: angular.toJson(n),
							security: this.store.nonce
						}).success(this.onSaveSuccess.bind(this)).fail(this.onSaveFail.bind(this))
					}
				}
			}, {
				key: "onSaveSuccess",
				value: function (t) {
					var e = (t.success, t.data);
					e ? (this.$log.info("Post was saved", e), this.store.post.status = e.post.post_status, this.store.saveButton = e.save_button, this.store.isSaved = !0) : this.$log.warn("An error occurred while saving post"), this.store.isSaving = !1, this.app.apply()
				}
			}, {
				key: "onSaveFail",
				value: function (t) {
					this.$log.error(t), this.store.isSaving = !1, this.app.apply()
				}
			}, {
				key: "getOptionName",
				value: function (t, e) {
					for (var n in e) {
						if ("group" === e[n].type) return this.getOptionName(t, e[n].options);
						if (e[n].$name === t) return e[n].$orgName
					}
					return t
				}
			}, {
				key: "saveButtonText",
				get: function () {
					return this.store.saveButton
				}
			}]), t
		}();
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i, s, g, a, A, l) {
				var c = this;
				(0, r.default)(this, t), this.app = e, this.store = n, this.utils = o, this.$scope = s, this.shortcode = null, this.options = null, this.previousOptions = null, this.previousContent = null, this.responsiveHelper = a, this.currentHistoryAction = n.currentAction, n.shortcode[i.id] ? this.configure(n.shortcode[i.id]) : g(function () {
					return c.exit()
				}, 0, !1), s.$on(A.MOVED, function (t, e) {
					c.shortcode.$id === e.$id && (c.shortcode = e)
				}), s.$on(A.RECOMPILED, function (t, e) {
					c.shortcode.$id === e.$id && (c.shortcode = e, c.app.selectShortcode(e))
				}), s.$on("$destroy", function () {
					c.shortcode = null, c.options = [], c.previousOptions = null, c.previousContent = null, c.currentHistoryAction = null
				})
			}
			return t.$inject = ["app", "store", "utils", "$stateParams", "$scope", "$timeout", "ResponsiveHelper", "ShortcodeEvent", "DragEvent"], (0, g.default)(t, [{
				key: "configure",
				value: function (t) {
					this.shortcode !== t && (this.shortcode && this.clear(), this.options = [], this.shortcode = t, this.shortcode.states.active = !0, this.app.selectShortcode(t), this.shortcode.content && (this.previousContent = this.shortcode.content), this.shortcode.data.options.tree.length && (this.options = this.shortcode.data.options.tree, this.responsiveValues = this.shortcode.options.$responsive, this.previousOptions = angular.copy(this.shortcode.options)))
				}
			}, {
				key: "exit",
				value: function () {
					this.app.goto("/")
				}
			}, {
				key: "discard",
				value: function () {
					if (this.store.$disable(), this.previousContent && (this.shortcode.content = this.previousContent), this.previousOptions)
						for (var t in this.shortcode.options) "$" !== t.charAt(0) && (this.previousOptions.hasOwnProperty(t) ? this.shortcode.options[t] = this.previousOptions[t] : delete this.shortcode.options[t]);
					this.store.$resetToAction(this.currentHistoryAction), this.store.$enable(), this.exit()
				}
			}]), t
		}();
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i) {
				var s = this;
				(0, r.default)(this, t), this.app = e, this.store = n, this.post = n.post, this.manager = o, i.$watchCollection(function () {
					return s.post.attributes.values
				}, function (t, e) {
					t !== e && (s.store.isSaved = !1)
				}), i.$watchCollection(function () {
					return s.post.meta.values
				}, function (t, e) {
					t !== e && (s.store.isSaved = !1)
				})
			}
			return t.$inject = ["app", "store", "Shortcode", "$scope"], (0, g.default)(t, [{
				key: "clearContent",
				value: function () {
					if (confirm("Are you sure you want to clear all content?") === !0) {
						var t = this.store.postContent.copy(function (t, e) {
							t.$id = e.$id
						});
						this.store.$addAction("removeContent", {
							key: "removeContent",
							content: t.children
						}), this.manager.remove(this.store.postContent, !1)
					}
				}
			}, {
				key: "exit",
				value: function () {
					this.app.goto("/")
				}
			}]), t
		}();
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i);
	r.default.component("addShortcode", {
		controller: n(152).default,
		template: n(98),
		require: {
			stack: "^appStack"
		},
		bindings: {
			shortcode: "<",
			index: "<"
		}
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t) {
		var e = [];
		return _.each(t.children, function (t) {
			e.push(t), e = _.union(e, i(t))
		}), e
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = n(153),
		s = o(r),
		g = n(12),
		a = o(g),
		A = n(13),
		l = o(A),
		c = {},
		C = function () {
			function t(e, n, o, i, r, s, g, A) {
				var l = this;
				(0, a.default)(this, t), this.app = e, this.store = n, this.manager = o, this.type = "shortcodes", this.query = "", this.orderBy = "name", this.category = null, this.categories = [], this.items = [], this.items_ = [], this.filter = {
					name: ""
				}, this.isLoading = !1, this.errorMessage = "", this.$scope = i, this.$element = r, this.$timeout = s, this.$iframe = g, this.$placeholder = angular.element('<div class="uxb-placeholder"></div>'), this.ShortcodeEvent = A, i.$on("flatsome-studio-imported", function (t, e) {
					e.content.children.forEach(function (t) {
						l.addShortcode(t, !1), l.index++
					}), s(function () {
						return l.stack.close()
					})
				})
			}
			return t.$inject = ["app", "store", "Shortcode", "$scope", "$element", "$timeout", "$iframe", "ShortcodeEvent"], (0, l.default)(t, [{
				key: "$onInit",
				value: function () {
					var t = this;
					return this.showType("shortcodes"), _.each(this.items, function (e) {
						_.each(e.items, function (n, o) {
							var r = i(n.presets[0].content);
							r.unshift(n.presets[0].content), _.each(r, function (n) {
								t.shortcode.tag === n.tag && t.store.shortcodes[n.tag].nested === !1 && e.items.splice(o, 1)
							})
						})
					}), 1 === this.items.length && 1 === this.items[0].items.length ? this.add(this.items[0].items[0], 0) : (this.$timeout(function () {
						t.$element.find(".filter-elements").focus()
					}, 100), void this.$timeout(function () {
						t.shortcode.childAt(t.index) ? (t.shortcode.childAt(t.index).$element.before(t.$placeholder), t.$timeout(function () {
							return t.scrollToElement(t.$placeholder)
						}, 100)) : t.shortcode.childAt(t.index - 1) ? (t.shortcode.childAt(t.index - 1).$element.after(t.$placeholder), t.$timeout(function () {
							return t.scrollToElement(t.$placeholder)
						}, 100)) : t.scrollToElement(t.shortcode.$element)
					}, 200))
				}
			}, {
				key: "$onDestroy",
				value: function () {
					var t = this;
					if (this.addedShortcode) {
						var e = this.addedShortcode;
						this.$timeout(function () {
							t.app.selectShortcode(e), t.app.configureShortcode(e)
						}, 150)
					}
					this.categories = [], this.items = [], this.type = "shortcodes", this.category = null, this.addedShortcode = null, this.index = null, this.presets = null, this.currentPreset = null, this.filter.name = "", this.errorMessage = "", this.isLoading = !1, this.app.freeze(!1), this.$placeholder.remove(), this.$placeholder = null, this.$element.removeClass("visible is-showing-presets")
				}
			}, {
				key: "add",
				value: function (t, e) {
					this.addedShortcode = this.addShortcode(angular.copy(t.presets[e].content)), this.app.broadcast(this.ShortcodeEvent.ADDED, this.addedShortcode), this.$placeholder.detach(), this.addedShortcode.data.hasPresets ? this.showPresets(this.addedShortcode) : this.stack.close()
				}
			}, {
				key: "showPresets",
				value: function () {
					var t = this,
						e = this.addedShortcode.tag,
						n = this.addedShortcode.index;
					this.$element.scrollTop(0), this.$element.addClass("is-showing-presets"), this.presets = c[e], this.currentPreset = 0, this.index = n, this.presets || (this.isLoading = !0, jQuery.get(this.store.ajaxUrl, {
						action: "ux_builder_parse_presets",
						tag: e
					}).success(function (n) {
						var o = n.data;
						t.presets = c[e] = o.presets, t.isLoading = !1, t.$scope.$apply()
					}).fail(function (e) {
						t.errorMessage = e.message, t.isLoading = !1, t.$scope.$apply()
					}))
				}
			}, {
				key: "showType",
				value: function (t) {
					this.type = t, this.category = null, this.items = this.getItems(this.type), this.categories = _.keys(this.items)
				}
			}, {
				key: "showFlatsomeStudio",
				value: function () {
					this.shortcode.isRoot && (this.store.showFlatsomeStudio = !this.store.showFlatsomeStudio)
				}
			}, {
				key: "getItems",
				value: function (t, e) {
					var n = this,
						o = [],
						i = _.chain(this.shortcode.allowed).sortBy(function (t) {
							return t.name
						}).sortBy(function (t) {
							return n.shortcode.data.allow.length ? n.shortcode.data.allow.indexOf(t.tag) - n.shortcode.data.allow.length : t.priority
						}).value();
					return i = _.filter(i, function (t) {
						return !e || t.category === e
					}), i = _.filter(i, function (t) {
						return "ux_gutenberg" !== t.tag
					}), i = _.groupBy(i, function (t) {
						return t.category
					}), _.each(i, function (t, e) {
						o.push({
							name: e,
							items: t
						})
					}), o
				}
			}, {
				key: "showCategory",
				value: function () {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
					this.category = t, this.items = this.getItems(this.type, t)
				}
			}, {
				key: "usePreset",
				value: function (t) {
					var e = (0, s.default)({}, t, {
						$id: this.addedShortcode.$id
					});
					this.manager.remove(this.addedShortcode, !1), this.addedShortcode = this.addShortcode(e, !0)
				}
			}, {
				key: "scrollToElement",
				value: function (t) {
					this.$iframe().contents().find("body").scrollToElement(t)
				}
			}, {
				key: "addShortcode",
				value: function (t) {
					var e = this,
						n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
						o = this.shortcode.addChild(t, this.index);
					return o.$$new = !0, n && o.data.scrollTo && this.$timeout(function () {
						e.$iframe().contents().find("body").scrollToElement(o.$element)
					}, 0, !1), o
				}
			}, {
				key: "flatsomeStudioIsActive",
				get: function () {
					return this.shortcode.isRoot && this.store.flatsomeStudioUrl
				}
			}]), t
		}();
	e.default = C
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	e.__esModule = !0;
	var i = n(154),
		r = o(i);
	e.default = r.default || function (t) {
		for (var e = 1; e < arguments.length; e++) {
			var n = arguments[e];
			for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
		}
		return t
	}
}, function (t, e, n) {
	t.exports = {
		default: n(155),
		__esModule: !0
	}
}, function (t, e, n) {
	n(156), t.exports = n(19).Object.assign
}, function (t, e, n) {
	var o = n(17);
	o(o.S + o.F, "Object", {
		assign: n(157)
	})
}, function (t, e, n) {
	"use strict";
	var o = n(66),
		i = n(158),
		r = n(159),
		s = n(64),
		g = n(70),
		a = Object.assign;
	t.exports = !a || n(28)(function () {
		var t = {},
			e = {},
			n = Symbol(),
			o = "abcdefghijklmnopqrst";
		return t[n] = 7, o.split("").forEach(function (t) {
			e[t] = t
		}), 7 != a({}, t)[n] || Object.keys(a({}, e)).join("") != o
	}) ? function (t, e) {
		for (var n = s(t), a = arguments.length, A = 1, l = i.f, c = r.f; a > A;)
			for (var C, u = g(arguments[A++]), I = l ? o(u).concat(l(u)) : o(u), d = I.length, p = 0; d > p;) c.call(u, C = I[p++]) && (n[C] = u[C]);
		return n
	} : a
}, function (t, e) {
	e.f = Object.getOwnPropertySymbols
}, function (t, e) {
	e.f = {}.propertyIsEnumerable
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(7),
		g = o(s),
		a = n(161),
		A = o(a),
		l = ["app", "store", "contextmenu", "$scope", "$element", "$log", "MediaEvent", function t(e, n, o, i, s, g, a) {
			(0, r.default)(this, t), this.app = e, this.store = n, g.debug("Data:", n), o.attach(document);
			var l = this.store.post.attributes.options,
				c = this.store.post.meta.options;
			this.store.post.attributes.options = new A.default(l), this.store.post.meta.options = new A.default(c);
			for (var C in this.store.shortcodes) {
				var u = new A.default(this.store.shortcodes[C].options);
				this.store.shortcodes[C].options = u
			}
			i.$on(a.CHANGED, function (t, e) {
				s.removeClass(function (t, e) {
					return (e.match(/(^|\s)media-\S+/g) || []).join(" ")
				}), s.addClass("media-" + _.keys(n.breakpoints.all)[e])
			})
		}];
	l.$inject = ["app", "store", "contextmenu", "$scope", "$element", "$log", "MediaEvent"], g.default.component("app", {
		controller: l,
		template: '\n    <app-wrapper ng-class="{\n      \'is-saved\': $ctrl.store.isSaved,\n      \'sidebar-visible\': $ctrl.store.showSidebar === true,\n      \'sidebar-hidden\': $ctrl.store.showSidebar === false\n    }">\n      <app-sidebar></app-sidebar>\n      <app-content></app-content>\n      <app-actions></app-actions>\n    </app-wrapper>\n\n    <wp-editor class="app-stack"></wp-editor>\n    <wp-media></wp-media>\n\n    <div class="tools-addable">\n      <div class="line"></div>\n    </div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t, e) {
		var n = t.selector,
			o = t.recompile,
			i = t.handler;
		return function (t, a) {
			var l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
			if (n && (t = t.find(n)), 0 === t.length) return !1;
			switch (i.type) {
				case "class":
					r(t, i, a, l);
					break;
				case "style":
					s(t, i, a, l);
					break;
				case "content":
					g(t, i, a, l)
			}
			return !(!A(a) || !A(l)) || !(o && A(a) && !A(l)) && (!o || a !== e.default)
		}
	}

	function r(t, e, n, o) {
		var i = angular.isString(e.class),
			r = i ? a(e.class, n) : e.class[n],
			s = i ? a(e.class, o) : e.class[o];
		A(o) || t.removeClass(s), A(n) || t.addClass(r)
	}

	function s(t, e, n, o) {
		for (var i in e.rules) t.css(e.rules[i].property, A(n) ? "" : a(e.rules[i].value, n))
	}

	function g(t, e, n, o) {
		t.text(a(e.value, n))
	}

	function a(t, e) {
		return t.replace(/\{\{\s*?value\s*?\}\}/g, e)
	}

	function A(t) {
		return "" === t || (null === t || "undefined" == typeof t)
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var l = n(12),
		c = o(l),
		C = n(13),
		u = o(C),
		I = angular.injector(["ng"]),
		d = function () {
			function t(e) {
				var n = this;
				(0, c.default)(this, t);
				var o = I.get("$parse", "shortcode.ptions");
				this.tree = e, this.named = {}, this.flat = e.reduce(function (t, e) {
					return "group" === e.type ? t = t.concat(e.options) : t.push(e), t
				}, []), this.flat.forEach(function (t) {
					n.named[t.$name] = t, t.onChange && (t.apply = i(t.onChange, t)), t.$isValid = function (t, e) {
						var n = !0,
							i = !this.conditions || o(this.conditions)({
								$ctrl: {
									model: t
								}
							});
						return this.require && (angular.isString(this.require) && this.require !== e.tag ? n = !1 : angular.isArray(this.require) && this.require.indexOf(e.tag) < 0 && (n = !1)), n && i
					}
				})
			}
			return (0, u.default)(t, [{
				key: "get",
				value: function (t) {
					for (var e in this.flat)
						if (this.flat[e].$name === t || this.flat[e].$orgName === t) return this.flat[e]
				}
			}]), t
		}();
	e.default = d
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i),
		s = n(163),
		g = o(s);
	r.default.component("appActions", {
		controller: g.default,
		template: n(99)
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = ["app", "store", "history", "ResponsiveHelper", "ShortcodeEvent", "$injector", "$timeout", function t(e, n, o, i, s, g, a) {
			(0, r.default)(this, t), this.breakpoints = n.breakpoints, this.actions = n.actions, this.undo = function () {
				o.undo()
			}, this.redo = function () {
				o.redo()
			}, this.canUndo = function () {
				return n.currentAction >= 0
			}, this.canRedo = function () {
				return n.currentAction < n.history.length - 1
			}, this.viewRevisions = function () {
				console.log("actions.viewRevisions")
			}, this.setBreakpoint = function (t) {
				e.setBreakpoint(t)
			}, this.isActiveBreakpont = function (t) {
				return i.currentBreakpoint() === t
			}, this.hasBreakpointValues = function (t) {
				if (!e.states.selectedShortcode) return !1;
				if (t === i.defaultBreakpoint()) return !1;
				var n = !1;
				return angular.forEach(e.states.selectedShortcode.options.$responsive, function (e) {
					e[t] && (n = !0)
				}), n
			}, this.doAction = function (t) {
				t.handler(g)
			}
		}];
	e.default = s
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(7),
		g = o(s),
		a = ["app", function t(e) {
			(0, r.default)(this, t), this.app = e
		}];
	a.$inject = ["app"], g.default.component("appContent", {
		controller: a,
		template: "\n    <app-content-iframe></app-content-iframe>\n    <app-content-toolbar></app-content-toolbar>\n  "
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(7),
		g = o(s),
		a = ["app", "store", "targets", "iframe", "$scope", "$element", "$timeout", "$window", "Shortcode", "AppEvent", "DragEvent", "IframeEvent", function t(e, n, o, i, s, g, a, A, l, c, C, u) {
			var I = this;
			(0, r.default)(this, t), this.app = e, this.store = n, this.targets = o, this.iframe = i, this.$timeout = a, this.Shortcode = l, this.IframeEvent = u, this.loading = !1;
			var d = this.store.post.meta.options.flat,
				p = this.store.post.meta.values;
			s.$watchCollection(function () {
				return p
			}, function (t, e) {
				if (I.store.initialized && t !== e) {
					var n = {},
						o = !1;
					for (var i in d) {
						var r = d[i];
						t[r.$name] !== e[r.$name] && (n[r.$name] = t[r.$name], r.reload && (o = !0))
					}
					o && I.iframe.reload()
				}
			}), s.$on(c.READY, function () {
				return I.loading = !1
			}), s.$on(C.START, function () {
				return g.find(".iframe-overlay").removeClass("hidden")
			}), s.$on(C.END, function () {
				return g.find(".iframe-overlay").addClass("hidden")
			})
		}];
	a.$inject = ["app", "store", "targets", "iframe", "$scope", "$element", "$timeout", "$window", "Shortcode", "AppEvent", "DragEvent", "IframeEvent"], g.default.component("appContentIframe", {
		controller: a,
		template: '\n    <iframe class="iframe-frame" ng-attr-src="{{ $ctrl.store.iframeUrl }}"></iframe>\n    <div class="iframe-overlay hidden"></div>\n    <ux-loader loading="$ctrl.loading"></ux-loader>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i),
		s = n(167),
		g = o(s);
	r.default.component("appContentToolbar", {
		controller: g.default,
		template: '\n    <div class="toolbar-wrapper">\n      <h2 class="toolbar-title">\n        <button type="button" class="inline" ng-click="$ctrl.selectShortcode($ctrl.shortcode)">\n          {{ $ctrl.title }}\n        </button>\n      </h2>\n      <div class="toolbar-content"></div>\n      <div class="toolbar-hide">\n        <button type="button" ng-click="$ctrl.hide()">&times;</button>\n      </div>\n    </div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = ["app", "$scope", "$element", "$compile", "$templateCache", "ShortcodeEvent", function t(e, n, o, i, s, g) {
			function a(t) {
				return t.shortcode.data.toolbar.showChildrenSelector && (t.template = '<children-selector shortcode="shortcode"></children-selector>'), t
			}
			var A = this;
			(0, r.default)(this, t);
			var l = null,
				c = null,
				C = o.find(".toolbar-content");
			e.register("toolbar", this), this.title = "", n.$watch(function () {
				return e.states.selectedShortcode
			}, function (t) {
				if (t) {
					for (var e = null, n = t.ancestorsAndSelf, o = 0; o < n.length; o++)
						if (!e && n[o].data.toolbar && n[o].data.toolbar.showOnChildActive) {
							e = angular.copy(n[o].data.toolbar), e.shortcode = n[o], e.shortcode.children.map(function (e) {
								e.states.active = e.isAncestorOf(t)
							});
							break
						} e ? A.show(e) : A.hide()
				}
			}), n.$on(g.DETACHED, function (t, e) {
				l && l.shortcode === e && A.hide()
			}), this.selectShortcode = function () {
				e.configureShortcode(l.shortcode)
			}, this.show = function (t) {
				l && l.shortcode === t.shortcode || (t = a(t), this.title = t.title || t.shortcode.data.name, l = (t.scope || t.shortcode.$scope).$new(), l.shortcode = t.shortcode, c = i(t.template || t.shortcode.data.toolbar.template || s.get(t.templateUrl))(l), C.html(c), o.addClass("visible"))
			}, this.hide = function () {
				l && (l.$destroy(), c.remove(), c = null, l = null), this.title = "", o.removeClass("visible"), C.empty()
			}
		}];
	e.default = s
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(7),
		A = o(a),
		l = function () {
			function t(e, n) {
				var o = this;
				(0, r.default)(this, t), this.app = e, this.currentChild = null, _.each(this.shortcode.children, function (t) {
					t.states.active && (o.currentChild = t)
				}), n.$watch(function () {
					return e.states.selectedShortcode
				}, function (t) {
					if (!t) return o.currentChild = null;
					for (var e = 0; e < o.shortcode.children.length; e++) t.isSelfOrDescendantOf(o.shortcode.children[e]) && (o.currentChild = o.shortcode.children[e])
				})
			}
			return t.$inject = ["app", "$scope"], (0, g.default)(t, [{
				key: "selectShortcode",
				value: function (t) {
					this.currentChild !== t && (this.currentChild = t, this.app.selectShortcode(t), this.app.configureShortcode(null))
				}
			}, {
				key: "configureShortcode",
				value: function (t) {
					this.app.configureShortcode(t)
				}
			}, {
				key: "getThumbnail",
				value: function (t) {
					var e = t.data.toolbarThumbnail;
					return t.options[e] || e || null
				}
			}]), t
		}();
	A.default.component("childrenSelector", {
		controller: l,
		bindings: {
			shortcode: "="
		},
		template: '\n  <ul class="">\n    <li ng-repeat="shortcode in $ctrl.shortcode.children"\n      draggable-shortcode="shortcode"\n      draggable-options="{\n        targets: [\n          { name: \'left\', addable: false },\n          { name: \'right\', addable: false }\n        ]\n      }">\n      <button type="button"\n        ng-click="$ctrl.selectShortcode(shortcode)"\n        ng-dblclick="$ctrl.configureShortcode(shortcode)"\n        ng-class="{ \'active\': shortcode === $ctrl.currentChild }"\n        wp-attachment="$ctrl.getThumbnail(shortcode)"\n        wp-attachment-size="\'thumbnail\'">\n        {{:: shortcode.data.name }}\n      </button>\n    </li>\n    <li>\n      <add-button\n        index="$ctrl.shortcode.children.length"\n        shortcode="$ctrl.shortcode">\n      </add-button>\n    </li>\n  </ul>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i);
	r.default.component("appLoader", {
		controller: ["$scope", "store", "$element", function (t, e, n) {
			t.$watch(function () {
				return e.loading
			}, function (t) {
				return n.toggleClass("loading", t)
			})
		}],
		template: '\n    <div class="app-loader-message">\n\t    <div class="loading-spinner"></div>\n      <p>加载四亩地生成器</p>\n    </div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i),
		s = n(171),
		g = o(s);
	r.default.component("appSidebar", {
		controller: g.default,
		template: n(100)
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i) {
				var s = this;
				(0, r.default)(this, t), this.app = e, this.store = n, this.permissions = angular.copy(this.store.permissions);
				var g = !0;
				o.$on("$stateChangeSuccess", function () {
					g ? g = !1 : s.routeAnimation = i.is("home") ? "to-right" : "to-left"
				})
			}
			return t.$inject = ["app", "store", "$scope", "$state"], (0, g.default)(t, [{
				key: "toggle",
				value: function () {
					this.store.showSidebar = !this.store.showSidebar
				}
			}]), t
		}();
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i);
	r.default.component("appSidebarView", {
		transclude: {
			header: "?viewHeader",
			body: "?viewBody",
			footer: "?viewFooter"
		},
		template: '\n    <div class="view-header" ng-transclude="header"></div>\n    <div class="view-body" ng-transclude="body"></div>\n    <div class="view-footer" ng-transclude="footer"></div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(7),
		A = o(a),
		l = function () {
			function t(e, n, o, i, s) {
				(0, r.default)(this, t), this.app = e, this.$element = n, this.$compile = o, this.$timeout = i, this.$scope = s, this.$wrapper = n.find(".wrapper-inner"), this.$loader = n.find(".loading-spinner"), this.currentScope = null, this.readyTimeout = null, this.app.register("stack", this)
			}
			return t.$inject = ["app", "$element", "$compile", "$timeout", "$scope"], (0, g.default)(t, [{
				key: "open",
				value: function (t, e, n) {
					var o = this;
					this.app.freeze(!0), this.app("tools").hide(), this.$wrapper.empty(), this.$element.toggleClass("stack--large", "large" === n), this.$element.addClass("is-visible"), this.$loader.addClass("is-visible"), this.readyTimeout = this.$timeout(function () {
						o.$loader.removeClass("is-visible"), o.$compile(t)(e ? e.$new() : o.$scope, function (t, e) {
							o.currentScope = e, o.$wrapper.append(t), o.$wrapper.addClass("is-visible")
						})
					}, 300)
				}
			}, {
				key: "close",
				value: function () {
					this.app.freeze(!1), this.$element.removeClass("is-visible"), this.$wrapper.removeClass("is-visible").empty(), this.$timeout.cancel(this.readyTimeout), this.currentScope && this.currentScope.$destroy()
				}
			}]), t
		}();
	A.default.component("appStack", {
		controller: l,
		template: '\n    <div class="backdrop" ng-click="$ctrl.close()"></div>\n    <div class="wrapper">\n      <div class="loading-spinner"></div>\n      <button type="button" class="close" ng-click="$ctrl.close()">&times;</button>\n      <div class="wrapper-inner"></div>\n    </div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i),
		s = n(175),
		g = o(s);
	r.default.component("contextMenu", g.default)
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(176),
		r = o(i),
		s = n(104),
		g = o(s);
	e.default = {
		controller: r.default,
		template: g.default,
		bindings: {
			shortcode: "<"
		}
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i) {
				(0, r.default)(this, t), this.app = e, this.$element = n, this.$window = o, this.$timeout = i, this.$menu = n.find(".context-menu-menu"), this.$element.on("click", this.close.bind(this)), this.app.register("contextMenu", this)
			}
			return t.$inject = ["app", "$element", "$window", "$timeout"], (0, g.default)(t, [{
				key: "open",
				value: function (t, e, n, o) {
					this.previousSelected = this.app.states.selectedShortcode, this.app.selectShortcode(t), this.shortcode = t, this.app("tools").hide();
					var i = n && o ? 20 : 5,
						r = this.$menu.outerOffset(),
						s = e.getBoundingClientRect(),
						g = e.ownerDocument.defaultView.frameElement,
						a = (n || s.left + s.width / 2) - r.width / 2,
						A = (o || s.bottom) + i,
						l = A + r.height > this.$window.innerHeight;
					if (l && (A = (o || s.top) - r.height - i), g) {
						var c = g.getBoundingClientRect();
						a += c.left, A += c.top
					}
					this.$menu.css({
						left: a,
						top: A
					}), this.$menu.toggleClass("position-bottom", !l), this.$menu.toggleClass("position-top", l), this.$element.addClass("is-active")
				}
			}, {
				key: "clear",
				value: function () {
					this.previousSelected = null
				}
			}, {
				key: "close",
				value: function () {
					var t = this;
					this.previousSelected && (this.app.selectShortcode(null), this.$timeout(function () {
						t.previousSelected.$element && t.app.selectShortcode(t.previousSelected), t.previousSelected = null
					}, 0, !1)), this.shortcode = null, this.$element.removeClass("is-active"), this.app.apply()
				}
			}]), t
		}();
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i);
	r.default.component("draggableHelper", {
		template: "\n    <h3><span></span></h3>\n  "
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(61),
		r = o(i),
		s = n(7),
		g = o(s);
	g.default.component("flatsomeStudio", {
		controller: ["app", "store", "$scope", "$timeout", "$q", function (t, e, n, o, i) {
			var s = this;
			this.store = e, this.isInitialized = !1, this.isImporting = !1, this.isActive = !1, this.processed = 0, this.progress = 0, this.steps = 0, this.importImages = !0, this.content = null, this.images = null, this.title = null, n.$watch(function () {
				return e.showFlatsomeStudio
			}, function (t) {
				t && (s.isInitialized = !0)
			}), this.onMessage = function (e) {
				/^http(s)?:\/\/demos.uxthemes.com/.test(e.origin) && "success" === e.data.status && (s.content = e.data.data.content, s.images = e.data.data.images, s.title = e.data.data.title, s.steps = (0, r.default)(s.images).length + 1, s.isActive = !0, 1 === s.steps && s.import(), t.apply())
			}, this.import = function () {
				if (s.isImporting = !0, s.progress = 0, 1 === s.steps || !s.importImages) return s.content = s.content.replace(/{{{.+}}}/g, ""), s.addShortcode(s.content);
				var n = i.when(),
					o = function (o) {
						n = n.then(function () {
							return jQuery.post(e.ajaxUrl, {
								action: "ux_builder_import_media",
								url: s.images[o],
								id: o
							}).then(function (e) {
								s.processed++, s.progress = Math.round(s.processed / s.steps * 100), s.content = s.content.replace("{{{" + o + "}}}", e.data.id), t.apply()
							})
						})
					};
				for (var r in s.images) o(r);
				n = n.then(function () {
					s.addShortcode(s.content)
				})
			}, this.addShortcode = function (n) {
				return jQuery.post(e.ajaxUrl, {
					action: "ux_builder_to_array",
					content: n.replace(/\{{3}\d+\}{3}/, "")
				}).done(function (n) {
					var i = n.data;
					n.success;
					s.progress = 100, t.apply(), o(function () {
						s.steps = 0, s.processed = 0, s.isActive = !1, s.isImporting = !1, s.content = null, s.images = null, s.title = null, e.showFlatsomeStudio = !1, t.broadcast("flatsome-studio-imported", i)
					}, 250)
				})
			}, window.addEventListener("message", this.onMessage, !1)
		}],
		template: '\n    <div class="flatsome-studio" ng-show="$ctrl.store.showFlatsomeStudio" ng-if="$ctrl.isInitialized">\n      <iframe class="flatsome-studio__iframe" ng-attr-src="{{ $ctrl.store.flatsomeStudioUrl | trusted: \'resourceUrl\' }}" frameborder="0"></iframe>\n      <button class="flatsome-studio__close" ng-click="$ctrl.store.showFlatsomeStudio = false">&times;</button>\n\n      <div class="flatsome-studio__overlay" ng-if="$ctrl.isActive">\n        <div class="flatsome-studio__box">\n          <h5 class="flatsome-studio__box-title">\n            导入\n          </h5>\n          <h2 class="flatsome-studio__box-title">\n            {{ $ctrl.title }}\n          </h2>\n          <div class="flatsome-studio__box-content" ng-if="!$ctrl.isImporting">\n            <label class="flatsome-studio__setting" ng-if="$ctrl.steps > 1">\n              <input type="checkbox" ng-model="$ctrl.importImages" />\n              导入图片 ({{ $ctrl.steps - 1 }})\n            </label>\n            <div class="flatsome-studio__actions">\n              <button class="wp-style" ng-click="$ctrl.isActive = false">取消</button>\n              <button class="wp-style alt" ng-click="$ctrl.import()">开始</button>\n            </div>\n          </div>\n          <div class="flatsome-studio__box-content" ng-if="$ctrl.isImporting">\n            <div class="flatsome-studio__progress">\n              <div class="flatsome-studio__progress-bar" ng-style="{ width: $ctrl.progress + \'%\' }">\n                {{ $ctrl.progress }}%\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i),
		s = n(180),
		g = o(s);
	r.default.component("shortcodeActions", {
		controller: g.default,
		require: {
			contextMenu: "^contextMenu"
		},
		bindings: {
			shortcode: "<"
		},
        template: '\n    <button type="button" ng-click="$ctrl.configureShortcode()">\n      选项\n    </button>\n    <button type="button" ng-click="$ctrl.duplicateShortcode()">\n      复制\n    </button>\n    <button type="button" ng-click="$ctrl.copyOptions()">\n      复制选项\n    </button>\n    <button type="button"\n      ng-if="$ctrl.store.clipboard.options.tag === $ctrl.shortcode.tag"\n      ng-click="$ctrl.pasteOptions()">\n      粘贴选项\n    </button>\n    <button type="button" ng-click="$ctrl.deleteShortcode()">\n      删除...\n    </button>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}

	function i(t, e, n) {
		var o = ["textfield", "image"];
		for (var i in t) "$" !== i.charAt(0) && o.indexOf(n.get(i).type) < 0 && (t[i] = e[i])
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var r = n(12),
		s = o(r),
		g = n(13),
		a = o(g),
		A = function () {
			function t(e, n, o, i) {
				(0, s.default)(this, t), this.app = e, this.store = n, this.manager = o, this.contextMenu = i.contextMenu
			}
			return t.$inject = ["app", "store", "Shortcode", "$scope"], (0, a.default)(t, [{
				key: "configureShortcode",
				value: function () {
					this.contextMenu.clear(), this.app.configureShortcode(this.shortcode)
				}
			}, {
				key: "deleteShortcode",
				value: function () {
					this.manager.remove(this.shortcode)
				}
			}, {
				key: "duplicateShortcode",
				value: function () {
					this.app.configureShortcode(this.manager.duplicate(this.shortcode))
				}
			}, {
				key: "copyOptions",
				value: function () {
					this.store.clipboard.options = {
						tag: this.shortcode.tag,
						data: angular.copy(this.shortcode.options)
					}
				}
			}, {
				key: "pasteOptions",
				value: function () {
					this.store.clipboard.options && this.store.clipboard.options.tag === this.shortcode.tag && (i(this.shortcode.options.$responsive, this.store.clipboard.options.data.$responsive, this.shortcode.data.options), i(this.shortcode.options, this.store.clipboard.options.data, this.shortcode.data.options))
				}
			}]), t
		}();
	e.default = A
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i);
	r.default.component("shortcodeHierarchyList", {
		controller: function () {
			"_root" == this.shortcode.tag ? this.label = "添加元素" : this.label = "添加到 " + this.shortcode.data.name
		},
		template: '\n    <shortcode-hierarchy-list-item\n      ng-repeat="shortcode in $ctrl.shortcode.children"\n      shortcode="shortcode">\n    </shortcode-hierarchy-list-item>\n    <div class="hierarchy-empty"\n      ng-if="$ctrl.shortcode.isParent">\n      <add-button\n        shortcode="$ctrl.shortcode"\n        index="$ctrl.shortcode.children.length"\n        label="{{:: $ctrl.label }}">\n      </add-button>\n    </div>\n  ',
		bindings: {
			shortcode: "<"
		}
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i),
		s = n(183),
		g = o(s);
	r.default.component("shortcodeHierarchyListItem", {
		controller: g.default,
		template: n(105),
		bindings: {
			shortcode: "<"
		}
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i, s, g, a, A, l) {
				(0, r.default)(this, t), this.app = e;
				var c = angular.element("shortcode-hierarchy"),
					C = l(this.shortcode.data.info),
					u = i(this.shortcode, g[0], {
						broadcast: !1
					});
				this.shortcode.depth, this.shortcode.states.open = n.postContent.children.length <= 5 && 1 === this.shortcode.depth, this.shortcode.data.addableSpots && (o.add("top", {
					element: g,
					shortcode: this.shortcode
				}), o.add("bottom", {
					element: g,
					shortcode: this.shortcode
				})), this.shortcode.isParent && o.add("center", {
					element: g,
					shortcode: this.shortcode
				}), this.isActive = function () {
					return e.states.selectedShortcode === this.shortcode
				}, this.outlineShortcode = function () {
					e.outlineShortcode(this.shortcode)
				}, this.selectShortcode = function () {
					e.selectShortcode(this.shortcode), A().contents().find("body").scrollToElement(this.shortcode.$element)
				}, this.configureShortcode = function () {
					e.configureShortcode(this.shortcode)
				}, this.toggleChildren = function () {
					this.shortcode.states.open = !this.shortcode.states.open
				}, this.getShortcodeInfo = function () {
					var t = this.shortcode.$scope ? this.shortcode.$scope.$customCtrl : null;
					return t && angular.isFunction(t.$getShortcodeInfo) ? t.$getShortcodeInfo() : C(this.shortcode.options)
				}, s.$watch(function () {
					return e.states.selectedShortcode
				}, function (t, e) {
					if (t) {
						t.ancestors.forEach(function (t) {
							t.states.open = !0
						});
						var n = g.get(0).getBoundingClientRect().top + c.scrollTop(),
							o = parseInt(c.css("padding-top")),
							i = n - o - c.height() / 2;
						c.animate({
							scrollTop: i
						})
					}
				}), s.$on("$destroy", function () {
					c = null, u.destroy()
				})
			}
			return t.$inject = ["app", "store", "targets", "draggable", "$scope", "$element", "$window", "$iframe", "$interpolate"], (0, g.default)(t, [{
				key: "showContextMenu",
				value: function (t) {
					this.app("contextMenu").open(this.shortcode, t.currentTarget)
				}
			}]), t
		}();
	e.default = a
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i);
	r.default.component("templateImporter", {
		controller: ["app", "store", function (t, e) {
			this.value = "", this.import = function () {
				var t = this;
				jQuery.post(e.ajaxUrl, {
					action: "ux_builder_to_array",
					content: this.value
				}).done(function (e) {
					var n = e.data,
						o = e.success;
					return o ? (n.content.children.forEach(function (e) {
						t.manager.addShortcode(e, !1), t.manager.index++
					}), void t.manager.stack.close()) : console.error("Failed to compile template")
				})
			}
		}],
		require: {
			manager: "^addShortcode"
		},
        template: '\n    <div class="template-importer">\n      <div class="option">\n        <textarea style="height: 300px; margin-top: 30px; margin-bottom: 15px" ng-model="$ctrl.value" placeholder="在这里插入导出的代码或简码"></textarea>\n      </div>\n      <button type="button" class="wp-style alt button-large button-block" ng-click="$ctrl.import()">\n        导入\n      </button>\n    </div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(7),
		g = o(s),
		a = ["$scope", "$element", function t(e, n) {
			var o = this;
			(0, r.default)(this, t), e.$watch(function () {
				return o.loading
			}, function (t) {
				n.toggleClass("loading", !!t)
			})
		}];
	a.$inject = ["$scope", "$element"], g.default.component("uxLoader", {
		controller: a,
		bindings: {
			loading: "<"
		}
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s);
	n(187);
	var a = n(7),
		A = o(a),
		l = function () {
			function t(e, n, o, i, s, g, a, A, l) {
				var c = this;
				(0, r.default)(this, t), this.app = e, this.utils = o, this.store = n, this.$element = g, this.$interpolate = s, this.reponsive = l, this.focused = !1, n.cache.option = n.cache.option || {}, this.$cache = n.cache.option[this.option.$id] || {
					isOpen: !0
				}, i.$watch(function () {
					return c.option
				}, function (t) {
					t.autoFocus && a(function () {
						return c.setFocus()
					}, c.focused ? 0 : 600, !1)
				})
			}
			return t.$inject = ["app", "store", "utils", "$scope", "$interpolate", "$element", "$timeout", "$iframe", "ResponsiveHelper"], (0, g.default)(t, [{
				key: "setFocus",
				value: function () {
					this.$element.find("input, select, textarea, button, a").first().focus().select(), this.focused = !0
				}
			}, {
				key: "isNotDefaultBreakpoint",
				value: function () {
					return this.reponsive.currentBreakpoint() !== this.reponsive.defaultBreakpoint()
				}
			}, {
				key: "clearResponsiveValue",
				value: function () {
					var t = this.$optionsCtrl.shortcode.$id,
						e = this.getResponsiveValues(),
						n = this.reponsive.currentBreakpoint(),
						o = this.option.$name;
					this.store.$addAction("clearResponsiveValue", {
						key: "clearResponsiveValue-" + t + "-" + o + "-" + n,
						value: angular.copy(e[n]),
						breakpointIndex: n,
						optionName: o,
						id: t
					}), e[n] = null, this.model = this.reponsive.getMediaValue(e)
				}
			}, {
				key: "hasResponsiveValue",
				value: function () {
					var t = this.getResponsiveValues(),
						e = this.reponsive.currentBreakpoint();
					return null !== t[e]
				}
			}, {
				key: "getResponsiveValues",
				value: function () {
					return this.$optionsCtrl.model.$responsive.hasOwnProperty(this.option.$name) ? this.$optionsCtrl.model.$responsive[this.option.$name] : null
				}
			}]), t
		}();
	A.default.component("uxOption", {
		controller: l,
		require: {
			$optionsCtrl: "^uxOptions"
		},
		bindings: {
			option: "<",
			model: "="
		},
		template: '\n    <h3 class="option-header">{{:: $ctrl.option.heading }}</h3>\n    <div class="option-body">\n      <div class="option-template">\n        <div ng-include="\'components/ux-option/types/\' + $ctrl.option.type + \'.html\'"></div>\n        <button type="button"\n          class="option-has-custom-value"\n          title="{{ $ctrl.hasResponsiveValue() ? \'Clear responsive option\' : \'\' }}"\n          ng-if="$ctrl.option.responsive"\n          ng-click="$ctrl.clearResponsiveValue()"\n          ng-class="{\n            \'visible\': $ctrl.isNotDefaultBreakpoint(),\n            \'active\': $ctrl.hasResponsiveValue()\n          }">\n        </button>\n      </div>\n      <div class="option-description"\n        ng-if="$ctrl.option.description">\n        {{:: $ctrl.option.description }}\n      </div>\n    </div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(7),
		r = o(i),
		s = n(188),
		g = o(s),
		a = n(190),
		A = o(a),
		l = n(191),
		c = o(l),
		C = n(192),
		u = o(C),
		I = n(194),
		d = o(I),
		p = n(195),
		h = o(p),
		f = n(196),
		v = o(f),
		m = n(198),
		y = o(m),
		b = n(199),
		$ = o(b);
	r.default.directive("scrubfield", g.default), r.default.component("uxOptionColorpicker", A.default), r.default.component("uxOptionEditor", c.default), r.default.component("uxOptionImage", u.default), r.default.component("uxOptionMargins", d.default), r.default.component("uxOptionGallery", h.default), r.default.component("uxOptionSelect", v.default), r.default.component("uxOptionUrlfield", y.default), r.default.component("uxOptionGroup", $.default)
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return {
			restrict: "A",
			require: "ngModel",
			scope: {
				option: "=scrubfield"
			},
			link: function (e, n, o, r) {
				var s = e.option,
					g = t(n.get(0), {
						cssProps: {}
					}),
					a = (0, i.parseDefault)(s.default, s.unit),
					A = s.unit,
					l = !1,
					c = null;
				r.$render = function () {
					n[0].value = r.$viewValue !== a ? r.$viewValue : l ? r.$viewValue : ""
				}, n.on("blur", function (t) {
					c = (0, i.extractValue)(t.currentTarget.value), A = (0, i.extractUnit)(t.currentTarget.value) || s.unit, r.$setViewValue(c ? c + A : ""), r.$render()
				}), g.get("pan").set({
					threshold: 0
				}), g.on("panstart", function (t) {
					c = parseFloat((0, i.extractValue)(r.$viewValue || s.default), 10) || 0, A = (0, i.extractUnit)(r.$viewValue) || (0, i.extractUnit)(s.default) || s.unit, n.addClass("scrubbing"), l = !0
				}), g.on("panup panright pandown panleft", function (t) {
					if (l) {
						var e = t.deltaX,
							n = t.deltaY * -1,
							o = (e + n) / 2,
							g = c,
							a = s.step || 1,
							C = (0, i.countDigits)(a),
							u = o * a;
						g = (c + u).toFixed(C), g = angular.isDefined(s.min) && g <= s.min ? s.min : g, g = angular.isDefined(s.max) && g >= s.max ? s.max : g, r.$setViewValue((0, i.parseUnitValue)(g, s.default, A)), r.$render()
					}
				}), g.on("panend", function (t) {
					n.removeClass("scrubbing"), l = !1, c = null, r.$render()
				}), e.$on("$destroy", function () {
					g.destroy(), g = null
				})
			}
		}
	}
	o.$inject = ["hammer"], Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.default = o;
	var i = n(189)
}, function (t, e) {
	"use strict";

	function n(t, e) {
		var n = i(t),
			o = r(t) || e;
		return n + o
	}

	function o(t, e, o) {
		var s = i(e),
			g = n(e, o),
			a = i(t) || s,
			A = r(t) || o,
			l = a + A;
		return l !== g ? l : g
	}

	function i(t) {
		if ("" === t) return t;
		var e = String(t).match(/[\d\.]+/g);
		return e && "-" === String(t).charAt(0) && (e *= -1), e ? parseFloat(e, 10).toFixed(s(e)) : ""
	}

	function r(t) {
		var e = String(t).match(/\D+$/g),
			n = ["em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "%", "cm", "mm", "in", "px", "pt", "pc"];
		return !!(e && e.length && n.indexOf(e[0]) > -1) && e[0]
	}

	function s(t) {
		var e = String(t).split(".");
		return e.length > 1 ? e[1].length : 0
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	}), e.parseDefault = n, e.parseUnitValue = o, e.extractValue = i, e.extractUnit = r, e.countDigits = s
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o) {
				var i = this;
				(0, r.default)(this, t), this.app = e, this.$colorpicker = n.find(".option-colorpicker-input"), o.$watch(function () {
					return i.model
				}, function (t, e) {
					i.$colorpicker.spectrum("set", t)
				})
			}
			return t.$inject = ["app", "$element", "$scope"], (0, g.default)(t, [{
				key: "$onInit",
				value: function () {
					var t = this;
					this.$colorpicker.spectrum({
						color: this.model,
						allowEmpty: !0,
						showInput: !0,
						showAlpha: "hex" !== this.option.format,
						preferredFormat: this.option.format || "rgb",
						move: function (e) {
							return t.setColor(e)
						},
						hide: function (e) {
							return t.setColor(e)
						}
					})
				}
			}, {
				key: "$onDestroy",
				value: function () {
					this.$colorpicker.spectrum("destroy"), this.$colorpicker = null
				}
			}, {
				key: "setColor",
				value: function (t) {
					this.model = t ? t.toString() : null, this.$optionsCtrl.shortcode ? this.$optionsCtrl.shortcode.apply() : this.app.apply()
				}
			}]), t
		}();
	e.default = {
		controller: a,
		require: {
			$optionsCtrl: "^uxOptions"
		},
		bindings: {
			option: "<",
			model: "="
		},
		template: '\n    <input class="option-colorpicker-input" type="text" ng-model="$ctrl.model">\n  '
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i, s, g) {
				var a = this;
				(0, r.default)(this, t), this.app = e, this.wpEditor = n, this.$scope = o, this.$element = s, o.$on("$destroy", function () {
					a.$element = null
				})
			}
			return t.$inject = ["app", "wpEditor", "$scope", "$window", "$element", "$timeout"], (0, g.default)(t, [{
				key: "openTextEditor",
				value: function () {
					this.wpEditor.open()
				}
			}]), t
		}();
	e.default = {
		controller: a,
		require: {
			$optionsCtrl: "^uxOptions"
		},
		bindings: {
			option: "<",
			model: "="
		},
		template: '\n    <div class="option-text-editor">\n      <button type="button" class="open-editor wp-style alt"\n        ng-click="$ctrl.openTextEditor()">\n        打开文本编辑器\n      </button>\n      <textarea class="raw-text"\n        ng-model="$ctrl.app.states.selectedShortcode.content">\n      </textarea>\n    </div>\n  '
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(193),
		A = o(a),
		l = function () {
			function t(e, n, o, i, s, g) {
				var a = this;
				(0, r.default)(this, t), this.app = e, this.wpMedia = n, this.$scope = o, this.$element = s, this.$focusPoint = s.find(".focus-point"), this.modal = this.wpMedia.media({
					title: "选择或上传图片",
					button: {
						text: "使用此图片"
					},
					library: {
						type: "image"
					},
					multiple: !1
				}), this.modal.on("close", function () {
					a.wpMedia.close()
				}), this.modal.on("select", function () {
					a.model = a.modal.state().get("selection").first().toJSON().id, a.wpMedia.close(), e.apply()
				}), this.option.bgPosition && g(function () {
					return a.setupFocusPoint()
				}, 0, !1), o.$on("$destroy", function () {
					a.option.bgPosition && a.draggableFocusPoint.destroy(), a.modal.detach(), a.modal = null, a.$focusPoint = null, a.$element = null
				})
			}
			return t.$inject = ["app", "wpMedia", "$scope", "$window", "$element", "$timeout"], (0, g.default)(t, [{
				key: "openMediaModal",
				value: function () {
					this.modal.open(), this.wpMedia.open()
				}
			}, {
				key: "thumbSize",
				value: function () {
					return this.option.thumbSize ? this.$optionsCtrl.model[this.option.thumbSize] : "thumbnail"
				}
			}, {
				key: "setupFocusPoint",
				value: function () {
					var t = this,
						e = null,
						n = this.getBgPosition();
					this.draggableFocusPoint = new A.default(this.$focusPoint.get(0)), this.draggableFocusPoint.get("pan").set({
						direction: A.default.DIRECTION_ALL,
						threshold: 0
					}), this.draggableFocusPoint.on("panstart", function (n) {
						e = t.$element.find("img").get(0).getClientRects()[0], angular.element("body").addClass("dragging")
					}), this.draggableFocusPoint.on("pan", function (n) {
						var o = n.center.y - e.top,
							i = n.center.x - e.left;
						o = o <= 0 ? 0 : o, o = o >= e.height ? e.height : o, i = i <= 0 ? 0 : i, i = i >= e.width ? e.width : i;
						var r = Math.round(i / e.width * 100),
							s = Math.round(o / e.height * 100),
							g = {
								top: s + "%",
								left: r + "%"
							};
						t.setFocusPointPosition(g), t.setBgPositionString(g), t.$scope.$apply()
					}), this.draggableFocusPoint.on("panend", function (t) {
						angular.element("body").removeClass("dragging")
					}), this.setFocusPointPosition(n)
				}
			}, {
				key: "setFocusPointPosition",
				value: function (t) {
					this.$focusPoint.css(t)
				}
			}, {
				key: "setBgPositionString",
				value: function (t) {
					this.option.bgPosition && (this.$optionsCtrl.model[this.option.bgPosition] = t.left + " " + t.top)
				}
			}, {
				key: "getBgPosition",
				value: function () {
					var t = {
							left: 0,
							top: 0
						},
						e = this.$optionsCtrl.model[this.option.bgPosition];
					return e && (t.left = e.split(" ")[0], t.top = e.split(" ")[1]), t
				}
			}, {
				key: "getComputedBgPosition",
				value: function () {}
			}]), t
		}();
	e.default = {
		controller: l,
		require: {
			$optionsCtrl: "^uxOptions"
		},
		bindings: {
			option: "<",
			model: "="
		},
		template: '\n    <div class="option-image-wrapper">\n      <img draggable="false"\n        ng-if="$ctrl.model"\n        wp-attachment="$ctrl.model"\n        wp-attachment-model="$ctrl.model"\n        wp-attachment-size="$ctrl.thumbSize()">\n\n      <div class="focus-point"\n        ng-class="{ \'active\': $ctrl.model && $ctrl.option.bgPosition }">\n      </div>\n    </div>\n\n    <div class="option-actions">\n      <button type="button" class="wp-style outline"\n        class="wp-style"\n        ng-click="$ctrl.model = null"\n        ng-if="$ctrl.model">\n        删除\n      </button>\n      <button type="button" class="wp-style outline"\n        ng-click="$ctrl.openMediaModal()">\n        <span ng-if="$ctrl.model">更改媒体</span>\n        <span ng-if="!$ctrl.model">选择媒体</span>\n      </button>\n    </div>\n  '
	}
}, function (t, e, n) {
	var o;
	/*! Hammer.JS - v2.0.7 - 2016-04-22
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2016 Jorik Tangelder;
	 * Licensed under the MIT license */
	! function (i, r, s, g) {
		"use strict";

		function a(t, e, n) {
			return setTimeout(u(t, n), e)
		}

		function A(t, e, n) {
			return !!Array.isArray(t) && (l(t, n[e], n), !0)
		}

		function l(t, e, n) {
			var o;
			if (t)
				if (t.forEach) t.forEach(e, n);
				else if (t.length !== g)
				for (o = 0; o < t.length;) e.call(n, t[o], o, t), o++;
			else
				for (o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
		}

		function c(t, e, n) {
			var o = "DEPRECATED METHOD: " + e + "\n" + n + " AT \n";
			return function () {
				var e = new Error("get-stack-trace"),
					n = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
					r = i.console && (i.console.warn || i.console.log);
				return r && r.call(i.console, o, n), t.apply(this, arguments)
			}
		}

		function C(t, e, n) {
			var o, i = e.prototype;
			o = t.prototype = Object.create(i), o.constructor = t, o._super = i, n && dt(o, n)
		}

		function u(t, e) {
			return function () {
				return t.apply(e, arguments)
			}
		}

		function I(t, e) {
			return typeof t == ft ? t.apply(e ? e[0] || g : g, e) : t
		}

		function d(t, e) {
			return t === g ? e : t
		}

		function p(t, e, n) {
			l(m(e), function (e) {
				t.addEventListener(e, n, !1)
			})
		}

		function h(t, e, n) {
			l(m(e), function (e) {
				t.removeEventListener(e, n, !1)
			})
		}

		function f(t, e) {
			for (; t;) {
				if (t == e) return !0;
				t = t.parentNode
			}
			return !1
		}

		function v(t, e) {
			return t.indexOf(e) > -1
		}

		function m(t) {
			return t.trim().split(/\s+/g)
		}

		function y(t, e, n) {
			if (t.indexOf && !n) return t.indexOf(e);
			for (var o = 0; o < t.length;) {
				if (n && t[o][n] == e || !n && t[o] === e) return o;
				o++
			}
			return -1
		}

		function b(t) {
			return Array.prototype.slice.call(t, 0)
		}

		function $(t, e, n) {
			for (var o = [], i = [], r = 0; r < t.length;) {
				var s = e ? t[r][e] : t[r];
				y(i, s) < 0 && o.push(t[r]), i[r] = s, r++
			}
			return n && (o = e ? o.sort(function (t, n) {
				return t[e] > n[e]
			}) : o.sort()), o
		}

		function w(t, e) {
			for (var n, o, i = e[0].toUpperCase() + e.slice(1), r = 0; r < pt.length;) {
				if (n = pt[r], o = n ? n + i : e, o in t) return o;
				r++
			}
			return g
		}

		function x() {
			return wt++
		}

		function k(t) {
			var e = t.ownerDocument || t;
			return e.defaultView || e.parentWindow || i
		}

		function _(t, e) {
			var n = this;
			this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function (e) {
				I(t.options.enable, [t]) && n.handler(e)
			}, this.init()
		}

		function E(t) {
			var e, n = t.options.inputClass;
			return new(e = n ? n : _t ? Q : Et ? F : kt ? Z : G)(t, S)
		}

		function S(t, e, n) {
			var o = n.pointers.length,
				i = n.changedPointers.length,
				r = e & Pt && o - i === 0,
				s = e & (Nt | Yt) && o - i === 0;
			n.isFirst = !!r, n.isFinal = !!s, r && (t.session = {}), n.eventType = e, M(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
		}

		function M(t, e) {
			var n = t.session,
				o = e.pointers,
				i = o.length;
			n.firstInput || (n.firstInput = T(e)), i > 1 && !n.firstMultiple ? n.firstMultiple = T(e) : 1 === i && (n.firstMultiple = !1);
			var r = n.firstInput,
				s = n.firstMultiple,
				g = s ? s.center : r.center,
				a = e.center = P(o);
			e.timeStamp = yt(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = R(g, a), e.distance = Y(g, a), O(n, e), e.offsetDirection = N(e.deltaX, e.deltaY);
			var A = j(e.deltaTime, e.deltaX, e.deltaY);
			e.overallVelocityX = A.x, e.overallVelocityY = A.y, e.overallVelocity = mt(A.x) > mt(A.y) ? A.x : A.y, e.scale = s ? V(s.pointers, o) : 1, e.rotation = s ? B(s.pointers, o) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, D(n, e);
			var l = t.element;
			f(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
		}

		function O(t, e) {
			var n = e.center,
				o = t.offsetDelta || {},
				i = t.prevDelta || {},
				r = t.prevInput || {};
			e.eventType !== Pt && r.eventType !== Nt || (i = t.prevDelta = {
				x: r.deltaX || 0,
				y: r.deltaY || 0
			}, o = t.offsetDelta = {
				x: n.x,
				y: n.y
			}), e.deltaX = i.x + (n.x - o.x), e.deltaY = i.y + (n.y - o.y)
		}

		function D(t, e) {
			var n, o, i, r, s = t.lastInterval || e,
				a = e.timeStamp - s.timeStamp;
			if (e.eventType != Yt && (a > Tt || s.velocity === g)) {
				var A = e.deltaX - s.deltaX,
					l = e.deltaY - s.deltaY,
					c = j(a, A, l);
				o = c.x, i = c.y, n = mt(c.x) > mt(c.y) ? c.x : c.y, r = N(A, l), t.lastInterval = e
			} else n = s.velocity, o = s.velocityX, i = s.velocityY, r = s.direction;
			e.velocity = n, e.velocityX = o, e.velocityY = i, e.direction = r
		}

		function T(t) {
			for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
				clientX: vt(t.pointers[n].clientX),
				clientY: vt(t.pointers[n].clientY)
			}, n++;
			return {
				timeStamp: yt(),
				pointers: e,
				center: P(e),
				deltaX: t.deltaX,
				deltaY: t.deltaY
			}
		}

		function P(t) {
			var e = t.length;
			if (1 === e) return {
				x: vt(t[0].clientX),
				y: vt(t[0].clientY)
			};
			for (var n = 0, o = 0, i = 0; i < e;) n += t[i].clientX, o += t[i].clientY, i++;
			return {
				x: vt(n / e),
				y: vt(o / e)
			}
		}

		function j(t, e, n) {
			return {
				x: e / t || 0,
				y: n / t || 0
			}
		}

		function N(t, e) {
			return t === e ? Rt : mt(t) >= mt(e) ? t < 0 ? Bt : Vt : e < 0 ? Gt : Qt
		}

		function Y(t, e, n) {
			n || (n = Ut);
			var o = e[n[0]] - t[n[0]],
				i = e[n[1]] - t[n[1]];
			return Math.sqrt(o * o + i * i)
		}

		function R(t, e, n) {
			n || (n = Ut);
			var o = e[n[0]] - t[n[0]],
				i = e[n[1]] - t[n[1]];
			return 180 * Math.atan2(i, o) / Math.PI
		}

		function B(t, e) {
			return R(e[1], e[0], Zt) + R(t[1], t[0], Zt)
		}

		function V(t, e) {
			return Y(e[0], e[1], Zt) / Y(t[0], t[1], Zt)
		}

		function G() {
			this.evEl = Ht, this.evWin = Xt, this.pressed = !1, _.apply(this, arguments)
		}

		function Q() {
			this.evEl = Jt, this.evWin = te, _.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
		}

		function L() {
			this.evTarget = ne, this.evWin = oe, this.started = !1, _.apply(this, arguments)
		}

		function z(t, e) {
			var n = b(t.touches),
				o = b(t.changedTouches);
			return e & (Nt | Yt) && (n = $(n.concat(o), "identifier", !0)), [n, o]
		}

		function F() {
			this.evTarget = re, this.targetIds = {}, _.apply(this, arguments)
		}

		function U(t, e) {
			var n = b(t.touches),
				o = this.targetIds;
			if (e & (Pt | jt) && 1 === n.length) return o[n[0].identifier] = !0, [n, n];
			var i, r, s = b(t.changedTouches),
				g = [],
				a = this.target;
			if (r = n.filter(function (t) {
					return f(t.target, a)
				}), e === Pt)
				for (i = 0; i < r.length;) o[r[i].identifier] = !0, i++;
			for (i = 0; i < s.length;) o[s[i].identifier] && g.push(s[i]), e & (Nt | Yt) && delete o[s[i].identifier], i++;
			return g.length ? [$(r.concat(g), "identifier", !0), g] : void 0
		}

		function Z() {
			_.apply(this, arguments);
			var t = u(this.handler, this);
			this.touch = new F(this.manager, t), this.mouse = new G(this.manager, t), this.primaryTouch = null, this.lastTouches = []
		}

		function W(t, e) {
			t & Pt ? (this.primaryTouch = e.changedPointers[0].identifier, H.call(this, e)) : t & (Nt | Yt) && H.call(this, e)
		}

		function H(t) {
			var e = t.changedPointers[0];
			if (e.identifier === this.primaryTouch) {
				var n = {
					x: e.clientX,
					y: e.clientY
				};
				this.lastTouches.push(n);
				var o = this.lastTouches,
					i = function () {
						var t = o.indexOf(n);
						t > -1 && o.splice(t, 1)
					};
				setTimeout(i, se)
			}
		}

		function X(t) {
			for (var e = t.srcEvent.clientX, n = t.srcEvent.clientY, o = 0; o < this.lastTouches.length; o++) {
				var i = this.lastTouches[o],
					r = Math.abs(e - i.x),
					s = Math.abs(n - i.y);
				if (r <= ge && s <= ge) return !0
			}
			return !1
		}

		function q(t, e) {
			this.manager = t, this.set(e)
		}

		function K(t) {
			if (v(t, ue)) return ue;
			var e = v(t, Ie),
				n = v(t, de);
			return e && n ? ue : e || n ? e ? Ie : de : v(t, Ce) ? Ce : ce
		}

		function J() {
			if (!Ae) return !1;
			var t = {},
				e = i.CSS && i.CSS.supports;
			return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (n) {
				t[n] = !e || i.CSS.supports("touch-action", n)
			}), t
		}

		function tt(t) {
			this.options = dt({}, this.defaults, t || {}), this.id = x(), this.manager = null, this.options.enable = d(this.options.enable, !0), this.state = he, this.simultaneous = {}, this.requireFail = []
		}

		function et(t) {
			return t & be ? "cancel" : t & me ? "end" : t & ve ? "move" : t & fe ? "start" : ""
		}

		function nt(t) {
			return t == Qt ? "down" : t == Gt ? "up" : t == Bt ? "left" : t == Vt ? "right" : ""
		}

		function ot(t, e) {
			var n = e.manager;
			return n ? n.get(t) : t
		}

		function it() {
			tt.apply(this, arguments)
		}

		function rt() {
			it.apply(this, arguments), this.pX = null, this.pY = null
		}

		function st() {
			it.apply(this, arguments)
		}

		function gt() {
			tt.apply(this, arguments), this._timer = null, this._input = null
		}

		function at() {
			it.apply(this, arguments)
		}

		function At() {
			it.apply(this, arguments)
		}

		function lt() {
			tt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
		}

		function ct(t, e) {
			return e = e || {}, e.recognizers = d(e.recognizers, ct.defaults.preset), new Ct(t, e)
		}

		function Ct(t, e) {
			this.options = dt({}, ct.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = E(this), this.touchAction = new q(this, this.options.touchAction), ut(this, !0), l(this.options.recognizers, function (t) {
				var e = this.add(new t[0](t[1]));
				t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
			}, this)
		}

		function ut(t, e) {
			var n = t.element;
			if (n.style) {
				var o;
				l(t.options.cssProps, function (i, r) {
					o = w(n.style, r), e ? (t.oldCssProps[o] = n.style[o], n.style[o] = i) : n.style[o] = t.oldCssProps[o] || ""
				}), e || (t.oldCssProps = {})
			}
		}

		function It(t, e) {
			var n = r.createEvent("Event");
			n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
		}
		var dt, pt = ["", "webkit", "Moz", "MS", "ms", "o"],
			ht = r.createElement("div"),
			ft = "function",
			vt = Math.round,
			mt = Math.abs,
			yt = Date.now;
		dt = "function" != typeof Object.assign ? function (t) {
			if (t === g || null === t) throw new TypeError("Cannot convert undefined or null to object");
			for (var e = Object(t), n = 1; n < arguments.length; n++) {
				var o = arguments[n];
				if (o !== g && null !== o)
					for (var i in o) o.hasOwnProperty(i) && (e[i] = o[i])
			}
			return e
		} : Object.assign;
		var bt = c(function (t, e, n) {
				for (var o = Object.keys(e), i = 0; i < o.length;)(!n || n && t[o[i]] === g) && (t[o[i]] = e[o[i]]), i++;
				return t
			}, "extend", "Use `assign`."),
			$t = c(function (t, e) {
				return bt(t, e, !0)
			}, "merge", "Use `assign`."),
			wt = 1,
			xt = /mobile|tablet|ip(ad|hone|od)|android/i,
			kt = "ontouchstart" in i,
			_t = w(i, "PointerEvent") !== g,
			Et = kt && xt.test(navigator.userAgent),
			St = "touch",
			Mt = "pen",
			Ot = "mouse",
			Dt = "kinect",
			Tt = 25,
			Pt = 1,
			jt = 2,
			Nt = 4,
			Yt = 8,
			Rt = 1,
			Bt = 2,
			Vt = 4,
			Gt = 8,
			Qt = 16,
			Lt = Bt | Vt,
			zt = Gt | Qt,
			Ft = Lt | zt,
			Ut = ["x", "y"],
			Zt = ["clientX", "clientY"];
		_.prototype = {
			handler: function () {},
			init: function () {
				this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(k(this.element), this.evWin, this.domHandler)
			},
			destroy: function () {
				this.evEl && h(this.element, this.evEl, this.domHandler), this.evTarget && h(this.target, this.evTarget, this.domHandler), this.evWin && h(k(this.element), this.evWin, this.domHandler)
			}
		};
		var Wt = {
				mousedown: Pt,
				mousemove: jt,
				mouseup: Nt
			},
			Ht = "mousedown",
			Xt = "mousemove mouseup";
		C(G, _, {
			handler: function (t) {
				var e = Wt[t.type];
				e & Pt && 0 === t.button && (this.pressed = !0), e & jt && 1 !== t.which && (e = Nt), this.pressed && (e & Nt && (this.pressed = !1), this.callback(this.manager, e, {
					pointers: [t],
					changedPointers: [t],
					pointerType: Ot,
					srcEvent: t
				}))
			}
		});
		var qt = {
				pointerdown: Pt,
				pointermove: jt,
				pointerup: Nt,
				pointercancel: Yt,
				pointerout: Yt
			},
			Kt = {
				2: St,
				3: Mt,
				4: Ot,
				5: Dt
			},
			Jt = "pointerdown",
			te = "pointermove pointerup pointercancel";
		i.MSPointerEvent && !i.PointerEvent && (Jt = "MSPointerDown", te = "MSPointerMove MSPointerUp MSPointerCancel"), C(Q, _, {
			handler: function (t) {
				var e = this.store,
					n = !1,
					o = t.type.toLowerCase().replace("ms", ""),
					i = qt[o],
					r = Kt[t.pointerType] || t.pointerType,
					s = r == St,
					g = y(e, t.pointerId, "pointerId");
				i & Pt && (0 === t.button || s) ? g < 0 && (e.push(t), g = e.length - 1) : i & (Nt | Yt) && (n = !0), g < 0 || (e[g] = t, this.callback(this.manager, i, {
					pointers: e,
					changedPointers: [t],
					pointerType: r,
					srcEvent: t
				}), n && e.splice(g, 1))
			}
		});
		var ee = {
				touchstart: Pt,
				touchmove: jt,
				touchend: Nt,
				touchcancel: Yt
			},
			ne = "touchstart",
			oe = "touchstart touchmove touchend touchcancel";
		C(L, _, {
			handler: function (t) {
				var e = ee[t.type];
				if (e === Pt && (this.started = !0), this.started) {
					var n = z.call(this, t, e);
					e & (Nt | Yt) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
						pointers: n[0],
						changedPointers: n[1],
						pointerType: St,
						srcEvent: t
					})
				}
			}
		});
		var ie = {
				touchstart: Pt,
				touchmove: jt,
				touchend: Nt,
				touchcancel: Yt
			},
			re = "touchstart touchmove touchend touchcancel";
		C(F, _, {
			handler: function (t) {
				var e = ie[t.type],
					n = U.call(this, t, e);
				n && this.callback(this.manager, e, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: St,
					srcEvent: t
				})
			}
		});
		var se = 2500,
			ge = 25;
		C(Z, _, {
			handler: function (t, e, n) {
				var o = n.pointerType == St,
					i = n.pointerType == Ot;
				if (!(i && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
					if (o) W.call(this, e, n);
					else if (i && X.call(this, n)) return;
					this.callback(t, e, n)
				}
			},
			destroy: function () {
				this.touch.destroy(), this.mouse.destroy()
			}
		});
		var ae = w(ht.style, "touchAction"),
			Ae = ae !== g,
			le = "compute",
			ce = "auto",
			Ce = "manipulation",
			ue = "none",
			Ie = "pan-x",
			de = "pan-y",
			pe = J();
		q.prototype = {
			set: function (t) {
				t == le && (t = this.compute()), Ae && this.manager.element.style && pe[t] && (this.manager.element.style[ae] = t), this.actions = t.toLowerCase().trim()
			},
			update: function () {
				this.set(this.manager.options.touchAction)
			},
			compute: function () {
				var t = [];
				return l(this.manager.recognizers, function (e) {
					I(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
				}), K(t.join(" "))
			},
			preventDefaults: function (t) {
				var e = t.srcEvent,
					n = t.offsetDirection;
				if (this.manager.session.prevented) return void e.preventDefault();
				var o = this.actions,
					i = v(o, ue) && !pe[ue],
					r = v(o, de) && !pe[de],
					s = v(o, Ie) && !pe[Ie];
				if (i) {
					var g = 1 === t.pointers.length,
						a = t.distance < 2,
						A = t.deltaTime < 250;
					if (g && a && A) return
				}
				return s && r ? void 0 : i || r && n & Lt || s && n & zt ? this.preventSrc(e) : void 0
			},
			preventSrc: function (t) {
				this.manager.session.prevented = !0, t.preventDefault()
			}
		};
		var he = 1,
			fe = 2,
			ve = 4,
			me = 8,
			ye = me,
			be = 16,
			$e = 32;
		tt.prototype = {
			defaults: {},
			set: function (t) {
				return dt(this.options, t), this.manager && this.manager.touchAction.update(), this
			},
			recognizeWith: function (t) {
				if (A(t, "recognizeWith", this)) return this;
				var e = this.simultaneous;
				return t = ot(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
			},
			dropRecognizeWith: function (t) {
				return A(t, "dropRecognizeWith", this) ? this : (t = ot(t, this), delete this.simultaneous[t.id], this)
			},
			requireFailure: function (t) {
				if (A(t, "requireFailure", this)) return this;
				var e = this.requireFail;
				return t = ot(t, this), y(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
			},
			dropRequireFailure: function (t) {
				if (A(t, "dropRequireFailure", this)) return this;
				t = ot(t, this);
				var e = y(this.requireFail, t);
				return e > -1 && this.requireFail.splice(e, 1), this
			},
			hasRequireFailures: function () {
				return this.requireFail.length > 0
			},
			canRecognizeWith: function (t) {
				return !!this.simultaneous[t.id]
			},
			emit: function (t) {
				function e(e) {
					n.manager.emit(e, t)
				}
				var n = this,
					o = this.state;
				o < me && e(n.options.event + et(o)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), o >= me && e(n.options.event + et(o))
			},
			tryEmit: function (t) {
				return this.canEmit() ? this.emit(t) : void(this.state = $e)
			},
			canEmit: function () {
				for (var t = 0; t < this.requireFail.length;) {
					if (!(this.requireFail[t].state & ($e | he))) return !1;
					t++
				}
				return !0
			},
			recognize: function (t) {
				var e = dt({}, t);
				return I(this.options.enable, [this, e]) ? (this.state & (ye | be | $e) && (this.state = he), this.state = this.process(e), void(this.state & (fe | ve | me | be) && this.tryEmit(e))) : (this.reset(), void(this.state = $e))
			},
			process: function (t) {},
			getTouchAction: function () {},
			reset: function () {}
		}, C(it, tt, {
			defaults: {
				pointers: 1
			},
			attrTest: function (t) {
				var e = this.options.pointers;
				return 0 === e || t.pointers.length === e
			},
			process: function (t) {
				var e = this.state,
					n = t.eventType,
					o = e & (fe | ve),
					i = this.attrTest(t);
				return o && (n & Yt || !i) ? e | be : o || i ? n & Nt ? e | me : e & fe ? e | ve : fe : $e
			}
		}), C(rt, it, {
			defaults: {
				event: "pan",
				threshold: 10,
				pointers: 1,
				direction: Ft
			},
			getTouchAction: function () {
				var t = this.options.direction,
					e = [];
				return t & Lt && e.push(de), t & zt && e.push(Ie), e
			},
			directionTest: function (t) {
				var e = this.options,
					n = !0,
					o = t.distance,
					i = t.direction,
					r = t.deltaX,
					s = t.deltaY;
				return i & e.direction || (e.direction & Lt ? (i = 0 === r ? Rt : r < 0 ? Bt : Vt, n = r != this.pX, o = Math.abs(t.deltaX)) : (i = 0 === s ? Rt : s < 0 ? Gt : Qt, n = s != this.pY, o = Math.abs(t.deltaY))), t.direction = i, n && o > e.threshold && i & e.direction
			},
			attrTest: function (t) {
				return it.prototype.attrTest.call(this, t) && (this.state & fe || !(this.state & fe) && this.directionTest(t))
			},
			emit: function (t) {
				this.pX = t.deltaX, this.pY = t.deltaY;
				var e = nt(t.direction);
				e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
			}
		}), C(st, it, {
			defaults: {
				event: "pinch",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function () {
				return [ue]
			},
			attrTest: function (t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & fe)
			},
			emit: function (t) {
				if (1 !== t.scale) {
					var e = t.scale < 1 ? "in" : "out";
					t.additionalEvent = this.options.event + e
				}
				this._super.emit.call(this, t)
			}
		}), C(gt, tt, {
			defaults: {
				event: "press",
				pointers: 1,
				time: 251,
				threshold: 9
			},
			getTouchAction: function () {
				return [ce]
			},
			process: function (t) {
				var e = this.options,
					n = t.pointers.length === e.pointers,
					o = t.distance < e.threshold,
					i = t.deltaTime > e.time;
				if (this._input = t, !o || !n || t.eventType & (Nt | Yt) && !i) this.reset();
				else if (t.eventType & Pt) this.reset(), this._timer = a(function () {
					this.state = ye, this.tryEmit()
				}, e.time, this);
				else if (t.eventType & Nt) return ye;
				return $e
			},
			reset: function () {
				clearTimeout(this._timer)
			},
			emit: function (t) {
				this.state === ye && (t && t.eventType & Nt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = yt(), this.manager.emit(this.options.event, this._input)))
			}
		}), C(at, it, {
			defaults: {
				event: "rotate",
				threshold: 0,
				pointers: 2
			},
			getTouchAction: function () {
				return [ue]
			},
			attrTest: function (t) {
				return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & fe)
			}
		}), C(At, it, {
			defaults: {
				event: "swipe",
				threshold: 10,
				velocity: .3,
				direction: Lt | zt,
				pointers: 1
			},
			getTouchAction: function () {
				return rt.prototype.getTouchAction.call(this)
			},
			attrTest: function (t) {
				var e, n = this.options.direction;
				return n & (Lt | zt) ? e = t.overallVelocity : n & Lt ? e = t.overallVelocityX : n & zt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && mt(e) > this.options.velocity && t.eventType & Nt
			},
			emit: function (t) {
				var e = nt(t.offsetDirection);
				e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
			}
		}), C(lt, tt, {
			defaults: {
				event: "tap",
				pointers: 1,
				taps: 1,
				interval: 300,
				time: 250,
				threshold: 9,
				posThreshold: 10
			},
			getTouchAction: function () {
				return [Ce]
			},
			process: function (t) {
				var e = this.options,
					n = t.pointers.length === e.pointers,
					o = t.distance < e.threshold,
					i = t.deltaTime < e.time;
				if (this.reset(), t.eventType & Pt && 0 === this.count) return this.failTimeout();
				if (o && i && n) {
					if (t.eventType != Nt) return this.failTimeout();
					var r = !this.pTime || t.timeStamp - this.pTime < e.interval,
						s = !this.pCenter || Y(this.pCenter, t.center) < e.posThreshold;
					this.pTime = t.timeStamp, this.pCenter = t.center, s && r ? this.count += 1 : this.count = 1, this._input = t;
					var g = this.count % e.taps;
					if (0 === g) return this.hasRequireFailures() ? (this._timer = a(function () {
						this.state = ye, this.tryEmit()
					}, e.interval, this), fe) : ye
				}
				return $e
			},
			failTimeout: function () {
				return this._timer = a(function () {
					this.state = $e
				}, this.options.interval, this), $e
			},
			reset: function () {
				clearTimeout(this._timer)
			},
			emit: function () {
				this.state == ye && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
			}
		}), ct.VERSION = "2.0.7", ct.defaults = {
			domEvents: !1,
			touchAction: le,
			enable: !0,
			inputTarget: null,
			inputClass: null,
			preset: [
				[at, {
					enable: !1
				}],
				[st, {
						enable: !1
					},
					["rotate"]
				],
				[At, {
					direction: Lt
				}],
				[rt, {
						direction: Lt
					},
					["swipe"]
				],
				[lt],
				[lt, {
						event: "doubletap",
						taps: 2
					},
					["tap"]
				],
				[gt]
			],
			cssProps: {
				userSelect: "none",
				touchSelect: "none",
				touchCallout: "none",
				contentZooming: "none",
				userDrag: "none",
				tapHighlightColor: "rgba(0,0,0,0)"
			}
		};
		var we = 1,
			xe = 2;
		Ct.prototype = {
			set: function (t) {
				return dt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
			},
			stop: function (t) {
				this.session.stopped = t ? xe : we
			},
			recognize: function (t) {
				var e = this.session;
				if (!e.stopped) {
					this.touchAction.preventDefaults(t);
					var n, o = this.recognizers,
						i = e.curRecognizer;
					(!i || i && i.state & ye) && (i = e.curRecognizer = null);
					for (var r = 0; r < o.length;) n = o[r], e.stopped === xe || i && n != i && !n.canRecognizeWith(i) ? n.reset() : n.recognize(t), !i && n.state & (fe | ve | me) && (i = e.curRecognizer = n), r++
				}
			},
			get: function (t) {
				if (t instanceof tt) return t;
				for (var e = this.recognizers, n = 0; n < e.length; n++)
					if (e[n].options.event == t) return e[n];
				return null
			},
			add: function (t) {
				if (A(t, "add", this)) return this;
				var e = this.get(t.options.event);
				return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
			},
			remove: function (t) {
				if (A(t, "remove", this)) return this;
				if (t = this.get(t)) {
					var e = this.recognizers,
						n = y(e, t);
					n !== -1 && (e.splice(n, 1), this.touchAction.update())
				}
				return this
			},
			on: function (t, e) {
				if (t !== g && e !== g) {
					var n = this.handlers;
					return l(m(t), function (t) {
						n[t] = n[t] || [], n[t].push(e)
					}), this
				}
			},
			off: function (t, e) {
				if (t !== g) {
					var n = this.handlers;
					return l(m(t), function (t) {
						e ? n[t] && n[t].splice(y(n[t], e), 1) : delete n[t]
					}), this
				}
			},
			emit: function (t, e) {
				this.options.domEvents && It(t, e);
				var n = this.handlers[t] && this.handlers[t].slice();
				if (n && n.length) {
					e.type = t, e.preventDefault = function () {
						e.srcEvent.preventDefault()
					};
					for (var o = 0; o < n.length;) n[o](e), o++
				}
			},
			destroy: function () {
				this.element && ut(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
			}
		}, dt(ct, {
			INPUT_START: Pt,
			INPUT_MOVE: jt,
			INPUT_END: Nt,
			INPUT_CANCEL: Yt,
			STATE_POSSIBLE: he,
			STATE_BEGAN: fe,
			STATE_CHANGED: ve,
			STATE_ENDED: me,
			STATE_RECOGNIZED: ye,
			STATE_CANCELLED: be,
			STATE_FAILED: $e,
			DIRECTION_NONE: Rt,
			DIRECTION_LEFT: Bt,
			DIRECTION_RIGHT: Vt,
			DIRECTION_UP: Gt,
			DIRECTION_DOWN: Qt,
			DIRECTION_HORIZONTAL: Lt,
			DIRECTION_VERTICAL: zt,
			DIRECTION_ALL: Ft,
			Manager: Ct,
			Input: _,
			TouchAction: q,
			TouchInput: F,
			MouseInput: G,
			PointerEventInput: Q,
			TouchMouseInput: Z,
			SingleTouchInput: L,
			Recognizer: tt,
			AttrRecognizer: it,
			Tap: lt,
			Pan: rt,
			Swipe: At,
			Pinch: st,
			Rotate: at,
			Press: gt,
			on: p,
			off: h,
			each: l,
			merge: $t,
			extend: bt,
			assign: dt,
			inherit: C,
			bindFn: u,
			prefixed: w
		});
		var ke = "undefined" != typeof i ? i : "undefined" != typeof self ? self : {};
		ke.Hammer = ct, o = function () {
			return ct
		}.call(e, n, e, t), !(o !== g && (t.exports = o))
	}(window, document, "Hammer")
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(189),
		A = function () {
			function t(e, n) {
				var o = this;
				(0, r.default)(this, t), this.createInputValues(this.model), n.toggleClass("is-simple", this.option.simple), e.$watch("$ctrl.model", function (t) {
					o.createInputValues(t)
				})
			}
			return t.$inject = ["$scope", "$element"], (0, g.default)(t, [{
				key: "createInputValues",
				value: function (t) {
					var e = this,
						n = t ? t.split(" ") : this.option.default.split(" ");
					n = n.map(function (t, n) {
						return t ? (0, a.parseUnitValue)(t, e.option.default, e.option.unit) : null
					}), this.values = {}, this.values.first = n[0] || "", this.values.second = n[1] || "", this.option.simple || (this.values.third = n[2] || "", this.values.fourth = n[3] || ""), this.modelOptions = {
						updateOn: "blur default",
						debounce: {
							blur: 0,
							default: 10
						}
					}
				}
			}, {
				key: "onChange",
				value: function (t, e) {
					if (this.values[t] = e || "0px", e) {
						var n = [];
						for (var o in this.values) this.values[o] || (this.values[o] = "0px"), n.push(this.values[o]);
						this.model = n.join(" ")
					}
				}
			}, {
				key: "clear",
				value: function () {
					for (var t in this.values) this.values[t] = null;
					this.model = null
				}
			}]), t
		}();
	e.default = {
		controller: A,
		bindings: {
			option: "<",
			model: "="
		},
		template: '\n    <div class="flex-options">\n      <input class="scrubfield"\n        scrubfield="$ctrl.option"\n        ng-repeat="(name, value) in $ctrl.values"\n        ng-change="$ctrl.onChange(name, $ctrl.values[name])"\n        ng-model="$ctrl.values[name]"\n        ng-model-options="$ctrl.modelOptions"\n        placeholder="{{:: $ctrl.option.default }}"\n        class="{{:: name }}"\n      >\n      <button type="button" class="blank" ng-click="$ctrl.clear()">\n        <span class="dashicons dashicons-no-alt"></span>\n      </button>\n    </div>\n  '
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o, i, s, g) {
				(0, r.default)(this, t), this.app = e, this.store = n, this.wpMedia = o, this.$window = g
			}
			return t.$inject = ["app", "store", "wpMedia", "$scope", "$element", "$window"], (0, g.default)(t, [{
				key: "openModal",
				value: function () {
					var t = this,
						e = this.wpMedia.media.gallery,
						n = this.app.states.selectedShortcode.data.options.flat,
						o = this.app.states.selectedShortcode,
						i = n.map(function (t) {
							var e = t.$orgName,
								n = o.options[t.$name];
							return "ids" === e && "" === n && (n = "0"), e + '="' + n + '"'
						}),
						r = e.edit("[gallery " + i.join(" ") + "]"),
						s = r.content.get();
					this.wpMedia.open(), r.on("close", function () {
						t.wpMedia.close()
					}), r.on("uploader:ready", function () {
						"" === o.options.ids && (s.toolbar.get("spinner").$el.removeClass("is-active"), s.uploader.$el.removeClass("hidden"))
					}), r.state("gallery-edit").on("update", function (i) {
						var s = e.shortcode(i).attrs.named;
						n.forEach(function (t) {
							if (s.hasOwnProperty(t.$orgName)) {
								var e = angular.isArray(s[t.$orgName]) ? s[t.$orgName].join(",") : s[t.$orgName];
								o.options[t.$name] = e
							}
						}), r.detach(), t.wpMedia.close(), t.app.apply()
					})
				}
			}]), t
		}();
	e.default = {
		controller: a,
		require: {
			$optionsCtrl: "^uxOptions"
		},
		bindings: {
			option: "<",
			model: "="
		},
		template: '\n    <button type="button" class="wp-style" ng-click="$ctrl.openModal()">\n      编辑相册\n    </button>\n  '
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(197),
		A = o(a),
		l = function () {
			function t(e, n, o, i, s, g, a) {
				var l = this;
				(0, r.default)(this, t);
				var c = !1,
					C = null,
					u = null,
					I = s.find("> select");
				if (this.config = angular.merge({
						delimiter: ",",
						postSelect: !1,
						termSelect: !1,
						allowClear: !0,
						multiple: !1,
						placeholder: "Select",
						minOptions: 20
					}, this.option.config), I.on("change", function (t) {
						c ? (l.value = I.val() || l.option.default, e.apply()) : c = !0
					}), this.config.multiple || I.removeAttr("multiple"), this.config.postSelect || this.config.termSelect) {
					var d = this.config.postSelect ? "ux_builder_get_posts" : "ux_builder_get_terms",
						p = this.config.postSelect ? "ux_builder_search_posts" : "ux_builder_search_terms",
						h = angular.isString(this.value) && this.config.multiple ? this.value.split(this.config.delimiter) : this.value,
						f = this.config.postSelect || this.config.termSelect;
					A.default.get(n.ajaxUrl, {
						id: n.post.id,
						action: d,
						option: f,
						values: h,
						security: n.nonce
					}).success(function (t) {
						var e = t.data;
						e ? (angular.forEach(e, function (t, e) {
							I.append(new Option(t.title, t.id, !0, !0))
						}), I.trigger("change"), i.$apply()) : a.warn("An error occurred")
					}).fail(function (t) {
						console.log(t)
					}), this.config.ajax = {
						cache: !0,
						url: n.ajaxUrl,
						data: function (t) {
							return {
								id: n.post.id,
								query: t.term,
								page: t.page,
								action: p,
								option: f,
								security: n.nonce
							}
						},
						processResults: function (t, e) {
							var n = t.data;
							return e.page = e.page || 1, {
								results: A.default.map(n, function (t) {
									var e = t.title,
										n = t.slug,
										o = t.id;
									return {
										text: e,
										slug: n,
										id: o
									}
								})
							}
						}
					}
				}
				if ((this.config.multiple || this.config.ajax) && (C = I.select2(this.config).data("select2"), (0, A.default)("ul.select2-selection__rendered", s).on("keydown", this.handleSearch)), !this.config.ajax) {
					var v = I;
					g(function () {
						v.val(l.config.multiple ? l.value.split(l.config.delimiter) : l.value), v.trigger("change")
					}, 0, !1)
				}
				this.config.multiple && this.config.ajax && (u = (0, A.default)("ul.select2-selection__rendered", s).sortable({
					axis: "y",
					items: "> .select2-selection__choice",
					stop: function (t, e) {
						s.find(".select2-selection__choice").each(function (t, e) {
							var n = (0, A.default)(e).data("data").id,
								o = I.find('option[value="' + n + '"]')[0];
							I.append(o)
						}), I.trigger("change"), i.$apply()
					}
				}).data("uiSortable")), i.$on("$destroy", function () {
					I.off("change"), u && (u._destroy(), u = null), C && (C.destroy(), C = null, (0, A.default)("ul.select2-selection__rendered", s).off("keydown", l.handleSearch)), I = null
				})
			}
			return t.$inject = ["app", "store", "utils", "$scope", "$element", "$timeout", "$log"], (0, g.default)(t, [{
				key: "isSelected",
				value: function (t) {
					return angular.isArray(this.value) ? A.default.inArray(t, this.value) > -1 : this.value === t
				}
			}, {
				key: "handleSearch",
				value: function (t) {
					if (8 === t.keyCode && 0 === (0, A.default)(t.currentTarget).find(".select2-search input").val().length) return !1
				}
			}]), t
		}();
	e.default = {
		controller: l,
		bindings: {
			option: "=",
			value: "="
		},
		template: '\n    <select\n      width="100%"\n      multiple="multiple">\n      <option\n        ng-repeat="option in $ctrl.option.options track by option.value"\n        ng-selected="$ctrl.isSelected(option.value)"\n        value="{{:: option.value }}">\n        {{:: option.label }}\n      </option>\n    </select>\n  '
	}
}, function (t, e) {
	t.exports = window.jQuery
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(197),
		A = o(a),
		l = function () {
			function t(e, n) {
				(0, r.default)(this, t), this.store = e, this.$scope = n, this.posts = [], this.query = ""
			}
			return t.$inject = ["store", "$scope"], (0, g.default)(t, [{
				key: "onChange",
				value: function () {
					var t = this;
					return this.query.length <= 3 ? this.posts = [] : void A.default.get(this.store.ajaxUrl, {
						action: "ux_builder_search_posts",
						option: this.option.data,
						query: this.query
					}).success(function (e) {
						t.posts = e.data, t.$scope.$digest()
					}).fail(function () {})
				}
			}, {
				key: "selectPost",
				value: function (t) {
					this.option.value = this.post.permalink, this.query = "", this.posts = []
				}
			}]), t
		}();
	e.default = {
		controller: l,
		bindings: {
			option: "="
		},
		template: '\n        <input type="text" ng-model="$ctrl.option.value">\n        <input type="text" placeholder="Search"\n            ng-model="$ctrl.query"\n            ng-change="$ctrl.onChange()"\n            ng-model-options="{\n                updateOn: \'blur default\',\n                debounce: {\n                    blur: 0,\n                    default: 250\n                }\n            }"\n        >\n        <ul ng-if="$ctrl.posts.length">\n            <li ng-repeat="post in $ctrl.posts track by post.ID">\n                <button type="button" ng-click="$ctrl.selectPost(post)">\n                    <h3><span>{{:: post.post_type}}</span>{{:: post.post_title }}</h3>\n                    <small>{{:: post.permalink }}</small>\n                </button>\n            </li>\n        </ul>\n    '
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = function () {
			function t(e, n, o) {
				var i = this;
				(0, r.default)(this, t), this.$element = n, this.$isToggled = !1, e.$watch(function () {
					return i.$optionCtrl.$cache.isOpen
				}, function (t, e) {
					e && t || (t ? i.showOptions() : i.hideOptions())
				})
			}
			return t.$inject = ["$scope", "$element", "$timeout"], (0, g.default)(t, [{
				key: "toggleOptions",
				value: function () {
					this.$isToggled = !0, this.$optionCtrl.$cache.isOpen = !this.$optionCtrl.$cache.isOpen
				}
			}, {
				key: "showOptions",
				value: function () {
					var t = this,
						e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300;
					this.$element.find("ux-options").first().slideDown(e, function () {
						t.$element.removeAttr("style")
					})
				}
			}, {
				key: "hideOptions",
				value: function () {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300;
					t = this.$isToggled ? t : 0, this.$element.find("ux-options").first().slideUp(t)
				}
			}]), t
		}();
	e.default = {
		controller: a,
		require: {
			$optionsCtrl: "^uxOptions",
			$optionCtrl: "^uxOption"
		},
		bindings: {
			option: "<",
			responsive: "=",
			model: "="
		},
		template: '\n      <button type="button"\n        class="option-group-heading"\n        ng-class="{ \'is-open\': $ctrl.$optionCtrl.$cache.isOpen }"\n        ng-click="$ctrl.toggleOptions()">\n        {{:: $ctrl.option.heading }}\n      </button>\n      <ux-options\n        options="$ctrl.option.options"\n        responsive="$ctrl.responsive"\n        shortcode="$ctrl.$optionsCtrl.shortcode"\n        model="$ctrl.model">\n      </ux-options>\n    '
	}
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(7),
		A = o(a),
		l = function () {
			function t(e) {
				(0, r.default)(this, t), this.$scope = e
			}
			return t.$inject = ["$scope"], (0, g.default)(t, [{
				key: "validOptionConditions",
				value: function (t) {
					if (t.require && this.shortcode) {
						if ("string" == typeof t.require && this.shortcode.parent.tag !== t.require) return !1;
						if (angular.isArray(t.require) && t.require.indexOf(this.shortcode.parent.tag) < 0) return !1
					}
					return !t.conditions || this.$scope.$eval(t.conditions)
				}
			}]), t
		}();
	A.default.component("uxOptions", {
		controller: l,
		bindings: {
			options: "<",
			shortcode: "<",
			responsive: "=",
			model: "="
		},
		template: '\n      <p ng-if="$ctrl.options.length === 0">No options</p>\n      <ux-option class="option"\n        ng-repeat="option in $ctrl.options track by option.$id"\n        option="option"\n        model="$ctrl.model[option.$name]"\n        ng-if="$ctrl.validOptionConditions(option)"\n        ng-class="{\n          \'option-{{:: option.type }}\': true,\n          \'option-name-{{:: option.$orgName }}\': true,\n          \'is-responsive\': option.responsive,\n          \'is-full-width\': option.fullWidth\n        }">\n      </ux-option>\n    '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(13),
		g = o(s),
		a = n(7),
		A = o(a),
		l = function () {
			function t(e, n, o) {
				(0, r.default)(this, t), this.wpEditor = o, this.wpEditorUrl = n.wpEditorUrl, e.register("wp-editor", this)
			}
			return t.$inject = ["app", "store", "wpEditor"], (0, g.default)(t, [{
				key: "open",
				value: function () {
					this.wpEditor.open()
				}
			}, {
				key: "close",
				value: function () {
					this.wpEditor.close()
				}
			}]), t
		}();
	A.default.component("wpEditor", {
		controller: l,
		template: '\n    <div class="backdrop" ng-click="$ctrl.close()"></div>\n    <div class="wrapper">\n      <div class="loading-spinner"></div>\n      <button type="button" class="close" ng-click="$ctrl.close()">&times;</button>\n      <div class="wrapper-inner">\n        <iframe class="wp-editor" ng-attr-src="{{ $ctrl.wpEditorUrl }}" scrolling="no" frameborder="0"></iframe>\n      </div>\n    </div>\n  '
	})
}, function (t, e, n) {
	"use strict";

	function o(t) {
		return t && t.__esModule ? t : {
			default: t
		}
	}
	var i = n(12),
		r = o(i),
		s = n(7),
		g = o(s),
		a = ["app", "store", "wpMedia", function t(e, n, o) {
			(0, r.default)(this, t), this.wpMediaUrl = n.wpMediaUrl
		}];
	a.$inject = ["app", "store", "wpMedia"], g.default.component("wpMedia", {
		controller: a,
		template: '\n    <div class="wp-media-wrapper">\n      <iframe class="wp-media" ng-attr-src="{{ $ctrl.wpMediaUrl }}" scrolling="no" frameborder="0"></iframe>\n    </div>\n  '
	})
}]);