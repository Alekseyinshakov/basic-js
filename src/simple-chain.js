const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    let elem;
    if (value === undefined) {
      elem = `(  )`
    } else {
      elem = `( ${value} )`;
    }

    if (this.chain) {
      this.chain.push(elem)
    } else {
      this.chain = [elem];
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.chain.length || position < 1) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
