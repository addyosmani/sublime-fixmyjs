module.exports = function (fu, assert) {
  return {
    flip: function () {
      assert.equal(fu.flip(fu.id, 1, 2), 2)
    },

    unary: function () {
      var flip1 = fu.flip(fu.id)
      assert.isFunction(flip1)
      assert.isFunction(flip1(1))
      assert.equal(flip1(1)(2), 2)
    },

    binary: function () {
      var flip2 = fu.flip(fu.id, 1)
      assert.isFunction(flip2)
      assert.equal(flip2(2), 2)
    }
  }
}
