module.exports = function (fu, assert) {
  var deq = assert.deepEqual
  return {
    range: function () {
      deq(fu.range(0), [])
      deq(fu.range(3), [1, 2, 3])
      deq(fu.range(0, 3), [0, 1, 2, 3])
      deq(fu.range(-1, 3), [-1, 0, 1, 2, 3])
      deq(fu.range(-1), [])
      deq(fu.range(5, 0), [])
      deq(fu.range(3, 3), [3])
    }
  }
}
