function e(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
function t(e) {
  return e && e.__esModule ? e.default : e;
}
var n =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {},
  r = {},
  i = {},
  a = n.parcelRequire3a11;
null == a &&
  (((a = function (e) {
    if (e in r) return r[e].exports;
    if (e in i) {
      var t = i[e];
      delete i[e];
      var n = { id: e, exports: {} };
      return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
    }
    var a = new Error("Cannot find module '" + e + "'");
    throw ((a.code = 'MODULE_NOT_FOUND'), a);
  }).register = function (e, t) {
    i[e] = t;
  }),
  (n.parcelRequire3a11 = a)),
  a.register('27Lyk', function (t, n) {
    var r, i;
    e(
      t.exports,
      'register',
      () => r,
      (e) => (r = e),
    ),
      e(
        t.exports,
        'resolve',
        () => i,
        (e) => (i = e),
      );
    var a = {};
    (r = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) a[t[n]] = e[t[n]];
    }),
      (i = function (e) {
        var t = a[e];
        if (null == t) throw new Error('Could not resolve bundle with id ' + e);
        return t;
      });
  }),
  a('27Lyk').register(
    JSON.parse('{"f9fpV":"index.e4fbb66e.js","eyyUD":"icons.c14567a0.svg"}'),
  );
const o = async function (e, t) {
    try {
      const r = t
          ? fetch(e, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(t),
            })
          : fetch(e),
        i = await Promise.race([
          r,
          ((n = 10),
          new Promise(function (e, t) {
            setTimeout(function () {
              t(new Error(`Request took too long! Timeout after ${n} second`));
            }, 1e3 * n);
          })),
        ]),
        a = await i.json();
      if (!i.ok) throw new Error(`${a.message} (${i.status})`);
      return a;
    } catch (e) {
      throw e;
    }
    var n;
  },
  s = {
    recipe: {},
    search: { query: '', results: [], page: 1, resultsPerPage: 10 },
    bookmarks: [],
  },
  c = function (e) {
    const { recipe: t } = e.data;
    return {
      id: t.id,
      title: t.title,
      publisher: t.publisher,
      sourceUrl: t.source_url,
      image: t.image_url,
      servings: t.servings,
      cookingTime: t.cooking_time,
      ingredients: t.ingredients,
      ...(t.key && { key: t.key }),
    };
  },
  u = function (e = s.search.page) {
    s.search.page = e;
    const t = (e - 1) * s.search.resultsPerPage,
      n = e * s.search.resultsPerPage;
    return s.search.results.slice(t, n);
  },
  l = function () {
    localStorage.setItem('bookmarks', JSON.stringify(s.bookmarks));
  },
  d = function (e) {
    s.bookmarks.push(e),
      e.id === s.recipe.id && (s.recipe.bookmarked = !0),
      l();
  };
!(function () {
  const e = localStorage.getItem('bookmarks');
  e && (s.bookmarks = JSON.parse(e));
})();
localStorage.clear('bookmarks');
var h, p, f, g;
(h = new URL(a('27Lyk').resolve('eyyUD'), import.meta.url).toString()),
  (Fraction = function (e, t) {
    if (void 0 !== e && t)
      'number' == typeof e && 'number' == typeof t
        ? ((this.numerator = e), (this.denominator = t))
        : 'string' == typeof e &&
          'string' == typeof t &&
          ((this.numerator = parseInt(e)), (this.denominator = parseInt(t)));
    else if (void 0 === t)
      if (((num = e), 'number' == typeof num))
        (this.numerator = num), (this.denominator = 1);
      else if ('string' == typeof num) {
        var n,
          r,
          i = num.split(' ');
        if (
          (i[0] && (n = i[0]),
          i[1] && (r = i[1]),
          n % 1 == 0 && r && r.match('/'))
        )
          return new Fraction(n).add(new Fraction(r));
        if (!n || r) return;
        if ('string' == typeof n && n.match('/')) {
          var a = n.split('/');
          (this.numerator = a[0]), (this.denominator = a[1]);
        } else {
          if ('string' == typeof n && n.match('.'))
            return new Fraction(parseFloat(n));
          (this.numerator = parseInt(n)), (this.denominator = 1);
        }
      }
    this.normalize();
  }),
  (Fraction.prototype.clone = function () {
    return new Fraction(this.numerator, this.denominator);
  }),
  (Fraction.prototype.toString = function () {
    if ('NaN' === this.denominator) return 'NaN';
    var e =
        this.numerator / this.denominator > 0
          ? Math.floor(this.numerator / this.denominator)
          : Math.ceil(this.numerator / this.denominator),
      t = this.numerator % this.denominator,
      n = this.denominator,
      r = [];
    return (
      0 != e && r.push(e),
      0 != t && r.push((0 === e ? t : Math.abs(t)) + '/' + n),
      r.length > 0 ? r.join(' ') : 0
    );
  }),
  (Fraction.prototype.rescale = function (e) {
    return (this.numerator *= e), (this.denominator *= e), this;
  }),
  (Fraction.prototype.add = function (e) {
    var t = this.clone();
    return (
      (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
      (td = t.denominator),
      t.rescale(e.denominator),
      e.rescale(td),
      (t.numerator += e.numerator),
      t.normalize()
    );
  }),
  (Fraction.prototype.subtract = function (e) {
    var t = this.clone();
    return (
      (e = e instanceof Fraction ? e.clone() : new Fraction(e)),
      (td = t.denominator),
      t.rescale(e.denominator),
      e.rescale(td),
      (t.numerator -= e.numerator),
      t.normalize()
    );
  }),
  (Fraction.prototype.multiply = function (e) {
    var t = this.clone();
    if (e instanceof Fraction)
      (t.numerator *= e.numerator), (t.denominator *= e.denominator);
    else {
      if ('number' != typeof e) return t.multiply(new Fraction(e));
      t.numerator *= e;
    }
    return t.normalize();
  }),
  (Fraction.prototype.divide = function (e) {
    var t = this.clone();
    if (e instanceof Fraction)
      (t.numerator *= e.denominator), (t.denominator *= e.numerator);
    else {
      if ('number' != typeof e) return t.divide(new Fraction(e));
      t.denominator *= e;
    }
    return t.normalize();
  }),
  (Fraction.prototype.equals = function (e) {
    e instanceof Fraction || (e = new Fraction(e));
    var t = this.clone().normalize();
    e = e.clone().normalize();
    return t.numerator === e.numerator && t.denominator === e.denominator;
  }),
  (Fraction.prototype.normalize =
    ((f = function (e) {
      return (
        'number' == typeof e &&
        ((e > 0 && e % 1 > 0 && e % 1 < 1) ||
          (e < 0 && e % -1 < 0 && e % -1 > -1))
      );
    }),
    (g = function (e, t) {
      if (t) {
        var n = Math.pow(10, t);
        return Math.round(e * n) / n;
      }
      return Math.round(e);
    }),
    function () {
      if (f(this.denominator)) {
        var e = g(this.denominator, 9),
          t = Math.pow(10, e.toString().split('.')[1].length);
        (this.denominator = Math.round(this.denominator * t)),
          (this.numerator *= t);
      }
      f(this.numerator) &&
        ((e = g(this.numerator, 9)),
        (t = Math.pow(10, e.toString().split('.')[1].length)),
        (this.numerator = Math.round(this.numerator * t)),
        (this.denominator *= t));
      var n = Fraction.gcf(this.numerator, this.denominator);
      return (
        (this.numerator /= n),
        (this.denominator /= n),
        ((this.numerator < 0 && this.denominator < 0) ||
          (this.numerator > 0 && this.denominator < 0)) &&
          ((this.numerator *= -1), (this.denominator *= -1)),
        this
      );
    })),
  (Fraction.gcf = function (e, t) {
    var n = [],
      r = Fraction.primeFactors(e),
      i = Fraction.primeFactors(t);
    return (
      r.forEach(function (e) {
        var t = i.indexOf(e);
        t >= 0 && (n.push(e), i.splice(t, 1));
      }),
      0 === n.length
        ? 1
        : (function () {
            var e,
              t = n[0];
            for (e = 1; e < n.length; e++) t *= n[e];
            return t;
          })()
    );
  }),
  (Fraction.primeFactors = function (e) {
    for (var t = Math.abs(e), n = [], r = 2; r * r <= t; )
      t % r == 0 ? (n.push(r), (t /= r)) : r++;
    return 1 != t && n.push(t), n;
  }),
  (p = Fraction);
class m {
  _data;
  render(e, t = !0) {
    if (!e || (Array.isArray(e) && 0 === e.length)) return this.renderError();
    this._data = e;
    const n = this._generateMarkup();
    if (!t) return n;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', n);
  }
  update(e) {
    this._data = e;
    const t = this._generateMarkup(),
      n = document.createRange().createContextualFragment(t),
      r = Array.from(n.querySelectorAll('*')),
      i = Array.from(this._parentElement.querySelectorAll('*'));
    r.forEach((e, t) => {
      const n = i[t];
      e.isEqualNode(n) ||
        '' === e.firstChild?.nodeValue.trim() ||
        (n.textContent = e.textContent),
        e.isEqualNode(n) ||
          Array.from(e.attributes).forEach((e) =>
            n.setAttribute(e.name, e.value),
          );
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    const e = `\n      <div class="spinner">\n        <svg>\n          <use href="${t(
      h,
    )}#icon-loader"></use>\n        </svg>\n      </div>\n    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', e);
  }
  renderError(e = this._errorMessage) {
    const n = `\n      <div class="error">\n        <div>\n          <svg>\n            <use href="${t(
      h,
    )}#icon-alert-triangle"></use>\n          </svg>\n        </div>\n        <p>${e}</p>\n      </div>\n    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', n);
  }
  renderMessage(e = this._message) {
    const n = `\n    <div class="message">\n      <div>\n        <svg>\n          <use href="${t(
      h,
    )}#icon-smile"></use>\n        </svg>\n      </div>\n      <p>${e}</p>\n    </div>\n    `;
    this._clear(), this._parentElement.insertAdjacentHTML('afterbegin', n);
  }
}
var v = new (class extends m {
    _parentElement = document.querySelector('.recipe');
    _errorMessage = 'We could not find that recipe. Please try another one!';
    _message = '';
    addHandlerRender(e) {
      ['hashchange', 'load'].forEach((t) => window.addEventListener(t, e));
    }
    addHandlerAddBookmark(e) {
      this._parentElement.addEventListener('click', function (t) {
        t.target.closest('.btn--bookmark') && e();
      });
    }
    addHandlerUpdateServings(e) {
      this._parentElement.addEventListener('click', function (t) {
        const n = t.target.closest('.btn--update-servings');
        if (!n) return;
        const r = +n.dataset.updateTo;
        r > 0 && e(r);
      });
    }
    _generateMarkup() {
      return `\n      <figure class="recipe__fig">\n        <img src="${
        this._data.image
      }" alt="${
        this._data.title
      }" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${
        this._data.title
      }</span>\n        </h1>\n      </figure>\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${t(
        h,
      )}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${
        this._data.cookingTime
      }</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${t(
        h,
      )}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${
        this._data.servings
      }</span>\n          <span class="recipe__info-text">servings</span>\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--update-servings" data-update-to="${
        this._data.servings - 1
      }">\n              <svg>\n                <use href="${t(
        h,
      )}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--update-servings" data-update-to="${
        this._data.servings + 1
      }">\n              <svg>\n                <use href="${t(
        h,
      )}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div class="recipe__user-generated ${
        this._data.key ? '' : 'hidden'
      }">\n          <svg>\n            <use href="${t(
        h,
      )}#icon-user"></use>\n          </svg>\n        </div>\n        <button class="btn--round btn--bookmark">\n          <svg class="">\n            <use href="${t(
        h,
      )}#icon-bookmark${
        this._data.bookmarked ? '-fill' : ''
      }"></use>\n          </svg>\n        </button>\n      </div>\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n          ${this._data.ingredients
        .map(this._generateMarkupIngredient)
        .join(
          '',
        )}\n        </ul>\n      </div>\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${
        this._data.publisher
      }</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${
        this._data.sourceUrl
      }"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${t(
        h,
      )}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>\n    `;
    }
    _generateMarkupIngredient(e) {
      return `\n      <li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${t(
        h,
      )}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${
        e.quantity ? new p(e.quantity).toString() : ''
      }</div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${
        e.unit
      }</span>\n          ${e.description}\n        </div>\n      </li>\n    `;
    }
  })(),
  _ = (function (e) {
    var t,
      n = Object.prototype,
      r = n.hasOwnProperty,
      i =
        Object.defineProperty ||
        function (e, t, n) {
          e[t] = n.value;
        },
      a = 'function' == typeof Symbol ? Symbol : {},
      o = a.iterator || '@@iterator',
      s = a.asyncIterator || '@@asyncIterator',
      c = a.toStringTag || '@@toStringTag';
    function u(e, t, n) {
      return (
        Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        e[t]
      );
    }
    try {
      u({}, '');
    } catch (e) {
      u = function (e, t, n) {
        return (e[t] = n);
      };
    }
    function l(e, t, n, r) {
      var a = t && t.prototype instanceof m ? t : m,
        o = Object.create(a.prototype),
        s = new M(r || []);
      return i(o, '_invoke', { value: L(e, n, s) }), o;
    }
    function d(e, t, n) {
      try {
        return { type: 'normal', arg: e.call(t, n) };
      } catch (e) {
        return { type: 'throw', arg: e };
      }
    }
    e.wrap = l;
    var h = 'suspendedStart',
      p = 'executing',
      f = 'completed',
      g = {};
    function m() {}
    function v() {}
    function _() {}
    var y = {};
    u(y, o, function () {
      return this;
    });
    var b = Object.getPrototypeOf,
      w = b && b(b(H([])));
    w && w !== n && r.call(w, o) && (y = w);
    var k = (_.prototype = m.prototype = Object.create(y));
    function E(e) {
      ['next', 'throw', 'return'].forEach(function (t) {
        u(e, t, function (e) {
          return this._invoke(t, e);
        });
      });
    }
    function $(e, t) {
      function n(i, a, o, s) {
        var c = d(e[i], e, a);
        if ('throw' !== c.type) {
          var u = c.arg,
            l = u.value;
          return l && 'object' == typeof l && r.call(l, '__await')
            ? t.resolve(l.__await).then(
                function (e) {
                  n('next', e, o, s);
                },
                function (e) {
                  n('throw', e, o, s);
                },
              )
            : t.resolve(l).then(
                function (e) {
                  (u.value = e), o(u);
                },
                function (e) {
                  return n('throw', e, o, s);
                },
              );
        }
        s(c.arg);
      }
      var a;
      i(this, '_invoke', {
        value: function (e, r) {
          function i() {
            return new t(function (t, i) {
              n(e, r, t, i);
            });
          }
          return (a = a ? a.then(i, i) : i());
        },
      });
    }
    function L(e, t, n) {
      var r = h;
      return function (i, a) {
        if (r === p) throw new Error('Generator is already running');
        if (r === f) {
          if ('throw' === i) throw a;
          return j();
        }
        for (n.method = i, n.arg = a; ; ) {
          var o = n.delegate;
          if (o) {
            var s = x(o, n);
            if (s) {
              if (s === g) continue;
              return s;
            }
          }
          if ('next' === n.method) n.sent = n._sent = n.arg;
          else if ('throw' === n.method) {
            if (r === h) throw ((r = f), n.arg);
            n.dispatchException(n.arg);
          } else 'return' === n.method && n.abrupt('return', n.arg);
          r = p;
          var c = d(e, t, n);
          if ('normal' === c.type) {
            if (((r = n.done ? f : 'suspendedYield'), c.arg === g)) continue;
            return { value: c.arg, done: n.done };
          }
          'throw' === c.type &&
            ((r = f), (n.method = 'throw'), (n.arg = c.arg));
        }
      };
    }
    function x(e, n) {
      var r = e.iterator[n.method];
      if (r === t) {
        if (((n.delegate = null), 'throw' === n.method)) {
          if (
            e.iterator.return &&
            ((n.method = 'return'), (n.arg = t), x(e, n), 'throw' === n.method)
          )
            return g;
          (n.method = 'throw'),
            (n.arg = new TypeError(
              "The iterator does not provide a 'throw' method",
            ));
        }
        return g;
      }
      var i = d(r, e.iterator, n.arg);
      if ('throw' === i.type)
        return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), g;
      var a = i.arg;
      return a
        ? a.done
          ? ((n[e.resultName] = a.value),
            (n.next = e.nextLoc),
            'return' !== n.method && ((n.method = 'next'), (n.arg = t)),
            (n.delegate = null),
            g)
          : a
        : ((n.method = 'throw'),
          (n.arg = new TypeError('iterator result is not an object')),
          (n.delegate = null),
          g);
    }
    function F(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function S(e) {
      var t = e.completion || {};
      (t.type = 'normal'), delete t.arg, (e.completion = t);
    }
    function M(e) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        e.forEach(F, this),
        this.reset(!0);
    }
    function H(e) {
      if (e) {
        var n = e[o];
        if (n) return n.call(e);
        if ('function' == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var i = -1,
            a = function n() {
              for (; ++i < e.length; )
                if (r.call(e, i)) return (n.value = e[i]), (n.done = !1), n;
              return (n.value = t), (n.done = !0), n;
            };
          return (a.next = a);
        }
      }
      return { next: j };
    }
    function j() {
      return { value: t, done: !0 };
    }
    return (
      (v.prototype = _),
      i(k, 'constructor', { value: _, configurable: !0 }),
      i(_, 'constructor', { value: v, configurable: !0 }),
      (v.displayName = u(_, c, 'GeneratorFunction')),
      (e.isGeneratorFunction = function (e) {
        var t = 'function' == typeof e && e.constructor;
        return (
          !!t && (t === v || 'GeneratorFunction' === (t.displayName || t.name))
        );
      }),
      (e.mark = function (e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, _)
            : ((e.__proto__ = _), u(e, c, 'GeneratorFunction')),
          (e.prototype = Object.create(k)),
          e
        );
      }),
      (e.awrap = function (e) {
        return { __await: e };
      }),
      E($.prototype),
      u($.prototype, s, function () {
        return this;
      }),
      (e.AsyncIterator = $),
      (e.async = function (t, n, r, i, a) {
        void 0 === a && (a = Promise);
        var o = new $(l(t, n, r, i), a);
        return e.isGeneratorFunction(n)
          ? o
          : o.next().then(function (e) {
              return e.done ? e.value : o.next();
            });
      }),
      E(k),
      u(k, c, 'Generator'),
      u(k, o, function () {
        return this;
      }),
      u(k, 'toString', function () {
        return '[object Generator]';
      }),
      (e.keys = function (e) {
        var t = Object(e),
          n = [];
        for (var r in t) n.push(r);
        return (
          n.reverse(),
          function e() {
            for (; n.length; ) {
              var r = n.pop();
              if (r in t) return (e.value = r), (e.done = !1), e;
            }
            return (e.done = !0), e;
          }
        );
      }),
      (e.values = H),
      (M.prototype = {
        constructor: M,
        reset: function (e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = t),
            this.tryEntries.forEach(S),
            !e)
          )
            for (var n in this)
              't' === n.charAt(0) &&
                r.call(this, n) &&
                !isNaN(+n.slice(1)) &&
                (this[n] = t);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ('throw' === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var n = this;
          function i(r, i) {
            return (
              (s.type = 'throw'),
              (s.arg = e),
              (n.next = r),
              i && ((n.method = 'next'), (n.arg = t)),
              !!i
            );
          }
          for (var a = this.tryEntries.length - 1; a >= 0; --a) {
            var o = this.tryEntries[a],
              s = o.completion;
            if ('root' === o.tryLoc) return i('end');
            if (o.tryLoc <= this.prev) {
              var c = r.call(o, 'catchLoc'),
                u = r.call(o, 'finallyLoc');
              if (c && u) {
                if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
                if (this.prev < o.finallyLoc) return i(o.finallyLoc);
              } else if (c) {
                if (this.prev < o.catchLoc) return i(o.catchLoc, !0);
              } else {
                if (!u)
                  throw new Error('try statement without catch or finally');
                if (this.prev < o.finallyLoc) return i(o.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var i = this.tryEntries[n];
            if (
              i.tryLoc <= this.prev &&
              r.call(i, 'finallyLoc') &&
              this.prev < i.finallyLoc
            ) {
              var a = i;
              break;
            }
          }
          a &&
            ('break' === e || 'continue' === e) &&
            a.tryLoc <= t &&
            t <= a.finallyLoc &&
            (a = null);
          var o = a ? a.completion : {};
          return (
            (o.type = e),
            (o.arg = t),
            a
              ? ((this.method = 'next'), (this.next = a.finallyLoc), g)
              : this.complete(o)
          );
        },
        complete: function (e, t) {
          if ('throw' === e.type) throw e.arg;
          return (
            'break' === e.type || 'continue' === e.type
              ? (this.next = e.arg)
              : 'return' === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === e.type && t && (this.next = t),
            g
          );
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return this.complete(n.completion, n.afterLoc), S(n), g;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ('throw' === r.type) {
                var i = r.arg;
                S(n);
              }
              return i;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (e, n, r) {
          return (
            (this.delegate = { iterator: H(e), resultName: n, nextLoc: r }),
            'next' === this.method && (this.arg = t),
            g
          );
        },
      }),
      e
    );
  })({});
try {
  regeneratorRuntime = _;
} catch (e) {
  'object' == typeof globalThis
    ? (globalThis.regeneratorRuntime = _)
    : Function('r', 'regeneratorRuntime = r')(_);
}
var y = new (class {
  _parentElement = document.querySelector('.search');
  getQuery() {
    const e = this._parentElement.querySelector('.search__field').value;
    return this._clearInput(), e;
  }
  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  addHandlerSearch(e) {
    this._parentElement.addEventListener('submit', function (t) {
      t.preventDefault(), e();
    });
  }
})();
var b = new (class extends m {
  _parentElement = '';
  _generateMarkup(e) {
    const n = window.location.hash.slice(1);
    return `\n      <li class="preview">\n        <a class="preview__link ${
      this._data.id === n ? 'preview__link--active' : ''
    } " href="#${
      this._data.id
    }">\n          <figure class="preview__fig">\n            <img src="${
      this._data.image
    }" alt="${
      this._data.title
    }" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${
      this._data.title
    }</h4>\n            <p class="preview__publisher">${
      this._data.publisher
    }</p>\n            <div class="preview__user-generated ${
      this._data.key ? '' : 'hidden'
    }">\n            <svg>\n              <use href="${t(
      h,
    )}#icon-user"></use>\n            </svg>\n          </div>\n          </div>\n        </a>\n      </li>\n    `;
  }
})();
var w = new (class extends m {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query. Please try again!';
  _message = '';
  _generateMarkup() {
    return this._data.map((e) => b.render(e, !1)).join('');
  }
})();
var k = new (class extends m {
  _parentElement = document.querySelector('.pagination');
  addHandlerClick(e) {
    this._parentElement.addEventListener('click', function (t) {
      const n = t.target.closest('.btn--inline');
      if (!n) return;
      const r = +n.dataset.goto;
      e(r);
    });
  }
  _generateMarkup() {
    const e = this._data.page,
      n = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    return 1 === e && n > 1
      ? `\n      <button data-goto="${
          e + 1
        }" class="btn--inline pagination__btn--next">\n        <span>Page ${
          e + 1
        }</span>\n        <svg class="search__icon">\n          <use href="${t(
          h,
        )}#icon-arrow-right"></use>\n        </svg>\n      </button>\n      `
      : e === n && n > 1
      ? `\n        <button data-goto="${
          e - 1
        }"  class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${t(
          h,
        )}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${
          e - 1
        }</span>\n        </button>\n      `
      : e < n
      ? `\n        <button  data-goto="${
          e - 1
        }"  class="btn--inline pagination__btn--prev">\n          <svg class="search__icon">\n            <use href="${t(
          h,
        )}#icon-arrow-left"></use>\n          </svg>\n          <span>Page ${
          e - 1
        }</span>\n        </button>\n        <button  data-goto="${
          e + 1
        }"  class="btn--inline pagination__btn--next">\n          <span>Page ${
          e + 1
        }</span>\n          <svg class="search__icon">\n            <use href="${t(
          h,
        )}#icon-arrow-right"></use>\n          </svg>\n        </button>\n      `
      : 'only 1 page';
  }
})();
var E = new (class extends m {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it!';
  _message = '';
  addHandlerRender(e) {
    window.addEventListener('load', e);
  }
  _generateMarkup() {
    return this._data.map((e) => b.render(e, !1)).join('');
  }
})();
var $ = new (class extends m {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded!';
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  constructor() {
    super(), this._addHandlerShowWindow(), this._addHandlerHideWindow();
  }
  toggleWindow() {
    this._overlay.classList.toggle('hidden'),
      this._window.classList.toggle('hidden');
  }
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this)),
      this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }
  addHandlerUpload(e) {
    this._parentElement.addEventListener('submit', function (t) {
      t.preventDefault();
      const n = [...new FormData(this)],
        r = Object.fromEntries(n);
      e(r);
    });
  }
})();
const L = async function () {
    try {
      const e = window.location.hash.slice(1);
      if (!e) return;
      v.renderSpinner(),
        w.update(u()),
        E.update(s.bookmarks),
        await (async function (e) {
          try {
            const t = await o(
              `https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=cf9c5f97-9f28-45fe-9ac7-257ae153f154`,
            );
            (s.recipe = c(t)),
              s.bookmarks.some((t) => t.id === e)
                ? (s.recipe.bookmarked = !0)
                : (s.recipe.bookmarked = !1);
          } catch (e) {
            throw e;
          }
        })(e),
        v.render(s.recipe);
    } catch (e) {
      v.renderError();
    }
  },
  x = async function () {
    try {
      w.renderSpinner();
      const e = y.getQuery();
      if (!e) return;
      await (async function (e) {
        try {
          s.search.query = e;
          const t = await o(
            `https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=cf9c5f97-9f28-45fe-9ac7-257ae153f154`,
          );
          (s.search.results = t.data.recipes.map((e) => ({
            id: e.id,
            title: e.title,
            publisher: e.publisher,
            image: e.image_url,
            ...(e.key && { key: e.key }),
          }))),
            (s.search.page = 1);
        } catch (e) {
          throw (console.log(`${e} ????????`), e);
        }
      })(e),
        w.render(u()),
        k.render(s.search);
    } catch (e) {
      console.log(e);
    }
  },
  F = function (e) {
    w.render(u(e)), k.render(s.search);
  },
  S = function (e) {
    !(function (e) {
      s.recipe.ingredients.forEach((t) => {
        t.quantity = (t.quantity * e) / s.recipe.servings;
      }),
        (s.recipe.servings = e);
    })(e),
      v.update(s.recipe);
  },
  M = function () {
    s.recipe.bookmarked
      ? (function (e) {
          const t = s.bookmarks.findIndex((t) => t.id === e);
          s.bookmarks.splice(t, 1),
            e === s.recipe.id && (s.recipe.bookmarked = !1),
            l();
        })(s.recipe.id)
      : d(s.recipe),
      v.update(s.recipe),
      E.render(s.bookmarks);
  },
  H = function () {
    E.render(s.bookmarks);
  },
  j = async function (e) {
    try {
      $.renderSpinner(),
        await (async function (e) {
          try {
            const t = Object.entries(e)
                .filter((e) => e[0].startsWith('ingredient') && '' !== e[1])
                .map((e) => {
                  const t = e[1].split(',').map((e) => e.trim());
                  if (3 !== t.length)
                    throw new Error(
                      'Wrong ingredient format. Please use the correct format.',
                    );
                  const [n, r, i] = t;
                  return { quantity: n ? +n : null, unit: r, description: i };
                }),
              n = {
                title: e.title,
                source_url: e.sourceUrl,
                image_url: e.image,
                publisher: e.publisher,
                cooking_time: +e.cookingTime,
                servings: +e.servings,
                ingredients: t,
              },
              r = await o(
                'https://forkify-api.herokuapp.com/api/v2/recipes?key=cf9c5f97-9f28-45fe-9ac7-257ae153f154',
                n,
              );
            (s.recipe = c(r)), d(s.recipe);
          } catch (e) {
            throw e;
          }
        })(e),
        v.render(s.recipe),
        $.renderMessage(),
        E.render(s.bookmarks),
        window.history.pushState(null, '', `#${s.recipe.id}`),
        setTimeout(() => {
          $.toggleWindow();
        }, 2500);
    } catch (e) {
      console.log(`${e} ????`), $.renderError(e.message);
    }
  };
E.addHandlerRender(H),
  v.addHandlerRender(L),
  v.addHandlerUpdateServings(S),
  v.addHandlerAddBookmark(M),
  y.addHandlerSearch(x),
  k.addHandlerClick(F),
  $.addHandlerUpload(j);
//# sourceMappingURL=index.e4fbb66e.js.map
