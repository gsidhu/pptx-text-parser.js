# PPTX Text Parser
<!-- Generate a description of this module -->
This module is a simple text parser for pptx files. It will extract all the text from the slides and return it as a string.

## Installation
<!-- Installation instructions -->
```bash
npm install pptx-text-parser
```

## Usage
<!-- Usage instructions -->
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