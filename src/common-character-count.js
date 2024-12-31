const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let smalerStr = s1.length < s2.length ? s1 : s2;
  let biggerStr = s1 === smalerStr ? s2 : s1;
  let result = 0;

  for (let i = 0; i < smalerStr.length; i++) {
    for (let g = 0; g < biggerStr.length; g++) {
      if (smalerStr[i] === biggerStr[g]) {
        result++;
        biggerStr = biggerStr.slice(0, biggerStr.indexOf(biggerStr[g])) + biggerStr.slice(biggerStr.indexOf(biggerStr[g]) + 1);
        break;
      }
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
