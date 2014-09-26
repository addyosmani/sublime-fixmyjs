module.exports = function (fu, assert) {
  var yes = [true, false, true]
  var no = [false, false, false]

  return {
    or: function () {
      assert.isTrue(fu.or(yes))
      assert.isFalse(fu.or(no))
    },
    empty: function () {
      assert.isFalse(fu.or([]))
    }
  }
}
