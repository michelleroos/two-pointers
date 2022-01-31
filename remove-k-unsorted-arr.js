/*
27. Remove Element on LC
Problem 1: Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.
*/

var removeElement = function (nums, val) {
  if (nums.length < 1) return nums;
  let front = 0; // front of the array (slow pointer)
  for (let back = 0; back < nums.length; back++) { // back of the array (fast pointer)
    if (nums[back] != val) {
      nums[front] = nums[back]; // move elements from the back to the front
      front++
    }
  }
  return front;
};

const arr1 = [3, 2, 3, 6, 3, 10, 9, 3], k1 = 3;
console.log(removeElement(arr1, k1));
// Output: 4
// Explanation: The first four elements after removing every 'Key' will be [2, 6, 10, 9]

const arr2 = [2, 11, 2, 2, 1], k2 = 2;
console.log(removeElement(arr2, k2));
// Output: 2
// Explanation: The first two elements after removing every 'Key' will be [11, 1].