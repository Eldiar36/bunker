(window.webpackJsonp = window.webpackJsonp || []).push([[16], {
    "+7hJ": function (e, t, n) {
        var a = n("REpN"), r = n("Bgjm"), o = n("34EK"), i = n("i18P"), s = n("krUJ"), c = n("E9J1"), l = c.get,
            u = c.enforce, d = String(String).split("String");
        (e.exports = function (e, t, n, s) {
            var c = !!s && !!s.unsafe, l = !!s && !!s.enumerable, f = !!s && !!s.noTargetGet;
            "function" == typeof n && ("string" != typeof t || o(n, "name") || r(n, "name", t), u(n).source = d.join("string" == typeof t ? t : "")), e !== a ? (c ? !f && e[t] && (l = !0) : delete e[t], l ? e[t] = n : r(e, t, n)) : l ? e[t] = n : i(t, n)
        })(Function.prototype, "toString", (function () {
            return "function" == typeof this && l(this).source || s(this)
        }))
    }, "/TCF": function (e, t, n) {
        var a = n("REpN"), r = n("krUJ"), o = a.WeakMap;
        e.exports = "function" == typeof o && /native code/.test(r(o))
    }, "0+5A": function (e, t, n) {
        e.exports = {
            jobListing: "style-module--job-listing--1o16U",
            header: "style-module--header--1zNjL",
            location: "style-module--location--7GwpK",
            heading: "style-module--heading--xJthw",
            arrow: "style-module--arrow--3-KJZ"
        }
    }, "0dIN": function (e, t, n) {
        var a = n("gQbX"), r = Math.max, o = Math.min;
        e.exports = function (e, t) {
            var n = a(e);
            return n < 0 ? r(n + t, 0) : o(n, t)
        }
    }, "34EK": function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    }, "35Ii": function (e, t, n) {
        e.exports = {
            wrapper: "style-module--wrapper--3E-I5",
            cursor: "style-module--cursor--1o40m",
            inner: "style-module--inner--d9uDv",
            graphic: "style-module--graphic--106qZ",
            ui: "style-module--ui--yvwT7",
            leftArrow: "style-module--left-arrow--1XCvj",
            rightArrow: "style-module--right-arrow--1pmko"
        }
    }, "46f4": function (e, t) {
        e.exports = function (e, t) {
            return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
        }
    }, "4jnk": function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        }
    }, "6Zah": function (e, t, n) {
        "use strict";
        var a = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !a.call({1: 2}, 1);
        t.f = o ? function (e) {
            var t = r(this, e);
            return !!t && t.enumerable
        } : a
    }, "6cYJ": function (e, t, n) {
        var a = n("34EK"), r = n("SWhb"), o = n("GoW4"), i = n("jekk");
        e.exports = function (e, t) {
            for (var n = r(t), s = i.f, c = o.f, l = 0; l < n.length; l++) {
                var u = n[l];
                a(e, u) || s(e, u, c(t, u))
            }
        }
    }, "86Ed": function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return f
        }));
        var a = n("q1tI"), r = n.n(a), o = n("NRoD"), i = n("yFJF"), s = n("M2M3"), c = n.n(s), l = n("s24u"),
            u = n.n(l), d = n("91rN"), f = function (e) {
                var t = e.heading, n = e.subheading, a = e.buttonLabel, s = e.buttonUrl, l = e.children, f = e.className,
                    v = e.trackingLabel;
                return r.a.createElement("div", {className: u.a.wrapper + " " + f}, r.a.createElement("h2", {className: "t-heading-1 " + u.a.heading}, t), n && r.a.createElement("p", {className: "t-subhead-1 " + u.a.subhead}, n), r.a.createElement("div", {className: u.a.listWrapper}, l), s && a && r.a.createElement(o.a, {
                    className: "t-ui-4 " + c.a.buttonSmall + " " + u.a.link,
                    to: s,
                    onClick: function () {
                        return Object(d.a)(v, "click", t + " - " + a)
                    }
                }, r.a.createElement("span", {className: c.a.label}, a), r.a.createElement("span", {className: c.a.icon}, r.a.createElement(i.a, {rotation: -90}))))
            };
        f.defaultProps = {className: ""}
    }, "8deY": function (e, t, n) {
        var a = n("lSYd"), r = n("ij4R");
        (e.exports = function (e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.6.5",
            mode: a ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        })
    }, "8mzz": function (e, t, n) {
        var a = n("JhOX"), r = n("bmrq"), o = "".split;
        e.exports = a((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (e) {
            return "String" == r(e) ? o.call(e, "") : Object(e)
        } : Object
    }, "8obw": function (e, t, n) {
        e.exports = {button: "controls-module--button--_XGf7", label: "controls-module--label--30tae"}
    }, "9L0q": function (e, t, n) {
    }, Bgjm: function (e, t, n) {
        var a = n("IvzW"), r = n("jekk"), o = n("46f4");
        e.exports = a ? function (e, t, n) {
            return r.f(e, t, o(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    }, C2zU: function (e, t, n) {
        var a = n("REpN"), r = n("ckLD"), o = a.document, i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {}
        }
    }, E9J1: function (e, t, n) {
        var a, r, o, i = n("/TCF"), s = n("REpN"), c = n("ckLD"), l = n("Bgjm"), u = n("34EK"), d = n("uFM1"),
            f = n("HIFH"), v = s.WeakMap;
        if (i) {
            var h = new v, p = h.get, m = h.has, g = h.set;
            a = function (e, t) {
                return g.call(h, e, t), t
            }, r = function (e) {
                return p.call(h, e) || {}
            }, o = function (e) {
                return m.call(h, e)
            }
        } else {
            var b = d("state");
            f[b] = !0, a = function (e, t) {
                return l(e, b, t), t
            }, r = function (e) {
                return u(e, b) ? e[b] : {}
            }, o = function (e) {
                return u(e, b)
            }
        }
        e.exports = {
            set: a, get: r, has: o, enforce: function (e) {
                return o(e) ? r(e) : a(e, {})
            }, getterFor: function (e) {
                return function (t) {
                    var n;
                    if (!c(t) || (n = r(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    }, F8ZZ: function (e, t) {
        var n = 0, a = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + a).toString(36)
        }
    }, Fi4q: function (e, t, n) {
        e.exports = {
            wrapper: "card-stack-module--wrapper--1U2V4",
            inner: "card-stack-module--inner--3U0HG",
            card: "card-stack-module--card--2ZxYW",
            image: "card-stack-module--image--3eauC"
        }
    }, FlY1: function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }, GoW4: function (e, t, n) {
        var a = n("IvzW"), r = n("6Zah"), o = n("46f4"), i = n("a0vn"), s = n("PK3T"), c = n("34EK"), l = n("STyW"),
            u = Object.getOwnPropertyDescriptor;
        t.f = a ? u : function (e, t) {
            if (e = i(e), t = s(t, !0), l) try {
                return u(e, t)
            } catch (n) {
            }
            if (c(e, t)) return o(!r.f.call(e, t), e[t])
        }
    }, HIFH: function (e, t) {
        e.exports = {}
    }, IvzW: function (e, t, n) {
        var a = n("JhOX");
        e.exports = !a((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }))
    }, JhOX: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }, Joop: function (e, t, n) {
        e.exports = {
            card: "spotlight-card-module--card--32X1e",
            inner: "spotlight-card-module--inner--3kA2s",
            location: "spotlight-card-module--location--Ym46U",
            link: "spotlight-card-module--link--XmveN",
            type1: "spotlight-card-module--type1--2JMY3",
            type2: "spotlight-card-module--type2--3Iohk",
            type3: "spotlight-card-module--type3--1cJe2",
            image: "spotlight-card-module--image--6qdTX",
            overlay: "spotlight-card-module--overlay--1CaZE",
            overlayBackground: "spotlight-card-module--overlay-background--2WRa_",
            overlayContent: "spotlight-card-module--overlay-content--cbZKh",
            fakeLink: "spotlight-card-module--fakeLink--nmWtm",
            burstWrapper: "spotlight-card-module--burst-wrapper--1vEOt",
            burst: "spotlight-card-module--burst--mgK7D"
        }
    }, LlHf: function (e, t, n) {
        var a = n("a0vn"), r = n("WD+B"), o = n("0dIN"), i = function (e) {
            return function (t, n, i) {
                var s, c = a(t), l = r(c.length), u = o(i, l);
                if (e && n != n) {
                    for (; l > u;) if ((s = c[u++]) != s) return !0
                } else for (; l > u; u++) if ((e || u in c) && c[u] === n) return e || u || 0;
                return !e && -1
            }
        };
        e.exports = {includes: i(!0), indexOf: i(!1)}
    }, PK3T: function (e, t, n) {
        var a = n("ckLD");
        e.exports = function (e, t) {
            if (!a(e)) return e;
            var n, r;
            if (t && "function" == typeof (n = e.toString) && !a(r = n.call(e))) return r;
            if ("function" == typeof (n = e.valueOf) && !a(r = n.call(e))) return r;
            if (!t && "function" == typeof (n = e.toString) && !a(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, QU3x: function (e, t, n) {
        var a = n("34EK"), r = n("a0vn"), o = n("LlHf").indexOf, i = n("HIFH");
        e.exports = function (e, t) {
            var n, s = r(e), c = 0, l = [];
            for (n in s) !a(i, n) && a(s, n) && l.push(n);
            for (; t.length > c;) a(s, n = t[c++]) && (~o(l, n) || l.push(n));
            return l
        }
    }, QeBL: function (e, t, n) {
        "use strict";
        n.r(t), n.d(t, "HOME_SECTION_IDS", (function () {
            return st
        })), n.d(t, "pageQuery", (function () {
            return ct
        }));
        var a = n("t8Zj"), r = n("q1tI"), o = n.n(r), i = n("EDd8"), s = n("NBVa"), c = n("Dzbr"), l = n("3KeE"),
            u = n("JzP3"), d = n("YVwf"), f = n.n(d), v = (n("9L0q"), n("Wbzz")), h = n("+Hsl"), p = n("yFJF"), m = {
                slidesPerView: 1,
                roundLengths: !0,
                loop: !1,
                allowTouchMove: !1,
                autoplay: {delay: 5e3, disableOnInteraction: !1, waitForTransition: !1},
                effect: "fade",
                keyboard: {enabled: !0, onlyInViewport: !0}
            };

        function g(e, t) {
            return (e > 10 ? 32 : 100) * t
        }

        function b(e, t) {
            var n = "scale(" + t + ")";
            return e ? "rotateX(5deg) " + ("rotateY(" + e / 10 + "deg)") + " " + ("rotateZ(" + e + "deg)") + " " + n : "rotateX(5deg) " + n
        }

        function y() {
            return 20 * Math.random() - 10
        }

        function w(e) {
            return {
                x: "undefined" != typeof window ? window.innerWidth : 800,
                y: 0,
                scale: e > 3 ? (t = e, n = 1, n -= .08 * (t - 3), n = Math.max(n, .4)) : 1,
                shadowSize: 27,
                shadowAlpha: 0 === e ? .4 : 0
            };
            var t, n
        }

        function S(e, t) {
            var n, a = e.left, r = e.width, o = window.innerWidth, i = o / 5;
            1 === t ? n = i + o + r / 2 - (a + r / 2) : n = -(a + r + i);
            return n
        }

        function E(e, t) {
            return "2px 5px " + e + "px rgba(0, 0, 0, " + t + ")"
        }

        var O = n("wEEd");
        n("mbBF");

        function j(e, t) {
            return e.map((function (e, n) {
                return e + t[n]
            }))
        }

        function x(e, t) {
            return e.map((function (e, n) {
                return e - t[n]
            }))
        }

        function k(e, t, n) {
            return n = n || Math.hypot.apply(Math, e), t ? n / t : 0
        }

        function T(e, t) {
            return t ? e.map((function (e) {
                return e / t
            })) : Array(e.length).fill(0)
        }

        function M(e) {
            return Math.hypot.apply(Math, e)
        }

        function N(e, t) {
            return t = t || Math.hypot.apply(Math, e) || 1, e.map((function (e) {
                return e / t
            }))
        }

        function G(e, t, n) {
            var a = Math.hypot.apply(Math, t);
            return {velocities: T(t, n), velocity: k(t, n, a), distance: M(e), direction: N(t, a)}
        }

        function L(e, t) {
            return Math.abs(e) >= t && Math.sign(e) * t
        }

        function C(e, t, n) {
            return 0 === t || Math.abs(t) === 1 / 0 ? function (e, t) {
                return Math.pow(e, 5 * t)
            }(e, n) : e * t * n / (t + n * e)
        }

        function P(e, t, n, a) {
            return void 0 === a && (a = .15), 0 === a ? function (e, t, n) {
                return Math.max(t, Math.min(e, n))
            }(e, t, n) : e < t ? -C(t - e, n - t, a) + t : e > n ? C(e - n, n - t, a) + n : e
        }

        function D(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
            }
        }

        function _() {
            return (_ = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }).apply(this, arguments)
        }

        function R(e, t) {
            e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
        }

        function W(e, t) {
            if (null == e) return {};
            var n, a, r = {}, o = Object.keys(e);
            for (a = 0; a < o.length; a++) n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }

        function B() {
        }

        var I = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return function () {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                return t.forEach((function (e) {
                    return e.apply(void 0, n)
                }))
            }
        }, K = function (e) {
            return Array.isArray(e) ? e : [e, e]
        }, F = function (e, t) {
            return void 0 !== e ? e : t
        };

        function H(e, t) {
            var n = {};
            return Object.entries(e).forEach((function (e) {
                var a = e[0], r = e[1];
                return (void 0 !== r || a in t) && (n[a] = r)
            })), n
        }

        function A(e) {
            return "function" == typeof e ? e() : e
        }

        function J() {
            var e = {
                    _active: !1,
                    _blocked: !1,
                    _intentional: [!1, !1],
                    _movement: [0, 0],
                    _initial: [0, 0],
                    event: void 0,
                    values: [0, 0],
                    velocities: [0, 0],
                    delta: [0, 0],
                    movement: [0, 0],
                    offset: [0, 0],
                    lastOffset: [0, 0],
                    direction: [0, 0],
                    initial: [0, 0],
                    previous: [0, 0],
                    first: !1,
                    last: !1,
                    active: !1,
                    timeStamp: 0,
                    startTime: 0,
                    elapsedTime: 0,
                    cancel: B,
                    canceled: !1,
                    memo: void 0,
                    args: void 0
                }, t = {axis: void 0, xy: [0, 0], vxvy: [0, 0], velocity: 0, distance: 0},
                n = {da: [0, 0], vdva: [0, 0], origin: void 0, turns: 0};
            return {
                shared: {
                    hovering: !1,
                    scrolling: !1,
                    wheeling: !1,
                    dragging: !1,
                    moving: !1,
                    pinching: !1,
                    touches: 0,
                    buttons: 0,
                    down: !1,
                    shiftKey: !1,
                    altKey: !1,
                    metaKey: !1,
                    ctrlKey: !1
                },
                drag: _({}, e, {}, t, {_isTap: !0, _delayedEvent: !1, tap: !1, swipe: [0, 0]}),
                pinch: _({}, e, {}, n),
                wheel: _({}, e, {}, t),
                move: _({}, e, {}, t),
                scroll: _({}, e, {}, t)
            }
        }

        var z = function (e) {
            return function (t, n, a) {
                var r = e ? "addEventListener" : "removeEventListener";
                n.forEach((function (e) {
                    var n = e[0], o = e[1];
                    return t[r](n, o, a)
                }))
            }
        };
        var V = z(!0), Y = z(!1);

        function X(e) {
            if ("touches" in e) {
                var t = e.touches, n = e.changedTouches;
                return t.length > 0 ? t : n
            }
            return null
        }

        function U(e) {
            var t = "buttons" in e ? e.buttons : 0, n = X(e), a = n && n.length || 0;
            return _({touches: a, down: a > 0 || t > 0, buttons: t}, function (e) {
                return {shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, ctrlKey: e.ctrlKey}
            }(e))
        }

        function q(e) {
            var t = e.currentTarget, n = t.scrollX, a = t.scrollY, r = t.scrollLeft, o = t.scrollTop;
            return {values: [n || r || 0, a || o || 0]}
        }

        function Z(e) {
            return {values: [e.deltaX, e.deltaY]}
        }

        function Q(e) {
            var t = X(e), n = t ? t[0] : e;
            return {values: [n.clientX, n.clientY]}
        }

        function $(e) {
            return {values: [260 * e.scale, e.rotation]}
        }

        function ee(e) {
            var t = e.touches, n = t[1].clientX - t[0].clientX, a = t[1].clientY - t[0].clientY;
            return {
                values: [Math.hypot(n, a), -180 * Math.atan2(n, a) / Math.PI],
                origin: [(t[1].clientX + t[0].clientX) / 2, (t[1].clientY + t[0].clientY) / 2]
            }
        }

        var te = function () {
            var e = this;
            this.state = J(), this.timeouts = {}, this.domListeners = [], this.windowListeners = {}, this.bindings = {}, this.clean = function () {
                e.resetBindings(), Object.values(e.timeouts).forEach(clearTimeout), Object.keys(e.windowListeners).forEach((function (t) {
                    return e.removeWindowListeners(t)
                }))
            }, this.resetBindings = function () {
                e.bindings = {};
                var t = e.getDomTarget();
                t && (Y(t, e.domListeners, e.config.eventOptions), e.domListeners = [])
            }, this.getDomTarget = function () {
                var t = e.config.domTarget;
                return t && "current" in t ? t.current : t
            }, this.addWindowListeners = function (t, n) {
                e.config.window && (e.windowListeners[t] = n, V(e.config.window, n, e.config.eventOptions))
            }, this.removeWindowListeners = function (t) {
                if (e.config.window) {
                    var n = e.windowListeners[t];
                    n && (Y(e.config.window, n, e.config.eventOptions), delete e.windowListeners[t])
                }
            }, this.addDomTargetListeners = function (t) {
                Object.entries(e.bindings).forEach((function (t) {
                    var n = t[0], a = t[1];
                    e.domListeners.push([n.substr(2).toLowerCase(), I.apply(void 0, a)])
                })), V(t, e.domListeners, e.config.eventOptions)
            }, this.addBindings = function (t, n) {
                (Array.isArray(t) ? t : [t]).forEach((function (t) {
                    e.bindings[t] ? e.bindings[t].push(n) : e.bindings[t] = [n]
                }))
            }, this.getBindings = function () {
                var t = {}, n = e.config.captureString;
                return Object.entries(e.bindings).forEach((function (e) {
                    var a = e[0], r = e[1], o = Array.isArray(r) ? r : [r];
                    t[a + n] = I.apply(void 0, o)
                })), t
            }, this.getBind = function () {
                if (e.config.domTarget) {
                    var t = e.getDomTarget();
                    return t && e.addDomTargetListeners(t), e.clean
                }
                return e.getBindings()
            }
        };

        function ne(e, t, n, a) {
            var r = o.a.useRef(), i = o.a.useRef();
            return r.current || (r.current = new te), r.current.config = n, r.current.handlers = e, i.current = a, o.a.useEffect((function () {
                return r.current.clean
            }), []), o.a.useState((function () {
                return function () {
                    for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
                    return r.current.resetBindings(), t.forEach((function (e) {
                        new e(r.current, n).addBindings()
                    })), i.current && Object.entries(i.current).forEach((function (e) {
                        var t = e[0], n = e[1];
                        r.current.addBindings(t, n)
                    })), r.current.getBind()
                }
            }))[0]
        }

        var ae = function () {
            function e(e, t, n) {
                var a = this;
                void 0 === n && (n = []), this.stateKey = e, this.controller = t, this.args = n, this.debounced = !0, this.setTimeout = function (e, t) {
                    var n;
                    void 0 === t && (t = 140);
                    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                    a.controller.timeouts[a.stateKey] = (n = window).setTimeout.apply(n, [e, t].concat(o))
                }, this.clearTimeout = function () {
                    clearTimeout(a.controller.timeouts[a.stateKey])
                }, this.addWindowListeners = function (e) {
                    a.controller.addWindowListeners(a.stateKey, e)
                }, this.removeWindowListeners = function () {
                    a.controller.removeWindowListeners(a.stateKey)
                }, this.getStartGestureState = function (e, t) {
                    return _({}, J()[a.stateKey], {
                        _active: !0,
                        values: e,
                        initial: e,
                        offset: a.state.offset,
                        lastOffset: a.state.offset,
                        startTime: t.timeStamp
                    })
                }, this.rubberband = function (e, t) {
                    var n = a.config.bounds;
                    return e.map((function (e, a) {
                        return P(e, n[a][0], n[a][1], t[a])
                    }))
                }, this.fireGestureHandler = function (e) {
                    if (a.state._blocked) return a.debounced || (a.state._active = !1, a.clean()), null;
                    var t = a.state._intentional, n = t[0], r = t[1];
                    if (!e && !1 === n && !1 === r) return null;
                    var o = a.state, i = o._active, s = o.active;
                    a.state.active = i, a.state.first = i && !s, a.state.last = !i, a.controller.state.shared[a.ingKey] = i;
                    var c = _({}, a.controller.state.shared, {}, a.state, {}, a.mapStateValues(a.state)),
                        l = a.handler(c);
                    return a.state.memo = void 0 !== l ? l : a.state.memo, i || a.clean(), c
                }
            }

            var t, n, a, r = e.prototype;
            return r.updateSharedState = function (e) {
                Object.assign(this.controller.state.shared, e)
            }, r.updateGestureState = function (e) {
                Object.assign(this.state, e)
            }, r.getGenericPayload = function (e, t) {
                var n = e.timeStamp, a = this.state, r = a.values, o = a.startTime;
                return {event: e, timeStamp: n, elapsedTime: t ? 0 : n - o, args: this.args, previous: r}
            }, r.checkIntentionality = function (e, t, n) {
                return {_intentional: e, _blocked: !1}
            }, r.getMovement = function (e, t) {
                void 0 === t && (t = this.state);
                var n = this.config, a = n.initial, r = n.threshold, o = n.rubberband, i = r[0], s = r[1], c = t,
                    l = c._initial, u = c._active, d = c._intentional, f = c.lastOffset, v = c.movement, h = d[0],
                    p = d[1], m = this.getInternalMovement(e, t), g = m[0], b = m[1];
                !1 === h && (h = L(g, i)), !1 === p && (p = L(b, s));
                var y = this.checkIntentionality([h, p], [g, b], t), w = y._intentional, S = y._blocked, E = w[0],
                    O = w[1], k = [g, b];
                if (!1 !== E && !1 === d[0] && (l[0] = A(a)[0]), !1 !== O && !1 === d[1] && (l[1] = A(a)[1]), S) return _({}, y, {
                    _movement: k,
                    delta: [0, 0]
                });
                var T = [!1 !== E ? g - E : A(a)[0], !1 !== O ? b - O : A(a)[1]], M = j(T, f), N = u ? o : [0, 0];
                return _({}, y, {
                    _initial: l,
                    _movement: k,
                    movement: T = this.rubberband(j(T, l), N),
                    offset: this.rubberband(M, N),
                    delta: x(T, v)
                })
            }, r.clean = function () {
                this.clearTimeout(), this.removeWindowListeners()
            }, t = e, (n = [{
                key: "config", get: function () {
                    return this.controller.config[this.stateKey]
                }
            }, {
                key: "enabled", get: function () {
                    return this.controller.config.enabled && this.config.enabled
                }
            }, {
                key: "state", get: function () {
                    return this.controller.state[this.stateKey]
                }
            }, {
                key: "handler", get: function () {
                    return this.controller.handlers[this.stateKey]
                }
            }]) && D(t.prototype, n), a && D(t, a), e
        }(), re = function (e) {
            function t() {
                return e.apply(this, arguments) || this
            }

            R(t, e);
            var n = t.prototype;
            return n.getInternalMovement = function (e, t) {
                return x(e, t.initial)
            }, n.checkIntentionality = function (e, t, n) {
                var a = e, r = a[0], o = a[1], i = !1 !== r || !1 !== o, s = n.axis, c = !1;
                if (i) {
                    var l = t.map(Math.abs), u = l[0], d = l[1], f = this.config, v = f.axis, h = f.lockDirection;
                    if (s = s || (u > d ? "x" : u < d ? "y" : void 0), v || h) if (s) if (v && s !== v) c = !0; else e["x" === s ? 1 : 0] = !1; else e = [!1, !1]
                }
                return {_intentional: e, _blocked: c, axis: s}
            }, n.getKinematics = function (e, t) {
                var n = this.state.timeStamp, a = this.getMovement(e, this.state), r = a._blocked, o = a.delta,
                    i = a.movement;
                return r ? a : _({values: e, delta: o}, a, {}, G(i, o, t.timeStamp - n))
            }, n.mapStateValues = function (e) {
                return {xy: e.values, vxvy: e.velocities}
            }, t
        }(ae), oe = function (e) {
            function t(t, n) {
                var a;
                return (a = e.call(this, "drag", t, n) || this).ingKey = "dragging", a.dragShouldStart = function (e) {
                    var t = U(e).touches;
                    return a.enabled && t < 2
                }, a.setPointers = function (e) {
                    var t = e.currentTarget, n = e.pointerId;
                    t && t.setPointerCapture(n), a.updateGestureState({currentTarget: t, pointerId: n})
                }, a.removePointers = function () {
                    var e = a.state, t = e.currentTarget, n = e.pointerId;
                    t && t.releasePointerCapture(n)
                }, a.setListeners = function () {
                    a.removeWindowListeners();
                    var e = [["touchmove", a.onDragChange], ["touchend", a.onDragEnd], ["touchcancel", a.onDragEnd], ["mousemove", a.onDragChange], ["mouseup", a.onDragEnd]];
                    a.addWindowListeners(e)
                }, a.onDragStart = function (e) {
                    a.dragShouldStart(e) && (a.controller.config.pointer ? a.setPointers(e) : a.setListeners(), a.config.delay > 0 ? (a.state._delayedEvent = !0, "function" == typeof e.persist && e.persist(), a.setTimeout((function () {
                        return a.startDrag(e)
                    }), a.config.delay)) : a.startDrag(e))
                }, a.onDragChange = function (e) {
                    if (!a.state.canceled) if (a.state._active) {
                        var t = U(e);
                        if (t.down) {
                            a.updateSharedState(t);
                            var n = Q(e).values, r = a.getKinematics(n, e), o = a.state._isTap;
                            o && M(r._movement) >= 3 && (o = !1), a.updateGestureState(_({}, a.getGenericPayload(e), {}, r, {
                                _isTap: o,
                                cancel: function () {
                                    return a.onCancel()
                                }
                            })), a.fireGestureHandler()
                        } else a.onDragEnd(e)
                    } else a.state._delayedEvent && (a.clearTimeout(), a.startDrag(e))
                }, a.onDragEnd = function (e) {
                    a.state._active = !1, a.updateSharedState({down: !1, buttons: 0, touches: 0});
                    var t = a.state, n = t._isTap, r = t.values, o = t.velocities, i = o[0], s = o[1], c = t.movement,
                        l = c[0], u = c[1], d = t._intentional, f = d[0], v = d[1],
                        h = _({}, a.getGenericPayload(e), {}, a.getMovement(r)), p = h.elapsedTime, m = a.config,
                        g = m.swipeVelocity, b = g[0], y = g[1], w = m.swipeDistance, S = w[0], E = w[1], O = [0, 0];
                    p < 220 && (!1 !== f && Math.abs(i) > b && Math.abs(l) > S && (O[0] = Math.sign(i)), !1 !== v && Math.abs(s) > y && Math.abs(u) > E && (O[1] = Math.sign(s))), a.updateGestureState(_({event: e}, h, {
                        tap: n,
                        swipe: O
                    })), a.fireGestureHandler(a.config.filterTaps && a.state._isTap)
                }, a.clean = function () {
                    e.prototype.clean.call(function (e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(a)), a.state._delayedEvent = !1, a.controller.config.pointer && a.removePointers()
                }, a.onCancel = function () {
                    a.updateGestureState({
                        canceled: !0,
                        cancel: B
                    }), a.state._active = !1, a.updateSharedState({
                        down: !1,
                        buttons: 0,
                        touches: 0
                    }), requestAnimationFrame((function () {
                        return a.fireGestureHandler()
                    }))
                }, a
            }

            R(t, e);
            var n = t.prototype;
            return n.startDrag = function (e) {
                var t = this, n = Q(e).values;
                this.updateSharedState(U(e));
                var a = _({}, this.getStartGestureState(n, e), {}, this.getGenericPayload(e, !0));
                this.updateGestureState(_({}, a, {}, this.getMovement(n, a), {
                    cancel: function () {
                        return t.onCancel()
                    }
                })), this.fireGestureHandler()
            }, n.addBindings = function () {
                this.controller.config.pointer ? (this.controller.addBindings("onPointerDown", this.onDragStart), this.controller.addBindings("onPointerMove", this.onDragChange), this.controller.addBindings(["onPointerUp", "onPointerCancel"], this.onDragEnd)) : this.controller.addBindings(["onTouchStart", "onMouseDown"], this.onDragStart)
            }, t
        }(re);

        function ie() {
            return "undefined" != typeof window ? window : void 0
        }

        function se(e) {
            void 0 === e && (e = {});
            var t = {
                    domTarget: void 0,
                    eventOptions: {passive: !0, capture: !1, pointer: !1},
                    window: ie(),
                    enabled: !0
                }, n = t.eventOptions, a = t.window, r = W(t, ["eventOptions", "window"]), o = e, i = o.eventOptions,
                s = o.window, c = W(o, ["eventOptions", "window"]), l = _({}, n, {}, i), u = l.passive, d = l.capture,
                f = l.pointer;
            return _({}, r, {}, c, {
                window: s || a,
                eventOptions: {passive: !e.domTarget || !!u, capture: !!d},
                captureString: d ? "Capture" : "",
                pointer: !!f
            })
        }

        function ce(e) {
            var t = _({}, {enabled: !0, initial: [0, 0], threshold: void 0, rubberband: 0}, {}, e), n = t.threshold,
                a = t.rubberband;
            return "boolean" == typeof a && (a = a ? .15 : 0), void 0 === n && (n = 0), {
                enabled: t.enabled,
                initial: t.initial,
                threshold: K(n),
                rubberband: K(a)
            }
        }

        function le(e) {
            void 0 === e && (e = {});
            var t = {lockDirection: !1, axis: void 0, bounds: void 0}, n = e, a = n.axis, r = n.lockDirection,
                o = n.bounds, i = void 0 === o ? {} : o, s = W(n, ["axis", "lockDirection", "bounds"]),
                c = [[F(i.left, -1 / 0), F(i.right, 1 / 0)], [F(i.top, -1 / 0), F(i.bottom, 1 / 0)]];
            return _({}, ce(s), {}, t, {}, H({axis: a, lockDirection: r}, e), {bounds: c})
        }

        function ue(e) {
            void 0 === e && (e = {});
            var t = e, n = t.distanceBounds, a = void 0 === n ? {} : n, r = t.angleBounds, o = void 0 === r ? {} : r,
                i = W(t, ["distanceBounds", "angleBounds"]),
                s = [[F(a.min, -1 / 0), F(a.max, 1 / 0)], [F(o.min, -1 / 0), F(o.max, 1 / 0)]];
            return _({}, ce(i), {bounds: s})
        }

        function de(e) {
            void 0 === e && (e = {});
            var t = e, n = t.enabled, a = t.threshold, r = t.bounds, o = t.rubberband, i = t.initial, s = _({}, {
                    filterTaps: !1,
                    swipeVelocity: .5,
                    swipeDistance: 60,
                    delay: !1
                }, {}, W(t, ["enabled", "threshold", "bounds", "rubberband", "initial"])), c = s.swipeVelocity,
                l = s.swipeDistance, u = s.delay, d = s.filterTaps, f = s.axis, v = s.lockDirection;
            void 0 === a ? a = Math.max(0, d ? 3 : 0, v || f ? 1 : 0) : d = !0;
            var h = le(H({
                enabled: n,
                threshold: a,
                bounds: r,
                rubberband: o,
                axis: f,
                lockDirection: v,
                initial: i
            }, e));
            return _({}, h, {
                filterTaps: d || h.threshold[0] + h.threshold[1] > 0,
                swipeVelocity: K(c),
                swipeDistance: K(l),
                delay: "number" == typeof u ? u : u ? 180 : 0
            })
        }

        var fe = function (e) {
            function t(t, n) {
                var a;
                return (a = e.call(this, "pinch", t, n) || this).ingKey = "pinching", a.pinchShouldStart = function (e) {
                    var t = U(e).touches;
                    return a.enabled && 2 === t
                }, a.onPinchStart = function (e) {
                    if (a.pinchShouldStart(e)) {
                        var t = ee(e), n = t.values, r = t.origin;
                        a.updateSharedState(U(e));
                        var o = _({}, a.getStartGestureState(n, e), {}, a.getGenericPayload(e, !0));
                        a.updateGestureState(_({}, o, {}, a.getMovement(n, o), {
                            origin: r, cancel: function () {
                                return a.onCancel()
                            }
                        })), a.fireGestureHandler()
                    }
                }, a.onPinchChange = function (e) {
                    var t = a.state, n = t.canceled, r = t.timeStamp, o = t._active;
                    if (!n && o) {
                        var i = U(e);
                        if (2 === i.touches && e.timeStamp !== r) {
                            a.updateSharedState(i);
                            var s = ee(e), c = s.values, l = s.origin, u = a.getKinematics(c, e);
                            a.updateGestureState(_({}, a.getGenericPayload(e), {}, u, {
                                origin: l, cancel: function () {
                                    return a.onCancel()
                                }
                            })), a.fireGestureHandler()
                        }
                    }
                }, a.onPinchEnd = function (e) {
                    a.state._active = !1, a.updateSharedState({
                        down: !1,
                        touches: 0
                    }), a.updateGestureState(_({event: e}, a.getGenericPayload(e), {}, a.getMovement(a.state.values))), a.fireGestureHandler()
                }, a.onCancel = function () {
                    a.state._active = !1, a.updateGestureState({
                        canceled: !0,
                        cancel: B
                    }), a.updateSharedState({down: !1, touches: 0}), requestAnimationFrame((function () {
                        return a.fireGestureHandler()
                    }))
                }, a.onGestureStart = function (e) {
                    if (a.enabled) {
                        e.preventDefault();
                        var t = $(e).values;
                        a.updateSharedState(U(e));
                        var n = _({}, a.getStartGestureState(t, e), {}, a.getGenericPayload(e, !0));
                        a.updateGestureState(_({}, n, {}, a.getMovement(t, n), {
                            cancel: function () {
                                return a.onCancel()
                            }
                        })), a.fireGestureHandler()
                    }
                }, a.onGestureChange = function (e) {
                    var t = a.state, n = t.canceled, r = t._active;
                    if (!n && r) {
                        e.preventDefault();
                        var o = U(e);
                        a.updateSharedState(o);
                        var i = $(e).values, s = a.getKinematics(i, e);
                        a.updateGestureState(_({}, a.getGenericPayload(e), {}, s, {
                            cancel: function () {
                                return a.onCancel()
                            }
                        })), a.fireGestureHandler()
                    }
                }, a.onGestureEnd = function (e) {
                    e.preventDefault(), a.state._active = !1, a.updateSharedState({
                        down: !1,
                        touches: 0
                    }), a.updateGestureState(_({event: e}, a.getGenericPayload(e), {}, a.getMovement(a.state.values))), a.fireGestureHandler()
                }, a.updateTouchData = function (e) {
                    if (a.enabled && 2 === e.touches.length) {
                        var t = ee(e).origin;
                        a.state.origin = t
                    }
                }, a.wheelShouldRun = function (e) {
                    return a.enabled && e.ctrlKey
                }, a.getWheelValuesFromEvent = function (e) {
                    var t = Z(e).values[1], n = a.state.values, r = n[0], o = n[1];
                    return {values: [r - t, void 0 !== o ? o : 0], origin: [e.clientX, e.clientY], delta: [0, t]}
                }, a.onWheel = function (e) {
                    a.wheelShouldRun(e) && (a.clearTimeout(), a.setTimeout(a.onWheelEnd), a.state._active ? a.onWheelChange(e) : a.onWheelStart(e))
                }, a.onWheelStart = function (e) {
                    var t = a.getWheelValuesFromEvent(e), n = t.values, r = t.delta, o = t.origin;
                    a.controller.config.eventOptions.passive || e.preventDefault(), a.updateSharedState(U(e));
                    var i = _({}, a.getStartGestureState(n, e), {}, a.getGenericPayload(e, !0), {initial: a.state.values});
                    a.updateGestureState(_({}, i, {}, a.getMovement(n, i), {
                        offset: n,
                        delta: r,
                        origin: o
                    })), a.fireGestureHandler()
                }, a.onWheelChange = function (e) {
                    var t = U(e);
                    a.updateSharedState(t);
                    var n = a.getWheelValuesFromEvent(e), r = n.values, o = n.origin, i = n.delta,
                        s = a.getKinematics(r, e);
                    a.updateGestureState(_({}, a.getGenericPayload(e), {}, s, {
                        origin: o,
                        delta: i
                    })), a.fireGestureHandler()
                }, a.onWheelEnd = function () {
                    a.state._active = !1, a.updateGestureState(a.getMovement(a.state.values)), a.fireGestureHandler()
                }, a
            }

            return R(t, e), t.prototype.addBindings = function () {
                !function () {
                    try {
                        return "constructor" in GestureEvent
                    } catch (e) {
                        return !1
                    }
                }() ? (this.controller.addBindings("onTouchStart", this.onPinchStart), this.controller.addBindings("onTouchMove", this.onPinchChange), this.controller.addBindings(["onTouchEnd", "onTouchCancel"], this.onPinchEnd), this.controller.addBindings("onWheel", this.onWheel)) : (this.controller.addBindings("onGestureStart", this.onGestureStart), this.controller.addBindings("onGestureChange", this.onGestureChange), this.controller.addBindings(["onGestureEnd", "onTouchCancel"], this.onGestureEnd), this.controller.addBindings(["onTouchStart", "onTouchMove"], this.updateTouchData))
            }, t
        }(function (e) {
            function t() {
                return e.apply(this, arguments) || this
            }

            R(t, e);
            var n = t.prototype;
            return n.getInternalMovement = function (e, t) {
                var n = e[0], a = e[1], r = t.values, o = t.turns, i = t.initial,
                    s = (a = void 0 !== a ? a : r[1]) - r[1], c = Math.abs(s) > 270 ? o + Math.sign(s) : o;
                return [n - i[0], a - 360 * c - i[1]]
            }, n.getKinematics = function (e, t) {
                var n = this.state, a = n.timeStamp, r = n.initial, o = this.getMovement(e, this.state), i = o.delta,
                    s = o.movement;
                return _({values: e, delta: i, turns: (e[1] - s[1] - r[1]) / 360}, o, {}, G(s, i, t.timeStamp - a))
            }, n.mapStateValues = function (e) {
                return {da: e.values, vdva: e.velocities}
            }, t
        }(ae));
        var ve = function (e) {
            function t(t, n) {
                var a;
                return (a = e.call(this, "wheel", t, n) || this).ingKey = "wheeling", a.debounced = !0, a.wheelShouldRun = function (e) {
                    return (!e.ctrlKey || !("pinch" in a.controller.handlers)) && a.enabled
                }, a.getValuesFromEvent = function (e) {
                    var t = a.state.values;
                    return {values: j(Z(e).values, t)}
                }, a.onWheel = function (e) {
                    a.wheelShouldRun(e) && (a.clearTimeout(), a.setTimeout(a.onWheelEnd), a.state._active ? a.onWheelChange(e) : a.onWheelStart(e))
                }, a.onWheelStart = function (e) {
                    var t = a.getValuesFromEvent(e).values;
                    a.updateSharedState(U(e));
                    var n = _({}, a.getStartGestureState(t, e), {}, a.getGenericPayload(e, !0), {initial: a.state.values}),
                        r = a.getMovement(t, n), o = r.delta;
                    a.updateGestureState(_({}, n, {}, r, {distance: M(o), direction: N(o)})), a.fireGestureHandler()
                }, a.onWheelChange = function (e) {
                    var t = U(e);
                    a.updateSharedState(t);
                    var n = a.getValuesFromEvent(e).values, r = a.getKinematics(n, e);
                    a.updateGestureState(_({}, a.getGenericPayload(e), {}, r)), a.fireGestureHandler()
                }, a.onWheelEnd = function () {
                    a.state._active = !1, a.updateGestureState(_({}, a.getMovement(a.state.values), {
                        velocities: [0, 0],
                        velocity: 0
                    })), a.fireGestureHandler()
                }, a
            }

            return R(t, e), t.prototype.addBindings = function () {
                this.controller.addBindings("onWheel", this.onWheel)
            }, t
        }(re);
        var he = function (e) {
            function t(t, n) {
                var a;
                return (a = e.call(this, "move", t, n) || this).ingKey = "moving", a.debounced = !0, a.moveShouldRun = function () {
                    return a.enabled
                }, a.onMove = function (e) {
                    a.moveShouldRun() && (a.clearTimeout(), a.setTimeout(a.onMoveEnd), a.state._active ? a.onMoveChange(e) : a.onMoveStart(e))
                }, a.onMoveStart = function (e) {
                    var t = Q(e).values;
                    a.updateSharedState(U(e));
                    var n = _({}, a.getStartGestureState(t, e), {}, a.getGenericPayload(e, !0));
                    a.updateGestureState(_({}, n, {}, a.getMovement(t, n))), a.fireGestureHandler()
                }, a.onMoveChange = function (e) {
                    var t = U(e);
                    a.updateSharedState(t);
                    var n = Q(e).values, r = a.getKinematics(n, e);
                    a.updateGestureState(_({}, a.getGenericPayload(e), {}, r)), a.fireGestureHandler()
                }, a.onMoveEnd = function () {
                    a.state._active = !1, a.updateGestureState(_({}, a.getMovement(a.state.values), {
                        velocities: [0, 0],
                        velocity: 0
                    })), a.fireGestureHandler()
                }, a.onPointerEnter = function (e) {
                    if (a.controller.state.shared.hovering = !0, a.controller.config.enabled) {
                        if (a.controller.config.hover.enabled) {
                            var t = Q(e).values,
                                n = _({}, a.controller.state.shared, {}, a.state, {}, a.getGenericPayload(e, !0), {
                                    values: t,
                                    active: !0,
                                    hovering: !0
                                });
                            a.controller.handlers.hover(_({}, n, {}, a.mapStateValues(n)))
                        }
                        "move" in a.controller.handlers && a.onMoveStart(e)
                    }
                }, a.onPointerLeave = function (e) {
                    if (a.controller.state.shared.hovering = !1, a.controller.config.hover.enabled) {
                        var t = Q(e).values,
                            n = _({}, a.controller.state.shared, {}, a.state, {}, a.getGenericPayload(e), {
                                values: t,
                                active: !1
                            });
                        a.controller.handlers.hover(_({}, n, {}, a.mapStateValues(n)))
                    }
                    "move" in a.controller.handlers && a.onMoveEnd()
                }, a
            }

            return R(t, e), t.prototype.addBindings = function () {
                this.controller.config.pointer ? ("move" in this.controller.handlers && this.controller.addBindings("onPointerMove", this.onMove), "hover" in this.controller.handlers && (this.controller.addBindings("onPointerEnter", this.onPointerEnter), this.controller.addBindings("onPointerLeave", this.onPointerLeave))) : ("move" in this.controller.handlers && this.controller.addBindings("onMouseMove", this.onMove), "hover" in this.controller.handlers && (this.controller.addBindings("onMouseEnter", this.onPointerEnter), this.controller.addBindings("onMouseLeave", this.onPointerLeave)))
            }, t
        }(re);
        var pe = function (e) {
            function t(t, n) {
                var a;
                return (a = e.call(this, "scroll", t, n) || this).ingKey = "scrolling", a.debounced = !0, a.scrollShouldRun = function () {
                    return a.enabled
                }, a.onScroll = function (e) {
                    a.scrollShouldRun() && (a.clearTimeout(), a.setTimeout(a.onScrollEnd), a.state._active ? a.onScrollChange(e) : a.onScrollStart(e))
                }, a.onScrollStart = function (e) {
                    var t = q(e).values;
                    a.updateSharedState(U(e));
                    var n = _({}, a.getStartGestureState(t, e), {}, a.getGenericPayload(e, !0), {initial: a.state.values}),
                        r = a.getMovement(t, n), o = r.delta;
                    a.updateGestureState(_({}, n, {}, r, {distance: M(o), direction: N(o)})), a.fireGestureHandler()
                }, a.onScrollChange = function (e) {
                    var t = U(e);
                    a.updateSharedState(t);
                    var n = q(e).values, r = a.getKinematics(n, e);
                    a.updateGestureState(_({}, a.getGenericPayload(e), {}, r)), a.fireGestureHandler()
                }, a.onScrollEnd = function () {
                    a.state._active = !1, a.updateGestureState(_({}, a.getMovement(a.state.values), {
                        velocities: [0, 0],
                        velocity: 0
                    })), a.fireGestureHandler()
                }, a
            }

            return R(t, e), t.prototype.addBindings = function () {
                this.controller.addBindings("onScroll", this.onScroll)
            }, t
        }(re);

        function me(e, t, n) {
            var a = t + "Start", r = t + "End";
            delete n[t], delete n[a], delete n[r];
            return function (n) {
                var o = void 0;
                return n.first && a in e && e[a](n), t in e && (o = e[t](n)), n.last && r in e && e[r](n), o
            }
        }

        var ge = n("9eSz"), be = n.n(ge), ye = n("Fi4q"), we = n.n(ye), Se = n("jp/M"), Ee = function (e) {
            var t = e.articles, n = e.activeIndex, a = e.onThrow, i = e.onDrag, s = e.isShuffling,
                l = Object(r.useContext)(c.a).prefersReducedMotion, u = Object(r.useRef)(null),
                d = Object(r.useRef)(null), f = Object(r.useRef)(null), v = Object(r.useRef)([]), h = t,
                p = Object(O.e)(h.length, (function (e) {
                    return {from: w(e), to: {rot: y()}, immediate: l}
                })), m = p[0], j = p[1], x = function (e, t) {
                    void 0 === t && (t = {});
                    var n = t, a = n.domTarget, r = n.eventOptions, o = n.window,
                        i = W(n, ["domTarget", "eventOptions", "window"]),
                        s = _({}, se({domTarget: a, eventOptions: r, window: o}), {drag: de(i)});
                    return ne({drag: e}, [oe], s)
                }((function (e) {
                    var t = e.down, r = e.movement, o = e.direction, s = e.velocity, c = e.distance, u = r[0],
                        f = o[0] < 0 ? -1 : 1;
                    v.current[n] = f;
                    var h, p, m = s > .2, g = t ? u : 0, b = function (e, t, n) {
                            return e / 100 + 2 * n * t
                        }(u, f, s), y = t ? 1.1 : 1, w = {friction: 50, tension: (h = t, p = 350, h && (p = 500), p)},
                        E = t ? 48 : 27, O = t ? .2 : .5;
                    i(t), t || null === d.current || (m || Math.abs(c) > 200) && (v.current[n] = u < 0 ? -1 : 1, g = S(d.current, f), a(o));
                    var x = {x: g, rot: b, scale: y, shadowSize: E, shadowAlpha: O, config: w};
                    l || j((function (e) {
                        if (e === n) return x
                    }))
                })), k = Object(r.useCallback)((function () {
                    null !== u.current && (d.current = u.current.getBoundingClientRect())
                }), [u]), T = Object(r.useCallback)((function () {
                    k(), j((function (e) {
                        if (!(e >= n)) {
                            var t = v.current[e] || 1;
                            return {x: 1.2 * window.innerWidth * t}
                        }
                    }))
                }), [k, v, n]);
            return Object(r.useEffect)((function () {
                return window.addEventListener("resize", T), T(), function () {
                    return window.removeEventListener("resize", T)
                }
            }), [k, n]), Object(r.useEffect)((function () {
                var e = 0 === n, a = f.current > n;
                null !== f.current && j((function (r) {
                    var o = {}, i = v.current[r] || 1, s = r === n - 1, c = r === n, l = r === n + 1, u = 1;
                    return r <= n + 3 || (u -= .08 * (r - 3)), o.shadowAlpha = 0, o.scale = u, e && (o.delay = g(t.length, r), o.x = 0, 0 === m[r].rot.value && (o.rot = y())), s && (o.x = S(d.current, i)), c && (o.rot = 0, o.shadowAlpha = .4), c && a && (o.x = 0), (s && a || l && a) && (o.rot = y()), o
                })), f.current = n
            }), [n, f]), Object(r.useEffect)((function () {
                s || (v.current = []), j((function (e) {
                    var n = v.current[e] || 1, a = {};
                    return s ? (a.x = S(d.current, n), a.delay = g(t.length, e) / 2) : (a.x = 0, a.delay = g(t.length, e)), a
                }))
            }), [s]), Object(r.useLayoutEffect)((function () {
                j((function (e) {
                    return {x: 0, delay: g(t.length, e)}
                }))
            }), [j]), o.a.createElement("div", {className: we.a.wrapper, ref: u}, m.map((function (e, t) {
                var n, a = e.x, r = e.y, i = e.rot, s = e.scale, c = e.shadowAlpha, l = e.shadowSize, u = [i, s],
                    d = Object(O.c)(u, b), f = Object(O.c)([l, c], E), v = h[t].image;
                return o.a.createElement(O.a.div, {
                    key: t,
                    className: we.a.inner,
                    style: {
                        transform: Object(O.c)([a, r], (function (e, t) {
                            return "translate3d(" + e + "px," + t + "px,0)"
                        })), zIndex: h.length - t
                    }
                }, o.a.createElement(O.a.div, Object.assign({
                    className: we.a.card,
                    style: {transform: d, boxShadow: f}
                }, x(t)), (null == v || null === (n = v.src) || void 0 === n ? void 0 : n.src) && o.a.createElement(be.a, {
                    fluid: v.src,
                    className: we.a.image,
                    backgroundColor: Se.c,
                    "aria-hidden": "true",
                    loading: "lazy"
                })))
            })))
        }, Oe = n("8obw"), je = n.n(Oe), xe = function (e) {
            var t = e.onClick, n = e.children, a = e.label, r = e.disabled;
            return o.a.createElement("button", {
                type: "button",
                "aria-label": a,
                className: je.a.button,
                onClick: t,
                disabled: r
            }, n, o.a.createElement("span", {"aria-hidden": "true", className: "t-ui-4 " + je.a.label}, a))
        };
        xe.defaultProps = {
            onClick: function () {
            }
        };
        var ke = n("UR9S"), Te = n("EJ3e"), Me = n("M2M3"), Ne = n.n(Me), Ge = n("W5WM"), Le = n.n(Ge),
            Ce = function (e) {
                var t = e.articles, n = Object(r.useContext)(c.a), i = n.setTheme, s = n.isLoading,
                    l = n.prefersReducedMotion, u = Object(r.useState)(null), d = u[0], g = u[1],
                    b = Object(r.useState)(!1), y = b[0], w = b[1], S = Object(r.useState)(0), E = S[0], O = S[1],
                    j = Object(r.useState)(!1), x = j[0], k = j[1], T = Object(r.useState)(t), M = T[0], N = T[1],
                    G = Object(r.useState)(!1), L = G[0], C = G[1], P = Object(r.useState)(null), D = P[0], _ = P[1],
                    R = Object(r.useRef)(null), W = Object(r.useRef)(null), B = Object(r.useRef)(null),
                    I = Object(r.useRef)(null), K = y ? Le.a.shuffling : "", F = x ? Le.a.barInnerAnimating : "",
                    H = s ? "" : Le.a.reveal, A = Object(r.useCallback)((function (e) {
                        var t = e ? 2e3 : 1e3;
                        l && (t = 2), W.current && window.clearTimeout(W.current), B.current && window.clearTimeout(B.current), W.current = window.setTimeout((function () {
                            w(!1)
                        }), t), e && (B.current = window.setTimeout((function () {
                            N(e)
                        }), t / 2)), w(!0)
                    }), [E, w, W, N]), J = Object(r.useCallback)((function () {
                        d && !d.destroyed && (null !== I.current && (d.autoplay.start(), d.autoplay.stop()), E !== d.activeIndex && O(d.activeIndex))
                    }), [d, E, O, I, i]), z = Object(r.useCallback)((function (e) {
                        var t = e[0];
                        d && !d.destroyed && (t.isIntersecting ? d.autoplay.start() : d.autoplay.stop())
                    }), [d]), V = Object(r.useCallback)((function () {
                        d && !d.destroyed && (d.activeIndex >= M.length - 1 && !y ? A() : d.slideNext())
                    }), [d, y, A]), Y = Object(r.useCallback)((function () {
                        d && !d.destroyed && d.slidePrev()
                    }), [d]), X = Object(r.useCallback)((function () {
                        var e = function (e) {
                            for (var t, n, r = Object(a.a)(e), o = r.length; 0 !== o;) n = Math.floor(Math.random() * o), t = r[o -= 1], r[o] = r[n], r[n] = t;
                            return r
                        }(M);
                        A(e)
                    }), [M, A]), U = Object(r.useCallback)((function () {
                        d && !d.destroyed && (d.autoplay.running ? k(!0) : k(!1))
                    }), [d, k]);
                Object(r.useEffect)((function () {
                    d && !d.destroyed && (y ? d.autoplay.stop() : (d.autoplay.start(), d.slideTo(0)))
                }), [y]);
                var q = function () {
                    if (i && (null == M ? void 0 : M.length)) {
                        var e, t, n,
                            a = null === (e = M[E]) || void 0 === e || null === (t = e.tags) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.parentCategory;
                        a && i && i(ke.a[a])
                    }
                };
                Object(r.useEffect)(q, [E, M]);
                Object(r.useEffect)((function () {
                    d && !d.destroyed && (L ? d.autoplay.stop() : d.autoplay.start())
                }), [L]), Object(r.useLayoutEffect)((function () {
                    var e;
                    if (d && !d.destroyed && (d.on("slideChange", J), d.on("autoplayStart", U), d.on("autoplayStop", U), J()), window.IntersectionObserver && null !== R.current) {
                        (e = new IntersectionObserver(z, {rootMargin: "0px", threshold: .1})).observe(R.current)
                    }
                    return q(), _(document.getElementById(st.newReleases)), function () {
                        W.current && window.clearTimeout(W.current), B.current && window.clearTimeout(B.current), e && null !== R.current && (e.unobserve(R.current), e.disconnect()), d && !d.destroyed && (d.off("slideChange", J), d.off("autoplayStart", U), d.off("autoplayStop", U))
                    }
                }), [d, J, z]);
                var Z = Object(r.useCallback)((function (e) {
                    e.preventDefault();
                    var t = D.getBoundingClientRect().top + document.documentElement.scrollTop;
                    Object(Te.a)(t)
                }), [D]);
                return o.a.createElement("div", {className: "hidden-without-js sd-container " + Le.a.heavyRotation + " " + K + " " + H}, o.a.createElement("div", {className: "sd-container-inner " + Le.a.wrapper}, o.a.createElement("div", {
                    className: Le.a.controls,
                    style: {zIndex: L ? 0 : 102}
                }, o.a.createElement(xe, {
                    onClick: Y,
                    label: "Previous Story",
                    disabled: 0 === E
                }, o.a.createElement(p.j, null)), o.a.createElement(xe, {
                    onClick: V,
                    label: "Next Story"
                }, o.a.createElement(p.j, {rotation: 180})), o.a.createElement(xe, {
                    onClick: X,
                    label: "Shuffle Stories"
                }, o.a.createElement(p.i, null))), o.a.createElement("div", {
                    className: Le.a.carousel,
                    ref: R
                }, o.a.createElement("h2", {className: "a11y-visually-hidden"}, "Featured articles"), o.a.createElement(f.a, Object.assign({shouldSwiperUpdate: !0}, m, {
                    speed: l ? 1 : 500,
                    getSwiper: g
                }), M.map((function (e, t) {
                    return o.a.createElement("div", {key: t}, o.a.createElement("div", {className: Le.a.slide}, e.tags && o.a.createElement("ul", {className: "unstyled-list " + Le.a.slideTags}, e.tags.map((function (e, n) {
                        var a = e.title, r = e.href;
                        return o.a.createElement("li", {key: n}, o.a.createElement(v.Link, {
                            className: "t-ui-4 " + Le.a.slideLink,
                            to: r,
                            tabIndex: E !== t ? -1 : void 0
                        }, a))
                    }))), e.title && e.href && o.a.createElement("h3", {className: "t-display-4"}, o.a.createElement(v.Link, {
                        className: Le.a.slideLink,
                        to: e.href,
                        tabIndex: E !== t ? -1 : void 0
                    }, e.title))))
                })))), o.a.createElement("div", {className: Le.a.cards}, !s && o.a.createElement(Ee, {
                    articles: M,
                    activeIndex: E,
                    isShuffling: y,
                    onDrag: C,
                    onThrow: function (e) {
                        e < 0 ? Y() : V()
                    }
                })), o.a.createElement("div", {className: Le.a.bottomBar}, o.a.createElement("div", {className: Le.a.timeline}, o.a.createElement("span", {className: "t-ui-4"}, Object(h.a)(E + 1)), !l && o.a.createElement("div", {className: Le.a.bar}, o.a.createElement("div", {
                    className: Le.a.barInner + " " + F,
                    style: {animationDuration: m.autoplay.delay + "ms"}
                })), o.a.createElement("span", {className: "t-ui-4"}, Object(h.a)(M.length))), o.a.createElement("a", {
                    href: "#" + st.newReleases,
                    className: Ne.a.buttonBig,
                    onClick: Z
                }, o.a.createElement("span", {className: "t-ui-4 " + Ne.a.label + " " + Le.a.scrollLabel}, "Scroll Down"), o.a.createElement("div", {className: Ne.a.icon}, o.a.createElement("div", {className: Ne.a.background}), o.a.createElement(p.a, null))))))
            }, Pe = n("86Ed"), De = n("oLAf"), _e = n("kiPv"), Re = n("eNRN"), We = {
                slidesPerView: "auto",
                roundLengths: !0,
                loop: !1,
                grabCursor: !0,
                allowTouchMove: !0,
                spaceBetween: 24,
                keyboard: {enabled: !0, onlyInViewport: !0},
                breakpoints: {1024: {spaceBetween: 128}, 601: {spaceBetween: 48}}
            };
        var Be = {mass: 1, tension: 150, friction: 20}, Ie = n("35Ii"), Ke = n.n(Ie), Fe = function (e, t) {
                return "translate3d(" + e + "px, " + t + "px, 0px)"
            }, He = function (e) {
                return "scale(" + e + ")"
            }, Ae = function (e) {
                return "" + e
            }, Je = function (e) {
                return "0 0 0 " + e + "px var(--color-typography--barely-visible)"
            }, ze = function (e) {
                var t = e.boundingElement, n = Object(O.d)((function () {
                    return {xy: [320, 320], scale: 0, opacity: 0, uiOpacity: 0, border: 1, config: Be}
                })), a = n[0], i = n[1], s = function (e, t) {
                    void 0 === t && (t = {});
                    var n = o.a.useState((function () {
                            return new Set(Object.keys(e).map((function (e) {
                                return e.replace(/End|Start/, "")
                            })))
                        }))[0], a = t, r = a.drag, i = a.wheel, s = a.move, c = a.scroll, l = a.pinch, u = a.hover,
                        d = se(W(a, ["drag", "wheel", "move", "scroll", "pinch", "hover"])), f = [], v = {}, h = _({}, e);
                    return n.has("onDrag") && (f.push(oe), v.drag = me(e, "onDrag", h), d.drag = de(r)), n.has("onWheel") && (f.push(ve), v.wheel = me(e, "onWheel", h), d.wheel = le(i)), n.has("onScroll") && (f.push(pe), v.scroll = me(e, "onScroll", h), d.scroll = le(c)), n.has("onMove") && (f.push(he), v.move = me(e, "onMove", h), d.move = le(s)), n.has("onPinch") && (f.push(fe), v.pinch = me(e, "onPinch", h), d.pinch = ue(l)), n.has("onHover") && (n.has("onMove") || f.push(he), v.hover = e.onHover, d.hover = _({enabled: !0}, u), delete h.onHover), ne(v, f, d, h)
                }({
                    onDrag: function (e) {
                        var t = e.down, n = {};
                        n.border = t ? 48 : 1, n.scale = t ? .25 : 1, n.uiOpacity = t ? 0 : 1, i(n)
                    }, onMove: function (e) {
                        var t, n, a = e.down, r = {xy: e.xy};
                        if (!a && null !== (null === (t = e.event) || void 0 === t ? void 0 : t.type)) {
                            var o, s = (null === (o = e.event) || void 0 === o ? void 0 : o.target).tagName;
                            s && ("A" === (n = s) || "BUTTON" === n) ? (r.uiOpacity = 0, r.scale = .25) : (r.uiOpacity = 1, r.scale = 1)
                        }
                        i(r)
                    }, onHover: function (e) {
                        var t = e.hovering;
                        i({opacity: t ? 1 : 0, scale: t ? 1 : 0})
                    }
                }, {domTarget: t});
                return Object(r.useEffect)(s, [s]), o.a.createElement("div", {className: Ke.a.wrapper}, o.a.createElement(O.a.div, {
                    className: Ke.a.cursor,
                    style: {opacity: a.opacity.interpolate(Ae), transform: a.xy.interpolate(Fe)}
                }, o.a.createElement(O.a.div, {
                    className: Ke.a.inner,
                    style: {transform: a.scale.interpolate(He)}
                }, o.a.createElement(O.a.div, {
                    className: Ke.a.graphic,
                    style: {boxShadow: a.border.interpolate(Je)}
                }), o.a.createElement(O.a.div, {
                    className: Ke.a.ui,
                    style: {opacity: a.uiOpacity.interpolate(Ae)}
                }, o.a.createElement("div", {className: Ke.a.leftArrow}), o.a.createElement("div", {className: Ke.a.rightArrow})))))
            }, Ve = n("NRoD"), Ye = n("+RNV"),
            Xe = ["M365,400a35,35 0 1,0 70,0a35,35 0 1,0 -70,0", "M604 367C793 244 745-41 393 235 310 62 163-3 253 263c-174-93-390-85-75 104-115 33-306 230 138 172-8 136 119 268 164 93 72 94 115-63 3-140 262 66 453 17 121-125z", "M761 374c41-33-142-55-200-43 25-41 36-250-18-207 7-87-143-157-171-53-124-52-89 134-73 186-56-38-289-93-198-18-99 43-120 344 18 383-19 67 161-93 188-112-14 82 181 296 193 235 52 99 268-21 216-109 72 5-72-137-129-176 61-2 222-62 174-86z"],
            Ue = {maxSegmentLength: 12},
            qe = [Object(Ye.interpolate)(Xe[0], Xe[1], Ue), Object(Ye.interpolate)(Xe[0], Xe[2], Ue)],
            Ze = function (e) {
                var t = e.active, n = e.index, a = Object(r.useState)({method: qe[n]})[0], i = Object(O.d)({
                    from: {progress: 0},
                    to: {progress: 1},
                    config: {mass: 1, tension: 220, friction: 50},
                    reset: t,
                    reverse: !t
                }).progress;
                return o.a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "currentColor",
                    viewBox: "0 0 800 800"
                }, o.a.createElement(O.a.path, {d: i.interpolate(null == a ? void 0 : a.method)}))
            }, Qe = n("Joop"), $e = n.n(Qe), et = function (e) {
                var t, n = e.author, a = e.type, i = Object(r.useContext)(c.a).prefersReducedMotion,
                    s = Object(r.useState)(!1), l = s[0], u = s[1], d = n.articleUrl, f = n.headshot, v = n.name,
                    h = n.quote, p = n.jobTitle, m = n.location;
                if (!d || !(null == f || null === (t = f.image) || void 0 === t ? void 0 : t.src)) return null;
                var g = "";
                switch (a) {
                    case 0:
                        g = $e.a.type1;
                        break;
                    case 1:
                        g = $e.a.type2;
                        break;
                    case 2:
                        g = $e.a.type3
                }
                var b = a % (Xe.length - 1);
                return o.a.createElement("div", {className: $e.a.card + " " + g}, !i && o.a.createElement("div", {className: $e.a.burstWrapper}, o.a.createElement("div", {className: $e.a.burst}, o.a.createElement(Ze, {
                    index: b,
                    active: l
                }))), o.a.createElement("div", {className: $e.a.inner}, o.a.createElement(Ve.a, {
                    to: d,
                    className: $e.a.link,
                    "aria-label": "Read more about " + v,
                    onMouseOver: function () {
                        return u(!0)
                    },
                    onMouseLeave: function () {
                        return u(!1)
                    }
                }, o.a.createElement(be.a, {
                    fluid: f.image,
                    alt: f.alt ? f.alt : "",
                    backgroundColor: Se.c,
                    className: $e.a.image,
                    fadeIn: !0,
                    loading: "lazy"
                }), h && o.a.createElement("div", {className: $e.a.overlay}, o.a.createElement("div", {className: $e.a.overlayBackground}), o.a.createElement("div", {className: $e.a.overlayContent}, o.a.createElement("q", {className: "t-subhead-2"}, h), o.a.createElement("div", {className: "t-ui-4 " + $e.a.fakeLink}, "Read more")))), v && o.a.createElement("h3", {className: "t-heading-2"}, v), p && o.a.createElement("span", {className: "t-subhead-2"}, p)), m && o.a.createElement("span", {className: "t-ui-4 " + $e.a.location}, m))
            }, tt = n("kVRO"), nt = n.n(tt), at = function (e) {
                var t = e.className, n = e.authors, a = Object(r.useContext)(c.a), i = a.isDesktop,
                    l = a.prefersReducedMotion, u = Object(r.useRef)(null);
                return o.a.createElement("section", {
                    id: st.inTheSpotlight,
                    className: "sd-container " + nt.a.wrapper + " " + t
                }, o.a.createElement("div", {className: "sd-container-inner"}, o.a.createElement(Pe.a, {
                    heading: "In the Spotlight",
                    subheading: "Meet the humans who design Spotify",
                    buttonLabel: "View all in the spotlights",
                    buttonUrl: "/" + s.a.STORIES + "/inspiration/in-the-spotlight",
                    trackingLabel: "homepage"
                }, o.a.createElement("div", {ref: u}, o.a.createElement(f.a, We, n.map((function (e, t) {
                    return o.a.createElement("div", {key: t}, o.a.createElement(et, {author: e, type: t % 3}))
                })))), i && !l && o.a.createElement(ze, {boundingElement: u}))))
            };
        at.defaultProps = {className: ""};
        var rt = n("vGFT"), ot = n.n(rt), it = n("0QPY"), st = {
            heavyRotation: "highlighted-articles",
            newReleases: "new-releases",
            inTheSpotlight: "in-the-spotlight",
            toolsAndJobs: "tools-and-jobs"
        }, ct = (t.default = function (e) {
            var t, n = e.data, d = n.featuredTools, f = n.featuredJobs, v = n.featuredSpotlight, h = n.articlesLongForm,
                p = n.articlesThreeDesigners, m = n.articlesTool, g = n.allContentfulListenPlaylist, b = n.heroLongForm,
                y = n.heroThreeDesigners, w = n.heroTool,
                S = Object(i.e)([].concat(Object(a.a)(b.edges), Object(a.a)(y.edges), Object(a.a)(w.edges))),
                E = Object(i.b)(S), O = g.edges.map((function (e) {
                    return {node: Object(it.c)(e.node)}
                })),
                j = Object(i.e)([].concat(Object(a.a)(h.edges), Object(a.a)(p.edges), Object(a.a)(m.edges), Object(a.a)(O))),
                x = Object(i.a)(j), k = Object(i.c)(v.edges), T = Object(i.a)(d.edges),
                M = Object(r.useContext)(c.a).isLoading;
            return o.a.createElement(u.a, null, o.a.createElement(l.a, {title: "Home"}), o.a.createElement("h1", {className: "a11y-visually-hidden"}, "Spotify Design"), o.a.createElement("div", {className: ot.a.contentWrapper}, o.a.createElement("section", {
                id: st.heavyRotation,
                className: ot.a.sectionHeavyRotation
            }, o.a.createElement(Ce, {articles: E})), o.a.createElement("section", {
                id: st.newReleases,
                className: "sd-container " + ot.a.sectionNewReleases
            }, o.a.createElement("div", {className: "sd-container-inner"}, o.a.createElement(Pe.a, {
                buttonUrl: "/" + s.a.STORIES,
                heading: "New Releases",
                buttonLabel: "View all stories",
                trackingLabel: "homepage"
            }, o.a.createElement(De.a, {
                cards: x,
                count: 4,
                className: "sd-grid " + ot.a.latestList
            })))), !M && o.a.createElement(at, {
                className: ot.a.sectionSpotlight,
                authors: k
            }), !M && o.a.createElement(Re.a, null), o.a.createElement("section", {
                id: st.toolsAndJobs,
                className: "sd-container " + ot.a.sectionToolsAndJobs
            }, o.a.createElement("div", {className: "sd-container-inner sd-grid " + ot.a.sectionToolsAndJobsGrid}, o.a.createElement(Pe.a, {
                heading: "Tools",
                subheading: "Our day-to-day resources",
                buttonUrl: "/" + s.a.TOOLS,
                buttonLabel: "View all tools",
                trackingLabel: "homepage"
            }, o.a.createElement(De.a, {
                cards: T,
                count: 2,
                className: ot.a.toolsList
            })), o.a.createElement(Pe.a, {
                heading: "Jobs",
                subheading: "Open roles at Spotify Design",
                buttonLabel: "View Team",
                buttonUrl: "/" + s.a.TEAM,
                trackingLabel: "homepage"
            }, (null == f || null === (t = f.edges) || void 0 === t ? void 0 : t.length) > 0 && o.a.createElement("ul", {className: "unstyled-list " + ot.a.jobsList}, f.edges.map((function (e, t) {
                return o.a.createElement("li", {key: t}, o.a.createElement(_e.a, {
                    job: e.node,
                    trackingLabel: "homepage"
                }))
            }))))))))
        }, "3542530810")
    }, REpN: function (e, t, n) {
        (function (t) {
            var n = function (e) {
                return e && e.Math == Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
        }).call(this, n("yLpj"))
    }, STyW: function (e, t, n) {
        var a = n("IvzW"), r = n("JhOX"), o = n("C2zU");
        e.exports = !a && !r((function () {
            return 7 != Object.defineProperty(o("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }))
    }, SWhb: function (e, t, n) {
        var a = n("jdR/"), r = n("zpoX"), o = n("imag"), i = n("m/aQ");
        e.exports = a("Reflect", "ownKeys") || function (e) {
            var t = r.f(i(e)), n = o.f;
            return n ? t.concat(n(e)) : t
        }
    }, W5WM: function (e, t, n) {
        e.exports = {
            heavyRotation: "style-module--heavy-rotation--22rkz",
            reveal: "style-module--reveal--1AybC",
            wrapper: "style-module--wrapper--2J0bj",
            controls: "style-module--controls--2Lrlj",
            carousel: "style-module--carousel--lq44W",
            cards: "style-module--cards--KzQwf",
            slide: "style-module--slide--CysvJ",
            slideTags: "style-module--slide-tags--1zjJf",
            slideLink: "style-module--slide-link--3_iwe",
            shuffling: "style-module--shuffling--2F3Ea",
            bottomBar: "style-module--bottom-bar--_CEBo",
            timeline: "style-module--timeline--3KYQd",
            bar: "style-module--bar--1Ycmf",
            barInner: "style-module--bar-inner--3T-NS",
            barInnerAnimating: "style-module--bar-inner-animating--gDa3g",
            animateBar: "style-module--animateBar--2a1hB"
        }
    }, "WD+B": function (e, t, n) {
        var a = n("gQbX"), r = Math.min;
        e.exports = function (e) {
            return e > 0 ? r(a(e), 9007199254740991) : 0
        }
    }, ZRnM: function (e, t, n) {
        var a = n("JhOX"), r = /#|\.prototype\./, o = function (e, t) {
            var n = s[i(e)];
            return n == l || n != c && ("function" == typeof t ? a(t) : !!t)
        }, i = o.normalize = function (e) {
            return String(e).replace(r, ".").toLowerCase()
        }, s = o.data = {}, c = o.NATIVE = "N", l = o.POLYFILL = "P";
        e.exports = o
    }, ZS3K: function (e, t, n) {
        var a = n("REpN"), r = n("GoW4").f, o = n("Bgjm"), i = n("+7hJ"), s = n("i18P"), c = n("6cYJ"), l = n("ZRnM");
        e.exports = function (e, t) {
            var n, u, d, f, v, h = e.target, p = e.global, m = e.stat;
            if (n = p ? a : m ? a[h] || s(h, {}) : (a[h] || {}).prototype) for (u in t) {
                if (f = t[u], d = e.noTargetGet ? (v = r(n, u)) && v.value : n[u], !l(p ? u : h + (m ? "." : "#") + u, e.forced) && void 0 !== d) {
                    if (typeof f == typeof d) continue;
                    c(f, d)
                }
                (e.sham || d && d.sham) && o(f, "sham", !0), i(n, u, f, e)
            }
        }
    }, a0vn: function (e, t, n) {
        var a = n("8mzz"), r = n("4jnk");
        e.exports = function (e) {
            return a(r(e))
        }
    }, bmrq: function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    }, ckLD: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    }, gQbX: function (e, t) {
        var n = Math.ceil, a = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? a : n)(e)
        }
    }, goFL: function (e, t, n) {
        var a = n("REpN");
        e.exports = a
    }, i18P: function (e, t, n) {
        var a = n("REpN"), r = n("Bgjm");
        e.exports = function (e, t) {
            try {
                r(a, e, t)
            } catch (n) {
                a[e] = t
            }
            return t
        }
    }, ij4R: function (e, t, n) {
        var a = n("REpN"), r = n("i18P"), o = a["__core-js_shared__"] || r("__core-js_shared__", {});
        e.exports = o
    }, imag: function (e, t) {
        t.f = Object.getOwnPropertySymbols
    }, "jdR/": function (e, t, n) {
        var a = n("goFL"), r = n("REpN"), o = function (e) {
            return "function" == typeof e ? e : void 0
        };
        e.exports = function (e, t) {
            return arguments.length < 2 ? o(a[e]) || o(r[e]) : a[e] && a[e][t] || r[e] && r[e][t]
        }
    }, jekk: function (e, t, n) {
        var a = n("IvzW"), r = n("STyW"), o = n("m/aQ"), i = n("PK3T"), s = Object.defineProperty;
        t.f = a ? s : function (e, t, n) {
            if (o(e), t = i(t, !0), o(n), r) try {
                return s(e, t, n)
            } catch (a) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        }
    }, kVRO: function (e, t, n) {
        e.exports = {wrapper: "style-module--wrapper--8pdZ9"}
    }, kiPv: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return l
        }));
        var a = n("q1tI"), r = n.n(a), o = n("91rN"), i = n("yFJF"), s = n("0+5A"), c = n.n(s), l = function (e) {
            var t = e.job, n = e.trackingLabel;
            return t.url ? r.a.createElement("a", {
                href: t.url,
                rel: "noopener noreferrer",
                target: "_blank",
                className: c.a.jobListing,
                onClick: function () {
                    Object(o.a)(n, "click", t.location + " - " + t.title + " - " + t.url)
                }
            }, r.a.createElement("div", {className: c.a.header}, r.a.createElement("span", {className: "t-ui-4 " + c.a.location}, t.location), r.a.createElement("div", {className: c.a.arrow}, r.a.createElement(i.a, {rotation: -135}))), r.a.createElement("span", {className: "t-heading-2 " + c.a.heading}, t.title)) : null
        }
    }, krUJ: function (e, t, n) {
        var a = n("ij4R"), r = Function.toString;
        "function" != typeof a.inspectSource && (a.inspectSource = function (e) {
            return r.call(e)
        }), e.exports = a.inspectSource
    }, lSYd: function (e, t) {
        e.exports = !1
    }, "m/aQ": function (e, t, n) {
        var a = n("ckLD");
        e.exports = function (e) {
            if (!a(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    }, mbBF: function (e, t, n) {
        var a = n("ZS3K"), r = Math.hypot, o = Math.abs, i = Math.sqrt;
        a({target: "Math", stat: !0, forced: !!r && r(1 / 0, NaN) !== 1 / 0}, {
            hypot: function (e, t) {
                for (var n, a, r = 0, s = 0, c = arguments.length, l = 0; s < c;) l < (n = o(arguments[s++])) ? (r = r * (a = l / n) * a + 1, l = n) : r += n > 0 ? (a = n / l) * a : n;
                return l === 1 / 0 ? 1 / 0 : l * i(r)
            }
        })
    }, oLAf: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return s
        }));
        var a = n("q1tI"), r = n.n(a), o = n("feFQ"), i = n("wnC1");

        function s(e) {
            var t = e.cards, n = e.count, a = e.className, s = t && t.length ? t.slice(0, n) : [];
            return r.a.createElement("ul", {className: "unstyled-list " + a}, s.map((function (e, t) {
                return r.a.createElement("li", {key: t}, "playlist" in e ? r.a.createElement(i.a, e) : r.a.createElement(o.a, e))
            })))
        }

        s.defaultProps = {count: 4, className: ""}
    }, s24u: function (e, t, n) {
        e.exports = {
            wrapper: "style-module--wrapper--1y2Me",
            heading: "style-module--heading--3X9DS",
            subhead: "style-module--subhead--3ugYw",
            listWrapper: "style-module--list-wrapper--6Wjj1",
            link: "style-module--link--M2A5D"
        }
    }, uFM1: function (e, t, n) {
        var a = n("8deY"), r = n("F8ZZ"), o = a("keys");
        e.exports = function (e) {
            return o[e] || (o[e] = r(e))
        }
    }, vGFT: function (e, t, n) {
        e.exports = {
            contentWrapper: "index-module--content-wrapper--8oYor",
            fade: "index-module--fade--1bV5K",
            sectionHeavyRotation: "index-module--section-heavy-rotation--1aVIw",
            sectionSpotlight: "index-module--section-spotlight--2jD_f",
            sectionNewReleases: "index-module--section-new-releases--1QRhQ",
            sectionToolsAndJobs: "index-module--section-tools-and-jobs--OWZ0n",
            latestList: "index-module--latest-list--31IwL",
            sectionToolsAndJobsGrid: "index-module--section-tools-and-jobs-grid--2DVR-",
            toolsList: "index-module--tools-list--2R4x_",
            jobsList: "index-module--jobs-list--3-tWn"
        }
    }, zpoX: function (e, t, n) {
        var a = n("QU3x"), r = n("FlY1").concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return a(e, r)
        }
    }
}]);
//# sourceMappingURL=component---src-pages-index-tsx-99b1e451aec2aa1c3704.js.map