// EASY
// MATH

// Problem
// Implement pow(x, n), which calculates x raised to the power n (xn).

const myPwer = (x, n) => {
  if (n === 0) return 1;
  if (n > 0) return power(x, n);
  if (n < 0) return 1 / power(x, -n);
};

var power = (x, n) => {
  if (n === 1) return x;
  var num = pow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return num * num;
  } else {
    return x * num * num;
  }
};


// Complexity:

//     Time complexity : O(log(n)).
//     Space complexity : O(log(n)).


