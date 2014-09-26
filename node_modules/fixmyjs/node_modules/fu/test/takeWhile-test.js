module.exports = function (fu, assert) {
  var a = [1, 2, 3]
  var deq = assert.deepEqual

  function isnum(x) { return typeof x == 'number' }
  function lt3(x) { return x < 3 }
  function is2(x) { return x == 2 }

  return {
    takeWhile: function () {
      deq(fu.takeWhile(isnum, a), a)
      deq(fu.takeWhile(lt3, a), [1, 2])
      deq(fu.takeWhile(is2, a), [])
    },

    'function that does not return bool': function () {
      deq(fu.takeWhile(fu.id, a), [])
    },

    'take too many': function () {
      deq(fu.takeWhile(function () {
        return true
      }, a), a)
    },

    empty: function () {
      assert.deepEqual(fu.takeWhile(fu.id, []), [])
    },

    unary: function () {
      var take = fu.takeWhile(isnum)
      assert.isFunction(take)
      deq(take(a), a)
    }
  }
}
