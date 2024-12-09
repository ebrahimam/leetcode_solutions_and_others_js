// Easy
// Math -Number

// Problem
// Implement int sqrt(int x).

const Sqrt = (x) => {
  if (x < 2) return x;
  var left = 1;
  var right = x;
  var mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (mid > x / mid) {
      right = mid - 1;
    } else if (mid + 1 > x / (mid + 1)) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
};

// Complexity:

//     Time complexity : O(log(n)).
//     Space complexity : O(1).
