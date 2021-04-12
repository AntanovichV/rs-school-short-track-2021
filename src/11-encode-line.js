/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n = 1;
  let prev = str[0];
  let result = '';

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === prev) {
      n++;
    } else {
      if (n === 1) { result += prev; } else { result += n + prev; }
      prev = str[i];
      n = 1;
    }
  }
  return result;
}

module.exports = encodeLine;
