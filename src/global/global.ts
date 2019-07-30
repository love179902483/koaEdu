import fs from "fs";

import path from "path";

export interface RS256Keys {
  privateKey: Buffer;
  publicKey: Buffer;
}

export function GetKeys(): RS256Keys {
  console.info("读入RS256 KEYS文件中。。。。。。。。。。。。");
  const Keys: RS256Keys = {
    privateKey: fs.readFileSync(
      path.join(process.cwd(), "/src/inventory/private.key")
    ),
    publicKey: fs.readFileSync(
      path.join(process.cwd(), "/src/inventory/private.key")
    )
  };
  return Keys;
}

export namespace edu_global {
  export const RS256Keys: RS256Keys = GetKeys();
}

export interface edu_ReturnNormal<S> {
  flag: boolean;
  message: string;
  data: S;
}
export interface edu_Return<S, R> {
  flag: boolean;
  message: string;
  data: S | R;
}

export declare interface edu_ReturnCkeditorImage {
    uploaded: number;
    fileName: string;
    url: string;
  }
  