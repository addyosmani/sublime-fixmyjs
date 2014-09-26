module.exports = function (fu, assert) {
  return {
    comp: function () {
      var istrue = fu.comp(fu.and, fu.curry(fu.map, Boolean))
      assert.isFunction(istrue)
      assert.isTrue(istrue([1, 2, 3]))
      assert.isFalse(istrue([0, null]))
    },

    unary: function () {
      var comp1 = fu.comp(fu.and)
      assert.isFunction(comp1)
    }
  }
}
