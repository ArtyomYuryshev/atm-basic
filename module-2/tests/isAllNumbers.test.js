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

  it('should throw an error when provided not a array', function () {
    expect(() => {
      validator.isAllNumbers('lolKek');
    }).to.throw(`[lolKek] is not an array`);
  });

  it('should return true if all elements is a number', function () {
    expect(validator.isAllNumbers([4, 8, 15, 16, 23, 42])).to.be.equal(true);
  });
});
