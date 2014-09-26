module.exports = function (fu, assert, err) {
  var eq = assert.equal
  var a = [1, 2, 3]
  var t = assert.throws

  return {
    max: function () {
      eq(fu.max(a), 3)
    },

    min: function () {
      eq(fu.min(a), 1)
    },

    empty: function () {
      var e = err('empty list')
      t(fu.curry(fu.max, []), e)
      t(fu.curry(fu.min, []), e)
    }
  }
}
