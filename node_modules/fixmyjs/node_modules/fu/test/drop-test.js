module.exports = function (fu, assert) {
  var a = [1, 2, 3]
  var deq = assert.deepEqual
  return {
    drop: function () {
      deq(fu.drop(-1, a), a)
      deq(fu.drop(0, a), a)
      deq(fu.drop(1, a), [2, 3])
      deq(fu.drop(2, a), [3])
      deq(fu.drop(3, a), [])
      deq(fu.drop(5, a), [])
    },

    empty: function () {
      assert.deepEqual(fu.drop(20, []), [])
      assert.deepEqual(fu.drop(0, []), [])
    },

    unary: function () {
      var drop = fu.drop(2)
      assert.isFunction(drop)
      deq(drop(a), [3])
    }
  }
}
