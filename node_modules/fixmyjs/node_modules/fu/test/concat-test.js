module.exports = function (fu, assert) {
  var a = [1, 2, 3]
  var b = [4, 5, 6]

  var deq = assert.deepEqual

  return {
    concat: function () {
      deq(fu.concat(a, b), a.concat(b))
      deq(fu.concat(a, b, a, b), a.concat(b, a, b))
      deq(fu.concat(a), a)
      assert.throws(function () { fu.concat(1, 2, 3) }, RangeError)
    },
    empty: function () {
      assert.deepEqual(fu.concat([]), [])
      assert.deepEqual(fu.concat([], [], []), [])
    }
  }
}
