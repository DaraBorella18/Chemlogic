export const parseForNumericValue = (value: number, fixed = 4) => {
  const result = Math.trunc(value * Math.pow(10, fixed)) / Math.pow(10, fixed);

  return isNaN(result) ? 0 : result;
}