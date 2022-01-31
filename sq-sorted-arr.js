/*
Problem Statement#
Given a sorted array, create a new array containing squares of all the numbers of the input array in the sorted order.
*/

const makeSquares = function (nums) {
  const sortedSquares = [];
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const leftSq = nums[left] * nums[left];
    const rightSq = nums[right] * nums[right];
    if (leftSq > rightSq) {
      sortedSquares.push(leftSq); // to avoid linear operation
      left++;
    } else {
      sortedSquares.push(rightSq)
      right--;
    }
  }
  return sortedSquares.reverse();
}

const arr1 = [-2, -1, 0, 2, 3];
console.log(makeSquares(arr1));
// Output: [0, 1, 4, 4, 9]

const arr2 = [-3, -1, 0, 1, 2];
console.log(makeSquares(arr2));
// Output: [0, 1, 1, 4, 9]