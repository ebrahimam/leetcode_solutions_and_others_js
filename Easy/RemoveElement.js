// Easy
// Array
// Given an array nums and a value val, remove all instances of that value in-place and return the new length.

const RemoveElement = (numbers, val) => {
  var len = numbers.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (numbers[i] !== val) numbers[count++] = numbers[i];
  }
  return count;
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(1).
