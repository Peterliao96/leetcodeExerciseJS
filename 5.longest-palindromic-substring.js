/**
 * @param {string} s
 * @return {string}
 */
function isPalidrome(s){
  for (var i = 0; i < Math.ceil(s.length / 2); i++){
    if(s[i] != s[s.length - i - 1]){
      return false
    }
  }
  return true
}
var longestPalindrome = function(s) {
  let dict = {}
  let updated_s = ""
  let i = 0;
  let j = 2;
  let max_len = 0
  while (i < s.length){
    while( j <= s.length){
      if(isPalidrome(s.slice(i,j))){
        dict[s.slice(i,j)] = s.slice(i,j).length
        j+=1
      } else {
        j+=1
      }
    }
    i+=1
    j = i + 2
  }
  console.log(dict)
  for (s in dict){
    if(dict[s] > max_len){
      max_len = dict[s]
      updated_s = s
    }
  }
  return updated_s
};

module.exports = longestPalindrome
