/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of
choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.
Return the final string after all such duplicate removals have been made.

Example 1:
Input: s = "abbaca"
Output: "ca"
Explanation:
- Remove "bb" → "aaca"
- Remove "aa" → "ca"

Example 2:
Input: s = "azxxzy"
Output: "ay"

Constraints:
    1 <= s.length <= 10^5
    s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
function removeDuplicates(s) {
    const stack = [];
    for (const ch of s) {
        if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.join('');
}

// Example usage:
console.log(removeDuplicates("abbaca")); // Output: "ca"
console.log(removeDuplicates("azxxzy")); // Output: "ay"
