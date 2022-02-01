/*
15. 3Sum Medium
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
*/

var threeSumX = function (nums) {
  const triplets = []; // [-4, 0, 4] [-4, 1, 3]
  if (nums.length < 3) return triplets;

  nums.sort((a, b) => a - b); // O(nlogn)
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip if dup
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const threeSome = nums[i] + nums[left] + nums[right]; // 1
      if (threeSome > 0) {
        right--;
      } else if (threeSome < 0) {
        left++;
      } else {
        triplets.push([nums[i], nums[left], nums[right]])
        left++;
        while ((nums[left] === nums[left - 1]) && (left < right)) left++; // keep going if dup
      }
    }
  }
  return triplets;
};

var threeSum = function (nums) {
  const triplets = []; // [-4, 0, 4] [-4, 1, 3]
  if (nums.length < 3) return triplets;
  nums.sort((a, b) => a - b); // O(nlogn)

  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip if dup

    twoSumII(nums, i, 0, triplets)
  }
  return triplets;
};

var twoSumII = function (numbers, i, target, triplets) {
  let left = i + 1;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[i] + numbers[left - 1] + numbers[right - 1];
    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      triplets.push([numbers[i], numbers[left], numbers[right]]);
      left++;
      while ((numbers[left] === numbers[left - 1]) && (left < right)) left++; // keep going if dup
    }
  }
};

const nums1 = [-1,0,1,2,-1,-4];
console.log(threeSum(threeSum(nums1)));
// Output: [[-1,-1,2],[-1,0,1]]

const nums2 = [];
console.log(threeSum(threeSum(nums2)));
// Output: []

const nums3 = [0];
console.log(threeSum(threeSum(nums3)));
// Output: []
