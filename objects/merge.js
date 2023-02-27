const merge = (...objects) => {
    const result = {};
  
    for (const obj of objects) {
      if (obj && typeof obj === 'object') {
        for (const [key, value] of Object.entries(obj)) {
          if (value && typeof value === 'object') {
            result[key] = merge(result[key], value);
          } else {
            result[key] = value;
          }
        }
      }
    }

    return result;
  }
  
  module.exports = merge;