const { expect } = require('chai');
const { describe, beforeEach, it } = require('mocha');
const NumbersValidator = require('../app/numbers-validator');

describe('isInteger', function () {
  let validator;

  beforeEach(function () {
    validator = new NumbersValidator();
  });

  afterEach(function () {
    validator = null;
  });

  it('should return true if provided number is an integer', function () {
    expect(validator.isInteger(777)).to.be.equal(true);
  });

  it('should return true if number is fraction', function () {
    expect(validator.isInteger(1 / 2)).to.be.equal(false);
  });

  it('should return true if provided array with irrational numbers', function () {
    expect(validator.isInteger(Math.PI)).to.be.equal(false);
  });

  it('should return true if provided 0 ', function () {
    expect(validator.isInteger(0)).to.be.equal(true);
  });

  it('should return true if provided negative ', function () {
    expect(validator.isInteger(-12)).to.be.equal(true);
  });

  it('should return true if provided floating ', function () {
    expect(validator.isInteger(12.12)).to.be.equal(false);
  });

  it('should throw an error when provided array of integer', function () {
    expect(() => {
      validator.isInteger([4, 8, 15, 16, 23, 42]);
    }).to.throw('[4,8,15,16,23,42] is not a number');
  });

  it('should throw an error when provided array with not only integer', function () {
    expect(() => {
      validator.isInteger([4, 8, 15, 16, '"twenty three"', 42]);
    }).to.throw('[4,8,15,16,"twenty three",42] is not a number');
  });

  it('should throw an error when provided string', function () {
    expect(() => {
      validator.isInteger('"9007199.254740991"');
    }).to.throw('["9007199.254740991"] is not a number');
  });

  it('should throw an error when provided a null', function () {
    expect(() => {
      validator.isInteger(null);
    }).to.throw('[null] is not a number');
  });

  it('should throw an error when provided with boolean', function () {
    expect(() => {
      validator.isInteger(true);
    }).to.throw('[true] is not a number');
  });

  it('should throw an errow when provided with an object', function () {
    expect(() => {
      validator.isInteger({ jhone: 'cena' });
    }).to.throw('[[object Object]] is not a number');
  });

  it('should throw an errow when provided with an undefined', function () {
    expect(() => {
      validator.isInteger();
    }).to.throw('[undefined] is not a number');
  });
});
