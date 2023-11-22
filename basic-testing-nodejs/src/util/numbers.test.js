import { describe, it, expect } from "vitest";
import {cleanNumbers, transformToNumber} from "./numbers";

describe('transformToNumber()', () => {
    it('should return a number', () => {
        const num = '1';
        const expectedResult = +num
        const result = transformToNumber(num);
        expect(result).toBe(expectedResult)
    });
    
    it('should transform a string number to a type of number', () => {
        const input = '1';
        // const expectedResult = +input
        const result = transformToNumber(input);
        // expect(typeof expectedResult).toEqual(typeof result)
        expect(result).toBe(1)
        expect(result).toBeTypeOf('number')
    });
    
    it('should return NaN for non-transformable values', () => {
        const input = 'abc';
        const expectedResult = transformToNumber(input);
        expect(expectedResult).toBeNaN();
    });
    
    
    it('should return false if argument is not transformed into a number', () => {
        const argument = 'abc';
        const result = () => {
            return transformToNumber(argument) === +argument;
        }
        expect(result()).toBe(false)
    });
})

describe('cleanNumbers()', () => {
    it('should return an array of numbers if provided an array of string numbers', () => {
        const inputStringArray = ['1', '2', '3']
        const result = cleanNumbers(inputStringArray)
        expect(result).toEqual([1, 2, 3])
        expect(result[0]).toBeTypeOf('number')
    })

    it('should throw error if invalid values provided', () => {
        const numberValues = ['', '1', '2']
        const result = () => {
            cleanNumbers(numberValues)
        }
        expect(result).toThrowError();
    })
})
