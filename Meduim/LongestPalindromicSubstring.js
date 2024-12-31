// Meduim
// String

// Problem
// Given a string s, find the longest palindromic substring in s. You may assume that the maximum
//  length of s is 1000.

// Naive Approach
// Generate all substrings.
//     For each substring, check if it is palindrome or not.
//     If substring is Palindrome, then update the result on the basis of longest palindromic substring found till now.

const checkPal = (s, low, high) => {
  while (low < high) {
    if (s[low] !== s[high]) return false;
    low++;
    high--;
  }
  return true;
};

const longestPalSubstring = (s) => {
  const n = s.length;
  let maxLen = 1;
  let start = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (checkPal(s, i, j) && j - i + 1 > maxLen) {
        start = i;
        maxLen = j - i + 1;
      }
    }
  }
  return s.substring(start, start + maxLen);
};
// Complexity Analysis:
//     Time complexity: O(N3). Three nested loops are needed to
//  find the longest palindromic substring in this approach.
//     Auxiliary complexity: O(1). As no extra space is needed.

// Using Dynamic Programming:
// Function to find the longest palindrome substring
function longestPalSubstr(s) {
  const n = s.length;
  const dp = Array.from(Array(n), () => Array(n).fill(false));

  let maxLen = 1;
  let start = 0;

  for (let i = 0; i < n; ++i) dp[i][i] = true;

  for (let i = 0; i < n - 1; ++i) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLen = 2;
    }
  }

  for (let k = 3; k <= n; ++k) {
    for (let i = 0; i < n - k + 1; ++i) {
      let j = i + k - 1;

      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;

        if (k > maxLen) {
          start = i;
          maxLen = k;
        }
      }
    }
  }

  return s.substring(start, start + maxLen);
}

// Time complexity: O(N2). A nested traversal is needed.
// Auxiliary Space: O(N2). A matrix of size N*N is needed to store the table.

// Using Expansion from center:
// Function to find the longest palindrome substring
function longestPalSubstr(s) {
  const n = s.length;
  if (n === 0) return "";

  let start = 0;
  let maxLen = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= 1; j++) {
      let low = i;
      let hi = i + j;
      while (low >= 0 && hi < n && s[low] === s[hi]) {
        const currLen = hi - low + 1;
        if (currLen > maxLen) {
          start = low;
          maxLen = currLen;
        }
        low--;
        hi++;
      }
    }
  }

  return s.substring(start, start + maxLen);
}

// Time complexity: O(N2), where N is the length of the input string
// Auxiliary Space: O(1), No extra space used.

