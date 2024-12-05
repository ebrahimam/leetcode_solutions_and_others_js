Easy;
RelatedTopic: String & Stack;

// Given an expression string s, write a program to examine whether the pairs and the orders
// of “{“, “}”, “(“, “)”, “[“, “]” are correct in the given expression. or Given a string containing just
// the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function isPar(s) {
  let stk = [];
  for (let i = 0; i < stk.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stk.push(s[i]);
    } else {
      if (
        (stk.length > 0 && stk[stk.length - 1] === "(" && s[i] === ")") ||
        (stk.length > 0 && stk[stk.length - 1] === "{" && s[i] === "}") ||
        (stk.length > 0 && stk[stk.length - 1] === "[" && s[i] === "]")
      ) {
        stk.pop();
      } else {
        return false;
      }
    }
  }
  return stk.length === 0;
}

// Time Complexity: O(n), Iteration over the string of size n one time.
// Auxiliary Space: O(n), for the stack.

// ----------------- Without using Stack – O(n) Time and O(1) Space ----------------------

const isVAlid = function (s) {
  var stack = [];
  var len = s.length;
  var map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (var i = 0; i < len; i++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
};


// Time complexity : O(n).
// Space complexity : O(n).
