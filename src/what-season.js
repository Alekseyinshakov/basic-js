const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

console.log(getSeason(new Date(2025, 1, 22, 23, 45, 11, 500)));

function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  let month;
  try {
    if (date.hasOwnProperty('toString')) {
      throw new Error("Invalid date!");
    }
    month = date.getMonth()
    month++;
    if (month >= 3 && month <= 5) {
      return 'spring';
    }
    if (month >= 6 && month <= 8) {
      return 'summer';
    }
    if (month >= 9 && month <= 11) {
      return 'autumn';
    }
    return 'winter';
  } catch (error) {
    throw Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
