export const hasOtherDigits = (n: number): boolean =>
  /[^01]/.test(n.toString());
