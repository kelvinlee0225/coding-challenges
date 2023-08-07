/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/

var searchInsert = function (nums, target) {
  //We can use Binary Search here

  let leftPointer = 0,
    rightPointer = nums.length - 1;
  let middlePointer;

  while (leftPointer < rightPointer) {
    middlePointer = Math.floor((rightPointer + leftPointer) / 2);

    if (target === nums[middlePointer]) return middlePointer;

    if (target > nums[middlePointer]) leftPointer = middlePointer + 1;
    else rightPointer = middlePointer;
  }
  if (leftPointer === rightPointer)
    return target <= nums[leftPointer] ? leftPointer : rightPointer + 1;
};
