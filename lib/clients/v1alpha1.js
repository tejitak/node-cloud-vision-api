'use strict'
const __ = require('underscore'),
  createAPIRequest = require('googleapis/lib/apirequest')

const API_ANNOTATE = 'https://vision.googleapis.com/v1alpha1/images:annotate'

class Client {

  constructor(options) {
    this._options = options || {}
  }

  annotate(requests) {
    return new Promise((resolve, reject) => {
      this._buildRequests(requests).then((params) => {
        var parameters = {
          options: {
            url: API_ANNOTATE,
            method: 'POST'
          },
          params: {
            requests: params
          },
          requiredParams: [],
          pathParams: [],
          context: this
        }
        createAPIRequest(parameters, (err, response) => {
          if (err) {
            console.log(err)
            reject(err)
          } else {
            console.log(response)
            resolve(response)
          }
        })
      })
    })
  }

  _buildRequests(requests) {
    return Promise.all(__.map(requests, (req) => req.build()))
  }
}

module.exports = Client