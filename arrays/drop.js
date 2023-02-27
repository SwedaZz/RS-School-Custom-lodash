const myLength = require('../methods/length');
const mySplicedArray = require('../methods/splice-array');

const drop = (array, num) => {
  const length = myLength(array);
  if (num === undefined) {
    return mySplicedArray(array, 0, 1);
  }
  if (num > length) {
    return [];
  }
  if (num === 0) {
    return array;
  }
  return mySplicedArray(array, 0, num);
};

module.exports = drop;