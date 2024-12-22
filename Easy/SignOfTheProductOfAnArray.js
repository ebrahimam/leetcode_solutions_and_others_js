// EASY
// Array

// Problem
// There is a function signFunc(x) that returns:
//     1 if x is positive.
//     -1 if x is negative.
//     0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

const arraySign = (nums) => {
  var res = 1;
  for (var i = 0; i < nums.length; i++) {
    res *= nums[i] > 0 ? 1 : nums[i] === 0 ? 0 : -1;
  }
  return res;
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(n).
