const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('isNumberEven', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should throw an error when provided not a number in array', function () {
    expect(() => {
      validator.isInteger([4, 8, 15, 16, '"twenty three"', 42]);
    }).to.throw('[4,8,15,16,"twenty three",42] is not a number');
  });

  it('should return true if provided number is an integer ', function () {
    expect(validator.isInteger(777)).to.be.equal(true);
  });
});
