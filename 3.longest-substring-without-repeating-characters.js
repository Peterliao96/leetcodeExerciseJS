/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let dict = {}
  let i = 0
  let j = 0
  let max_len = 0
  let accS = ""
  while (i < s.length && j < s.length){
    if (!(accS.includes(s[j]))){
      accS += s[j]
      j+=1;
    } else {
      dict[accS] = j - i
      i+= 1;
      j = i
      accS = ""
    }
  }
  console.log(dict)
  for (k in dict){
    if(dict[k] > max_len){
      max_len = dict[k]
    }
  }
  return max_len
};

module.exports = lengthOfLongestSubstring
