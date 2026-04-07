/*
You are given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers.
Return the list of integers that are present in each array of nums sorted in ascending order.

Example 1:
Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
Output: [3,4]
Explanation:
The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6]
are 3 and 4, so we return [3,4].

Example 2:
Input: nums = [[1,2,3],[4,5,6]]
Output: []

Constraints:
    1 <= nums.length <= 1000
    1 <= sum(nums[i].length) <= 10^5
    1 <= nums[i][j] <= 1000
    All the values of nums[i] are unique.
*/

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
function intersection(nums) {
    const countMap = new Map();
    for (const arr of nums) {
        for (const num of arr) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
    }
    const result = [];
    for (const [num, count] of countMap) {
        if (count === nums.length) result.push(num);
    }
    return result.sort((a, b) => a - b);
}

// Example usage:
const nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]];
console.log(intersection(nums)); // Output: [3, 4]
