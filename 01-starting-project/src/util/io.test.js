import { it, expect, describe, vi } from "vitest";
import { promises as fs } from 'fs';

import writeData from "./io";

vi.mock('fs');
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    }
})

describe('writeData', () => {
    it('should execute the writeFile method', () => {
        const testData = "Test data"
        const testFileName = 'test.txt'
        // return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
        
        writeData(testData, testFileName)
        // expect(fs.writeFile).toHaveBeenCalled();
        expect(fs.writeFile).toHaveBeenCalledWith(testFileName,testData)
    })

    it('should return a promise that resolves to no value if called correctly', () => {
        const testData = "Test data"
        const testFileName = 'test.txt'
        return expect(writeData(testData, testFileName)).resolves.toBeUndefined();
    })
})