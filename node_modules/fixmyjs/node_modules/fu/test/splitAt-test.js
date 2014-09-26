module.exports = function (fu, assert) {
  var a = [1, 2, 3, 4, 5, 6]
  var b = [[1, 2, 3], [4, 5, 6]]
  var deq = assert.deepEqual

  return {
    splitAt: function () {
      deq(fu.splitAt(3, a), b)
      deq(fu.splitAt(7, a), [a, []])
      deq(fu.splitAt(0, a), [[], a])
      deq(fu.splitAt(-4, a), [[], a])
    },

    unary: function () {
      var split = fu.splitAt(3)
      assert.isFunction(split)
      deq(split(a), b)
    }
  }
}
