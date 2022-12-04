const extractTextFromPPTX = require('./parser.js');

async function parse(filepath) {
  let text = ''
  text = extractTextFromPPTX(filepath).then((text) => {
    console.log(text);
    return text;
  });
}

// test
let sampleFilepath = "./sample.pptx";
parse(sampleFilepath);