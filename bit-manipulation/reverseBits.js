/*
Reverse bits of a given 32 bits unsigned integer.

Example 1:
Input: n = 43261596 (binary: 00000010100101000001111010011100)
Output: 964176192 (binary: 00111001011110000010100101000000)

Example 2:
Input: n = 4294967293 (binary: 11111111111111111111111111111101)
Output: 3221225471 (binary: 10111111111111111111111111111111)

Constraints:
    The input must be a binary string of length 32.

Follow up: If this function is called many times, how would you optimize it?
*/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
function reverseBits(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result = (result * 2) + (n & 1);
        n >>>= 1;
    }
    return result >>> 0; // ensure unsigned 32-bit
}

// Example usage:
console.log(reverseBits(43261596));   // Output: 964176192
console.log(reverseBits(0));          // Output: 0
