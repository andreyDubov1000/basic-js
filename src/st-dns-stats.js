import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(array){
  const box=array.map((item)=>{
      let h= item.split('.').map((dns)=>'.'+dns).reverse()
      for(let i=0;i<h.length-1;i++){
        h[i+1]=h[i]+h[i+1]
      }
      return h
    })
  let result = {};
  for (let i=0;i<box.length;i++) {
    for (let j = 0; j < box[i].length; j++) {
      result[box[i][j]] = (result[box[i][j]] || 0) + 1;
    }
  }
  return result
}