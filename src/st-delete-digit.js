import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(num){
  let numArr= String(num).split('')
  let flag =true
  for (let i=0;i<numArr.length-1;i++){
    if (numArr[i]<numArr[i+1]){
      numArr.splice(i,1)
      flag = false
      break
    }
  }
  if (flag){ numArr.pop()}
  return +numArr.join('')
}

