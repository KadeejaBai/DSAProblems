/*
Given an integer array nums, you need to find one continuous subarray such that if you only sort this
subarray in non-decreasing order, then the whole array will be sorted in non-decreasing order.
Return the shortest such subarray and output its length.

Example 1:
Input: nums = [2,6,4,8,10,9,15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted.

Example 2:
Input: nums = [1,2,3,4]
Output: 0

Example 3:
Input: nums = [1]
Output: 0

Constraints:
    1 <= nums.length <= 10^4
    -10^5 <= nums[i] <= 10^5

Follow up: Can you solve it in O(n) time complexity?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findUnsortedSubarray(nums) {
    const n = nums.length;
    let maxSeen = -Infinity;
    let right = -1;

    // Find the rightmost element that is less than max from left
    for (let i = 0; i < n; i++) {
        if (nums[i] < maxSeen) right = i;
        else maxSeen = nums[i];
    }

    let minSeen = Infinity;
    let left = 0;

    // Find the leftmost element that is greater than min from right
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > minSeen) left = i;
        else minSeen = nums[i];
    }

    return right === -1 ? 0 : right - left + 1;
}

// Example usage:
const nums = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(nums)); // Output: 5
