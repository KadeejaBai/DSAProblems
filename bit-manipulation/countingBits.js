/*
Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
ans[i] is the number of 1's in the binary representation of i.

Example 1:
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Example 2:
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

Constraints:
    0 <= n <= 10^5

Follow up: Can you do it in linear time O(n) using only a single pass?
*/

/**
 * @param {number} n
 * @return {number[]}
 */
function countBits(n) {
    const ans = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        // ans[i] = ans[i >> 1] + (i & 1)
        // The number of bits in i = bits in i/2 + last bit
        ans[i] = ans[i >> 1] + (i & 1);
    }
    return ans;
}

// Example usage:
console.log(countBits(2)); // Output: [0, 1, 1]
console.log(countBits(5)); // Output: [0, 1, 1, 2, 1, 2]
