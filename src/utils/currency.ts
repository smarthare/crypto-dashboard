const currencyFormat = {
  style: "currency",
  currency: "USD",
};

const fixedFormat = (num: number, format: any) =>
  new Intl.NumberFormat("en-US", format).format(num);

const dynamicFormat = (num: number, digitCount: number) =>
  `$${Math.ceil(num * Math.pow(10, digitCount)) / Math.pow(10, digitCount)}`;

const calcLeadingZero = (num: number) =>
  (num.toString().split(".")[1].match(/^0+/) || [""])[0].length;

const addLeadingZero = (num: string) =>
  `$${num.substring(0, 2) + "00000" + num.substring(2, num.length)}`;

export const usdForamt = (num: number, flag = false) => {
  if (isNaN(num) || num === 0) {
    return num;
  } else if (num >= 1) {
    return flag
      ? fixedFormat(num, currencyFormat)
      : fixedFormat(num, { ...currencyFormat, minimumFractionDigits: 0 });
  } else if (num < 1e-6) {
    const indices = parseInt(num.toString().split("e-")[1]);
    return addLeadingZero((num * Math.pow(10, indices - 5)).toString());
  } else {
    return dynamicFormat(num, 6 + calcLeadingZero(num));
  }
};
