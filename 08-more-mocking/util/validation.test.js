import { describe, it, expect } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty", () => {
  it("should throw an error if an empty string provided", () => {
    const testInput = "  ";
    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
  });

  it("should throw an error with the provided error message, if input is empty", () => {
    const testInput = "";
    const testErrorMessage = "test error message"
    const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

    expect(validationFn).toThrow(testErrorMessage);
  });

  it("should not throw an error if input is NOT empty", () => {
    const testInput = "asdf";
    const testErrorMessage = "test error message"
    const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

    expect(validationFn).not.toThrow();
  });
});
