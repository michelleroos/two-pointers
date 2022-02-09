/*
125. Valid Palindrome Easy
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
*/

// // O(n) time & O(n) space
// var isPalindrome = function (s) {
//   const str = createAlphaNum(s);
//   return str.split('').reverse().join('') === str;
// };

// var createAlphaNum = function (s) { // O(n)
//   const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
//   let str = [];
//   for (let c of s) {
//     if (alphanum.includes(c)) {
//       str.push(c.toLowerCase());
//     }
//   }
//   return str.join('');
// }

/*
Runtime: 104 ms, faster than 56.65% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 51.2 MB, less than 5.04% of JavaScript online submissions for Valid Palindrome.
*/


var isPalindrome = function (s) {
  const alphanum = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let right = s.length - 1;
  let left = 0;
  while (left < right) {
    while (left < right && !(alphanum.includes(s[left]))) {
      left++;
    }
    while (left < right && !(alphanum.includes(s[right]))) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

/*
Runtime: 83 ms, faster than 87.24% of JavaScript online submissions for Valid Palindrome.
Memory Usage: 45 MB, less than 29.83% of JavaScript online submissions for Valid Palindrome.
*/

const s1 = "A man, a plan, a canal: Panama";
console.log(func(s1));
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const s2 = "race a car";
console.log(func(s2));
// Output: false
// Explanation: "raceacar" is not a palindrome.

const s3 = " ";
console.log(func(s3));
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.