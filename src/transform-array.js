const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && arr[i + 1]) {
      i++;
    } else if (arr[i] === '--discard-prev' && resultArr.length > 0 && arr[i - 2] !== '--discard-next') {
      resultArr.pop();
    } else if (arr[i] === '--double-next' && arr[i + 1]) {
      resultArr.push(arr[i + 1]);
      resultArr.push(arr[i + 1]);
      i++;
    } else if (arr[i] === '--double-prev' && resultArr.length > 0 && arr[i - 2] !== '--discard-next') {
      resultArr.push(resultArr[resultArr.length - 1]);
    } else if (arr[i] === '--double-prev' && resultArr.length === 0) {

    } else if (arr[i] === '--discard-prev' && resultArr.length === 0) {

    } else if (arr[i] === '--double-next' && !arr[i + 1]) {

    } else if (arr[i] === '--discard-next' && !arr[i + 1]) {

    } else if (arr[i] === '--double-prev' && arr[i - 2] === '--discard-next') {

    } else if (arr[i] === '--discard-prev' && arr[i - 2] === '--discard-next') {

    } else {
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
}

module.exports = {
  transform
};
