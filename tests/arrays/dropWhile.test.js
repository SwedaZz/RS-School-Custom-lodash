const dropWhile = require('../../arrays/dropWhile');

  test('drops elements from the beginning of the array while the predicate is true', () => {
    const array = [1, 2, 3, 4, 5];

    const result = dropWhile(array, (n) => n < 3);

    expect(result).toEqual([3, 4, 5]);
  });

  test('returns an empty array if all elements satisfy the predicate', () => {
    const array = [1, 2, 3, 4, 5];

    const result = dropWhile(array, (n) => n < 10);

    expect(result).toEqual([]);
  });

  test('returns the original array if no elements satisfy the predicate', () => {
    const array = [1, 2, 3, 4, 5];

    const result = dropWhile(array, (n) => n > 10);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

