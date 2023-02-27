const dropWhile = (array, predicate) => {
    let i = 0;
  
    while (i < array.length && predicate(array[i], i, array)) {
      i++;
    }
  
    return array.slice(i);

};

module.exports = dropWhile;