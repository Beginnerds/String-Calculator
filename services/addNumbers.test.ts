import { describe } from "vitest";

import { addNumbers } from "./addNumbers";

describe("Tests for addNumber function", () => {
  it("should return 0 when passed an empty string", () => {
    expect(addNumbers("")).toBe(0);
  });
  it("should return the sum of numbers for both single digit and double digit numbers passed as a string separated by a ','", () => {
    {
      const testString1 = "1";
      const testString2 = "1,2,3,4,5";

      expect(addNumbers(testString1)).toBe(1);
      expect(addNumbers(testString2)).toBe(15);
    }
  });

  it("should return the sum when delimeted by a new line char (\n) along with a comma", () => {
    const testString1 = "1\n2,3";
    const testString2 = "1\n2,3,4\n5";

    expect(addNumbers(testString1)).toBe(6);
    expect(addNumbers(testString2)).toBe(15);
  });
  it("should return the sum when delimeted by a new line char and with a custom delimeter passed like this : //[customdelimeter]", () => {
    const testString1 = "//;\n1;2";
    const testString2 = "//(\n1(2(4(9";
    const testString3 = "//k\n1k2k4k9k5";
    const testString4 = "//***\n1***2***3";
    const testString5 = "//***\n//!!\n1***2!!3";

    expect(addNumbers(testString1)).toBe(3);
    expect(addNumbers(testString2)).toBe(16);
    expect(addNumbers(testString3)).toBe(21);
    expect(addNumbers(testString4)).toBe(6);
    expect(addNumbers(testString5)).toBe(6);
  });

  it("should throw an exception when passed a negative number and the message should include all negative numbers", () => {
    const testString1 = "1,2,-4,5,-3,5,6";
    const testString2 = "-1,2,-5,5,-3,5,6";

    expect(() => {
      addNumbers(testString1);
    }).toThrow("-4,-3");
    expect(() => {
      addNumbers(testString2);
    }).toThrow("-5,-3");
  });
});
