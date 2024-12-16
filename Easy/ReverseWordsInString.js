// EASY
// String

// Problem

// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

const reverseWords = (s) => {
  return s.split(" ").map(reverse).join(" ");
};

const reverse = (word) => {
  var len = word.length;
  var res = "";
  for (var i = 0; i < len; i++) {
    res += word[len - i - 1];
  }
  return res;
};


// Complexity:

//     Time complexity :
//     Space complexity :
