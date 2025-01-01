const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let arr = n.split('-')
  const hexComponents = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f']
  if (arr.length === 6 &&
      isTwoDigit(arr) &&
      isHex(arr)
  ) {
    return true;
  }
  return false;
  function isTwoDigit(arr) {
    console.log(arr);
    
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element.length !== 2) {
        return false;
      }
    }
    return true;
  }
  function isHex(arr) {
    for (let i = 0; i < arr.length; i++) {
      
      for (let g = 0; g < arr[i].length; g++) {
        const element = arr[i][g];
        if (!hexComponents.includes(element.toLowerCase())) {
          return false;
        }
      }
    }
    return true
  }
}

console.log(isMAC48Address("00-1B-6A-84-45-E6"));



module.exports = {
  isMAC48Address
};
