# webpToPDF
Script to consolidate images in webp format into a single PDF file.

## Requirement
- node
- sharp
- fs
- pdfkit

## usage
0. git clone & npm install
```
$ git clone https://github.com/tomikyblog/webpToPDF.git
$ cd webpToPDF
$ npm install
```

1. Create directories "in" and "out".
2. Put the image in the "in" folder in the webp format that you want to make into a PDF.
3. Running `node index.js` will create an image in jpeg format in "out/jpeg".
4. Running `node index2.js` will create a single PDF file "output.pdf" in the "out" directory by aggregating the images in "out/jpeg".
5. Running `node index3.js` will remove "in" and "out/jpeg" images.

I really wanted to write it in a smart way with synchronous processing, but it was beyond my ability to do so, so I decided to execute it at the prompt after each process was completed.
