export const binToHex = (binNum: string): string =>
  parseInt(binNum, 2).toString(16).toUpperCase();
