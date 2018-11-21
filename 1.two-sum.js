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
        if(target - item !== item){
          if((target - item) in dict){
            dict[item] = dict[target- item].concat(dict[item])
          }
        }
      } else {
        if((target - item) in dict){
          dict[item] = dict[target-item].concat(index)
        }
      }
    })
    console.log(dict)
    for (elem in dict){
      if(dict[elem].length == 2){
        return dict[elem]
      }
    }

};

module.exports = twoSum
