// EASY
// STRING

const longestbetweenequalcharacters = (s) => {
  var n = s.length;
  var res = -1,
    diff = -1;
  for (i = 0; i < n - 1; i++) {
    for (j = n - 1; j > i; j--) {
      if (s.charAt(i) == s.charAt(j)) {
        diff = j - i - 1;

        res = Math.max(diff, res);
      }
    }
  }
  return res;
};

//Complexity

// Time Complexity: O(N2)
// Auxiliary Space: O(1)

const longestbetweenequalcharacters1 = (string) => {
  var leftPosMap = Array(26);
  var rightPosMap = Array(26);

  var a = "a".charCodeAt(0);
  for (var i = 0; i < string.length; i++) {
    var j = s[i].charCodeAt(0) - a;
    if (leftPosMap[j] === undefined) leftPosMap[j] = i;
    rightPosMap[j] = i;
  }
  var max = -1;
  for (var m = 0; m < 26; m++) {
    if (leftPosMap[m] !== rightPosMap[m]) {
      max = Math.max(max, rightPosMap[m] - leftPosMap[m] - 1);
    }
  }
  return max;
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(1).
