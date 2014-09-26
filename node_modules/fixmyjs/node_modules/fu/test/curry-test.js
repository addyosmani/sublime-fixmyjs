module.exports = function (fu, assert) {
  return {
    curry: function () {
      var all = fu.curry(fu.all, function (n) { return n == 1 })
      assert.isFunction(all)
      assert.isTrue(all([1, 1, 1]))
      assert.isFalse(all([1, 2, 3]))
    }
  }
}
