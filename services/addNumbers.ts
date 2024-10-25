export const addNumbers: (numbers: string) => number = (numbers: string) => {
  // return 0 if passed an empty string
  if (numbers.trim() == "") {
    return 0;
  }

  const delimeter = new RegExp(/[,\n]+/);

  const individualNumbers = numbers.split(delimeter);

  const sum = individualNumbers.reduce((prev, curr) => {
    return Number(prev) + Number(curr);
  }, 0);

  return sum;
};
