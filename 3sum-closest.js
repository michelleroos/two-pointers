/*
16. 3Sum Closest Medium
Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
*/

var threeSumClosest = function (nums, target) {
  let closest = Infinity;
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1; right = nums.length - 1;
    while (left < right) {
      const diff = target - nums[i] + nums[left] + nums[right];
      if (diff === 0) return diff;

    }
  }
  return closest;
};

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

const nums1 = [-1,2,1,-4], target1 = 1;
console.log(func(nums1, target1));
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

const nums1 = [0,0,0], target1 = 1;
console.log(func(nums1, target1));
// Output: 0