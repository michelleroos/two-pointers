/*
Problem Statement #
Given an array of unsorted numbers, find all unique triplets in it that add up to zero.
*/

const searchTriplets = function (nums) {
  triplets = [];
  nums.sort(); // 2-pointer works on sorted
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1, high = nums.length - 1;
      let sum = 0 - nums[i];
      while (low < high) {
        if (nums[low] + nums[high] === sum) {
          triplets.push([nums[i], nums[low], nums[high]]);
          while (low < high && nums[low] === nums[low + 1]) low++;
          while (low < high && nums[high] === nums[high - 1]) high--;
          low++;
          high--;
        } else if (nums[low] + nums[high] > sum) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return triplets;
};

const arr1 = [-3, 0, 1, 2, -1, 1, -2];
console.log(searchTriplets(arr1));
// Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
// Explanation: There are four unique triplets whose sum is equal to zero.

const arr2 = [-5, 2, -1, -2, 3];
console.log(searchTriplets(arr2));
// Output: [[-5, 2, 3], [-2, -1, 3]]
// Explanation: There are two unique triplets whose sum is equal to zero.