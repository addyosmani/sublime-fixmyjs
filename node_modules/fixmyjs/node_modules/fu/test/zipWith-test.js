var min = function (a, b) { return a - b}
var a = [1, 2, 3]
var b = [3, 2, 1]

module.exports = {
  zipWith: function (fu, assert) {
    assert.equal(fu.head(fu.zipWith(min, a, b)), -2)

    assert.deepEqual(
      fu.take(3, fu.zipWith(min,
        [1, 2, 3, 4, 6, 8],
        [3, 2, 1])), [-2, 0, 2])

    assert.deepEqual(
      fu.zipWith(min, a, b),
      [-2, 0, 2]
    )
  },

  empty: function (fu, assert) {
    assert.throws(function () {
      fu.zipWith(min, [1])
    })
  },

  unary: function (fu, assert) {
    var zip = fu.zipWith(function (a, b) { return a + b })
    assert.isFunction(zip)
    assert.equal(zip([1], [2]), 3)
  }
}
