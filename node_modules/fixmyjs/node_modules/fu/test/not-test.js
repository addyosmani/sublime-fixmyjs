module.exports = function (fu, assert) {
  return {
    not: function () {
      assert.isTrue(fu.not(false))
      assert.isFalse(fu.not(true))
    },

    empty: function () {
      assert.isTrue(fu.not())
    }
  }
}
