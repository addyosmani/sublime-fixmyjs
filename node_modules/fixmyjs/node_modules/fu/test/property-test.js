module.exports = function (fu, assert) {
  return {
    property: function () {
      var a = { a: 1 }
      var p = fu.property('a')
      assert.isFunction(p)
      assert.equal(p(a), 1)
    },

    pluck: function () {
      var a = [{ name: 'Dog', age: 2 }, { name: 'Cat', age: 4 }]
      var pluck = fu.map(fu.property('name'))

      assert.isFunction(pluck)
      assert.deepEqual(pluck(a), ['Dog', 'Cat'])
    },

    empty: function () {
      assert.isUndefined(fu.property(4)({}))
      assert.isUndefined(fu.property('hello')({}))
      assert.isUndefined(fu.property(null)({ a: 1 }))
      assert.isUndefined(fu.property([])({ a: 1 }))
      assert.isUndefined(fu.property({})({ a: 1 }))
    }
  }
}
