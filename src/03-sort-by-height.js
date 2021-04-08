/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr;
  let arrsrt = [];
  result.forEach((element) => {
    if (element !== -1) {
      arrsrt.push(element);
    }
  });
  arrsrt = arrsrt.sort((a, b) => a - b);
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] !== -1) {
      result[i] = arrsrt[arrsrt.length - 1];
      arrsrt.pop();
    }
  }
  return result;
}

module.exports = sortByHeight;
