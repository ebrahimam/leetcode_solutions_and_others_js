// EASY
// MATH

// Problem

// You are given a binary string s that contains at least one '1'.
// You have to rearrange the bits in such a way that the resulting binary number is the maximum odd binary number
// that can be created from this combination.
// Return a string representing the maximum odd binary number that can be created from the given combination.
// **Note **that the resulting string can have leading zeros.

const maximumOddBinaryNumber = (s) => {
  var numOfOnes = s.split("").reduce((sum, num) => sum + Number(num), 0);
  return "1".repeat(numOfOnes - 1) + "0".repeat(s.length - numOfOnes) + "1";
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(n).
