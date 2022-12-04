const extractTextFromPPTX = require('./parser.js');

async function parse(filepath, _mode="text") {
  const text = await extractTextFromPPTX(filepath, _mode=_mode);
  return text;
}

// test
// let sampleFilepath = "./sample.pptx";
// parse(sampleFilepath, _mode="text").then((result) => {
//   console.log(result);
// });