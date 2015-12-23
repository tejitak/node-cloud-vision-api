'use strict'
const fs = require('fs'),
  request = require('request')

class Image {

  constructor(options) {
    options = options || {}
    this._path = options.path
    this._url = options.url
  }

  load() {
    return new Promise((resolve, reject) => {
      if (this._path) {
        resolve(fs.readFileSync(this._path).toString('base64'))
      } else if (this._url) {
        this._loadRemote()
          .then(resolve)
          .catch((e) => {
            reject(e)
          })
      } else {
        reject()
      }
    })
  }

  _loadRemote() {
    return new Promise((resolve, reject) => {
      const url = unescape(this._url),
        bl = new BufferList()
      request({
        uri: url,
        responseBodyStream: bl
      }, (err, response, body) => {
        if (!err && response.statusCode == 200) {
          var content = new Buffer(bl.toString(), 'binary').toString('base64')
          console.log(content)
          resolve(content)
        } else {
          reject(err)
        }
      }) 
    })
  }

  build() {
    return new Promise((resolve, reject) => {
      this.load().then((cotent) => {
        resolve({content: content})
      })
    })
  }
}

module.exports = Image