// EASY
// HASH TABLE

// Problem
// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// So if you're given an array: [2,1,5,3,1,5,2] the result will be 3 since 3 occurs once.

// ---------------Solution-1-------------------
// Brute Force :O(n^2)

const SingleNumber = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    let flag = true;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] == numbers[j]) {
        flag = false;
      }
    }
    if (flag == true) return numbers[i];
  }
  return -1;
};

//-------------solution-2--------------------
// 2: Sorting O(nlogn) time

const SingleNumber2 = (nums = () => {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) return nums[i];
  }
  return -1;
});

// ------------solution-3----------------------
// HashMap O(n) time and O(n) space.

const SingleNumber3 = (numbers) => {
  let map = {};
  for (let i = 0; i < numbers.length - 1; i++) {
    if (map[numbers[i]]) map[numbers[i]] = false;
    else map[numbers[i]] = true;
  }
  for (let [key, value] of Object.entries(map)) {
    if (value) return key;
  }
  return -1;
};

// 4: Bit Manipulation O(n) time and O(1) space.

// We're given that each number occurs twice except 1 number, so we've to find a way that will negate out elements which were already existing while keeping track of that unique element.

// XOR concept:

// If we take XOR of zero and some bit, it will return that bit
// a ⊕ 0 = a
// If we take XOR of two same bits, it will return 0
// a ⊕ a = 0
// So for elements [a,a,b]
// a ⊕ b ⊕ a = a ⊕ a ⊕ b = (a ⊕ a ) ⊕ b = 0 ⊕ b = b

// based on this approach:

const SingleNumber4 = (numbers) => {
  let res = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    res = res ^ numbers[i];
  }
  return res;
};
