export const encodeRLE = (hexVal: string) => {
  let res = "";
  let currentStreak = 1;

  for (let i = 1; i <= hexVal.length; i++) {
    if (hexVal[i] === hexVal[i - 1] && currentStreak + 1 <= 9) currentStreak++;
    else {
      res += `${currentStreak}${hexVal[i - 1]}`;
      currentStreak = 1;
    }
  }

  return res;
};
