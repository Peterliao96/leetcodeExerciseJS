/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var res = [];

var find = function(bracket, leftRemain, rightRemain, stack=[]) {
  stack.push(bracket);
  if (leftRemain === 0 && rightRemain === 0) {
    res.push(stack.slice(1).join('')); // only concat upon valid solution
  } else if (leftRemain < 0 || leftRemain > rightRemain) {
    // stop recursing further
  } else {
    find('(', leftRemain-1, rightRemain, stack);
    find(')', leftRemain, rightRemain-1, stack);
  }
  stack.pop();
};

find('', n, n);

return res;
};

module.exports =generateParenthesis
