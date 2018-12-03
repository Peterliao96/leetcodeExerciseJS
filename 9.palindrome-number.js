/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str_x = x.toString()
    for(var i = 0;i<Math.floor(str_x.length/2);i++){
      if(str_x.slice(i,i+1) !== str_x.slice(str_x.length - i - 1,str_x.length - i)){
        return false
      }
    }
    return true

};
