module.exports = function (fu, assert) {
  var deq = assert.deepEqual

  return {
    map: function () {
      var a = [1, 2, 3]
      deq(
        fu.map(fu.id, a),
        a
      )
    },

    empty: function () {
      var a = []
      deq(fu.map(fu.id, a), a)
    },

    err: function () {
      assert.throws(function () {
        fu.map(2, [1])
      })
//      fu.map(2, 4)
//      fu.map(fu.id, {})
    },

    unary: function () {
      var map = fu.map(function (n) { return n * n })
      assert.isFunction(map)
      deq(map([1, 2, 3]), [1, 4, 9])
    }
  }
}
