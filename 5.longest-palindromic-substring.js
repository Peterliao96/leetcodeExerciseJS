/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  let res = ""
    function checkPalindrome(l, r){
        while (l >= 0 && r < s.length){
            if (s[l] == s[r]){
                l -= 1;
                r += 1;
            } else{
                break;
            }}
        l += 1;
        r -= 1;
        if (r - l + 1 > res.length){
            res = s.substring(l, r + 1);
            }
    }
    for (let i = 0; i < s.length; i++){
        if (i > 0 && s[i] == s[i - 1]){
            checkPalindrome(i - 1, i);
        }
        checkPalindrome(i, i);
    }
    return res;
};

module.exports = longestPalindrome
