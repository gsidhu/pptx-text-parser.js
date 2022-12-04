const fs = require('fs');
const JSZip = require("jszip");
const sax = require('sax');

async function extractTextFromPPTX(filepath) {
  let pptxFileBuffer = ''
  try {
    pptxFileBuffer = fs.readFileSync(filepath);
  } catch (err) {
    console.log(err);
    return ''
  }
  let slideXMLArray = [];
  getSlideXML(pptxFileBuffer, slideXMLArray).then((slideXMLArray) => {
    parseSlideXML(slideXMLArray).then((text) => {
      // console.log(text)
      return text
    });
  });
}

// use JSZip to extract XML data from the pptx file buffer
async function getSlideXML(fileBuffer, slideXMLArray) {
  const zip = await new JSZip().loadAsync(fileBuffer);
  // filter out the slide XML files
  const slideFiles = Object.keys(zip.files).filter((filename) =>
    filename.match(/slide\d+\.xml$/)
  );
  for (let i = 0; i < slideFiles.length; i++) {
    const slideFile = slideFiles[i];
    const slideXML = await zip.files[slideFile].async("string");
    slideXMLArray.push(slideXML);
  }
  return slideXMLArray;
}

// use sax to parse the XML data
async function parseSlideXML(slideXMLArray) {
  let text = "";
  for (let i = 0; i < slideXMLArray.length; i++) {
    text += "\n--------" + "\nSlide " + i + "\n";
    const slideXML = slideXMLArray[i];
    const parser = sax.parser(true);
    parser.onopentag = (node) => {
      if (node.name === "a:p") {
        text += "\n";
      }
    };
    parser.ontext = function (t) {
      if (t.trim()) {
        text += t;
      }
    };
    parser.write(slideXML.toString()).close();
  }
  return text
}

module.exports = extractTextFromPPTX;