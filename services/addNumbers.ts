export const addNumbers: (numbers: string) => number = (numbers: string) => {
  // return 0 if passed an empty string
  if (numbers.trim() == "") {
    return 0;
  }

  let customDelimeter = ",";

  if (numbers.startsWith("//")) {
    const customDelimeterArr = numbers.match(/\/\/(.*?)\n/g);
    customDelimeter = customDelimeterArr?.join()!;
  }

  const delimeter = new RegExp("[" + customDelimeter + "\n]+");

  const individualNumbers = numbers.split(delimeter);

  const negativeNumbers: string[] = [];

  individualNumbers.forEach((item) => {
    if (Number(item) < 0) {
      negativeNumbers.push(item);
    }
  });

  // there are some negative numbers in the string, we should throw
  if (negativeNumbers.length > 0) {
    throw new Error(negativeNumbers.join(","));
  }

  const sum = individualNumbers.reduce((prev, curr) => {
    return Number(prev) + Number(curr);
  }, 0);

  return sum;
};
