module.exports = function (fu, assert) {
  var a = [1, null, 2, null, null, 3, 4]
  var b = [1, 2, 3, 4]
  return {
    compact: function () {
      assert.deepEqual(fu.compact(a), b)
      assert.deepEqual(fu.compact(b), b)
    },
    empty: function () {
      assert.deepEqual(fu.compact([]), [])
    }
  }
}
