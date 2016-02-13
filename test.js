var expect = require('chai').expect;
var arange = require('./index.js');

describe('test for array range', function () {
  it('It should return array with elements 0 to 4', function () {
    expect(arange(0, 5, 1)).to.eql([0, 1, 2, 3, 4]);
  });

  it('It should return array with elements 0 to 4 with step size 2', function () {
    expect(arange(0, 5, 2)).to.eql([0, 2, 4]);
  });

  it('It should return array with elements 1 to 5 with step size 2', function () {
    expect(arange(1, 7, 2)).to.eql([1, 3, 5]);
  });

  it('It should return array with elements 0 to 4 with no end arg', function () {
    expect(arange(5)).to.eql([0, 1, 2, 3, 4]);
  });

  it('It should return array with one element 0 with arg 1', function () {
    expect(arange(1)).to.eql([0]);
  });

  it('It should return empty with start 0', function () {
    expect(arange(0)).to.eql([]);
  });
});
