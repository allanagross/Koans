var _; // globals

/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
 * "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
 * that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
 * It's the tie to go along with jQuery's tux."
 */
describe('About Higher Order Functions', function() {

  it('should use filter to return array items that meet a criteria', function () {
    const numbers = [1, 2, 3];
    const odd = _.filter(numbers, x => x % 2 !== 0);

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it('should use "map" to transform each element', function() {
    const numbers = [1, 2, 3];
    const numbersPlus1 = _.map(numbers, x => x + 1);

  });

  it('should use "reduce" to update the same result on each iteration', function () {
    const numbers = [1, 2, 3];
    const reduction = _.reduce(numbers, (memo, x) => {
      // note: memo is the result from last call, and x is the current number
      return memo + x;
    }, 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it('should use "forEach" for simple iteration', function() {
    const numbers = [1, 2, 3];
    let msg = '';
    const isEven = (item) => {
      msg += (item % 2) === 0;
    };

    _.forEach(numbers, isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it('should use "all" to test whether all items pass condition', function() {
    const onlyEven = [2, 4, 6];
    const mixedBag = [2, 4, 5, 6];

    const isEven = x => x % 2 === 0;

    expect(_.all(onlyEven, isEven)).toBe(FILL_ME_IN);
    expect(_.all(mixedBag, isEven)).toBe(FILL_ME_IN);
  });

  it('should use "any" to test if any items passes condition' , function() {
    const onlyEven = [2, 4, 6];
    const mixedBag = [2, 4, 5, 6];

    const isEven = x => x % 2 === 0;

    expect(_.any(onlyEven, isEven)).toBe(FILL_ME_IN);
    expect(_.any(mixedBag, isEven)).toBe(FILL_ME_IN);
  });

  it('should use "range" to generate an array', function() {
    expect(_.range(3)).toEqual(FILL_ME_IN);
    expect(_.range(1, 4)).toEqual(FILL_ME_IN);
    expect(_.range(0, -4, -1)).toEqual(FILL_ME_IN);
  });

  it('should use "flatten" to make nested arrays easy to work with', function() {
    const nested = [[1, 2], [3, 4]];
    expect(_.flatten(nested)).toEqual(FILL_ME_IN);
  });

  it('should use "chain() ... .value()" to use multiple higher order functions', function() {
    const array = [[0, 1], 2];
    const result = _.chain(array)
      .flatten()
      .map(x => x + 1)
      .reduce((sum, x) => sum + x)
      .value();

    expect(result).toEqual(FILL_ME_IN);
  });

});