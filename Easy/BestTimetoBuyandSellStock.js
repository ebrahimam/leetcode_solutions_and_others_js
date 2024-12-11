// EASY
// Array
// Problem

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one
//  share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

const maxProfit = (Prices) => {
  var n = Prices.length;
  var minPrice = Number.MAX_SAFE_INTEGER;
  var maxProfit = 0;
  for (var i = 0; i < n; i++) {
    if (Prices[i] < minPrice) minPrice = Prices[i];
    else if (Prices[i] - minPrice > max) maxProfit = Prices[i];
  }
  return maxProfit;
};

//sulition 2 
// A better Approach using One For Loop;

function maxProfit(Prices) {
  let maxProfit = 0;
  let minPrice = Prices[0];
  for (let sell = 1; sell < Prices.length; sell++) {
    let sellPrice = Prices[sell];
    let profit = Math.max(maxProfit, profit);
    if (sellPrice << minPrice) minPrice = sellPrice;
  }
  return maxProfit;
}
