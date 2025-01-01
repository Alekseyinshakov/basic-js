const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultArr = [];
  for (let i = 0; i < matrix.length; i++) {
     resultArr.push([])
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let g = 0; g < matrix[i].length; g++) {
      
      
      let ahtungMinen = 0;
      if (matrix[i][g + 1] && (matrix[i][g + 1] === true)) {
        ahtungMinen++;
      }
      if (matrix[i][g - 1] && (matrix[i][g - 1] === true)) {
        ahtungMinen++;
      }
      if (matrix[i + 1] && matrix[i + 1][g] && (matrix[i + 1][g] === true)) {
        ahtungMinen++;
      }
      if (matrix[i - 1] && matrix[i - 1][g] && (matrix[i - 1][g] === true)) {
        ahtungMinen++;
      }
      if (matrix[i - 1] && matrix[i - 1][g + 1] && (matrix[i - 1][g + 1] === true)) {
        ahtungMinen++;
      }
      if (matrix[i + 1] && matrix[i + 1][g + 1] && (matrix[i + 1][g + 1] === true)) {
        ahtungMinen++;
      }
      if (matrix[i + 1] && matrix[i + 1][g - 1] && (matrix[i + 1][g - 1] === true)) {
        ahtungMinen++;
      }
      if (matrix[i - 1] && matrix[i - 1][g - 1] && (matrix[i - 1][g - 1] === true)) {
        ahtungMinen++;
      }
      resultArr[i][g] = ahtungMinen;
    }
  }
  return resultArr;
}

module.exports = {
  minesweeper
};
