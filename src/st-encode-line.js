import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str){
  const strAr=str.split('')
  let result =''
  for(let i=0;i<strAr.length;i++){
    let count=1
    while(strAr[i]===strAr[i+1]) {
      count++
      i++
    }
    result+=String(((count>1)?count:'')+strAr[i])
  }
  return result
}