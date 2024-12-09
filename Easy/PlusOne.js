// EASY
// Array-Math

// ------------------------Problem -----------------------------------------------------
// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
// You may assume the integer does not contain any leading zero, except the number 0 itself.

const PlusOne = (digits) => {
  var i = digits.length - 1;
  var value = 0;
  var carry = 1;
  while (i > 0 && carry) {
    value = digits[i] + carry;
    carry = Math.floor(val / 10);
    digits[i] = val % 10;
    i--;
  }
  if (carry) digits.unshift(carry);
  return digits;
};

// Complexity:
// Time complexity : O(n).
// Space complexity : O(1).

//-------------- Other Solution -----------------------
//with typescript

function plusOne(digits: number[]): number[] {
  let n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }

  let newArr = Array.from({ length: n + 1 }, () => 0);
  newArr[0] = 1;
  return newArr;
}
