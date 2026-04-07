/*
Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such
that every character in t (including duplicates) is included in the window.
If there is no such substring, return the empty string "".

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

Example 2:
Input: s = "a", t = "a"
Output: "a"

Example 3:
Input: s = "a", t = "aa"
Output: ""

Constraints:
    m == s.length
    n == t.length
    1 <= m, n <= 10^5
    s and t consist of uppercase and lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
    const need = new Map();
    for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1);

    let left = 0, right = 0;
    let formed = 0;
    const required = need.size;
    const window = new Map();
    let minLen = Infinity, minStart = 0;

    while (right < s.length) {
        const ch = s[right++];
        window.set(ch, (window.get(ch) || 0) + 1);
        if (need.has(ch) && window.get(ch) === need.get(ch)) formed++;

        while (formed === required) {
            if (right - left < minLen) { minLen = right - left; minStart = left; }
            const leftCh = s[left++];
            window.set(leftCh, window.get(leftCh) - 1);
            if (need.has(leftCh) && window.get(leftCh) < need.get(leftCh)) formed--;
        }
    }
    return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen);
}

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "aa"));              // Output: ""
