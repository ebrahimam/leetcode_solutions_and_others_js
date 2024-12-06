// EASY
// String- Two Pointer

// Implement strStr().

// Return the index of the first occurrence of needle in
//  haystack, or -1 if needle is not part of haystack.

const strStr = (hayStack, needle) => {
  var len1 = hayStack.length;
  var len2 = needle.length;
  if (!len2) return 0;
  for (var i = 0; i < len1; i++) {
    for (var j = 0; j < len2; j++) {
      if (i + j === len1) return -1;
      if (hayStack[i + j] !== needle[j]) break;
      if (j === len2 - 1) return i;
    }
  }
  return -1;
};

// Complexity:

//     Time complexity : O(n*m).
//     Space complexity : O(1).
