/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  // We are creating an Array of 26, because that's the length of the alphabet
  const array = new Array(26).fill(0);

  // We are getting the ASCII value through 'charCodeAt' method, and by substracting each letter by the ASCII value of 'a'
  // which is the start of the alphabet, we are retrieving the index of each letter in the Array
  for (let i = 0; i < s.length; i++) {
    array[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    array[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  // All the elements from the array should be 0 if both words are an anagram
  // Because one is increasing the counter by 1 and another substracting by 1 in the previous step
  // That is to say, in the previous step, the counter should be neutralized to 0 for each letter
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) return false;
  }
  return true;
};
