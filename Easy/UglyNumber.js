// EASY
// Math

// Problem

// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

const UglyNumber = (num) => {
  if (num < 1) return false;
  if (num === 1) return false;
  var divisor = [2, 3, 5];
  for (var i = 0; i < divisor.length; i++) {
    while (num && num % divisor[i] === 0) {
      num = Math.floor(num / divisor[i]);
    }
  }
  return num === 1;
};

// Complexity:

//     Time complexity : O(log(n)).
//     Space complexity : O(1).
