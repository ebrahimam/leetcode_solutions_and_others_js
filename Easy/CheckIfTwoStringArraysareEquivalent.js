// EASY
// Array,STRING

// Problem

// Given two string arrays word1 and word2, return** true if the two arrays represent the same string, and false otherwise.**
// A string is represented by an array if the array elements concatenated in order forms the string.
const CheckIfTwoStringArraysareEquivalent = (word1, word2) => {
  var i = 0;
  var m = 0;
  var j = 0;
  var n = 0;
  while (i < word1.length && j < word2.length) {
    if (word1[i][m] !== word2[j][n]) return false;
    if (m === word1[i].length - 1) {
      i += 1;
      m = 0;
    } else {
      m += 1;
    }
    if (n === word2[j].length - 1) {
      j += 1;
      n = 0;
    } else {
      n += 1;
    }
  }
  return i === word1.length && j === word2.length;
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(1).

const CheckIfTwoStringArraysareEquivalent2 = (arr, brr, N) => {
  let size = arr[0].length;

  for (let i = 0; i < N; i++) {
    arr[i] = arr[i].split("").sort().join("");
    brr[i] = brr[i].split("").sort().join("");
  }
  arr.sort();
  brr.sort();

  for (let i = 0; i < N; i++) {
    if (arr[i] != brr[i]) {
      return false;
    }
  }
  return true;
};

//Complexity

// Time Complexity: O(2* (N * logN) + 2 * (N * logM) ), where N is the size of array and M is the size of each string.
// Auxiliary Space: O(1)
