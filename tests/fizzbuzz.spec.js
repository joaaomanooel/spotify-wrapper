import { expect } from 'chai';
import { it, describe } from 'mocha';

import FizzBuzz from '../src/fizzbuzz';

describe('FizzBuzz', () => {
  it('Sould return "Fizz" when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('Sould return "Buzz" when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('Sould return "FizzBuzz" when multiple of 3 and 5', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('Sould return the number when is not multiple of 3 or 5', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('Sould return 0 when 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
