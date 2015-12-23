'use strict'
const vision = require('./index')

// init with auth
vision.init({auth: 'YOUR_SERVER_KEY'})

// construct parameters
const path = '/Users/tejitak/dev/temp/test1.jpg'
const req = new vision.Request({
  image: new vision.Image({path: path}),
  features: [new vision.Feature({type: 'FACE_DETECTION'})]
})

vision.annotate(req).then((res) => {
  console.log(JSON.stringify(res))
}, (e) => {
  console.log('Error: ', e)
})