/*
Given an integer n, return true if it is a power of two. Otherwise, return false.
An integer n is a power of two, if there exists an integer x such that n == 2^x.

Example 1:
Input: n = 1
Output: true
Explanation: 2^0 = 1

Example 2:
Input: n = 16
Output: true
Explanation: 2^4 = 16

Example 3:
Input: n = 3
Output: false

Constraints:
    -2^31 <= n <= 2^31 - 1

Follow up: Could you solve it without loops/recursion?
*/

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
    // A power of two has exactly one bit set.
    // n & (n-1) removes the lowest set bit.
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
}

// Example usage:
console.log(isPowerOfTwo(1));  // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3));  // Output: false
console.log(isPowerOfTwo(0));  // Output: false
