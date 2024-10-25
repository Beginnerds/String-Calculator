import { describe, it, expect } from "vitest";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("something truthy and falsy", () => {
  it("renders headline", () => {
    render(<App />);

    screen.debug();

    // check if App components renders headline
  });
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});
