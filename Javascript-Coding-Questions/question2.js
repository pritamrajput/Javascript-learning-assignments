/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let median;
    let newArr = nums1.concat(nums2);
    for(let i = 0; i<newArr.length; i++){
        for(let j = 0; j<newArr.length; j++){
            if(newArr[j]>newArr[j+1]){
              let temp = newArr[j+1];
              newArr[j+1] = newArr[j];
              newArr[j] = temp;
            }
        }
    }
    if(newArr.length % 2 === 0){
        let num = Math.trunc(newArr.length / 2);
        median = (newArr[num] + newArr[num-1])/2
    }
    else{
        let num = Math.trunc(newArr.length / 2);
        median = newArr[num];
    }
    return median;
};