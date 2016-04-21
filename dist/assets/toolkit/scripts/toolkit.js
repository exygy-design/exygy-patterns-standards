/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Toolkit JavaScript
	 */

	'use strict';

	// For Node Modules
	// Because no path was specified, Module will be included from "node_modules"
	//var $ = require('jquery');

	// For Bower Components
	// Because Bower does not force a module structure, you have use a more specific path.

	// we're now requiring it from the bower/vendor directory
	var $ = __webpack_require__(2);
	window.jQuery = $;

	// Loading foundation from node
	var foundation = __webpack_require__(4);
	var foundationMediaQuery = __webpack_require__(5);
	var foundationKeyboard = __webpack_require__(6);
	var foundationBox = __webpack_require__(7);
	var foundationTriggers = __webpack_require__(8);
	var foundationDropdown = __webpack_require__(9);
	var foundationAccordion = __webpack_require__(10);
	var foundationReveal = __webpack_require__(11);
	var foundationAbide = __webpack_require__(12);
	var foundationTooltip = __webpack_require__(13);

	//require('smoothstate/jquery.smoothState.min.js');
	// var smoothState = require('./jquery.smoothState.min.js');

	window.foundation = foundation;
	// console.log($);
	// $('h1').fadeOut(2000);

	// Use for custom Pattern Libary Modules
	// var fooModule = require('./foo-module');
	// var bar = fooModule.foo();

	// Finally, you can drop test JavaScript here...
	$(document).ready(function () {
	  //console.log('Script kiddies of the world unite.')
	  $(document).foundation();

	  $("body").on("click", ".toggler", function () {
	    $(".toggled").toggle(); /*shows or hides #box*/
	  });
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
	"use strict";

	!(function (a, b) {
	  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
	    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	  } : b(a);
	})("undefined" != typeof window ? window : undefined, function (a, b) {
	  var c = [],
	      d = c.slice,
	      e = c.concat,
	      f = c.push,
	      g = c.indexOf,
	      h = {},
	      i = h.toString,
	      j = h.hasOwnProperty,
	      k = {},
	      l = a.document,
	      m = "2.1.4",
	      n = function n(a, b) {
	    return new n.fn.init(a, b);
	  },
	      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	      p = /^-ms-/,
	      q = /-([\da-z])/gi,
	      r = function r(a, b) {
	    return b.toUpperCase();
	  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
	      return d.call(this);
	    }, get: function get(a) {
	      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
	    }, pushStack: function pushStack(a) {
	      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
	    }, each: function each(a, b) {
	      return n.each(this, a, b);
	    }, map: function map(a) {
	      return this.pushStack(n.map(this, function (b, c) {
	        return a.call(b, c, b);
	      }));
	    }, slice: function slice() {
	      return this.pushStack(d.apply(this, arguments));
	    }, first: function first() {
	      return this.eq(0);
	    }, last: function last() {
	      return this.eq(-1);
	    }, eq: function eq(a) {
	      var b = this.length,
	          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
	    }, end: function end() {
	      return this.prevObject || this.constructor(null);
	    }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
	    var a,
	        b,
	        c,
	        d,
	        e,
	        f,
	        g = arguments[0] || {},
	        h = 1,
	        i = arguments.length,
	        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));return g;
	  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
	      throw new Error(a);
	    }, noop: function noop() {}, isFunction: function isFunction(a) {
	      return "function" === n.type(a);
	    }, isArray: Array.isArray, isWindow: function isWindow(a) {
	      return null != a && a === a.window;
	    }, isNumeric: function isNumeric(a) {
	      return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
	    }, isPlainObject: function isPlainObject(a) {
	      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
	    }, isEmptyObject: function isEmptyObject(a) {
	      var b;for (b in a) return !1;return !0;
	    }, type: function type(a) {
	      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
	    }, globalEval: function globalEval(a) {
	      var b,
	          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
	    }, camelCase: function camelCase(a) {
	      return a.replace(p, "ms-").replace(q, r);
	    }, nodeName: function nodeName(a, b) {
	      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
	    }, each: function each(a, b, c) {
	      var d,
	          e = 0,
	          f = a.length,
	          g = s(a);if (c) {
	        if (g) {
	          for (; f > e; e++) if ((d = b.apply(a[e], c), d === !1)) break;
	        } else for (e in a) if ((d = b.apply(a[e], c), d === !1)) break;
	      } else if (g) {
	        for (; f > e; e++) if ((d = b.call(a[e], e, a[e]), d === !1)) break;
	      } else for (e in a) if ((d = b.call(a[e], e, a[e]), d === !1)) break;return a;
	    }, trim: function trim(a) {
	      return null == a ? "" : (a + "").replace(o, "");
	    }, makeArray: function makeArray(a, b) {
	      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
	    }, inArray: function inArray(a, b, c) {
	      return null == b ? -1 : g.call(b, a, c);
	    }, merge: function merge(a, b) {
	      for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];return a.length = e, a;
	    }, grep: function grep(a, b, c) {
	      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);return e;
	    }, map: function map(a, b, c) {
	      var d,
	          f = 0,
	          g = a.length,
	          h = s(a),
	          i = [];if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);else for (f in a) d = b(a[f], f, c), null != d && i.push(d);return e.apply([], i);
	    }, guid: 1, proxy: function proxy(a, b) {
	      var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
	        return a.apply(b || this, e.concat(d.call(arguments)));
	      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
	    }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
	    h["[object " + b + "]"] = b.toLowerCase();
	  });function s(a) {
	    var b = "length" in a && a.length,
	        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	  }var t = (function (a) {
	    var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l,
	        m,
	        n,
	        o,
	        p,
	        q,
	        r,
	        s,
	        t,
	        u = "sizzle" + 1 * new Date(),
	        v = a.document,
	        w = 0,
	        x = 0,
	        y = ha(),
	        z = ha(),
	        A = ha(),
	        B = function B(a, b) {
	      return a === b && (l = !0), 0;
	    },
	        C = 1 << 31,
	        D = ({}).hasOwnProperty,
	        E = [],
	        F = E.pop,
	        G = E.push,
	        H = E.push,
	        I = E.slice,
	        J = function J(a, b) {
	      for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;return -1;
	    },
	        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	        L = "[\\x20\\t\\r\\n\\f]",
	        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	        N = M.replace("w", "w#"),
	        O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
	        P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
	        Q = new RegExp(L + "+", "g"),
	        R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
	        S = new RegExp("^" + L + "*," + L + "*"),
	        T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
	        U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
	        V = new RegExp(P),
	        W = new RegExp("^" + N + "$"),
	        X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
	        Y = /^(?:input|select|textarea|button)$/i,
	        Z = /^h\d$/i,
	        $ = /^[^{]+\{\s*\[native \w/,
	        _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	        aa = /[+~]/,
	        ba = /'|\\/g,
	        ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
	        da = function da(a, b, c) {
	      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
	    },
	        ea = function ea() {
	      m();
	    };try {
	      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
	    } catch (fa) {
	      H = { apply: E.length ? function (a, b) {
	          G.apply(a, I.call(b));
	        } : function (a, b) {
	          var c = a.length,
	              d = 0;while (a[c++] = b[d++]);a.length = c - 1;
	        } };
	    }function ga(a, b, d, e) {
	      var f, h, j, k, l, o, r, s, w, x;if (((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)) return d;if (!e && p) {
	        if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
	          if (9 === k) {
	            if ((h = b.getElementById(j), !h || !h.parentNode)) return d;if (h.id === j) return d.push(h), d;
	          } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
	        } else {
	          if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
	        }if (c.qsa && (!q || !q.test(a))) {
	          if ((s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase())) {
	            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) o[l] = s + ra(o[l]);w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
	          }if (x) try {
	            return H.apply(d, w.querySelectorAll(x)), d;
	          } catch (y) {} finally {
	            r || b.removeAttribute("id");
	          }
	        }
	      }return i(a.replace(R, "$1"), b, d, e);
	    }function ha() {
	      var a = [];function b(c, e) {
	        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
	      }return b;
	    }function ia(a) {
	      return a[u] = !0, a;
	    }function ja(a) {
	      var b = n.createElement("div");try {
	        return !!a(b);
	      } catch (c) {
	        return !1;
	      } finally {
	        b.parentNode && b.parentNode.removeChild(b), b = null;
	      }
	    }function ka(a, b) {
	      var c = a.split("|"),
	          e = a.length;while (e--) d.attrHandle[c[e]] = b;
	    }function la(a, b) {
	      var c = b && a,
	          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) if (c === b) return -1;return a ? 1 : -1;
	    }function ma(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
	      };
	    }function na(a) {
	      return function (b) {
	        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
	      };
	    }function oa(a) {
	      return ia(function (b) {
	        return b = +b, ia(function (c, d) {
	          var e,
	              f = a([], c.length, b),
	              g = f.length;while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
	        });
	      });
	    }function pa(a) {
	      return a && "undefined" != typeof a.getElementsByTagName && a;
	    }c = ga.support = {}, f = ga.isXML = function (a) {
	      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
	    }, m = ga.setDocument = function (a) {
	      var b,
	          e,
	          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
	        return a.className = "i", !a.getAttribute("className");
	      }), c.getElementsByTagName = ja(function (a) {
	        return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
	      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
	        return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
	      }), c.getById ? (d.find.ID = function (a, b) {
	        if ("undefined" != typeof b.getElementById && p) {
	          var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
	        }
	      }, d.filter.ID = function (a) {
	        var b = a.replace(ca, da);return function (a) {
	          return a.getAttribute("id") === b;
	        };
	      }) : (delete d.find.ID, d.filter.ID = function (a) {
	        var b = a.replace(ca, da);return function (a) {
	          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
	        };
	      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
	        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
	      } : function (a, b) {
	        var c,
	            d = [],
	            e = 0,
	            f = b.getElementsByTagName(a);if ("*" === a) {
	          while (c = f[e++]) 1 === c.nodeType && d.push(c);return d;
	        }return f;
	      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
	        return p ? b.getElementsByClassName(a) : void 0;
	      }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
	        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
	      }), ja(function (a) {
	        var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
	      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
	        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
	      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
	        var c = 9 === a.nodeType ? a.documentElement : a,
	            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
	      } : function (a, b) {
	        if (b) while (b = b.parentNode) if (b === a) return !0;return !1;
	      }, B = b ? function (a, b) {
	        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
	      } : function (a, b) {
	        if (a === b) return l = !0, 0;var c,
	            d = 0,
	            e = a.parentNode,
	            f = b.parentNode,
	            h = [a],
	            i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) h.unshift(c);c = b;while (c = c.parentNode) i.unshift(c);while (h[d] === i[d]) d++;return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
	      }, g) : n;
	    }, ga.matches = function (a, b) {
	      return ga(a, null, null, b);
	    }, ga.matchesSelector = function (a, b) {
	      if (((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))) try {
	        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
	      } catch (e) {}return ga(b, n, null, [a]).length > 0;
	    }, ga.contains = function (a, b) {
	      return (a.ownerDocument || a) !== n && m(a), t(a, b);
	    }, ga.attr = function (a, b) {
	      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
	          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
	    }, ga.error = function (a) {
	      throw new Error("Syntax error, unrecognized expression: " + a);
	    }, ga.uniqueSort = function (a) {
	      var b,
	          d = [],
	          e = 0,
	          f = 0;if ((l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l)) {
	        while (b = a[f++]) b === a[f] && (e = d.push(f));while (e--) a.splice(d[e], 1);
	      }return k = null, a;
	    }, e = ga.getText = function (a) {
	      var b,
	          c = "",
	          d = 0,
	          f = a.nodeType;if (f) {
	        if (1 === f || 9 === f || 11 === f) {
	          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
	        } else if (3 === f || 4 === f) return a.nodeValue;
	      } else while (b = a[d++]) c += e(b);return c;
	    }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
	          return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
	        }, CHILD: function CHILD(a) {
	          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
	        }, PSEUDO: function PSEUDO(a) {
	          var b,
	              c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
	        } }, filter: { TAG: function TAG(a) {
	          var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
	            return !0;
	          } : function (a) {
	            return a.nodeName && a.nodeName.toLowerCase() === b;
	          };
	        }, CLASS: function CLASS(a) {
	          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
	            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
	          });
	        }, ATTR: function ATTR(a, b, c) {
	          return function (d) {
	            var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
	          };
	        }, CHILD: function CHILD(a, b, c, d, e) {
	          var f = "nth" !== a.slice(0, 3),
	              g = "last" !== a.slice(-4),
	              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
	            return !!a.parentNode;
	          } : function (b, c, i) {
	            var j,
	                k,
	                l,
	                m,
	                n,
	                o,
	                p = f !== g ? "nextSibling" : "previousSibling",
	                q = b.parentNode,
	                r = h && b.nodeName.toLowerCase(),
	                s = !i && !h;if (q) {
	              if (f) {
	                while (p) {
	                  l = b;while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;o = p = "only" === a && !o && "nextSibling";
	                }return !0;
	              }if ((o = [g ? q.firstChild : q.lastChild], g && s)) {
	                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
	                  k[a] = [w, n, m];break;
	                }
	              } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;return m -= e, m === d || m % d === 0 && m / d >= 0;
	            }
	          };
	        }, PSEUDO: function PSEUDO(a, b) {
	          var c,
	              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
	            var d,
	                f = e(a, b),
	                g = f.length;while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
	          }) : function (a) {
	            return e(a, 0, c);
	          }) : e;
	        } }, pseudos: { not: ia(function (a) {
	          var b = [],
	              c = [],
	              d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
	            var f,
	                g = d(a, null, e, []),
	                h = a.length;while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
	          }) : function (a, e, f) {
	            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
	          };
	        }), has: ia(function (a) {
	          return function (b) {
	            return ga(a, b).length > 0;
	          };
	        }), contains: ia(function (a) {
	          return a = a.replace(ca, da), function (b) {
	            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
	          };
	        }), lang: ia(function (a) {
	          return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
	            var c;do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);return !1;
	          };
	        }), target: function target(b) {
	          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
	        }, root: function root(a) {
	          return a === o;
	        }, focus: function focus(a) {
	          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
	        }, enabled: function enabled(a) {
	          return a.disabled === !1;
	        }, disabled: function disabled(a) {
	          return a.disabled === !0;
	        }, checked: function checked(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
	        }, selected: function selected(a) {
	          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
	        }, empty: function empty(a) {
	          for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;return !0;
	        }, parent: function parent(a) {
	          return !d.pseudos.empty(a);
	        }, header: function header(a) {
	          return Z.test(a.nodeName);
	        }, input: function input(a) {
	          return Y.test(a.nodeName);
	        }, button: function button(a) {
	          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
	        }, text: function text(a) {
	          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
	        }, first: oa(function () {
	          return [0];
	        }), last: oa(function (a, b) {
	          return [b - 1];
	        }), eq: oa(function (a, b, c) {
	          return [0 > c ? c + b : c];
	        }), even: oa(function (a, b) {
	          for (var c = 0; b > c; c += 2) a.push(c);return a;
	        }), odd: oa(function (a, b) {
	          for (var c = 1; b > c; c += 2) a.push(c);return a;
	        }), lt: oa(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);return a;
	        }), gt: oa(function (a, b, c) {
	          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);return a;
	        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = ma(b);for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
	      var c,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
	        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));if (!c) break;
	      }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
	    };function ra(a) {
	      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;return d;
	    }function sa(a, b, c) {
	      var d = b.dir,
	          e = c && "parentNode" === d,
	          f = x++;return b.first ? function (b, c, f) {
	        while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
	      } : function (b, c, g) {
	        var h,
	            i,
	            j = [w, f];if (g) {
	          while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
	        } else while (b = b[d]) if (1 === b.nodeType || e) {
	          if ((i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)) return j[2] = h[2];if ((i[d] = j, j[2] = a(b, c, g))) return !0;
	        }
	      };
	    }function ta(a) {
	      return a.length > 1 ? function (b, c, d) {
	        var e = a.length;while (e--) if (!a[e](b, c, d)) return !1;return !0;
	      } : a[0];
	    }function ua(a, b, c) {
	      for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);return c;
	    }function va(a, b, c, d, e) {
	      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));return g;
	    }function wa(a, b, c, d, e, f) {
	      return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
	        var j,
	            k,
	            l,
	            m = [],
	            n = [],
	            o = g.length,
	            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
	            q = !a || !f && b ? p : va(p, m, a, h, i),
	            r = c ? e || (f ? a : o || d) ? [] : g : q;if ((c && c(q, r, h, i), d)) {
	          j = va(r, n), d(j, [], h, i), k = j.length;while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
	        }if (f) {
	          if (e || a) {
	            if (e) {
	              j = [], k = r.length;while (k--) (l = r[k]) && j.push(q[k] = l);e(null, r = [], j, i);
	            }k = r.length;while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
	          }
	        } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
	      });
	    }function xa(a) {
	      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
	        return a === b;
	      }, h, !0), l = sa(function (a) {
	        return J(b, a) > -1;
	      }, h, !0), m = [function (a, c, d) {
	        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
	      }]; f > i; i++) if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
	        if ((c = d.filter[a[i].type].apply(null, a[i].matches), c[u])) {
	          for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
	        }m.push(c);
	      }return ta(m);
	    }function ya(a, b) {
	      var c = b.length > 0,
	          e = a.length > 0,
	          f = function f(_f, g, h, i, k) {
	        var l,
	            m,
	            o,
	            p = 0,
	            q = "0",
	            r = _f && [],
	            s = [],
	            t = j,
	            u = _f || e && d.find.TAG("*", k),
	            v = w += null == t ? 1 : Math.random() || .1,
	            x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
	          if (e && l) {
	            m = 0;while (o = a[m++]) if (o(l, g, h)) {
	              i.push(l);break;
	            }k && (w = v);
	          }c && ((l = !o && l) && p--, _f && r.push(l));
	        }if ((p += q, c && q !== p)) {
	          m = 0;while (o = b[m++]) o(r, s, g, h);if (_f) {
	            if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));s = va(s);
	          }H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
	        }return k && (w = v, j = t), r;
	      };return c ? ia(f) : f;
	    }return h = ga.compile = function (a, b) {
	      var c,
	          d = [],
	          e = [],
	          f = A[a + " "];if (!f) {
	        b || (b = g(a)), c = b.length;while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);f = A(a, ya(e, d)), f.selector = a;
	      }return f;
	    }, i = ga.select = function (a, b, e, f) {
	      var i,
	          j,
	          k,
	          l,
	          m,
	          n = "function" == typeof a && a,
	          o = !f && g(a = n.selector || a);if ((e = e || [], 1 === o.length)) {
	        if ((j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type])) {
	          if ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
	        }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
	          if ((k = j[i], d.relative[l = k.type])) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
	            if ((j.splice(i, 1), a = f.length && ra(j), !a)) return H.apply(e, f), e;break;
	          }
	        }
	      }return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
	    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
	      return 1 & a.compareDocumentPosition(n.createElement("div"));
	    }), ja(function (a) {
	      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
	    }) || ka("type|href|height|width", function (a, b, c) {
	      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
	    }), c.attributes && ja(function (a) {
	      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
	    }) || ka("value", function (a, b, c) {
	      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
	    }), ja(function (a) {
	      return null == a.getAttribute("disabled");
	    }) || ka(K, function (a, b, c) {
	      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
	    }), ga;
	  })(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
	      v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	      w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
	    if (n.isFunction(b)) return n.grep(a, function (a, d) {
	      return !!b.call(a, d, a) !== c;
	    });if (b.nodeType) return n.grep(a, function (a) {
	      return a === b !== c;
	    });if ("string" == typeof b) {
	      if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
	    }return n.grep(a, function (a) {
	      return g.call(b, a) >= 0 !== c;
	    });
	  }n.filter = function (a, b, c) {
	    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
	      return 1 === a.nodeType;
	    }));
	  }, n.fn.extend({ find: function find(a) {
	      var b,
	          c = this.length,
	          d = [],
	          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
	        for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
	      }));for (b = 0; c > b; b++) n.find(a, e[b], d);return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
	    }, filter: function filter(a) {
	      return this.pushStack(x(this, a || [], !1));
	    }, not: function not(a) {
	      return this.pushStack(x(this, a || [], !0));
	    }, is: function is(a) {
	      return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
	    } });var y,
	      z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	      A = n.fn.init = function (a, b) {
	    var c, d;if (!a) return this;if ("string" == typeof a) {
	      if ((c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
	        if ((b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);return this;
	      }return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
	    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
	  };A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
	      C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
	      var d = [],
	          e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
	        if (e && n(a).is(c)) break;d.push(a);
	      }return d;
	    }, sibling: function sibling(a, b) {
	      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);return c;
	    } }), n.fn.extend({ has: function has(a) {
	      var b = n(a, this),
	          c = b.length;return this.filter(function () {
	        for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
	      });
	    }, closest: function closest(a, b) {
	      for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
	        f.push(c);break;
	      }return this.pushStack(f.length > 1 ? n.unique(f) : f);
	    }, index: function index(a) {
	      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	    }, add: function add(a, b) {
	      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
	    }, addBack: function addBack(a) {
	      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
	    } });function D(a, b) {
	    while ((a = a[b]) && 1 !== a.nodeType);return a;
	  }n.each({ parent: function parent(a) {
	      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
	    }, parents: function parents(a) {
	      return n.dir(a, "parentNode");
	    }, parentsUntil: function parentsUntil(a, b, c) {
	      return n.dir(a, "parentNode", c);
	    }, next: function next(a) {
	      return D(a, "nextSibling");
	    }, prev: function prev(a) {
	      return D(a, "previousSibling");
	    }, nextAll: function nextAll(a) {
	      return n.dir(a, "nextSibling");
	    }, prevAll: function prevAll(a) {
	      return n.dir(a, "previousSibling");
	    }, nextUntil: function nextUntil(a, b, c) {
	      return n.dir(a, "nextSibling", c);
	    }, prevUntil: function prevUntil(a, b, c) {
	      return n.dir(a, "previousSibling", c);
	    }, siblings: function siblings(a) {
	      return n.sibling((a.parentNode || {}).firstChild, a);
	    }, children: function children(a) {
	      return n.sibling(a.firstChild);
	    }, contents: function contents(a) {
	      return a.contentDocument || n.merge([], a.childNodes);
	    } }, function (a, b) {
	    n.fn[a] = function (c, d) {
	      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
	    };
	  });var E = /\S+/g,
	      F = {};function G(a) {
	    var b = F[a] = {};return n.each(a.match(E) || [], function (a, c) {
	      b[c] = !0;
	    }), b;
	  }n.Callbacks = function (a) {
	    a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
	        c,
	        d,
	        e,
	        f,
	        g,
	        h = [],
	        i = !a.once && [],
	        j = function j(l) {
	      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
	        b = !1;break;
	      }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
	    },
	        k = { add: function add() {
	        if (h) {
	          var c = h.length;!(function g(b) {
	            n.each(b, function (b, c) {
	              var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
	            });
	          })(arguments), d ? f = h.length : b && (e = c, j(b));
	        }return this;
	      }, remove: function remove() {
	        return h && n.each(arguments, function (a, b) {
	          var c;while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
	        }), this;
	      }, has: function has(a) {
	        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
	      }, empty: function empty() {
	        return h = [], f = 0, this;
	      }, disable: function disable() {
	        return h = i = b = void 0, this;
	      }, disabled: function disabled() {
	        return !h;
	      }, lock: function lock() {
	        return i = void 0, b || k.disable(), this;
	      }, locked: function locked() {
	        return !i;
	      }, fireWith: function fireWith(a, b) {
	        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
	      }, fire: function fire() {
	        return k.fireWith(this, arguments), this;
	      }, fired: function fired() {
	        return !!c;
	      } };return k;
	  }, n.extend({ Deferred: function Deferred(a) {
	      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
	          c = "pending",
	          d = { state: function state() {
	          return c;
	        }, always: function always() {
	          return e.done(arguments).fail(arguments), this;
	        }, then: function then() {
	          var a = arguments;return n.Deferred(function (c) {
	            n.each(b, function (b, f) {
	              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
	                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
	              });
	            }), a = null;
	          }).promise();
	        }, promise: function promise(a) {
	          return null != a ? n.extend(a, d) : d;
	        } },
	          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
	        var g = f[2],
	            h = f[3];d[f[1]] = g.add, h && g.add(function () {
	          c = h;
	        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
	          return e[f[0] + "With"](this === e ? d : this, arguments), this;
	        }, e[f[0] + "With"] = g.fireWith;
	      }), d.promise(e), a && a.call(e, e), e;
	    }, when: function when(a) {
	      var b = 0,
	          c = d.call(arguments),
	          e = c.length,
	          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
	          g = 1 === f ? a : n.Deferred(),
	          h = function h(a, b, c) {
	        return function (e) {
	          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
	        };
	      },
	          i,
	          j,
	          k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;return f || g.resolveWith(k, c), g.promise();
	    } });var H;n.fn.ready = function (a) {
	    return n.ready.promise().done(a), this;
	  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
	      a ? n.readyWait++ : n.ready(!0);
	    }, ready: function ready(a) {
	      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
	    } });function I() {
	    l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
	  }n.ready.promise = function (b) {
	    return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
	  }, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
	    var h = 0,
	        i = a.length,
	        j = null == c;if ("object" === n.type(c)) {
	      e = !0;for (h in c) n.access(a, b, h, c[h], !0, f, g);
	    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
	      return j.call(n(a), c);
	    })), b)) for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	  };n.acceptData = function (a) {
	    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
	  };function K() {
	    Object.defineProperty(this.cache = {}, 0, { get: function get() {
	        return {};
	      } }), this.expando = n.expando + K.uid++;
	  }K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
	      if (!K.accepts(a)) return 0;var b = {},
	          c = a[this.expando];if (!c) {
	        c = K.uid++;try {
	          b[this.expando] = { value: c }, Object.defineProperties(a, b);
	        } catch (d) {
	          b[this.expando] = c, n.extend(a, b);
	        }
	      }return this.cache[c] || (this.cache[c] = {}), c;
	    }, set: function set(a, b, c) {
	      var d,
	          e = this.key(a),
	          f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) f[d] = b[d];return f;
	    }, get: function get(a, b) {
	      var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
	    }, access: function access(a, b, c) {
	      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
	    }, remove: function remove(a, b) {
	      var c,
	          d,
	          e,
	          f = this.key(a),
	          g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
	        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) delete g[d[c]];
	      }
	    }, hasData: function hasData(a) {
	      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
	    }, discard: function discard(a) {
	      a[this.expando] && delete this.cache[a[this.expando]];
	    } };var L = new K(),
	      M = new K(),
	      N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	      O = /([A-Z])/g;function P(a, b, c) {
	    var d;if (void 0 === c && 1 === a.nodeType) if ((d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c)) {
	      try {
	        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
	      } catch (e) {}M.set(a, b, c);
	    } else c = void 0;return c;
	  }n.extend({ hasData: function hasData(a) {
	      return M.hasData(a) || L.hasData(a);
	    }, data: function data(a, b, c) {
	      return M.access(a, b, c);
	    }, removeData: function removeData(a, b) {
	      M.remove(a, b);
	    }, _data: function _data(a, b, c) {
	      return L.access(a, b, c);
	    }, _removeData: function _removeData(a, b) {
	      L.remove(a, b);
	    } }), n.fn.extend({ data: function data(a, b) {
	      var c,
	          d,
	          e,
	          f = this[0],
	          g = f && f.attributes;if (void 0 === a) {
	        if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
	          c = g.length;while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));L.set(f, "hasDataAttrs", !0);
	        }return e;
	      }return "object" == typeof a ? this.each(function () {
	        M.set(this, a);
	      }) : J(this, function (b) {
	        var c,
	            d = n.camelCase(a);if (f && void 0 === b) {
	          if ((c = M.get(f, a), void 0 !== c)) return c;if ((c = M.get(f, d), void 0 !== c)) return c;if ((c = P(f, d, void 0), void 0 !== c)) return c;
	        } else this.each(function () {
	          var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
	        });
	      }, null, b, arguments.length > 1, null, !0);
	    }, removeData: function removeData(a) {
	      return this.each(function () {
	        M.remove(this, a);
	      });
	    } }), n.extend({ queue: function queue(a, b, c) {
	      var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
	    }, dequeue: function dequeue(a, b) {
	      b = b || "fx";var c = n.queue(a, b),
	          d = c.length,
	          e = c.shift(),
	          f = n._queueHooks(a, b),
	          g = function g() {
	        n.dequeue(a, b);
	      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
	    }, _queueHooks: function _queueHooks(a, b) {
	      var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
	          L.remove(a, [b + "queue", c]);
	        }) });
	    } }), n.fn.extend({ queue: function queue(a, b) {
	      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
	        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
	      });
	    }, dequeue: function dequeue(a) {
	      return this.each(function () {
	        n.dequeue(this, a);
	      });
	    }, clearQueue: function clearQueue(a) {
	      return this.queue(a || "fx", []);
	    }, promise: function promise(a, b) {
	      var c,
	          d = 1,
	          e = n.Deferred(),
	          f = this,
	          g = this.length,
	          h = function h() {
	        --d || e.resolveWith(f, [f]);
	      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));return h(), e.promise(b);
	    } });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	      R = ["Top", "Right", "Bottom", "Left"],
	      S = function S(a, b) {
	    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
	  },
	      T = /^(?:checkbox|radio)$/i;!(function () {
	    var a = l.createDocumentFragment(),
	        b = a.appendChild(l.createElement("div")),
	        c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	  })();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
	      W = /^(?:mouse|pointer|contextmenu)|click/,
	      X = /^(?:focusinfocus|focusoutblur)$/,
	      Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
	    return !0;
	  }function $() {
	    return !1;
	  }function _() {
	    try {
	      return l.activeElement;
	    } catch (a) {}
	  }n.event = { global: {}, add: function add(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          o,
	          p,
	          q,
	          r = L.get(a);if (r) {
	        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
	          return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
	        }), b = (b || "").match(E) || [""], j = b.length;while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
	      }
	    }, remove: function remove(a, b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          j,
	          k,
	          l,
	          m,
	          o,
	          p,
	          q,
	          r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
	        b = (b || "").match(E) || [""], j = b.length;while (j--) if ((h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o)) {
	          l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
	        } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
	      }
	    }, trigger: function trigger(b, c, d, e) {
	      var f,
	          g,
	          h,
	          i,
	          k,
	          m,
	          o,
	          p = [d || l],
	          q = j.call(b, "type") ? b.type : b,
	          r = j.call(b, "namespace") ? b.namespace.split(".") : [];if ((g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1))) {
	        if (!e && !o.noBubble && !n.isWindow(d)) {
	          for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
	        }f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
	      }
	    }, dispatch: function dispatch(a) {
	      a = n.event.fix(a);var b,
	          c,
	          e,
	          f,
	          g,
	          h = [],
	          i = d.call(arguments),
	          j = (L.get(this, "events") || {})[a.type] || [],
	          k = n.event.special[a.type] || {};if ((i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1)) {
	        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
	          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
	        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
	      }
	    }, handlers: function handlers(a, b) {
	      var c,
	          d,
	          e,
	          f,
	          g = [],
	          h = b.delegateCount,
	          i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
	        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);d.length && g.push({ elem: i, handlers: d });
	      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
	    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
	        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
	      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
	        var c,
	            d,
	            e,
	            f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
	      } }, fix: function fix(a) {
	      if (a[n.expando]) return a;var b,
	          c,
	          d,
	          e = a.type,
	          f = a,
	          g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) c = d[b], a[c] = f[c];return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
	    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	          return this !== _() && this.focus ? (this.focus(), !1) : void 0;
	        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	          return this === _() && this.blur ? (this.blur(), !1) : void 0;
	        }, delegateType: "focusout" }, click: { trigger: function trigger() {
	          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
	        }, _default: function _default(a) {
	          return n.nodeName(a.target, "a");
	        } }, beforeunload: { postDispatch: function postDispatch(a) {
	          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
	        } } }, simulate: function simulate(a, b, c, d) {
	      var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
	    } }, n.removeEvent = function (a, b, c) {
	    a.removeEventListener && a.removeEventListener(b, c, !1);
	  }, n.Event = function (a, b) {
	    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
	  }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
	      var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
	    }, stopPropagation: function stopPropagation() {
	      var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
	    }, stopImmediatePropagation: function stopImmediatePropagation() {
	      var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
	    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
	    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
	        var c,
	            d = this,
	            e = a.relatedTarget,
	            f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
	      } };
	  }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
	    var c = function c(a) {
	      n.event.simulate(b, a.target, n.event.fix(a), !0);
	    };n.event.special[b] = { setup: function setup() {
	        var d = this.ownerDocument || this,
	            e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
	      }, teardown: function teardown() {
	        var d = this.ownerDocument || this,
	            e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
	      } };
	  }), n.fn.extend({ on: function on(a, b, c, d, e) {
	      var f, g;if ("object" == typeof a) {
	        "string" != typeof b && (c = c || b, b = void 0);for (g in a) this.on(g, b, c, a[g], e);return this;
	      }if ((null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)) d = $;else if (!d) return this;return 1 === e && (f = d, d = function (a) {
	        return n().off(a), f.apply(this, arguments);
	      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
	        n.event.add(this, a, d, c, b);
	      });
	    }, one: function one(a, b, c, d) {
	      return this.on(a, b, c, d, 1);
	    }, off: function off(a, b, c) {
	      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == typeof a) {
	        for (e in a) this.off(e, b, a[e]);return this;
	      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
	        n.event.remove(this, a, c, b);
	      });
	    }, trigger: function trigger(a, b) {
	      return this.each(function () {
	        n.event.trigger(a, b, this);
	      });
	    }, triggerHandler: function triggerHandler(a, b) {
	      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
	    } });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	      ba = /<([\w:]+)/,
	      ca = /<|&#?\w+;/,
	      da = /<(?:script|style|link)/i,
	      ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
	      fa = /^$|\/(?:java|ecma)script/i,
	      ga = /^true\/(.*)/,
	      ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	      ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
	    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
	  }function ka(a) {
	    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	  }function la(a) {
	    var b = ga.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	  }function ma(a, b) {
	    for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
	  }function na(a, b) {
	    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
	      if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
	        delete g.handle, g.events = {};for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
	      }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
	    }
	  }function oa(a, b) {
	    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
	  }function pa(a, b) {
	    var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
	  }n.extend({ clone: function clone(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h = a.cloneNode(!0),
	          i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]);else na(a, h);return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
	    }, buildFragment: function buildFragment(a, b, c, d) {
	      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if ((e = a[m], e || 0 === e)) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
	        f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) f = f.lastChild;n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
	      } else l.push(b.createTextNode(e));k.textContent = "", m = 0;while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
	        j = 0;while (e = f[j++]) fa.test(e.type || "") && c.push(e);
	      }return k;
	    }, cleanData: function cleanData(a) {
	      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
	        if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
	          if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);L.cache[e] && delete L.cache[e];
	        }delete M.cache[c[M.expando]];
	      }
	    } }), n.fn.extend({ text: function text(a) {
	      return J(this, function (a) {
	        return void 0 === a ? n.text(this) : this.empty().each(function () {
	          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
	        });
	      }, null, a, arguments.length);
	    }, append: function append() {
	      return this.domManip(arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = ja(this, a);b.appendChild(a);
	        }
	      });
	    }, prepend: function prepend() {
	      return this.domManip(arguments, function (a) {
	        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	          var b = ja(this, a);b.insertBefore(a, b.firstChild);
	        }
	      });
	    }, before: function before() {
	      return this.domManip(arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this);
	      });
	    }, after: function after() {
	      return this.domManip(arguments, function (a) {
	        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
	      });
	    }, remove: function remove(a, b) {
	      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));return this;
	    }, empty: function empty() {
	      for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");return this;
	    }, clone: function clone(a, b) {
	      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
	        return n.clone(this, a, b);
	      });
	    }, html: function html(a) {
	      return J(this, function (a) {
	        var b = this[0] || {},
	            c = 0,
	            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
	          a = a.replace(aa, "<$1></$2>");try {
	            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);b = 0;
	          } catch (e) {}
	        }b && this.empty().append(a);
	      }, null, a, arguments.length);
	    }, replaceWith: function replaceWith() {
	      var a = arguments[0];return this.domManip(arguments, function (b) {
	        a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
	      }), a && (a.length || a.nodeType) ? this : this.remove();
	    }, detach: function detach(a) {
	      return this.remove(a, !0);
	    }, domManip: function domManip(a, b) {
	      a = e.apply([], a);var c,
	          d,
	          f,
	          g,
	          h,
	          i,
	          j = 0,
	          l = this.length,
	          m = this,
	          o = l - 1,
	          p = a[0],
	          q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
	        var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
	      });if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
	        for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
	      }return this;
	    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
	    n.fn[a] = function (a) {
	      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());return this.pushStack(d);
	    };
	  });var qa,
	      ra = {};function sa(b, c) {
	    var d,
	        e = n(c.createElement(b)).appendTo(c.body),
	        f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return e.detach(), f;
	  }function ta(a) {
	    var b = l,
	        c = ra[a];return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
	  }var ua = /^margin/,
	      va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
	      wa = function wa(b) {
	    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
	  };function xa(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.style;return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	  }function ya(a, b) {
	    return { get: function get() {
	        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
	      } };
	  }!(function () {
	    var b,
	        c,
	        d = l.documentElement,
	        e = l.createElement("div"),
	        f = l.createElement("div");if (f.style) {
	      (function () {
	        var g = function g() {
	          f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
	        };

	        f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
	            return g(), b;
	          }, boxSizingReliable: function boxSizingReliable() {
	            return null == c && g(), c;
	          }, reliableMarginRight: function reliableMarginRight() {
	            var b,
	                c = f.appendChild(l.createElement("div"));return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
	          } });
	      })();
	    }
	  })(), n.swap = function (a, b, c, d) {
	    var e,
	        f,
	        g = {};for (f in b) g[f] = a.style[f], a.style[f] = b[f];e = c.apply(a, d || []);for (f in b) a.style[f] = g[f];return e;
	  };var za = /^(none|table(?!-c[ea]).+)/,
	      Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
	      Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
	      Ca = { position: "absolute", visibility: "hidden", display: "block" },
	      Da = { letterSpacing: "0", fontWeight: "400" },
	      Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
	    if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
	        d = b,
	        e = Ea.length;while (e--) if ((b = Ea[e] + c, b in a)) return b;return d;
	  }function Ga(a, b, c) {
	    var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
	  }function Ha(a, b, c, d, e) {
	    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));return g;
	  }function Ia(a, b, c) {
	    var d = !0,
	        e = "width" === b ? a.offsetWidth : a.offsetHeight,
	        f = wa(a),
	        g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
	      if ((e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e))) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
	    }return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
	  }function Ja(a, b) {
	    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));return a;
	  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
	          if (b) {
	            var c = xa(a, "opacity");return "" === c ? "1" : c;
	          }
	        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
	      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
	        var e,
	            f,
	            g,
	            h = n.camelCase(b),
	            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
	      }
	    }, css: function css(a, b, c, d) {
	      var e,
	          f,
	          g,
	          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
	    } }), n.each(["height", "width"], function (a, b) {
	    n.cssHooks[b] = { get: function get(a, c, d) {
	        return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
	          return Ia(a, b, d);
	        }) : Ia(a, b, d) : void 0;
	      }, set: function set(a, c, d) {
	        var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
	      } };
	  }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
	    return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
	  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
	    n.cssHooks[a + b] = { expand: function expand(c) {
	        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];return e;
	      } }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
	  }), n.fn.extend({ css: function css(a, b) {
	      return J(this, function (a, b, c) {
	        var d,
	            e,
	            f = {},
	            g = 0;if (n.isArray(b)) {
	          for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);return f;
	        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
	      }, a, b, arguments.length > 1);
	    }, show: function show() {
	      return Ja(this, !0);
	    }, hide: function hide() {
	      return Ja(this);
	    }, toggle: function toggle(a) {
	      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
	        S(this) ? n(this).show() : n(this).hide();
	      });
	    } });function Ka(a, b, c, d, e) {
	    return new Ka.prototype.init(a, b, c, d, e);
	  }n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
	      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
	    }, cur: function cur() {
	      var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
	    }, run: function run(a) {
	      var b,
	          c = Ka.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
	    } }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get(a) {
	        var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
	      }, set: function set(a) {
	        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
	      } } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set(a) {
	      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
	    } }, n.easing = { linear: function linear(a) {
	      return a;
	    }, swing: function swing(a) {
	      return .5 - Math.cos(a * Math.PI) / 2;
	    } }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
	      Ma,
	      Na = /^(?:toggle|show|hide)$/,
	      Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
	      Pa = /queueHooks$/,
	      Qa = [Va],
	      Ra = { "*": [function (a, b) {
	      var c = this.createTween(a, b),
	          d = c.cur(),
	          e = Oa.exec(b),
	          f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
	          g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
	          h = 1,
	          i = 20;if (g && g[3] !== f) {
	        f = f || g[3], e = e || [], g = +d || 1;do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
	      }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
	    }] };function Sa() {
	    return setTimeout(function () {
	      La = void 0;
	    }), La = n.now();
	  }function Ta(a, b) {
	    var c,
	        d = 0,
	        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;return b && (e.opacity = e.width = a), e;
	  }function Ua(a, b, c) {
	    for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
	  }function Va(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h,
	        i,
	        j,
	        k,
	        l = this,
	        m = {},
	        o = a.style,
	        p = a.nodeType && S(a),
	        q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
	      h.unqueued || i();
	    }), h.unqueued++, l.always(function () {
	      l.always(function () {
	        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
	      });
	    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
	      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
	    }));for (d in b) if ((e = b[d], Na.exec(e))) {
	      if ((delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show"))) {
	        if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
	      }m[d] = q && q[d] || n.style(a, d);
	    } else j = void 0;if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
	      q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
	        n(a).hide();
	      }), l.done(function () {
	        var b;L.remove(a, "fxshow");for (b in m) n.style(a, b, m[b]);
	      });for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
	    }
	  }function Wa(a, b) {
	    var c, d, e, f, g;for (c in a) if ((d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g)) {
	      f = g.expand(f), delete a[d];for (c in f) c in a || (a[c] = f[c], b[c] = e);
	    } else b[d] = e;
	  }function Xa(a, b, c) {
	    var d,
	        e,
	        f = 0,
	        g = Qa.length,
	        h = n.Deferred().always(function () {
	      delete i.elem;
	    }),
	        i = function i() {
	      if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
	    },
	        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
	        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
	      }, stop: function stop(b) {
	        var c = 0,
	            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) j.tweens[c].run(1);return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
	      } }),
	        k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	  }n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
	      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
	    }, prefilter: function prefilter(a, b) {
	      b ? Qa.unshift(a) : Qa.push(a);
	    } }), n.speed = function (a, b, c) {
	    var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
	      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
	    }, d;
	  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
	      return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
	    }, animate: function animate(a, b, c, d) {
	      var e = n.isEmptyObject(a),
	          f = n.speed(b, c, d),
	          g = function g() {
	        var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
	      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
	    }, stop: function stop(a, b, c) {
	      var d = function d(a) {
	        var b = a.stop;delete a.stop, b(c);
	      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
	        var b = !0,
	            e = null != a && a + "queueHooks",
	            f = n.timers,
	            g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));(b || !c) && n.dequeue(this, a);
	      });
	    }, finish: function finish(a) {
	      return a !== !1 && (a = a || "fx"), this.each(function () {
	        var b,
	            c = L.get(this),
	            d = c[a + "queue"],
	            e = c[a + "queueHooks"],
	            f = n.timers,
	            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);delete c.finish;
	      });
	    } }), n.each(["toggle", "show", "hide"], function (a, b) {
	    var c = n.fn[b];n.fn[b] = function (a, d, e) {
	      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
	    };
	  }), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
	    n.fn[a] = function (a, c, d) {
	      return this.animate(b, a, c, d);
	    };
	  }), n.timers = [], n.fx.tick = function () {
	    var a,
	        b = 0,
	        c = n.timers;for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);c.length || n.fx.stop(), La = void 0;
	  }, n.fx.timer = function (a) {
	    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
	  }, n.fx.interval = 13, n.fx.start = function () {
	    Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
	  }, n.fx.stop = function () {
	    clearInterval(Ma), Ma = null;
	  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
	    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
	      var d = setTimeout(b, a);c.stop = function () {
	        clearTimeout(d);
	      };
	    });
	  }, (function () {
	    var a = l.createElement("input"),
	        b = l.createElement("select"),
	        c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
	  })();var Ya,
	      Za,
	      $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
	      return J(this, n.attr, a, b, arguments.length > 1);
	    }, removeAttr: function removeAttr(a) {
	      return this.each(function () {
	        n.removeAttr(this, a);
	      });
	    } }), n.extend({ attr: function attr(a, b, c) {
	      var d,
	          e,
	          f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
	    }, removeAttr: function removeAttr(a, b) {
	      var c,
	          d,
	          e = 0,
	          f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
	    }, attrHooks: { type: { set: function set(a, b) {
	          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
	            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
	          }
	        } } } }), Za = { set: function set(a, b, c) {
	      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
	    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
	    var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
	      var e, f;return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
	    };
	  });var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
	      return J(this, n.prop, a, b, arguments.length > 1);
	    }, removeProp: function removeProp(a) {
	      return this.each(function () {
	        delete this[n.propFix[a] || a];
	      });
	    } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
	      var d,
	          e,
	          f,
	          g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
	    }, propHooks: { tabIndex: { get: function get(a) {
	          return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
	        } } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
	      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
	    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	    n.propFix[this.toLowerCase()] = this;
	  });var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h = "string" == typeof a && a,
	          i = 0,
	          j = this.length;if (n.isFunction(a)) return this.each(function (b) {
	        n(this).addClass(a.call(this, b, this.className));
	      });if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " "))) {
	        f = 0;while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");g = n.trim(d), c.className !== g && (c.className = g);
	      }return this;
	    }, removeClass: function removeClass(a) {
	      var b,
	          c,
	          d,
	          e,
	          f,
	          g,
	          h = 0 === arguments.length || "string" == typeof a && a,
	          i = 0,
	          j = this.length;if (n.isFunction(a)) return this.each(function (b) {
	        n(this).removeClass(a.call(this, b, this.className));
	      });if (h) for (b = (a || "").match(E) || []; j > i; i++) if ((c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : ""))) {
	        f = 0;while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
	      }return this;
	    }, toggleClass: function toggleClass(a, b) {
	      var c = typeof a;return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
	        n(this).toggleClass(a.call(this, c, this.className, b), b);
	      } : function () {
	        if ("string" === c) {
	          var b,
	              d = 0,
	              e = n(this),
	              f = a.match(E) || [];while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
	        } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
	      });
	    }, hasClass: function hasClass(a) {
	      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;return !1;
	    } });var bb = /\r/g;n.fn.extend({ val: function val(a) {
	      var b,
	          c,
	          d,
	          e = this[0];{
	        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
	          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
	            return null == a ? "" : a + "";
	          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
	        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
	      }
	    } }), n.extend({ valHooks: { option: { get: function get(a) {
	          var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
	        } }, select: { get: function get(a) {
	          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if ((c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup")))) {
	            if ((b = n(c).val(), f)) return b;g.push(b);
	          }return g;
	        }, set: function set(a, b) {
	          var c,
	              d,
	              e = a.options,
	              f = n.makeArray(b),
	              g = e.length;while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);return c || (a.selectedIndex = -1), f;
	        } } } }), n.each(["radio", "checkbox"], function () {
	    n.valHooks[this] = { set: function set(a, b) {
	        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
	      } }, k.checkOn || (n.valHooks[this].get = function (a) {
	      return null === a.getAttribute("value") ? "on" : a.value;
	    });
	  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
	    n.fn[b] = function (a, c) {
	      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
	    };
	  }), n.fn.extend({ hover: function hover(a, b) {
	      return this.mouseenter(a).mouseleave(b || a);
	    }, bind: function bind(a, b, c) {
	      return this.on(a, null, b, c);
	    }, unbind: function unbind(a, b) {
	      return this.off(a, null, b);
	    }, delegate: function delegate(a, b, c, d) {
	      return this.on(b, a, c, d);
	    }, undelegate: function undelegate(a, b, c) {
	      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
	    } });var cb = n.now(),
	      db = /\?/;n.parseJSON = function (a) {
	    return JSON.parse(a + "");
	  }, n.parseXML = function (a) {
	    var b, c;if (!a || "string" != typeof a) return null;try {
	      c = new DOMParser(), b = c.parseFromString(a, "text/xml");
	    } catch (d) {
	      b = void 0;
	    }return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
	  };var eb = /#.*$/,
	      fb = /([?&])_=[^&]*/,
	      gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	      hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	      ib = /^(?:GET|HEAD)$/,
	      jb = /^\/\//,
	      kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	      lb = {},
	      mb = {},
	      nb = "*/".concat("*"),
	      ob = a.location.href,
	      pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
	    return function (b, c) {
	      "string" != typeof b && (c = b, b = "*");var d,
	          e = 0,
	          f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
	    };
	  }function rb(a, b, c, d) {
	    var e = {},
	        f = a === mb;function g(h) {
	      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
	        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
	      }), i;
	    }return g(b.dataTypes[0]) || !e["*"] && g("*");
	  }function sb(a, b) {
	    var c,
	        d,
	        e = n.ajaxSettings.flatOptions || {};for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);return d && n.extend(!0, a, d), a;
	  }function tb(a, b, c) {
	    var d,
	        e,
	        f,
	        g,
	        h = a.contents,
	        i = a.dataTypes;while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));if (d) for (e in h) if (h[e] && h[e].test(d)) {
	      i.unshift(e);break;
	    }if (i[0] in c) f = i[0];else {
	      for (e in c) {
	        if (!i[0] || a.converters[e + " " + i[0]]) {
	          f = e;break;
	        }g || (g = e);
	      }f = f || g;
	    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	  }function ub(a, b, c, d) {
	    var e,
	        f,
	        g,
	        h,
	        i,
	        j = {},
	        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];f = k.shift();while (f) if ((a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
	      if ((g = j[i + " " + f] || j["* " + f], !g)) for (e in j) if ((h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))) {
	        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
	      }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
	        b = g(b);
	      } catch (l) {
	        return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
	      }
	    }return { state: "success", data: b };
	  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
	      return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
	    }, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
	      "object" == typeof a && (b = a, a = void 0), b = b || {};var c,
	          d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = n.ajaxSetup({}, b),
	          l = k.context || k,
	          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
	          o = n.Deferred(),
	          p = n.Callbacks("once memory"),
	          q = k.statusCode || {},
	          r = {},
	          s = {},
	          t = 0,
	          u = "canceled",
	          v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
	          var b;if (2 === t) {
	            if (!f) {
	              f = {};while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2];
	            }b = f[a.toLowerCase()];
	          }return null == b ? null : b;
	        }, getAllResponseHeaders: function getAllResponseHeaders() {
	          return 2 === t ? e : null;
	        }, setRequestHeader: function setRequestHeader(a, b) {
	          var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
	        }, overrideMimeType: function overrideMimeType(a) {
	          return t || (k.mimeType = a), this;
	        }, statusCode: function statusCode(a) {
	          var b;if (a) if (2 > t) for (b in a) q[b] = [q[b], a[b]];else v.always(a[v.status]);return this;
	        }, abort: function abort(a) {
	          var b = a || u;return c && c.abort(b), x(0, b), this;
	        } };if ((o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t)) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) v.setRequestHeader(j, k.headers[j]);if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);if (c = rb(mb, k, b, v)) {
	        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
	          v.abort("timeout");
	        }, k.timeout));try {
	          t = 1, c.send(r, x);
	        } catch (w) {
	          if (!(2 > t)) throw w;x(-1, w);
	        }
	      } else x(-1, "No Transport");function x(a, b, f, h) {
	        var j,
	            r,
	            s,
	            u,
	            w,
	            x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
	      }return v;
	    }, getJSON: function getJSON(a, b, c) {
	      return n.get(a, b, c, "json");
	    }, getScript: function getScript(a, b) {
	      return n.get(a, void 0, b, "script");
	    } }), n.each(["get", "post"], function (a, b) {
	    n[b] = function (a, c, d, e) {
	      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
	    };
	  }), n._evalUrl = function (a) {
	    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	  }, n.fn.extend({ wrapAll: function wrapAll(a) {
	      var b;return n.isFunction(a) ? this.each(function (b) {
	        n(this).wrapAll(a.call(this, b));
	      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
	        var a = this;while (a.firstElementChild) a = a.firstElementChild;return a;
	      }).append(this)), this);
	    }, wrapInner: function wrapInner(a) {
	      return this.each(n.isFunction(a) ? function (b) {
	        n(this).wrapInner(a.call(this, b));
	      } : function () {
	        var b = n(this),
	            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
	      });
	    }, wrap: function wrap(a) {
	      var b = n.isFunction(a);return this.each(function (c) {
	        n(this).wrapAll(b ? a.call(this, c) : a);
	      });
	    }, unwrap: function unwrap() {
	      return this.parent().each(function () {
	        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
	      }).end();
	    } }), n.expr.filters.hidden = function (a) {
	    return a.offsetWidth <= 0 && a.offsetHeight <= 0;
	  }, n.expr.filters.visible = function (a) {
	    return !n.expr.filters.hidden(a);
	  };var vb = /%20/g,
	      wb = /\[\]$/,
	      xb = /\r?\n/g,
	      yb = /^(?:submit|button|image|reset|file)$/i,
	      zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
	    var e;if (n.isArray(b)) n.each(b, function (b, e) {
	      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
	    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
	  }n.param = function (a, b) {
	    var c,
	        d = [],
	        e = function e(a, b) {
	      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
	    };if ((void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))) n.each(a, function () {
	      e(this.name, this.value);
	    });else for (c in a) Ab(c, a[c], b, e);return d.join("&").replace(vb, "+");
	  }, n.fn.extend({ serialize: function serialize() {
	      return n.param(this.serializeArray());
	    }, serializeArray: function serializeArray() {
	      return this.map(function () {
	        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
	      }).filter(function () {
	        var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
	      }).map(function (a, b) {
	        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
	          return { name: b.name, value: a.replace(xb, "\r\n") };
	        }) : { name: b.name, value: c.replace(xb, "\r\n") };
	      }).get();
	    } }), n.ajaxSettings.xhr = function () {
	    try {
	      return new XMLHttpRequest();
	    } catch (a) {}
	  };var Bb = 0,
	      Cb = {},
	      Db = { 0: 200, 1223: 204 },
	      Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
	    for (var a in Cb) Cb[a]();
	  }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
	    var b;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
	        var e,
	            f = a.xhr(),
	            g = ++Bb;if ((f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)) for (e in a.xhrFields) f[e] = a.xhrFields[e];a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) f.setRequestHeader(e, c[e]);b = function (a) {
	          return function () {
	            b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
	          };
	        }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");try {
	          f.send(a.hasContent && a.data || null);
	        } catch (h) {
	          if (b) throw h;
	        }
	      }, abort: function abort() {
	        b && b();
	      } } : void 0;
	  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
	        return n.globalEval(a), a;
	      } } }), n.ajaxPrefilter("script", function (a) {
	    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	  }), n.ajaxTransport("script", function (a) {
	    if (a.crossDomain) {
	      var b, c;return { send: function send(d, e) {
	          b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", c = function (a) {
	            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
	          }), l.head.appendChild(b[0]);
	        }, abort: function abort() {
	          c && c();
	        } };
	    }
	  });var Fb = [],
	      Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	      var a = Fb.pop() || n.expando + "_" + cb++;return this[a] = !0, a;
	    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
	    var e,
	        f,
	        g,
	        h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
	      return g || n.error(e + " was not called"), g[0];
	    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
	      g = arguments;
	    }, d.always(function () {
	      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
	    }), "script") : void 0;
	  }), n.parseHTML = function (a, b, c) {
	    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
	        e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
	  };var Hb = n.fn.load;n.fn.load = function (a, b, c) {
	    if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
	        e,
	        f,
	        g = this,
	        h = a.indexOf(" ");return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
	      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
	    }).complete(c && function (a, b) {
	      g.each(c, f || [a.responseText, b, a]);
	    }), this;
	  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
	    n.fn[b] = function (a) {
	      return this.on(b, a);
	    };
	  }), n.expr.filters.animated = function (a) {
	    return n.grep(n.timers, function (b) {
	      return a === b.elem;
	    }).length;
	  };var Ib = a.document.documentElement;function Jb(a) {
	    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	  }n.offset = { setOffset: function setOffset(a, b, c) {
	      var d,
	          e,
	          f,
	          g,
	          h,
	          i,
	          j,
	          k = n.css(a, "position"),
	          l = n(a),
	          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
	    } }, n.fn.extend({ offset: function offset(a) {
	      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
	        n.offset.setOffset(this, a, b);
	      });var b,
	          c,
	          d = this[0],
	          e = { top: 0, left: 0 },
	          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
	    }, position: function position() {
	      if (this[0]) {
	        var a,
	            b,
	            c = this[0],
	            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
	      }
	    }, offsetParent: function offsetParent() {
	      return this.map(function () {
	        var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;return a || Ib;
	      });
	    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
	    var d = "pageYOffset" === c;n.fn[b] = function (e) {
	      return J(this, function (b, e, f) {
	        var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
	      }, b, e, arguments.length, null);
	    };
	  }), n.each(["top", "left"], function (a, b) {
	    n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
	      return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
	    });
	  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
	    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
	      n.fn[d] = function (d, e) {
	        var f = arguments.length && (c || "boolean" != typeof d),
	            g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
	          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
	        }, b, f ? d : void 0, f, null);
	      };
	    });
	  }), n.fn.size = function () {
	    return this.length;
	  }, n.fn.andSelf = n.fn.addBack, "function" == "function" && __webpack_require__(3) && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return n;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Kb = a.jQuery,
	      Lb = a.$;return n.noConflict = function (b) {
	    return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
	  }, typeof b === U && (a.jQuery = a.$ = n), n;
	});
	//# sourceMappingURL=jquery.min.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 4 */
/***/ function(module, exports) {

	!function($) {

	"use strict";

	var FOUNDATION_VERSION = '6.2.1';

	// Global Foundation object
	// This is attached to the window, or used as a module for AMD/Browserify
	var Foundation = {
	  version: FOUNDATION_VERSION,

	  /**
	   * Stores initialized plugins.
	   */
	  _plugins: {},

	  /**
	   * Stores generated unique ids for plugin instances
	   */
	  _uuids: [],

	  /**
	   * Returns a boolean for RTL support
	   */
	  rtl: function(){
	    return $('html').attr('dir') === 'rtl';
	  },
	  /**
	   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
	   * @param {Object} plugin - The constructor of the plugin.
	   */
	  plugin: function(plugin, name) {
	    // Object key to use when adding to global Foundation object
	    // Examples: Foundation.Reveal, Foundation.OffCanvas
	    var className = (name || functionName(plugin));
	    // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
	    // Examples: data-reveal, data-off-canvas
	    var attrName  = hyphenate(className);

	    // Add to the Foundation object and the plugins list (for reflowing)
	    this._plugins[attrName] = this[className] = plugin;
	  },
	  /**
	   * @function
	   * Populates the _uuids array with pointers to each individual plugin instance.
	   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
	   * Also fires the initialization event for each plugin, consolidating repeditive code.
	   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	   * @param {String} name - the name of the plugin, passed as a camelCased string.
	   * @fires Plugin#init
	   */
	  registerPlugin: function(plugin, name){
	    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
	    plugin.uuid = this.GetYoDigits(6, pluginName);

	    if(!plugin.$element.attr(`data-${pluginName}`)){ plugin.$element.attr(`data-${pluginName}`, plugin.uuid); }
	    if(!plugin.$element.data('zfPlugin')){ plugin.$element.data('zfPlugin', plugin); }
	          /**
	           * Fires when the plugin has initialized.
	           * @event Plugin#init
	           */
	    plugin.$element.trigger(`init.zf.${pluginName}`);

	    this._uuids.push(plugin.uuid);

	    return;
	  },
	  /**
	   * @function
	   * Removes the plugins uuid from the _uuids array.
	   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
	   * Also fires the destroyed event for the plugin, consolidating repeditive code.
	   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	   * @fires Plugin#destroyed
	   */
	  unregisterPlugin: function(plugin){
	    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

	    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);
	    plugin.$element.removeAttr(`data-${pluginName}`).removeData('zfPlugin')
	          /**
	           * Fires when the plugin has been destroyed.
	           * @event Plugin#destroyed
	           */
	          .trigger(`destroyed.zf.${pluginName}`);
	    for(var prop in plugin){
	      plugin[prop] = null;//clean up script to prep for garbage collection.
	    }
	    return;
	  },

	  /**
	   * @function
	   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
	   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
	   * @default If no argument is passed, reflow all currently active plugins.
	   */
	   reInit: function(plugins){
	     var isJQ = plugins instanceof $;
	     try{
	       if(isJQ){
	         plugins.each(function(){
	           $(this).data('zfPlugin')._init();
	         });
	       }else{
	         var type = typeof plugins,
	         _this = this,
	         fns = {
	           'object': function(plgs){
	             plgs.forEach(function(p){
	               p = hyphenate(p);
	               $('[data-'+ p +']').foundation('_init');
	             });
	           },
	           'string': function(){
	             plugins = hyphenate(plugins);
	             $('[data-'+ plugins +']').foundation('_init');
	           },
	           'undefined': function(){
	             this['object'](Object.keys(_this._plugins));
	           }
	         };
	         fns[type](plugins);
	       }
	     }catch(err){
	       console.error(err);
	     }finally{
	       return plugins;
	     }
	   },

	  /**
	   * returns a random base-36 uid with namespacing
	   * @function
	   * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
	   * @param {String} namespace - name of plugin to be incorporated in uid, optional.
	   * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
	   * @returns {String} - unique id
	   */
	  GetYoDigits: function(length, namespace){
	    length = length || 6;
	    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1) + (namespace ? `-${namespace}` : '');
	  },
	  /**
	   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
	   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
	   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
	   */
	  reflow: function(elem, plugins) {

	    // If plugins is undefined, just grab everything
	    if (typeof plugins === 'undefined') {
	      plugins = Object.keys(this._plugins);
	    }
	    // If plugins is a string, convert it to an array with one item
	    else if (typeof plugins === 'string') {
	      plugins = [plugins];
	    }

	    var _this = this;

	    // Iterate through each plugin
	    $.each(plugins, function(i, name) {
	      // Get the current plugin
	      var plugin = _this._plugins[name];

	      // Localize the search to all elements inside elem, as well as elem itself, unless elem === document
	      var $elem = $(elem).find('[data-'+name+']').addBack('[data-'+name+']');

	      // For each plugin found, initialize it
	      $elem.each(function() {
	        var $el = $(this),
	            opts = {};
	        // Don't double-dip on plugins
	        if ($el.data('zfPlugin')) {
	          console.warn("Tried to initialize "+name+" on an element that already has a Foundation plugin.");
	          return;
	        }

	        if($el.attr('data-options')){
	          var thing = $el.attr('data-options').split(';').forEach(function(e, i){
	            var opt = e.split(':').map(function(el){ return el.trim(); });
	            if(opt[0]) opts[opt[0]] = parseValue(opt[1]);
	          });
	        }
	        try{
	          $el.data('zfPlugin', new plugin($(this), opts));
	        }catch(er){
	          console.error(er);
	        }finally{
	          return;
	        }
	      });
	    });
	  },
	  getFnName: functionName,
	  transitionend: function($elem){
	    var transitions = {
	      'transition': 'transitionend',
	      'WebkitTransition': 'webkitTransitionEnd',
	      'MozTransition': 'transitionend',
	      'OTransition': 'otransitionend'
	    };
	    var elem = document.createElement('div'),
	        end;

	    for (var t in transitions){
	      if (typeof elem.style[t] !== 'undefined'){
	        end = transitions[t];
	      }
	    }
	    if(end){
	      return end;
	    }else{
	      end = setTimeout(function(){
	        $elem.triggerHandler('transitionend', [$elem]);
	      }, 1);
	      return 'transitionend';
	    }
	  }
	};

	Foundation.util = {
	  /**
	   * Function for applying a debounce effect to a function call.
	   * @function
	   * @param {Function} func - Function to be called at end of timeout.
	   * @param {Number} delay - Time in ms to delay the call of `func`.
	   * @returns function
	   */
	  throttle: function (func, delay) {
	    var timer = null;

	    return function () {
	      var context = this, args = arguments;

	      if (timer === null) {
	        timer = setTimeout(function () {
	          func.apply(context, args);
	          timer = null;
	        }, delay);
	      }
	    };
	  }
	};

	// TODO: consider not making this a jQuery function
	// TODO: need way to reflow vs. re-initialize
	/**
	 * The Foundation jQuery method.
	 * @param {String|Array} method - An action to perform on the current jQuery object.
	 */
	var foundation = function(method) {
	  var type = typeof method,
	      $meta = $('meta.foundation-mq'),
	      $noJS = $('.no-js');

	  if(!$meta.length){
	    $('<meta class="foundation-mq">').appendTo(document.head);
	  }
	  if($noJS.length){
	    $noJS.removeClass('no-js');
	  }

	  if(type === 'undefined'){//needs to initialize the Foundation object, or an individual plugin.
	    Foundation.MediaQuery._init();
	    Foundation.reflow(this);
	  }else if(type === 'string'){//an individual method to invoke on a plugin or group of plugins
	    var args = Array.prototype.slice.call(arguments, 1);//collect all the arguments, if necessary
	    var plugClass = this.data('zfPlugin');//determine the class of plugin

	    if(plugClass !== undefined && plugClass[method] !== undefined){//make sure both the class and method exist
	      if(this.length === 1){//if there's only one, call it directly.
	          plugClass[method].apply(plugClass, args);
	      }else{
	        this.each(function(i, el){//otherwise loop through the jQuery collection and invoke the method on each
	          plugClass[method].apply($(el).data('zfPlugin'), args);
	        });
	      }
	    }else{//error for no class or no method
	      throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
	    }
	  }else{//error for invalid argument type
	    throw new TypeError(`We're sorry, ${type} is not a valid parameter. You must use a string representing the method you wish to invoke.`);
	  }
	  return this;
	};

	window.Foundation = Foundation;
	$.fn.foundation = foundation;

	// Polyfill for requestAnimationFrame
	(function() {
	  if (!Date.now || !window.Date.now)
	    window.Date.now = Date.now = function() { return new Date().getTime(); };

	  var vendors = ['webkit', 'moz'];
	  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	      var vp = vendors[i];
	      window.requestAnimationFrame = window[vp+'RequestAnimationFrame'];
	      window.cancelAnimationFrame = (window[vp+'CancelAnimationFrame']
	                                 || window[vp+'CancelRequestAnimationFrame']);
	  }
	  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)
	    || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	    var lastTime = 0;
	    window.requestAnimationFrame = function(callback) {
	        var now = Date.now();
	        var nextTime = Math.max(lastTime + 16, now);
	        return setTimeout(function() { callback(lastTime = nextTime); },
	                          nextTime - now);
	    };
	    window.cancelAnimationFrame = clearTimeout;
	  }
	  /**
	   * Polyfill for performance.now, required by rAF
	   */
	  if(!window.performance || !window.performance.now){
	    window.performance = {
	      start: Date.now(),
	      now: function(){ return Date.now() - this.start; }
	    };
	  }
	})();
	if (!Function.prototype.bind) {
	  Function.prototype.bind = function(oThis) {
	    if (typeof this !== 'function') {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }

	    var aArgs   = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP    = function() {},
	        fBound  = function() {
	          return fToBind.apply(this instanceof fNOP
	                 ? this
	                 : oThis,
	                 aArgs.concat(Array.prototype.slice.call(arguments)));
	        };

	    if (this.prototype) {
	      // native functions don't have a prototype
	      fNOP.prototype = this.prototype;
	    }
	    fBound.prototype = new fNOP();

	    return fBound;
	  };
	}
	// Polyfill to get the name of a function in IE9
	function functionName(fn) {
	  if (Function.prototype.name === undefined) {
	    var funcNameRegex = /function\s([^(]{1,})\(/;
	    var results = (funcNameRegex).exec((fn).toString());
	    return (results && results.length > 1) ? results[1].trim() : "";
	  }
	  else if (fn.prototype === undefined) {
	    return fn.constructor.name;
	  }
	  else {
	    return fn.prototype.constructor.name;
	  }
	}
	function parseValue(str){
	  if(/true/.test(str)) return true;
	  else if(/false/.test(str)) return false;
	  else if(!isNaN(str * 1)) return parseFloat(str);
	  return str;
	}
	// Convert PascalCase to kebab-case
	// Thank you: http://stackoverflow.com/a/8955580
	function hyphenate(str) {
	  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	}(jQuery);


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	!function($) {

	// Default set of media queries
	const defaultQueries = {
	  'default' : 'only screen',
	  landscape : 'only screen and (orientation: landscape)',
	  portrait : 'only screen and (orientation: portrait)',
	  retina : 'only screen and (-webkit-min-device-pixel-ratio: 2),' +
	    'only screen and (min--moz-device-pixel-ratio: 2),' +
	    'only screen and (-o-min-device-pixel-ratio: 2/1),' +
	    'only screen and (min-device-pixel-ratio: 2),' +
	    'only screen and (min-resolution: 192dpi),' +
	    'only screen and (min-resolution: 2dppx)'
	};

	var MediaQuery = {
	  queries: [],

	  current: '',

	  /**
	   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
	   * @function
	   * @private
	   */
	  _init() {
	    var self = this;
	    var extractedStyles = $('.foundation-mq').css('font-family');
	    var namedQueries;

	    namedQueries = parseStyleToObject(extractedStyles);

	    for (var key in namedQueries) {
	      self.queries.push({
	        name: key,
	        value: `only screen and (min-width: ${namedQueries[key]})`
	      });
	    }

	    this.current = this._getCurrentSize();

	    this._watcher();
	  },

	  /**
	   * Checks if the screen is at least as wide as a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to check.
	   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
	   */
	  atLeast(size) {
	    var query = this.get(size);

	    if (query) {
	      return window.matchMedia(query).matches;
	    }

	    return false;
	  },

	  /**
	   * Gets the media query of a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to get.
	   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
	   */
	  get(size) {
	    for (var i in this.queries) {
	      var query = this.queries[i];
	      if (size === query.name) return query.value;
	    }

	    return null;
	  },

	  /**
	   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
	   * @function
	   * @private
	   * @returns {String} Name of the current breakpoint.
	   */
	  _getCurrentSize() {
	    var matched;

	    for (var i = 0; i < this.queries.length; i++) {
	      var query = this.queries[i];

	      if (window.matchMedia(query.value).matches) {
	        matched = query;
	      }
	    }

	    if (typeof matched === 'object') {
	      return matched.name;
	    } else {
	      return matched;
	    }
	  },

	  /**
	   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
	   * @function
	   * @private
	   */
	  _watcher() {
	    $(window).on('resize.zf.mediaquery', () => {
	      var newSize = this._getCurrentSize();

	      if (newSize !== this.current) {
	        // Broadcast the media query change on the window
	        $(window).trigger('changed.zf.mediaquery', [newSize, this.current]);

	        // Change the current media query
	        this.current = newSize;
	      }
	    });
	  }
	};

	Foundation.MediaQuery = MediaQuery;

	// matchMedia() polyfill - Test a CSS media type/query in JS.
	// Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license
	window.matchMedia || (window.matchMedia = function() {
	  'use strict';

	  // For browsers that support matchMedium api such as IE 9 and webkit
	  var styleMedia = (window.styleMedia || window.media);

	  // For those that don't support matchMedium
	  if (!styleMedia) {
	    var style   = document.createElement('style'),
	    script      = document.getElementsByTagName('script')[0],
	    info        = null;

	    style.type  = 'text/css';
	    style.id    = 'matchmediajs-test';

	    script.parentNode.insertBefore(style, script);

	    // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
	    info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

	    styleMedia = {
	      matchMedium(media) {
	        var text = `@media ${media}{ #matchmediajs-test { width: 1px; } }`;

	        // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
	        if (style.styleSheet) {
	          style.styleSheet.cssText = text;
	        } else {
	          style.textContent = text;
	        }

	        // Test if media query is true or false
	        return info.width === '1px';
	      }
	    }
	  }

	  return function(media) {
	    return {
	      matches: styleMedia.matchMedium(media || 'all'),
	      media: media || 'all'
	    };
	  }
	}());

	// Thank you: https://github.com/sindresorhus/query-string
	function parseStyleToObject(str) {
	  var styleObject = {};

	  if (typeof str !== 'string') {
	    return styleObject;
	  }

	  str = str.trim().slice(1, -1); // browsers re-quote string style values

	  if (!str) {
	    return styleObject;
	  }

	  styleObject = str.split('&').reduce(function(ret, param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = parts[0];
	    var val = parts[1];
	    key = decodeURIComponent(key);

	    // missing `=` should be `null`:
	    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
	    val = val === undefined ? null : decodeURIComponent(val);

	    if (!ret.hasOwnProperty(key)) {
	      ret[key] = val;
	    } else if (Array.isArray(ret[key])) {
	      ret[key].push(val);
	    } else {
	      ret[key] = [ret[key], val];
	    }
	    return ret;
	  }, {});

	  return styleObject;
	}

	Foundation.MediaQuery = MediaQuery;

	}(jQuery);


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*******************************************
	 *                                         *
	 * This util was created by Marius Olbertz *
	 * Please thank Marius on GitHub /owlbertz *
	 * or the web http://www.mariusolbertz.de/ *
	 *                                         *
	 ******************************************/

	'use strict';

	!function($) {

	const keyCodes = {
	  9: 'TAB',
	  13: 'ENTER',
	  27: 'ESCAPE',
	  32: 'SPACE',
	  37: 'ARROW_LEFT',
	  38: 'ARROW_UP',
	  39: 'ARROW_RIGHT',
	  40: 'ARROW_DOWN'
	}

	var commands = {}

	var Keyboard = {
	  keys: getKeyCodes(keyCodes),

	  /**
	   * Parses the (keyboard) event and returns a String that represents its key
	   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	   * @param {Event} event - the event generated by the event handler
	   * @return String key - String that represents the key pressed
	   */
	  parseKey(event) {
	    var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase();
	    if (event.shiftKey) key = `SHIFT_${key}`;
	    if (event.ctrlKey) key = `CTRL_${key}`;
	    if (event.altKey) key = `ALT_${key}`;
	    return key;
	  },

	  /**
	   * Handles the given (keyboard) event
	   * @param {Event} event - the event generated by the event handler
	   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
	   * @param {Objects} functions - collection of functions that are to be executed
	   */
	  handleKey(event, component, functions) {
	    var commandList = commands[component],
	      keyCode = this.parseKey(event),
	      cmds,
	      command,
	      fn;

	    if (!commandList) return console.warn('Component not defined!');

	    if (typeof commandList.ltr === 'undefined') { // this component does not differentiate between ltr and rtl
	        cmds = commandList; // use plain list
	    } else { // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
	        if (Foundation.rtl()) cmds = $.extend({}, commandList.ltr, commandList.rtl);

	        else cmds = $.extend({}, commandList.rtl, commandList.ltr);
	    }
	    command = cmds[keyCode];

	    fn = functions[command];
	    if (fn && typeof fn === 'function') { // execute function  if exists
	      fn.apply();
	      if (functions.handled || typeof functions.handled === 'function') { // execute function when event was handled
	          functions.handled.apply();
	      }
	    } else {
	      if (functions.unhandled || typeof functions.unhandled === 'function') { // execute function when event was not handled
	          functions.unhandled.apply();
	      }
	    }
	  },

	  /**
	   * Finds all focusable elements within the given `$element`
	   * @param {jQuery} $element - jQuery object to search within
	   * @return {jQuery} $focusable - all focusable elements within `$element`
	   */
	  findFocusable($element) {
	    return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function() {
	      if (!$(this).is(':visible') || $(this).attr('tabindex') < 0) { return false; } //only have visible elements and those that have a tabindex greater or equal 0
	      return true;
	    });
	  },

	  /**
	   * Returns the component name name
	   * @param {Object} component - Foundation component, e.g. Slider or Reveal
	   * @return String componentName
	   */

	  register(componentName, cmds) {
	    commands[componentName] = cmds;
	  }
	}

	/*
	 * Constants for easier comparing.
	 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	 */
	function getKeyCodes(kcs) {
	  var k = {};
	  for (var kc in kcs) k[kcs[kc]] = kcs[kc];
	  return k;
	}

	Foundation.Keyboard = Keyboard;

	}(jQuery);


/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	!function($) {

	Foundation.Box = {
	  ImNotTouchingYou: ImNotTouchingYou,
	  GetDimensions: GetDimensions,
	  GetOffsets: GetOffsets
	}

	/**
	 * Compares the dimensions of an element to a container and determines collision events with container.
	 * @function
	 * @param {jQuery} element - jQuery object to test for collisions.
	 * @param {jQuery} parent - jQuery object to use as bounding container.
	 * @param {Boolean} lrOnly - set to true to check left and right values only.
	 * @param {Boolean} tbOnly - set to true to check top and bottom values only.
	 * @default if no parent object passed, detects collisions with `window`.
	 * @returns {Boolean} - true if collision free, false if a collision in any direction.
	 */
	function ImNotTouchingYou(element, parent, lrOnly, tbOnly) {
	  var eleDims = GetDimensions(element),
	      top, bottom, left, right;

	  if (parent) {
	    var parDims = GetDimensions(parent);

	    bottom = (eleDims.offset.top + eleDims.height <= parDims.height + parDims.offset.top);
	    top    = (eleDims.offset.top >= parDims.offset.top);
	    left   = (eleDims.offset.left >= parDims.offset.left);
	    right  = (eleDims.offset.left + eleDims.width <= parDims.width);
	  }
	  else {
	    bottom = (eleDims.offset.top + eleDims.height <= eleDims.windowDims.height + eleDims.windowDims.offset.top);
	    top    = (eleDims.offset.top >= eleDims.windowDims.offset.top);
	    left   = (eleDims.offset.left >= eleDims.windowDims.offset.left);
	    right  = (eleDims.offset.left + eleDims.width <= eleDims.windowDims.width);
	  }

	  var allDirs = [bottom, top, left, right];

	  if (lrOnly) {
	    return left === right === true;
	  }

	  if (tbOnly) {
	    return top === bottom === true;
	  }

	  return allDirs.indexOf(false) === -1;
	};

	/**
	 * Uses native methods to return an object of dimension values.
	 * @function
	 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
	 * @returns {Object} - nested object of integer pixel values
	 * TODO - if element is window, return only those values.
	 */
	function GetDimensions(elem, test){
	  elem = elem.length ? elem[0] : elem;

	  if (elem === window || elem === document) {
	    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
	  }

	  var rect = elem.getBoundingClientRect(),
	      parRect = elem.parentNode.getBoundingClientRect(),
	      winRect = document.body.getBoundingClientRect(),
	      winY = window.pageYOffset,
	      winX = window.pageXOffset;

	  return {
	    width: rect.width,
	    height: rect.height,
	    offset: {
	      top: rect.top + winY,
	      left: rect.left + winX
	    },
	    parentDims: {
	      width: parRect.width,
	      height: parRect.height,
	      offset: {
	        top: parRect.top + winY,
	        left: parRect.left + winX
	      }
	    },
	    windowDims: {
	      width: winRect.width,
	      height: winRect.height,
	      offset: {
	        top: winY,
	        left: winX
	      }
	    }
	  }
	}

	/**
	 * Returns an object of top and left integer pixel values for dynamically rendered elements,
	 * such as: Tooltip, Reveal, and Dropdown
	 * @function
	 * @param {jQuery} element - jQuery object for the element being positioned.
	 * @param {jQuery} anchor - jQuery object for the element's anchor point.
	 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
	 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
	 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
	 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
	 * TODO alter/rewrite to work with `em` values as well/instead of pixels
	 */
	function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
	  var $eleDims = GetDimensions(element),
	      $anchorDims = anchor ? GetDimensions(anchor) : null;

	  switch (position) {
	    case 'top':
	      return {
	        left: (Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left),
	        top: $anchorDims.offset.top - ($eleDims.height + vOffset)
	      }
	      break;
	    case 'left':
	      return {
	        left: $anchorDims.offset.left - ($eleDims.width + hOffset),
	        top: $anchorDims.offset.top
	      }
	      break;
	    case 'right':
	      return {
	        left: $anchorDims.offset.left + $anchorDims.width + hOffset,
	        top: $anchorDims.offset.top
	      }
	      break;
	    case 'center top':
	      return {
	        left: ($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2),
	        top: $anchorDims.offset.top - ($eleDims.height + vOffset)
	      }
	      break;
	    case 'center bottom':
	      return {
	        left: isOverflow ? hOffset : (($anchorDims.offset.left + ($anchorDims.width / 2)) - ($eleDims.width / 2)),
	        top: $anchorDims.offset.top + $anchorDims.height + vOffset
	      }
	      break;
	    case 'center left':
	      return {
	        left: $anchorDims.offset.left - ($eleDims.width + hOffset),
	        top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
	      }
	      break;
	    case 'center right':
	      return {
	        left: $anchorDims.offset.left + $anchorDims.width + hOffset + 1,
	        top: ($anchorDims.offset.top + ($anchorDims.height / 2)) - ($eleDims.height / 2)
	      }
	      break;
	    case 'center':
	      return {
	        left: ($eleDims.windowDims.offset.left + ($eleDims.windowDims.width / 2)) - ($eleDims.width / 2),
	        top: ($eleDims.windowDims.offset.top + ($eleDims.windowDims.height / 2)) - ($eleDims.height / 2)
	      }
	      break;
	    case 'reveal':
	      return {
	        left: ($eleDims.windowDims.width - $eleDims.width) / 2,
	        top: $eleDims.windowDims.offset.top + vOffset
	      }
	    case 'reveal full':
	      return {
	        left: $eleDims.windowDims.offset.left,
	        top: $eleDims.windowDims.offset.top
	      }
	      break;
	    case 'left bottom':
	      return {
	        left: $anchorDims.offset.left - ($eleDims.width + hOffset),
	        top: $anchorDims.offset.top + $anchorDims.height
	      };
	      break;
	    case 'right bottom':
	      return {
	        left: $anchorDims.offset.left + $anchorDims.width + hOffset - $eleDims.width,
	        top: $anchorDims.offset.top + $anchorDims.height
	      };
	      break;
	    default:
	      return {
	        left: (Foundation.rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width : $anchorDims.offset.left),
	        top: $anchorDims.offset.top + $anchorDims.height + vOffset
	      }
	  }
	}

	}(jQuery);


/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	!function($) {

	const MutationObserver = (function () {
	  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
	  for (var i=0; i < prefixes.length; i++) {
	    if (`${prefixes[i]}MutationObserver` in window) {
	      return window[`${prefixes[i]}MutationObserver`];
	    }
	  }
	  return false;
	}());

	const triggers = (el, type) => {
	  el.data(type).split(' ').forEach(id => {
	    $(`#${id}`)[ type === 'close' ? 'trigger' : 'triggerHandler'](`${type}.zf.trigger`, [el]);
	  });
	};
	// Elements with [data-open] will reveal a plugin that supports it when clicked.
	$(document).on('click.zf.trigger', '[data-open]', function() {
	  triggers($(this), 'open');
	});

	// Elements with [data-close] will close a plugin that supports it when clicked.
	// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.
	$(document).on('click.zf.trigger', '[data-close]', function() {
	  let id = $(this).data('close');
	  if (id) {
	    triggers($(this), 'close');
	  }
	  else {
	    $(this).trigger('close.zf.trigger');
	  }
	});

	// Elements with [data-toggle] will toggle a plugin that supports it when clicked.
	$(document).on('click.zf.trigger', '[data-toggle]', function() {
	  triggers($(this), 'toggle');
	});

	// Elements with [data-closable] will respond to close.zf.trigger events.
	$(document).on('close.zf.trigger', '[data-closable]', function(e){
	  e.stopPropagation();
	  let animation = $(this).data('closable');

	  if(animation !== ''){
	    Foundation.Motion.animateOut($(this), animation, function() {
	      $(this).trigger('closed.zf');
	    });
	  }else{
	    $(this).fadeOut().trigger('closed.zf');
	  }
	});

	$(document).on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', function() {
	  let id = $(this).data('toggle-focus');
	  $(`#${id}`).triggerHandler('toggle.zf.trigger', [$(this)]);
	});

	/**
	* Fires once after all other scripts have loaded
	* @function
	* @private
	*/
	$(window).load(() => {
	  checkListeners();
	});

	function checkListeners() {
	  eventsListener();
	  resizeListener();
	  scrollListener();
	  closemeListener();
	}

	//******** only fires this function once on load, if there's something to watch ********
	function closemeListener(pluginName) {
	  var yetiBoxes = $('[data-yeti-box]'),
	      plugNames = ['dropdown', 'tooltip', 'reveal'];

	  if(pluginName){
	    if(typeof pluginName === 'string'){
	      plugNames.push(pluginName);
	    }else if(typeof pluginName === 'object' && typeof pluginName[0] === 'string'){
	      plugNames.concat(pluginName);
	    }else{
	      console.error('Plugin names must be strings');
	    }
	  }
	  if(yetiBoxes.length){
	    let listeners = plugNames.map((name) => {
	      return `closeme.zf.${name}`;
	    }).join(' ');

	    $(window).off(listeners).on(listeners, function(e, pluginId){
	      let plugin = e.namespace.split('.')[0];
	      let plugins = $(`[data-${plugin}]`).not(`[data-yeti-box="${pluginId}"]`);

	      plugins.each(function(){
	        let _this = $(this);

	        _this.triggerHandler('close.zf.trigger', [_this]);
	      });
	    });
	  }
	}

	function resizeListener(debounce){
	  let timer,
	      $nodes = $('[data-resize]');
	  if($nodes.length){
	    $(window).off('resize.zf.trigger')
	    .on('resize.zf.trigger', function(e) {
	      if (timer) { clearTimeout(timer); }

	      timer = setTimeout(function(){

	        if(!MutationObserver){//fallback for IE 9
	          $nodes.each(function(){
	            $(this).triggerHandler('resizeme.zf.trigger');
	          });
	        }
	        //trigger all listening elements and signal a resize event
	        $nodes.attr('data-events', "resize");
	      }, debounce || 10);//default time to emit resize event
	    });
	  }
	}

	function scrollListener(debounce){
	  let timer,
	      $nodes = $('[data-scroll]');
	  if($nodes.length){
	    $(window).off('scroll.zf.trigger')
	    .on('scroll.zf.trigger', function(e){
	      if(timer){ clearTimeout(timer); }

	      timer = setTimeout(function(){

	        if(!MutationObserver){//fallback for IE 9
	          $nodes.each(function(){
	            $(this).triggerHandler('scrollme.zf.trigger');
	          });
	        }
	        //trigger all listening elements and signal a scroll event
	        $nodes.attr('data-events', "scroll");
	      }, debounce || 10);//default time to emit scroll event
	    });
	  }
	}

	function eventsListener() {
	  if(!MutationObserver){ return false; }
	  let nodes = document.querySelectorAll('[data-resize], [data-scroll], [data-mutate]');

	  //element callback
	  var listeningElementsMutation = function(mutationRecordsList) {
	    var $target = $(mutationRecordsList[0].target);
	    //trigger the event handler for the element depending on type
	    switch ($target.attr("data-events")) {

	      case "resize" :
	      $target.triggerHandler('resizeme.zf.trigger', [$target]);
	      break;

	      case "scroll" :
	      $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
	      break;

	      // case "mutate" :
	      // console.log('mutate', $target);
	      // $target.triggerHandler('mutate.zf.trigger');
	      //
	      // //make sure we don't get stuck in an infinite loop from sloppy codeing
	      // if ($target.index('[data-mutate]') == $("[data-mutate]").length-1) {
	      //   domMutationObserver();
	      // }
	      // break;

	      default :
	      return false;
	      //nothing
	    }
	  }

	  if(nodes.length){
	    //for each element that needs to listen for resizing, scrolling, (or coming soon mutation) add a single observer
	    for (var i = 0; i <= nodes.length-1; i++) {
	      let elementObserver = new MutationObserver(listeningElementsMutation);
	      elementObserver.observe(nodes[i], { attributes: true, childList: false, characterData: false, subtree:false, attributeFilter:["data-events"]});
	    }
	  }
	}

	// ------------------------------------

	// [PH]
	// Foundation.CheckWatchers = checkWatchers;
	Foundation.IHearYou = checkListeners;
	// Foundation.ISeeYou = scrollListener;
	// Foundation.IFeelYou = closemeListener;

	}(jQuery);

	// function domMutationObserver(debounce) {
	//   // !!! This is coming soon and needs more work; not active  !!! //
	//   var timer,
	//   nodes = document.querySelectorAll('[data-mutate]');
	//   //
	//   if (nodes.length) {
	//     // var MutationObserver = (function () {
	//     //   var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];
	//     //   for (var i=0; i < prefixes.length; i++) {
	//     //     if (prefixes[i] + 'MutationObserver' in window) {
	//     //       return window[prefixes[i] + 'MutationObserver'];
	//     //     }
	//     //   }
	//     //   return false;
	//     // }());
	//
	//
	//     //for the body, we need to listen for all changes effecting the style and class attributes
	//     var bodyObserver = new MutationObserver(bodyMutation);
	//     bodyObserver.observe(document.body, { attributes: true, childList: true, characterData: false, subtree:true, attributeFilter:["style", "class"]});
	//
	//
	//     //body callback
	//     function bodyMutation(mutate) {
	//       //trigger all listening elements and signal a mutation event
	//       if (timer) { clearTimeout(timer); }
	//
	//       timer = setTimeout(function() {
	//         bodyObserver.disconnect();
	//         $('[data-mutate]').attr('data-events',"mutate");
	//       }, debounce || 150);
	//     }
	//   }
	// }


/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	!function($) {

	/**
	 * Dropdown module.
	 * @module foundation.dropdown
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 * @requires foundation.util.triggers
	 */

	class Dropdown {
	  /**
	   * Creates a new instance of a dropdown.
	   * @class
	   * @param {jQuery} element - jQuery object to make into a dropdown.
	   *        Object should be of the dropdown panel, rather than its anchor.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  constructor(element, options) {
	    this.$element = element;
	    this.options = $.extend({}, Dropdown.defaults, this.$element.data(), options);
	    this._init();

	    Foundation.registerPlugin(this, 'Dropdown');
	    Foundation.Keyboard.register('Dropdown', {
	      'ENTER': 'open',
	      'SPACE': 'open',
	      'ESCAPE': 'close',
	      'TAB': 'tab_forward',
	      'SHIFT_TAB': 'tab_backward'
	    });
	  }

	  /**
	   * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
	   * @function
	   * @private
	   */
	  _init() {
	    var $id = this.$element.attr('id');

	    this.$anchor = $(`[data-toggle="${$id}"]`) || $(`[data-open="${$id}"]`);
	    this.$anchor.attr({
	      'aria-controls': $id,
	      'data-is-focus': false,
	      'data-yeti-box': $id,
	      'aria-haspopup': true,
	      'aria-expanded': false

	    });

	    this.options.positionClass = this.getPositionClass();
	    this.counter = 4;
	    this.usedPositions = [];
	    this.$element.attr({
	      'aria-hidden': 'true',
	      'data-yeti-box': $id,
	      'data-resize': $id,
	      'aria-labelledby': this.$anchor[0].id || Foundation.GetYoDigits(6, 'dd-anchor')
	    });
	    this._events();
	  }

	  /**
	   * Helper function to determine current orientation of dropdown pane.
	   * @function
	   * @returns {String} position - string value of a position class.
	   */
	  getPositionClass() {
	    var verticalPosition = this.$element[0].className.match(/(top|left|right|bottom)/g);
	        verticalPosition = verticalPosition ? verticalPosition[0] : '';
	    var horizontalPosition = /float-(.+)\s/.exec(this.$anchor[0].className);
	        horizontalPosition = horizontalPosition ? horizontalPosition[1] : '';
	    var position = horizontalPosition ? horizontalPosition + ' ' + verticalPosition : verticalPosition;
	    return position;
	  }

	  /**
	   * Adjusts the dropdown panes orientation by adding/removing positioning classes.
	   * @function
	   * @private
	   * @param {String} position - position class to remove.
	   */
	  _reposition(position) {
	    this.usedPositions.push(position ? position : 'bottom');
	    //default, try switching to opposite side
	    if(!position && (this.usedPositions.indexOf('top') < 0)){
	      this.$element.addClass('top');
	    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') < 0)){
	      this.$element.removeClass(position);
	    }else if(position === 'left' && (this.usedPositions.indexOf('right') < 0)){
	      this.$element.removeClass(position)
	          .addClass('right');
	    }else if(position === 'right' && (this.usedPositions.indexOf('left') < 0)){
	      this.$element.removeClass(position)
	          .addClass('left');
	    }

	    //if default change didn't work, try bottom or left first
	    else if(!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)){
	      this.$element.addClass('left');
	    }else if(position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)){
	      this.$element.removeClass(position)
	          .addClass('left');
	    }else if(position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
	      this.$element.removeClass(position);
	    }else if(position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)){
	      this.$element.removeClass(position);
	    }
	    //if nothing cleared, set to bottom
	    else{
	      this.$element.removeClass(position);
	    }
	    this.classChanged = true;
	    this.counter--;
	  }

	  /**
	   * Sets the position and orientation of the dropdown pane, checks for collisions.
	   * Recursively calls itself if a collision is detected, with a new position class.
	   * @function
	   * @private
	   */
	  _setPosition() {
	    if(this.$anchor.attr('aria-expanded') === 'false'){ return false; }
	    var position = this.getPositionClass(),
	        $eleDims = Foundation.Box.GetDimensions(this.$element),
	        $anchorDims = Foundation.Box.GetDimensions(this.$anchor),
	        _this = this,
	        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
	        param = (direction === 'top') ? 'height' : 'width',
	        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset;



	    if(($eleDims.width >= $eleDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.$element))){
	      this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
	        'width': $eleDims.windowDims.width - (this.options.hOffset * 2),
	        'height': 'auto'
	      });
	      this.classChanged = true;
	      return false;
	    }

	    this.$element.offset(Foundation.Box.GetOffsets(this.$element, this.$anchor, position, this.options.vOffset, this.options.hOffset));

	    while(!Foundation.Box.ImNotTouchingYou(this.$element, false, true) && this.counter){
	      this._reposition(position);
	      this._setPosition();
	    }
	  }

	  /**
	   * Adds event listeners to the element utilizing the triggers utility library.
	   * @function
	   * @private
	   */
	  _events() {
	    var _this = this;
	    this.$element.on({
	      'open.zf.trigger': this.open.bind(this),
	      'close.zf.trigger': this.close.bind(this),
	      'toggle.zf.trigger': this.toggle.bind(this),
	      'resizeme.zf.trigger': this._setPosition.bind(this)
	    });

	    if(this.options.hover){
	      this.$anchor.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
	          .on('mouseenter.zf.dropdown', function(){
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function(){
	              _this.open();
	              _this.$anchor.data('hover', true);
	            }, _this.options.hoverDelay);
	          }).on('mouseleave.zf.dropdown', function(){
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function(){
	              _this.close();
	              _this.$anchor.data('hover', false);
	            }, _this.options.hoverDelay);
	          });
	      if(this.options.hoverPane){
	        this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown')
	            .on('mouseenter.zf.dropdown', function(){
	              clearTimeout(_this.timeout);
	            }).on('mouseleave.zf.dropdown', function(){
	              clearTimeout(_this.timeout);
	              _this.timeout = setTimeout(function(){
	                _this.close();
	                _this.$anchor.data('hover', false);
	              }, _this.options.hoverDelay);
	            });
	      }
	    }
	    this.$anchor.add(this.$element).on('keydown.zf.dropdown', function(e) {

	      var $target = $(this),
	        visibleFocusableElements = Foundation.Keyboard.findFocusable(_this.$element);

	      Foundation.Keyboard.handleKey(e, 'Dropdown', {
	        tab_forward: function() {
	          if (_this.$element.find(':focus').is(visibleFocusableElements.eq(-1))) { // left modal downwards, setting focus to first element
	            if (_this.options.trapFocus) { // if focus shall be trapped
	              visibleFocusableElements.eq(0).focus();
	              e.preventDefault();
	            } else { // if focus is not trapped, close dropdown on focus out
	              _this.close();
	            }
	          }
	        },
	        tab_backward: function() {
	          if (_this.$element.find(':focus').is(visibleFocusableElements.eq(0)) || _this.$element.is(':focus')) { // left modal upwards, setting focus to last element
	            if (_this.options.trapFocus) { // if focus shall be trapped
	              visibleFocusableElements.eq(-1).focus();
	              e.preventDefault();
	            } else { // if focus is not trapped, close dropdown on focus out
	              _this.close();
	            }
	          }
	        },
	        open: function() {
	          if ($target.is(_this.$anchor)) {
	            _this.open();
	            _this.$element.attr('tabindex', -1).focus();
	            e.preventDefault();
	          }
	        },
	        close: function() {
	          _this.close();
	          _this.$anchor.focus();
	        }
	      });
	    });
	  }

	  /**
	   * Adds an event handler to the body to close any dropdowns on a click.
	   * @function
	   * @private
	   */
	  _addBodyHandler() {
	     var $body = $(document.body).not(this.$element),
	         _this = this;
	     $body.off('click.zf.dropdown')
	          .on('click.zf.dropdown', function(e){
	            if(_this.$anchor.is(e.target) || _this.$anchor.find(e.target).length) {
	              return;
	            }
	            if(_this.$element.find(e.target).length) {
	              return;
	            }
	            _this.close();
	            $body.off('click.zf.dropdown');
	          });
	  }

	  /**
	   * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
	   * @function
	   * @fires Dropdown#closeme
	   * @fires Dropdown#show
	   */
	  open() {
	    // var _this = this;
	    /**
	     * Fires to close other open dropdowns
	     * @event Dropdown#closeme
	     */
	    this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
	    this.$anchor.addClass('hover')
	        .attr({'aria-expanded': true});
	    // this.$element/*.show()*/;
	    this._setPosition();
	    this.$element.addClass('is-open')
	        .attr({'aria-hidden': false});

	    if(this.options.autoFocus){
	      var $focusable = Foundation.Keyboard.findFocusable(this.$element);
	      if($focusable.length){
	        $focusable.eq(0).focus();
	      }
	    }

	    if(this.options.closeOnClick){ this._addBodyHandler(); }

	    /**
	     * Fires once the dropdown is visible.
	     * @event Dropdown#show
	     */
	    this.$element.trigger('show.zf.dropdown', [this.$element]);
	  }

	  /**
	   * Closes the open dropdown pane.
	   * @function
	   * @fires Dropdown#hide
	   */
	  close() {
	    if(!this.$element.hasClass('is-open')){
	      return false;
	    }
	    this.$element.removeClass('is-open')
	        .attr({'aria-hidden': true});

	    this.$anchor.removeClass('hover')
	        .attr('aria-expanded', false);

	    if(this.classChanged){
	      var curPositionClass = this.getPositionClass();
	      if(curPositionClass){
	        this.$element.removeClass(curPositionClass);
	      }
	      this.$element.addClass(this.options.positionClass)
	          /*.hide()*/.css({height: '', width: ''});
	      this.classChanged = false;
	      this.counter = 4;
	      this.usedPositions.length = 0;
	    }
	    this.$element.trigger('hide.zf.dropdown', [this.$element]);
	  }

	  /**
	   * Toggles the dropdown pane's visibility.
	   * @function
	   */
	  toggle() {
	    if(this.$element.hasClass('is-open')){
	      if(this.$anchor.data('hover')) return;
	      this.close();
	    }else{
	      this.open();
	    }
	  }

	  /**
	   * Destroys the dropdown.
	   * @function
	   */
	  destroy() {
	    this.$element.off('.zf.trigger').hide();
	    this.$anchor.off('.zf.dropdown');

	    Foundation.unregisterPlugin(this);
	  }
	}

	Dropdown.defaults = {
	  /**
	   * Amount of time to delay opening a submenu on hover event.
	   * @option
	   * @example 250
	   */
	  hoverDelay: 250,
	  /**
	   * Allow submenus to open on hover events
	   * @option
	   * @example false
	   */
	  hover: false,
	  /**
	   * Don't close dropdown when hovering over dropdown pane
	   * @option
	   * @example true
	   */
	  hoverPane: false,
	  /**
	   * Number of pixels between the dropdown pane and the triggering element on open.
	   * @option
	   * @example 1
	   */
	  vOffset: 1,
	  /**
	   * Number of pixels between the dropdown pane and the triggering element on open.
	   * @option
	   * @example 1
	   */
	  hOffset: 1,
	  /**
	   * Class applied to adjust open position. JS will test and fill this in.
	   * @option
	   * @example 'top'
	   */
	  positionClass: '',
	  /**
	   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
	   * @option
	   * @example false
	   */
	  trapFocus: false,
	  /**
	   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
	   * @option
	   * @example true
	   */
	  autoFocus: false,
	  /**
	   * Allows a click on the body to close the dropdown.
	   * @option
	   * @example false
	   */
	  closeOnClick: false
	}

	// Window exports
	Foundation.plugin(Dropdown, 'Dropdown');

	}(jQuery);


/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	!function($) {

	/**
	 * Accordion module.
	 * @module foundation.accordion
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.motion
	 */

	class Accordion {
	  /**
	   * Creates a new instance of an accordion.
	   * @class
	   * @fires Accordion#init
	   * @param {jQuery} element - jQuery object to make into an accordion.
	   * @param {Object} options - a plain object with settings to override the default options.
	   */
	  constructor(element, options) {
	    this.$element = element;
	    this.options = $.extend({}, Accordion.defaults, this.$element.data(), options);

	    this._init();

	    Foundation.registerPlugin(this, 'Accordion');
	    Foundation.Keyboard.register('Accordion', {
	      'ENTER': 'toggle',
	      'SPACE': 'toggle',
	      'ARROW_DOWN': 'next',
	      'ARROW_UP': 'previous'
	    });
	  }

	  /**
	   * Initializes the accordion by animating the preset active pane(s).
	   * @private
	   */
	  _init() {
	    this.$element.attr('role', 'tablist');
	    this.$tabs = this.$element.children('li, [data-accordion-item]');

	    this.$tabs.each(function(idx, el) {
	      var $el = $(el),
	          $content = $el.children('[data-tab-content]'),
	          id = $content[0].id || Foundation.GetYoDigits(6, 'accordion'),
	          linkId = el.id || `${id}-label`;

	      $el.find('a:first').attr({
	        'aria-controls': id,
	        'role': 'tab',
	        'id': linkId,
	        'aria-expanded': false,
	        'aria-selected': false
	      });

	      $content.attr({'role': 'tabpanel', 'aria-labelledby': linkId, 'aria-hidden': true, 'id': id});
	    });
	    var $initActive = this.$element.find('.is-active').children('[data-tab-content]');
	    if($initActive.length){
	      this.down($initActive, true);
	    }
	    this._events();
	  }

	  /**
	   * Adds event handlers for items within the accordion.
	   * @private
	   */
	  _events() {
	    var _this = this;

	    this.$tabs.each(function() {
	      var $elem = $(this);
	      var $tabContent = $elem.children('[data-tab-content]');
	      if ($tabContent.length) {
	        $elem.children('a').off('click.zf.accordion keydown.zf.accordion')
	               .on('click.zf.accordion', function(e) {
	        // $(this).children('a').on('click.zf.accordion', function(e) {
	          e.preventDefault();
	          if ($elem.hasClass('is-active')) {
	            if(_this.options.allowAllClosed || $elem.siblings().hasClass('is-active')){
	              _this.up($tabContent);
	            }
	          }
	          else {
	            _this.down($tabContent);
	          }
	        }).on('keydown.zf.accordion', function(e){
	          Foundation.Keyboard.handleKey(e, 'Accordion', {
	            toggle: function() {
	              _this.toggle($tabContent);
	            },
	            next: function() {
	              var $a = $elem.next().find('a').focus();
	              if (!_this.options.multiExpand) {
	                $a.trigger('click.zf.accordion')
	              }
	            },
	            previous: function() {
	              var $a = $elem.prev().find('a').focus();
	              if (!_this.options.multiExpand) {
	                $a.trigger('click.zf.accordion')
	              }
	            },
	            handled: function() {
	              e.preventDefault();
	              e.stopPropagation();
	            }
	          });
	        });
	      }
	    });
	  }

	  /**
	   * Toggles the selected content pane's open/close state.
	   * @param {jQuery} $target - jQuery object of the pane to toggle.
	   * @function
	   */
	  toggle($target) {
	    if($target.parent().hasClass('is-active')) {
	      if(this.options.allowAllClosed || $target.parent().siblings().hasClass('is-active')){
	        this.up($target);
	      } else { return; }
	    } else {
	      this.down($target);
	    }
	  }

	  /**
	   * Opens the accordion tab defined by `$target`.
	   * @param {jQuery} $target - Accordion pane to open.
	   * @param {Boolean} firstTime - flag to determine if reflow should happen.
	   * @fires Accordion#down
	   * @function
	   */
	  down($target, firstTime) {
	    if (!this.options.multiExpand && !firstTime) {
	      var $currentActive = this.$element.children('.is-active').children('[data-tab-content]');
	      if($currentActive.length){
	        this.up($currentActive);
	      }
	    }

	    $target
	      .attr('aria-hidden', false)
	      .parent('[data-tab-content]')
	      .addBack()
	      .parent().addClass('is-active');

	    $target.slideDown(this.options.slideSpeed, () => {
	      /**
	       * Fires when the tab is done opening.
	       * @event Accordion#down
	       */
	      this.$element.trigger('down.zf.accordion', [$target]);
	    });

	    $(`#${$target.attr('aria-labelledby')}`).attr({
	      'aria-expanded': true,
	      'aria-selected': true
	    });
	  }

	  /**
	   * Closes the tab defined by `$target`.
	   * @param {jQuery} $target - Accordion tab to close.
	   * @fires Accordion#up
	   * @function
	   */
	  up($target) {
	    var $aunts = $target.parent().siblings(),
	        _this = this;
	    var canClose = this.options.multiExpand ? $aunts.hasClass('is-active') : $target.parent().hasClass('is-active');

	    if(!this.options.allowAllClosed && !canClose) {
	      return;
	    }

	    // Foundation.Move(this.options.slideSpeed, $target, function(){
	      $target.slideUp(_this.options.slideSpeed, function () {
	        /**
	         * Fires when the tab is done collapsing up.
	         * @event Accordion#up
	         */
	        _this.$element.trigger('up.zf.accordion', [$target]);
	      });
	    // });

	    $target.attr('aria-hidden', true)
	           .parent().removeClass('is-active');

	    $(`#${$target.attr('aria-labelledby')}`).attr({
	     'aria-expanded': false,
	     'aria-selected': false
	   });
	  }

	  /**
	   * Destroys an instance of an accordion.
	   * @fires Accordion#destroyed
	   * @function
	   */
	  destroy() {
	    this.$element.find('[data-tab-content]').slideUp(0).css('display', '');
	    this.$element.find('a').off('.zf.accordion');

	    Foundation.unregisterPlugin(this);
	  }
	}

	Accordion.defaults = {
	  /**
	   * Amount of time to animate the opening of an accordion pane.
	   * @option
	   * @example 250
	   */
	  slideSpeed: 250,
	  /**
	   * Allow the accordion to have multiple open panes.
	   * @option
	   * @example false
	   */
	  multiExpand: false,
	  /**
	   * Allow the accordion to close all panes.
	   * @option
	   * @example false
	   */
	  allowAllClosed: false
	};

	// Window exports
	Foundation.plugin(Accordion, 'Accordion');

	}(jQuery);


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	!function($) {

	/**
	 * Reveal module.
	 * @module foundation.reveal
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.motion if using animations
	 */

	class Reveal {
	  /**
	   * Creates a new instance of Reveal.
	   * @class
	   * @param {jQuery} element - jQuery object to use for the modal.
	   * @param {Object} options - optional parameters.
	   */
	  constructor(element, options) {
	    this.$element = element;
	    this.options = $.extend({}, Reveal.defaults, this.$element.data(), options);
	    this._init();

	    Foundation.registerPlugin(this, 'Reveal');
	    Foundation.Keyboard.register('Reveal', {
	      'ENTER': 'open',
	      'SPACE': 'open',
	      'ESCAPE': 'close',
	      'TAB': 'tab_forward',
	      'SHIFT_TAB': 'tab_backward'
	    });
	  }

	  /**
	   * Initializes the modal by adding the overlay and close buttons, (if selected).
	   * @private
	   */
	  _init() {
	    this.id = this.$element.attr('id');
	    this.isActive = false;
	    this.cached = {mq: Foundation.MediaQuery.current};
	    this.isiOS = iPhoneSniff();

	    if(this.isiOS){ this.$element.addClass('is-ios'); }

	    this.$anchor = $(`[data-open="${this.id}"]`).length ? $(`[data-open="${this.id}"]`) : $(`[data-toggle="${this.id}"]`);

	    if (this.$anchor.length) {
	      var anchorId = this.$anchor[0].id || Foundation.GetYoDigits(6, 'reveal');

	      this.$anchor.attr({
	        'aria-controls': this.id,
	        'id': anchorId,
	        'aria-haspopup': true,
	        'tabindex': 0
	      });
	      this.$element.attr({'aria-labelledby': anchorId});
	    }

	    if (this.options.fullScreen || this.$element.hasClass('full')) {
	      this.options.fullScreen = true;
	      this.options.overlay = false;
	    }
	    if (this.options.overlay && !this.$overlay) {
	      this.$overlay = this._makeOverlay(this.id);
	    }

	    this.$element.attr({
	        'role': 'dialog',
	        'aria-hidden': true,
	        'data-yeti-box': this.id,
	        'data-resize': this.id
	    });

	    if(this.$overlay) {
	      this.$element.detach().appendTo(this.$overlay);
	    } else {
	      this.$element.detach().appendTo($('body'));
	      this.$element.addClass('without-overlay');
	    }
	    this._events();
	    if (this.options.deepLink && window.location.hash === ( `#${this.id}`)) {
	      $(window).one('load.zf.reveal', this.open.bind(this));
	    }
	  }

	  /**
	   * Creates an overlay div to display behind the modal.
	   * @private
	   */
	  _makeOverlay(id) {
	    var $overlay = $('<div></div>')
	                    .addClass('reveal-overlay')
	                    .attr({'tabindex': -1, 'aria-hidden': true})
	                    .appendTo('body');
	    return $overlay;
	  }

	  /**
	   * Updates position of modal
	   * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
	   * @private
	   */
	  _updatePosition() {
	    var width = this.$element.outerWidth();
	    var outerWidth = $(window).width();
	    var height = this.$element.outerHeight();
	    var outerHeight = $(window).height();
	    var left, top;
	    if (this.options.hOffset === 'auto') {
	      left = parseInt((outerWidth - width) / 2, 10);
	    } else {
	      left = parseInt(this.options.hOffset, 10);
	    }
	    if (this.options.vOffset === 'auto') {
	      if (height > outerHeight) {
	        top = parseInt(Math.min(100, outerHeight / 10), 10);
	      } else {
	        top = parseInt((outerHeight - height) / 4, 10);
	      }
	    } else {
	      top = parseInt(this.options.vOffset, 10);
	    }
	    this.$element.css({top: top + 'px'});
	    // only worry about left if we don't have an overlay or we havea  horizontal offset,
	    // otherwise we're perfectly in the middle
	    if(!this.$overlay || (this.options.hOffset !== 'auto')) {
	      this.$element.css({left: left + 'px'});
	      this.$element.css({margin: '0px'});
	    }

	  }

	  /**
	   * Adds event handlers for the modal.
	   * @private
	   */
	  _events() {
	    var _this = this;

	    this.$element.on({
	      'open.zf.trigger': this.open.bind(this),
	      'close.zf.trigger': this.close.bind(this),
	      'toggle.zf.trigger': this.toggle.bind(this),
	      'resizeme.zf.trigger': function() {
	        _this._updatePosition();
	      }
	    });

	    if (this.$anchor.length) {
	      this.$anchor.on('keydown.zf.reveal', function(e) {
	        if (e.which === 13 || e.which === 32) {
	          e.stopPropagation();
	          e.preventDefault();
	          _this.open();
	        }
	      });
	    }

	    if (this.options.closeOnClick && this.options.overlay) {
	      this.$overlay.off('.zf.reveal').on('click.zf.reveal', function(e) {
	        if (e.target === _this.$element[0] || $.contains(_this.$element[0], e.target)) { return; }
	        _this.close();
	      });
	    }
	    if (this.options.deepLink) {
	      $(window).on(`popstate.zf.reveal:${this.id}`, this._handleState.bind(this));
	    }
	  }

	  /**
	   * Handles modal methods on back/forward button clicks or any other event that triggers popstate.
	   * @private
	   */
	  _handleState(e) {
	    if(window.location.hash === ( '#' + this.id) && !this.isActive){ this.open(); }
	    else{ this.close(); }
	  }


	  /**
	   * Opens the modal controlled by `this.$anchor`, and closes all others by default.
	   * @function
	   * @fires Reveal#closeme
	   * @fires Reveal#open
	   */
	  open() {
	    if (this.options.deepLink) {
	      var hash = `#${this.id}`;

	      if (window.history.pushState) {
	        window.history.pushState(null, null, hash);
	      } else {
	        window.location.hash = hash;
	      }
	    }

	    this.isActive = true;

	    // Make elements invisible, but remove display: none so we can get size and positioning
	    this.$element
	        .css({ 'visibility': 'hidden' })
	        .show()
	        .scrollTop(0);
	    if (this.options.overlay) {
	      this.$overlay.css({'visibility': 'hidden'}).show();
	    }

	    this._updatePosition();

	    this.$element
	      .hide()
	      .css({ 'visibility': '' });

	    if(this.$overlay) {
	      this.$overlay.css({'visibility': ''}).hide();
	    }


	    if (!this.options.multipleOpened) {
	      /**
	       * Fires immediately before the modal opens.
	       * Closes any other modals that are currently open
	       * @event Reveal#closeme
	       */
	      this.$element.trigger('closeme.zf.reveal', this.id);
	    }

	    // Motion UI method of reveal
	    if (this.options.animationIn) {
	      if (this.options.overlay) {
	        Foundation.Motion.animateIn(this.$overlay, 'fade-in');
	      }
	      Foundation.Motion.animateIn(this.$element, this.options.animationIn, () => {
	        this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);
	      });
	    }
	    // jQuery method of reveal
	    else {
	      if (this.options.overlay) {
	        this.$overlay.show(0);
	      }
	      this.$element.show(this.options.showDelay);
	    }

	    // handle accessibility
	    this.$element
	      .attr({
	        'aria-hidden': false,
	        'tabindex': -1
	      })
	      .focus();

	    /**
	     * Fires when the modal has successfully opened.
	     * @event Reveal#open
	     */
	    this.$element.trigger('open.zf.reveal');

	    if (this.isiOS) {
	      var scrollPos = window.pageYOffset;
	      $('html, body').addClass('is-reveal-open').scrollTop(scrollPos);
	    }
	    else {
	      $('body').addClass('is-reveal-open');
	    }

	    $('body')
	      .addClass('is-reveal-open')
	      .attr('aria-hidden', (this.options.overlay || this.options.fullScreen) ? true : false);

	    setTimeout(() => {
	      this._extraHandlers();
	    }, 0);
	  }

	  /**
	   * Adds extra event handlers for the body and window if necessary.
	   * @private
	   */
	  _extraHandlers() {
	    var _this = this;
	    this.focusableElements = Foundation.Keyboard.findFocusable(this.$element);

	    if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
	      $('body').on('click.zf.reveal', function(e) {
	        if (e.target === _this.$element[0] || $.contains(_this.$element[0], e.target)) { return; }
	        _this.close();
	      });
	    }

	    if (this.options.closeOnEsc) {
	      $(window).on('keydown.zf.reveal', function(e) {
	        Foundation.Keyboard.handleKey(e, 'Reveal', {
	          close: function() {
	            if (_this.options.closeOnEsc) {
	              _this.close();
	              _this.$anchor.focus();
	            }
	          }
	        });
	      });
	    }

	    // lock focus within modal while tabbing
	    this.$element.on('keydown.zf.reveal', function(e) {
	      var $target = $(this);
	      // handle keyboard event with keyboard util
	      Foundation.Keyboard.handleKey(e, 'Reveal', {
	        tab_forward: function() {
	          if (_this.$element.find(':focus').is(_this.focusableElements.eq(-1))) { // left modal downwards, setting focus to first element
	            _this.focusableElements.eq(0).focus();
	            e.preventDefault();
	          }
	          if (_this.focusableElements.length === 0) { // no focusable elements inside the modal at all, prevent tabbing in general
	            e.preventDefault();
	          }
	        },
	        tab_backward: function() {
	          if (_this.$element.find(':focus').is(_this.focusableElements.eq(0)) || _this.$element.is(':focus')) { // left modal upwards, setting focus to last element
	            _this.focusableElements.eq(-1).focus();
	            e.preventDefault();
	          }
	          if (_this.focusableElements.length === 0) { // no focusable elements inside the modal at all, prevent tabbing in general
	            e.preventDefault();
	          }
	        },
	        open: function() {
	          if (_this.$element.find(':focus').is(_this.$element.find('[data-close]'))) {
	            setTimeout(function() { // set focus back to anchor if close button has been activated
	              _this.$anchor.focus();
	            }, 1);
	          } else if ($target.is(_this.focusableElements)) { // dont't trigger if acual element has focus (i.e. inputs, links, ...)
	            _this.open();
	          }
	        },
	        close: function() {
	          if (_this.options.closeOnEsc) {
	            _this.close();
	            _this.$anchor.focus();
	          }
	        }
	      });
	    });
	  }

	  /**
	   * Closes the modal.
	   * @function
	   * @fires Reveal#closed
	   */
	  close() {
	    if (!this.isActive || !this.$element.is(':visible')) {
	      return false;
	    }
	    var _this = this;

	    // Motion UI method of hiding
	    if (this.options.animationOut) {
	      if (this.options.overlay) {
	        Foundation.Motion.animateOut(this.$overlay, 'fade-out', finishUp);
	      }
	      else {
	        finishUp();
	      }

	      Foundation.Motion.animateOut(this.$element, this.options.animationOut);
	    }
	    // jQuery method of hiding
	    else {
	      if (this.options.overlay) {
	        this.$overlay.hide(0, finishUp);
	      }
	      else {
	        finishUp();
	      }

	      this.$element.hide(this.options.hideDelay);
	    }

	    // Conditionals to remove extra event listeners added on open
	    if (this.options.closeOnEsc) {
	      $(window).off('keydown.zf.reveal');
	    }

	    if (!this.options.overlay && this.options.closeOnClick) {
	      $('body').off('click.zf.reveal');
	    }

	    this.$element.off('keydown.zf.reveal');

	    function finishUp() {
	      if (_this.isiOS) {
	        $('html, body').removeClass('is-reveal-open');
	      }
	      else {
	        $('body').removeClass('is-reveal-open');
	      }

	      $('body').attr({
	        'aria-hidden': false,
	        'tabindex': ''
	      });

	      _this.$element.attr('aria-hidden', true);

	      /**
	      * Fires when the modal is done closing.
	      * @event Reveal#closed
	      */
	      _this.$element.trigger('closed.zf.reveal');
	    }

	    /**
	    * Resets the modal content
	    * This prevents a running video to keep going in the background
	    */
	    if (this.options.resetOnClose) {
	      this.$element.html(this.$element.html());
	    }

	    this.isActive = false;
	     if (_this.options.deepLink) {
	       if (window.history.replaceState) {
	         window.history.replaceState("", document.title, window.location.pathname);
	       } else {
	         window.location.hash = '';
	       }
	     }
	  }

	  /**
	   * Toggles the open/closed state of a modal.
	   * @function
	   */
	  toggle() {
	    if (this.isActive) {
	      this.close();
	    } else {
	      this.open();
	    }
	  };

	  /**
	   * Destroys an instance of a modal.
	   * @function
	   */
	  destroy() {
	    if (this.options.overlay) {
	      this.$element.appendTo($('body')); // move $element outside of $overlay to prevent error unregisterPlugin()
	      this.$overlay.hide().off().remove();
	    }
	    this.$element.hide().off();
	    this.$anchor.off('.zf');
	    $(window).off(`.zf.reveal:${this.id}`);

	    Foundation.unregisterPlugin(this);
	  };
	}

	Reveal.defaults = {
	  /**
	   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
	   * @option
	   * @example 'slide-in-left'
	   */
	  animationIn: '',
	  /**
	   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
	   * @option
	   * @example 'slide-out-right'
	   */
	  animationOut: '',
	  /**
	   * Time, in ms, to delay the opening of a modal after a click if no animation used.
	   * @option
	   * @example 10
	   */
	  showDelay: 0,
	  /**
	   * Time, in ms, to delay the closing of a modal after a click if no animation used.
	   * @option
	   * @example 10
	   */
	  hideDelay: 0,
	  /**
	   * Allows a click on the body/overlay to close the modal.
	   * @option
	   * @example true
	   */
	  closeOnClick: true,
	  /**
	   * Allows the modal to close if the user presses the `ESCAPE` key.
	   * @option
	   * @example true
	   */
	  closeOnEsc: true,
	  /**
	   * If true, allows multiple modals to be displayed at once.
	   * @option
	   * @example false
	   */
	  multipleOpened: false,
	  /**
	   * Distance, in pixels, the modal should push down from the top of the screen.
	   * @option
	   * @example auto
	   */
	  vOffset: 'auto',
	  /**
	   * Distance, in pixels, the modal should push in from the side of the screen.
	   * @option
	   * @example auto
	   */
	  hOffset: 'auto',
	  /**
	   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
	   * @option
	   * @example false
	   */
	  fullScreen: false,
	  /**
	   * Percentage of screen height the modal should push up from the bottom of the view.
	   * @option
	   * @example 10
	   */
	  btmOffsetPct: 10,
	  /**
	   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
	   * @option
	   * @example true
	   */
	  overlay: true,
	  /**
	   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
	   * @option
	   * @example false
	   */
	  resetOnClose: false,
	  /**
	   * Allows the modal to alter the url on open/close, and allows the use of the `back` button to close modals. ALSO, allows a modal to auto-maniacally open on page load IF the hash === the modal's user-set id.
	   * @option
	   * @example false
	   */
	  deepLink: false
	};

	// Window exports
	Foundation.plugin(Reveal, 'Reveal');

	function iPhoneSniff() {
	  return /iP(ad|hone|od).*OS/.test(window.navigator.userAgent);
	}

	}(jQuery);


/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	!function($) {

	/**
	 * Abide module.
	 * @module foundation.abide
	 */

	class Abide {
	  /**
	   * Creates a new instance of Abide.
	   * @class
	   * @fires Abide#init
	   * @param {Object} element - jQuery object to add the trigger to.
	   * @param {Object} options - Overrides to the default plugin settings.
	   */
	  constructor(element, options = {}) {
	    this.$element = element;
	    this.options  = $.extend({}, Abide.defaults, this.$element.data(), options);

	    this._init();

	    Foundation.registerPlugin(this, 'Abide');
	  }

	  /**
	   * Initializes the Abide plugin and calls functions to get Abide functioning on load.
	   * @private
	   */
	  _init() {
	    this.$inputs = this.$element.find('input, textarea, select').not('[data-abide-ignore]');

	    this._events();
	  }

	  /**
	   * Initializes events for Abide.
	   * @private
	   */
	  _events() {
	    this.$element.off('.abide')
	      .on('reset.zf.abide', () => {
	        this.resetForm();
	      })
	      .on('submit.zf.abide', () => {
	        return this.validateForm();
	      });

	    if (this.options.validateOn === 'fieldChange') {
	      this.$inputs
	        .off('change.zf.abide')
	        .on('change.zf.abide', (e) => {
	          this.validateInput($(e.target));
	        });
	    }

	    if (this.options.liveValidate) {
	      this.$inputs
	        .off('input.zf.abide')
	        .on('input.zf.abide', (e) => {
	          this.validateInput($(e.target));
	        });
	    }
	  }

	  /**
	   * Calls necessary functions to update Abide upon DOM change
	   * @private
	   */
	  _reflow() {
	    this._init();
	  }

	  /**
	   * Checks whether or not a form element has the required attribute and if it's checked or not
	   * @param {Object} element - jQuery object to check for required attribute
	   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	   */
	  requiredCheck($el) {
	    if (!$el.attr('required')) return true;

	    var isGood = true;

	    switch ($el[0].type) {
	      case 'select':
	      case 'select-one':
	      case 'select-multiple':
	        var opt = $el.find('option:selected');
	        if (!opt.length || !opt.val()) isGood = false;
	        break;

	      default:
	        if(!$el.val() || !$el.val().length) isGood = false;
	    }

	    return isGood;
	  }

	  /**
	   * Based on $el, get the first element with selector in this order:
	   * 1. The element's direct sibling('s).
	   * 3. The element's parent's children.
	   *
	   * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
	   *
	   * @param {Object} $el - jQuery object to use as reference to find the form error selector.
	   * @returns {Object} jQuery object with the selector.
	   */
	  findFormError($el) {
	    var $error = $el.siblings(this.options.formErrorSelector);

	    if (!$error.length) {
	      $error = $el.parent().find(this.options.formErrorSelector);
	    }

	    return $error;
	  }

	  /**
	   * Get the first element in this order:
	   * 2. The <label> with the attribute `[for="someInputId"]`
	   * 3. The `.closest()` <label>
	   *
	   * @param {Object} $el - jQuery object to check for required attribute
	   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	   */
	  findLabel($el) {
	    var id = $el[0].id;
	    var $label = this.$element.find(`label[for="${id}"]`);

	    if (!$label.length) {
	      return $el.closest('label');
	    }

	    return $label;
	  }

	  /**
	   * Get the set of labels associated with a set of radio els in this order
	   * 2. The <label> with the attribute `[for="someInputId"]`
	   * 3. The `.closest()` <label>
	   *
	   * @param {Object} $el - jQuery object to check for required attribute
	   * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	   */
	  findRadioLabels($els) {
	    var labels = $els.map((i, el) => {
	      var id = el.id;
	      var $label = this.$element.find(`label[for="${id}"]`);

	      if (!$label.length) {
	        $label = $(el).closest('label');
	      }
	      return $label[0];
	    });

	    return $(labels);
	  }

	  /**
	   * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
	   * @param {Object} $el - jQuery object to add the class to
	   */
	  addErrorClasses($el) {
	    var $label = this.findLabel($el);
	    var $formError = this.findFormError($el);

	    if ($label.length) {
	      $label.addClass(this.options.labelErrorClass);
	    }

	    if ($formError.length) {
	      $formError.addClass(this.options.formErrorClass);
	    }

	    $el.addClass(this.options.inputErrorClass).attr('data-invalid', '');
	  }

	  /**
	   * Remove CSS error classes etc from an entire radio button group
	   * @param {String} groupName - A string that specifies the name of a radio button group
	   *
	   */

	  removeRadioErrorClasses(groupName) {
	    var $els = this.$element.find(`:radio[name="${groupName}"]`);
	    var $labels = this.findRadioLabels($els);
	    var $formErrors = this.findFormError($els);

	    if ($labels.length) {
	      $labels.removeClass(this.options.labelErrorClass);
	    }

	    if ($formErrors.length) {
	      $formErrors.removeClass(this.options.formErrorClass);
	    }

	    $els.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');

	  }

	  /**
	   * Removes CSS error class as specified by the Abide settings from the label, input, and the form
	   * @param {Object} $el - jQuery object to remove the class from
	   */
	  removeErrorClasses($el) {
	    // radios need to clear all of the els
	    if($el[0].type == 'radio') {
	      return this.removeRadioErrorClasses($el.attr('name'));
	    }

	    var $label = this.findLabel($el);
	    var $formError = this.findFormError($el);

	    if ($label.length) {
	      $label.removeClass(this.options.labelErrorClass);
	    }

	    if ($formError.length) {
	      $formError.removeClass(this.options.formErrorClass);
	    }

	    $el.removeClass(this.options.inputErrorClass).removeAttr('data-invalid');
	  }

	  /**
	   * Goes through a form to find inputs and proceeds to validate them in ways specific to their type
	   * @fires Abide#invalid
	   * @fires Abide#valid
	   * @param {Object} element - jQuery object to validate, should be an HTML input
	   * @returns {Boolean} goodToGo - If the input is valid or not.
	   */
	  validateInput($el) {
	    var clearRequire = this.requiredCheck($el),
	        validated = false,
	        customValidator = true,
	        validator = $el.attr('data-validator'),
	        equalTo = true;

	    switch ($el[0].type) {
	      case 'radio':
	        validated = this.validateRadio($el.attr('name'));
	        break;

	      case 'checkbox':
	        validated = clearRequire;
	        break;

	      case 'select':
	      case 'select-one':
	      case 'select-multiple':
	        validated = clearRequire;
	        break;

	      default:
	        validated = this.validateText($el);
	    }

	    if (validator) {
	      customValidator = this.matchValidation($el, validator, $el.attr('required'));
	    }

	    if ($el.attr('data-equalto')) {
	      equalTo = this.options.validators.equalTo($el);
	    }


	    var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
	    var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

	    this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);

	    /**
	     * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
	     * Trigger includes the DOM element of the input.
	     * @event Abide#valid
	     * @event Abide#invalid
	     */
	    $el.trigger(message, [$el]);

	    return goodToGo;
	  }

	  /**
	   * Goes through a form and if there are any invalid inputs, it will display the form error element
	   * @returns {Boolean} noError - true if no errors were detected...
	   * @fires Abide#formvalid
	   * @fires Abide#forminvalid
	   */
	  validateForm() {
	    var acc = [];
	    var _this = this;

	    this.$inputs.each(function() {
	      acc.push(_this.validateInput($(this)));
	    });

	    var noError = acc.indexOf(false) === -1;

	    this.$element.find('[data-abide-error]').css('display', (noError ? 'none' : 'block'));

	    /**
	     * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
	     * Trigger includes the element of the form.
	     * @event Abide#formvalid
	     * @event Abide#forminvalid
	     */
	    this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);

	    return noError;
	  }

	  /**
	   * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
	   * @param {Object} $el - jQuery object to validate, should be a text input HTML element
	   * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
	   * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
	   */
	  validateText($el, pattern) {
	    // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
	    pattern = (pattern || $el.attr('pattern') || $el.attr('type'));
	    var inputText = $el.val();
	    var valid = false;

	    if (inputText.length) {
	      // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
	      if (this.options.patterns.hasOwnProperty(pattern)) {
	        valid = this.options.patterns[pattern].test(inputText);
	      }
	      // If the pattern name isn't also the type attribute of the field, then test it as a regexp
	      else if (pattern !== $el.attr('type')) {
	        valid = new RegExp(pattern).test(inputText);
	      }
	      else {
	        valid = true;
	      }
	    }
	    // An empty field is valid if it's not required
	    else if (!$el.prop('required')) {
	      valid = true;
	    }

	    return valid;
	   }

	  /**
	   * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
	   * @param {String} groupName - A string that specifies the name of a radio button group
	   * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
	   */
	  validateRadio(groupName) {
	    // If at least one radio in the group has the `required` attribute, the group is considered required
	    // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
	    var $group = this.$element.find(`:radio[name="${groupName}"]`);
	    var valid = false;

	    // .attr() returns undefined if no elements in $group have the attribute "required"
	    if ($group.attr('required') === undefined) {
	      valid = true;
	    }

	    // For the group to be valid, at least one radio needs to be checked
	    $group.each((i, e) => {
	      if ($(e).prop('checked')) {
	        valid = true;
	      }
	    });

	    return valid;
	  }

	  /**
	   * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
	   * @param {Object} $el - jQuery input element.
	   * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
	   * @param {Boolean} required - self explanatory?
	   * @returns {Boolean} - true if validations passed.
	   */
	  matchValidation($el, validators, required) {
	    required = required ? true : false;

	    var clear = validators.split(' ').map((v) => {
	      return this.options.validators[v]($el, required, $el.parent());
	    });
	    return clear.indexOf(false) === -1;
	  }

	  /**
	   * Resets form inputs and styles
	   * @fires Abide#formreset
	   */
	  resetForm() {
	    var $form = this.$element,
	        opts = this.options;

	    $(`.${opts.labelErrorClass}`, $form).not('small').removeClass(opts.labelErrorClass);
	    $(`.${opts.inputErrorClass}`, $form).not('small').removeClass(opts.inputErrorClass);
	    $(`${opts.formErrorSelector}.${opts.formErrorClass}`).removeClass(opts.formErrorClass);
	    $form.find('[data-abide-error]').css('display', 'none');
	    $(':input', $form).not(':button, :submit, :reset, :hidden, [data-abide-ignore]').val('').removeAttr('data-invalid');
	    /**
	     * Fires when the form has been reset.
	     * @event Abide#formreset
	     */
	    $form.trigger('formreset.zf.abide', [$form]);
	  }

	  /**
	   * Destroys an instance of Abide.
	   * Removes error styles and classes from elements, without resetting their values.
	   */
	  destroy() {
	    var _this = this;
	    this.$element
	      .off('.abide')
	      .find('[data-abide-error]')
	        .css('display', 'none');

	    this.$inputs
	      .off('.abide')
	      .each(function() {
	        _this.removeErrorClasses($(this));
	      });

	    Foundation.unregisterPlugin(this);
	  }
	}

	/**
	 * Default settings for plugin
	 */
	Abide.defaults = {
	  /**
	   * The default event to validate inputs. Checkboxes and radios validate immediately.
	   * Remove or change this value for manual validation.
	   * @option
	   * @example 'fieldChange'
	   */
	  validateOn: 'fieldChange',

	  /**
	   * Class to be applied to input labels on failed validation.
	   * @option
	   * @example 'is-invalid-label'
	   */
	  labelErrorClass: 'is-invalid-label',

	  /**
	   * Class to be applied to inputs on failed validation.
	   * @option
	   * @example 'is-invalid-input'
	   */
	  inputErrorClass: 'is-invalid-input',

	  /**
	   * Class selector to use to target Form Errors for show/hide.
	   * @option
	   * @example '.form-error'
	   */
	  formErrorSelector: '.form-error',

	  /**
	   * Class added to Form Errors on failed validation.
	   * @option
	   * @example 'is-visible'
	   */
	  formErrorClass: 'is-visible',

	  /**
	   * Set to true to validate text inputs on any value change.
	   * @option
	   * @example false
	   */
	  liveValidate: false,

	  patterns: {
	    alpha : /^[a-zA-Z]+$/,
	    alpha_numeric : /^[a-zA-Z0-9]+$/,
	    integer : /^[-+]?\d+$/,
	    number : /^[-+]?\d*(?:[\.\,]\d+)?$/,

	    // amex, visa, diners
	    card : /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
	    cvv : /^([0-9]){3,4}$/,

	    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
	    email : /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,

	    url : /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
	    // abc.de
	    domain : /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,

	    datetime : /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
	    // YYYY-MM-DD
	    date : /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
	    // HH:MM:SS
	    time : /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
	    dateISO : /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
	    // MM/DD/YYYY
	    month_day_year : /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
	    // DD/MM/YYYY
	    day_month_year : /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,

	    // #FFF or #FFFFFF
	    color : /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
	  },

	  /**
	   * Optional validation functions to be used. `equalTo` being the only default included function.
	   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
	   * el : The jQuery element to validate.
	   * required : Boolean value of the required attribute be present or not.
	   * parent : The direct parent of the input.
	   * @option
	   */
	  validators: {
	    equalTo: function (el, required, parent) {
	      return $(`#${el.attr('data-equalto')}`).val() === el.val();
	    }
	  }
	}

	// Window exports
	Foundation.plugin(Abide, 'Abide');

	}(jQuery);


/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	!function($) {

	/**
	 * Tooltip module.
	 * @module foundation.tooltip
	 * @requires foundation.util.box
	 * @requires foundation.util.triggers
	 */

	class Tooltip {
	  /**
	   * Creates a new instance of a Tooltip.
	   * @class
	   * @fires Tooltip#init
	   * @param {jQuery} element - jQuery object to attach a tooltip to.
	   * @param {Object} options - object to extend the default configuration.
	   */
	  constructor(element, options) {
	    this.$element = element;
	    this.options = $.extend({}, Tooltip.defaults, this.$element.data(), options);

	    this.isActive = false;
	    this.isClick = false;
	    this._init();

	    Foundation.registerPlugin(this, 'Tooltip');
	  }

	  /**
	   * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
	   * @private
	   */
	  _init() {
	    var elemId = this.$element.attr('aria-describedby') || Foundation.GetYoDigits(6, 'tooltip');

	    this.options.positionClass = this._getPositionClass(this.$element);
	    this.options.tipText = this.options.tipText || this.$element.attr('title');
	    this.template = this.options.template ? $(this.options.template) : this._buildTemplate(elemId);

	    this.template.appendTo(document.body)
	        .text(this.options.tipText)
	        .hide();

	    this.$element.attr({
	      'title': '',
	      'aria-describedby': elemId,
	      'data-yeti-box': elemId,
	      'data-toggle': elemId,
	      'data-resize': elemId
	    }).addClass(this.triggerClass);

	    //helper variables to track movement on collisions
	    this.usedPositions = [];
	    this.counter = 4;
	    this.classChanged = false;

	    this._events();
	  }

	  /**
	   * Grabs the current positioning class, if present, and returns the value or an empty string.
	   * @private
	   */
	  _getPositionClass(element) {
	    if (!element) { return ''; }
	    // var position = element.attr('class').match(/top|left|right/g);
	    var position = element[0].className.match(/\b(top|left|right)\b/g);
	        position = position ? position[0] : '';
	    return position;
	  };
	  /**
	   * builds the tooltip element, adds attributes, and returns the template.
	   * @private
	   */
	  _buildTemplate(id) {
	    var templateClasses = (`${this.options.tooltipClass} ${this.options.positionClass} ${this.options.templateClasses}`).trim();
	    var $template =  $('<div></div>').addClass(templateClasses).attr({
	      'role': 'tooltip',
	      'aria-hidden': true,
	      'data-is-active': false,
	      'data-is-focus': false,
	      'id': id
	    });
	    return $template;
	  }

	  /**
	   * Function that gets called if a collision event is detected.
	   * @param {String} position - positioning class to try
	   * @private
	   */
	  _reposition(position) {
	    this.usedPositions.push(position ? position : 'bottom');

	    //default, try switching to opposite side
	    if (!position && (this.usedPositions.indexOf('top') < 0)) {
	      this.template.addClass('top');
	    } else if (position === 'top' && (this.usedPositions.indexOf('bottom') < 0)) {
	      this.template.removeClass(position);
	    } else if (position === 'left' && (this.usedPositions.indexOf('right') < 0)) {
	      this.template.removeClass(position)
	          .addClass('right');
	    } else if (position === 'right' && (this.usedPositions.indexOf('left') < 0)) {
	      this.template.removeClass(position)
	          .addClass('left');
	    }

	    //if default change didn't work, try bottom or left first
	    else if (!position && (this.usedPositions.indexOf('top') > -1) && (this.usedPositions.indexOf('left') < 0)) {
	      this.template.addClass('left');
	    } else if (position === 'top' && (this.usedPositions.indexOf('bottom') > -1) && (this.usedPositions.indexOf('left') < 0)) {
	      this.template.removeClass(position)
	          .addClass('left');
	    } else if (position === 'left' && (this.usedPositions.indexOf('right') > -1) && (this.usedPositions.indexOf('bottom') < 0)) {
	      this.template.removeClass(position);
	    } else if (position === 'right' && (this.usedPositions.indexOf('left') > -1) && (this.usedPositions.indexOf('bottom') < 0)) {
	      this.template.removeClass(position);
	    }
	    //if nothing cleared, set to bottom
	    else {
	      this.template.removeClass(position);
	    }
	    this.classChanged = true;
	    this.counter--;
	  }

	  /**
	   * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
	   * if the tooltip is larger than the screen width, default to full width - any user selected margin
	   * @private
	   */
	  _setPosition() {
	    var position = this._getPositionClass(this.template),
	        $tipDims = Foundation.Box.GetDimensions(this.template),
	        $anchorDims = Foundation.Box.GetDimensions(this.$element),
	        direction = (position === 'left' ? 'left' : ((position === 'right') ? 'left' : 'top')),
	        param = (direction === 'top') ? 'height' : 'width',
	        offset = (param === 'height') ? this.options.vOffset : this.options.hOffset,
	        _this = this;

	    if (($tipDims.width >= $tipDims.windowDims.width) || (!this.counter && !Foundation.Box.ImNotTouchingYou(this.template))) {
	      this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
	      // this.$element.offset(Foundation.GetOffsets(this.template, this.$element, 'center bottom', this.options.vOffset, this.options.hOffset, true)).css({
	        'width': $anchorDims.windowDims.width - (this.options.hOffset * 2),
	        'height': 'auto'
	      });
	      return false;
	    }

	    this.template.offset(Foundation.Box.GetOffsets(this.template, this.$element,'center ' + (position || 'bottom'), this.options.vOffset, this.options.hOffset));

	    while(!Foundation.Box.ImNotTouchingYou(this.template) && this.counter) {
	      this._reposition(position);
	      this._setPosition();
	    }
	  }

	  /**
	   * reveals the tooltip, and fires an event to close any other open tooltips on the page
	   * @fires Tooltip#closeme
	   * @fires Tooltip#show
	   * @function
	   */
	  show() {
	    if (this.options.showOn !== 'all' && !Foundation.MediaQuery.atLeast(this.options.showOn)) {
	      // console.error('The screen is too small to display this tooltip');
	      return false;
	    }

	    var _this = this;
	    this.template.css('visibility', 'hidden').show();
	    this._setPosition();

	    /**
	     * Fires to close all other open tooltips on the page
	     * @event Closeme#tooltip
	     */
	    this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));


	    this.template.attr({
	      'data-is-active': true,
	      'aria-hidden': false
	    });
	    _this.isActive = true;
	    // console.log(this.template);
	    this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function() {
	      //maybe do stuff?
	    });
	    /**
	     * Fires when the tooltip is shown
	     * @event Tooltip#show
	     */
	    this.$element.trigger('show.zf.tooltip');
	  }

	  /**
	   * Hides the current tooltip, and resets the positioning class if it was changed due to collision
	   * @fires Tooltip#hide
	   * @function
	   */
	  hide() {
	    // console.log('hiding', this.$element.data('yeti-box'));
	    var _this = this;
	    this.template.stop().attr({
	      'aria-hidden': true,
	      'data-is-active': false
	    }).fadeOut(this.options.fadeOutDuration, function() {
	      _this.isActive = false;
	      _this.isClick = false;
	      if (_this.classChanged) {
	        _this.template
	             .removeClass(_this._getPositionClass(_this.template))
	             .addClass(_this.options.positionClass);

	       _this.usedPositions = [];
	       _this.counter = 4;
	       _this.classChanged = false;
	      }
	    });
	    /**
	     * fires when the tooltip is hidden
	     * @event Tooltip#hide
	     */
	    this.$element.trigger('hide.zf.tooltip');
	  }

	  /**
	   * adds event listeners for the tooltip and its anchor
	   * TODO combine some of the listeners like focus and mouseenter, etc.
	   * @private
	   */
	  _events() {
	    var _this = this;
	    var $template = this.template;
	    var isFocus = false;

	    if (!this.options.disableHover) {

	      this.$element
	      .on('mouseenter.zf.tooltip', function(e) {
	        if (!_this.isActive) {
	          _this.timeout = setTimeout(function() {
	            _this.show();
	          }, _this.options.hoverDelay);
	        }
	      })
	      .on('mouseleave.zf.tooltip', function(e) {
	        clearTimeout(_this.timeout);
	        if (!isFocus || (!_this.isClick && _this.options.clickOpen)) {
	          _this.hide();
	        }
	      });
	    }

	    if (this.options.clickOpen) {
	      this.$element.on('mousedown.zf.tooltip', function(e) {
	        e.stopImmediatePropagation();
	        if (_this.isClick) {
	          _this.hide();
	          // _this.isClick = false;
	        } else {
	          _this.isClick = true;
	          if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
	            _this.show();
	          }
	        }
	      });
	    }

	    if (!this.options.disableForTouch) {
	      this.$element
	      .on('tap.zf.tooltip touchend.zf.tooltip', function(e) {
	        _this.isActive ? _this.hide() : _this.show();
	      });
	    }

	    this.$element.on({
	      // 'toggle.zf.trigger': this.toggle.bind(this),
	      // 'close.zf.trigger': this.hide.bind(this)
	      'close.zf.trigger': this.hide.bind(this)
	    });

	    this.$element
	      .on('focus.zf.tooltip', function(e) {
	        isFocus = true;
	        // console.log(_this.isClick);
	        if (_this.isClick) {
	          return false;
	        } else {
	          // $(window)
	          _this.show();
	        }
	      })

	      .on('focusout.zf.tooltip', function(e) {
	        isFocus = false;
	        _this.isClick = false;
	        _this.hide();
	      })

	      .on('resizeme.zf.trigger', function() {
	        if (_this.isActive) {
	          _this._setPosition();
	        }
	      });
	  }

	  /**
	   * adds a toggle method, in addition to the static show() & hide() functions
	   * @function
	   */
	  toggle() {
	    if (this.isActive) {
	      this.hide();
	    } else {
	      this.show();
	    }
	  }

	  /**
	   * Destroys an instance of tooltip, removes template element from the view.
	   * @function
	   */
	  destroy() {
	    this.$element.attr('title', this.template.text())
	                 .off('.zf.trigger .zf.tootip')
	                //  .removeClass('has-tip')
	                 .removeAttr('aria-describedby')
	                 .removeAttr('data-yeti-box')
	                 .removeAttr('data-toggle')
	                 .removeAttr('data-resize');

	    this.template.remove();

	    Foundation.unregisterPlugin(this);
	  }
	}

	Tooltip.defaults = {
	  disableForTouch: false,
	  /**
	   * Time, in ms, before a tooltip should open on hover.
	   * @option
	   * @example 200
	   */
	  hoverDelay: 200,
	  /**
	   * Time, in ms, a tooltip should take to fade into view.
	   * @option
	   * @example 150
	   */
	  fadeInDuration: 150,
	  /**
	   * Time, in ms, a tooltip should take to fade out of view.
	   * @option
	   * @example 150
	   */
	  fadeOutDuration: 150,
	  /**
	   * Disables hover events from opening the tooltip if set to true
	   * @option
	   * @example false
	   */
	  disableHover: false,
	  /**
	   * Optional addtional classes to apply to the tooltip template on init.
	   * @option
	   * @example 'my-cool-tip-class'
	   */
	  templateClasses: '',
	  /**
	   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
	   * @option
	   * @example 'tooltip'
	   */
	  tooltipClass: 'tooltip',
	  /**
	   * Class applied to the tooltip anchor element.
	   * @option
	   * @example 'has-tip'
	   */
	  triggerClass: 'has-tip',
	  /**
	   * Minimum breakpoint size at which to open the tooltip.
	   * @option
	   * @example 'small'
	   */
	  showOn: 'small',
	  /**
	   * Custom template to be used to generate markup for tooltip.
	   * @option
	   * @example '&lt;div class="tooltip"&gt;&lt;/div&gt;'
	   */
	  template: '',
	  /**
	   * Text displayed in the tooltip template on open.
	   * @option
	   * @example 'Some cool space fact here.'
	   */
	  tipText: '',
	  touchCloseText: 'Tap to close.',
	  /**
	   * Allows the tooltip to remain open if triggered with a click or touch event.
	   * @option
	   * @example true
	   */
	  clickOpen: true,
	  /**
	   * Additional positioning classes, set by the JS
	   * @option
	   * @example 'top'
	   */
	  positionClass: '',
	  /**
	   * Distance, in pixels, the template should push away from the anchor on the Y axis.
	   * @option
	   * @example 10
	   */
	  vOffset: 10,
	  /**
	   * Distance, in pixels, the template should push away from the anchor on the X axis, if aligned to a side.
	   * @option
	   * @example 12
	   */
	  hOffset: 12
	};

	/**
	 * TODO utilize resize event trigger
	 */

	// Window exports
	Foundation.plugin(Tooltip, 'Tooltip');

	}(jQuery);


/***/ }
/******/ ]);