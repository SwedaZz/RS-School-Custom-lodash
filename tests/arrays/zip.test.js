const zip = require('../../arrays/zip');

  test('combines multiple arrays into an array of tuples', () => {
    const array1 = [1, 2, 3];
    const array2 = ['a', 'b', 'c'];
    const array3 = [true, false, true];

    const result = zip(array1, array2, array3);

    expect(result).toEqual([[1, 'a', true], [2, 'b', false], [3, 'c', true]]);
  });

  test('returns an empty array if no input arrays are provided', () => {
    const result = zip();

    expect(result).toEqual([]);
  });

  test('returns an array of tuples where missing values are replaced with undefined', () => {
    const array1 = [1, 2, 3];
    const array2 = ['a', 'b'];

    const result = zip(array1, array2);

    expect(result).toEqual([[1, 'a'], [2, 'b'], [3, undefined]]);
  });
