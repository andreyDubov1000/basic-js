import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr){
    if (!(arr instanceof Array)) throw new Error('\'arr\' parameter must be an instance of the Array!')
    let result = []
    let next =false
    for(let i=0; i<arr.length; ++i){
      switch (arr[i]){
        case '--discard-next':
          ++i
          next=false
          continue
        case '--discard-prev':
          if (next) result.pop()
          next=true
          continue
        case '--double-next':
          if (i===arr.length-1) continue
          result.push(arr[i+1])
          ++i
          break
        case  '--double-prev':
          if (next) result.push(arr[i-1])
          next=true
          continue
      }
      result.push(arr[i])
      next=true
    }
    return result
  }
