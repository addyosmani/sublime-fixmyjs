module.exports = function (fu, assert) {
  var deq = assert.deepEqual

  return {
    filter: function () {
      var a = [1, 2, 3]
      deq(
        fu.filter(Boolean, a),
        a
      )

      deq(
        fu.filter(function (n) { return n == 2 }, a),
        [2]
      )
    },

    empty: function () {
      var a = []
      deq(fu.filter(Boolean, a), a)
    },

    err: function () {
      assert.throws(function () {
        fu.filter(2, [1])
      })
    },

    unary: function () {
      var filter = fu.filter(function (n) { return n < 3 })
      assert.isFunction(filter)
      deq(filter([1, 2, 3]), [1, 2])
    }
  }
}
