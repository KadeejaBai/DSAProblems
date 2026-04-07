/*
Given a string s of '(' , ')' and lowercase English characters, remove the minimum number of parentheses
( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

A parentheses string is valid if and only if:
- It is the empty string, contains only lowercase characters, or
- It can be written as AB (A concatenated with B), where A and B are valid strings, or
- It can be written as (A), where A is a valid string.

Example 1:
Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"

Example 2:
Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:
Input: s = "))(("
Output: ""

Constraints:
    1 <= s.length <= 10^5
    s[i] is either '(' , ')' or lowercase English letter.
*/

/**
 * @param {string} s
 * @return {string}
 */
function minRemoveToMakeValid(s) {
    const arr = s.split('');
    const stack = []; // indices of unmatched '('

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push(i);
        } else if (arr[i] === ')') {
            if (stack.length > 0) {
                stack.pop(); // matched
            } else {
                arr[i] = ''; // remove unmatched ')'
            }
        }
    }

    // Remove unmatched '('
    for (const idx of stack) arr[idx] = '';
    return arr.join('');
}

// Example usage:
console.log(minRemoveToMakeValid("lee(t(c)o)de)")); // Output: "lee(t(c)o)de"
console.log(minRemoveToMakeValid("))((" ));           // Output: ""
