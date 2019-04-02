function sum(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  }
  throw new TypeError('arguments are not numbers');  
}

function isNumber(n) {
  if (typeof n === 'number') return true;
  if (typeof n === 'object' && typeof n.valueOf() === 'number') return true;
  return false;
}

module.exports = sum;
