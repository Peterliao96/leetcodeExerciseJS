/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let cur_val = 0
    for (var i = 0; i < height.length;i++){
      for (var j = i+1; j < height.length; j++){
        if(height[j] > height[i]){
          height_val = height[i]
          if(height_val * (j-i) > cur_val){
            cur_val = height_val * (j-i)
          }
        }  else {
          height_val = height[j]
          if(height_val * (j-i) > cur_val){
            cur_val = height_val * (j-i)
          }
        }
      }
    }
    return cur_val
};

module.exports = maxArea
