import { NotImplementedError } from '../extensions/index.js';

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
export default class VigenereCipheringMachine {
  constructor (s = true){
    this.square = []
    this.alf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("")
    for (let i = 0; i < 26; i++) {
      this.square[i] = this.alf.slice(i).concat(this.alf.slice(0, i));
    }
    const crypt= (text,key)=> {
      if (!(text&&key)){throw new Error('Incorrect arguments!')}
      let s = "";
      const regexp = /[A-Z]/
      const textUp = text.toUpperCase()
      let keyUp = key.toUpperCase()
      while (textUp.length>keyUp.length) {keyUp+=keyUp}
      for (let i = 0,j=0; i < text.length; i++,j++) {
        s+= (regexp.test(textUp[i])) ?
            this.square[this.alf.indexOf(textUp[i])][this.alf.indexOf(keyUp[j])]:
            ( j--,textUp[i])
      }
      return s;
    }
    const exCrypt= (text,key)=> {
      if (!(text&&key)){throw new Error('Incorrect arguments!')}
      let s = "";
      const regexp = /[A-Z]/
      const textUp = text.toUpperCase()
      let keyUp = key.toUpperCase()
      while (textUp.length>keyUp.length) {keyUp+=keyUp}
      for (let i = 0,j=0; i < text.length; i++,j++) {
        s+= (regexp.test(textUp[i])) ?
            this.alf[this.square[this.alf.indexOf(keyUp[j])].indexOf(textUp[i])]:
            ( j--,textUp[i])
      }
      return s;
    }
    switch (s) {
      case true:
        this.encrypt=crypt
        this.decrypt=exCrypt
        break
      case false:
        this.encrypt=(text,key)=>crypt(text,key).split('').reverse().join('')
        this.decrypt=(text,key)=>exCrypt(text,key).split('').reverse().join('')
        break
      default:
        throw new Error('Incorrect Class key')
    }

  }
}