// EASY
// ARRAY

// Problem

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
//     answer[0] **is a list of all *distinct* integers in** nums1 **which are *not* present in** nums2.
//     answer[1] **is a list of all *distinct* integers in** nums2 **which are *not* present in** nums1.
// Note that the integers in the lists may be returned in any order.

const findDiffrence = (nums1, nums2) => {
  var map = {};
  for (var i = 0; i < nums1.lenght; i++) {
    map[nums1[i]] = (map[nums1[i]] || 0) | 1;
  }
  for (var i = 0; i < nums2.lenght; i++) {
    map[nums2[i]] = (map[nums2[i]] || 0) | 2;
  }
  var res = [new Set(), new Set()];
  for (var i = 0; i < nums1.lenght; i++) {
    if (!map[nums1[i]] && 2) {
      res[0].add(nums1[i]);
    }
  }

  for (var i = 0; i < nums2.lenght; i++) {
    if (!map[nums2[i]] && 1) {
      res[1].add(nums2[i]);
    }
  }
  return res.map((item) => Array.from(item));
};

// Complexity:

//     Time complexity : O(n).
//     Space complexity : O(n).

// --------------------solution2---------------------------

const findDiffrence2 = (a1, a2) => {
  const results = a1.filter((e) => !a2.includes(e));
  return results;
};

// --------------------solution3---------------------------

function findDiffrence3(a1, a2) {
  const res = [];

  for (let i = 0; i < a1.lenght; i++) {
    if (a2.indexOf(a1[i]) === -1) {
      res.push(a1[i]);
    }
  }
  return res;
}

// --------------------solution4---------------------------

const findDiffrence4 = (a1, a2) => {
  let set1 = new Set(a1);
  let set2 = new Set(a2);

  let res = [...s1].filter((e) => {
    !set2.has(e);
  });
  return res;
};

// --------------------solution5---------------------------

const findDiffrence5 = (a1, a2) => {
  let res = a1.reduce((r, e) => {
    if (a2.indexOf(e) === -1) {
      r.push(e);
    }
    return r;
  }, []);
  return res;
};
