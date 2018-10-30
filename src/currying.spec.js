import { curry } from './currying';

describe('currying function test', () => {
  it('should transform a function into a curried function', () => {
    const sum = (a, b, c) => (a + b + c);
    const curriedSum = curry(sum);
    const result = curriedSum(1)(2)(3);

    expect(result).toBe(6);
  });

  it('should return a value for a set of values received', () => {
    //mock function to be curried
    const mockSum = jest.fn((a, b, x, y, z) => (a + b + x + y + z))

    //curry mock function
    const curriedFunction = curry(mockSum);

    //and test with some params
    const result = curriedFunction(1)(2)(3)(4)(5);

    //check result
    expect(result).toBe(15);
    //check values passed to mock function
    expect(mockSum).toBeCalledWith(1, 2, 3, 4, 5)
    // check if passed values will be pushed in same order
    expect(mockSum.mock.calls[0][0]).toBe(1);
    expect(mockSum.mock.calls[0][1]).toBe(2);
    expect(mockSum.mock.calls[0][2]).toBe(3);
    expect(mockSum.mock.calls[0][3]).toBe(4);
    expect(mockSum.mock.calls[0][4]).toBe(5);
  });
})