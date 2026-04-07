/*
Given a string containing just the characters '(' and ')', return the length of the longest valid
(well-formed) parentheses substring.

Example 1:
Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:
Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:
Input: s = ""
Output: 0

Constraints:
    0 <= s.length <= 3 * 10^4
    s[i] is '(' or ')'.
*/

/**
 * @param {string} s
 * @return {number}
 */
function longestValidParentheses(s) {
    const stack = [-1]; // base index
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i); // new base
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLen;
}

// Example usage:
console.log(longestValidParentheses("(()"));    // Output: 2
console.log(longestValidParentheses(")()())")); // Output: 4
