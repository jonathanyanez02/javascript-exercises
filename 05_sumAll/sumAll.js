

function sumAll(x, y) {
    let sum = 0;
  
    try {
      if (x < 0 || y < 0) {
        throw Error('ERROR');
      }
  
      if (x >= y) {
        for (y; y <= x; y++) {
          sum += y;
        }
      } else {
        for (x; x <= y; x++) {
          sum += x;
        }
      }
    } catch (error) {
      console.error(error.message);
    }
  
    return sum;
  }

// Do not edit below this line
module.exports = sumAll;
