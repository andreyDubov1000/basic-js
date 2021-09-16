import { NotImplementedError } from '../extensions/index.js';

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
export default
  function repeater(str, options){
    let strResult=''
    let mainStr = String(str)
    let n = options.hasOwnProperty('repeatTimes')?options.repeatTimes:1
    let sep = options.hasOwnProperty('separator')?String(options.separator):'+'
    let add = options.hasOwnProperty('addition')?String(options.addition):''
    let addSep = options.hasOwnProperty('additionSeparator')?String(options.additionSeparator):'|'
    let m = options.hasOwnProperty('additionRepeatTimes')?options.additionRepeatTimes:1
    for (let i=0; i<n;i++){
      strResult+=mainStr
      for (let j=0;j<m;j++) {
        strResult+=(j<m-1)?add+addSep:add
      }
      strResult+=(i<n-1)?sep:''
    }

    return strResult

  }
