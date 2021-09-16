import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members='clear at all'){
    let team = ''
    if (!(members instanceof Array)) return false
    members.forEach((name)=>{
      if (typeof name==='string') {
        for (let i=0; i<name.length;++i){
          if (name[i]!==' ') {
            team+=name[i]
            break
          }
        }
      }
    })
    return team.toUpperCase().split('').sort().join('')
  }