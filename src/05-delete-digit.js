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
function deleteDigit(n) {
  const str = String(n);
  const arr = str.split('');
  const minEl = Math.min(...arr);
  const minElInd = str.lastIndexOf(minEl);
  delete arr[minElInd];
  const result = arr.join('');
  return Number(result);
}

module.exports = deleteDigit;
