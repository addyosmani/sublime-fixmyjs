module.exports = function (fu, assert) {
  var a = [1, 2, 3, 4, 5]
  var z = [0, 1, 2]
  var n = [NaN, null, undefined]
  var t = assert.isTrue
  var f = assert.isFalse
  return {
    elem: function () {
      t(fu.elem(5, a))
      f(fu.elem(6, a))
    },

    zero: function () {
      t(fu.elem(0, z))
      f(fu.elem(-0, z))
    },

    nan: function () {
      t(fu.elem(NaN, n))
      f(fu.elem(false, n))
    },

    undef: function () {
      t(fu.elem(undefined, n))
      t(fu.elem(null, n))
    },

    empty: function () {
      f(fu.elem(12, []))
    },

    unary: function () {
      var elem = fu.elem(5)
      assert.isFunction(elem)
      t(elem(a))
    }
  }
}
