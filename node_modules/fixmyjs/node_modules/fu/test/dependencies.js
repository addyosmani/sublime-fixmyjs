module.exports = {
  fu: require('../'),
  err: function (x) {
    return function (e) {
      return x === e.message
    }
  }
}
