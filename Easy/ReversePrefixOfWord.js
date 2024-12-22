// EASY
// String

// Problem
// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive).
//  If the character ch does not exist in word, do nothing.
//    For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
// Return the resulting string.

const reversePrefix = (word, ch) => {
  var index = word.indexOf(ch);
  if (index === -1) return word;
  var arr = word.split("");
  for (var i = 0; i < index / 2; i++) {
    var tmp = arr[i];
    arr[i] = arr[index - i];
    arr[index - i] = tmp;
  }
  return arr.join("");
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(n).
