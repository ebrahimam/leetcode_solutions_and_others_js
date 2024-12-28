// MEDUIM
// String

// Problem
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
//  (you may want to display this pattern in a fixed font for better legibility)

const convert = (s, numRows) => {
  if (s.length <= numRows || numRows < 2) return s;
  var len = s.length;
  var num = 2 * (numRows - 1);
  var res = Array(numRows).fill("");
  var tmp = 0;
  for (var i = 0; i < len; i++) {
    tmp = i % num;
    if (tmp < numRows) {
      res[tmp] += s[i];
    } else {
      res[num - tmp] += s[i];
    }
  }
  return res.json("");
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(n).
