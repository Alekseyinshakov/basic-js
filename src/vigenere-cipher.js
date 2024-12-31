const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(arg) {
    this.isDirect = true;
    if (arg === false) {
      this.isDirect = false;
    }
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  encrypt(toEncode, keyword) {
    if (!toEncode || !keyword) {
      throw new Error('Incorrect arguments!');
    }
    let encode = '';
    let keyWordCounter = 0
    let inputStr = toEncode.toUpperCase();
    let keywordStr = keyword.toUpperCase();
    for (let i = 0; i < inputStr.length; i++) {
      if (!this.alphabet.includes(inputStr[i])) {
        encode += inputStr[i];
      } else {
        let indexOfNewChar = this.alphabet.indexOf(keywordStr[keyWordCounter])

        let addedChar = '';
        let shift = this.alphabet.indexOf(inputStr[i]) + indexOfNewChar;
        console.log(shift);
        
        if (shift < this.alphabet.length) {
          encode += this.alphabet[shift];
        } else {
          encode += this.alphabet[shift - this.alphabet.length];
        }


        if (keyWordCounter === keywordStr.length - 1) {
          keyWordCounter = 0;
        } else {
          keyWordCounter++;
        }
        
      }
    }
    return encode;
  }
  decrypt(toDecode, keyword) {
    if (!toDecode || !keyword) {
      throw new Error('Incorrect arguments!');
    }
  }
}

let newObj = new VigenereCipheringMachine()
newObj.encrypt('attack at dawn!', 'alphonse')


module.exports = {
  VigenereCipheringMachine
};
