import { expect } from 'chai';
import { it, describe } from 'mocha';
import { sum, sub, mult, div } from '../src/calc';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('should exist the method sum', () => {
      expect(sum).to.be.a('function');
    });

    it('should exist the method sub', () => {
      expect(sub).to.be.a('function');
    });

    it('should exist the method mult', () => {
      expect(mult).to.be.a('function');
    });

    it('should exist the method div', () => {
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('Should return 4 when sun(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('Should return 4 when sub(6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('sould return -4 when sub(6, 10)', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
  });

  describe('Mult', () => {
    it('Should return 4 when mult(2,2)', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('Should return 4 when div(8,2)', () => {
      expect(div(8, 2)).to.be.equal(4);
    });

    it('Should return "Can not divide by zero!" when div(4, 0)', () => {
      expect(div(4, 0)).to.be.equal('Can not divide by zero!');
    });
  });
});
