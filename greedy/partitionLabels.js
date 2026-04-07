/*
You are given a string s. We want to partition the string into as many parts as possible so that each
letter appears in at most one part. Return a list of integers representing the size of these parts.

Example 1:
Input: s = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation: The partition is "ababcbaca", "defegde", "hijhklij".

Example 2:
Input: s = "eccbbbbdec"
Output: [10]

Constraints:
    1 <= s.length <= 500
    s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number[]}
 */
function partitionLabels(s) {
    // Record the last occurrence of each character
    const lastIndex = {};
    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    const result = [];
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        end = Math.max(end, lastIndex[s[i]]);
        if (i === end) {
            result.push(end - start + 1);
            start = end + 1;
        }
    }
    return result;
}

// Example usage:
const s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s)); // Output: [9, 7, 8]
