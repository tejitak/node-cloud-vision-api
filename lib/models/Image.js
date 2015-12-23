'use strict'
const fs = require('fs'),
  request = require('request'),
  __ = require('underscore')

class Image {

  constructor(path) {
    const options = __.isObject(path) ? path : {
      path: path
    }
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
      request({
        url: this._url,
        encoding: null
      }, (err, response, body) => {
        if (!err && response.statusCode == 200) {
          resolve(new Buffer(body).toString('base64'))
        } else {
          reject(err)
        }
      }) 
    })
  }

  build() {
    return new Promise((resolve, reject) => {
      this.load().then((cotent) => {
        console.log(content)
        resolve({content: content})
      })
    })
  }
}

module.exports = Image