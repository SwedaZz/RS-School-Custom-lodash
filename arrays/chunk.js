const mySpliceRomovedItems = require('../methods/splice-removed-items');
const myPush = require('../methods/push');
const mySplicedArray = require('../methods/splice-array');
const myLength = require('../methods/length');

const chunk = (array, size) => {
  const results = [];

  while (myLength(array)) {
    const removed = mySpliceRomovedItems(array, 0, size);
    myPush(results, removed);

    array = mySplicedArray(array, 0, size);
  }
  return results;
};

module.exports = chunk;