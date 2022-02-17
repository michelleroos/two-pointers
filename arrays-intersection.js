/*
349. Intersection of Two Arrays Easy
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
*/

var intersection = function (nums1, nums2) {
  const output = [];
  for (let num of nums1) {
    if (nums2.includes(num) && !output.includes(num)) {
      output.push(num);
    }
  }
  return output;
};

/*
Runtime: 82 ms, faster than 61.53% of JavaScript online submissions for Intersection of Two Arrays.
Memory Usage: 42.5 MB, less than 32.26% of JavaScript online submissions for Intersection of Two Arrays.
*/

const nums1 = [1,2,2,1], nums2 = [2,2];
console.log(func(nums1, nums2));
// Output: [2]

const nums3 = [4,9,5], nums4 = [9,4,9,8,4];
console.log(func(nums3, nums4));
// Output: [9,4]
// Explanation: [4,9] is also accepted.