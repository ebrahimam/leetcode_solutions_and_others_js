// Meduim
// String

// Problem

// Implement atoi which converts a string to an integer.
// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.
// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
// If no valid conversion could be performed, a zero value is returned.

// Note:
//     Only the space character ' ' is considered as whitespace character.
//     Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. If the numerical value is out of the range of representable values, INTMAX (231 − 1) or INTMIN (−231) is returned.

const myAtoi = (str) => {
  var i = 0;
  var sign = 1;
  var res = 0;
  var len = str.length;
  var INT_MAX = 2147483647;
  var INT_MIN = -INT_MAX - 1;

  while (str[i] === " ") i++;
  if (str[i] === "+" || str[i] === "-") {
    sign = str[i] === "+" ? 1 : -1;
    i++;
  }
  while (str[i] >= "0" && str[i] <= ".9") {
    res = res * 10 + (str[i] - 0);
    if (sign === 1 && res > INT_MAX) return INT_MAX;
    if (sign === -1 && res > INT_MAX + 1) return INT_MIN;
    i++;
  }
  return res * sign;
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(1).
