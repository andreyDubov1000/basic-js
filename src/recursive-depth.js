import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default
    class DepthCalculator {
      calculateDepth (array){
        let depth=[1]
        let d=false
        for (let i=0; i< array.length; i++) {
          if (array[i] instanceof Array) {
            d=true
            depth.push(this.calculateDepth(array[i]))
          }
        }
        if (d) return Math.max(...depth)+1
        return 1
      }
    }
