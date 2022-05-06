const sharp = require("sharp");
const fs = require("fs")
const files = fs.readdirSync('./in')

function webpToJpeg () {
  return new Promise((resolve, reject) => {
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      if (file.indexOf('webp') != -1) {
        const inpath = `./in/${file}`
        const outpath = `./out/jpeg/${file.split('.')[0]}.jpeg`
        sharp(inpath).toFile(outpath)
      }
    }
    resolve()
  })
}

webpToJpeg()
