/*
167. Two Sum II - Input Array Is Sorted - Easy
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.
*/

var twoSumII = function (numbers, target) {
  let left = 1;
  let right = numbers.length;
  while (left < right) {
    const sum = numbers[left - 1] + numbers[right - 1];
    if (sum === target) return [left, right];
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

/*
Runtime: 60 ms, faster than 99.54% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 43 MB, less than 5.77% of JavaScript online submissions for Two Sum II - Input Array Is Sorted.
*/


const numbers1 = [2,7,11,15], target1 = 9;
console.log(twoSumII(numbers1, target1));
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

const numbers2 = [2,3,4], target2 = 6;
console.log(twoSumII(numbers2, target2));
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

const numbers3 = [-1,0], target3 = -1;
console.log(twoSumII(numbers3, target3));
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

