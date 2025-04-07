export const hasOtherDigits = (str: string): boolean =>
  str.split("").every((part) => part === "" || /[^01]/.test(part));
