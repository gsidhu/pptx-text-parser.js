declare function parse(filepath: string, _mode?: string): Promise<string>;
export = parse;
declare module "pptx-parser" {
  export function extractTextFromPPTX(filepath: string, _mode: string): Promise<string>;
}