/*
680. Valid Palindrome II Easy
Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};

let isPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++; // this is slightly slower
    right--;
  }
  return true;
}

/*
Runtime: 116 ms, faster than 58.84% of JavaScript online submissions for Valid Palindrome II.
Memory Usage: 48.2 MB, less than 27.24% of JavaScript online submissions for Valid Palindrome II.
*/

var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
};

let isPalindrome = (s, left, right) => {
  while (left < right) {
    if (s[left++] !== s[right--]) { // writing it this way is much faster
      return false;
    }
  }
  return true;
}

/*
Runtime: 72 ms, faster than 98.87% of JavaScript online submissions for Valid Palindrome II.
Memory Usage: 48.7 MB, less than 21.51% of JavaScript online submissions for Valid Palindrome II.
*/


const s1 = "aba";
console.log(validPalindrome(s1));
// Output: true

const s2 = "abca";
console.log(validPalindrome(s2));
// Output: true
// Explanation: You could delete the character 'c'.

const s3 = "abc";
console.log(validPalindrome(s3));
// Output: false
