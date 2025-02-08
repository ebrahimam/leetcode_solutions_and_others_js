// Meduim
// String

// Problem

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number
// could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example:

// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

const letterCombination = (digits) => {
  if (digits.length === 0) return [];
  var res = [""];
  const mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  bfs(res, 0, digits, mapping, true);
  return res;
};

const bfs = (res, index, digits, mapping, lead) => {
  if (res.length === 0 || index === digits.length) return;
  const tmp = res.pop();
  const chars = mapping[digits[index]];
  bfs(res, index, digits, mapping, false);
  for (var i = 0; i < chars.length; i++) {
    res.push(tmp + chars[i]);
  }
  if (lead) bfs(res, index + 1, digits, mapping, true);
};

// Complexity:

//     Time complexity :
//     Space complexity :
