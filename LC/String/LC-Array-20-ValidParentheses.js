/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

var isValid = function (s) {
  const map = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  let temp = "";
  const values = [...map.values()];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      temp += s[i];
      continue;
    } else {
      if (temp.length < 1 && values.includes(s[i])) return false;
      if (s[i] !== map.get(temp[temp.length - 1])) return false;
      temp = temp.substring(0, temp.length - 1);
    }
  }
  if (temp.length > 0) return false;
  return true;
};
