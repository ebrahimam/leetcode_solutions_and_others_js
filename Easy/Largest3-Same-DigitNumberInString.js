// EASY
// STRING

// Problem
// You are given a string num representing a large integer. An integer is good if it meets the following conditions:
//     It is a substring of num with length 3.
//     It consists of only one unique digit.
// Return **the **maximum good **integer as a *string* or an empty string "" if no such integer exists**.
// Note:
//     A substring is a contiguous sequence of characters within a string.
//     There may be leading zeroes in num or a good integer.

const largestgoodInteger = (num) => {
  var maxDigit = "";
  var digitLength = 0;
  for (var i = 0; i < num.length; i++) {
    if (num[i] === num[i - 1]) {
      digitLength += 1;
      if (digitLength >= 3 && num[i] > maxDigit) {
        maxDigit = num[i];
      }
    } else {
      digitLength = 1;
    }
  }
  return maxDigit.repeat(3);
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(1).
