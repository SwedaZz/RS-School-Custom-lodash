const zip = (...arrays) => {
    const maxLength = Math.max(...arrays.map((array) => array.length));
  
    return Array.from({ length: maxLength }, (_, index) => {
      return arrays.map((array) => array[index]);
    });
  }
  
  module.exports = zip;