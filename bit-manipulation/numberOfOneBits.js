/*
Write a function that takes the binary representation of a positive integer and returns the number of
set bits it has (also known as the Hamming weight).

Example 1:
Input: n = 11
Output: 3
Explanation: The input binary representation of 11 is 1011, which has 3 set bits.

Example 2:
Input: n = 128
Output: 1
Explanation: The input binary representation of 128 is 10000000, which has 1 set bit.

Example 3:
Input: n = 2147483645
Output: 30

Constraints:
    1 <= n <= 2^31 - 1
*/

/**
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
    let count = 0;
    while (n !== 0) {
        count += n & 1;
        n >>>= 1; // unsigned right shift
    }
    return count;
}

// Example usage:
console.log(hammingWeight(11));  // Output: 3  (binary: 1011)
console.log(hammingWeight(128)); // Output: 1  (binary: 10000000)
