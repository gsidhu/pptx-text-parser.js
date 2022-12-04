# PPTX Text Parser
This module is a simple text parser for pptx files. It will extract all the text from the slides and return it as a string.

## Installation
```bash
npm install https://github.com/gsidhu/pptx-text-parser.js
```

### Dependencies
This module requires the following dependencies:
- [JSZip](https://github.com/Stuk/jszip/)
- [sax](https://github.com/isaacs/sax-js)

## Usage
```javascript
const pptxTextParser = require('pptx-text-parser');

pptxTextParser.parse('path/to/pptx/file.pptx')
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.log(err);
  });
```

## License
[MIT © Gurjot Sidhu](https://thatgurjot.mit-license.org/)