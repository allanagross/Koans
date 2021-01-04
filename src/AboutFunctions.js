describe('About Functions', function() {

  it('should declare functions', function() {
    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(FILL_ME_IN);
  });

  it('should know internal variables override outer variables', function () {
    const message = 'Outer';

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      const message = 'Inner';

      return message;
    }

    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
  });

  it('should have lexical scoping', function() {
    const variable = 'top-level';

    function parentFunction() {
      const variable = 'local';

      function childFunction() {
        return variable;
      }
      return childFunction();
    }

    expect(parentFunction()).toBe(FILL_ME_IN);
  });

  it('should use lexical scoping to synthesise functions', function() {
    function makeIncreaseByFunction(increaseByAmount) {
      return (numberToIncrease) => {
        return numberToIncrease + increaseByAmount;
      };
    }

    const increaseBy3 = makeIncreaseByFunction(3);
    const increaseBy5 = makeIncreaseByFunction(5);

    expect(increaseBy3(10) + increaseBy5(10)).toBe(FILL_ME_IN);
  });

  it('should allow extra function arguments', function() {
    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg('first', 'second', 'third')).toBe(FILL_ME_IN);

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg('only give first arg')).toBe(FILL_ME_IN);

    function returnAllArgs() {
      const argsArray = [];

      for (let i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(',');
    }

    expect(returnAllArgs('first', 'second', 'third')).toBe(FILL_ME_IN);
  });

  it('should pass functions as values', function() {
    const appendRules = name => `${name} rules!`;
    const appendDoubleRules = name => `${name} totally rules!`;

    const praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise('John')).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise('Mary')).toBe(FILL_ME_IN);

  });

  it('should use function body as a string', function() {
    const add = new Function('a', 'b', 'return a + b;');
    expect(add(1, 2)).toBe(FILL_ME_IN);

    const multiply = function (a, b) {
      // An internal comment
      return a * b;
    };
    expect(multiply.toString()).toBe(FILL_ME_IN);
  });
});
