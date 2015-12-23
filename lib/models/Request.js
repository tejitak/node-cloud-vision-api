'use strict'
const __ = require('underscore')

class Request {

  constructor(options) {
    options = options || {}
    this._image = options.image
    this._features = options.features || []
  }

  addFeature(feature) {
    this._features.push(feature)
  }

  build() {
    return new Promise((resolve, reject) => {
      this._image.load().then((content) => {
        resolve({
          image: content,
          features: __.map(this._features, (f) => f.build())
        })
      }).catch((e) => {
        reject(e)
      })
    })
  }
}

module.exports = Request