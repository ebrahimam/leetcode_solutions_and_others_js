// EASY 
// MATH


// Problem

// Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
// He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put 
// in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
// Given n, return **the total amount of money he will have in the Leetcode bank at the end of the *nth* day.**


const totalMoney = ()=>{
    var weeks = Math.floor(n/7);
    var lastWeekDays = n%7;
    var sumOWeeks = (4+4+weeks-1)*7*weeks/2;
    var sumOfLastDays = Array(lastWeekDays).fill(0).reduce((sum,_,i)=>{
        return sum +(i+1)+weeks
    })
    return sumOWeeks +sumOfLastDays;
}


// Complexity:

//     Time complexity : O(1).
//     Space complexity : O(1).
