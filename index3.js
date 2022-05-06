const fs = require('fs')
const path = require('path')

const dirIn = './in'
const dirOutJpeg = './out/jpeg' 

fs.readdir(dirIn, (err, files) => {
  if (err) throw err

  for (const file of files) {
    fs.unlink(path.join(dirIn, file), err => {
      if (err) throw err
    })
  }
})

fs.readdir(dirOutJpeg, (err, files) => {
  if (err) throw err

  for (const file of files) {
    fs.unlink(path.join(dirOutJpeg, file), err => {
      if (err) throw err
    })
  }
})
