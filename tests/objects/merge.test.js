const merge = require('../../objects/merge');

test('merges two objects together', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: 3
      }
    };

    const obj2 = {
      b: {
        c: 4,
        e: 5
      },
      f: 6
    };

    const result = merge(obj1, obj2);

    expect(result).toEqual({
      a: 1,
      b: {
        c: 4,
        d: 3,
        e: 5
      },
      f: 6
    });
  });

  test('merges multiple objects together', () => {
    const obj1 = {
      a: 1,
      b: {
        c: 2,
        d: 3
      }
    };

    const obj2 = {
      b: {
        c: 4,
        e: 5
      },
      f: 6
    };

    const obj3 = {
      g: 7
    };

    const result = merge(obj1, obj2, obj3);

    expect(result).toEqual({
      a: 1,
      b: {
        c: 4,
        d: 3,
        e: 5
      },
      f: 6,
      g: 7
    });
  });

