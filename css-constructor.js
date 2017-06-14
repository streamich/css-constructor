'use strict'
var _extends =
  Object.assign ||
  function(target) {
    for (var source, i = 1; i < arguments.length; i++)
      for (var key in ((source = arguments[i]), source))
        Object.prototype.hasOwnProperty.call(source, key) &&
          (target[key] = source[key])
    return target
  }
var _react = require('react'),
  _react2 = _interopRequireDefault(_react),
  _stylis = require('stylis'),
  _stylis2 = _interopRequireDefault(_stylis)
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
var css = function(a) {
  return function(b, c, d) {
    return _extends({}, d, {
      value: function value() {
        var e = void 0,
          g = d.value.apply(
            (function f(m) {
              return (e = m.props), m
            })(this),
            arguments
          ),
          h = fillProps(a, e),
          j = g.props.className || '',
          k = j + ' ' + insertRules(h),
          l = _extends({}, e, { className: k })
        return _react2.default.cloneElement(g, l, g.props.children)
      }
    })
  }
},
  fillProps = function(a, b) {
    a = a[0]
    var c = /{this.props.*}/g, d = a.match(c)
    if (d && d.length) {
      var _iteratorNormalCompletion = !0,
        _didIteratorError = !1,
        _iteratorError = void 0
      try {
        for (
          var _step, _iterator = d[Symbol.iterator]();
          !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
          _iteratorNormalCompletion = !0
        ) {
          var e = _step.value, f = e, g = void 0, h = void 0
          ;(f = f.replace('{this.props.', '')), (f = f.substring(
            0,
            f.length - 1
          )), (f = f.trim()), (g = b), (h = f.split('.'))
          for (var j = 0; j < h.length; j++)
            g = g[h[j]]
          a = a.replace(e, g)
        }
      } catch (err) {
        ;(_didIteratorError = !0), (_iteratorError = err)
      } finally {
        try {
          !_iteratorNormalCompletion && _iterator.return && _iterator.return()
        } finally {
          if (_didIteratorError) throw _iteratorError
        }
      }
    }
    return a
  },
  insertRules = function(a) {
    var b = getStyleElement(), c = getHash(a)
    console.log(c)
    var d = (0, _stylis2.default)('.' + c, a)
    return (b.innerHTML += d), c
  },
  getHash = function(a) {
    var b = 0
    for (var d, c = 0; c < a.length; c++)
      (d = a.charCodeAt(c)), (b = (b << 5) - b + d)
    return 'c' + b.toString(36)
  },
  getStyleElement = function() {
    var a = document.querySelector('[title=css-constructor]')
    return a ||
      ((a = document.createElement('style')), a.setAttribute(
        'title',
        'css-constructor'
      ), document.head.appendChild(a)), a
  },
  camelCase = function(a) {
    return a.replace(/(\-[a-z])/g, function(b) {
      return b.toUpperCase().replace('-', '')
    })
  }
module.exports = css
