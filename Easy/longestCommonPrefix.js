// EASY
// RelatedTopic : String
// --------------Problem----------------
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  var len1 = strs.length;
  var len2 = strs[0].length;
  var temp = '';
  var res=''
  outer : for(var i =0;i<len2;i++){
    temp = strs[0][i];
     inner:for(var j=1;j<len1;j++){
        if(strs[j][i] !== temp) break outer 
     }
    res += temp
  }
  return res
};

// Complexity:

//     Time complexity : O(n^2).
//     Space complexity : O(1).



// JavaScript program to find the longest common prefix
// using Sorting

function longestCommonPrefix2(arr){
    arr.sort();

    let first = arr[0]
    let last =arr[arr.length-1];
    let minlength = Math.min(first.length,last.length);

    let i=0;

    while(i<minlength && first[i] === last[i]){
        i++
    }

    return first.substring(0,i)

}

// Time Complexity: O(n*m*log n), to sort the array, where n is the number of strings and m is the length of longest string.
// Auxiliary Space: O(m) to store the strings first, last and result.



//-------------------------- Longest Common Prefix using Word by Word Matching
