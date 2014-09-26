module.exports = function (fu, assert, err) {
  var deq = assert.deepEqual

  var a = { a: 1, b: 2 }
  var b = { c: 3, d: 4 }
  var c = { e: [5, 6, 7] }
  var d = { f: { g: 8 } }
  var e = { h: [{ i: 9 }] }
  var f = { j: { k: [10], l: 11 } }

  return {
    merge: function () {
      deq(fu.merge(a), {
        a: 1, b: 2
      })
      deq(fu.merge(a, b), {
        a: 1, b: 2, c: 3, d: 4
      })
      deq(fu.merge(a, b, c), {
        a: 1, b: 2, c: 3, d: 4, e: [5, 6, 7]
      })
      deq(fu.merge(a, b, c, d), {
        a: 1, b: 2, c: 3, d: 4, e: [5, 6, 7],
        f: { g: 8 }
      })
      deq(fu.merge(a, b, c, d, e, f), {
        a: 1, b: 2, c: 3, d: 4, e: [5, 6, 7],
        f: { g: 8 }, h: [{ i: 9 }],
        j: { k: [10], l: 11 }
      })
      deq(fu.merge(c, f), {
        e: [5, 6, 7], j: { k: [10], l: 11 }
      })
    },

    'no side effects': function () {
      var x = fu.merge({}, c)
      x.e.push(8)
      assert.equal(x.e.length, 4)
      assert.equal(c.e.length, 3)

      var y = fu.merge({}, d)
      y.f.g = 3
      assert.equal(y.f.g, 3)
      assert.equal(d.f.g, 8)
    },

    'merge everything': function () {
      var x = []
      x.wtf = 3

      assert.equal(x.wtf, 3)
      assert.equal(x.length, 0)

      x.push(1)

      assert.equal(x.length, 1)
      assert.equal(x[0], 1)

      var y = { x: x }
      var z = fu.merge(y, {})

      deq(z, { x: x })
      assert.equal(z.x.wtf, 3)

      x.wtf = 4
      assert.equal(z.x.wtf, 3)
    },

    empty: function () {
      deq(fu.merge({}), {})
    }
  }
}
