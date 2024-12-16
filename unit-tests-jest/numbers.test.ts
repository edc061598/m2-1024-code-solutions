import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns even numbers', () => {
    const numbers = [1, 4, 7, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });

  it('returns an empty array when all numbers are odd', () => {
    const numbers = [1, 3, 5, 7];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });

  it('returns an empty array with no numbers', () => {
    const input: number[] = [];
    const output: number[] = [];
    const result = evenNumbers(input);
    expect(result).toEqual(output);
  });
});

describe('toDollars', () => {
  it('returns a dollar amount', () => {
    const dollarAmount: number = 10;
    const result = toDollars(dollarAmount);
    expect(result).toBe(`$${dollarAmount}.00`);
  });

  describe('divideBy', () => {
    it('returns the division number', () => {
      const numbers: number[] = [10, 20, 30, 40, 50];
      const divisor: number = 2;
      const result = divideBy(numbers, divisor);
      expect(result).toEqual([5, 10, 15, 20, 25]);
    });
  });
  it('negative numbers', () => {
    const numbers = [-10, -20, -30];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([-5, -10, -15]);
  });

  describe('multiplyBy', () => {
    it('returns the multiplication of two numbers', () => {
      const obj = { a: '2', b: 3, c: '5' };
      const multiplier = 2;
      const result = multiplyBy(obj, multiplier);
      expect(result).toEqual({ a: 4, b: 6, c: 10 });
    });
  });
});
