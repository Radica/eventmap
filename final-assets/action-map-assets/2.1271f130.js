(window.__LOADABLE_LOADED_CHUNKS__ =
    window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [2],
    {
        XTp6: function (e, t, n) {
            'use strict';
            n.r(t);
            n('pNMO'),
                n('4Brf'),
                n('0oug'),
                n('ma9I'),
                n('pjDv'),
                n('yq1k'),
                n('4mDm'),
                n('2B1R'),
                n('+2oP'),
                n('sMBO'),
                n('07d7'),
                n('JfAA'),
                n('JTJg'),
                n('PKPk'),
                n('3bBZ');
            var r = n('q1tI'),
                a = n.n(r),
                o = n('4ZJM'),
                c = n.n(o),
                l = n('iFvi'),
                i = n.n(l),
                u = (n('wweU'), n('WBc4')),
                s = n.n(u);
            function f(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if (
                            'undefined' == typeof Symbol ||
                            !(Symbol.iterator in Object(e))
                        )
                            return;
                        var n = [],
                            r = !0,
                            a = !1,
                            o = void 0;
                        try {
                            for (
                                var c, l = e[Symbol.iterator]();
                                !(r = (c = l.next()).done) &&
                                (n.push(c.value), !t || n.length !== t);
                                r = !0
                            );
                        } catch (e) {
                            (a = !0), (o = e);
                        } finally {
                            try {
                                r || null == l.return || l.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        return n;
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return m(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(n);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return m(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function m(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r;
            }
            t.default = function (e) {
                var t = e.activeFilters,
                    n = e.eventTypes,
                    o = e.handleFilterChange,
                    l = e.handleSearch,
                    u = e.map,
                    m = e.searchQuery,
                    d = e.shouldQuery,
                    y = f(
                        Object(r.useState)(
                            new i.a({
                                accessToken: '',
                                countries: 'us',
                                enableEventLogging: !1,
                                marker: { anchor: 'bottom', color: 'orange' },
                                mapboxgl: c.a,
                                placeholder: 'City, State, and/or Zip Code',
                                zoom: 9,
                            })
                        ),
                        1
                    )[0],
                    p = f(Object(r.useState)(null), 2),
                    h = p[0],
                    b = p[1],
                    E = Object(r.useCallback)(
                        function (e) {
                            u &&
                                e &&
                                h &&
                                (h.classList.add(s.a.SearchText),
                                e.appendChild(h));
                        },
                        [u, h]
                    );
                return (
                    Object(r.useEffect)(
                        function () {
                            u && y && b(y.onAdd(u));
                        },
                        [u, y]
                    ),
                    Object(r.useLayoutEffect)(
                        function () {
                            u &&
                                null == m &&
                                u.fitBounds([
                                    [-65.27952974884487, 54.281353451957585],
                                    [-127.3735738860654, 19.084515887021055],
                                ]),
                                h && d && (m ? y.query(m) : y.clear());
                        },
                        [u, y, h, m, d]
                    ),
                    Object(r.useLayoutEffect)(
                        function () {
                            function e(e) {
                                var t = e.result.id;
                                l(t), h.querySelector('input').blur();
                            }
                            return (
                                y.on('result', e),
                                function () {
                                    return y.off('result', e);
                                }
                            );
                        },
                        [y, h, l]
                    ),
                    Object(r.useLayoutEffect)(
                        function () {
                            function e() {
                                l(null);
                            }
                            return (
                                u && y && y.on('clear', e),
                                function () {
                                    u && y && y.off('clear', e);
                                }
                            );
                        },
                        [y, u, l]
                    ),
                    a.a.createElement(
                        'div',
                        { className: s.a.SearchContainer },
                        a.a.createElement(
                            'div',
                            { className: s.a.SearchViewport },
                            a.a.createElement('div', {
                                className: s.a.SearchForm,
                                ref: E,
                            })
                        ),
                        a.a.createElement(
                            'form',
                            {
                                className: s.a.FilterForm,
                                style: {
                                    display: n.length > 0 ? 'block' : 'none',
                                },
                            },
                            a.a.createElement(
                                'ul',
                                null,
                                n.map(function (e) {
                                    return a.a.createElement(
                                        'li',
                                        { key: e },
                                        a.a.createElement('input', {
                                            type: 'checkbox',
                                            name: 'f[]',
                                            value: e,
                                            id: e,
                                            onChange: o,
                                            checked:
                                                !(!e || !t.includes(e)) &&
                                                'checked',
                                        }),
                                        a.a.createElement(
                                            'label',
                                            { htmlFor: e },
                                            a.a.createElement('span', {
                                                className: ''
                                                    .concat(
                                                        s.a.EventFilterIcon,
                                                        ' '
                                                    )
                                                    .concat(
                                                        'action' === e
                                                            ? s.a
                                                                  .EventFilterIconAction
                                                            : '',
                                                        ' '
                                                    )
                                                    .concat(
                                                        'organization' === e
                                                            ? s.a
                                                                  .EventFilterIconOrganization
                                                            : ''
                                                    ),
                                            }),
                                            a.a.createElement('span', null, e)
                                        )
                                    );
                                })
                            )
                        )
                    )
                );
            };
        },
    },
]);

