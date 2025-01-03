const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;
  let additionStr = '';

  if (!separator) {
    separator = '+'
  }

  if (!additionSeparator) {
    additionSeparator = '|'
  }

  if (!repeatTimes) {
    repeatTimes = 1;
  }

  if (!additionRepeatTimes) {
    additionRepeatTimes = 1;
  }

  if (addition || addition === false || addition === null) {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionStr += addition;
      if (i !== additionRepeatTimes - 1) {
        additionStr += additionSeparator;
      }
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    result += str + additionStr;

    if (i !== repeatTimes - 1) {
      result += separator;
    }

  }

  return result;
}


module.exports = {
  repeater
};
