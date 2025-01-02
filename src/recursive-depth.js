const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.result = 0;
  }
  calculateDepth(arr, d = 0) {
    if (d === 0) {
      this.result = 0;
    }
    d++;
    if (d > this.result) {
      this.result = d;
    }   
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element)) {
        this.calculateDepth(element, d)
      }
    }
    return this.result;
  }
}

const calc = new DepthCalculator();
console.log(calc.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]));



module.exports = {
  DepthCalculator
};
