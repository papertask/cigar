! function (t) {
    function a(e) {
        if (n[e]) return n[e].exports;
        var r = n[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return t[e].call(r.exports, r, r.exports, a), r.loaded = !0, r.exports
    }
    var n = {};
    return a.m = t, a.c = n, a.p = "", a(0)
}({
    0: function (t, a, n) {
        t.exports = n(35)
    },
    35: function (t, a, n) {
        "use strict";
        n(36)
    },
    36: function (t, a) {
        "use strict";
        UxBuilder.addAction({
            icon: "dashicons dashicons-controls-play",
            tooltip: "播放动画",
            handler: function (t) {
                var a = t.get("$iframe"),
                    n = t.get("$timeout");
                a().contents().find("[data-animated]").each(function (t, a) {
                    "" !== angular.element(a).attr("data-animate") && (angular.element(a).attr("data-animated", "false"), n(function () {
                        return angular.element(a).attr("data-animated", "true")
                    }, 0, !1))
                })
            }
        })
    }
});