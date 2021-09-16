import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
    const sA = parseFloat(sampleActivity)
    const k=0.693/5730
    if (!(typeof sampleActivity==='string')) return false
    if (!sA) return false
    if ( sA<0 || sA> MODERN_ACTIVITY) return false
    return Math.ceil(Math.log(MODERN_ACTIVITY/sA)/k)

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
