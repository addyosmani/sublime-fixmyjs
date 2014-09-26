module.exports = function (fu, assert, err) {
  var eq = assert.equal

  function sum(a, b) { return a + b }

  return {
    foldl: function () {
      var a = [1, 2, 3]
      eq(fu.foldl(sum, a, 0), 6)
    },

    empty: function () {
      var a = []
      assert.throws(function () {
        fu.foldl(sum, a)
      }, err('empty list'))

      eq(fu.foldl(sum, a, 0), 0)
    },

    binary: function () {
      eq(fu.foldl(sum, [1]), 1)
    },

    unary: function () {
      var fold = fu.foldl(sum)
      assert.isFunction(fold)
      eq(fold([1], 1), 2)
    }
  }
}
