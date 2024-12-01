// Check if a number is Palindrome

// Given a positive integer n, find whether the number is Palindrome
// or not. A number is a Palindrome if it remains the same when its digits
// are reversed.

function checkPalindrom(n) {
  let reverse = 0;
  let temp = n;
  while (temp !== 0) {
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  return reverse === n;
}

let number = 142154211; // or another number
if (checkPalindrom(number)) {
  console.log("true");
} else {
  console.log("false");
}

// Time Complexity : O(log10(n)) or O(number of digits)
// Auxiliary space : O(1) or constant

// [Alternate Approach] Using Number as String

function checkPalindrome(s) {
  let Slength = s.length;
  for (var i = 0; i < Slength / 2; i++) {
    if (s[i] != s[Slength - i - 1]) {
      return false;
    }
  }
  return true;
}
