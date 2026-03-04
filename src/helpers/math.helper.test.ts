import { describe, expect, test } from 'vitest'
import { add, divide, multiply, subtract } from './math.helper'

describe('add', () => {
    test('should add two positives numbers', () => {

        // ! 1. Arrange
        const a = 1;
        const b = 2;


        // ! 2. Act
        const result = add(a, b);


        // ! 3. Assert
        expect(result).toBe(a + b);
    });
    test('should add two negative numbers', () => {

        // ! 1. Arrange
        const a = -1;
        const b = -2;


        // ! 2. Act
        const result = add(a, b);


        // ! 3. Assert
        expect(result).toBe(a + b);
    });
});


describe('substract', () => {
    test('should substract two positives numbers', () => {

        // ! 1. Arrange
        const a = 3;
        const b = 2;


        // ! 2. Act
        const result = subtract(a, b);


        // ! 3. Assert
        expect(result).toBe(a - b);
    });
    test('should substract two negative numbers', () => {

        // ! 1. Arrange
        const a = -4;
        const b = -7;


        // ! 2. Act
        const result = subtract(a, b);


        // ! 3. Assert
        expect(result).toBe(a - b);
    });
});


describe('multiply', () => {
    test('should multiply two positives numbers', () => {

        // ! 1. Arrange
        const a = 3;
        const b = 2;


        // ! 2. Act
        const result = multiply(a, b);


        // ! 3. Assert
        expect(result).toBe(a * b);
    });
    test('should multiply by 0 and obtain 0', () => {

        // ! 1. Arrange
        const a = 3;
        const b = 0;


        // ! 2. Act
        const result = multiply(a, b);


        // ! 3. Assert
        expect(result).toBe(0);
    });
});

describe('divide', () => {
    test('should divide two positives numbers', () => {

        // ! 1. Arrange
        const a = 3;
        const b = 2;


        // ! 2. Act
        const result = divide(a, b);


        // ! 3. Assert
        expect(result).toBe(a / b);
    });
});

