module.exports = function (fu, assert) {
  var a = [0, 1]
  return {
    application: function () {
      assert.equal(fu.apply(function (a, b) { return b })(a), 1)
    }
  }
}
