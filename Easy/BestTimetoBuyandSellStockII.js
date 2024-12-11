// EASY
// Array
// Problem

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one
//  share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

const maxProfit = (Prices) => {
  var max = 0;
  var len = Prices.length;
  for (var i = 0; i < len; i++) {
    if (Prices[i] > Prices[i - 1]) max += Prices[i] - Prices[i - 1];
  }
  return max;
};


// Time complexity : O(n).
// Space complexity : O(1).
