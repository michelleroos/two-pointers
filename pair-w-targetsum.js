/*
Problem Statement#
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
*/

// USING TWO POINTERS
const pair_with_targetsum = function (arr, target_sum) {
  let end = arr.length - 1;
  let start = 0;
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === target_sum) {
      return [start, end];
    }
    if (sum < target_sum) {
      start++;
    } else {
      end--;
    }
  }
}

/*
Time Complexity#
The time complexity of the above algorithm will be O(N)O(N), where ‘N’ is the total number of elements in the given array.

Space Complexity#
The algorithm runs in constant space O(1)O(1).
*/

const arr1 =  [1, 2, 3, 4, 6], target1 = 6;
console.log(pair_with_targetsum(arr1, target1));
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

const arr2 =  [2, 5, 9, 11], target2 = 11;
console.log(pair_with_targetsum(arr2, target2));
// Output: [0, 2]
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11