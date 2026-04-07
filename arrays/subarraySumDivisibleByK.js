/*
Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum
divisible by k.

Example 1:
Input: nums = [4,5,0,-2,-3,1], k = 5
Output: 7
Explanation: There are 7 subarrays with a sum divisible by k = 5:
[4,5,0,-2,-3,1], [5], [5,0], [5,0,-2,-3], [0], [0,-2,-3], [-2,-3]

Example 2:
Input: nums = [5], k = 9
Output: 0

Constraints:
    1 <= nums.length <= 3 * 10^4
    -10^4 <= nums[i] <= 10^4
    2 <= k <= 10^4
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysDivByK(nums, k) {
    const remainderCount = new Map();
    remainderCount.set(0, 1);
    let prefixSum = 0;
    let count = 0;

    for (const num of nums) {
        prefixSum += num;
        let remainder = prefixSum % k;
        if (remainder < 0) remainder += k; // Handle negative remainders

        if (remainderCount.has(remainder)) {
            count += remainderCount.get(remainder);
        }
        remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
    }
    return count;
}

// Example usage:
const nums = [4, 5, 0, -2, -3, 1];
const k = 5;
console.log(subarraysDivByK(nums, k)); // Output: 7
