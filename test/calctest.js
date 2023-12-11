// test-calc.js
import { expect } from 'chai';
// calctest.js
// calctest.js
import { add, mul } from '../src/calc.js';

// rest of the code


// rest of the code remains the same
 // Assuming your calc.js file is in the same directory

describe('calc.js', () => {
  describe('add function', () => {
    it('should correctly add two numbers', () => {
      const result = add(2, 3);
      expect(result).to.equal(5);
    });

    it('should correctly add negative numbers', () => {
      const result = add(-2, -3);
      expect(result).to.equal(-5);
    });

    // Add more test cases as needed
  });

  describe('mul function', () => {
    it('should correctly multiply two numbers', () => {
      const result = mul(2, 3);
      expect(result).to.equal(6);
    });

    it('should correctly multiply a number by zero', () => {
      const result = mul(5, 0);
      expect(result).to.equal(0);
    });

    // Add more test cases as needed
  });
});
