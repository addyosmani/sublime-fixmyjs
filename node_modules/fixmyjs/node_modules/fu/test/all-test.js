module.exports = function (fu, assert) {
  var a = [1, 2, 3]
  return {
    all: function () {
      assert.isTrue(
        fu.all(function (n) { return typeof n == 'number' }, a))

      assert.isFalse(
        fu.all(function (n) { return n == 2 }, a))
    },

    empty: function () {
      assert.isTrue(fu.all(Boolean, []))
    },

    unary: function () {
      var all = fu.all(function (n) { return n * 0 == 0 })
      assert.isFunction(all)
      assert.isTrue(all(a))
    }
  }
}
