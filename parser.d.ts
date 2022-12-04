// add type declarations for parser.js
declare module "pptx-parser" {
  export function extractTextFromPPTX(filepath: string, _mode: string): Promise<string>;
}