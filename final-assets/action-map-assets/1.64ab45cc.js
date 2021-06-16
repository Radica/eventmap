(window.__LOADABLE_LOADED_CHUNKS__ =
    window.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [1],
    {
        YQM9: function (e, t, n) {
            e.exports = {
                PopupCloseButton: '_2SeUP',
                ButtonLeg: '_3tyEj',
                ButtonLegLeft: '_1taAB',
                ButtonLegRight: '-JYDi',
            };
        },
        cEZA: function (e, t, n) {
            e.exports = { MapView: '_1fEyT' };
        },
        elDt: function (e, t, n) {
            'use strict';
            n.r(t);
            n('pNMO'),
                n('4Brf'),
                n('0oug'),
                n('ma9I'),
                n('pjDv'),
                n('4mDm'),
                n('E9XD'),
                n('+2oP'),
                n('sMBO'),
                n('NBAS'),
                n('ExoC'),
                n('07d7'),
                n('B6y2'),
                n('SuFq'),
                n('rB9j'),
                n('JfAA'),
                n('PKPk'),
                n('hByQ'),
                n('3bBZ');
            var o = n('q1tI'),
                r = n.n(o),
                a = n('/MKj'),
                i =
                    (n('TeQF'),
                    n('yq1k'),
                    n('2B1R'),
                    n('Rfxz'),
                    n('JTJg'),
                    n('ul2v')),
                c = n('maJy'),
                u = n('XUWG'),
                l = n.n(u),
                s = function (e) {
                    var t = e.sourceParam,
                        n = e.bundledEvents;
                    return r.a.createElement(
                        'div',
                        { className: 'event-bundled-cont' },
                        r.a.createElement(
                            'div',
                            { className: l.a.EventBundledItems },
                            n.map(function (e) {
                                return r.a.createElement(c.a, {
                                    key: e.id,
                                    event: e,
                                    sourceParam: t,
                                    bundled: !0,
                                });
                            })
                        )
                    );
                },
                f = n('YQM9'),
                p = n.n(f),
                d = function (e) {
                    var t = e.handleClosePopup;
                    return r.a.createElement(
                        'button',
                        {
                            type: 'button',
                            className: p.a.PopupCloseButton,
                            onClick: t,
                        },
                        r.a.createElement('b', {
                            className: ''
                                .concat(p.a.ButtonLeg, ' ')
                                .concat(p.a.ButtonLegLeft),
                        }),
                        r.a.createElement('b', {
                            className: ''
                                .concat(p.a.ButtonLeg, ' ')
                                .concat(p.a.ButtonLegRight),
                        })
                    );
                },
                y = n('hS9+'),
                h = n.n(y),
                m = function (e) {
                    var t = e.sourceParam,
                        n = e.bundledEvents,
                        o = e.handleClosePopup;
                    return r.a.createElement(
                        'div',
                        { className: h.a.PopupItem },
                        r.a.createElement(d, { handleClosePopup: o }),
                        r.a.createElement(s, {
                            bundledEvents: n,
                            sourceParam: t,
                        })
                    );
                },
                b = n('cEZA'),
                v = n.n(b);
            function g(e) {
                return (g =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function E(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function P(e, t) {
                return (P =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function k(e, t) {
                return !t || ('object' !== g(t) && 'function' != typeof t)
                    ? C(e)
                    : t;
            }
            function C(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function _() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                        ),
                        !0
                    );
                } catch (e) {
                    return !1;
                }
            }
            function w(e) {
                return (w = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var S = Object(i.e)({
                    accessToken: '',
                    attributionControl: !1,
                    minZoom: 2,
                    maxZoom: 8,
                    scrollZoom: !1,
                }),
                O = (function (e) {
                    !(function (e, t) {
                        if ('function' != typeof t && null !== t)
                            throw new TypeError(
                                'Super expression must either be null or a function'
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0,
                            },
                        })),
                            t && P(e, t);
                    })(u, e);
                    var t,
                        n,
                        o,
                        a,
                        c =
                            ((t = u),
                            function () {
                                var e,
                                    n = w(t);
                                if (_()) {
                                    var o = w(this).constructor;
                                    e = Reflect.construct(n, arguments, o);
                                } else e = n.apply(this, arguments);
                                return k(this, e);
                            });
                    function u(e) {
                        var t;
                        return (
                            (function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError(
                                        'Cannot call a class as a function'
                                    );
                            })(this, u),
                            ((t = c.call(
                                this,
                                e
                            )).handleStyleLoad = t.handleStyleLoad.bind(C(t))),
                            t
                        );
                    }
                    return (
                        (n = u),
                        (o = [
                            {
                                key: 'handleStyleLoad',
                                value: function (e) {
                                    var t = this;
                                    (this.map = e),
                                        e.on('moveend', function (n) {
                                            (0,
                                            t.props
                                                .handleMapChange)(e.getBounds(), e.getCenter(), e.getZoom());
                                        });
                                    var n = this.props,
                                        o = n.handleMapLoad,
                                        r = n.center,
                                        a = n.initialBounds;
                                    o(e),
                                        r &&
                                            (e.setCenter({
                                                lng: r[0],
                                                lat: r[1],
                                            }),
                                            e.setZoom(7)),
                                        a && e.fitBounds(a, { animate: !1 });
                                },
                            },
                            {
                                key: 'renderPopup',
                                value: function () {
                                    var e = this.props,
                                        t = e.activeFilters,
                                        n = e.clickedItem,
                                        o = e.handleClosePopup,
                                        a = e.sourceParam,
                                        c = n.filter(function (e) {
                                            return t.includes(e.contentType);
                                        });
                                    return 0 === c.length
                                        ? (o(), null)
                                        : r.a.createElement(
                                              i.c,
                                              {
                                                  coordinates: [
                                                      n[0].longitude,
                                                      n[0].latitude,
                                                  ],
                                              },
                                              r.a.createElement(m, {
                                                  bundledEvents: c,
                                                  handleClosePopup: o,
                                                  sourceParam: a,
                                              })
                                          );
                                },
                            },
                            {
                                key: 'render',
                                value: function () {
                                    var e = this,
                                        t = this.props,
                                        n = t.activeFilters,
                                        o = t.zoom,
                                        a = t.center,
                                        c = t.eventsData,
                                        u = t.handleFeatureClick,
                                        l = t.clickedItem;
                                    return r.a.createElement(
                                        'div',
                                        { className: v.a.MapView },
                                        r.a.createElement(
                                            S,
                                            {
                                                ref: function (t) {
                                                    e.map = t;
                                                },
                                                onStyleLoad: this
                                                    .handleStyleLoad,
                                                style:
                                                    'mapbox://styles/nbwc/ckea9eh7502le19nx273a08h1',
                                                className: 'map-view-container',
                                                zoom: o,
                                                interactive: !0,
                                                center: a,
                                                movingMethod: 'easeTo',
                                                containerStyle: {
                                                    height: '100%',
                                                    width: '100%',
                                                },
                                            },
                                            r.a.createElement(i.d, {
                                                position: 'top-right',
                                            }),
                                            n.includes('action') &&
                                                r.a.createElement(
                                                    i.b,
                                                    {
                                                        id: 'action',
                                                        type: 'circle',
                                                        layout: {
                                                            visibility:
                                                                'visible',
                                                        },
                                                        paint: {
                                                            'circle-radius': 5,
                                                            'circle-color':
                                                                '#fc0',
                                                            'circle-stroke-width': 2,
                                                            'circle-stroke-color':
                                                                'white',
                                                        },
                                                    },
                                                    c
                                                        .filter(function (e) {
                                                            return e.some(
                                                                function (e) {
                                                                    return (
                                                                        'action' ===
                                                                        e.contentType
                                                                    );
                                                                }
                                                            );
                                                        })
                                                        .map(function (e) {
                                                            return r.a.createElement(
                                                                i.a,
                                                                {
                                                                    key:
                                                                        e[0].id,
                                                                    coordinates: [
                                                                        e[0]
                                                                            .longitude,
                                                                        e[0]
                                                                            .latitude,
                                                                    ],
                                                                    onClick: function (
                                                                        t
                                                                    ) {
                                                                        u(e);
                                                                    },
                                                                }
                                                            );
                                                        })
                                                ),
                                            n.includes('organization') &&
                                                r.a.createElement(
                                                    i.b,
                                                    {
                                                        id: 'organization',
                                                        type: 'circle',
                                                        layout: {
                                                            visibility:
                                                                'visible',
                                                        },
                                                        paint: {
                                                            'circle-radius': 5,
                                                            'circle-color':
                                                                '#396',
                                                            'circle-stroke-width': 2,
                                                            'circle-stroke-color':
                                                                'white',
                                                        },
                                                    },
                                                    c
                                                        .filter(function (e) {
                                                            return e.some(
                                                                function (e) {
                                                                    return (
                                                                        'organization' ===
                                                                        e.contentType
                                                                    );
                                                                }
                                                            );
                                                        })
                                                        .map(function (e) {
                                                            return r.a.createElement(
                                                                i.a,
                                                                {
                                                                    key:
                                                                        e[0].id,
                                                                    coordinates: [
                                                                        e[0]
                                                                            .longitude,
                                                                        e[0]
                                                                            .latitude,
                                                                    ],
                                                                    onClick: function (
                                                                        t
                                                                    ) {
                                                                        u(e);
                                                                    },
                                                                }
                                                            );
                                                        })
                                                ),
                                            l && this.renderPopup()
                                        )
                                    );
                                },
                            },
                        ]) && E(n.prototype, o),
                        a && E(n, a),
                        u
                    );
                })(r.a.Component),
                M = n('NKTA');
            function B(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return j(e);
                    })(e) ||
                    (function (e) {
                        if (
                            'undefined' != typeof Symbol &&
                            Symbol.iterator in Object(e)
                        )
                            return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (!e) return;
                        if ('string' == typeof e) return j(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n &&
                            e.constructor &&
                            (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n) return Array.from(n);
                        if (
                            'Arguments' === n ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        )
                            return j(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError(
                            'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        );
                    })()
                );
            }
            function j(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                return o;
            }
            function L(e) {
                return (L =
                    'function' == typeof Symbol &&
                    'symbol' == typeof Symbol.iterator
                        ? function (e) {
                              return typeof e;
                          }
                        : function (e) {
                              return e &&
                                  'function' == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? 'symbol'
                                  : typeof e;
                          })(e);
            }
            function D(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1),
                        (o.configurable = !0),
                        'value' in o && (o.writable = !0),
                        Object.defineProperty(e, o.key, o);
                }
            }
            function A(e, t) {
                return (A =
                    Object.setPrototypeOf ||
                    function (e, t) {
                        return (e.__proto__ = t), e;
                    })(e, t);
            }
            function I(e, t) {
                return !t || ('object' !== L(t) && 'function' != typeof t)
                    ? N(e)
                    : t;
            }
            function N(e) {
                if (void 0 === e)
                    throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                    );
                return e;
            }
            function T() {
                if ('undefined' == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham) return !1;
                if ('function' == typeof Proxy) return !0;
                try {
                    return (
                        Date.prototype.toString.call(
                            Reflect.construct(Date, [], function () {})
                        ),
                        !0
                    );
                } catch (e) {
                    return !1;
                }
            }
            function R(e) {
                return (R = Object.setPrototypeOf
                    ? Object.getPrototypeOf
                    : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                      })(e);
            }
            var F = (function (e) {
                !(function (e, t) {
                    if ('function' != typeof t && null !== t)
                        throw new TypeError(
                            'Super expression must either be null or a function'
                        );
                    (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        t && A(e, t);
                })(c, e);
                var t,
                    n,
                    o,
                    a,
                    i =
                        ((t = c),
                        function () {
                            var e,
                                n = R(t);
                            if (T()) {
                                var o = R(this).constructor;
                                e = Reflect.construct(n, arguments, o);
                            } else e = n.apply(this, arguments);
                            return I(this, e);
                        });
                function c(e) {
                    var t;
                    return (
                        (function (e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    'Cannot call a class as a function'
                                );
                        })(this, c),
                        ((t = i.call(this, e)).state = { clickedItem: null }),
                        (t.handleFeatureClick = t.handleFeatureClick.bind(
                            N(t)
                        )),
                        (t.handleClosePopup = t.handleClosePopup.bind(N(t))),
                        (t.handleMapChange = t.handleMapChange.bind(N(t))),
                        (t.handleMapLoad = t.handleMapLoad.bind(N(t))),
                        t
                    );
                }
                return (
                    (n = c),
                    (o = [
                        {
                            key: 'handleFeatureClick',
                            value: function (e) {
                                this.setState({ clickedItem: e });
                            },
                        },
                        {
                            key: 'handleClosePopup',
                            value: function () {
                                this.setState({ clickedItem: null });
                            },
                        },
                        {
                            key: 'handleMapChange',
                            value: function (e, t, n) {
                                (0, this.props.updateMap)(
                                    {
                                        northeast: e.getNorthEast(),
                                        southwest: e.getSouthWest(),
                                    },
                                    [t.lng, t.lat],
                                    [n]
                                );
                            },
                        },
                        {
                            key: 'handleMapLoad',
                            value: function (e) {
                                (0, this.props.setMap)(e);
                            },
                        },
                        {
                            key: 'render',
                            value: function () {
                                var e = this.props,
                                    t = e.activeFilters,
                                    n = e.meetData,
                                    o = e.eventsData,
                                    a = e.center,
                                    i = e.zoom,
                                    c = e.history,
                                    u = e.sourceParam,
                                    l = this.state.clickedItem;
                                return r.a.createElement(O, {
                                    activeFilters: t,
                                    meetData: n,
                                    handleFeatureClick: this.handleFeatureClick,
                                    clickedItem: l,
                                    handleClosePopup: this.handleClosePopup,
                                    eventsData: o,
                                    center: a || [
                                        -96.32655181745479,
                                        38.80834427056388,
                                    ],
                                    zoom: i || [3.9564829608493017],
                                    initialBounds: [
                                        [
                                            -65.27952974884487,
                                            54.281353451957585,
                                        ],
                                        [
                                            -127.3735738860654,
                                            19.084515887021055,
                                        ],
                                    ],
                                    handleMapChange: this.handleMapChange,
                                    handleMapLoad: this.handleMapLoad,
                                    history: c,
                                    sourceParam: u,
                                });
                            },
                        },
                    ]) && D(n.prototype, o),
                    a && D(n, a),
                    c
                );
            })(r.a.Component);
            t.default = Object(a.c)(
                function (e) {
                    var t = e.home,
                        n = e.search;
                    return {
                        eventsData: Object.values(
                            t.eventsData
                                .sort(function (e, t) {
                                    return (
                                        new Date(t.modifiedAt) -
                                        new Date(e.modifiedAt)
                                    );
                                })
                                .reduce(function (e, t) {
                                    var n = ''
                                        .concat(t.longitude, ',')
                                        .concat(t.latitude);
                                    return (
                                        e && !e[n]
                                            ? (e[n] = [t])
                                            : (e[n] = [].concat(B(e[n]), [t])),
                                        e
                                    );
                                }, {})
                        ),
                        activeFilters: n.activeFilters,
                        center: n.center,
                        bounds: n.bounds,
                        zoom: n.zoom,
                        sourceParam: n.sourceParam,
                    };
                },
                function (e) {
                    return {
                        updateMap: function (t, n, o) {
                            e(M.a.updateMap(t, n, o));
                        },
                        setMap: function (t) {
                            e(M.a.setMap(t));
                        },
                    };
                }
            )(F);
        },
        'hS9+': function (e, t, n) {
            e.exports = {
                PopupItem: '_15QYB',
                'header-area': '_2S1OC',
                'content-area': '_32X6a',
                'sponsor-area': '_1yYyL',
                rsvp: '_1e_56',
            };
        },
    },
]);

