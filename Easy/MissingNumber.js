// EASY
// ARRAY

// Problem

// Given an array nums containing n distinct numbers in the range [0, n],
// return the only number in the range that is missing from the array.

const MissingNumber = (numbers) => {
  var sum = numbers.reduce((s, i) => s + i, 0);
  return (numbers.length * (numbers.length + 1)) / 2 - sum;
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(1).

// ---------solution-2---------------

const findMissingNumber = (arr) => {
  const n = arr.length + 1;
  const sumOfFirstN = (n * (n + 1)) / 2;

  let sumOfArray = 0;
  for (let i = 0; i < n - 1; i++) {
    sumOfArray = sumOfArray + arr[i];
  }

  let missingNumber = sumOfFirstN - sumOfArray;
  return missingNumber;
};
