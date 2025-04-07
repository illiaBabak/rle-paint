export const decodeRLE = (rle: string): string => {
  let res = "";

  const pairs = rle.match(/../g);

  pairs?.forEach((pair) => {
    res += pair[1].repeat(Number(pair[0]));
  });

  return res;
};
