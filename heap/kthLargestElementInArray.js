/*
Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

Constraints:
    1 <= k <= nums.length <= 10^5
    -10^4 <= nums[i] <= 10^4
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
    // Quickselect algorithm
    function partition(left, right, pivotIdx) {
        const pivot = nums[pivotIdx];
        [nums[pivotIdx], nums[right]] = [nums[right], nums[pivotIdx]];
        let storeIdx = left;
        for (let i = left; i < right; i++) {
            if (nums[i] > pivot) {
                [nums[storeIdx], nums[i]] = [nums[i], nums[storeIdx]];
                storeIdx++;
            }
        }
        [nums[storeIdx], nums[right]] = [nums[right], nums[storeIdx]];
        return storeIdx;
    }

    function quickselect(left, right, kSmallest) {
        if (left === right) return nums[left];
        const pivotIdx = Math.floor(Math.random() * (right - left + 1)) + left;
        const pos = partition(left, right, pivotIdx);
        if (kSmallest === pos) return nums[pos];
        else if (kSmallest < pos) return quickselect(left, pos - 1, kSmallest);
        else return quickselect(pos + 1, right, kSmallest);
    }

    return quickselect(0, nums.length - 1, k - 1);
}

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));            // Output: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));  // Output: 4
