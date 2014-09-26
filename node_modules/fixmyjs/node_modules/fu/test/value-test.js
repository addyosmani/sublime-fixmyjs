var arr = [1, 2, 3, 4, 5]
var head = 1
var last = 5
var init = [1, 2, 3, 4]
var tail = [2, 3, 4, 5]

module.exports = {

  head: function (fu, assert) {
    assert.equal(fu.head(arr), head)
  },

  last: function (fu, assert) {
    assert.equal(fu.last(arr), last)
  },

  tail: function (fu, assert) {
    assert.deepEqual(fu.tail(arr), tail)
  },

  init: function (fu, assert) {
    assert.deepEqual(fu.init(arr), init)
  },

  id: function (fu, assert) {
    assert.equal(fu.id(4), 4)
    assert.equal(fu.id(null), null)
  },

  nil: function (fu, assert) {
    assert.isTrue(fu.nil([null, null, null]))
    assert.isTrue(fu.nil([null, undefined, undefined]))
    assert.isFalse(fu.nil([null, null, false]))
    assert.isTrue(fu.nil([]))
  },

  unary: function (fu, assert) {
    assert.deepEqual(
      ['1', '2', '3'].map(fu.unary(parseInt)),
      [1, 2, 3]
    )
  }
}
