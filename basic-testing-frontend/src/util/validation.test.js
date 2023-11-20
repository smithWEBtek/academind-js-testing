import { it, expect, describe } from "vitest";

import { validateStringNotEmpty, validateNumber } from "./validation";

describe("validateStringNotEmpty", () => {
  it("should throw error if input string is empty", () => {
    const input = "";
    const result = () => {
      validateStringNotEmpty(input);
    };
    expect(result).toThrow("Invalid input - must not be empty.");
  });

  it("should return undefined if input is non-empty", () => {
    const input = "a";
    const result = () => {
      validateStringNotEmpty(input);
    };
    expect(result).not.toThrowError();
  });

  it("should return trimmed string if input has leading or trailing spaces", () => {
    const input1 = "abc ";
    const input2 = " abc";
    const result1 = () => {
      validateStringNotEmpty(input1);
    };
    const result2 = () => {
      validateStringNotEmpty(input2);
    };
    expect(result1).not.toThrowError();
    expect(result2).not.toThrowError();
  });

  it("should throw TypeError if input is of type number", () => {
    const input = 123;
    const result = () => {
      validateStringNotEmpty(input);
    };
    expect(result).toThrowError("value.trim is not a function");
  });
});

describe('validateNumber', () => {

    it("should throw error if input is NaN", () => {
        const input = 'abc';
        const result = () => {
            validateNumber(input);
        };
        expect(result).toThrowError('Invalid number input');
    });

    it("should be undefined if input is of type number", () => {
        const input = 42;
        const result = () => {
            validateNumber(input);
        };
        expect(result()).toBe(undefined);
    });
});
