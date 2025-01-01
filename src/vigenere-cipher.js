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
    console.log(this.isDirect);
    
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

        let shift = this.alphabet.indexOf(inputStr[i]) + indexOfNewChar;
        
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
    
    if (this.isDirect === false) {
      return encode.split('').reverse().join('');
    }
    return encode;
  }
  decrypt(toDecode, keyword) {
    if (!toDecode || !keyword) {
      throw new Error('Incorrect arguments!');
    }
    let decode = '';
    let keyWordCounter = 0;
    let inputStr = toDecode.toUpperCase();
    let keywordStr = keyword.toUpperCase();

    for (let i = 0; i < inputStr.length; i++) {
      if (!this.alphabet.includes(inputStr[i])) {
        decode += inputStr[i];
      } else {
        let indexOfNewChar = this.alphabet.indexOf(keywordStr[keyWordCounter])

        let shift = this.alphabet.indexOf(inputStr[i]) - indexOfNewChar;
        
        if (shift >= 0) {
          decode += this.alphabet[shift];
        } else {
          decode += this.alphabet[this.alphabet.length - shift * -1];
        }


        if (keyWordCounter === keywordStr.length - 1) {
          keyWordCounter = 0;
        } else {
          keyWordCounter++;
        }
        
      }
    }
    
    if (this.isDirect === false) {
      return decode.split('').reverse().join('');
    }
    return decode;
  }
}

let newObj = new VigenereCipheringMachine(false)
console.log(newObj.decrypt('hello!', 'aaaa'));




module.exports = {
  VigenereCipheringMachine
};
