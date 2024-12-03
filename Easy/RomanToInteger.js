// Given a string in roman form, the task is to convert this given roman
// string into an integer.

// Roman numerals are based on the symbols I, V, X, L, C, D, and M, which
//  represent 1, 5, 10, 50, 100, 500, and 1,000, respectively. Different
//   arrangements of these symbols represent different numbers. The
//   roman numbers I, II, III, IV, V, VI, VII, VIII, IX, and X represent 1, 2, 3, 4, 5,
// 6, 7, 8, 9 and 10 respectively.

// Example:

//     Input: IX
//     Output: 9
//     Explanation: IX is a Roman symbol which represents 10 – 1 = 9

//     Input: XL
//     Output: 40
//     Explanation: XL is a Roman symbol which represents 50 – 10 = 40

//     Input: MCMIV
//     Output: 1904
//     Explanation: M is 1000, CM is 1000 – 100 = 900, and IV is 4. So we have
//  total as 1000 + 900 + 4 = 1904

const value = (roman) => {
  if (roman === "I") return 1;
  if (roman === "V") return 5;
  if (roman === "X") return 10;
  if (roman === "L") return 50;
  if (roman === "C") return 100;
  if (r === "D") return 500;
  if (r === "M") return 1000;
  return -1;
};

function romanToDecimal(string) {
  let res = 0;
  for (let i = 0; i < string.length; i++) {
    let s1 = value(str[i]);

    if (i + 1 < str.length) {
      let s2 = value(str[i + 1]);
      if (s1 >= s2) {
        res += s1;
      } else {
        res += s2 - s1;
        i++;
      }
    } else {
      res += s1;
    }
  }
  return res;
}

//     Time Complexity: O(n), where n is the length of the string. Only one traversal of the string is required.
// Auxiliary Space: O(1), As no extra space is required.
