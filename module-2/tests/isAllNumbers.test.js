const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('isAllNumbers', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return true if all elements is a number', function () {
    expect(validator.isAllNumbers([4, 8, 15, 16, 23, 42, 0])).to.be.equal(true);
  });

  it('should return true if array with negativ numbers', function () {
    expect(validator.isAllNumbers([-4, -8, -15, -16, -23, -42])).to.be.equal(true);
  });

  it('should return true if provided array with irrational numbers', function () {
    expect(validator.isAllNumbers([Math.sqrt(2), 1/2, Math.PI])).to.be.equal(true);
  });

  it('should return true if provided array with fractionl numbers', function () {
    expect(validator.isAllNumbers([4.8, 15.16, 23.42])).to.be.equal(true);
  });

  // not sure that this should be true but as is
  it('should return true if profided emty array', function () {
    expect(validator.isAllNumbers([])).to.be.equal(true);
  });

  it('should return false if not all elements is a number', function () {
    expect(validator.isAllNumbers([8, true, 15, 'Sixteen', null, 42])).to.be.equal(false);
  });

  it('should return false if profided array with nested array', function () {
    expect(validator.isAllNumbers([4, 8, [15, 16, 23], 42])).to.be.equal(false);
  });

  it('should throw an error when provided string instead of array', function () {
    expect(() => {
      validator.isAllNumbers('lolKek');
    }).to.throw(`[lolKek] is not an array`);
  });

  it('should throw an error when provided int instead of array', function () {
    expect(() => {
      validator.isAllNumbers(1234567890);
    }).to.throw(`[1234567890] is not an array`);
  });

  it('should throw an error when provided undefined instead of array', function () {
    expect(() => {
      validator.isAllNumbers();
    }).to.throw(`[undefined] is not an array`);
  });

  it('should throw an error when provided null instead of array', function () {
    expect(() => {
      validator.isAllNumbers(null);
    }).to.throw(`[null] is not an array`);
  });

  it('should throw an error when provided boolean instead of array', function () {
    expect(() => {
      validator.isAllNumbers(true);
    }).to.throw(`[true] is not an array`);
  });
});
