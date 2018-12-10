/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
  return []
  }
  let obj = { 1: [], 2: ['a', 'b', 'c'], 3: ['d', 'e', 'f'], 4: ['g', 'h', 'i'], 5: ['j', 'k', 'l'], 6: ['m', 'n', 'o'], 7: ['p', 'q', 'r', 's'], 8: ['t', 'u', 'v'], 9: ['w', 'x', 'y', 'z'] }
  if (digits.length < 2) {
    return obj[parseInt(digits[0])]
  }
  let result = obj[parseInt(digits[0])];
  for (let i = 1; i < digits.length; i++) {
      result = helper(obj[parseInt(digits[i])], result)
  }
  return result;
};

function helper(temp, total) {
  let result = []
  for (let j = 0; j < total.length; j++) {
    for (let k = 0; k < temp.length; k++) {
      result.push(total[j] + temp[k])
    }
  }
  return result;
}

module.exports = letterCombinations
