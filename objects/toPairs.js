const toPairs = (obj) => {
    const result = [];
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        result.push([key, obj[key]]);
      }
    }
  
    return result;
  }

  module.exports = toPairs