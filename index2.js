
const fs = require("fs")
const PDFDocument = require('pdfkit');
const doc = new PDFDocument({ size: 'A4'})

function jpegToPDF () {
  const outjpg = fs.readdirSync('./out/jpeg/')
  for (let index = 0; index < outjpg.length; index++) {
    const element = outjpg[index];
    if (element.indexOf('jpeg') != -1) {
      const elempath = `./out/jpeg/${element}`
      doc.image(elempath, 0, 0, { fit: [600, 850], align: 'center', valign: 'center' })
      doc.addPage();
      doc.save()
    }
  }
}
jpegToPDF()

doc.pipe(fs.createWriteStream('./out/output.pdf'))
doc.end()
