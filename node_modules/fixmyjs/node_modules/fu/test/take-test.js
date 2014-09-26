module.exports = function (fu, assert) {
  var a = [1, 2, 3]
  var deq = assert.deepEqual
  return {
    take: function () {
      deq(fu.take(-1, a), [])
      deq(fu.take(0, a), [])
      deq(fu.take(1, a), [1])
      deq(fu.take(2, a), [1, 2])
      deq(fu.take(3, a), a)
      deq(fu.take(5, a), a)
    },

    empty: function () {
      assert.deepEqual(fu.take(20, []), [])
      assert.deepEqual(fu.take(0, []), [])
    },

    unary: function () {
      var take = fu.take(2)
      assert.isFunction(take)
      deq(take(a), [1, 2])
    }
  }
}
