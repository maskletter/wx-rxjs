/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/**
  @license
  Apache License 2.0 https://github.com/ReactiveX/RxJS/blob/master/LICENSE.txt
 **/
/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
*****************************************************************************/
(function (k, h) { "object" === typeof exports && "undefined" !== typeof module ? h(exports) : "function" === typeof define && define.amd ? define("rxjs", ["exports"], h) : h(k.rxjs = {}) })(this, function (k) {
  function h(c, a) { function b() { this.constructor = c } Kb(c, a); c.prototype = null === a ? Object.create(a) : (b.prototype = a.prototype, new b) } function P(c) { return "function" === typeof c } function Q(c) { setTimeout(function () { throw c; }, 0) } function ra(c) { return null !== c && "object" === typeof c } function Ka(c) {
    return c.reduce(function (a, b) {
      return a.concat(b instanceof
        Y ? b.errors : b)
    }, [])
  } function sa(c) { for (; c;) { var a = c.destination, b = c.isStopped; if (c.closed || b) return !1; c = a && a instanceof m ? a : null } return !0 } function D() { } function ta() { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; return La(c) } function La(c) { return c ? 1 === c.length ? c[0] : function (a) { return c.reduce(function (b, a) { return a(b) }, a) } : D } function Ma(c) { c || (c = C.Promise || Promise); if (!c) throw Error("no Promise impl found"); return c } function ua() { return function (c) { return c.lift(new Lb(c)) } } function R(c) {
    return c ?
      Mb(c) : S
  } function Mb(c) { return new n(function (a) { return c.schedule(function () { return a.complete() }) }) } function A(c) { return c && "function" === typeof c.schedule } function va(c, a) { return new n(function (b) { var d = new t, e = 0; d.add(a.schedule(function () { e === c.length ? b.complete() : (b.next(c[e++]), b.closed || d.add(this.schedule())) })); return d }) } function Z(c, a) { return a ? va(c, a) : new n(Na(c)) } function ga() { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; a = c[c.length - 1]; return A(a) ? (c.pop(), va(c, a)) : Z(c) }
  function wa(c, a) { return a ? new n(function (b) { return a.schedule(Nb, 0, { error: c, subscriber: b }) }) : new n(function (b) { return b.error(c) }) } function Nb(c) { c.subscriber.error(c.error) } function Oa(c) { return c in xa ? (delete xa[c], !0) : !1 } function J(c) { return c } function B(c, a) { return function (b) { if ("function" !== typeof c) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?"); return b.lift(new Ob(c, a)) } } function Pa(c, a, b) {
    if (a) if (A(a)) b = a; else return function () {
      for (var d = [], e = 0; e < arguments.length; e++)d[e] =
        arguments[e]; return Pa(c, b).apply(void 0, d).pipe(B(function (b) { return x(b) ? a.apply(void 0, b) : a(b) }))
    }; return function () {
      for (var a = [], e = 0; e < arguments.length; e++)a[e] = arguments[e]; var f = this, g, l = { context: f, subject: g, callbackFunc: c, scheduler: b }; return new n(function (d) {
        if (b) return b.schedule(Pb, 0, { args: a, subscriber: d, params: l }); if (!g) {
          g = new T; try { c.apply(f, a.concat([function () { for (var b = [], a = 0; a < arguments.length; a++)b[a] = arguments[a]; g.next(1 >= b.length ? b[0] : b); g.complete() }])) } catch (K) {
            sa(g) ? g.error(K) :
            console.warn(K)
          }
        } return g.subscribe(d)
      })
    }
  } function Pb(c) { var a = this, b = c.args, d = c.subscriber; c = c.params; var e = c.callbackFunc, f = c.context, g = c.scheduler, l = c.subject; if (!l) { l = c.subject = new T; try { e.apply(f, b.concat([function () { for (var b = [], c = 0; c < arguments.length; c++)b[c] = arguments[c]; a.add(g.schedule(Qb, 0, { value: 1 >= b.length ? b[0] : b, subject: l })) }])) } catch (u) { l.error(u) } } this.add(l.subscribe(d)) } function Qb(c) { var a = c.subject; a.next(c.value); a.complete() } function Qa(c, a, b) {
    if (a) if (A(a)) b = a; else return function () {
      for (var d =
        [], e = 0; e < arguments.length; e++)d[e] = arguments[e]; return Qa(c, b).apply(void 0, d).pipe(B(function (b) { return x(b) ? a.apply(void 0, b) : a(b) }))
    }; return function () {
      for (var a = [], e = 0; e < arguments.length; e++)a[e] = arguments[e]; var f = { subject: void 0, args: a, callbackFunc: c, scheduler: b, context: this }; return new n(function (d) {
        var e = f.context, g = f.subject; if (b) return b.schedule(Rb, 0, { params: f, subscriber: d, context: e }); if (!g) {
          g = f.subject = new T; try {
            c.apply(e, a.concat([function () {
              for (var b = [], a = 0; a < arguments.length; a++)b[a] =
                arguments[a]; (a = b.shift()) ? g.error(a) : (g.next(1 >= b.length ? b[0] : b), g.complete())
            }]))
          } catch (K) { sa(g) ? g.error(K) : console.warn(K) }
        } return g.subscribe(d)
      })
    }
  } function Rb(c) {
    var a = this, b = c.params, d = c.subscriber; c = c.context; var e = b.callbackFunc, f = b.args, g = b.scheduler, l = b.subject; if (!l) {
      l = b.subject = new T; try { e.apply(c, f.concat([function () { for (var b = [], c = 0; c < arguments.length; c++)b[c] = arguments[c]; (c = b.shift()) ? a.add(g.schedule(Ra, 0, { err: c, subject: l })) : a.add(g.schedule(Sb, 0, { value: 1 >= b.length ? b[0] : b, subject: l })) }])) } catch (u) {
        this.add(g.schedule(Ra,
          0, { err: u, subject: l }))
      }
    } this.add(l.subscribe(d))
  } function Sb(c) { var a = c.subject; a.next(c.value); a.complete() } function Ra(c) { c.subject.error(c.err) } function Sa(c) { return !!c && "function" !== typeof c.subscribe && "function" === typeof c.then } function p(c, a, b, d, e) { void 0 === e && (e = new G(c, b, d)); if (!e.closed) return a instanceof n ? a.subscribe(e) : ha(a)(e) } function Tb(c, a) {
    return new n(function (b) {
      var d = new t; d.add(a.schedule(function () {
        var e = c[U](); d.add(e.subscribe({
          next: function (c) { d.add(a.schedule(function () { return b.next(c) })) },
          error: function (c) { d.add(a.schedule(function () { return b.error(c) })) }, complete: function () { d.add(a.schedule(function () { return b.complete() })) }
        }))
      })); return d
    })
  } function Ub(c, a) { return new n(function (b) { var d = new t; d.add(a.schedule(function () { return c.then(function (c) { d.add(a.schedule(function () { b.next(c); d.add(a.schedule(function () { return b.complete() })) })) }, function (c) { d.add(a.schedule(function () { return b.error(c) })) }) })); return d }) } function Vb(c, a) {
    if (!c) throw Error("Iterable cannot be null"); return new n(function (b) {
      var d =
        new t, e; d.add(function () { e && "function" === typeof e.return && e.return() }); d.add(a.schedule(function () { e = c[E](); d.add(a.schedule(function () { if (!b.closed) { var a, c; try { var d = e.next(); a = d.value; c = d.done } catch (u) { b.error(u); return } c ? b.complete() : (b.next(a), this.schedule()) } })) })); return d
    })
  } function Ta(c, a) {
    if (null != c) { if (c && "function" === typeof c[U]) return Tb(c, a); if (Sa(c)) return Ub(c, a); if (Ua(c)) return va(c, a); if (c && "function" === typeof c[E] || "string" === typeof c) return Vb(c, a) } throw new TypeError((null !==
      c && typeof c || c) + " is not observable");
  } function F(c, a) { return a ? Ta(c, a) : c instanceof n ? c : new n(ha(c)) } function L(c, a, b) { void 0 === b && (b = Number.POSITIVE_INFINITY); if ("function" === typeof a) return function (d) { return d.pipe(L(function (b, d) { return F(c(b, d)).pipe(B(function (c, e) { return a(b, c, d, e) })) }, b)) }; "number" === typeof a && (b = a); return function (a) { return a.lift(new Wb(c, b)) } } function ya(c) { void 0 === c && (c = Number.POSITIVE_INFINITY); return L(J, c) } function Va() { return ya(1) } function aa() {
    for (var c = [], a = 0; a <
      arguments.length; a++)c[a] = arguments[a]; return Va()(ga.apply(void 0, c))
  } function za(c) { return new n(function (a) { var b; try { b = c() } catch (d) { a.error(d); return } return (b ? F(b) : R()).subscribe(a) }) } function ia(c, a) {
    return new n(function (b) {
      var d = c.length; if (0 === d) b.complete(); else for (var e = Array(d), f = 0, g = 0, l = function (l) {
        var h = F(c[l]), u = !1; b.add(h.subscribe({
          next: function (b) { u || (u = !0, g++); e[l] = b }, error: function (a) { return b.error(a) }, complete: function () {
            f++; f !== d && u || (g === d && b.next(a ? a.reduce(function (b, a, c) {
              return b[a] =
                e[c], b
            }, {}) : e), b.complete())
          }
        }))
      }, h = 0; h < d; h++)l(h)
    })
  } function Wa(c, a, b, d) { P(b) && (d = b, b = void 0); return d ? Wa(c, a, b).pipe(B(function (b) { return x(b) ? d.apply(void 0, b) : d(b) })) : new n(function (d) { Xa(c, a, function (b) { 1 < arguments.length ? d.next(Array.prototype.slice.call(arguments)) : d.next(b) }, d, b) }) } function Xa(c, a, b, d, e) {
    var f; if (c && "function" === typeof c.addEventListener && "function" === typeof c.removeEventListener) c.addEventListener(a, b, e), f = function () { return c.removeEventListener(a, b, e) }; else if (c && "function" ===
      typeof c.on && "function" === typeof c.off) c.on(a, b), f = function () { return c.off(a, b) }; else if (c && "function" === typeof c.addListener && "function" === typeof c.removeListener) c.addListener(a, b), f = function () { return c.removeListener(a, b) }; else if (c && c.length) for (var g = 0, l = c.length; g < l; g++)Xa(c[g], a, b, d, e); else throw new TypeError("Invalid event target"); d.add(f)
  } function Ya(c, a, b) {
    return b ? Ya(c, a).pipe(B(function (a) { return x(a) ? b.apply(void 0, a) : b(a) })) : new n(function (b) {
      var d = function () {
        for (var a = [], c = 0; c < arguments.length; c++)a[c] =
          arguments[c]; return b.next(1 === a.length ? a[0] : a)
      }, f; try { f = c(d) } catch (g) { b.error(g); return } if (P(a)) return function () { return a(d, f) }
    })
  } function $b(c) { var a = c.subscriber, b = c.condition; if (!a.closed) { if (c.needIterate) try { c.state = c.iterate(c.state) } catch (f) { a.error(f); return } else c.needIterate = !0; if (b) { var d = void 0; try { d = b(c.state) } catch (f) { a.error(f); return } if (!d) { a.complete(); return } if (a.closed) return } var e; try { e = c.resultSelector(c.state) } catch (f) { a.error(f); return } if (!a.closed && (a.next(e), !a.closed)) return this.schedule(c) } }
  function V(c) { return !x(c) && 0 <= c - parseFloat(c) + 1 } function ac(c) { var a = c.subscriber, b = c.counter; c = c.period; a.next(b); this.schedule({ subscriber: a, counter: b + 1, period: c }, c) } function Za() { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; var a = Number.POSITIVE_INFINITY, b = null, d = c[c.length - 1]; A(d) ? (b = c.pop(), 1 < c.length && "number" === typeof c[c.length - 1] && (a = c.pop())) : "number" === typeof d && (a = c.pop()); return null === b && 1 === c.length && c[0] instanceof n ? c[0] : ya(a)(Z(c, b)) } function Aa() {
    for (var c = [], a = 0; a <
      arguments.length; a++)c[a] = arguments[a]; if (0 === c.length) return S; var b = c[0], d = c.slice(1); return 1 === c.length && x(b) ? Aa.apply(void 0, b) : new n(function (a) { var c = function () { return a.add(Aa.apply(void 0, d).subscribe(a)) }; return F(b).subscribe({ next: function (b) { a.next(b) }, error: c, complete: c }) })
  } function bc(c) { var a = c.keys, b = c.index, d = c.subscriber, e = c.subscription; c = c.obj; if (!d.closed) if (b < a.length) { var f = a[b]; d.next([f, c[f]]); e.add(this.schedule({ keys: a, index: b + 1, subscriber: d, subscription: e, obj: c })) } else d.complete() }
  function $a(c, a) { function b() { return !b.pred.apply(b.thisArg, arguments) } b.pred = c; b.thisArg = a; return b } function H(c, a) { return function (b) { return b.lift(new cc(c, a)) } } function ab() { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; if (1 === c.length) if (x(c[0])) c = c[0]; else return c[0]; return Z(c, void 0).lift(new dc) } function ec(c) { var a = c.start, b = c.index, d = c.subscriber; b >= c.count ? d.complete() : (d.next(a), d.closed || (c.index = b + 1, c.start = a + 1, this.schedule(c))) } function bb(c, a, b) {
  void 0 === c && (c = 0); var d =
    -1; V(a) ? d = 1 > Number(a) && 1 || Number(a) : A(a) && (b = a); A(b) || (b = y); return new n(function (a) { var e = V(c) ? c : +c - b.now(); return b.schedule(fc, e, { index: 0, period: d, subscriber: a }) })
  } function fc(c) { var a = c.index, b = c.period, d = c.subscriber; d.next(a); if (!d.closed) { if (-1 === b) return d.complete(); c.index = a + 1; this.schedule(c, b) } } function cb() { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; a = c[c.length - 1]; "function" === typeof a && c.pop(); return Z(c, void 0).lift(new db(a)) } function eb(c) { return function (a) { return a.lift(new gc(c)) } }
  function fb(c) { var a = c.subscriber, b = c.context; b && a.closeContext(b); a.closed || (c.context = a.openContext(), c.context.closeAction = this.schedule(c, c.bufferTimeSpan)) } function hc(c) { var a = c.bufferCreationInterval, b = c.bufferTimeSpan, d = c.subscriber, e = c.scheduler, f = d.openContext(); d.closed || (d.add(f.closeAction = e.schedule(gb, b, { subscriber: d, context: f })), this.schedule(c, a)) } function gb(c) { c.subscriber.closeContext(c.context) } function hb(c, a) { return L(c, a, 1) } function ic(c) { c.debouncedNext() } function ba(c) {
  void 0 ===
    c && (c = null); return function (a) { return a.lift(new jc(c)) }
  } function ib(c, a) { return function (b) { return b.lift(new kc(c, a)) } } function ja(c) { void 0 === c && (c = lc); return function (a) { return a.lift(new mc(c)) } } function lc() { return new ca } function Ba(c) { return function (a) { return 0 === c ? R() : a.lift(new nc(c)) } } function jb(c, a) { return a ? function (b) { return b.pipe(jb(function (b, e) { return F(c(b, e)).pipe(B(function (c, d) { return a(b, c, e, d) })) })) } : function (b) { return b.lift(new oc(c)) } } function ka(c) {
    return function (a) {
      return 0 ===
        c ? R() : a.lift(new pc(c))
    }
  } function la(c, a) { var b = !1; 2 <= arguments.length && (b = !0); return function (d) { return d.lift(new qc(c, a, b)) } } function ma(c, a) { return 2 <= arguments.length ? function (b) { return ta(la(c, a), ka(1), ba(a))(b) } : function (b) { return ta(la(function (b, a, f) { return c(b, a, f + 1) }), ka(1))(b) } } function M(c, a) { return function (b) { var d; d = "function" === typeof c ? c : function () { return c }; if ("function" === typeof a) return b.lift(new rc(d, a)); var e = Object.create(b, sc); e.source = b; e.subjectFactory = d; return e } } function tc(c,
    a) { return function (b) { var d = b; for (b = 0; b < a; b++)if (d = d[c[b]], "undefined" === typeof d) return; return d } } function uc(c) { var a = c.period; c.subscriber.notifyNext(); this.schedule(c, a) } function vc() { return new v } function wc(c) {
      var a = c.bufferSize, b = void 0 === a ? Number.POSITIVE_INFINITY : a, a = c.windowTime, d = void 0 === a ? Number.POSITIVE_INFINITY : a, e = c.refCount, f = c.scheduler, g, l = 0, h, k = !1, r = !1; return function (a) {
        l++; if (!g || k) k = !1, g = new W(b, d, f), h = a.subscribe({
          next: function (b) { g.next(b) }, error: function (b) { k = !0; g.error(b) },
          complete: function () { r = !0; h = void 0; g.complete() }
        }); var c = g.subscribe(this); this.add(function () { l--; c.unsubscribe(); h && !r && e && 0 === l && (h.unsubscribe(), g = h = void 0) })
      }
    } function da(c, a) { return "function" === typeof a ? function (b) { return b.pipe(da(function (b, e) { return F(c(b, e)).pipe(B(function (c, d) { return a(b, c, e, d) })) })) } : function (b) { return b.lift(new xc(c)) } } function yc(c) { c.subscriber.clearThrottle() } function kb(c, a, b) {
    void 0 === b && (b = y); return function (d) {
      var e = c instanceof Date && !isNaN(+c), f = e ? +c - b.now() :
        Math.abs(c); return d.lift(new zc(f, e, a, b))
    }
    } function Ac(c, a, b) { if (0 === b) return [a]; c.push(a); return c } function Bc(c) { var a = c.subscriber, b = c.windowTimeSpan, d = c.window; d && a.closeWindow(d); c.window = a.openWindow(); this.schedule(c, b) } function Cc(c) { var a = c.windowTimeSpan, b = c.subscriber, d = c.scheduler, e = c.windowCreationInterval, f = b.openWindow(), g = { action: this, subscription: null }; g.subscription = d.schedule(lb, a, { subscriber: b, window: f, context: g }); this.add(g.subscription); this.schedule(c, e) } function lb(c) {
      var a =
        c.subscriber, b = c.window; (c = c.context) && c.action && c.subscription && c.action.remove(c.subscription); a.closeWindow(b)
    } function mb(c, a) { for (var b = 0, d = a.length; b < d; b++)for (var e = a[b], f = Object.getOwnPropertyNames(e.prototype), g = 0, l = f.length; g < l; g++) { var h = f[g]; c.prototype[h] = e.prototype[h] } } function Dc(c, a) { void 0 === a && (a = null); return new N({ method: "GET", url: c, headers: a }) } function Ec(c, a, b) { return new N({ method: "POST", url: c, body: a, headers: b }) } function Fc(c, a) { return new N({ method: "DELETE", url: c, headers: a }) }
  function Gc(c, a, b) { return new N({ method: "PUT", url: c, body: a, headers: b }) } function Hc(c, a, b) { return new N({ method: "PATCH", url: c, body: a, headers: b }) } function Ic(c, a) { return Jc(new N({ method: "GET", url: c, responseType: "json", headers: a })) } function nb(c, a) { switch (c) { case "json": return c = "response" in a ? a.responseType ? a.response : JSON.parse(a.response || a.responseText || "null") : JSON.parse(a.responseText || "null"), c; case "xml": return a.responseXML; default: return "response" in a ? a.response : a.responseText } } var Kb = Object.setPrototypeOf ||
    { __proto__: [] } instanceof Array && function (c, a) { c.__proto__ = a } || function (c, a) { for (var b in a) a.hasOwnProperty(b) && (c[b] = a[b]) }, ob = Object.assign || function (c) { for (var a, b = 1, d = arguments.length; b < d; b++) { a = arguments[b]; for (var e in a) Object.prototype.hasOwnProperty.call(a, e) && (c[e] = a[e]) } return c }, Ca = !1, C = {
      Promise: void 0, set useDeprecatedSynchronousErrorHandling(c) {
        c ? console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + Error().stack) : Ca && console.log("RxJS: Back to a better error behavior. Thank you. \x3c3");
        Ca = c
      }, get useDeprecatedSynchronousErrorHandling() { return Ca }
    }, na = { closed: !0, next: function (c) { }, error: function (c) { if (C.useDeprecatedSynchronousErrorHandling) throw c; Q(c) }, complete: function () { } }, x = function () { return Array.isArray || function (c) { return c && "number" === typeof c.length } }(), Y = function () {
      function c(a) {
        Error.call(this); this.message = a ? a.length + " errors occurred during unsubscription:\n" + a.map(function (b, a) { return a + 1 + ") " + b.toString() }).join("\n  ") : ""; this.name = "UnsubscriptionError"; this.errors =
          a; return this
      } c.prototype = Object.create(Error.prototype); return c
    }(), t = function () {
      function c(a) { this.closed = !1; this._subscriptions = this._parentOrParents = null; a && (this._unsubscribe = a) } c.prototype.unsubscribe = function () {
        var a; if (!this.closed) {
          var b = this._parentOrParents, d = this._unsubscribe, e = this._subscriptions; this.closed = !0; this._subscriptions = this._parentOrParents = null; if (b instanceof c) b.remove(this); else if (null !== b) for (var f = 0; f < b.length; ++f)b[f].remove(this); if (P(d)) try { d.call(this) } catch (g) {
            a =
            g instanceof Y ? Ka(g.errors) : [g]
          } if (x(e)) for (f = -1, b = e.length; ++f < b;)if (d = e[f], ra(d)) try { d.unsubscribe() } catch (g) { a = a || [], g instanceof Y ? a = a.concat(Ka(g.errors)) : a.push(g) } if (a) throw new Y(a);
        }
      }; c.prototype.add = function (a) {
        var b = a; if (!a) return c.EMPTY; switch (typeof a) {
          case "function": b = new c(a); case "object": if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b; if (this.closed) return b.unsubscribe(), b; b instanceof c || (a = b, b = new c, b._subscriptions = [a]); break; default: throw Error("unrecognized teardown " +
            a + " added to Subscription.");
        }a = b._parentOrParents; if (null === a) b._parentOrParents = this; else if (a instanceof c) { if (a === this) return b; b._parentOrParents = [a, this] } else if (-1 === a.indexOf(this)) a.push(this); else return b; a = this._subscriptions; null === a ? this._subscriptions = [b] : a.push(b); return b
      }; c.prototype.remove = function (a) { var b = this._subscriptions; b && (a = b.indexOf(a), -1 !== a && b.splice(a, 1)) }; c.EMPTY = function (a) { a.closed = !0; return a }(new c); return c
    }(), oa = "function" === typeof Symbol ? Symbol("rxSubscriber") :
      "@@rxSubscriber_" + Math.random(), m = function (c) {
        function a(b, d, e) { var f = c.call(this) || this; f.syncErrorValue = null; f.syncErrorThrown = !1; f.syncErrorThrowable = !1; f.isStopped = !1; switch (arguments.length) { case 0: f.destination = na; break; case 1: if (!b) { f.destination = na; break } if ("object" === typeof b) { b instanceof a ? (f.syncErrorThrowable = b.syncErrorThrowable, f.destination = b, b.add(f)) : (f.syncErrorThrowable = !0, f.destination = new pb(f, b)); break } default: f.syncErrorThrowable = !0, f.destination = new pb(f, b, d, e) }return f } h(a,
          c); a.prototype[oa] = function () { return this }; a.create = function (b, c, e) { b = new a(b, c, e); b.syncErrorThrowable = !1; return b }; a.prototype.next = function (b) { this.isStopped || this._next(b) }; a.prototype.error = function (b) { this.isStopped || (this.isStopped = !0, this._error(b)) }; a.prototype.complete = function () { this.isStopped || (this.isStopped = !0, this._complete()) }; a.prototype.unsubscribe = function () { this.closed || (this.isStopped = !0, c.prototype.unsubscribe.call(this)) }; a.prototype._next = function (b) { this.destination.next(b) };
        a.prototype._error = function (b) { this.destination.error(b); this.unsubscribe() }; a.prototype._complete = function () { this.destination.complete(); this.unsubscribe() }; a.prototype._unsubscribeAndRecycle = function () { var b = this._parentOrParents; this._parentOrParents = null; this.unsubscribe(); this.isStopped = this.closed = !1; this._parentOrParents = b; return this }; return a
      }(t), pb = function (c) {
        function a(b, a, e, f) {
          var d = c.call(this) || this; d._parentSubscriber = b; var l; b = d; P(a) ? l = a : a && (l = a.next, e = a.error, f = a.complete, a !== na &&
            (b = Object.create(a), P(b.unsubscribe) && d.add(b.unsubscribe.bind(b)), b.unsubscribe = d.unsubscribe.bind(d))); d._context = b; d._next = l; d._error = e; d._complete = f; return d
        } h(a, c); a.prototype.next = function (b) { if (!this.isStopped && this._next) { var a = this._parentSubscriber; C.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable ? this.__tryOrSetError(a, this._next, b) && this.unsubscribe() : this.__tryOrUnsub(this._next, b) } }; a.prototype.error = function (b) {
          if (!this.isStopped) {
            var a = this._parentSubscriber, c = C.useDeprecatedSynchronousErrorHandling;
            if (this._error) c && a.syncErrorThrowable ? this.__tryOrSetError(a, this._error, b) : this.__tryOrUnsub(this._error, b), this.unsubscribe(); else if (a.syncErrorThrowable) c ? (a.syncErrorValue = b, a.syncErrorThrown = !0) : Q(b), this.unsubscribe(); else { this.unsubscribe(); if (c) throw b; Q(b) }
          }
        }; a.prototype.complete = function () {
          var b = this; if (!this.isStopped) {
            var a = this._parentSubscriber; if (this._complete) {
              var c = function () { return b._complete.call(b._context) }; C.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable ? this.__tryOrSetError(a,
                c) : this.__tryOrUnsub(c)
            } this.unsubscribe()
          }
        }; a.prototype.__tryOrUnsub = function (b, a) { try { b.call(this._context, a) } catch (e) { this.unsubscribe(); if (C.useDeprecatedSynchronousErrorHandling) throw e; Q(e) } }; a.prototype.__tryOrSetError = function (b, a, c) { if (!C.useDeprecatedSynchronousErrorHandling) throw Error("bad call"); try { a.call(this._context, c) } catch (f) { return C.useDeprecatedSynchronousErrorHandling ? (b.syncErrorValue = f, b.syncErrorThrown = !0) : Q(f), !0 } return !1 }; a.prototype._unsubscribe = function () {
          var b = this._parentSubscriber;
          this._parentSubscriber = this._context = null; b.unsubscribe()
        }; return a
      }(m), U = "function" === typeof Symbol && Symbol.observable || "@@observable", n = function () {
        function c(a) { this._isScalar = !1; a && (this._subscribe = a) } c.prototype.lift = function (a) { var b = new c; b.source = this; b.operator = a; return b }; c.prototype.subscribe = function (a, b, c) {
          var d = this.operator; a: { if (a) { if (a instanceof m) break a; if (a[oa]) { a = a[oa](); break a } } a = a || b || c ? new m(a, b, c) : new m(na) } d ? a.add(d.call(a, this.source)) : a.add(this.source || C.useDeprecatedSynchronousErrorHandling &&
            !a.syncErrorThrowable ? this._subscribe(a) : this._trySubscribe(a)); if (C.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable && (a.syncErrorThrowable = !1, a.syncErrorThrown)) throw a.syncErrorValue; return a
        }; c.prototype._trySubscribe = function (a) { try { return this._subscribe(a) } catch (b) { C.useDeprecatedSynchronousErrorHandling && (a.syncErrorThrown = !0, a.syncErrorValue = b), sa(a) ? a.error(b) : console.warn(b) } }; c.prototype.forEach = function (a, b) {
          var c = this; b = Ma(b); return new b(function (b, d) {
            var e; e = c.subscribe(function (b) {
              try { a(b) } catch (u) {
              d(u),
                e && e.unsubscribe()
              }
            }, d, b)
          })
        }; c.prototype._subscribe = function (a) { var b = this.source; return b && b.subscribe(a) }; c.prototype[U] = function () { return this }; c.prototype.pipe = function () { for (var a = [], b = 0; b < arguments.length; b++)a[b] = arguments[b]; return 0 === a.length ? this : La(a)(this) }; c.prototype.toPromise = function (a) { var b = this; a = Ma(a); return new a(function (a, c) { var d; b.subscribe(function (b) { return d = b }, function (b) { return c(b) }, function () { return a(d) }) }) }; c.create = function (a) { return new c(a) }; return c
      }(), I = function () {
        function c() {
          Error.call(this);
          this.message = "object unsubscribed"; this.name = "ObjectUnsubscribedError"; return this
        } c.prototype = Object.create(Error.prototype); return c
      }(), qb = function (c) { function a(b, a) { var d = c.call(this) || this; d.subject = b; d.subscriber = a; d.closed = !1; return d } h(a, c); a.prototype.unsubscribe = function () { if (!this.closed) { this.closed = !0; var b = this.subject, a = b.observers; this.subject = null; !a || 0 === a.length || b.isStopped || b.closed || (b = a.indexOf(this.subscriber), -1 !== b && a.splice(b, 1)) } }; return a }(t), rb = function (c) {
        function a(b) {
          var a =
            c.call(this, b) || this; a.destination = b; return a
        } h(a, c); return a
      }(m), v = function (c) {
        function a() { var b = c.call(this) || this; b.observers = []; b.closed = !1; b.isStopped = !1; b.hasError = !1; b.thrownError = null; return b } h(a, c); a.prototype[oa] = function () { return new rb(this) }; a.prototype.lift = function (b) { var a = new Da(this, this); a.operator = b; return a }; a.prototype.next = function (b) { if (this.closed) throw new I; if (!this.isStopped) for (var a = this.observers, c = a.length, a = a.slice(), f = 0; f < c; f++)a[f].next(b) }; a.prototype.error = function (b) {
          if (this.closed) throw new I;
          this.hasError = !0; this.thrownError = b; this.isStopped = !0; for (var a = this.observers, c = a.length, a = a.slice(), f = 0; f < c; f++)a[f].error(b); this.observers.length = 0
        }; a.prototype.complete = function () { if (this.closed) throw new I; this.isStopped = !0; for (var b = this.observers, a = b.length, b = b.slice(), c = 0; c < a; c++)b[c].complete(); this.observers.length = 0 }; a.prototype.unsubscribe = function () { this.closed = this.isStopped = !0; this.observers = null }; a.prototype._trySubscribe = function (b) {
          if (this.closed) throw new I; return c.prototype._trySubscribe.call(this,
            b)
        }; a.prototype._subscribe = function (b) { if (this.closed) throw new I; if (this.hasError) return b.error(this.thrownError), t.EMPTY; if (this.isStopped) return b.complete(), t.EMPTY; this.observers.push(b); return new qb(this, b) }; a.prototype.asObservable = function () { var b = new n; b.source = this; return b }; a.create = function (b, a) { return new Da(b, a) }; return a
      }(n), Da = function (c) {
        function a(b, a) { var d = c.call(this) || this; d.destination = b; d.source = a; return d } h(a, c); a.prototype.next = function (b) {
          var a = this.destination; a && a.next &&
            a.next(b)
        }; a.prototype.error = function (b) { var a = this.destination; a && a.error && this.destination.error(b) }; a.prototype.complete = function () { var b = this.destination; b && b.complete && this.destination.complete() }; a.prototype._subscribe = function (b) { return this.source ? this.source.subscribe(b) : t.EMPTY }; return a
      }(v), Lb = function () { function c(a) { this.connectable = a } c.prototype.call = function (a, b) { var c = this.connectable; c._refCount++; a = new Kc(a, c); b = b.subscribe(a); a.closed || (a.connection = c.connect()); return b }; return c }(),
    Kc = function (c) { function a(b, a) { b = c.call(this, b) || this; b.connectable = a; return b } h(a, c); a.prototype._unsubscribe = function () { var b = this.connectable; if (b) { this.connectable = null; var a = b._refCount; 0 >= a ? this.connection = null : (b._refCount = a - 1, 1 < a ? this.connection = null : (a = this.connection, b = b._connection, this.connection = null, !b || a && b !== a || b.unsubscribe())) } else this.connection = null }; return a }(m), sb = function (c) {
      function a(b, a) {
        var d = c.call(this) || this; d.source = b; d.subjectFactory = a; d._refCount = 0; d._isComplete =
          !1; return d
      } h(a, c); a.prototype._subscribe = function (b) { return this.getSubject().subscribe(b) }; a.prototype.getSubject = function () { var b = this._subject; if (!b || b.isStopped) this._subject = this.subjectFactory(); return this._subject }; a.prototype.connect = function () { var b = this._connection; b || (this._isComplete = !1, b = this._connection = new t, b.add(this.source.subscribe(new Lc(this.getSubject(), this))), b.closed && (this._connection = null, b = t.EMPTY)); return b }; a.prototype.refCount = function () { return ua()(this) }; return a
    }(n),
    sc = function () { var c = sb.prototype; return { operator: { value: null }, _refCount: { value: 0, writable: !0 }, _subject: { value: null, writable: !0 }, _connection: { value: null, writable: !0 }, _subscribe: { value: c._subscribe }, _isComplete: { value: c._isComplete, writable: !0 }, getSubject: { value: c.getSubject }, connect: { value: c.connect }, refCount: { value: c.refCount } } }(), Lc = function (c) {
      function a(b, a) { b = c.call(this, b) || this; b.connectable = a; return b } h(a, c); a.prototype._error = function (b) { this._unsubscribe(); c.prototype._error.call(this, b) };
      a.prototype._complete = function () { this.connectable._isComplete = !0; this._unsubscribe(); c.prototype._complete.call(this) }; a.prototype._unsubscribe = function () { var b = this.connectable; if (b) { this.connectable = null; var a = b._connection; b._refCount = 0; b._subject = null; b._connection = null; a && a.unsubscribe() } }; return a
    }(rb); (function (c) {
      function a(b, a) { b = c.call(this, b) || this; b.connectable = a; return b } h(a, c); a.prototype._unsubscribe = function () {
        var b = this.connectable; if (b) {
        this.connectable = null; var a = b._refCount; 0 >=
          a ? this.connection = null : (b._refCount = a - 1, 1 < a ? this.connection = null : (a = this.connection, b = b._connection, this.connection = null, !b || a && b !== a || b.unsubscribe()))
        } else this.connection = null
      }; return a
    })(m); var Nc = function () { function c(a, b, c, e) { this.keySelector = a; this.elementSelector = b; this.durationSelector = c; this.subjectSelector = e } c.prototype.call = function (a, b) { return b.subscribe(new Mc(a, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector)) }; return c }(), Mc = function (c) {
      function a(b,
        a, e, f, g) { b = c.call(this, b) || this; b.keySelector = a; b.elementSelector = e; b.durationSelector = f; b.subjectSelector = g; b.groups = null; b.attemptedToUnsubscribe = !1; b.count = 0; return b } h(a, c); a.prototype._next = function (b) { var a; try { a = this.keySelector(b) } catch (e) { this.error(e); return } this._group(b, a) }; a.prototype._group = function (b, a) {
          var c = this.groups; c || (c = this.groups = new Map); var d = c.get(a), g; if (this.elementSelector) try { g = this.elementSelector(b) } catch (l) { this.error(l) } else g = b; if (!d && (d = this.subjectSelector ? this.subjectSelector() :
            new v, c.set(a, d), b = new Ea(a, d, this), this.destination.next(b), this.durationSelector)) { b = void 0; try { b = this.durationSelector(new Ea(a, d)) } catch (l) { this.error(l); return } this.add(b.subscribe(new Oc(a, d, this))) } d.closed || d.next(g)
        }; a.prototype._error = function (b) { var a = this.groups; a && (a.forEach(function (a, c) { a.error(b) }), a.clear()); this.destination.error(b) }; a.prototype._complete = function () { var b = this.groups; b && (b.forEach(function (b, a) { b.complete() }), b.clear()); this.destination.complete() }; a.prototype.removeGroup =
          function (b) { this.groups.delete(b) }; a.prototype.unsubscribe = function () { this.closed || (this.attemptedToUnsubscribe = !0, 0 === this.count && c.prototype.unsubscribe.call(this)) }; return a
    }(m), Oc = function (c) { function a(b, a, e) { var d = c.call(this, a) || this; d.key = b; d.group = a; d.parent = e; return d } h(a, c); a.prototype._next = function (b) { this.complete() }; a.prototype._unsubscribe = function () { var b = this.parent, a = this.key; this.key = this.parent = null; b && b.removeGroup(a) }; return a }(m), Ea = function (c) {
      function a(b, a, e) {
        var d = c.call(this) ||
          this; d.key = b; d.groupSubject = a; d.refCountSubscription = e; return d
      } h(a, c); a.prototype._subscribe = function (b) { var a = new t, c = this.refCountSubscription, f = this.groupSubject; c && !c.closed && a.add(new Pc(c)); a.add(f.subscribe(b)); return a }; return a
    }(n), Pc = function (c) {
      function a(b) { var a = c.call(this) || this; a.parent = b; b.count++; return a } h(a, c); a.prototype.unsubscribe = function () { var b = this.parent; b.closed || this.closed || (c.prototype.unsubscribe.call(this), --b.count, 0 === b.count && b.attemptedToUnsubscribe && b.unsubscribe()) };
      return a
    }(t), tb = function (c) {
      function a(b) { var a = c.call(this) || this; a._value = b; return a } h(a, c); Object.defineProperty(a.prototype, "value", { get: function () { return this.getValue() }, enumerable: !0, configurable: !0 }); a.prototype._subscribe = function (b) { var a = c.prototype._subscribe.call(this, b); a && !a.closed && b.next(this._value); return a }; a.prototype.getValue = function () { if (this.hasError) throw this.thrownError; if (this.closed) throw new I; return this._value }; a.prototype.next = function (b) {
        c.prototype.next.call(this,
          this._value = b)
      }; return a
    }(v), ea = function (c) {
      function a(b, a) { var d = c.call(this, b, a) || this; d.scheduler = b; d.work = a; d.pending = !1; return d } h(a, c); a.prototype.schedule = function (b, a) { void 0 === a && (a = 0); if (this.closed) return this; this.state = b; b = this.id; var c = this.scheduler; null != b && (this.id = this.recycleAsyncId(c, b, a)); this.pending = !0; this.delay = a; this.id = this.id || this.requestAsyncId(c, this.id, a); return this }; a.prototype.requestAsyncId = function (b, a, c) {
      void 0 === c && (c = 0); return setInterval(b.flush.bind(b, this),
        c)
      }; a.prototype.recycleAsyncId = function (b, a, c) { void 0 === c && (c = 0); if (null !== c && this.delay === c && !1 === this.pending) return a; clearInterval(a) }; a.prototype.execute = function (b, a) { if (this.closed) return Error("executing a cancelled action"); this.pending = !1; if (b = this._execute(b, a)) return b; !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null)) }; a.prototype._execute = function (b, a) {
        a = !1; var c = void 0; try { this.work(b) } catch (f) { a = !0, c = !!f && f || Error(f) } if (a) return this.unsubscribe(),
          c
      }; a.prototype._unsubscribe = function () { var b = this.id, a = this.scheduler, c = a.actions, f = c.indexOf(this); this.state = this.work = null; this.pending = !1; this.scheduler = null; -1 !== f && c.splice(f, 1); null != b && (this.id = this.recycleAsyncId(a, b, null)); this.delay = null }; return a
    }(function (c) { function a(b, a) { return c.call(this) || this } h(a, c); a.prototype.schedule = function (b, a) { return this }; return a }(t)), Qc = function (c) {
      function a(b, a) { var d = c.call(this, b, a) || this; d.scheduler = b; d.work = a; return d } h(a, c); a.prototype.schedule =
        function (b, a) { void 0 === a && (a = 0); if (0 < a) return c.prototype.schedule.call(this, b, a); this.delay = a; this.state = b; this.scheduler.flush(this); return this }; a.prototype.execute = function (b, a) { return 0 < a || this.closed ? c.prototype.execute.call(this, b, a) : this._execute(b, a) }; a.prototype.requestAsyncId = function (b, a, e) { void 0 === e && (e = 0); return null !== e && 0 < e || null === e && 0 < this.delay ? c.prototype.requestAsyncId.call(this, b, a, e) : b.flush(this) }; return a
    }(ea), Fa = function () {
      function c(a, b) {
      void 0 === b && (b = c.now); this.SchedulerAction =
        a; this.now = b
      } c.prototype.schedule = function (a, b, c) { void 0 === b && (b = 0); return (new this.SchedulerAction(this, a)).schedule(c, b) }; c.now = function () { return Date.now() }; return c
    }(), O = function (c) {
      function a(b, d) { void 0 === d && (d = Fa.now); var e = c.call(this, b, function () { return a.delegate && a.delegate !== e ? a.delegate.now() : d() }) || this; e.actions = []; e.active = !1; e.scheduled = void 0; return e } h(a, c); a.prototype.schedule = function (b, d, e) {
      void 0 === d && (d = 0); return a.delegate && a.delegate !== this ? a.delegate.schedule(b, d, e) : c.prototype.schedule.call(this,
        b, d, e)
      }; a.prototype.flush = function (b) { var a = this.actions; if (this.active) a.push(b); else { var c; this.active = !0; do if (c = b.execute(b.state, b.delay)) break; while (b = a.shift()); this.active = !1; if (c) { for (; b = a.shift();)b.unsubscribe(); throw c; } } }; return a
    }(Fa), ub = new (function (c) { function a() { return null !== c && c.apply(this, arguments) || this } h(a, c); return a }(O))(Qc), S = new n(function (c) { return c.complete() }), Na = function (c) { return function (a) { for (var b = 0, d = c.length; b < d && !a.closed; b++)a.next(c[b]); a.complete() } }; (function (c) {
    c.NEXT =
      "N"; c.ERROR = "E"; c.COMPLETE = "C"
    })(k.NotificationKind || (k.NotificationKind = {})); var w = function () {
      function c(a, b, c) { this.kind = a; this.value = b; this.error = c; this.hasValue = "N" === a } c.prototype.observe = function (a) { switch (this.kind) { case "N": return a.next && a.next(this.value); case "E": return a.error && a.error(this.error); case "C": return a.complete && a.complete() } }; c.prototype.do = function (a, b, c) { switch (this.kind) { case "N": return a && a(this.value); case "E": return b && b(this.error); case "C": return c && c() } }; c.prototype.accept =
        function (a, b, c) { return a && "function" === typeof a.next ? this.observe(a) : this.do(a, b, c) }; c.prototype.toObservable = function () { switch (this.kind) { case "N": return ga(this.value); case "E": return wa(this.error); case "C": return R() }throw Error("unexpected notification kind value"); }; c.createNext = function (a) { return "undefined" !== typeof a ? new c("N", a) : c.undefinedValueNotification }; c.createError = function (a) { return new c("E", void 0, a) }; c.createComplete = function () { return c.completeNotification }; c.completeNotification =
          new c("C"); c.undefinedValueNotification = new c("N", void 0); return c
    }(), Rc = function () { function c(a, b) { void 0 === b && (b = 0); this.scheduler = a; this.delay = b } c.prototype.call = function (a, b) { return b.subscribe(new vb(a, this.scheduler, this.delay)) }; return c }(), vb = function (c) {
      function a(b, a, e) { void 0 === e && (e = 0); b = c.call(this, b) || this; b.scheduler = a; b.delay = e; return b } h(a, c); a.dispatch = function (b) { b.notification.observe(b.destination); this.unsubscribe() }; a.prototype.scheduleMessage = function (b) {
        this.destination.add(this.scheduler.schedule(a.dispatch,
          this.delay, new Sc(b, this.destination)))
      }; a.prototype._next = function (b) { this.scheduleMessage(w.createNext(b)) }; a.prototype._error = function (b) { this.scheduleMessage(w.createError(b)); this.unsubscribe() }; a.prototype._complete = function () { this.scheduleMessage(w.createComplete()); this.unsubscribe() }; return a
    }(m), Sc = function () { return function (c, a) { this.notification = c; this.destination = a } }(), W = function (c) {
      function a(b, a, e) {
      void 0 === b && (b = Number.POSITIVE_INFINITY); void 0 === a && (a = Number.POSITIVE_INFINITY); var d =
        c.call(this) || this; d.scheduler = e; d._events = []; d._infiniteTimeWindow = !1; d._bufferSize = 1 > b ? 1 : b; d._windowTime = 1 > a ? 1 : a; a === Number.POSITIVE_INFINITY ? (d._infiniteTimeWindow = !0, d.next = d.nextInfiniteTimeWindow) : d.next = d.nextTimeWindow; return d
      } h(a, c); a.prototype.nextInfiniteTimeWindow = function (b) { var a = this._events; a.push(b); a.length > this._bufferSize && a.shift(); c.prototype.next.call(this, b) }; a.prototype.nextTimeWindow = function (b) {
        this._events.push(new Tc(this._getNow(), b)); this._trimBufferThenGetEvents();
        c.prototype.next.call(this, b)
      }; a.prototype._subscribe = function (b) { var a = this._infiniteTimeWindow, c = a ? this._events : this._trimBufferThenGetEvents(), f = this.scheduler, g = c.length, l; if (this.closed) throw new I; this.isStopped || this.hasError ? l = t.EMPTY : (this.observers.push(b), l = new qb(this, b)); f && b.add(b = new vb(b, f)); if (a) for (a = 0; a < g && !b.closed; a++)b.next(c[a]); else for (a = 0; a < g && !b.closed; a++)b.next(c[a].value); this.hasError ? b.error(this.thrownError) : this.isStopped && b.complete(); return l }; a.prototype._getNow =
        function () { return (this.scheduler || ub).now() }; a.prototype._trimBufferThenGetEvents = function () { for (var b = this._getNow(), a = this._bufferSize, c = this._windowTime, f = this._events, g = f.length, l = 0; l < g && !(b - f[l].time < c);)l++; g > a && (l = Math.max(l, g - a)); 0 < l && f.splice(0, l); return f }; return a
    }(v), Tc = function () { return function (c, a) { this.time = c; this.value = a } }(), T = function (c) {
      function a() { var b = null !== c && c.apply(this, arguments) || this; b.value = null; b.hasNext = !1; b.hasCompleted = !1; return b } h(a, c); a.prototype._subscribe = function (b) {
        return this.hasError ?
          (b.error(this.thrownError), t.EMPTY) : this.hasCompleted && this.hasNext ? (b.next(this.value), b.complete(), t.EMPTY) : c.prototype._subscribe.call(this, b)
      }; a.prototype.next = function (b) { this.hasCompleted || (this.value = b, this.hasNext = !0) }; a.prototype.error = function (b) { this.hasCompleted || c.prototype.error.call(this, b) }; a.prototype.complete = function () { this.hasCompleted = !0; this.hasNext && c.prototype.next.call(this, this.value); c.prototype.complete.call(this) }; return a
    }(v), Uc = 1, Vc = Promise.resolve(), xa = {}, wb = {
      setImmediate: function (c) {
        var a =
          Uc++; xa[a] = !0; Vc.then(function () { return Oa(a) && c() }); return a
      }, clearImmediate: function (c) { Oa(c) }
    }, Wc = function (c) {
      function a(b, a) { var d = c.call(this, b, a) || this; d.scheduler = b; d.work = a; return d } h(a, c); a.prototype.requestAsyncId = function (b, a, e) { void 0 === e && (e = 0); if (null !== e && 0 < e) return c.prototype.requestAsyncId.call(this, b, a, e); b.actions.push(this); return b.scheduled || (b.scheduled = wb.setImmediate(b.flush.bind(b, null))) }; a.prototype.recycleAsyncId = function (b, a, e) {
      void 0 === e && (e = 0); if (null !== e && 0 < e || null ===
        e && 0 < this.delay) return c.prototype.recycleAsyncId.call(this, b, a, e); 0 === b.actions.length && (wb.clearImmediate(a), b.scheduled = void 0)
      }; return a
    }(ea), pa = new (function (c) { function a() { return null !== c && c.apply(this, arguments) || this } h(a, c); a.prototype.flush = function (b) { this.active = !0; this.scheduled = void 0; var a = this.actions, c, f = -1, g = a.length; b = b || a.shift(); do if (c = b.execute(b.state, b.delay)) break; while (++f < g && (b = a.shift())); this.active = !1; if (c) { for (; ++f < g && (b = a.shift());)b.unsubscribe(); throw c; } }; return a }(O))(Wc),
      y = new O(ea), Xc = function (c) {
        function a(b, a) { var d = c.call(this, b, a) || this; d.scheduler = b; d.work = a; return d } h(a, c); a.prototype.requestAsyncId = function (b, a, e) { void 0 === e && (e = 0); if (null !== e && 0 < e) return c.prototype.requestAsyncId.call(this, b, a, e); b.actions.push(this); return b.scheduled || (b.scheduled = requestAnimationFrame(function () { return b.flush(null) })) }; a.prototype.recycleAsyncId = function (b, a, e) {
        void 0 === e && (e = 0); if (null !== e && 0 < e || null === e && 0 < this.delay) return c.prototype.recycleAsyncId.call(this, b, a,
          e); 0 === b.actions.length && (cancelAnimationFrame(a), b.scheduled = void 0)
        }; return a
      }(ea), Yc = new (function (c) { function a() { return null !== c && c.apply(this, arguments) || this } h(a, c); a.prototype.flush = function (b) { this.active = !0; this.scheduled = void 0; var a = this.actions, c, f = -1, g = a.length; b = b || a.shift(); do if (c = b.execute(b.state, b.delay)) break; while (++f < g && (b = a.shift())); this.active = !1; if (c) { for (; ++f < g && (b = a.shift());)b.unsubscribe(); throw c; } }; return a }(O))(Xc), xb = function (c) {
        function a(b, a) {
        void 0 === b && (b = Ga);
          void 0 === a && (a = Number.POSITIVE_INFINITY); var d = c.call(this, b, function () { return d.frame }) || this; d.maxFrames = a; d.frame = 0; d.index = -1; return d
        } h(a, c); a.prototype.flush = function () { for (var b = this.actions, a = this.maxFrames, c, f; (f = b[0]) && f.delay <= a && !(b.shift(), this.frame = f.delay, c = f.execute(f.state, f.delay));); if (c) { for (; f = b.shift();)f.unsubscribe(); throw c; } }; a.frameTimeFactor = 10; return a
      }(O), Ga = function (c) {
        function a(b, a, e) {
        void 0 === e && (e = b.index += 1); var d = c.call(this, b, a) || this; d.scheduler = b; d.work = a;
          d.index = e; d.active = !0; d.index = b.index = e; return d
        } h(a, c); a.prototype.schedule = function (b, d) { void 0 === d && (d = 0); if (!this.id) return c.prototype.schedule.call(this, b, d); this.active = !1; var e = new a(this.scheduler, this.work); this.add(e); return e.schedule(b, d) }; a.prototype.requestAsyncId = function (b, c, e) { void 0 === e && (e = 0); this.delay = b.frame + e; b = b.actions; b.push(this); b.sort(a.sortActions); return !0 }; a.prototype.recycleAsyncId = function (b, a, c) { }; a.prototype._execute = function (b, a) {
          if (!0 === this.active) return c.prototype._execute.call(this,
            b, a)
        }; a.sortActions = function (b, a) { return b.delay === a.delay ? b.index === a.index ? 0 : b.index > a.index ? 1 : -1 : b.delay > a.delay ? 1 : -1 }; return a
      }(ea), X = function () { function c() { Error.call(this); this.message = "argument out of range"; this.name = "ArgumentOutOfRangeError"; return this } c.prototype = Object.create(Error.prototype); return c }(), ca = function () { function c() { Error.call(this); this.message = "no elements in sequence"; this.name = "EmptyError"; return this } c.prototype = Object.create(Error.prototype); return c }(), yb = function () {
        function c() {
          Error.call(this);
          this.message = "Timeout has occurred"; this.name = "TimeoutError"; return this
        } c.prototype = Object.create(Error.prototype); return c
      }(), Ob = function () { function c(a, b) { this.project = a; this.thisArg = b } c.prototype.call = function (a, b) { return b.subscribe(new Zc(a, this.project, this.thisArg)) }; return c }(), Zc = function (c) {
        function a(b, a, e) { b = c.call(this, b) || this; b.project = a; b.count = 0; b.thisArg = e || b; return b } h(a, c); a.prototype._next = function (b) {
          var a; try { a = this.project.call(this.thisArg, b, this.count++) } catch (e) {
            this.destination.error(e);
            return
          } this.destination.next(a)
        }; return a
      }(m), q = function (c) { function a() { return null !== c && c.apply(this, arguments) || this } h(a, c); a.prototype.notifyNext = function (b, a, c, f, g) { this.destination.next(a) }; a.prototype.notifyError = function (b, a) { this.destination.error(b) }; a.prototype.notifyComplete = function (b) { this.destination.complete() }; return a }(m), G = function (c) {
        function a(b, a, e) { var d = c.call(this) || this; d.parent = b; d.outerValue = a; d.outerIndex = e; d.index = 0; return d } h(a, c); a.prototype._next = function (b) {
          this.parent.notifyNext(this.outerValue,
            b, this.outerIndex, this.index++, this)
        }; a.prototype._error = function (b) { this.parent.notifyError(b, this); this.unsubscribe() }; a.prototype._complete = function () { this.parent.notifyComplete(this); this.unsubscribe() }; return a
      }(m), $c = function (c) { return function (a) { c.then(function (b) { a.closed || (a.next(b), a.complete()) }, function (b) { return a.error(b) }).then(null, Q); return a } }, E; E = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"; var ad = function (c) {
        return function (a) {
          var b = c[E](); do {
            var d =
              b.next(); if (d.done) { a.complete(); break } a.next(d.value); if (a.closed) break
          } while (1); "function" === typeof b.return && a.add(function () { b.return && b.return() }); return a
        }
      }, bd = function (c) { return function (a) { var b = c[U](); if ("function" !== typeof b.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable"); return b.subscribe(a) } }, Ua = function (c) { return c && "number" === typeof c.length && "function" !== typeof c }, ha = function (c) {
        if (c && "function" === typeof c[U]) return bd(c); if (Ua(c)) return Na(c);
        if (Sa(c)) return $c(c); if (c && "function" === typeof c[E]) return ad(c); c = ra(c) ? "an invalid object" : "'" + c + "'"; throw new TypeError("You provided " + c + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.");
      }, zb = {}, Ha = function () { function c(a) { this.resultSelector = a } c.prototype.call = function (a, b) { return b.subscribe(new cd(a, this.resultSelector)) }; return c }(), cd = function (c) {
        function a(b, a) { b = c.call(this, b) || this; b.resultSelector = a; b.active = 0; b.values = []; b.observables = []; return b }
        h(a, c); a.prototype._next = function (b) { this.values.push(zb); this.observables.push(b) }; a.prototype._complete = function () { var b = this.observables, a = b.length; if (0 === a) this.destination.complete(); else { this.toRespond = this.active = a; for (var c = 0; c < a; c++) { var f = b[c]; this.add(p(this, f, f, c)) } } }; a.prototype.notifyComplete = function (b) { 0 === --this.active && this.destination.complete() }; a.prototype.notifyNext = function (b, a, c, f, g) {
          b = this.values; f = b[c]; f = this.toRespond ? f === zb ? --this.toRespond : this.toRespond : 0; b[c] = a; 0 ===
            f && (this.resultSelector ? this._tryResultSelector(b) : this.destination.next(b.slice()))
        }; a.prototype._tryResultSelector = function (b) { var a; try { a = this.resultSelector.apply(this, b) } catch (e) { this.destination.error(e); return } this.destination.next(a) }; return a
      }(q), Wb = function () { function c(a, b) { void 0 === b && (b = Number.POSITIVE_INFINITY); this.project = a; this.concurrent = b } c.prototype.call = function (a, b) { return b.subscribe(new dd(a, this.project, this.concurrent)) }; return c }(), dd = function (c) {
        function a(b, a, e) {
        void 0 ===
          e && (e = Number.POSITIVE_INFINITY); b = c.call(this, b) || this; b.project = a; b.concurrent = e; b.hasCompleted = !1; b.buffer = []; b.active = 0; b.index = 0; return b
        } h(a, c); a.prototype._next = function (b) { this.active < this.concurrent ? this._tryNext(b) : this.buffer.push(b) }; a.prototype._tryNext = function (b) { var a, c = this.index++; try { a = this.project(b, c) } catch (f) { this.destination.error(f); return } this.active++; this._innerSub(a, b, c) }; a.prototype._innerSub = function (b, a, c) {
          a = new G(this, a, c); c = this.destination; c.add(a); b = p(this, b, void 0,
            void 0, a); b !== a && c.add(b)
        }; a.prototype._complete = function () { this.hasCompleted = !0; 0 === this.active && 0 === this.buffer.length && this.destination.complete(); this.unsubscribe() }; a.prototype.notifyNext = function (b, a, c, f, g) { this.destination.next(a) }; a.prototype.notifyComplete = function (b) { var a = this.buffer; this.remove(b); this.active--; 0 < a.length ? this._next(a.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete() }; return a
      }(q), Ab = new n(D), cc = function () {
        function c(a, b) {
        this.predicate = a; this.thisArg =
          b
        } c.prototype.call = function (a, b) { return b.subscribe(new ed(a, this.predicate, this.thisArg)) }; return c
      }(), ed = function (c) { function a(b, a, e) { b = c.call(this, b) || this; b.predicate = a; b.thisArg = e; b.count = 0; return b } h(a, c); a.prototype._next = function (b) { var a; try { a = this.predicate.call(this.thisArg, b, this.count++) } catch (e) { this.destination.error(e); return } a && this.destination.next(b) }; return a }(m), dc = function () { function c() { } c.prototype.call = function (a, b) { return b.subscribe(new fd(a)) }; return c }(), fd = function (c) {
        function a(b) {
          b =
          c.call(this, b) || this; b.hasFirst = !1; b.observables = []; b.subscriptions = []; return b
        } h(a, c); a.prototype._next = function (b) { this.observables.push(b) }; a.prototype._complete = function () { var b = this.observables, a = b.length; if (0 === a) this.destination.complete(); else { for (var c = 0; c < a && !this.hasFirst; c++) { var f = b[c], f = p(this, f, f, c); this.subscriptions && this.subscriptions.push(f); this.add(f) } this.observables = null } }; a.prototype.notifyNext = function (b, a, c, f, g) {
          if (!this.hasFirst) {
          this.hasFirst = !0; for (b = 0; b < this.subscriptions.length; b++)b !==
            c && (f = this.subscriptions[b], f.unsubscribe(), this.remove(f)); this.subscriptions = null
          } this.destination.next(a)
        }; return a
      }(q), db = function () { function c(a) { this.resultSelector = a } c.prototype.call = function (a, b) { return b.subscribe(new gd(a, this.resultSelector)) }; return c }(), gd = function (c) {
        function a(b, a, e) { void 0 === e && (e = Object.create(null)); b = c.call(this, b) || this; b.iterators = []; b.active = 0; b.resultSelector = "function" === typeof a ? a : null; b.values = e; return b } h(a, c); a.prototype._next = function (b) {
          var a = this.iterators;
          x(b) ? a.push(new hd(b)) : "function" === typeof b[E] ? a.push(new id(b[E]())) : a.push(new jd(this.destination, this, b))
        }; a.prototype._complete = function () { var b = this.iterators, a = b.length; this.unsubscribe(); if (0 === a) this.destination.complete(); else { this.active = a; for (var c = 0; c < a; c++) { var f = b[c]; f.stillUnsubscribed ? this.destination.add(f.subscribe(f, c)) : this.active-- } } }; a.prototype.notifyInactive = function () { this.active--; 0 === this.active && this.destination.complete() }; a.prototype.checkIterators = function () {
          for (var b =
            this.iterators, a = b.length, c = this.destination, f = 0; f < a; f++) { var g = b[f]; if ("function" === typeof g.hasValue && !g.hasValue()) return } for (var l = !1, h = [], f = 0; f < a; f++) { var g = b[f], k = g.next(); g.hasCompleted() && (l = !0); if (k.done) { c.complete(); return } h.push(k.value) } this.resultSelector ? this._tryresultSelector(h) : c.next(h); l && c.complete()
        }; a.prototype._tryresultSelector = function (b) { var a; try { a = this.resultSelector.apply(this, b) } catch (e) { this.destination.error(e); return } this.destination.next(a) }; return a
      }(m), id = function () {
        function c(a) {
        this.iterator =
          a; this.nextResult = a.next()
        } c.prototype.hasValue = function () { return !0 }; c.prototype.next = function () { var a = this.nextResult; this.nextResult = this.iterator.next(); return a }; c.prototype.hasCompleted = function () { var a = this.nextResult; return a && a.done }; return c
      }(), hd = function () {
        function c(a) { this.array = a; this.length = this.index = 0; this.length = a.length } c.prototype[E] = function () { return this }; c.prototype.next = function (a) { a = this.index++; var b = this.array; return a < this.length ? { value: b[a], done: !1 } : { value: null, done: !0 } };
        c.prototype.hasValue = function () { return this.array.length > this.index }; c.prototype.hasCompleted = function () { return this.array.length === this.index }; return c
      }(), jd = function (c) {
        function a(b, a, e) { b = c.call(this, b) || this; b.parent = a; b.observable = e; b.stillUnsubscribed = !0; b.buffer = []; b.isComplete = !1; return b } h(a, c); a.prototype[E] = function () { return this }; a.prototype.next = function () { var b = this.buffer; return 0 === b.length && this.isComplete ? { value: null, done: !0 } : { value: b.shift(), done: !1 } }; a.prototype.hasValue = function () {
          return 0 <
            this.buffer.length
        }; a.prototype.hasCompleted = function () { return 0 === this.buffer.length && this.isComplete }; a.prototype.notifyComplete = function () { 0 < this.buffer.length ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete() }; a.prototype.notifyNext = function (b, a, c, f, g) { this.buffer.push(a); this.parent.checkIterators() }; a.prototype.subscribe = function (b, a) { return p(this, this.observable, this, a) }; return a
      }(q), gc = function () {
        function c(a) { this.durationSelector = a } c.prototype.call = function (a,
          b) { return b.subscribe(new kd(a, this.durationSelector)) }; return c
      }(), kd = function (c) {
        function a(b, a) { b = c.call(this, b) || this; b.durationSelector = a; b.hasValue = !1; return b } h(a, c); a.prototype._next = function (b) { this.value = b; this.hasValue = !0; if (!this.throttled) { var a = void 0; try { var c = this.durationSelector, a = c(b) } catch (f) { return this.destination.error(f) } b = p(this, a); !b || b.closed ? this.clearThrottle() : this.add(this.throttled = b) } }; a.prototype.clearThrottle = function () {
          var b = this.value, a = this.hasValue, c = this.throttled;
          c && (this.remove(c), this.throttled = null, c.unsubscribe()); a && (this.value = null, this.hasValue = !1, this.destination.next(b))
        }; a.prototype.notifyNext = function (b, a, c, f) { this.clearThrottle() }; a.prototype.notifyComplete = function () { this.clearThrottle() }; return a
      }(q), md = function () { function c(a) { this.closingNotifier = a } c.prototype.call = function (a, b) { return b.subscribe(new ld(a, this.closingNotifier)) }; return c }(), ld = function (c) {
        function a(b, a) { b = c.call(this, b) || this; b.buffer = []; b.add(p(b, a)); return b } h(a, c); a.prototype._next =
          function (b) { this.buffer.push(b) }; a.prototype.notifyNext = function (b, a, c, f, g) { b = this.buffer; this.buffer = []; this.destination.next(b) }; return a
      }(q), pd = function () { function c(a, b) { this.bufferSize = a; this.subscriberClass = (this.startBufferEvery = b) && a !== b ? nd : od } c.prototype.call = function (a, b) { return b.subscribe(new this.subscriberClass(a, this.bufferSize, this.startBufferEvery)) }; return c }(), od = function (c) {
        function a(b, a) { b = c.call(this, b) || this; b.bufferSize = a; b.buffer = []; return b } h(a, c); a.prototype._next = function (b) {
          var a =
            this.buffer; a.push(b); a.length == this.bufferSize && (this.destination.next(a), this.buffer = [])
        }; a.prototype._complete = function () { var b = this.buffer; 0 < b.length && this.destination.next(b); c.prototype._complete.call(this) }; return a
      }(m), nd = function (c) {
        function a(b, a, e) { b = c.call(this, b) || this; b.bufferSize = a; b.startBufferEvery = e; b.buffers = []; b.count = 0; return b } h(a, c); a.prototype._next = function (b) {
          var a = this.bufferSize, c = this.startBufferEvery, f = this.buffers, g = this.count; this.count++; 0 === g % c && f.push([]); for (c =
            f.length; c--;)g = f[c], g.push(b), g.length === a && (f.splice(c, 1), this.destination.next(g))
        }; a.prototype._complete = function () { for (var b = this.buffers, a = this.destination; 0 < b.length;) { var e = b.shift(); 0 < e.length && a.next(e) } c.prototype._complete.call(this) }; return a
      }(m), rd = function () {
        function c(a, b, c, e) { this.bufferTimeSpan = a; this.bufferCreationInterval = b; this.maxBufferSize = c; this.scheduler = e } c.prototype.call = function (a, b) {
          return b.subscribe(new qd(a, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize,
            this.scheduler))
        }; return c
      }(), sd = function () { return function () { this.buffer = [] } }(), qd = function (c) {
        function a(b, a, e, f, g) {
          b = c.call(this, b) || this; b.bufferTimeSpan = a; b.bufferCreationInterval = e; b.maxBufferSize = f; b.scheduler = g; b.contexts = []; f = b.openContext(); b.timespanOnly = null == e || 0 > e; if (b.timespanOnly) b.add(f.closeAction = g.schedule(fb, a, { subscriber: b, context: f, bufferTimeSpan: a })); else {
            var d = { bufferTimeSpan: a, bufferCreationInterval: e, subscriber: b, scheduler: g }; b.add(f.closeAction = g.schedule(gb, a, {
              subscriber: b,
              context: f
            })); b.add(g.schedule(hc, e, d))
          } return b
        } h(a, c); a.prototype._next = function (b) { for (var a = this.contexts, c = a.length, f, g = 0; g < c; g++) { var l = a[g], h = l.buffer; h.push(b); h.length == this.maxBufferSize && (f = l) } if (f) this.onBufferFull(f) }; a.prototype._error = function (b) { this.contexts.length = 0; c.prototype._error.call(this, b) }; a.prototype._complete = function () { for (var b = this.contexts, a = this.destination; 0 < b.length;) { var e = b.shift(); a.next(e.buffer) } c.prototype._complete.call(this) }; a.prototype._unsubscribe = function () {
        this.contexts =
          null
        }; a.prototype.onBufferFull = function (b) { this.closeContext(b); b = b.closeAction; b.unsubscribe(); this.remove(b); if (!this.closed && this.timespanOnly) { b = this.openContext(); var a = this.bufferTimeSpan; this.add(b.closeAction = this.scheduler.schedule(fb, a, { subscriber: this, context: b, bufferTimeSpan: a })) } }; a.prototype.openContext = function () { var b = new sd; this.contexts.push(b); return b }; a.prototype.closeContext = function (b) {
          this.destination.next(b.buffer); var a = this.contexts; 0 <= (a ? a.indexOf(b) : -1) && a.splice(a.indexOf(b),
            1)
        }; return a
      }(m), ud = function () { function c(a, b) { this.openings = a; this.closingSelector = b } c.prototype.call = function (a, b) { return b.subscribe(new td(a, this.openings, this.closingSelector)) }; return c }(), td = function (c) {
        function a(b, a, e) { b = c.call(this, b) || this; b.openings = a; b.closingSelector = e; b.contexts = []; b.add(p(b, a)); return b } h(a, c); a.prototype._next = function (b) { for (var a = this.contexts, c = a.length, f = 0; f < c; f++)a[f].buffer.push(b) }; a.prototype._error = function (b) {
          for (var a = this.contexts; 0 < a.length;) {
            var e = a.shift();
            e.subscription.unsubscribe(); e.buffer = null; e.subscription = null
          } this.contexts = null; c.prototype._error.call(this, b)
        }; a.prototype._complete = function () { for (var b = this.contexts; 0 < b.length;) { var a = b.shift(); this.destination.next(a.buffer); a.subscription.unsubscribe(); a.buffer = null; a.subscription = null } this.contexts = null; c.prototype._complete.call(this) }; a.prototype.notifyNext = function (b, a, c, f, g) { b ? this.closeBuffer(b) : this.openBuffer(a) }; a.prototype.notifyComplete = function (b) { this.closeBuffer(b.context) };
        a.prototype.openBuffer = function (b) { try { var a = this.closingSelector.call(this, b); a && this.trySubscribe(a) } catch (e) { this._error(e) } }; a.prototype.closeBuffer = function (b) { var a = this.contexts; if (a && b) { var c = b.subscription; this.destination.next(b.buffer); a.splice(a.indexOf(b), 1); this.remove(c); c.unsubscribe() } }; a.prototype.trySubscribe = function (b) { var a = this.contexts, c = new t, f = { buffer: [], subscription: c }; a.push(f); b = p(this, b, f); !b || b.closed ? this.closeBuffer(f) : (b.context = f, this.add(b), c.add(b)) }; return a
      }(q),
        wd = function () { function c(a) { this.closingSelector = a } c.prototype.call = function (a, b) { return b.subscribe(new vd(a, this.closingSelector)) }; return c }(), vd = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b.closingSelector = a; b.subscribing = !1; b.openBuffer(); return b } h(a, c); a.prototype._next = function (b) { this.buffer.push(b) }; a.prototype._complete = function () { var b = this.buffer; b && this.destination.next(b); c.prototype._complete.call(this) }; a.prototype._unsubscribe = function () {
          this.buffer = null; this.subscribing =
            !1
          }; a.prototype.notifyNext = function (b, a, c, f, g) { this.openBuffer() }; a.prototype.notifyComplete = function () { this.subscribing ? this.complete() : this.openBuffer() }; a.prototype.openBuffer = function () { var b = this.closingSubscription; b && (this.remove(b), b.unsubscribe()); (b = this.buffer) && this.destination.next(b); this.buffer = []; var a; try { var c = this.closingSelector; a = c() } catch (f) { return this.error(f) } this.closingSubscription = b = new t; this.add(b); this.subscribing = !0; b.add(p(this, a)); this.subscribing = !1 }; return a
        }(q),
        yd = function () { function c(a) { this.selector = a } c.prototype.call = function (a, b) { return b.subscribe(new xd(a, this.selector, this.caught)) }; return c }(), xd = function (c) {
          function a(b, a, e) { b = c.call(this, b) || this; b.selector = a; b.caught = e; return b } h(a, c); a.prototype.error = function (b) { if (!this.isStopped) { var a = void 0; try { a = this.selector(b, this.caught) } catch (e) { c.prototype.error.call(this, e); return } this._unsubscribeAndRecycle(); b = new G(this, void 0, void 0); this.add(b); a = p(this, a, void 0, void 0, b); a !== b && this.add(a) } };
          return a
        }(q), Ad = function () { function c(a, b) { this.predicate = a; this.source = b } c.prototype.call = function (a, b) { return b.subscribe(new zd(a, this.predicate, this.source)) }; return c }(), zd = function (c) {
          function a(b, a, e) { b = c.call(this, b) || this; b.predicate = a; b.source = e; b.count = 0; b.index = 0; return b } h(a, c); a.prototype._next = function (b) { this.predicate ? this._tryPredicate(b) : this.count++ }; a.prototype._tryPredicate = function (b) {
            var a; try { a = this.predicate(b, this.index++, this.source) } catch (e) {
              this.destination.error(e);
              return
            } a && this.count++
          }; a.prototype._complete = function () { this.destination.next(this.count); this.destination.complete() }; return a
        }(m), Cd = function () { function c(a) { this.durationSelector = a } c.prototype.call = function (a, b) { return b.subscribe(new Bd(a, this.durationSelector)) }; return c }(), Bd = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b.durationSelector = a; b.hasValue = !1; b.durationSubscription = null; return b } h(a, c); a.prototype._next = function (b) {
            try {
              var a = this.durationSelector.call(this, b); a && this._tryNext(b,
                a)
            } catch (e) { this.destination.error(e) }
          }; a.prototype._complete = function () { this.emitValue(); this.destination.complete() }; a.prototype._tryNext = function (b, a) { var c = this.durationSubscription; this.value = b; this.hasValue = !0; c && (c.unsubscribe(), this.remove(c)); (c = p(this, a)) && !c.closed && this.add(this.durationSubscription = c) }; a.prototype.notifyNext = function (b, a, c, f, g) { this.emitValue() }; a.prototype.notifyComplete = function () { this.emitValue() }; a.prototype.emitValue = function () {
            if (this.hasValue) {
              var b = this.value,
              a = this.durationSubscription; a && (this.durationSubscription = null, a.unsubscribe(), this.remove(a)); this.value = null; this.hasValue = !1; c.prototype._next.call(this, b)
            }
          }; return a
        }(q), Ed = function () { function c(a, b) { this.dueTime = a; this.scheduler = b } c.prototype.call = function (a, b) { return b.subscribe(new Dd(a, this.dueTime, this.scheduler)) }; return c }(), Dd = function (c) {
          function a(b, a, e) { b = c.call(this, b) || this; b.dueTime = a; b.scheduler = e; b.debouncedSubscription = null; b.lastValue = null; b.hasValue = !1; return b } h(a, c); a.prototype._next =
            function (b) { this.clearDebounce(); this.lastValue = b; this.hasValue = !0; this.add(this.debouncedSubscription = this.scheduler.schedule(ic, this.dueTime, this)) }; a.prototype._complete = function () { this.debouncedNext(); this.destination.complete() }; a.prototype.debouncedNext = function () { this.clearDebounce(); if (this.hasValue) { var b = this.lastValue; this.lastValue = null; this.hasValue = !1; this.destination.next(b) } }; a.prototype.clearDebounce = function () {
              var b = this.debouncedSubscription; null !== b && (this.remove(b), b.unsubscribe(),
                this.debouncedSubscription = null)
            }; return a
        }(m), jc = function () { function c(a) { this.defaultValue = a } c.prototype.call = function (a, b) { return b.subscribe(new Fd(a, this.defaultValue)) }; return c }(), Fd = function (c) { function a(b, a) { b = c.call(this, b) || this; b.defaultValue = a; b.isEmpty = !0; return b } h(a, c); a.prototype._next = function (b) { this.isEmpty = !1; this.destination.next(b) }; a.prototype._complete = function () { this.isEmpty && this.destination.next(this.defaultValue); this.destination.complete() }; return a }(m), Hd = function () {
          function c(a,
            b) { this.delay = a; this.scheduler = b } c.prototype.call = function (a, b) { return b.subscribe(new Gd(a, this.delay, this.scheduler)) }; return c
        }(), Gd = function (c) {
          function a(b, a, e) { b = c.call(this, b) || this; b.delay = a; b.scheduler = e; b.queue = []; b.active = !1; b.errored = !1; return b } h(a, c); a.dispatch = function (b) {
            for (var a = b.source, c = a.queue, f = b.scheduler, g = b.destination; 0 < c.length && 0 >= c[0].time - f.now();)c.shift().notification.observe(g); 0 < c.length ? (a = Math.max(0, c[0].time - f.now()), this.schedule(b, a)) : (this.unsubscribe(), a.active =
              !1)
          }; a.prototype._schedule = function (b) { this.active = !0; this.destination.add(b.schedule(a.dispatch, this.delay, { source: this, destination: this.destination, scheduler: b })) }; a.prototype.scheduleNotification = function (b) { if (!0 !== this.errored) { var a = this.scheduler; b = new Id(a.now() + this.delay, b); this.queue.push(b); !1 === this.active && this._schedule(a) } }; a.prototype._next = function (b) { this.scheduleNotification(w.createNext(b)) }; a.prototype._error = function (b) {
          this.errored = !0; this.queue = []; this.destination.error(b);
            this.unsubscribe()
          }; a.prototype._complete = function () { this.scheduleNotification(w.createComplete()); this.unsubscribe() }; return a
        }(m), Id = function () { return function (c, a) { this.time = c; this.notification = a } }(), Bb = function () { function c(a) { this.delayDurationSelector = a } c.prototype.call = function (a, b) { return b.subscribe(new Jd(a, this.delayDurationSelector)) }; return c }(), Jd = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b.delayDurationSelector = a; b.completed = !1; b.delayNotifierSubscriptions = []; b.index = 0; return b }
          h(a, c); a.prototype.notifyNext = function (b, a, c, f, g) { this.destination.next(b); this.removeSubscription(g); this.tryComplete() }; a.prototype.notifyError = function (b, a) { this._error(b) }; a.prototype.notifyComplete = function (b) { (b = this.removeSubscription(b)) && this.destination.next(b); this.tryComplete() }; a.prototype._next = function (b) { var a = this.index++; try { var c = this.delayDurationSelector(b, a); c && this.tryDelay(c, b) } catch (f) { this.destination.error(f) } }; a.prototype._complete = function () {
          this.completed = !0; this.tryComplete();
            this.unsubscribe()
          }; a.prototype.removeSubscription = function (b) { b.unsubscribe(); var a = this.delayNotifierSubscriptions.indexOf(b); -1 !== a && this.delayNotifierSubscriptions.splice(a, 1); return b.outerValue }; a.prototype.tryDelay = function (b, a) { (b = p(this, b, a)) && !b.closed && (this.destination.add(b), this.delayNotifierSubscriptions.push(b)) }; a.prototype.tryComplete = function () { this.completed && 0 === this.delayNotifierSubscriptions.length && this.destination.complete() }; return a
        }(q), Ld = function (c) {
          function a(b, a) {
            var d =
              c.call(this) || this; d.source = b; d.subscriptionDelay = a; return d
          } h(a, c); a.prototype._subscribe = function (b) { this.subscriptionDelay.subscribe(new Kd(b, this.source)) }; return a
        }(n), Kd = function (c) {
          function a(b, a) { var d = c.call(this) || this; d.parent = b; d.source = a; d.sourceSubscribed = !1; return d } h(a, c); a.prototype._next = function (b) { this.subscribeToSource() }; a.prototype._error = function (b) { this.unsubscribe(); this.parent.error(b) }; a.prototype._complete = function () { this.unsubscribe(); this.subscribeToSource() }; a.prototype.subscribeToSource =
            function () { this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent)) }; return a
        }(m), Nd = function () { function c() { } c.prototype.call = function (a, b) { return b.subscribe(new Md(a)) }; return c }(), Md = function (c) { function a(b) { return c.call(this, b) || this } h(a, c); a.prototype._next = function (b) { b.observe(this.destination) }; return a }(m), Pd = function () {
          function c(a, b) { this.keySelector = a; this.flushes = b } c.prototype.call = function (a, b) {
            return b.subscribe(new Od(a, this.keySelector,
              this.flushes))
          }; return c
        }(), Od = function (c) {
          function a(b, a, e) { b = c.call(this, b) || this; b.keySelector = a; b.values = new Set; e && b.add(p(b, e)); return b } h(a, c); a.prototype.notifyNext = function (b, a, c, f, g) { this.values.clear() }; a.prototype.notifyError = function (b, a) { this._error(b) }; a.prototype._next = function (b) { this.keySelector ? this._useKeySelector(b) : this._finalizeNext(b, b) }; a.prototype._useKeySelector = function (b) {
            var a, c = this.destination; try { a = this.keySelector(b) } catch (f) { c.error(f); return } this._finalizeNext(a,
              b)
          }; a.prototype._finalizeNext = function (b, a) { var c = this.values; c.has(b) || (c.add(b), this.destination.next(a)) }; return a
        }(q), kc = function () { function c(a, b) { this.compare = a; this.keySelector = b } c.prototype.call = function (a, b) { return b.subscribe(new Qd(a, this.compare, this.keySelector)) }; return c }(), Qd = function (c) {
          function a(b, a, e) { b = c.call(this, b) || this; b.keySelector = e; b.hasKey = !1; "function" === typeof a && (b.compare = a); return b } h(a, c); a.prototype.compare = function (b, a) { return b === a }; a.prototype._next = function (b) {
            var a;
            try { var c = this.keySelector; a = c ? c(b) : b } catch (g) { return this.destination.error(g) } c = !1; if (this.hasKey) try { var f = this.compare, c = f(this.key, a) } catch (g) { return this.destination.error(g) } else this.hasKey = !0; c || (this.key = a, this.destination.next(b))
          }; return a
        }(m), mc = function () { function c(a) { this.errorFactory = a } c.prototype.call = function (a, b) { return b.subscribe(new Rd(a, this.errorFactory)) }; return c }(), Rd = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b.errorFactory = a; b.hasValue = !1; return b } h(a, c); a.prototype._next =
            function (b) { this.hasValue = !0; this.destination.next(b) }; a.prototype._complete = function () { if (this.hasValue) return this.destination.complete(); var b = void 0; try { b = this.errorFactory() } catch (d) { b = d } this.destination.error(b) }; return a
        }(m), nc = function () { function c(a) { this.total = a; if (0 > this.total) throw new X; } c.prototype.call = function (a, b) { return b.subscribe(new Sd(a, this.total)) }; return c }(), Sd = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b.total = a; b.count = 0; return b } h(a, c); a.prototype._next = function (b) {
            var a =
              this.total, c = ++this.count; c <= a && (this.destination.next(b), c === a && (this.destination.complete(), this.unsubscribe()))
          }; return a
        }(m), Ud = function () { function c(a, b, c) { this.predicate = a; this.thisArg = b; this.source = c } c.prototype.call = function (a, b) { return b.subscribe(new Td(a, this.predicate, this.thisArg, this.source)) }; return c }(), Td = function (c) {
          function a(b, a, e, f) { b = c.call(this, b) || this; b.predicate = a; b.thisArg = e; b.source = f; b.index = 0; b.thisArg = e || b; return b } h(a, c); a.prototype.notifyComplete = function (b) {
            this.destination.next(b);
            this.destination.complete()
          }; a.prototype._next = function (b) { var a = !1; try { a = this.predicate.call(this.thisArg, b, this.index++, this.source) } catch (e) { this.destination.error(e); return } a || this.notifyComplete(!1) }; a.prototype._complete = function () { this.notifyComplete(!0) }; return a
        }(m), Wd = function () { function c() { } c.prototype.call = function (a, b) { return b.subscribe(new Vd(a)) }; return c }(), Vd = function (c) {
          function a(b) { b = c.call(this, b) || this; b.hasCompleted = !1; b.hasSubscription = !1; return b } h(a, c); a.prototype._next =
            function (b) { this.hasSubscription || (this.hasSubscription = !0, this.add(p(this, b))) }; a.prototype._complete = function () { this.hasCompleted = !0; this.hasSubscription || this.destination.complete() }; a.prototype.notifyComplete = function (b) { this.remove(b); this.hasSubscription = !1; this.hasCompleted && this.destination.complete() }; return a
        }(q), oc = function () { function c(a) { this.project = a } c.prototype.call = function (a, b) { return b.subscribe(new Xd(a, this.project)) }; return c }(), Xd = function (c) {
          function a(b, a) {
            b = c.call(this, b) ||
            this; b.project = a; b.hasSubscription = !1; b.hasCompleted = !1; b.index = 0; return b
          } h(a, c); a.prototype._next = function (b) { this.hasSubscription || this.tryNext(b) }; a.prototype.tryNext = function (b) { var a, c = this.index++; try { a = this.project(b, c) } catch (f) { this.destination.error(f); return } this.hasSubscription = !0; this._innerSub(a, b, c) }; a.prototype._innerSub = function (b, a, c) { a = new G(this, a, c); c = this.destination; c.add(a); b = p(this, b, void 0, void 0, a); b !== a && c.add(b) }; a.prototype._complete = function () {
          this.hasCompleted = !0; this.hasSubscription ||
            this.destination.complete(); this.unsubscribe()
          }; a.prototype.notifyNext = function (b, a, c, f, g) { this.destination.next(a) }; a.prototype.notifyError = function (b) { this.destination.error(b) }; a.prototype.notifyComplete = function (b) { this.destination.remove(b); this.hasSubscription = !1; this.hasCompleted && this.destination.complete() }; return a
        }(q), Zd = function () {
          function c(a, b, c) { this.project = a; this.concurrent = b; this.scheduler = c } c.prototype.call = function (a, b) {
            return b.subscribe(new Yd(a, this.project, this.concurrent,
              this.scheduler))
          }; return c
        }(), Yd = function (c) {
          function a(b, a, e, f) { b = c.call(this, b) || this; b.project = a; b.concurrent = e; b.scheduler = f; b.index = 0; b.active = 0; b.hasCompleted = !1; e < Number.POSITIVE_INFINITY && (b.buffer = []); return b } h(a, c); a.dispatch = function (b) { b.subscriber.subscribeToProjection(b.result, b.value, b.index) }; a.prototype._next = function (b) {
            var c = this.destination; if (c.closed) this._complete(); else {
              var e = this.index++; if (this.active < this.concurrent) {
                c.next(b); try {
                  var f = this.project, g = f(b, e); this.scheduler ?
                    this.destination.add(this.scheduler.schedule(a.dispatch, 0, { subscriber: this, result: g, value: b, index: e })) : this.subscribeToProjection(g, b, e)
                } catch (l) { c.error(l) }
              } else this.buffer.push(b)
            }
          }; a.prototype.subscribeToProjection = function (b, a, c) { this.active++; this.destination.add(p(this, b, a, c)) }; a.prototype._complete = function () { (this.hasCompleted = !0, 0 === this.active) && this.destination.complete(); this.unsubscribe() }; a.prototype.notifyNext = function (b, a, c, f, g) { this._next(a) }; a.prototype.notifyComplete = function (b) {
            var a =
              this.buffer; this.destination.remove(b); this.active--; a && 0 < a.length && this._next(a.shift()); this.hasCompleted && 0 === this.active && this.destination.complete()
          }; return a
        }(q), ae = function () { function c(a) { this.callback = a } c.prototype.call = function (a, b) { return b.subscribe(new $d(a, this.callback)) }; return c }(), $d = function (c) { function a(b, a) { b = c.call(this, b) || this; b.add(new t(a)); return b } h(a, c); return a }(m), Cb = function () {
          function c(a, b, c, e) { this.predicate = a; this.source = b; this.yieldIndex = c; this.thisArg = e } c.prototype.call =
            function (a, b) { return b.subscribe(new be(a, this.predicate, this.source, this.yieldIndex, this.thisArg)) }; return c
        }(), be = function (c) {
          function a(b, a, e, f, g) { b = c.call(this, b) || this; b.predicate = a; b.source = e; b.yieldIndex = f; b.thisArg = g; b.index = 0; return b } h(a, c); a.prototype.notifyComplete = function (b) { var a = this.destination; a.next(b); a.complete(); this.unsubscribe() }; a.prototype._next = function (b) {
            var a = this.predicate, c = this.thisArg, f = this.index++; try {
              a.call(c || this, b, f, this.source) && this.notifyComplete(this.yieldIndex ?
                f : b)
            } catch (g) { this.destination.error(g) }
          }; a.prototype._complete = function () { this.notifyComplete(this.yieldIndex ? -1 : void 0) }; return a
        }(m), de = function () { function c() { } c.prototype.call = function (a, b) { return b.subscribe(new ce(a)) }; return c }(), ce = function (c) { function a() { return null !== c && c.apply(this, arguments) || this } h(a, c); a.prototype._next = function (b) { }; return a }(m), fe = function () { function c() { } c.prototype.call = function (a, b) { return b.subscribe(new ee(a)) }; return c }(), ee = function (c) {
          function a(b) {
            return c.call(this,
              b) || this
          } h(a, c); a.prototype.notifyComplete = function (b) { var a = this.destination; a.next(b); a.complete() }; a.prototype._next = function (b) { this.notifyComplete(!1) }; a.prototype._complete = function () { this.notifyComplete(!0) }; return a
        }(m), pc = function () { function c(a) { this.total = a; if (0 > this.total) throw new X; } c.prototype.call = function (a, b) { return b.subscribe(new ge(a, this.total)) }; return c }(), ge = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b.total = a; b.ring = []; b.count = 0; return b } h(a, c); a.prototype._next =
            function (b) { var a = this.ring, c = this.total, f = this.count++; a.length < c ? a.push(b) : a[f % c] = b }; a.prototype._complete = function () { var b = this.destination, a = this.count; if (0 < a) for (var c = this.count >= this.total ? this.total : this.count, f = this.ring, g = 0; g < c; g++) { var l = a++ % c; b.next(f[l]) } b.complete() }; return a
        }(m), ie = function () { function c(a) { this.value = a } c.prototype.call = function (a, b) { return b.subscribe(new he(a, this.value)) }; return c }(), he = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b.value = a; return b } h(a, c);
          a.prototype._next = function (b) { this.destination.next(this.value) }; return a
        }(m), ke = function () { function c() { } c.prototype.call = function (a, b) { return b.subscribe(new je(a)) }; return c }(), je = function (c) {
          function a(b) { return c.call(this, b) || this } h(a, c); a.prototype._next = function (b) { this.destination.next(w.createNext(b)) }; a.prototype._error = function (b) { var a = this.destination; a.next(w.createError(b)); a.complete() }; a.prototype._complete = function () { var b = this.destination; b.next(w.createComplete()); b.complete() };
          return a
        }(m), qc = function () { function c(a, b, c) { void 0 === c && (c = !1); this.accumulator = a; this.seed = b; this.hasSeed = c } c.prototype.call = function (a, b) { return b.subscribe(new le(a, this.accumulator, this.seed, this.hasSeed)) }; return c }(), le = function (c) {
          function a(b, a, e, f) { b = c.call(this, b) || this; b.accumulator = a; b._seed = e; b.hasSeed = f; b.index = 0; return b } h(a, c); Object.defineProperty(a.prototype, "seed", { get: function () { return this._seed }, set: function (b) { this.hasSeed = !0; this._seed = b }, enumerable: !0, configurable: !0 }); a.prototype._next =
            function (b) { if (this.hasSeed) return this._tryNext(b); this.seed = b; this.destination.next(b) }; a.prototype._tryNext = function (b) { var a = this.index++, c; try { c = this.accumulator(this.seed, b, a) } catch (f) { this.destination.error(f) } this.seed = c; this.destination.next(c) }; return a
        }(m), ne = function () { function c(a, b, c) { this.accumulator = a; this.seed = b; this.concurrent = c } c.prototype.call = function (a, b) { return b.subscribe(new me(a, this.accumulator, this.seed, this.concurrent)) }; return c }(), me = function (c) {
          function a(b, a, e, f) {
            b =
            c.call(this, b) || this; b.accumulator = a; b.acc = e; b.concurrent = f; b.hasValue = !1; b.hasCompleted = !1; b.buffer = []; b.active = 0; b.index = 0; return b
          } h(a, c); a.prototype._next = function (b) { if (this.active < this.concurrent) { var a = this.index++, c = this.destination, f = void 0; try { var g = this.accumulator, f = g(this.acc, b, a) } catch (l) { return c.error(l) } this.active++; this._innerSub(f, b, a) } else this.buffer.push(b) }; a.prototype._innerSub = function (b, a, c) {
            a = new G(this, a, c); c = this.destination; c.add(a); b = p(this, b, void 0, void 0, a); b !== a &&
              c.add(b)
          }; a.prototype._complete = function () { this.hasCompleted = !0; 0 === this.active && 0 === this.buffer.length && (!1 === this.hasValue && this.destination.next(this.acc), this.destination.complete()); this.unsubscribe() }; a.prototype.notifyNext = function (b, a, c, f, g) { b = this.destination; this.acc = a; this.hasValue = !0; b.next(a) }; a.prototype.notifyComplete = function (b) {
            var a = this.buffer; this.destination.remove(b); this.active--; 0 < a.length ? this._next(a.shift()) : 0 === this.active && this.hasCompleted && (!1 === this.hasValue && this.destination.next(this.acc),
              this.destination.complete())
          }; return a
        }(q), rc = function () { function c(a, b) { this.subjectFactory = a; this.selector = b } c.prototype.call = function (a, b) { var c = this.selector, e = this.subjectFactory(); a = c(e).subscribe(a); a.add(b.subscribe(e)); return a }; return c }(), pe = function () { function c(a) { this.nextSources = a } c.prototype.call = function (a, b) { return b.subscribe(new oe(a, this.nextSources)) }; return c }(), oe = function (c) {
          function a(b, a) { var d = c.call(this, b) || this; d.destination = b; d.nextSources = a; return d } h(a, c); a.prototype.notifyError =
            function (b, a) { this.subscribeToNextSource() }; a.prototype.notifyComplete = function (b) { this.subscribeToNextSource() }; a.prototype._error = function (b) { this.subscribeToNextSource(); this.unsubscribe() }; a.prototype._complete = function () { this.subscribeToNextSource(); this.unsubscribe() }; a.prototype.subscribeToNextSource = function () { var b = this.nextSources.shift(); if (b) { var a = new G(this, void 0, void 0), c = this.destination; c.add(a); b = p(this, b, void 0, void 0, a); b !== a && c.add(b) } else this.destination.complete() }; return a
        }(q),
        re = function () { function c() { } c.prototype.call = function (a, b) { return b.subscribe(new qe(a)) }; return c }(), qe = function (c) { function a(b) { b = c.call(this, b) || this; b.hasPrev = !1; return b } h(a, c); a.prototype._next = function (b) { var a; this.hasPrev ? a = [this.prev, b] : this.hasPrev = !0; this.prev = b; a && this.destination.next(a) }; return a }(m), Db = function () { function c(a, b) { this.count = a; this.source = b } c.prototype.call = function (a, b) { return b.subscribe(new se(a, this.count, this.source)) }; return c }(), se = function (c) {
          function a(b, a,
            e) { b = c.call(this, b) || this; b.count = a; b.source = e; return b } h(a, c); a.prototype.complete = function () { if (!this.isStopped) { var b = this.source, a = this.count; if (0 === a) return c.prototype.complete.call(this); -1 < a && (this.count = a - 1); b.subscribe(this._unsubscribeAndRecycle()) } }; return a
        }(m), ue = function () { function c(a) { this.notifier = a } c.prototype.call = function (a, b) { return b.subscribe(new te(a, this.notifier, b)) }; return c }(), te = function (c) {
          function a(b, a, e) {
            b = c.call(this, b) || this; b.notifier = a; b.source = e; b.sourceIsBeingSubscribedTo =
              !0; return b
          } h(a, c); a.prototype.notifyNext = function (b, a, c, f, g) { this.sourceIsBeingSubscribedTo = !0; this.source.subscribe(this) }; a.prototype.notifyComplete = function (b) { if (!1 === this.sourceIsBeingSubscribedTo) return c.prototype.complete.call(this) }; a.prototype.complete = function () { this.sourceIsBeingSubscribedTo = !1; if (!this.isStopped) { this.retries || this.subscribeToRetries(); if (!this.retriesSubscription || this.retriesSubscription.closed) return c.prototype.complete.call(this); this._unsubscribeAndRecycle(); this.notifications.next() } };
          a.prototype._unsubscribe = function () { var b = this.notifications, a = this.retriesSubscription; b && (b.unsubscribe(), this.notifications = null); a && (a.unsubscribe(), this.retriesSubscription = null); this.retries = null }; a.prototype._unsubscribeAndRecycle = function () { var b = this._unsubscribe; this._unsubscribe = null; c.prototype._unsubscribeAndRecycle.call(this); this._unsubscribe = b; return this }; a.prototype.subscribeToRetries = function () {
          this.notifications = new v; var b; try { var a = this.notifier; b = a(this.notifications) } catch (e) { return c.prototype.complete.call(this) } this.retries =
            b; this.retriesSubscription = p(this, b)
          }; return a
        }(q), we = function () { function c(a, b) { this.count = a; this.source = b } c.prototype.call = function (a, b) { return b.subscribe(new ve(a, this.count, this.source)) }; return c }(), ve = function (c) { function a(b, a, e) { b = c.call(this, b) || this; b.count = a; b.source = e; return b } h(a, c); a.prototype.error = function (b) { if (!this.isStopped) { var a = this.source, e = this.count; if (0 === e) return c.prototype.error.call(this, b); -1 < e && (this.count = e - 1); a.subscribe(this._unsubscribeAndRecycle()) } }; return a }(m),
        ye = function () { function c(a, b) { this.notifier = a; this.source = b } c.prototype.call = function (a, b) { return b.subscribe(new xe(a, this.notifier, this.source)) }; return c }(), xe = function (c) {
          function a(b, a, e) { b = c.call(this, b) || this; b.notifier = a; b.source = e; return b } h(a, c); a.prototype.error = function (b) {
            if (!this.isStopped) {
              var a = this.errors, e = this.retries, f = this.retriesSubscription; if (e) this.retriesSubscription = this.errors = null; else {
                a = new v; try { var g = this.notifier, e = g(a) } catch (l) {
                  return c.prototype.error.call(this,
                    l)
                } f = p(this, e)
              } this._unsubscribeAndRecycle(); this.errors = a; this.retries = e; this.retriesSubscription = f; a.next(b)
            }
          }; a.prototype._unsubscribe = function () { var b = this.errors, a = this.retriesSubscription; b && (b.unsubscribe(), this.errors = null); a && (a.unsubscribe(), this.retriesSubscription = null); this.retries = null }; a.prototype.notifyNext = function (b, a, c, f, g) { b = this._unsubscribe; this._unsubscribe = null; this._unsubscribeAndRecycle(); this._unsubscribe = b; this.source.subscribe(this) }; return a
        }(q), Ae = function () {
          function c(a) {
          this.notifier =
            a
          } c.prototype.call = function (a, b) { a = new ze(a); b = b.subscribe(a); b.add(p(a, this.notifier)); return b }; return c
        }(), ze = function (c) { function a() { var b = null !== c && c.apply(this, arguments) || this; b.hasValue = !1; return b } h(a, c); a.prototype._next = function (b) { this.value = b; this.hasValue = !0 }; a.prototype.notifyNext = function (b, a, c, f, g) { this.emitValue() }; a.prototype.notifyComplete = function () { this.emitValue() }; a.prototype.emitValue = function () { this.hasValue && (this.hasValue = !1, this.destination.next(this.value)) }; return a }(q),
        Ce = function () { function c(a, b) { this.period = a; this.scheduler = b } c.prototype.call = function (a, b) { return b.subscribe(new Be(a, this.period, this.scheduler)) }; return c }(), Be = function (c) { function a(b, a, e) { b = c.call(this, b) || this; b.period = a; b.scheduler = e; b.hasValue = !1; b.add(e.schedule(uc, a, { subscriber: b, period: a })); return b } h(a, c); a.prototype._next = function (b) { this.lastValue = b; this.hasValue = !0 }; a.prototype.notifyNext = function () { this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue)) }; return a }(m),
        Ee = function () { function c(a, b) { this.compareTo = a; this.comparator = b } c.prototype.call = function (a, b) { return b.subscribe(new De(a, this.compareTo, this.comparator)) }; return c }(), De = function (c) {
          function a(b, a, e) { var d = c.call(this, b) || this; d.compareTo = a; d.comparator = e; d._a = []; d._b = []; d._oneComplete = !1; d.destination.add(a.subscribe(new Fe(b, d))); return d } h(a, c); a.prototype._next = function (b) { this._oneComplete && 0 === this._b.length ? this.emit(!1) : (this._a.push(b), this.checkValues()) }; a.prototype._complete = function () {
            this._oneComplete ?
            this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0; this.unsubscribe()
          }; a.prototype.checkValues = function () { for (var b = this._a, a = this._b, c = this.comparator; 0 < b.length && 0 < a.length;) { var f = b.shift(), g = a.shift(), l = !1; try { l = c ? c(f, g) : f === g } catch (u) { this.destination.error(u) } l || this.emit(!1) } }; a.prototype.emit = function (b) { var a = this.destination; a.next(b); a.complete() }; a.prototype.nextB = function (b) { this._oneComplete && 0 === this._a.length ? this.emit(!1) : (this._b.push(b), this.checkValues()) };
          a.prototype.completeB = function () { this._oneComplete ? this.emit(0 === this._a.length && 0 === this._b.length) : this._oneComplete = !0 }; return a
        }(m), Fe = function (c) { function a(b, a) { b = c.call(this, b) || this; b.parent = a; return b } h(a, c); a.prototype._next = function (b) { this.parent.nextB(b) }; a.prototype._error = function (b) { this.parent.error(b); this.unsubscribe() }; a.prototype._complete = function () { this.parent.completeB(); this.unsubscribe() }; return a }(m), He = function () {
          function c(a, b) { this.predicate = a; this.source = b } c.prototype.call =
            function (a, b) { return b.subscribe(new Ge(a, this.predicate, this.source)) }; return c
        }(), Ge = function (c) {
          function a(b, a, e) { b = c.call(this, b) || this; b.predicate = a; b.source = e; b.seenValue = !1; b.index = 0; return b } h(a, c); a.prototype.applySingleValue = function (b) { this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = b) }; a.prototype._next = function (b) { var a = this.index++; this.predicate ? this.tryNext(b, a) : this.applySingleValue(b) }; a.prototype.tryNext = function (b,
            a) { try { this.predicate(b, a, this.source) && this.applySingleValue(b) } catch (e) { this.destination.error(e) } }; a.prototype._complete = function () { var b = this.destination; 0 < this.index ? (b.next(this.seenValue ? this.singleValue : void 0), b.complete()) : b.error(new ca) }; return a
        }(m), Je = function () { function c(a) { this.total = a } c.prototype.call = function (a, b) { return b.subscribe(new Ie(a, this.total)) }; return c }(), Ie = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b.total = a; b.count = 0; return b } h(a, c); a.prototype._next = function (b) {
          ++this.count >
            this.total && this.destination.next(b)
          }; return a
        }(m), Le = function () { function c(a) { this._skipCount = a; if (0 > this._skipCount) throw new X; } c.prototype.call = function (a, b) { return 0 === this._skipCount ? b.subscribe(new m(a)) : b.subscribe(new Ke(a, this._skipCount)) }; return c }(), Ke = function (c) {
          function a(b, a) { b = c.call(this, b) || this; b._skipCount = a; b._count = 0; b._ring = Array(a); return b } h(a, c); a.prototype._next = function (b) {
            var a = this._skipCount, c = this._count++; if (c < a) this._ring[c] = b; else {
              var a = c % a, c = this._ring, f = c[a];
              c[a] = b; this.destination.next(f)
            }
          }; return a
        }(m), Ne = function () { function c(a) { this.notifier = a } c.prototype.call = function (a, b) { return b.subscribe(new Me(a, this.notifier)) }; return c }(), Me = function (c) {
          function a(a, d) { a = c.call(this, a) || this; a.hasValue = !1; var b = new G(a, void 0, void 0); a.add(b); a.innerSubscription = b; d = p(a, d, void 0, void 0, b); d !== b && (a.add(d), a.innerSubscription = d); return a } h(a, c); a.prototype._next = function (a) { this.hasValue && c.prototype._next.call(this, a) }; a.prototype.notifyNext = function (a, c,
            e, f, g) { this.hasValue = !0; this.innerSubscription && this.innerSubscription.unsubscribe() }; a.prototype.notifyComplete = function () { }; return a
        }(q), Pe = function () { function c(a) { this.predicate = a } c.prototype.call = function (a, b) { return b.subscribe(new Oe(a, this.predicate)) }; return c }(), Oe = function (c) {
          function a(a, d) { a = c.call(this, a) || this; a.predicate = d; a.skipping = !0; a.index = 0; return a } h(a, c); a.prototype._next = function (a) { var b = this.destination; this.skipping && this.tryCallPredicate(a); this.skipping || b.next(a) }; a.prototype.tryCallPredicate =
            function (a) { try { this.skipping = !!this.predicate(a, this.index++) } catch (d) { this.destination.error(d) } }; return a
        }(m), Qe = function (c) {
          function a(a, d, e) { void 0 === d && (d = 0); void 0 === e && (e = pa); var b = c.call(this) || this; b.source = a; b.delayTime = d; b.scheduler = e; if (!V(d) || 0 > d) b.delayTime = 0; e && "function" === typeof e.schedule || (b.scheduler = pa); return b } h(a, c); a.create = function (b, c, e) { void 0 === c && (c = 0); void 0 === e && (e = pa); return new a(b, c, e) }; a.dispatch = function (a) { return this.add(a.source.subscribe(a.subscriber)) }; a.prototype._subscribe =
            function (b) { return this.scheduler.schedule(a.dispatch, this.delayTime, { source: this.source, subscriber: b }) }; return a
        }(n), Re = function () { function c(a, b) { this.scheduler = a; this.delay = b } c.prototype.call = function (a, b) { return (new Qe(b, this.delay, this.scheduler)).subscribe(a) }; return c }(), xc = function () { function c(a) { this.project = a } c.prototype.call = function (a, b) { return b.subscribe(new Se(a, this.project)) }; return c }(), Se = function (c) {
          function a(a, d) { a = c.call(this, a) || this; a.project = d; a.index = 0; return a } h(a, c);
          a.prototype._next = function (a) { var b, c = this.index++; try { b = this.project(a, c) } catch (f) { this.destination.error(f); return } this._innerSub(b, a, c) }; a.prototype._innerSub = function (a, c, e) { var b = this.innerSubscription; b && b.unsubscribe(); c = new G(this, c, e); e = this.destination; e.add(c); this.innerSubscription = p(this, a, void 0, void 0, c); this.innerSubscription !== c && e.add(this.innerSubscription) }; a.prototype._complete = function () { var a = this.innerSubscription; a && !a.closed || c.prototype._complete.call(this); this.unsubscribe() };
          a.prototype._unsubscribe = function () { this.innerSubscription = null }; a.prototype.notifyComplete = function (a) { this.destination.remove(a); this.innerSubscription = null; this.isStopped && c.prototype._complete.call(this) }; a.prototype.notifyNext = function (a, c, e, f, g) { this.destination.next(c) }; return a
        }(q), Ue = function () { function c(a) { this.notifier = a } c.prototype.call = function (a, b) { a = new Te(a); var c = p(a, this.notifier); return c && !a.seenValue ? (a.add(c), b.subscribe(a)) : a }; return c }(), Te = function (c) {
          function a(a) {
            a = c.call(this,
              a) || this; a.seenValue = !1; return a
          } h(a, c); a.prototype.notifyNext = function (a, c, e, f, g) { this.seenValue = !0; this.complete() }; a.prototype.notifyComplete = function () { }; return a
        }(q), We = function () { function c(a, b) { this.predicate = a; this.inclusive = b } c.prototype.call = function (a, b) { return b.subscribe(new Ve(a, this.predicate, this.inclusive)) }; return c }(), Ve = function (c) {
          function a(a, d, e) { a = c.call(this, a) || this; a.predicate = d; a.inclusive = e; a.index = 0; return a } h(a, c); a.prototype._next = function (a) {
            var b = this.destination,
            c; try { c = this.predicate(a, this.index++) } catch (f) { b.error(f); return } this.nextOrComplete(a, c)
          }; a.prototype.nextOrComplete = function (a, c) { var b = this.destination; c ? b.next(a) : (this.inclusive && b.next(a), b.complete()) }; return a
        }(m), Ye = function () { function c(a, b, c) { this.nextOrObserver = a; this.error = b; this.complete = c } c.prototype.call = function (a, b) { return b.subscribe(new Xe(a, this.nextOrObserver, this.error, this.complete)) }; return c }(), Xe = function (c) {
          function a(a, d, e, f) {
            a = c.call(this, a) || this; a._tapNext = D; a._tapError =
              D; a._tapComplete = D; a._tapError = e || D; a._tapComplete = f || D; P(d) ? (a._context = a, a._tapNext = d) : d && (a._context = d, a._tapNext = d.next || D, a._tapError = d.error || D, a._tapComplete = d.complete || D); return a
          } h(a, c); a.prototype._next = function (a) { try { this._tapNext.call(this._context, a) } catch (d) { this.destination.error(d); return } this.destination.next(a) }; a.prototype._error = function (a) { try { this._tapError.call(this._context, a) } catch (d) { this.destination.error(d); return } this.destination.error(a) }; a.prototype._complete = function () {
            try { this._tapComplete.call(this._context) } catch (b) {
              this.destination.error(b);
              return
            } return this.destination.complete()
          }; return a
        }(m), Eb = { leading: !0, trailing: !1 }, $e = function () { function c(a, b, c) { this.durationSelector = a; this.leading = b; this.trailing = c } c.prototype.call = function (a, b) { return b.subscribe(new Ze(a, this.durationSelector, this.leading, this.trailing)) }; return c }(), Ze = function (c) {
          function a(a, d, e, f) { var b = c.call(this, a) || this; b.destination = a; b.durationSelector = d; b._leading = e; b._trailing = f; b._hasValue = !1; return b } h(a, c); a.prototype._next = function (a) {
          this._hasValue = !0; this._sendValue =
            a; this._throttled || (this._leading ? this.send() : this.throttle(a))
          }; a.prototype.send = function () { var a = this._sendValue; this._hasValue && (this.destination.next(a), this.throttle(a)); this._hasValue = !1; this._sendValue = null }; a.prototype.throttle = function (a) { (a = this.tryDurationSelector(a)) && this.add(this._throttled = p(this, a)) }; a.prototype.tryDurationSelector = function (a) { try { return this.durationSelector(a) } catch (d) { return this.destination.error(d), null } }; a.prototype.throttlingDone = function () {
            var a = this._throttled,
            c = this._trailing; a && a.unsubscribe(); this._throttled = null; c && this.send()
          }; a.prototype.notifyNext = function (a, c, e, f, g) { this.throttlingDone() }; a.prototype.notifyComplete = function () { this.throttlingDone() }; return a
        }(q), bf = function () { function c(a, b, c, e) { this.duration = a; this.scheduler = b; this.leading = c; this.trailing = e } c.prototype.call = function (a, b) { return b.subscribe(new af(a, this.duration, this.scheduler, this.leading, this.trailing)) }; return c }(), af = function (c) {
          function a(a, d, e, f, g) {
            a = c.call(this, a) || this;
            a.duration = d; a.scheduler = e; a.leading = f; a.trailing = g; a._hasTrailingValue = !1; a._trailingValue = null; return a
          } h(a, c); a.prototype._next = function (a) { this.throttled ? this.trailing && (this._trailingValue = a, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(yc, this.duration, { subscriber: this })), this.leading ? this.destination.next(a) : this.trailing && (this._trailingValue = a, this._hasTrailingValue = !0)) }; a.prototype._complete = function () {
          this._hasTrailingValue && this.destination.next(this._trailingValue);
            this.destination.complete()
          }; a.prototype.clearThrottle = function () { var a = this.throttled; a && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), a.unsubscribe(), this.remove(a), this.throttled = null) }; return a
        }(m), cf = function () { return function (c, a) { this.value = c; this.interval = a } }(), zc = function () {
          function c(a, b, c, e) { this.waitFor = a; this.absoluteTimeout = b; this.withObservable = c; this.scheduler = e } c.prototype.call = function (a, b) {
            return b.subscribe(new df(a,
              this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler))
          }; return c
        }(), df = function (c) {
          function a(a, d, e, f, g) { a = c.call(this, a) || this; a.absoluteTimeout = d; a.waitFor = e; a.withObservable = f; a.scheduler = g; a.action = null; a.scheduleTimeout(); return a } h(a, c); a.dispatchTimeout = function (a) { var b = a.withObservable; a._unsubscribeAndRecycle(); a.add(p(a, b)) }; a.prototype.scheduleTimeout = function () {
            var b = this.action; b ? this.action = b.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(a.dispatchTimeout,
              this.waitFor, this))
          }; a.prototype._next = function (a) { this.absoluteTimeout || this.scheduleTimeout(); c.prototype._next.call(this, a) }; a.prototype._unsubscribe = function () { this.withObservable = this.scheduler = this.action = null }; return a
        }(q), ef = function () { return function (c, a) { this.value = c; this.timestamp = a } }(), gf = function () { function c(a) { this.windowBoundaries = a } c.prototype.call = function (a, b) { a = new ff(a); b = b.subscribe(a); b.closed || a.add(p(a, this.windowBoundaries)); return b }; return c }(), ff = function (c) {
          function a(a) {
            var b =
              c.call(this, a) || this; b.window = new v; a.next(b.window); return b
          } h(a, c); a.prototype.notifyNext = function (a, c, e, f, g) { this.openWindow() }; a.prototype.notifyError = function (a, c) { this._error(a) }; a.prototype.notifyComplete = function (a) { this._complete() }; a.prototype._next = function (a) { this.window.next(a) }; a.prototype._error = function (a) { this.window.error(a); this.destination.error(a) }; a.prototype._complete = function () { this.window.complete(); this.destination.complete() }; a.prototype._unsubscribe = function () {
          this.window =
            null
          }; a.prototype.openWindow = function () { var a = this.window; a && a.complete(); var a = this.destination, c = this.window = new v; a.next(c) }; return a
        }(q), jf = function () { function c(a, b) { this.windowSize = a; this.startWindowEvery = b } c.prototype.call = function (a, b) { return b.subscribe(new hf(a, this.windowSize, this.startWindowEvery)) }; return c }(), hf = function (c) {
          function a(a, d, e) { var b = c.call(this, a) || this; b.destination = a; b.windowSize = d; b.startWindowEvery = e; b.windows = [new v]; b.count = 0; a.next(b.windows[0]); return b } h(a, c);
          a.prototype._next = function (a) { for (var b = 0 < this.startWindowEvery ? this.startWindowEvery : this.windowSize, c = this.destination, f = this.windowSize, g = this.windows, l = g.length, h = 0; h < l && !this.closed; h++)g[h].next(a); a = this.count - f + 1; 0 <= a && 0 === a % b && !this.closed && g.shift().complete(); 0 !== ++this.count % b || this.closed || (b = new v, g.push(b), c.next(b)) }; a.prototype._error = function (a) { var b = this.windows; if (b) for (; 0 < b.length && !this.closed;)b.shift().error(a); this.destination.error(a) }; a.prototype._complete = function () {
            var a =
              this.windows; if (a) for (; 0 < a.length && !this.closed;)a.shift().complete(); this.destination.complete()
          }; a.prototype._unsubscribe = function () { this.count = 0; this.windows = null }; return a
        }(m), lf = function () { function c(a, b, c, e) { this.windowTimeSpan = a; this.windowCreationInterval = b; this.maxWindowSize = c; this.scheduler = e } c.prototype.call = function (a, b) { return b.subscribe(new kf(a, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler)) }; return c }(), mf = function (c) {
          function a() {
            var a = null !==
              c && c.apply(this, arguments) || this; a._numberOfNextedValues = 0; return a
          } h(a, c); a.prototype.next = function (a) { this._numberOfNextedValues++; c.prototype.next.call(this, a) }; Object.defineProperty(a.prototype, "numberOfNextedValues", { get: function () { return this._numberOfNextedValues }, enumerable: !0, configurable: !0 }); return a
        }(v), kf = function (c) {
          function a(a, d, e, f, g) {
            var b = c.call(this, a) || this; b.destination = a; b.windowTimeSpan = d; b.windowCreationInterval = e; b.maxWindowSize = f; b.scheduler = g; b.windows = []; a = b.openWindow();
            null !== e && 0 <= e ? (f = { windowTimeSpan: d, windowCreationInterval: e, subscriber: b, scheduler: g }, b.add(g.schedule(lb, d, { subscriber: b, window: a, context: null })), b.add(g.schedule(Cc, e, f))) : b.add(g.schedule(Bc, d, { subscriber: b, window: a, windowTimeSpan: d })); return b
          } h(a, c); a.prototype._next = function (a) { for (var b = this.windows, c = b.length, f = 0; f < c; f++) { var g = b[f]; g.closed || (g.next(a), g.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(g)) } }; a.prototype._error = function (a) {
            for (var b = this.windows; 0 < b.length;)b.shift().error(a);
            this.destination.error(a)
          }; a.prototype._complete = function () { for (var a = this.windows; 0 < a.length;) { var c = a.shift(); c.closed || c.complete() } this.destination.complete() }; a.prototype.openWindow = function () { var a = new mf; this.windows.push(a); this.destination.next(a); return a }; a.prototype.closeWindow = function (a) { a.complete(); var b = this.windows; b.splice(b.indexOf(a), 1) }; return a
        }(m), of = function () {
          function c(a, b) { this.openings = a; this.closingSelector = b } c.prototype.call = function (a, b) {
            return b.subscribe(new nf(a,
              this.openings, this.closingSelector))
          }; return c
        }(), nf = function (c) {
          function a(a, d, e) { a = c.call(this, a) || this; a.openings = d; a.closingSelector = e; a.contexts = []; a.add(a.openSubscription = p(a, d, d)); return a } h(a, c); a.prototype._next = function (a) { var b = this.contexts; if (b) for (var c = b.length, f = 0; f < c; f++)b[f].window.next(a) }; a.prototype._error = function (a) {
            var b = this.contexts; this.contexts = null; if (b) for (var e = b.length, f = -1; ++f < e;) { var g = b[f]; g.window.error(a); g.subscription.unsubscribe() } c.prototype._error.call(this,
              a)
          }; a.prototype._complete = function () { var a = this.contexts; this.contexts = null; if (a) for (var d = a.length, e = -1; ++e < d;) { var f = a[e]; f.window.complete(); f.subscription.unsubscribe() } c.prototype._complete.call(this) }; a.prototype._unsubscribe = function () { var a = this.contexts; this.contexts = null; if (a) for (var c = a.length, e = -1; ++e < c;) { var f = a[e]; f.window.unsubscribe(); f.subscription.unsubscribe() } }; a.prototype.notifyNext = function (a, c, e, f, g) {
            if (a === this.openings) {
              a = void 0; try { var b = this.closingSelector; a = b(c) } catch (u) { return this.error(u) } c =
                new v; b = new t; e = { window: c, subscription: b }; this.contexts.push(e); a = p(this, a, e); a.closed ? this.closeWindow(this.contexts.length - 1) : (a.context = e, b.add(a)); this.destination.next(c)
            } else this.closeWindow(this.contexts.indexOf(a))
          }; a.prototype.notifyError = function (a) { this.error(a) }; a.prototype.notifyComplete = function (a) { a !== this.openSubscription && this.closeWindow(this.contexts.indexOf(a.context)) }; a.prototype.closeWindow = function (a) {
            if (-1 !== a) {
              var b = this.contexts, c = b[a], f = c.window, c = c.subscription; b.splice(a,
                1); f.complete(); c.unsubscribe()
            }
          }; return a
        }(q), qf = function () { function c(a) { this.closingSelector = a } c.prototype.call = function (a, b) { return b.subscribe(new pf(a, this.closingSelector)) }; return c }(), pf = function (c) {
          function a(a, d) { var b = c.call(this, a) || this; b.destination = a; b.closingSelector = d; b.openWindow(); return b } h(a, c); a.prototype.notifyNext = function (a, c, e, f, g) { this.openWindow(g) }; a.prototype.notifyError = function (a, c) { this._error(a) }; a.prototype.notifyComplete = function (a) { this.openWindow(a) }; a.prototype._next =
            function (a) { this.window.next(a) }; a.prototype._error = function (a) { this.window.error(a); this.destination.error(a); this.unsubscribeClosingNotification() }; a.prototype._complete = function () { this.window.complete(); this.destination.complete(); this.unsubscribeClosingNotification() }; a.prototype.unsubscribeClosingNotification = function () { this.closingNotification && this.closingNotification.unsubscribe() }; a.prototype.openWindow = function (a) {
            void 0 === a && (a = null); a && (this.remove(a), a.unsubscribe()); (a = this.window) &&
              a.complete(); a = this.window = new v; this.destination.next(a); var b; try { var c = this.closingSelector; b = c() } catch (f) { this.destination.error(f); this.window.error(f); return } this.add(this.closingNotification = p(this, b))
            }; return a
        }(q), sf = function () { function c(a, b) { this.observables = a; this.project = b } c.prototype.call = function (a, b) { return b.subscribe(new rf(a, this.observables, this.project)) }; return c }(), rf = function (c) {
          function a(a, d, e) {
            a = c.call(this, a) || this; a.observables = d; a.project = e; a.toRespond = []; e = d.length;
            a.values = Array(e); for (var b = 0; b < e; b++)a.toRespond.push(b); for (b = 0; b < e; b++) { var g = d[b]; a.add(p(a, g, g, b)) } return a
          } h(a, c); a.prototype.notifyNext = function (a, c, e, f, g) { this.values[e] = c; a = this.toRespond; 0 < a.length && (e = a.indexOf(e), -1 !== e && a.splice(e, 1)) }; a.prototype.notifyComplete = function () { }; a.prototype._next = function (a) { 0 === this.toRespond.length && (a = [a].concat(this.values), this.project ? this._tryProject(a) : this.destination.next(a)) }; a.prototype._tryProject = function (a) {
            var b; try {
              b = this.project.apply(this,
                a)
            } catch (e) { this.destination.error(e); return } this.destination.next(b)
          }; return a
        }(q), tf = Object.freeze({
          audit: eb, auditTime: function (c, a) { void 0 === a && (a = y); return eb(function () { return bb(c, a) }) }, buffer: function (c) { return function (a) { return a.lift(new md(c)) } }, bufferCount: function (c, a) { void 0 === a && (a = null); return function (b) { return b.lift(new pd(c, a)) } }, bufferTime: function (c) {
            var a = arguments.length, b = y; A(arguments[arguments.length - 1]) && (b = arguments[arguments.length - 1], a--); var d = null; 2 <= a && (d = arguments[1]);
            var e = Number.POSITIVE_INFINITY; 3 <= a && (e = arguments[2]); return function (a) { return a.lift(new rd(c, d, e, b)) }
          }, bufferToggle: function (c, a) { return function (b) { return b.lift(new ud(c, a)) } }, bufferWhen: function (c) { return function (a) { return a.lift(new wd(c)) } }, catchError: function (c) { return function (a) { var b = new yd(c); a = a.lift(b); return b.caught = a } }, combineAll: function (c) { return function (a) { return a.lift(new Ha(c)) } }, combineLatest: function () {
            for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; var b = null;
            "function" === typeof c[c.length - 1] && (b = c.pop()); 1 === c.length && x(c[0]) && (c = c[0].slice()); return function (a) { return a.lift.call(F([a].concat(c)), new Ha(b)) }
          }, concat: function () { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; return function (a) { return a.lift.call(aa.apply(void 0, [a].concat(c))) } }, concatAll: Va, concatMap: hb, concatMapTo: function (c, a) { return hb(function () { return c }, a) }, count: function (c) { return function (a) { return a.lift(new Ad(c, a)) } }, debounce: function (c) { return function (a) { return a.lift(new Cd(c)) } },
          debounceTime: function (c, a) { void 0 === a && (a = y); return function (b) { return b.lift(new Ed(c, a)) } }, defaultIfEmpty: ba, delay: function (c, a) { void 0 === a && (a = y); var b = c instanceof Date && !isNaN(+c) ? +c - a.now() : Math.abs(c); return function (c) { return c.lift(new Hd(b, a)) } }, delayWhen: function (c, a) { return a ? function (b) { return (new Ld(b, a)).lift(new Bb(c)) } : function (a) { return a.lift(new Bb(c)) } }, dematerialize: function () { return function (c) { return c.lift(new Nd) } }, distinct: function (c, a) {
            return function (b) {
              return b.lift(new Pd(c,
                a))
            }
          }, distinctUntilChanged: ib, distinctUntilKeyChanged: function (c, a) { return ib(function (b, d) { return a ? a(b[c], d[c]) : b[c] === d[c] }) }, elementAt: function (c, a) { if (0 > c) throw new X; var b = 2 <= arguments.length; return function (d) { return d.pipe(H(function (a, b) { return b === c }), Ba(1), b ? ba(a) : ja(function () { return new X })) } }, endWith: function () { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; return function (a) { return aa(a, ga.apply(void 0, c)) } }, every: function (c, a) {
            return function (b) {
              return b.lift(new Ud(c, a,
                b))
            }
          }, exhaust: function () { return function (c) { return c.lift(new Wd) } }, exhaustMap: jb, expand: function (c, a, b) { void 0 === a && (a = Number.POSITIVE_INFINITY); void 0 === b && (b = void 0); a = 1 > (a || 0) ? Number.POSITIVE_INFINITY : a; return function (d) { return d.lift(new Zd(c, a, b)) } }, filter: H, finalize: function (c) { return function (a) { return a.lift(new ae(c)) } }, find: function (c, a) { if ("function" !== typeof c) throw new TypeError("predicate is not a function"); return function (b) { return b.lift(new Cb(c, b, !1, a)) } }, findIndex: function (c,
            a) { return function (b) { return b.lift(new Cb(c, b, !0, a)) } }, first: function (c, a) { var b = 2 <= arguments.length; return function (d) { return d.pipe(c ? H(function (a, b) { return c(a, b, d) }) : J, Ba(1), b ? ba(a) : ja(function () { return new ca })) } }, groupBy: function (c, a, b, d) { return function (e) { return e.lift(new Nc(c, a, b, d)) } }, ignoreElements: function () { return function (c) { return c.lift(new de) } }, isEmpty: function () { return function (c) { return c.lift(new fe) } }, last: function (c, a) {
              var b = 2 <= arguments.length; return function (d) {
                return d.pipe(c ?
                  H(function (a, b) { return c(a, b, d) }) : J, ka(1), b ? ba(a) : ja(function () { return new ca }))
              }
            }, map: B, mapTo: function (c) { return function (a) { return a.lift(new ie(c)) } }, materialize: function () { return function (c) { return c.lift(new ke) } }, max: function (c) { return ma("function" === typeof c ? function (a, b) { return 0 < c(a, b) ? a : b } : function (a, b) { return a > b ? a : b }) }, merge: function () { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; return function (a) { return a.lift.call(Za.apply(void 0, [a].concat(c))) } }, mergeAll: ya, mergeMap: L,
          flatMap: L, mergeMapTo: function (c, a, b) { void 0 === b && (b = Number.POSITIVE_INFINITY); if ("function" === typeof a) return L(function () { return c }, a, b); "number" === typeof a && (b = a); return L(function () { return c }, b) }, mergeScan: function (c, a, b) { void 0 === b && (b = Number.POSITIVE_INFINITY); return function (d) { return d.lift(new ne(c, a, b)) } }, min: function (c) { return ma("function" === typeof c ? function (a, b) { return 0 > c(a, b) ? a : b } : function (a, b) { return a < b ? a : b }) }, multicast: M, observeOn: function (c, a) {
          void 0 === a && (a = 0); return function (b) {
            return b.lift(new Rc(c,
              a))
          }
          }, onErrorResumeNext: function () { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; 1 === c.length && x(c[0]) && (c = c[0]); return function (a) { return a.lift(new pe(c)) } }, pairwise: function () { return function (c) { return c.lift(new re) } }, partition: function (c, a) { return function (b) { return [H(c, a)(b), H($a(c, a))(b)] } }, pluck: function () { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; var b = c.length; if (0 === b) throw Error("list of properties cannot be empty."); return function (a) { return B(tc(c, b))(a) } },
          publish: function (c) { return c ? M(function () { return new v }, c) : M(new v) }, publishBehavior: function (c) { return function (a) { return M(new tb(c))(a) } }, publishLast: function () { return function (c) { return M(new T)(c) } }, publishReplay: function (c, a, b, d) { b && "function" !== typeof b && (d = b); var e = "function" === typeof b ? b : void 0, f = new W(c, a, d); return function (a) { return M(function () { return f }, e)(a) } }, race: function () {
            for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; return function (a) {
            1 === c.length && x(c[0]) && (c = c[0]);
              return a.lift.call(ab.apply(void 0, [a].concat(c)))
            }
          }, reduce: ma, repeat: function (c) { void 0 === c && (c = -1); return function (a) { return 0 === c ? R() : 0 > c ? a.lift(new Db(-1, a)) : a.lift(new Db(c - 1, a)) } }, repeatWhen: function (c) { return function (a) { return a.lift(new ue(c)) } }, retry: function (c) { void 0 === c && (c = -1); return function (a) { return a.lift(new we(c, a)) } }, retryWhen: function (c) { return function (a) { return a.lift(new ye(c, a)) } }, refCount: ua, sample: function (c) { return function (a) { return a.lift(new Ae(c)) } }, sampleTime: function (c,
            a) { void 0 === a && (a = y); return function (b) { return b.lift(new Ce(c, a)) } }, scan: la, sequenceEqual: function (c, a) { return function (b) { return b.lift(new Ee(c, a)) } }, share: function () { return function (c) { return ua()(M(vc)(c)) } }, shareReplay: function (c, a, b) { var d; d = c && "object" === typeof c ? c : { bufferSize: c, windowTime: a, refCount: !1, scheduler: b }; return function (a) { return a.lift(wc(d)) } }, single: function (c) { return function (a) { return a.lift(new He(c, a)) } }, skip: function (c) { return function (a) { return a.lift(new Je(c)) } }, skipLast: function (c) { return function (a) { return a.lift(new Le(c)) } },
          skipUntil: function (c) { return function (a) { return a.lift(new Ne(c)) } }, skipWhile: function (c) { return function (a) { return a.lift(new Pe(c)) } }, startWith: function () { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; var b = c[c.length - 1]; return A(b) ? (c.pop(), function (a) { return aa(c, a, b) }) : function (a) { return aa(c, a) } }, subscribeOn: function (c, a) { void 0 === a && (a = 0); return function (b) { return b.lift(new Re(c, a)) } }, switchAll: function () { return da(J) }, switchMap: da, switchMapTo: function (c, a) {
            return a ? da(function () { return c },
              a) : da(function () { return c })
          }, take: Ba, takeLast: ka, takeUntil: function (c) { return function (a) { return a.lift(new Ue(c)) } }, takeWhile: function (c, a) { void 0 === a && (a = !1); return function (b) { return b.lift(new We(c, a)) } }, tap: function (c, a, b) { return function (d) { return d.lift(new Ye(c, a, b)) } }, throttle: function (c, a) { void 0 === a && (a = Eb); return function (b) { return b.lift(new $e(c, a.leading, a.trailing)) } }, throttleTime: function (c, a, b) {
          void 0 === a && (a = y); void 0 === b && (b = Eb); return function (d) {
            return d.lift(new bf(c, a, b.leading,
              b.trailing))
          }
          }, throwIfEmpty: ja, timeInterval: function (c) { void 0 === c && (c = y); return function (a) { return za(function () { return a.pipe(la(function (a, d) { a = a.current; return { value: d, current: c.now(), last: a } }, { current: c.now(), value: void 0, last: void 0 }), B(function (a) { return new cf(a.value, a.current - a.last) })) }) } }, timeout: function (c, a) { void 0 === a && (a = y); return kb(c, wa(new yb), a) }, timeoutWith: kb, timestamp: function (c) { void 0 === c && (c = y); return B(function (a) { return new ef(a, c.now()) }) }, toArray: function () {
            return ma(Ac,
              [])
          }, window: function (c) { return function (a) { return a.lift(new gf(c)) } }, windowCount: function (c, a) { void 0 === a && (a = 0); return function (b) { return b.lift(new jf(c, a)) } }, windowTime: function (c, a, b, d) { var e = y, f = null, g = Number.POSITIVE_INFINITY; A(d) && (e = d); A(b) ? e = b : V(b) && (g = b); A(a) ? e = a : V(a) && (f = a); return function (a) { return a.lift(new lf(c, f, g, e)) } }, windowToggle: function (c, a) { return function (b) { return b.lift(new of(c, a)) } }, windowWhen: function (c) { return function (a) { return a.lift(new qf(c)) } }, withLatestFrom: function () {
            for (var c =
              [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; return function (a) { var b; "function" === typeof c[c.length - 1] && (b = c.pop()); return a.lift(new sf(c, b)) }
          }, zip: function () { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; return function (a) { return a.lift.call(cb.apply(void 0, [a].concat(c))) } }, zipAll: function (c) { return function (a) { return a.lift(new db(c)) } }
        }), fa = function () { return function (c, a) { void 0 === a && (a = Number.POSITIVE_INFINITY); this.subscribedFrame = c; this.unsubscribedFrame = a } }(), Fb = function () {
          function c() {
          this.subscriptions =
            []
          } c.prototype.logSubscribedFrame = function () { this.subscriptions.push(new fa(this.scheduler.now())); return this.subscriptions.length - 1 }; c.prototype.logUnsubscribedFrame = function (a) { var b = this.subscriptions; b[a] = new fa(b[a].subscribedFrame, this.scheduler.now()) }; return c
        }(), Ia = function (c) {
          function a(a, d) {
            var b = c.call(this, function (a) { var b = this, c = b.logSubscribedFrame(), d = new t; d.add(new t(function () { b.logUnsubscribedFrame(c) })); b.scheduleMessages(a); return d }) || this; b.messages = a; b.subscriptions = [];
            b.scheduler = d; return b
          } h(a, c); a.prototype.scheduleMessages = function (a) { for (var b = this.messages.length, c = 0; c < b; c++) { var f = this.messages[c]; a.add(this.scheduler.schedule(function (a) { a.message.notification.observe(a.subscriber) }, f.frame, { message: f, subscriber: a })) } }; return a
        }(n); mb(Ia, [Fb]); var Gb = function (c) {
          function a(a, d) { var b = c.call(this) || this; b.messages = a; b.subscriptions = []; b.scheduler = d; return b } h(a, c); a.prototype._subscribe = function (a) {
            var b = this, e = b.logSubscribedFrame(), f = new t; f.add(new t(function () { b.logUnsubscribedFrame(e) }));
            f.add(c.prototype._subscribe.call(this, a)); return f
          }; a.prototype.setup = function () { for (var a = this, c = a.messages.length, e = 0; e < c; e++)(function () { var b = a.messages[e]; a.scheduler.schedule(function () { b.notification.observe(a) }, b.frame) })() }; return a
        }(v); mb(Gb, [Fb]); var vf = function (c) {
          function a(a) { var b = c.call(this, Ga, 750) || this; b.assertDeepEqual = a; b.hotObservables = []; b.coldObservables = []; b.flushTests = []; b.runMode = !1; return b } h(a, c); a.prototype.createTime = function (b) {
            b = b.indexOf("|"); if (-1 === b) throw Error('marble diagram for time should have a completion marker "|"');
            return b * a.frameTimeFactor
          }; a.prototype.createColdObservable = function (b, c, e) { if (-1 !== b.indexOf("^")) throw Error('cold observable cannot have subscription offset "^"'); if (-1 !== b.indexOf("!")) throw Error('cold observable cannot have unsubscription marker "!"'); b = a.parseMarbles(b, c, e, void 0, this.runMode); b = new Ia(b, this); this.coldObservables.push(b); return b }; a.prototype.createHotObservable = function (b, c, e) {
            if (-1 !== b.indexOf("!")) throw Error('hot observable cannot have unsubscription marker "!"'); b = a.parseMarbles(b,
              c, e, void 0, this.runMode); b = new Gb(b, this); this.hotObservables.push(b); return b
          }; a.prototype.materializeInnerObservable = function (a, c) { var b = this, d = []; a.subscribe(function (a) { d.push({ frame: b.frame - c, notification: w.createNext(a) }) }, function (a) { d.push({ frame: b.frame - c, notification: w.createError(a) }) }, function () { d.push({ frame: b.frame - c, notification: w.createComplete() }) }); return d }; a.prototype.expectObservable = function (b, c) {
            var d = this; void 0 === c && (c = null); var f = [], g = { actual: f, ready: !1 }; c = a.parseMarblesAsSubscriptions(c,
              this.runMode); var h = c.unsubscribedFrame, k; this.schedule(function () { k = b.subscribe(function (a) { var b = a; a instanceof n && (b = d.materializeInnerObservable(b, d.frame)); f.push({ frame: d.frame, notification: w.createNext(b) }) }, function (a) { f.push({ frame: d.frame, notification: w.createError(a) }) }, function () { f.push({ frame: d.frame, notification: w.createComplete() }) }) }, c.subscribedFrame === Number.POSITIVE_INFINITY ? 0 : c.subscribedFrame); h !== Number.POSITIVE_INFINITY && this.schedule(function () { return k.unsubscribe() }, h); this.flushTests.push(g);
            var m = this.runMode; return { toBe: function (b, c, d) { g.ready = !0; g.expected = a.parseMarbles(b, c, d, !0, m) } }
          }; a.prototype.expectSubscriptions = function (b) { var c = { actual: b, ready: !1 }; this.flushTests.push(c); var e = this.runMode; return { toBe: function (b) { b = "string" === typeof b ? [b] : b; c.ready = !0; c.expected = b.map(function (b) { return a.parseMarblesAsSubscriptions(b, e) }) } } }; a.prototype.flush = function () {
            for (var a = this, d = this.hotObservables; 0 < d.length;)d.shift().setup(); c.prototype.flush.call(this); this.flushTests = this.flushTests.filter(function (b) {
              return b.ready ?
                (a.assertDeepEqual(b.actual, b.expected), !1) : !0
            })
          }; a.parseMarblesAsSubscriptions = function (a, c) {
            var b = this; void 0 === c && (c = !1); if ("string" !== typeof a) return new fa(Number.POSITIVE_INFINITY); for (var d = a.length, g = -1, h = Number.POSITIVE_INFINITY, k = Number.POSITIVE_INFINITY, m = 0, r = function (d) {
              var e = m, f = function (a) { e += a * b.frameTimeFactor }, l = a[d]; switch (l) {
                case " ": c || f(1); break; case "-": f(1); break; case "(": g = m; f(1); break; case ")": g = -1; f(1); break; case "^": if (h !== Number.POSITIVE_INFINITY) throw Error("found a second subscription point '^' in a subscription marble diagram. There can only be one.");
                  h = -1 < g ? g : m; f(1); break; case "!": if (k !== Number.POSITIVE_INFINITY) throw Error("found a second subscription point '^' in a subscription marble diagram. There can only be one."); k = -1 < g ? g : m; break; default: if (c && l.match(/^[0-9]$/) && (0 === d || " " === a[d - 1])) { var r = a.slice(d).match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /); if (r) { d += r[0].length - 1; var l = parseFloat(r[1]), u = void 0; switch (r[2]) { case "ms": u = l; break; case "s": u = 1E3 * l; break; case "m": u = 6E4 * l }f(u / n.frameTimeFactor); break } } throw Error("there can only be '^' and '!' markers in a subscription marble diagram. Found instead '" +
                    l + "'.");
              }m = e; p = d
            }, n = this, p, q = 0; q < d; q++)r(q), q = p; return 0 > k ? new fa(h) : new fa(h, k)
          }; a.parseMarbles = function (a, c, e, f, g) {
            var b = this; void 0 === f && (f = !1); void 0 === g && (g = !1); if (-1 !== a.indexOf("!")) throw Error('conventional marble diagrams cannot have the unsubscription marker "!"'); for (var d = a.length, h = [], k = g ? a.replace(/^[ ]+/, "").indexOf("^") : a.indexOf("^"), m = -1 === k ? 0 : k * -this.frameTimeFactor, n = "object" !== typeof c ? function (a) { return a } : function (a) { return f && c[a] instanceof Ia ? c[a].messages : c[a] }, p = -1, k = function (c) {
              var d =
                m, f = function (a) { d += a * b.frameTimeFactor }, l = void 0, k = a[c]; switch (k) {
                  case " ": g || f(1); break; case "-": f(1); break; case "(": p = m; f(1); break; case ")": p = -1; f(1); break; case "|": l = w.createComplete(); f(1); break; case "^": f(1); break; case "#": l = w.createError(e || "error"); f(1); break; default: if (g && k.match(/^[0-9]$/) && (0 === c || " " === a[c - 1])) {
                    var u = a.slice(c).match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /); if (u) {
                      c += u[0].length - 1; var k = parseFloat(u[1]), r = void 0; switch (u[2]) {
                        case "ms": r = k; break; case "s": r = 1E3 * k; break; case "m": r =
                          6E4 * k
                      }f(r / q.frameTimeFactor); break
                    }
                  } l = w.createNext(n(k)); f(1)
                }l && h.push({ frame: -1 < p ? p : m, notification: l }); m = d; t = c
            }, q = this, t, v = 0; v < d; v++)k(v), v = t; return h
          }; a.prototype.run = function (b) {
            var c = a.frameTimeFactor, e = this.maxFrames; a.frameTimeFactor = 1; this.maxFrames = Number.POSITIVE_INFINITY; this.runMode = !0; O.delegate = this; var f = { cold: this.createColdObservable.bind(this), hot: this.createHotObservable.bind(this), flush: this.flush.bind(this), expectObservable: this.expectObservable.bind(this), expectSubscriptions: this.expectSubscriptions.bind(this) };
            try { var g = b(f); this.flush(); return g } finally { a.frameTimeFactor = c, this.maxFrames = e, this.runMode = !1, O.delegate = void 0 }
          }; return a
        }(xb), wf = Object.freeze({ TestScheduler: vf }), xf = "undefined" !== typeof self && "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self, yf = "undefined" !== typeof global && global, z = "undefined" !== typeof window && window || yf || xf; if (!z) throw Error("RxJS could not find any global context (window, self, global)"); var Jc = B(function (c, a) { return c.response }), N = function (c) {
          function a(a) {
            var b =
              c.call(this) || this, e = {
                async: !0, createXHR: function () {
                  var a; if (this.crossDomain) if (z.XMLHttpRequest) a = new z.XMLHttpRequest; else if (z.XDomainRequest) a = new z.XDomainRequest; else throw Error("CORS is not supported by your browser"); else if (z.XMLHttpRequest) a = new z.XMLHttpRequest; else {
                    var b = void 0; try { for (var c = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], d = 0; 3 > d; d++)try { b = c[d]; new z.ActiveXObject(b); break } catch (r) { } a = new z.ActiveXObject(b) } catch (r) {
                      throw Error("XMLHttpRequest is not supported by your browser");
                    }
                  } return a
                }, crossDomain: !0, withCredentials: !1, headers: {}, method: "GET", responseType: "json", timeout: 0
              }; if ("string" === typeof a) e.url = a; else for (var f in a) a.hasOwnProperty(f) && (e[f] = a[f]); b.request = e; return b
          } h(a, c); a.prototype._subscribe = function (a) { return new zf(a, this.request) }; a.create = function () { var b = function (b) { return new a(b) }; b.get = Dc; b.post = Ec; b.delete = Fc; b.put = Gc; b.patch = Hc; b.getJSON = Ic; return b }(); return a
        }(n), zf = function (c) {
          function a(a, d) {
            a = c.call(this, a) || this; a.request = d; a.done = !1; var b =
              d.headers = d.headers || {}; d.crossDomain || a.getHeader(b, "X-Requested-With") || (b["X-Requested-With"] = "XMLHttpRequest"); a.getHeader(b, "Content-Type") || z.FormData && d.body instanceof z.FormData || "undefined" === typeof d.body || (b["Content-Type"] = "application/x-www-form-urlencoded; charset\x3dUTF-8"); d.body = a.serializeBody(d.body, a.getHeader(d.headers, "Content-Type")); a.send(); return a
          } h(a, c); a.prototype.next = function (a) { this.done = !0; var b = this.xhr, c = this.request, f = this.destination, g; try { g = new Hb(a, b, c) } catch (l) { return f.error(l) } f.next(g) };
          a.prototype.send = function () { var a = this.request, c = this.request, e = c.user, f = c.method, g = c.url, h = c.async, k = c.password, m = c.headers, c = c.body; try { var r = this.xhr = a.createXHR(); this.setupEvents(r, a); e ? r.open(f, g, h, e, k) : r.open(f, g, h); h && (r.timeout = a.timeout, r.responseType = a.responseType); "withCredentials" in r && (r.withCredentials = !!a.withCredentials); this.setHeaders(r, m); c ? r.send(c) : r.send() } catch (Xb) { this.error(Xb) } }; a.prototype.serializeBody = function (a, c) {
            if (!a || "string" === typeof a || z.FormData && a instanceof
              z.FormData) return a; if (c) { var b = c.indexOf(";"); -1 !== b && (c = c.substring(0, b)) } switch (c) { case "application/x-www-form-urlencoded": return Object.keys(a).map(function (b) { return encodeURIComponent(b) + "\x3d" + encodeURIComponent(a[b]) }).join("\x26"); case "application/json": return JSON.stringify(a); default: return a }
          }; a.prototype.setHeaders = function (a, c) { for (var b in c) c.hasOwnProperty(b) && a.setRequestHeader(b, c[b]) }; a.prototype.getHeader = function (a, c) { for (var b in a) if (b.toLowerCase() === c.toLowerCase()) return a[b] };
          a.prototype.setupEvents = function (a, c) {
            function b(a) { var c = b.subscriber, d = b.progressSubscriber, e = b.request; d && d.error(a); var f; try { f = new Ib(this, e) } catch (Ja) { f = Ja } c.error(f) } function d(a) { } function g(a) {
              var b = g.subscriber, c = g.progressSubscriber, d = g.request; if (4 === this.readyState) {
                var e = 1223 === this.status ? 204 : this.status, f = "text" === this.responseType ? this.response || this.responseText : this.response; 0 === e && (e = f ? 200 : 0); if (400 > e) c && c.complete(), b.next(a), b.complete(); else {
                  c && c.error(a); a = void 0; try {
                    a = new qa("ajax error " +
                      e, this, d)
                  } catch (uf) { a = uf } b.error(a)
                }
              }
            } var h = c.progressSubscriber; a.ontimeout = b; b.request = c; b.subscriber = this; b.progressSubscriber = h; if (a.upload && "withCredentials" in a) {
              if (h) { var k; k = function (a) { k.progressSubscriber.next(a) }; z.XDomainRequest ? a.onprogress = k : a.upload.onprogress = k; k.progressSubscriber = h } var m; m = function (a) { var b = m.progressSubscriber, c = m.subscriber, d = m.request; b && b.error(a); var e; try { e = new qa("ajax error", this, d) } catch (Ja) { e = Ja } c.error(e) }; a.onerror = m; m.request = c; m.subscriber = this; m.progressSubscriber =
                h
            } a.onreadystatechange = d; d.subscriber = this; d.progressSubscriber = h; d.request = c; a.onload = g; g.subscriber = this; g.progressSubscriber = h; g.request = c
          }; a.prototype.unsubscribe = function () { var a = this.xhr; !this.done && a && 4 !== a.readyState && "function" === typeof a.abort && a.abort(); c.prototype.unsubscribe.call(this) }; return a
        }(m), Hb = function () {
          return function (c, a, b) {
          this.originalEvent = c; this.xhr = a; this.request = b; this.status = a.status; this.responseType = a.responseType || b.responseType; this.response = nb(this.responseType,
            a)
          }
        }(), qa = function () { function c(a, b, c) { Error.call(this); this.message = a; this.name = "AjaxError"; this.xhr = b; this.request = c; this.status = b.status; this.responseType = b.responseType || c.responseType; this.response = nb(this.responseType, b); return this } c.prototype = Object.create(Error.prototype); return c }(), Ib = function (c, a) { qa.call(this, "ajax timeout", c, a); this.name = "AjaxTimeoutError"; return this }, Af = Object.freeze({ ajax: N.create, AjaxResponse: Hb, AjaxError: qa, AjaxTimeoutError: Ib }), Bf = {
          url: "", deserializer: function (c) { return JSON.parse(c.data) },
          serializer: function (c) { return JSON.stringify(c) }
        }, Jb = function (c) {
          function a(a, d) { var b = c.call(this) || this; if (a instanceof n) b.destination = d, b.source = a; else { d = b._config = ob({}, Bf); b._output = new v; if ("string" === typeof a) d.url = a; else for (var f in a) a.hasOwnProperty(f) && (d[f] = a[f]); if (!d.WebSocketCtor && WebSocket) d.WebSocketCtor = WebSocket; else if (!d.WebSocketCtor) throw Error("no WebSocket constructor can be found"); b.destination = new W } return b } h(a, c); a.prototype.lift = function (b) {
            var c = new a(this._config,
              this.destination); c.operator = b; c.source = this; return c
          }; a.prototype._resetState = function () { this._socket = null; this.source || (this.destination = new W); this._output = new v }; a.prototype.multiplex = function (a, c, e) { var b = this; return new n(function (d) { try { b.next(a()) } catch (u) { d.error(u) } var f = b.subscribe(function (a) { try { e(a) && d.next(a) } catch (K) { d.error(K) } }, function (a) { return d.error(a) }, function () { return d.complete() }); return function () { try { b.next(c()) } catch (u) { d.error(u) } f.unsubscribe() } }) }; a.prototype._connectSocket =
            function () {
              var a = this, c = this._config, e = c.WebSocketCtor, f = c.protocol, g = c.url, c = c.binaryType, h = this._output, k = null; try { this._socket = k = f ? new e(g, f) : new e(g), c && (this._socket.binaryType = c) } catch (r) { h.error(r); return } var n = new t(function () { a._socket = null; k && 1 === k.readyState && k.close() }); k.onopen = function (b) {
                if (a._socket) {
                  var c = a._config.openObserver; c && c.next(b); b = a.destination; a.destination = m.create(function (b) { if (1 === k.readyState) try { var c = a._config.serializer; k.send(c(b)) } catch (Zb) { a.destination.error(Zb) } },
                    function (b) { var c = a._config.closingObserver; c && c.next(void 0); b && b.code ? k.close(b.code, b.reason) : h.error(new TypeError("WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }")); a._resetState() }, function () { var b = a._config.closingObserver; b && b.next(void 0); k.close(); a._resetState() }); b && b instanceof W && n.add(b.subscribe(a.destination))
                } else k.close(), a._resetState()
              }; k.onerror = function (b) { a._resetState(); h.error(b) }; k.onclose =
                function (b) { a._resetState(); var c = a._config.closeObserver; c && c.next(b); b.wasClean ? h.complete() : h.error(b) }; k.onmessage = function (b) { try { var c = a._config.deserializer; h.next(c(b)) } catch (Yb) { h.error(Yb) } }
            }; a.prototype._subscribe = function (a) { var b = this, c = this.source; if (c) return c.subscribe(a); this._socket || this._connectSocket(); this._output.subscribe(a); a.add(function () { var a = b._socket; 0 === b._output.observers.length && (a && 1 === a.readyState && a.close(), b._resetState()) }); return a }; a.prototype.unsubscribe =
              function () { var a = this._socket; a && 1 === a.readyState && a.close(); this._resetState(); c.prototype.unsubscribe.call(this) }; return a
        }(Da), Cf = Object.freeze({ webSocket: function (c) { return new Jb(c) }, WebSocketSubject: Jb }), Df = Object.freeze({
          fromFetch: function (c, a) {
            return new n(function (b) {
              var d = new AbortController, e = d.signal, f = !0, g = !1; a ? (a.signal && (a.signal.aborted ? d.abort() : a.signal.addEventListener("abort", function () { e.aborted || d.abort() })), a = ob({}, a, { signal: e })) : a = { signal: e }; fetch(c, a).then(function (a) {
                f = !1;
                b.next(a); b.complete()
              }).catch(function (a) { f = !1; g || b.error(a) }); return function () { g = !0; f && d.abort() }
            })
          }
        }); k.operators = tf; k.testing = wf; k.ajax = Af; k.webSocket = Cf; k.fetch = Df; k.Observable = n; k.ConnectableObservable = sb; k.GroupedObservable = Ea; k.observable = U; k.Subject = v; k.BehaviorSubject = tb; k.ReplaySubject = W; k.AsyncSubject = T; k.asapScheduler = pa; k.asyncScheduler = y; k.queueScheduler = ub; k.animationFrameScheduler = Yc; k.VirtualTimeScheduler = xb; k.VirtualAction = Ga; k.Scheduler = Fa; k.Subscription = t; k.Subscriber = m; k.Notification =
          w; k.pipe = ta; k.noop = D; k.identity = J; k.isObservable = function (c) { return !!c && (c instanceof n || "function" === typeof c.lift && "function" === typeof c.subscribe) }; k.ArgumentOutOfRangeError = X; k.EmptyError = ca; k.ObjectUnsubscribedError = I; k.UnsubscriptionError = Y; k.TimeoutError = yb; k.bindCallback = Pa; k.bindNodeCallback = Qa; k.combineLatest = function () {
            for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; var b = a = null; A(c[c.length - 1]) && (b = c.pop()); "function" === typeof c[c.length - 1] && (a = c.pop()); 1 === c.length && x(c[0]) &&
              (c = c[0]); return Z(c, b).lift(new Ha(a))
          }; k.concat = aa; k.defer = za; k.empty = R; k.forkJoin = function () { for (var c = [], a = 0; a < arguments.length; a++)c[a] = arguments[a]; if (1 === c.length) { var b = c[0]; if (x(b)) return ia(b, null); if (ra(b) && Object.getPrototypeOf(b) === Object.prototype) return c = Object.keys(b), ia(c.map(function (a) { return b[a] }), c) } if ("function" === typeof c[c.length - 1]) { var d = c.pop(), c = 1 === c.length && x(c[0]) ? c[0] : c; return ia(c, null).pipe(B(function (a) { return d.apply(void 0, a) })) } return ia(c, null) }; k.from = F; k.fromEvent =
            Wa; k.fromEventPattern = Ya; k.generate = function (c, a, b, d, e) {
              var f, g; 1 == arguments.length ? (g = c.initialState, a = c.condition, b = c.iterate, f = c.resultSelector || J, e = c.scheduler) : void 0 === d || A(d) ? (g = c, f = J, e = d) : (g = c, f = d); return new n(function (c) {
                var d = g; if (e) return e.schedule($b, 0, { subscriber: c, iterate: b, condition: a, resultSelector: f, state: d }); do {
                  if (a) { var h = void 0; try { h = a(d) } catch (r) { c.error(r); break } if (!h) { c.complete(); break } } h = void 0; try { h = f(d) } catch (r) { c.error(r); break } c.next(h); if (c.closed) break; try { d = b(d) } catch (r) {
                    c.error(r);
                    break
                  }
                } while (1)
              })
            }; k.iif = function (c, a, b) { void 0 === a && (a = S); void 0 === b && (b = S); return za(function () { return c() ? a : b }) }; k.interval = function (c, a) { void 0 === c && (c = 0); void 0 === a && (a = y); if (!V(c) || 0 > c) c = 0; a && "function" === typeof a.schedule || (a = y); return new n(function (b) { b.add(a.schedule(ac, c, { subscriber: b, counter: 0, period: c })); return b }) }; k.merge = Za; k.never = function () { return Ab }; k.of = ga; k.onErrorResumeNext = Aa; k.pairs = function (c, a) {
              return a ? new n(function (b) {
                var d = Object.keys(c), e = new t; e.add(a.schedule(bc,
                  0, { keys: d, index: 0, subscriber: b, subscription: e, obj: c })); return e
              }) : new n(function (a) { for (var b = Object.keys(c), e = 0; e < b.length && !a.closed; e++) { var f = b[e]; c.hasOwnProperty(f) && a.next([f, c[f]]) } a.complete() })
            }; k.partition = function (c, a, b) { return [H(a, b)(new n(ha(c))), H($a(a, b))(new n(ha(c)))] }; k.race = ab; k.range = function (c, a, b) {
            void 0 === c && (c = 0); return new n(function (d) {
            void 0 === a && (a = c, c = 0); var e = 0, f = c; if (b) return b.schedule(ec, 0, { index: e, count: a, start: c, subscriber: d }); do {
              if (e++ >= a) { d.complete(); break } d.next(f++);
              if (d.closed) break
            } while (1)
            })
            }; k.throwError = wa; k.timer = bb; k.using = function (c, a) { return new n(function (b) { var d; try { d = c() } catch (g) { b.error(g); return } var e; try { e = a(d) } catch (g) { b.error(g); return } var f = (e ? F(e) : S).subscribe(b); return function () { f.unsubscribe(); d && d.unsubscribe() } }) }; k.zip = cb; k.scheduled = Ta; k.EMPTY = S; k.NEVER = Ab; k.config = C; Object.defineProperty(k, "__esModule", { value: !0 })
});
//# sourceMappingURL=rxjs.umd.min.js.map
