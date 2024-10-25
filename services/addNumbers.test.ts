import { describe } from "vitest";

import { addNumbers } from "./addNumbers";

describe("Tests for addNumber function", () => {
  it("should return 0 when passed an empty string", () => {
    expect(addNumbers("")).toBe(0);
  });
});
