export const addNumbers: (numbers: string) => number = (numbers: string) => {
  // return 0 if passed an empty string
  if (numbers.trim() == "") {
    return 0;
  }

  let customDelimeter = ",";

  if (numbers.startsWith("//")) {
    customDelimeter = numbers[2];
    // to remove the //[custom delimeter]\n from the string
    numbers = numbers.slice(4);
  }

  //   const delimeter = new RegExp(/[,\n]+/);
  const delimeter = new RegExp("[" + customDelimeter + "\n]+");

  const individualNumbers = numbers.split(delimeter);

  const sum = individualNumbers.reduce((prev, curr) => {
    return Number(prev) + Number(curr);
  }, 0);

  return sum;
};
