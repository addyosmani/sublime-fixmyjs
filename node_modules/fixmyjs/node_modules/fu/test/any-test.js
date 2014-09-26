module.exports = function (fu, assert) {
  var a = [1, 2, 3]
  return {
    any: function () {
      assert.isFalse(
        fu.any(function (n) { return typeof n == 'string' }, a))

      assert.isTrue(
        fu.any(function (n) { return n == 2 }, a))
    },

    empty: function () {
      assert.isFalse(fu.any(Boolean, []))
    },

    unary: function () {
      var any = fu.any(function (n) { return n == 3 })
      assert.isFunction(any)
      assert.isTrue(any(a))
    }
  }
}
