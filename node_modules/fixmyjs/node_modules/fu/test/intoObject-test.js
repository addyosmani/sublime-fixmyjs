module.exports = function (fu, assert, err) {
  var deq = assert.deepEqual

  return {
    intoObject: function () {
      var a = [['a', 1], ['b', 2]]
      deq(fu.intoObject(a), { a: 1, b: 2 })
    },

    empty: function () {
      var a = []
      deq(fu.intoObject(a), {})
    },

    err: function () {
      var a = ['a', 1, 'b', 2]

      assert.throws(function () {
        fu.intoObject(a)
      }, err('expected key value pair'))
    }
  }
}
