/*
283. Move Zeroes Easy
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

// [1, 3, 12, 0, 0]
//            ji
var moveZeroes = function (nums) {
  let j = 0; // 3
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]; // j is 0, then 1
    }
  }
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums;
};

/*
Runtime: 129 ms, faster than 55.20% of JavaScript online submissions for Move Zeroes.
Memory Usage: 46.8 MB, less than 18.83% of JavaScript online submissions for Move Zeroes.
*/

const nums1 = [0,1,0,3,12];
console.log(func(nums1));
// Output: [1,3,12,0,0]

const nums1 = [0];
console.log(func(nums1));
// Output: [0]
