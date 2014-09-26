module.exports = function (fu, assert) {
  var yes = [true, true, true]
  var no = [true, false, true]

  return {
    and: function () {
      assert.isTrue(fu.and(yes))
      assert.isFalse(fu.and(no))
    },
    empty: function () {
      assert.isTrue(fu.and([]))
    }
  }
}
