/*
344. Reverse String Easy
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/

var reverseString = function (s) {
  let left = 0
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};

const s1 = ["h","e","l","l","o"];
console.log(func(s1));
// Output: ["o","l","l","e","h"]

const s2 = ["H","a","n","n","a","h"];
console.log(func(s2));
// Output: ["h","a","n","n","a","H"]
 

