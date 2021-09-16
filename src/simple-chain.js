import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
    _chain: [],

    getLength (){
      return this._chain.length
    },
    addLink(value='clear at all') {
      if (value==='clear at all') this._chain.push(`()`)
      else this._chain.push(`( ${String(value)} )`)
      return this
    },
    removeLink(position) {
      if (typeof position !== 'number' || !Number.isInteger(position) || position<1 || position>this._chain.length) {
          this._chain=[]
          throw new Error('You can\'t remove incorrect link!')
      }
      this._chain.splice(position - 1, 1)
      return this
    },
    reverseChain() {
      this._chain.reverse()
      return this
    },
    finishChain() {
      const chain = this._chain.join('~~')
      this._chain=[]
      return chain

    },
  }
