/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
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
