module.exports = function (fu, assert) {
  var a = [1, 2, 3]
  var b = [1, 1, 2, 4, 3, 9]

  var deq = assert.deepEqual

  var selfSq = function (x) { return [x, x * x] }

  return {
    concatMap: function () {
      deq(fu.concatMap(selfSq, a), b)
      deq(fu.concatMap(fu.id, a), a)
    },

    empty: function () {
      assert.deepEqual(fu.concatMap(fu.id, []), [])
    },

    unary: function () {
      var cm = fu.concatMap(selfSq)
      assert.isFunction(cm)
      deq(cm(a), b)
    }
  }
}
