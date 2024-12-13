// EASY
// Math

// Problem
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

const addDigits = (numbers) => {
  var result = 0;
  while (num) {
    result += number % 10;
    numbers = Math.floor(numbers / 10);
  }
  return result < 10 ? res : addDigits(result);
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(1).

// --------- Solution-2 --------------

const addDigits2 = (nums) => {
  return 1 + ((nums - 1) % 9);
};

//  Complexity
// Time complexity : O(1).
// Space complexity : O(1).
