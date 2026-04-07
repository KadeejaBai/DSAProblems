/*
Given an encoded string, return its decoded string.
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being
repeated exactly k times. Note that k is guaranteed to be a positive integer.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:
    1 <= s.length <= 30
    s consists of lowercase English letters, digits, and square brackets '[]'.
    s is guaranteed to be a valid input.
    All integers in s are in the range [1, 300].
*/

/**
 * @param {string} s
 * @return {string}
 */
function decodeString(s) {
    const countStack = [];
    const strStack = [];
    let currentStr = '';
    let k = 0;

    for (const ch of s) {
        if (ch >= '0' && ch <= '9') {
            k = k * 10 + parseInt(ch);
        } else if (ch === '[') {
            countStack.push(k);
            strStack.push(currentStr);
            k = 0;
            currentStr = '';
        } else if (ch === ']') {
            const repeat = countStack.pop();
            const prevStr = strStack.pop();
            currentStr = prevStr + currentStr.repeat(repeat);
        } else {
            currentStr += ch;
        }
    }
    return currentStr;
}

// Example usage:
console.log(decodeString("3[a]2[bc]"));   // Output: "aaabcbc"
console.log(decodeString("3[a2[c]]"));    // Output: "accaccacc"
