module.exports = function (fu, assert) {
  var a = [1, 2, 3]
  var deq = assert.deepEqual

  function isnum(x) { return typeof x == 'number' }
  function lt3(x) { return x < 3 }
  function is2(x) { return x == 2 }

  return {
    dropWhile: function () {
      deq(fu.dropWhile(isnum, a), [])
      deq(fu.dropWhile(lt3, a), [3])
      deq(fu.dropWhile(is2, a), a)
    },

    'function that does not return bool': function () {
      deq(fu.dropWhile(fu.id, a), a)
    },

    empty: function () {
      assert.deepEqual(fu.dropWhile(fu.id, []), [])
    },

    unary: function () {
      var drop = fu.dropWhile(isnum)
      assert.isFunction(drop)
      deq(drop(a), [])
    }
  }
}
