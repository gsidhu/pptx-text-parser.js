const extractTextFromPPTX = require('./parser.js');

async function parse(filepath) {
  const text = await extractTextFromPPTX(filepath);
  return text;
}

// test
let sampleFilepath = "./sample.pptx";

parse(sampleFilepath).then((text) => {
  console.log(text);
});