const sharp = require("sharp");
const fs = require("fs")
const files = fs.readdirSync('./in')
const allow_exts = new Array('jpg', 'jpeg', 'png', 'webp')

function webpToJpeg () {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < files.length; index++) {
      const file = files[index]
      const position = file.lastIndexOf('.')
      const ext = file.slice(position + 1)
      ext.toLowerCase()

      if (allow_exts.indexOf(ext) !== -1) {
        const inpath = `./in/${file}`
        const outpath = `./out/jpeg/${file.split('.')[0]}.jpeg`
        sharp(inpath).toFile(outpath)
      }
    }
    resolve()
  })
}

webpToJpeg()
