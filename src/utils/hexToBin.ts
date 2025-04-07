export const hexToBin = (hex: string): string => {
  const bin = parseInt(hex, 16).toString(2);

  const expectedLength = Math.ceil((hex.length * 4) / 8) * 8;

  return bin.padStart(expectedLength, "0");
};
