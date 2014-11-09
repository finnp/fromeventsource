var PassThrough = require('stream').PassThrough

module.exports = function (source) {
  
  var pass = new PassThrough({objectMode: true})

  source.onmessage = function (e) {
    var message = JSON.parse(e.data)
    pass.write(message)
  }

  source.onerror = function (e) {
    pass.end()
    source.close() // when the connection is closed
  }
  
  return pass
}