import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function  getCommonCharacterCount(str1,str2){
  const str1arr= str1.toUpperCase().split('')
  const str2arr= str2.toUpperCase().split('')
  return str1arr.reduce((acc,item)=>{
    for(let i=0;i<str2arr.length;i++){
      if (item===str2arr[i]) {
        acc++
        str2arr.splice(i,1)
        i--
        break
      }
    }
    return acc
  },0)
}