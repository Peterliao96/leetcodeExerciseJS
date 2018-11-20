/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = []
  let i = 0
  let j = 0
  while (i < nums1.length || j < nums2.length){
    if(i == nums1.length){
      arr = arr.concat(nums2)
      break
    } else if (j == nums2.length){
      arr = arr.concat(nums1)
      break
    } else if(nums1[i] > nums2[j]){
      arr.push(nums2[j])
      j+=1
    } else {
      arr.push(nums1[i])
      i+=1
    }
  }
  if (arr.length % 2 == 1){
    return arr[Math.ceil(arr.length / 2)]
  } else {
    return (arr[(arr.length / 2)-1] + arr[(arr.length /2)]) /2
  }


};

module.exports = findMedianSortedArrays
