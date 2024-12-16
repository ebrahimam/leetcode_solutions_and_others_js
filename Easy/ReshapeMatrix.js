// EASY
// Array

// Problem

// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

const reshapeMatrix = (nums, r, c) => {
  var m = nums.length;
  var n = nums[0].length;

  if (m * n != r * c) return nums;

  var res = Array(r)
    .fill(0)
    .map((_) => Array(c));
  var num = r * c;
  for (var i = 0; i < num; i++) {
    res[Math.floor(i / c)][i % c] = nums[Math.floor(i / n)][i % n];
  }
  return res;
};

// Complexity:

//     Time complexity : O(r*c).
//     Space complexity : O(r*c).
