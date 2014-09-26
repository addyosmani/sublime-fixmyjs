module.exports = function (fu, assert) {
  return {
    seq: function () {
      var istrue = fu.seq(fu.curry(fu.map, Boolean), fu.and)
      assert.isFunction(istrue)
      assert.isTrue(istrue([1, 2, 3]))
      assert.isFalse(istrue([0, null]))
    },

    unary: function () {
      var seq1 = fu.seq(fu.and)
      assert.isFunction(seq1)
    }
  }
}
