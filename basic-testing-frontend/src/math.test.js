import { it, expect } from 'vitest';
import { add } from './math';

it('sums the array of numbers passed', () => {
    // Arrange
    const numbers = [1, 2]
    
    // Act
    const result = add(numbers)
    
    // Assert
    const expectedResult = numbers.reduce((prevValue, curValue) => prevValue + curValue, 0)
    expect(result).toBe(expectedResult)
});

it('should yield NaN if at least one invalid number is provided', (() => {
    const numbers = ['invalid', 1]
    const result = add(numbers)
    expect(result).toBeNaN();
}));

it('should yield correct sum if array of numerical string values provided', ()=>{
    const numbers = ['1', '2']
    const result = add(numbers)
    const expectedResult = numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0)
    expect(result).toBe(expectedResult);
})