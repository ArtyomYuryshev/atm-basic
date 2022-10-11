const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('getEvenNumbersFromArray', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return an array of even numbers when provided with proper data', function () {
    const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([2, 12, 32, 10]);
  });

  it('should return an array of even numbers when provided only even numbers', function () {
    const arrayOfRandomNumbers = [2, 4, 6, 8];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([2, 4, 6, 8]);
  });

  it('should return an array of even numbers when provided only odd numbers', function () {
    const arrayOfRandomNumbers = [3, 5, 7];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([]);
  });

  it('should return an array of even numbers when provided only one number', function () {
    const arrayOfRandomNumbers = [222222222];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([222222222]);
  });

  it('should throw an error when provided not an integer array', function () {
    expect(() => {
      validator.getEvenNumbersFromArray([4, 8, 15, 16, '"twenty three"', 42]);
    }).to.throw('[4,8,15,16,"twenty three",42] is not an array of "Numbers"');
  });

  it('should throw an error when provided not an array', function () {
    expect(() => {
      validator.getEvenNumbersFromArray(4);
    }).to.throw('[4] is not an array of "Numbers"');
  });

  it('should throw an error when provided a string', function () {
    expect(() => {
      validator.getEvenNumbersFromArray('"4"');
    }).to.throw('["4"] is not an array of "Numbers"');
  });

  it('should throw an error when provided a null', function () {
    expect(() => {
      validator.getEvenNumbersFromArray(null);
    }).to.throw('[null] is not an array of "Numbers"');
  });

  it('should throw an error when provided a boolean', function () {
    expect(() => {
      validator.getEvenNumbersFromArray(true);
    }).to.throw('[true] is not an array of "Numbers"');
  });

  it('should throw an error when provided an object', function () {
    expect(() => {
      validator.getEvenNumbersFromArray({ jhon: 'cena' });
    }).to.throw('[[object Object]] is not an array of "Numbers"');
  });

  it('should throw an errow when provided with an undefined', function () {
    expect(() => {
      validator.getEvenNumbersFromArray();
    }).to.throw('[undefined] is not an array of "Numbers"');
  });
});
