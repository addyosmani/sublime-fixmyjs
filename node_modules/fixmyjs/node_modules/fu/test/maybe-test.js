module.exports = function (fu, assert) {
  return {
    maybe: function () {
      var fnull = fu.maybe(function () {
        throw new Error('wtf')
      })
      var ftrue = fu.maybe(function () { return true })

      assert.isTrue(ftrue())
      assert.isNull(fnull())
    }
  }
}
