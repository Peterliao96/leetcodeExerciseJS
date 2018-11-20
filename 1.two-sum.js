/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let dict = {}
    nums.forEach(function(item,index){
      if (!(item in dict)){
        let arr = []
        arr.push(index)
        dict[item] = arr
        if((target - item) in dict){
          dict[target - item] = dict[target-item].concat(index)
        }
      }
    })
    for (elem in dict){
      if(dict[elem].length == 2){
        return dict[elem]
      }
    }

};

module.exports = twoSum
