'use strict'

class Feature {

  // FACE_DETECTION
  // LANDMARK_DETECTION
  // LOGO_DETECTION
  // LABEL_DETECTION
  // TEXT_DETECTION
  // SAFE_SEARCH_DETECTION

  constructor(options) {
    options = options || {}
    this._type = options.type
    this._maxResults = options.maxResults || 10
  }

  build() {
    return {
      type: this._type,
      maxResults: this._maxResults
    }
  }
}

module.exports = Feature