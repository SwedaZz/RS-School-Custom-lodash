const toPairs = require('../../objects/toPairs');


  test('converts an object to an array of key-value pairs', () => {
    const obj = { a: 1, b: 2, c: 3 };

    const result = toPairs(obj);

    expect(result).toEqual([ ['a', 1], ['b', 2], ['c', 3] ]);
  });

  test('ignores inherited properties', () => {
    const obj = Object.create({ a: 1 });
    obj.b = 2;

    const result = toPairs(obj);

    expect(result).toEqual([ ['b', 2] ]);
  });

