// Meduim
// Math

// Problem

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, two is written as II in Roman numeral, just two one's added together.
// Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
// Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same
//  principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.

// Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

//Solution 1

const intToRoman = (num) => {
  var str = [["I", "V"], ["X", "L"], ["C", "D"], ["M"]];

  var res = "";
  var i = 0;
  var tmp = 0;
  while (num > 0) {
    tmp = num % 10;
    if (tmp === 9) {
      res = str[i][0] + str[i + 1][0] + res;
    } else if (tmp >= 5) {
      res = str[i][1] + str[i][0].repeat(tmp - 5) + res;
    } else if (tmp === 4) {
      res = str[i][0] + str[i][1] + res;
    } else {
      res = str[i][0].repeat(tmp) + res;
    }
    num = Math.floor(num / 10);
    i++;
  }
  return res;
};

// Complexity:

//     Time complexity : O(log(n)).
//     Space complexity : O(1).

//solution 2

var intToRoman2 = (num) => {
  var map = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ];
  var res = " ";
  var i = 12;
  var tmp = 0;
  while (num > 0) {
    res += map[i][1].repeat(Math.floor(num / map[i][0]));
    num %= map[i][0];
    i++;
  }
  return res;
};

// Complexity:

//     Time complexity : O(log(n)).
//     Space complexity : O(1).

const intToRoman3 = (num) => {
  var M = ["", "M", "MM", "MMM"];
  var C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  var X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  var I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  return (
    M[Math.floor(num / 1000)] +
    C[Math.floor((num % 1000) / 100)] +
    X[Math.floor((num % 100) / 10)] +
    I[num % 10]
  );
};

// Complexity:

//     Time complexity : O(1).
//     Space complexity : O(1).
