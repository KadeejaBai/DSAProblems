/*
Given an integer array nums, return the number of reverse pairs in the array.
A reverse pair is a pair (i, j) where 0 <= i < j < nums.length and nums[i] > 2 * nums[j].

Example 1:
Input: nums = [1,3,2,3,1]
Output: 2
Explanation: The reverse pairs are: (1,4) --> nums[1]=3, nums[4]=1, 3 > 2*1; (3,4) --> nums[3]=3, nums[4]=1.

Example 2:
Input: nums = [2,4,3,5,1]
Output: 3

Constraints:
    1 <= nums.length <= 5 * 10^4
    -2^31 <= nums[i] <= 2^31 - 1
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function reversePairs(nums) {
    let count = 0;

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid));

        // Count reverse pairs
        let j = 0;
        for (let i = 0; i < left.length; i++) {
            while (j < right.length && left[i] > 2 * right[j]) j++;
            count += j;
        }

        // Merge step
        const merged = [];
        let l = 0, r = 0;
        while (l < left.length && r < right.length) {
            if (left[l] <= right[r]) merged.push(left[l++]);
            else merged.push(right[r++]);
        }
        return merged.concat(left.slice(l)).concat(right.slice(r));
    }

    mergeSort(nums);
    return count;
}

// Example usage:
const nums = [1, 3, 2, 3, 1];
console.log(reversePairs(nums)); // Output: 2
