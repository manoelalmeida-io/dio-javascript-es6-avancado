const expect = require('chai').expect;

const Math = require('../src/math.js');
const AsyncMath = require('../src/async-math.js');

describe('Math class', function() {
  it('Sum two numbers', function() {
    const math = new Math();
    expect(math.sum(5, 5)).to.equal(10);
  });

  it('Multiply two numbers', function() {
    const math = new Math();
    expect(math.multiply(5, 5)).to.equal(25);
  });
});

describe('AsyncMath class', function() {
  it('Sum two numbers', function(done) {
    const math = new AsyncMath();

    math.sum(5, 5, (value) => {
      expect(value).to.equal(10);
      done();
    })
  });
});