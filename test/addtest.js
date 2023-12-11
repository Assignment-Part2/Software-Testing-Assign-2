// addtest.js
const assert = require('chai').assert;

const add = require('../src/add.js');  // Update the path to your add file


describe('add function', () => {
  it('should add two numbers correctly', () => {
    const result = add(2, 3);
    assert.equal(result, 5);
  });

  it('should handle negative numbers', () => {
    const result = add(-2, 3);
    assert.equal(result, 1);
  });

  it('should handle decimal numbers', () => {
    const result = add(2.5, 3.5);
    assert.equal(result, 6);
  });

  // Add more test cases as needed

  // You may also want to test edge cases and boundary conditions
});

