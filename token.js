function a(e, t) {
    var n = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}
function i(e, t, n, r, i, o) {
    return a((l = a(a(t, e), a(r, o))) << (s = i) | l >>> 32 - s, n);
    var l, s
}
function o(e, t, n, r, a, o, l) {
    return i(t & n | ~t & r, e, t, a, o, l)
}
function l(e, t, n, r, a, o, l) {
    return i(t & r | n & ~r, e, t, a, o, l)
}
function s(e, t, n, r, a, o, l) {
    return i(t ^ n ^ r, e, t, a, o, l)
}
function u(e, t, n, r, a, o, l) {
    return i(n ^ (t | ~r), e, t, a, o, l)
}
function c(e, t) {
    var n, r, i, c, f;
    e[t >> 5] |= 128 << t % 32,
    e[14 + (t + 64 >>> 9 << 4)] = t;
    var d = 1732584193
      , p = -271733879
      , h = -1732584194
      , m = 271733878;
    for (n = 0; n < e.length; n += 16)
        d = o(r = d, i = p, c = h, f = m, e[n], 7, -680876936),
        m = o(m, d, p, h, e[n + 1], 12, -389564586),
        h = o(h, m, d, p, e[n + 2], 17, 606105819),
        p = o(p, h, m, d, e[n + 3], 22, -1044525330),
        d = o(d, p, h, m, e[n + 4], 7, -176418897),
        m = o(m, d, p, h, e[n + 5], 12, 1200080426),
        h = o(h, m, d, p, e[n + 6], 17, -1473231341),
        p = o(p, h, m, d, e[n + 7], 22, -45705983),
        d = o(d, p, h, m, e[n + 8], 7, 1770035416),
        m = o(m, d, p, h, e[n + 9], 12, -1958414417),
        h = o(h, m, d, p, e[n + 10], 17, -42063),
        p = o(p, h, m, d, e[n + 11], 22, -1990404162),
        d = o(d, p, h, m, e[n + 12], 7, 1804603682),
        m = o(m, d, p, h, e[n + 13], 12, -40341101),
        h = o(h, m, d, p, e[n + 14], 17, -1502002290),
        d = l(d, p = o(p, h, m, d, e[n + 15], 22, 1236535329), h, m, e[n + 1], 5, -165796510),
        m = l(m, d, p, h, e[n + 6], 9, -1069501632),
        h = l(h, m, d, p, e[n + 11], 14, 643717713),
        p = l(p, h, m, d, e[n], 20, -373897302),
        d = l(d, p, h, m, e[n + 5], 5, -701558691),
        m = l(m, d, p, h, e[n + 10], 9, 38016083),
        h = l(h, m, d, p, e[n + 15], 14, -660478335),
        p = l(p, h, m, d, e[n + 4], 20, -405537848),
        d = l(d, p, h, m, e[n + 9], 5, 568446438),
        m = l(m, d, p, h, e[n + 14], 9, -1019803690),
        h = l(h, m, d, p, e[n + 3], 14, -187363961),
        p = l(p, h, m, d, e[n + 8], 20, 1163531501),
        d = l(d, p, h, m, e[n + 13], 5, -1444681467),
        m = l(m, d, p, h, e[n + 2], 9, -51403784),
        h = l(h, m, d, p, e[n + 7], 14, 1735328473),
        d = s(d, p = l(p, h, m, d, e[n + 12], 20, -1926607734), h, m, e[n + 5], 4, -378558),
        m = s(m, d, p, h, e[n + 8], 11, -2022574463),
        h = s(h, m, d, p, e[n + 11], 16, 1839030562),
        p = s(p, h, m, d, e[n + 14], 23, -35309556),
        d = s(d, p, h, m, e[n + 1], 4, -1530992060),
        m = s(m, d, p, h, e[n + 4], 11, 1272893353),
        h = s(h, m, d, p, e[n + 7], 16, -155497632),
        p = s(p, h, m, d, e[n + 10], 23, -1094730640),
        d = s(d, p, h, m, e[n + 13], 4, 681279174),
        m = s(m, d, p, h, e[n], 11, -358537222),
        h = s(h, m, d, p, e[n + 3], 16, -722521979),
        p = s(p, h, m, d, e[n + 6], 23, 76029189),
        d = s(d, p, h, m, e[n + 9], 4, -640364487),
        m = s(m, d, p, h, e[n + 12], 11, -421815835),
        h = s(h, m, d, p, e[n + 15], 16, 530742520),
        d = u(d, p = s(p, h, m, d, e[n + 2], 23, -995338651), h, m, e[n], 6, -198630844),
        m = u(m, d, p, h, e[n + 7], 10, 1126891415),
        h = u(h, m, d, p, e[n + 14], 15, -1416354905),
        p = u(p, h, m, d, e[n + 5], 21, -57434055),
        d = u(d, p, h, m, e[n + 12], 6, 1700485571),
        m = u(m, d, p, h, e[n + 3], 10, -1894986606),
        h = u(h, m, d, p, e[n + 10], 15, -1051523),
        p = u(p, h, m, d, e[n + 1], 21, -2054922799),
        d = u(d, p, h, m, e[n + 8], 6, 1873313359),
        m = u(m, d, p, h, e[n + 15], 10, -30611744),
        h = u(h, m, d, p, e[n + 6], 15, -1560198380),
        p = u(p, h, m, d, e[n + 13], 21, 1309151649),
        d = u(d, p, h, m, e[n + 4], 6, -145523070),
        m = u(m, d, p, h, e[n + 11], 10, -1120210379),
        h = u(h, m, d, p, e[n + 2], 15, 718787259),
        p = u(p, h, m, d, e[n + 9], 21, -343485551),
        d = a(d, r),
        p = a(p, i),
        h = a(h, c),
        m = a(m, f);
    return [d, p, h, m]
}
function f(e) {
    var t, n = "", r = 32 * e.length;
    for (t = 0; t < r; t += 8)
        n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
    return n
}
function d(e) {
    var t, n = [];
    for (n[(e.length >> 2) - 1] = void 0,
    t = 0; t < n.length; t += 1)
        n[t] = 0;
    var r = 8 * e.length;
    for (t = 0; t < r; t += 8)
        n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
    return n
}
function p(e) {
    var t, n, r = "0123456789abcdef", a = "";
    for (n = 0; n < e.length; n += 1)
        t = e.charCodeAt(n),
        a += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
    return a
}
function h(e) {
    return unescape(encodeURIComponent(e))
}
function m(e) {
    return f(c(d(t = h(e)), 8 * t.length));
    var t
}
function y(e, t) {
    return function(e, t) {
        var n, r, a = d(e), i = [], o = [];
        for (i[15] = o[15] = void 0,
        16 < a.length && (a = c(a, 8 * e.length)),
        n = 0; n < 16; n += 1)
            i[n] = 909522486 ^ a[n],
            o[n] = 1549556828 ^ a[n];
        return r = c(i.concat(d(t)), 512 + 8 * t.length),
        f(c(o.concat(r), 640))
    }(h(e), h(t))
}
function v(e, t, n) {
    return t ? n ? y(t, e) : p(y(t, e)) : n ? m(e) : p(m(e))
}
