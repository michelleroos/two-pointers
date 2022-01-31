/*
Problem Statement#
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
*/

var remove_duplicates = function (nums) {
  if (nums.length < 2) return nums;
  let slow = 0;
  for (let fast = slow + 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast]
    }
  }
  return slow + 1;
};


const arr1 = [2, 3, 3, 3, 6, 9, 9];
console.log(remove_duplicates(arr1));
// Output: 4
// Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].

const arr2 = [2, 2, 2, 11];
console.log(remove_duplicates(arr2));
// Output: 2
// Explanation: The first two elements after removing the duplicates will be [2, 11].