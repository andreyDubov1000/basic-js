import { NotImplementedError } from '../extensions/index.js'

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(m) {
  const l = m.length
  const n = m[0].length
  const result = Array(l)
    .fill(null)
    .map((a) => new Array(l).fill(null))

  for (let i = 0; i < l; i++) {
    for (let j = 0; j < n; j++) {
      if (!i) {
        result[i][j] =
          (j ? +m[i][j - 1] + +!!m[i + 1][j - 1] : 0) +
          +!!m[i][j + 1] +
          +!!m[i + 1][j + 1] +
          +!!m[i + 1][j]

        continue
      }
      if (i === l - 1) {
        result[i][j] =
          (j ? +m[i - 1][j - 1] + +m[i][j - 1] : 0) +
          +m[i - 1][j] +
          !!m[i - 1][j + 1] +
          !!m[i][j + 1]
        continue
      }
      result[i][j] = j
        ? +m[i - 1][j - 1] + +m[i][j - 1] + +!!m[i + 1][j]
        : 0 +
          +!!m[i][j + 1] +
          +!!m[i + 1][j + 1] +
          +!!m[i + 1][j] +
          +m[i - 1][j] +
          +!!m[i - 1][j + 1]
    }
  }
  return result
}
