const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const rev = domains.map((item) => {
    return item.split('.').reverse()   
  })
  
  let obj = {}
  const allDomainsArr = [];
  for (let i = 0; i < rev.length; i++) {
    for (let g = 0; g < rev[i].length; g++) {
      const currDomain = rev[i].slice(0, g+1)
      allDomainsArr.push(currDomain)
    }
  }

  for (let i = 0; i < allDomainsArr.length; i++) {
    const prop = '.'+allDomainsArr[i].join('.');
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = obj[prop] + 1;
    } else {
      obj[prop] = 1;
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
