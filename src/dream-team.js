const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // members = [1111, 'Lily', 'Oscar', true, null, ''];

  if (!Array.isArray(members)) {
    return false;
  }

  const onlyStrings = members.filter(item => typeof item === 'string' && item.length > 0)

  if (onlyStrings.length === 0) {
    return false;
  }

  const upperCaseAndNoSpaces = onlyStrings.map((item) => {
    return item.trim().toUpperCase();
  })

  upperCaseAndNoSpaces.sort();

  return upperCaseAndNoSpaces.reduce((acc, curr) => {
    return acc = acc + curr[0];
  }, '');
}

module.exports = {
  createDreamTeam
};
