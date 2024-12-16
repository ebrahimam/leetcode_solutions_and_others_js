// EASY
// SEARCH ALGORITHM

// Problem
// Given an array of integers nums which is sorted in ascending order, and an integer
// target, write a function to search target in nums. If target exists, then return its index.
//  Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

const search = (numbers, target) => {
  var left = 0;
  var right = numbers.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

// Complexity :

// Time complexity : O(log(n)).
// Space complexity : O(1).
